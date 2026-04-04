#!/bin/bash

# Exit on any error
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📀 Extracting music metadata...${NC}"

# Run exiftool command
exiftool -json -Title -Artist -InitialKey -BeatsPerMinute ~/Music/Music\ Library/Music\ For\ DJing > music-library.json

# Check if the command was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Metadata extracted successfully to music-library.json${NC}"
else
    echo -e "${RED}✗ Failed to extract metadata${NC}"
    exit 1
fi

# Check if there are changes to commit
if git diff --quiet && git diff --cached --quiet; then
    echo -e "${YELLOW}ℹ No changes to commit${NC}"
else
    echo -e "${YELLOW}📝 Changes detected, committing...${NC}"
    
    # Add the file to git
    git add music-library.json
    
    # Commit with timestamp
    git commit -m "Update music library metadata $(date '+%Y-%m-%d %H:%M:%S')"
    
    echo -e "${GREEN}✓ Changes committed${NC}"
fi

# Get current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo -e "${YELLOW}🚀 Pushing to remote (branch: $CURRENT_BRANCH)...${NC}"

# Push to remote
git push origin $CURRENT_BRANCH

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Successfully pushed to remote${NC}"
else
    echo -e "${RED}✗ Failed to push to remote${NC}"
    exit 1
fi

echo -e "${GREEN}✅ All done!${NC}"