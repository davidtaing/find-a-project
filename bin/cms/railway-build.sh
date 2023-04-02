pnpm build:cms
pnpm deploy:cms

# output environment variables to file
cd apps/cms && env | grep -e CMS_ >> .env