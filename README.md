# Cloudflare Flask + Playwright Container - Fixed

Workers Builds:
Build command: npm install
Deploy command: npx wrangler deploy

The Worker name is `deployment` to match a Workers Builds project named deployment.
The Docker image installs Chromium during deployment, so the first build can take several minutes.
