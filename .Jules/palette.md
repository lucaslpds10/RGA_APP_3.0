## 2026-11-03 - Conditional Focus for Hybrid Functions
**Learning:** Adding UX side-effects like `.focus()` to hybrid functions (used for both manual interactions and bulk data loads/imports) can cause severe accessibility and usability regressions (e.g., focus-stealing) if triggered during bulk operations.
**Action:** Always conditionally execute UI side-effects in hybrid functions (e.g., check `isManualOperation` or similar flag) to ensure they only happen during direct user interaction.
