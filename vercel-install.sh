#!/usr/bin/env bash
set -e

# Create ssh directory and set up private keys from Vercel environment variables
mkdir -p ~/.ssh
echo "$GIT_SSH_KEY_UI_KIT" > ~/.ssh/key1
echo "$GIT_SSH_KEY_TOKEN" > ~/.ssh/key2
chmod 600 ~/.ssh/key1 ~/.ssh/key2

# Add GitHub to known hosts and start SSH agent
ssh-keyscan -H github.com >> ~/.ssh/known_hosts 2>/dev/null
eval $(ssh-agent -s)
ssh-add ~/.ssh/key1 ~/.ssh/key2

# Install dependencies using the loaded SSH keys
npm install
