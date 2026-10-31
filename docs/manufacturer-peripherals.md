# Peripheral manufacturer evidence

Checked 31 October 2026. `content/manufacturer-peripherals.js` contains independently worded factual summaries from public manufacturer documents. Each claim has a configuration, conditions and a source locator. Manufacturer specifications are not independent hardware tests or evidence that an assay works. Manuals and brochures are linked rather than redistributed.

| Record | Evidence admitted | Limits retained |
| --- | --- | --- |
| MANTIS | Chip-specific minima; Hi-Fi technical precision/error specification and software requirement; optional LC3; plate formats | No liquid-specific performance result. Standard and Hi-Fi chips remain separate. The full Artel study is behind a form. |
| dragonfly discovery | Per-head aspiration/dispense volumes; manual CV specifications; head variants; deep-well format; integration API | Manual does not identify precision-test liquids or replicates. No inferred accuracy or workflow time. |
| KingFisher Flex | Four head/plate configurations and distinct processing volumes; ambient-relative heating | Processing volume is not liquid-transfer capability. German-locale specification rows were checked after manufacturer redirection. |
| ROTINA 380 / RC Robotic | Separate instrument speeds; named tube/plate rotors and buckets; plate-height-dependent capacities; conditional cooling; hatch/control | RCF and capacity are rotor-specific. Lowest temperature requires precooled refrigerated model at maximum speed. Vessel ratings still apply. |
| PlateLoc | Sealing range; plate size/support constraints; supported seal type; approximate cycle; external control | Seal material, plate and dwell must be chosen. Cycle time is not complete-workflow time. |
| LINQ | Workcell/device drivers, task graph, manual tasks and timing constraints | Platform orchestration is separate from external instruments' physical capabilities. |
| ODTC | Model-specific format/volume, thermal range, accuracy at 55 °C, uniformity plateaus, PCU/interface | Specific plate optimization governs compatibility. Below-ambient footnote is incomplete in retrieved public page. |
| Flex Magnetic Block | Passive architecture, two named compatible plates, separate gripper, ambient conditions | No bead-capture timing or assay recovery; no transfer of OT-2 Magnetic Module compatibility. |
| CFX Opus 96 | Sample/block specifications, accuracy, separately conditioned uniformity, optics and multiplex limit | Accuracy test conditions missing; no one-copy detection claim or cross-model extrapolation. |
| 4200 TapeStation | Run capacity; standard D1000 range, input volume, timing and conditioned sizing/quantitation specifications | Historical D1000 guide; other assays and current consumable revision need separate checks. |
| Automated storage | Named BioStore brochure example; optional dual zones, pickers and downstream interface | Generic record is not a specific store. Current landing page inaccessible; historical naming is explicit. |

All URLs and exact sections are in each record's `sources`. Numerical values are tied to the cited table, configuration and stated condition. Missing precision-test conditions remain visible; brochure specifications are not converted into measured results. No private protocols, local inventory, access information or correspondence were used.

Verification: all eleven record IDs were checked against `content/reference.js`; claim IDs and source IDs are unique, every claim source resolves within its record, every claim has configuration/conditions and all source checks are dated. This checks data consistency, not scientific validity. An independent source review should precede publishing new performance comparisons.
