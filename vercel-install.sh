#!/usr/bin/env bash
set -e

# Create ssh directory and set up private keys from Vercel environment variables
mkdir -p ~/.ssh
echo "$GIT_SSH_KEY_UI_KIT" > ~/.ssh/key1
echo "$GIT_SSH_KEY_TOKEN" > ~/.ssh/key2
chmod 600 ~/.ssh/key1 ~/.ssh/key2

# Configure SSH to never fail on host key verification in ephemeral CI containers
cat << 'EOF' > ~/.ssh/config
Host *
  StrictHostKeyChecking no
  UserKnownHostsFile /dev/null
  LogLevel ERROR
EOF
chmod 600 ~/.ssh/config

# Create a smart SSH wrapper script that inspects the git argument and routes the exact key
cat << 'EOF' > ~/.ssh/smart-ssh.sh
#!/usr/bin/env bash
if [[ "$*" == *"jmo-ui-kit"* ]]; then
  exec ssh -i ~/.ssh/key1 -o IdentitiesOnly=yes -o StrictHostKeyChecking=no "$@"
elif [[ "$*" == *"jmo-design-tokens"* ]]; then
  exec ssh -i ~/.ssh/key2 -o IdentitiesOnly=yes -o StrictHostKeyChecking=no "$@"
else
  exec ssh -o StrictHostKeyChecking=no "$@"
fi
EOF
chmod +x ~/.ssh/smart-ssh.sh

# Export GIT_SSH_COMMAND so Git forces the exact key for each repository
export GIT_SSH_COMMAND="~/.ssh/smart-ssh.sh"

# Install dependencies cleanly
npm install
