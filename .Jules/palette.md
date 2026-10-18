## 2024-05-19 - Clear States for Disabled Buttons
**Learning:** Users often get confused or frustrated when disabled buttons still show hover animations but do nothing when clicked. Without tooltips, they also don't know *why* a button is disabled.
**Action:** Always add `:not(:disabled)` to hover effects. Give disabled buttons distinct visual styles (`opacity: 0.6`, `cursor: not-allowed`) and add dynamic `title` attributes (tooltips) that explain why the button is disabled and how to enable it.
