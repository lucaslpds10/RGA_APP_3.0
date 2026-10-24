## 2024-05-24 - Conditional Auto-Focus in Multi-Purpose Functions
**Learning:** Adding auto-focus to newly created DOM elements is great for manual interactions (like clicking "Add Row"), but it causes focus-stealing regressions if the same function is used for automated/batch processes (like importing data).
**Action:** When adding UX improvements like auto-focus to element creation functions, always check if the function is used programmatically elsewhere. Use existing state variables (like `salvar` flag) to conditionally apply the UX enhancement only during manual user interaction.
