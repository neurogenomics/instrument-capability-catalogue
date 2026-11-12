## Engineering standards

Follow Nathan's engineering standards (in `~/.codex/AGENTS.md` and `~/.claude/CLAUDE.md`):

- Start from a GitHub issue in a milestone; create both if missing.
- Branch `<issue#>-short-slug`; never commit straight to the default branch (it is protected).
- Open a small PR whose body says `Closes #N`; use the PR template.
- Tests and CI pass before merge; update README/docs and this file when commands or structure change.
- No secrets, `.env`, data, build outputs or files over 50 MB in git. Never force-push or rewrite history.

## Public-only source contract

- npm test; npm run check; npm run build. Node22+, no dependencies. The verify job uses the existing isolated `lab-sandbox` runner for same-repository work and read-only repository permissions.
- This entire source tree may be packaged for the public Site source repository. Never copy private planner sources/history, local SOPs, access records, correspondence or private evidence paths here.
- Each claim needs sourceIds resolving to a source URL and section; quantitative claims need units and configuration/conditions. Gaps remain explicit. Driver support does not establish hardware or assay validity.
- dist/ is generated and ignored. Build scans every deployed asset for private markers. Retain full upstream MIT notices in downloadable records and THIRD_PARTY_NOTICES.md.

## Integration and economics

`content/integration.js` and `content/procurement.js` contain public-source evidence only. Never admit private correspondence or quote amounts, names or offers. Price observations require a date, currency and source, exact condition and stated price basis. Record stock/orderability separately. Do not sum incompatible configurations, bundles, currencies or unknown installation/service costs. Preserve upstream driver scope and hardware-testing flags; no inferred ease or full-module coverage. JSON/CSV exports must include new fields and source references.

`content/madsci.js` holds independently sourced MADSci links, not PyLabRobot support or proof of device operation. Match models only where the upstream evidence supports it; other records remain `not-assessed`. Keep those unknowns out of source-specific search matches, and preserve the integration evidence in details and JSON/CSV exports.

## Public facility discovery

`content/roar-discovery.js` holds dated public Imperial reports and the crosswalk from lead IDs to stable Atlas model IDs. A lead identifies a reported role or group, not a verified asset. Keep ambiguous identities, configurations and conflicts explicit; never use facility statements as manufacturer claims or extend a shared limit to one model. `content/roar-models.js` contains exact manufacturer references; new model records remain planning `unassessed` and control `unknown`. The browser's ROAR view and both crosswalk exports carry the reporting boundaries. The built `roar-discovery.json` carries both crosswalk and model catalogue version information.
