
## 2026-10-15 - Disabled button styling and tooltip
**Learning:** By default, HTML disabled buttons lack sufficient visual feedback for screen readers or standard users to understand *why* they are disabled. Additionally, they sometimes inherit hover effects that can be confusing if the button isn't actually clickable.
**Action:** Always include a visual state (like opacity and not-allowed cursor) for disabled buttons, remove pointer events and hover animations, and use `title` or `aria-disabled`/`aria-describedby` to explain the condition for re-enabling them (e.g. on the "Restaurar Lista" button).
