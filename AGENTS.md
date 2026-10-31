## Engineering standards

Follow Nathan's engineering standards (in `~/.codex/AGENTS.md` and `~/.claude/CLAUDE.md`):

- Start from a GitHub issue in a milestone; create both if missing.
- Branch `<issue#>-short-slug`; never commit straight to the default branch (it is protected).
- Open a small PR whose body says `Closes #N`; use the PR template.
- Tests and CI pass before merge; update README/docs and this file when commands or structure change.
- No secrets, `.env`, data, build outputs or files over 50 MB in git. Never force-push or rewrite history.

## Public-only source contract

- npm test; npm run check; npm run build. Node22+, no dependencies.
- This entire source tree may be packaged for the public Site source repository. Never copy private planner sources/history, local SOPs, access records, correspondence or private evidence paths here.
- Each claim needs sourceIds resolving to a source URL and section; quantitative claims need units and configuration/conditions. Gaps remain explicit. Driver support does not establish hardware or assay validity.
- dist/ is generated and ignored. Build scans every deployed asset for private markers. Retain full upstream MIT notices in downloadable records and THIRD_PARTY_NOTICES.md.
