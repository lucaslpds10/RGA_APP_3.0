## 2023-10-24 - Disabled Button UX and Accessibility
**Learning:** In vanilla HTML/JS projects without complex frameworks, handling disabled state UX requires careful combination of CSS (`:not(:disabled):hover`, `:disabled`, `:focus-visible`) and JS (dynamic `title` updates for screen readers and tooltips). This ensures both visual clarity and accessibility context for why an action is blocked.
**Action:** When styling buttons in plain HTML apps, always include `:focus-visible` for keyboard navigation and `:disabled` specific rules to separate active/inactive visual states.
