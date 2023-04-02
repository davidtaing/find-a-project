pnpm build:cms
pnpm deploy:cms

# output environment variables to file
cd apps/cms && env | grep CMS_SESSION_SECRET >> .env