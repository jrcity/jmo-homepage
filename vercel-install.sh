#!/usr/bin/env bash
set -e

# Create ssh directory and set up private keys from Vercel environment variables
mkdir -p ~/.ssh

# Normalize key headers (in case there are spaces like '----- BEGIN OPENSSH PRIVATE KEY -----')
echo "$GIT_SSH_KEY_UI_KIT" | sed 's/----- *BEGIN /-----BEGIN /g; s/----- *END /-----END /g; s/ *-----/-----/g' > ~/.ssh/key1
echo "$GIT_SSH_KEY_TOKEN" | sed 's/----- *BEGIN /-----BEGIN /g; s/----- *END /-----END /g; s/ *-----/-----/g' > ~/.ssh/key2
chmod 600 ~/.ssh/key1 ~/.ssh/key2

# Add GitHub to known hosts
ssh-keyscan -H github.com >> ~/.ssh/known_hosts 2>/dev/null

# Create a smart SSH wrapper script that inspects the git argument and routes the exact key
cat << 'EOF' > ~/.ssh/smart-ssh.sh
#!/usr/bin/env bash
if [[ "$*" == *"jmo-ui-kit"* ]]; then
  exec ssh -i ~/.ssh/key1 -o IdentitiesOnly=yes "$@"
elif [[ "$*" == *"jmo-design-tokens"* ]]; then
  exec ssh -i ~/.ssh/key2 -o IdentitiesOnly=yes "$@"
else
  exec ssh "$@"
fi
EOF
chmod +x ~/.ssh/smart-ssh.sh

# Export GIT_SSH_COMMAND so Git forces the exact key for each repository
export GIT_SSH_COMMAND="~/.ssh/smart-ssh.sh"

# Install dependencies cleanly
npm install
