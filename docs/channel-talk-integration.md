# Channel Talk Integration

## What was implemented

This project includes a minimal Channel Talk website widget integration for practice use.

- Anonymous visitor boot only
- Client-side loading only
- Opt-in via public environment variables
- Single global mount in the app root
- No member authentication or backend coupling

## Where the code lives

- `components/integrations/channel-talk/channel-talk-loader.tsx`
- `components/integrations/channel-talk/config.ts`
- `app/layout.tsx`

## Required env vars

Add these to your local `.env.local` or Vercel project settings:

```env
NEXT_PUBLIC_CHANNEL_TALK_ENABLED=false
NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY=eab3e353-2bf3-4851-bb95-db828268b788
```

## How to enable it

1. Set `NEXT_PUBLIC_CHANNEL_TALK_ENABLED=true`
2. Make sure `NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY` is present
3. Restart the local dev server or trigger a fresh deployment

Once enabled, the widget loads without further code changes.

## How to disable it

1. Set `NEXT_PUBLIC_CHANNEL_TALK_ENABLED=false`
2. Redeploy or restart the app

When disabled, the site behaves exactly as before and the loader exits early.

## How to remove it later

1. Remove the `ChannelTalkLoader` mount from `app/layout.tsx`
2. Delete `components/integrations/channel-talk/`
3. Remove the two `NEXT_PUBLIC_CHANNEL_TALK_*` variables from project configuration
4. Remove `@channel.io/channel-web-sdk-loader` from `package.json`

## What was intentionally left out

This first practice version does not include:

- `memberId`
- `memberHash`
- secret/access-secret usage
- profile sync
- backend endpoints
- custom event tracking
- workflow-specific open logic

## Security and scope note

Secret-key or member-hash-based integration was intentionally excluded in this pass for security and scope reasons. Only the public plugin key is used, and it is wired through public env vars rather than hardcoded application logic.

## CSP note

The current portfolio does not define a custom Content Security Policy. If CSP is added later, update it using Channel Talk's official CSP guidance:

- https://developers.channel.io/docs/content-security-policy
