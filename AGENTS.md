## Engineering standards

Follow Nathan's engineering standards (in `~/.codex/AGENTS.md` and `~/.claude/CLAUDE.md`):

- Start from a GitHub issue in a milestone; create both if missing.
- Branch `<issue#>-short-slug`; never commit straight to the default branch (it is protected).
- Open a small PR whose body says `Closes #N`; use the PR template.
- Tests and CI pass before merge; update README/docs and this file when commands or structure change.
- No secrets, `.env`, data, build outputs or files over 50 MB in git. Never force-push or rewrite history.

## Public-only source contract

- npm ci --ignore-scripts; npm test; npm run check; npm run build. Node 22+. Ajv and formats are locked test dependencies. The public runtime and build are dependency-free. The verify job uses the existing isolated `lab-sandbox` runner for same-repository work and read-only repository permissions.
- This entire source tree may be packaged for the public Site source repository. Never copy private planner sources/history, local SOPs, access records, correspondence or private evidence paths here.
- Each claim needs sourceIds resolving to a source URL and section; quantitative claims need units and configuration/conditions. Gaps remain explicit. Driver support does not establish hardware or assay validity.
- dist/ is generated and ignored. Build scans every deployed asset for private markers. Retain full upstream MIT notices in downloadable records and THIRD_PARTY_NOTICES.md.

## Integration and economics

`content/integration.js` and `content/procurement.js` contain public-source evidence only. Never admit private correspondence or quote amounts, names or offers. Price observations require a date, currency and source, exact condition and stated price basis. Record stock/orderability separately. Do not sum incompatible configurations, bundles, currencies or unknown installation/service costs. Preserve upstream driver scope and hardware-testing flags; no inferred ease or full-module coverage. JSON/CSV exports must include new fields and source references.

`content/madsci.js` holds independently sourced MADSci links, not PyLabRobot support or proof of device operation. Match models only where the upstream evidence supports it; other records remain `not-assessed`. Keep those unknowns out of source-specific search matches, and preserve the integration evidence in details and JSON/CSV exports.

## Public facility discovery

`content/roar-discovery.js` holds dated public Imperial reports and the crosswalk from lead IDs to stable Atlas model IDs. A lead identifies a reported role or group, not a verified asset. Keep ambiguous identities, configurations and conflicts explicit; never use facility statements as manufacturer claims or extend a shared limit to one model. `content/roar-models.js` contains exact manufacturer references; new model records remain planning `unassessed` and control `unknown`. The browser's ROAR view and both crosswalk exports carry the reporting boundaries. The built `roar-discovery.json` carries both crosswalk and model catalogue version information.

## C11 model identity export

`scripts/instrument-model-export.mjs` projects the reviewed ROAR-linked Atlas IDs into versioned shared InstrumentModel records and an exact manifest. The checked-in revision digests guard against replacing a published revision. A successor needs a new revision and the exact parent pin. Preserve the prior bundle and existing Atlas URLs and exports. Use dated OEM discovery links and explicit field loss. Unknown assessment or republication rights stay unknown and supply no C11 reference facts. The pinned Agentic Lab schemas and synthetic vectors in `tests/fixtures/c11/` belong to private test sources and are excluded from public packages.

## Molecular biology equipment

Maintain reviewed profiles in `content/bench-equipment.js`. Reuse existing model IDs when the identity matches. Keep the acquisition route distinct from evidence of physical loading, software control and data export. The November 12 catalogue projection supplies the historical C11 release.
