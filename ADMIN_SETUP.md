# Secure admin setup

The admin API keeps its password and signing secret in Vercel environment variables. Neither secret belongs in this repository, a browser, or a committed `.env` file.

## Connect persistent settings storage

1. In the Vercel project for `sktransportdeoband`, open **Storage** and create a **private Blob** store.
2. Connect the store to this project and enable the **Production** environment. Enable **Preview** only if preview deployments should share the same settings.
3. Vercel supplies the Blob store ID and short-lived OIDC credentials to the connected deployment. Do not expose or copy these into client-side code.

## Configure private admin credentials

In **Project → Settings → Environment Variables**, add these for **Production**:

- `ADMIN_PASSWORD`: use a fresh password of at least 14 characters. The password previously shared in chat should not be reused.
- `ADMIN_SESSION_SECRET`: generate a private random secret locally with `node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"` and add its output as the value.
- `ADMIN_USERNAME` (optional): defaults to `admin`.

Do not paste the password or generated session secret into source files, GitHub, chat, or the browser console. Vercel stores project environment variables as deployment secrets.

After connecting storage and adding variables, redeploy the latest production commit. Then open `/admin.html`, log in, save a small test change, and check the public homepage in a private/incognito window. Admin settings are stored in private Blob and served to all visitors from `/api/settings`.

## What is protected

- The admin password is checked only in a Vercel Function. It is never sent to or stored in website JavaScript or local storage.
- Successful login creates an eight-hour, HTTP-only, secure, same-site cookie.
- Settings writes require that session and a same-origin request; login attempts are rate-limited per function instance.
- Public website settings are readable without login, but the private Blob and all write operations are not.

If the environment variables or connected Blob store are absent, the admin API fails closed and displays a configuration error rather than saving changes only in one browser.
