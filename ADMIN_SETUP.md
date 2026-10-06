# S K Transport admin access

## Sign in

Open the [Admin login page](https://sktransportdeoband.vercel.app/admin.html).

- Username: `admin`
- The current password is in the local, Git-ignored `ADMIN_CREDENTIALS.txt` file in the project folder. Keep it private and do not email it, upload it, or commit it.

The password was generated privately and is stored by Vercel as a Production Secret. It is not stored in website JavaScript, the browser, or GitHub. If the local credentials file is lost, change `ADMIN_PASSWORD` in the Vercel dashboard and redeploy; the previous password will stop working.

## Change the password

1. Open [Vercel project environment variables](https://vercel.com/hsaini/sktransportdeoband/settings/environment-variables).
2. Edit `ADMIN_PASSWORD` for **Production**. Use a new password of at least 14 characters.
3. Redeploy the project for the change to take effect.
4. Update the local `ADMIN_CREDENTIALS.txt` file with the new password and keep it private.

Do not reuse the password previously shared in chat.

## Shared admin and security

- A private Vercel Blob store connected to the Production project holds shared site settings. Admin changes are available to all site visitors.
- `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, and the Blob access token are Vercel Production Secrets; none are committed to GitHub.
- The API checks the password server-side and issues an eight-hour HTTP-only session cookie.
- Settings writes require a valid session and a same-origin request. Unauthenticated writes are rejected.
- Public settings are readable without login so the website can render the business details, fleet, menu, and routes.
