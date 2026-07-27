#!/usr/bin/env bash
set -e

# Create ssh directory and set up private keys from Vercel environment variables
mkdir -p ~/.ssh
echo "$GIT_SSH_KEY_UI_KIT" > ~/.ssh/key1
echo "$GIT_SSH_KEY_TOKEN" > ~/.ssh/key2
chmod 600 ~/.ssh/key1 ~/.ssh/key2

# Add GitHub to known hosts
ssh-keyscan -H github.com >> ~/.ssh/known_hosts 2>/dev/null

# Configure SSH Host aliases so each repo uses its own specific Deploy Key strictly
cat << 'EOF' > ~/.ssh/config
Host github.com-uikit
  HostName github.com
  User git
  IdentityFile ~/.ssh/key1
  IdentitiesOnly yes

Host github.com-token
  HostName github.com
  User git
  IdentityFile ~/.ssh/key2
  IdentitiesOnly yes
EOF
chmod 600 ~/.ssh/config

# Configure git to route each private repo to its dedicated SSH alias
git config --global url."git@github.com-uikit:JMO-BIZHUB/jmo-ui-kit".insteadOf "ssh://git@github.com/JMO-BIZHUB/jmo-ui-kit"
git config --global url."git@github.com-uikit:JMO-BIZHUB/jmo-ui-kit".insteadOf "git+ssh://git@github.com/JMO-BIZHUB/jmo-ui-kit"
git config --global url."git@github.com-token:JMO-BIZHUB/jmo-design-tokens".insteadOf "ssh://git@github.com/JMO-BIZHUB/jmo-design-tokens"
git config --global url."git@github.com-token:JMO-BIZHUB/jmo-design-tokens".insteadOf "git+ssh://git@github.com/JMO-BIZHUB/jmo-design-tokens"

# Install dependencies cleanly
npm install
