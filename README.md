# Instrument Atlas

Standalone public laboratory instrument catalogue: capabilities, heads and modules, configuration-specific limits, manufacturer references and explicit gaps. Software integration registry entries are kept in a separate discovery layer.

This repository and its deployment contain only public instrument reference material. There are no local protocols, installation inventories, access arrangements, correspondence or unpublished methods. The source repository is private under the lab's repository policy; the catalogue website is public.

## Run and verify

Node 22+, no package dependencies:

```sh
npm test
npm run check
npm run build
python3 -m http.server 8766 --directory dist
```

`web/` contains the standalone UI; `lib/catalogue.js` composes the reference and manufacturer evidence; `content/` contains public-only authored records and pinned discovery metadata. `scripts/build.mjs` packages only those assets and scans every output file for private markers. Generated `dist/` is ignored. Tests cover evidence references, quantities/conditions, attribution and separation of private records.

## Evidence and reuse

Each claim identifies an operation and its native, optional or external origin, with a source and section. Numerical limits require configuration or conditions. Gaps include specifications not extracted, inaccessible documents and unverified combinations. Manufacturer-stated performance is not an independently measured result.

`content/coverage-2026-11.js` (#9) adds 33 curated records: high-end and bench liquid handlers, nanolitre dispensers, magnetic processors and ring-magnet plates, workcell integrators, robot-loadable centrifuges and arms. A record's evidence level is `manufacturer-sourced` when at least one claim rests on a manufacturer document (including manufacturer brochures hosted by distributors, marked `manufacturer (third-party host)`), and `secondary-sourced` when every claim rests on secondary sources such as distributor or retailer listings (`kind: 'secondary'`). Low-cost desktop arms are listed with their published specifications and are not lab-validated by their manufacturers.

The 82 PyLabRobot registry entries retain upstream status, testing flags, nested variants, pinned source provenance and the full MIT notice. They do not become 82 validated commercial instrument configurations. Curated and upstream overlaps are not silently merged. See THIRD_PARTY_NOTICES.md and the manufacturer evidence notes in docs/. Manufacturer documents are linked, not redistributed. The collection makes no blanket licence assertion over third-party documents; upstream notices travel with exports.

## Imperial ROAR discovery

The **ROAR equipment** view covers 26 roles from seven public Imperial pages. It links to ten new manufacturer model references and the existing `?instrument=ot2` reference. Separate lead IDs preserve the three Freeslate Junior roles, named components of instrument stacks, duplicates across pages, missing variants and four conflicting reports. A reported role is not an asset count, and an identified model does not establish fitted options, current availability, access or qualification.

- `content/roar-models.js` contains model claims with dated original manufacturer sources and model-specific conditions. `content/roar-discovery.js` contains facility observations and their source sections. Facility evidence is labelled `facility` and does not supply manufacturer claims. Records with both manufacturer and facility claims are labelled `mixed-sourced`. A mixed or unclassified source set cannot promote a claim to manufacturer evidence.
- The full JSON includes `discovery.roar`; model exports include related lead IDs where applicable. The standalone `roar-discovery.json` in the built package and the ROAR view's JSON/CSV exports provide the public crosswalk. The JSON carries the versions for both schemas. Lead IDs are separate from model IDs: only `modelIds` are valid `?instrument=` values; `#roar-<lead-id>` opens the reported role.
- `matched` links a named model; `grouped` links references within a reported group; `partial` links only the identified component; `unresolved` has no model ID. In each case `identityGap` states what is missing. All ROAR lead rows are `planningEligibility: unassessed` and `controlSupport: unknown`. The ten new models carry the same fields; existing manufacturer and upstream OT-2 evidence stays unchanged.

## Delivery

Milestone1 tracks manufacturer evidence (issue2); milestone2 tracks the standalone public site, isolation checks and delivery (issue1). Issue-linked PRs must pass checks before merging. A known organisation billing restriction may prevent hosted Actions jobs from starting; local validation is reported separately and does not count as green hosted CI.

## Buying and integration readiness

Records separate PyLabRobot registry coverage from a tested integration: exact backend/model scope, upstream driver status, API/documentation, firmware/interface prerequisites and hardware-testing gaps travel with each record. Listed does not mean every operation or module is supported, or that integration is effortless.

Dated procurement observations distinguish instrument, module, bundle and service; new versus used; listing versus asking price; starting-at versus displayed-pack basis; currency/region; tax, shipping, inclusions/exclusions and source. Availability is independent of price: orderable is not in stock, and a quote request is not a lead-time promise. A missing value stays unknown. No currency conversion or configured-total estimate is fabricated. Service, calibration, software licensing, consumables, recovery and physical loading remain explicit verification questions where evidence is missing.

### MADSci integration leads

OT-2 and Flex records link to the pinned upstream MADSci module index and module repository, alongside the separate PyLabRobot evidence. The four matching catalogue entries include two curated records and their two PyLabRobot discovery records; they refer to one upstream module, not four devices. All other records are **not assessed** for MADSci, not known incompatible. Check exact command, firmware, hardware, licensing and safety before use. The upstream `run_protocol` action changes its input file in place when substituting parameters; use a disposable working copy if evaluating it. JSON and CSV carry the source URLs and the MADSci evidence separately. This catalogue does not run or vendor the module. The broader MADSci/SiLA crosswalk remains tracked in issue #6.
