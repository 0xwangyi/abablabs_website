# Contact Email UX Notes

This note records the contact email issue found on the ABAB Labs website and the implementation pattern to reuse in other projects.

## Core Lesson

An email CTA should not only look clickable. It must give the user a clear, visible next step after click.

`mailto:` links are valid HTML, but they depend on the user's browser or operating system having a default mail client configured. Many users do not have Apple Mail, Outlook, or a Gmail handler set up. In that case, clicking the email may appear to do nothing, which makes the site feel unfinished.

## Recommended Pattern

For important public websites, do not rely only on `mailto:`.

Use one of these patterns:

1. Lightweight version:
   - Use a web compose URL, such as Gmail compose.
   - Keep the plain email address visible in the footer.

2. Production version:
   - Add a contact form.
   - Send email through a backend route and an email provider such as Resend, Postmark, or SendGrid.
   - Keep the plain email address visible as a fallback.

## ABAB Labs Implementation

The ABAB Labs site uses a Gmail compose URL:

```ts
export const contactEmail = 'support@abablabs.com'

export const contactEmailHref =
  'https://mail.google.com/mail/?view=cm&fs=1&to=support%40abablabs.com'
```

Clicking the contact CTA now takes the user to Gmail's compose flow. If the user is not signed in, Gmail shows its sign-in page. This is still better than a silent `mailto:` failure because the user sees an intentional next step.

## Component Rule

Email, phone, and external URL buttons should render as native anchor tags:

```tsx
<a href={contactEmailHref} aria-label={`Email ABAB Labs at ${contactEmail}`}>
  {contactEmail}
</a>
```

Do not implement these CTAs as fake buttons with inert click handlers.

## Target Behavior

- The CTA must be visibly clickable.
- The click must navigate or open an obvious contact flow.
- The visible label should match the actual contact destination.
- The footer email should remain visible as a fallback.
- Avoid opening critical contact CTAs in a new tab if browser behavior may make the action feel blocked or invisible.

## When To Use `mailto:`

`mailto:` is acceptable for low-stakes sites, internal tools, or secondary fallback links.

For investor-facing, customer-facing, legal, or immigration-facing websites, use a more reliable contact path.

## Best Long-Term Solution

For a serious company website, the most reliable contact experience is:

- Contact form
- Backend API route
- Email delivery provider
- Success and error states
- Spam protection
- Footer email fallback

This removes dependence on the user's local mail client and creates a clear, controlled contact experience.

## Reuse Checklist

- Centralize the contact email in one config file.
- Do not hard-code the email across multiple pages.
- Use a real `<a href>` for contact links.
- Verify the CTA in a browser, not only by inspecting code.
- Test logged-out behavior if using Gmail compose.
- Keep a plain email address visible in the footer.
- Consider a full contact form for high-trust company websites.
