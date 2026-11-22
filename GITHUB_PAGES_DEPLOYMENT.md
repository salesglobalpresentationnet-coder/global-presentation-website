# GitHub Pages deployment — Global Presentation

This project is configured to export as a static Next.js site and deploy through GitHub Actions.

## Before publishing

Review `VERIFICATION_CHECKLIST.md`. It warns that company information, trust metrics, project/client references, and image permissions need confirmation before publication.

The contact form currently only displays a browser alert; it does **not** deliver enquiries to an email address or database. Connect a form service/backend before relying on it for leads.

## Deploy

1. Create a GitHub repository and upload the contents of this project (the files inside this folder, not the containing folder itself).
2. Commit the files to the `main` branch.
3. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Open the **Actions** tab. The workflow named **Deploy Next.js site to GitHub Pages** will run after the push. Wait for it to complete successfully.
5. In **Settings → Pages → Custom domain**, enter `globalpresentation.net` and click **Save**. GitHub recommends adding the custom domain in repository settings before changing DNS.
6. Configure the GoDaddy DNS records below. With a custom GitHub Actions publishing workflow, GitHub does not require a `CNAME` file in the build artifact; the domain is configured in Pages settings.
7. After DNS has propagated and GitHub has issued the TLS certificate, enable **Enforce HTTPS** in **Settings → Pages**.

## GoDaddy DNS for the apex and www hostnames

In GoDaddy DNS (only if GoDaddy is the active DNS provider), configure:

| Type | Host | Points to |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with the owner of the repository (or the GitHub Pages organization account). Do not include the repository name in this CNAME target.

Remove only conflicting website DNS records for `@` and `www` that point to the old Vercel deployment. Do not remove MX, TXT, or other records used for email or domain verification. Check for conflicting `AAAA` records at `@`; remove stale values or use GitHub's current IPv6 Pages addresses if configuring IPv6:

- 2606:50c0:8000::153
- 2606:50c0:8001::153
- 2606:50c0:8002::153
- 2606:50c0:8003::153

DNS changes can take up to 24 hours to propagate.

## Notes

- This is a static export. Features that need a running Next.js server (API routes, server actions, request-time cookies/headers, middleware, ISR, etc.) cannot run on GitHub Pages.
- The project detail route is statically generated from `src/content/projects.json`. New project entries should have a unique slug and be committed so the workflow can rebuild the site.
- Since the custom domain is the site root, do not set a Next.js `basePath`.
