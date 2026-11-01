# PyLabRobot integration evidence

Checked 31 October 2026. The twenty curated records have explicit crosswalks in `content/integration.js`. All driver names, status labels, API paths and testing flags come from the existing pinned MIT registry at commit `3976f1235a4e2180306005541459c2bedfd0dad4`. Current PyLabRobot documentation was checked separately for operational limits and prerequisites. No software was installed and no hardware was operated.

| Curated record | Crosswalk | Boundary that matters |
| --- | --- | --- |
| Flex | Flex, basic v1 | Operation-specific hardware checks; one- and 96-channel heads remain unverified in the current guide. |
| OT-2 GEN2 | OT-2, mostly v1 | Current guide explicitly lists single-channel GEN1/GEN2 liquid operations. Do not infer eight-channel support. |
| NGS STARlet | STAR/STARlet family, full v0 | Legacy family backend is a lead, not qualification of the NGS accessories, firmware or method. |
| MANTIS | Mantis, WIP | No API path or quickstart in the pinned record. Usable dispensing support remains to be established. |
| PlateLoc + BenchCel | PlateLoc and BenchCel 4R, both mostly v1 | Separate drivers. BenchCel documentation is specific to four stackers and tested firmware; a 2R configuration is not covered by this mapping. |
| ODTC | ODTC, mostly v0 | No registry API path; current guide is an overview. Exact variant, firmware and SiLA generation require verification. |
| Flex Magnetic Block | No standalone mapping | Passive hardware has no control electronics. Robot/gripper support and resource geometry matter. |
| Andrew+, Bravo, i7, firefly/Plus, Fluent, dragonfly, KingFisher Flex, ROTINA 380 RC, LINQ, CFX Opus 96, 4200 TapeStation, generic storage | Not established | No exact-model mapping established in the reviewed registry/docs. This does not mean impossible or unsupported forever. |

The separate 82 upstream discovery records retain their own driver metadata through the catalogue pipeline; this file does not duplicate or flatten them. Nested models, hardware-testing flags and missing API fields must remain visible. A missing testing flag is `null`, not `false`. The generic storage record must never inherit a driver simply because both entries involve storage; Tecan EVO is not Fluent, and ROTANTA is not ROTINA.

Upstream uses WIP for unfinished work, basic for core functions, mostly for substantial coverage with missing commands, and full for comprehensive coverage. These labels describe software coverage, not installation effort or assay validation. API generation v0 denotes legacy APIs. The current definitions are linked from every crosswalk; no label is converted into an “easy” score.

Documented prerequisites include Opentrons calibration and network access, STAR USB-driver ownership, PlateLoc serial access, BenchCel teachpoints/air/network/control ownership, and the ODTC PCU. Vendor API existence is treated separately from a PyLabRobot implementation. PlateLoc's driver status query does not expose actual block temperature; a written target must not be displayed as a measurement. LINQ simulation can skip hardware initialization and therefore cannot establish physical readiness.

Every record also carries explicitly labelled verification questions covering configuration/firmware, calibration/labware, host/software/licences and recovery. Those questions are authored planning prompts, not manufacturer requirements, and intentionally have empty source-ID lists. Specific factual statements cite checked sources. They contain no local installation, owner, private protocol or unpublished testing data.

Verification performed: fetched the pinned registry (82 entries), checked exact-model/name searches, inspected current supported-machine definitions and six relevant driver guides, and checked the cited manufacturer interface documents. Structural checks confirm all twenty IDs match the curated reference records and every crosswalk registry ID resolves. An upstream listing is not a purchase recommendation or a commitment of engineering effort.
