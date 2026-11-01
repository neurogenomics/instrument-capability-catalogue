// Reviewed public-reference snapshot. No private protocol or installation records.
export const reference = {
  "schemaVersion": 1,
  "version": "2026-10-31.1+3976f1235a4e2180306005541459c2bedfd0dad4",
  "description": "Shareable instrument reference records; no local protocols, installations or access records.",
  "releaseStatus": "Public-safe candidate export; publication and authored-content licence not yet selected.",
  "notices": [
    "MIT License\n\nCopyright (c) 2018 dgretton\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.",
    "PyLabRobot-derived records retain MIT attribution; see THIRD_PARTY_NOTICES.md.",
    "Manufacturer documents are linked, not redistributed. Curated and upstream-discovery records remain distinct; duplicates across sources have not been silently merged."
  ],
  "records": [
    {
      "id": "andrew",
      "name": "Andrew+",
      "vendor": "Waters",
      "category": "Liquid handler",
      "summary": "Waters Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "liquid-transfer",
          "type": "native",
          "minUl": 0.2,
          "maxUl": 10000,
          "detail": "Separate pipette options: single-channel 0.2–10, 5–120, 10–300, 50–1000, 100–5000 and 500–10000 µL; eight-channel 0.2–10, 5–120, 10–300 and 50–1200 µL. The family envelope is not one pipette range."
        },
        {
          "operation": "mixing",
          "type": "native",
          "detail": "native mixing capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "heating-cooling",
          "type": "optional",
          "module": "Connected heating/shaking devices",
          "detail": "optional heating-cooling capability using Connected heating/shaking devices. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "vessel-transfer",
          "type": "optional",
          "module": "Connected grippers",
          "detail": "optional vessel-transfer capability using Connected grippers. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Single/eight-channel electronic pipettes",
        "Connected heating/shaking devices",
        "Connected grippers",
        "Vacuum+"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "andrew",
          "title": "Waters supported Andrew+ pipettes",
          "url": "https://support.waters.com/KB_Inst/Other/WKB122208_What_Pipettors_and_Pipet_Tips_Are_Supported_on_Andrew",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        },
        {
          "id": "andrew-modules",
          "title": "Waters connected devices and accessories",
          "url": "https://www.waters.com/waters/en_US/Automation-Connected-Devices-and-Accessories/nav.htm?cid=135073544&locale=en_US",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "bravo",
      "name": "Bravo",
      "vendor": "Agilent",
      "category": "Liquid handler",
      "summary": "Agilent Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "liquid-transfer",
          "type": "native",
          "minUl": 0.3,
          "maxUl": 250,
          "detail": "Head-specific limits: 96LT 2–250 µL; 96ST/384ST 0.3–70 µL. Tip choice further restricts these limits."
        },
        {
          "operation": "thermocycling",
          "type": "optional",
          "module": "ODTC",
          "detail": "optional thermocycling capability using ODTC. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "heating-cooling",
          "type": "optional",
          "module": "Heating/cooling",
          "detail": "optional heating-cooling capability using Heating/cooling. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "mixing",
          "type": "optional",
          "module": "Shaker",
          "detail": "optional mixing capability using Shaker. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "vessel-transfer",
          "type": "optional",
          "module": "Plate gripper",
          "detail": "optional vessel-transfer capability using Plate gripper. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "magnetic-separation",
          "type": "optional",
          "module": "Magnet",
          "detail": "optional magnetic-separation capability using Magnet. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "96LT / 96ST / 384ST heads",
        "ODTC",
        "Plate gripper",
        "Heating/cooling",
        "Shaker",
        "Magnet",
        "BenchCel integration"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "bravo",
          "title": "Agilent Bravo datasheet 5990-3480EN",
          "url": "https://www.agilent.com/cs/library/datasheets/public/5990-3480EN.pdf",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        },
        {
          "id": "bravo-modules",
          "title": "Bravo accessory catalogue 5991-0369EN",
          "url": "https://www.agilent.com/cs/library/catalogs/Public/5991-0369EN.pdf",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "i7",
      "name": "Biomek i7",
      "vendor": "Beckman Coulter",
      "category": "Liquid handler",
      "summary": "Beckman Coulter Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "liquid-transfer",
          "type": "native",
          "minUl": 0.5,
          "maxUl": 5000,
          "detail": "Published family envelopes include 0.5–1200 and 0.5–5000 µL; establish the exact head and tips before applying a limit."
        },
        {
          "operation": "magnetic-separation",
          "type": "optional",
          "module": "Magnetic accessories",
          "detail": "optional magnetic-separation capability using Magnetic accessories. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "thermocycling",
          "type": "external",
          "detail": "external thermocycling capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "centrifugation",
          "type": "external",
          "detail": "external centrifugation capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "vessel-transfer",
          "type": "optional",
          "module": "Gripper",
          "detail": "optional vessel-transfer capability using Gripper. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Multichannel / Span-8 configurations",
        "Gripper",
        "Magnetic accessories",
        "External thermocycler",
        "External centrifuge"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "i7",
          "title": "Beckman Biomek i-Series",
          "url": "https://www.beckman.it/en/liquid-handlers/biomek-i-series-automated-workstations",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "firefly",
      "name": "firefly",
      "vendor": "SPT Labtech",
      "category": "Liquid handler",
      "summary": "SPT Labtech Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "liquid-transfer",
          "type": "native",
          "minUl": 0.5,
          "maxUl": 125,
          "detail": "Sample pipetting: 0.5–125 µL; 96/384 arrays or 8/16 strips."
        },
        {
          "operation": "dispensing",
          "type": "native",
          "minUl": 0.2,
          "maxUl": 3690,
          "detail": "Positive-displacement reagent syringes: 0.2–3690 µL; separate from sample pipetting."
        },
        {
          "operation": "magnetic-separation",
          "type": "optional",
          "module": "Magnetic blocks",
          "detail": "optional magnetic-separation capability using Magnetic blocks. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "heating-cooling",
          "type": "optional",
          "module": "Genomics thermal and shaker stations",
          "detail": "optional heating-cooling capability using Genomics thermal and shaker stations. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "mixing",
          "type": "optional",
          "module": "Genomics thermal and shaker stations",
          "detail": "optional mixing capability using Genomics thermal and shaker stations. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "vessel-transfer",
          "type": "native",
          "detail": "native vessel-transfer capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "ATL/EZL configuration",
        "Genomics thermal and shaker stations",
        "Magnetic blocks"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "firefly",
          "title": "SPT firefly hardware and specifications",
          "url": "https://www.sptlabtech.com/migration/product-help-center/firefly-user-guide-specifications-1.3-firefly-technology",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "firefly-plus",
      "name": "firefly+ (Plus)",
      "vendor": "SPT Labtech",
      "category": "Liquid handler",
      "summary": "SPT Labtech Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "liquid-transfer",
          "type": "native",
          "minUl": 0.5,
          "maxUl": 125,
          "detail": "Sample pipetting: 0.5–125 µL; 96/384 arrays or 8/16 strips."
        },
        {
          "operation": "dispensing",
          "type": "native",
          "minUl": 0.2,
          "maxUl": 3690,
          "detail": "Positive-displacement reagent syringes: 0.2–3690 µL; separate from sample pipetting."
        },
        {
          "operation": "magnetic-separation",
          "type": "optional",
          "module": "Magnetic blocks",
          "detail": "optional magnetic-separation capability using Magnetic blocks. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "heating-cooling",
          "type": "optional",
          "module": "Genomics thermal and shaker stations",
          "detail": "optional heating-cooling capability using Genomics thermal and shaker stations. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "mixing",
          "type": "optional",
          "module": "Genomics thermal and shaker stations",
          "detail": "optional mixing capability using Genomics thermal and shaker stations. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "vessel-transfer",
          "type": "native",
          "detail": "native vessel-transfer capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "thermocycling",
          "type": "optional",
          "module": "Optional ODTC",
          "detail": "optional thermocycling capability using Optional ODTC. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "ATL/EZL configuration",
        "Genomics thermal and shaker stations",
        "Magnetic blocks",
        "Additional plate storage",
        "Optional ODTC"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "firefly",
          "title": "SPT firefly hardware and specifications",
          "url": "https://www.sptlabtech.com/migration/product-help-center/firefly-user-guide-specifications-1.3-firefly-technology",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "flex",
      "name": "Flex",
      "vendor": "Opentrons",
      "category": "Liquid handler",
      "summary": "Opentrons Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "liquid-transfer",
          "type": "native",
          "minUl": 1,
          "maxUl": 1000,
          "detail": "Head-specific options: 1/8-channel 1–50 or 5–1000 µL; 96-channel 1–200 or 5–1000 µL."
        },
        {
          "operation": "magnetic-separation",
          "type": "optional",
          "module": "Magnetic Block",
          "detail": "optional magnetic-separation capability using Magnetic Block. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "heating-cooling",
          "type": "optional",
          "module": "Temperature Module",
          "detail": "optional heating-cooling capability using Temperature Module. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "mixing",
          "type": "optional",
          "module": "Heater-Shaker",
          "detail": "optional mixing capability using Heater-Shaker. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "thermocycling",
          "type": "optional",
          "module": "Thermocycler",
          "detail": "optional thermocycling capability using Thermocycler. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "vessel-transfer",
          "type": "optional",
          "module": "Gripper",
          "detail": "optional vessel-transfer capability using Gripper. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "1/8/96-channel heads",
        "Gripper",
        "Magnetic Block",
        "Temperature Module",
        "Heater-Shaker",
        "Thermocycler",
        "Stacker",
        "HEPA/UV",
        "Absorbance reader"
      ],
      "performance": "Example only: Flex 1–50 µL 8-channel head at 1 µL with 20 µL tips: ±10% systematic error, 6% CV; at 50 µL with 50 µL tips: ±1.25%, 0.60% CV. Manufacturer conditions; not sample-specific validation.",
      "sources": [
        {
          "id": "flex",
          "title": "Opentrons Flex pipette specifications",
          "url": "https://docs.opentrons.com/flex/system-description/pipettes/",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        },
        {
          "id": "flexmodules",
          "title": "Opentrons Flex modules",
          "url": "https://docs.opentrons.com/flex/modules/",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Conditioned example only",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "ot2",
      "name": "OT-2 GEN2",
      "vendor": "Opentrons",
      "category": "Liquid handler",
      "summary": "Opentrons Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "liquid-transfer",
          "type": "native",
          "minUl": 1,
          "maxUl": 300,
          "detail": "Curated GEN2 heads: P20 1–20 µL and P300 20–300 µL. Other head ranges remain outside this extracted record."
        },
        {
          "operation": "thermocycling",
          "type": "optional",
          "module": "Thermocycler",
          "detail": "optional thermocycling capability using Thermocycler. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "heating-cooling",
          "type": "optional",
          "module": "Temperature Module",
          "detail": "optional heating-cooling capability using Temperature Module. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "mixing",
          "type": "optional",
          "module": "Heater-Shaker",
          "detail": "optional mixing capability using Heater-Shaker. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "magnetic-separation",
          "type": "optional",
          "module": "Magnetic Module",
          "detail": "optional magnetic-separation capability using Magnetic Module. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Single/eight-channel GEN2 pipettes",
        "Thermocycler",
        "Temperature Module",
        "Heater-Shaker",
        "Magnetic Module"
      ],
      "performance": "P20 GEN2 multi at 1 µL: ±20% systematic error and 10% CV per manufacturer specification; exact liquid/tip qualification still needed.",
      "sources": [
        {
          "id": "ot2",
          "title": "Opentrons OT-2 GEN2 pipettes",
          "url": "https://docs.opentrons.com/ot-2/pipettes/",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Conditioned example only",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "starlet",
      "name": "NGS STARlet",
      "vendor": "Hamilton",
      "category": "Liquid handler",
      "summary": "Hamilton Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "liquid-transfer",
          "type": "native",
          "minUl": 1,
          "maxUl": 1000,
          "detail": "native liquid-transfer capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "vessel-transfer",
          "type": "optional",
          "module": "Configured plate handling",
          "detail": "optional vessel-transfer capability using Configured plate handling. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "magnetic-separation",
          "type": "optional",
          "module": "NGS magnetic/thermal accessories",
          "detail": "optional magnetic-separation capability using NGS magnetic/thermal accessories. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Independent channels",
        "NGS magnetic/thermal accessories",
        "Configured plate handling"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "starlet",
          "title": "Hamilton NGS STARlet",
          "url": "https://www.hamiltoncompany.com/assay-ready-workstations/ngs-starlet",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "fluent",
      "name": "Fluent",
      "vendor": "Tecan",
      "category": "Liquid handler",
      "summary": "Tecan Liquid handler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [],
      "modules": [
        "Flexible Channel Arm",
        "Multi-Channel Arm",
        "Robotic Gripper Arm",
        "Configured peripherals"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "fluent",
          "title": "Tecan liquid handling catalogue",
          "url": "https://www.tecan.com/download-tecans-liquid-handling-catalog",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "mantis",
      "name": "MANTIS",
      "vendor": "FORMULATRIX",
      "category": "Reagent dispenser",
      "summary": "FORMULATRIX Reagent dispenser. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "dispensing",
          "type": "native",
          "detail": "native dispensing capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Reagent chips",
        "Reagent inputs"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "mantis",
          "title": "FORMULATRIX MANTIS",
          "url": "https://formulatrix.com/liquid-handling-systems/mantis-liquid-dispenser/",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "dragonfly",
      "name": "dragonfly discovery",
      "vendor": "SPT Labtech",
      "category": "Reagent dispenser",
      "summary": "SPT Labtech Reagent dispenser. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "dispensing",
          "type": "native",
          "detail": "native dispensing capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Disposable syringes",
        "Reservoirs",
        "Genomics accessories"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "dragonfly",
          "title": "SPT dragonfly discovery",
          "url": "https://www.sptlabtech.com/products/dragonfly/dragonfly-discovery",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "kingfisher",
      "name": "KingFisher Flex",
      "vendor": "Thermo Fisher",
      "category": "Separation",
      "summary": "Thermo Fisher Separation. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "magnetic-separation",
          "type": "native",
          "detail": "native magnetic-separation capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "24/96-well magnetic heads",
        "Compatible reagent plates"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "kingfisher",
          "title": "Thermo Fisher KingFisher Flex",
          "url": "https://www.thermofisher.com/us/en/home/life-science/dna-rna-purification-analysis/automated-purification-extraction/kingfisher-systems/models/kingfisher-flex.html",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "rotina",
      "name": "ROTINA 380 RC Robotic",
      "vendor": "Hettich",
      "category": "Centrifuge",
      "summary": "Hettich Centrifuge. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "centrifugation",
          "type": "native",
          "detail": "native centrifugation capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Indexed robotic access",
        "Refrigeration",
        "Swing-out rotor",
        "Tube/plate adapters"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "hettich",
          "title": "Hettich ROTINA 380/380 RC Robotic datasheet",
          "url": "https://www.hettichlab.com/downloadcenter/Products/Datasheets/ROTINA380-380RC-Robotic_EN.pdf",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "plateloc",
      "name": "PlateLoc + BenchCel",
      "vendor": "Agilent",
      "category": "Closure and handling",
      "summary": "Agilent Closure and handling. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "sealing",
          "type": "native",
          "detail": "native sealing capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "vessel-transfer",
          "type": "external",
          "detail": "external vessel-transfer capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "PlateLoc sealer",
        "BenchCel stackers/handler"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "plateloc",
          "title": "Agilent BenchCel and PlateLoc application",
          "url": "https://www.agilent.com/cs/library/applications/5991-8091EN.pdf",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "linq",
      "name": "LINQ workcell",
      "vendor": "Automata",
      "category": "Workcell",
      "summary": "Automata Workcell. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "vessel-transfer",
          "type": "native",
          "detail": "native vessel-transfer capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "centrifugation",
          "type": "external",
          "detail": "external centrifugation capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "thermocycling",
          "type": "external",
          "detail": "external thermocycling capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "qc",
          "type": "external",
          "detail": "external qc capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Robot transport",
        "Configured devices",
        "Operator confirmation tasks"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "linq",
          "title": "Automata LINQ workflows",
          "url": "https://docs.automata.tech/workflow",
          "kind": "platform documentation",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "odtc",
      "name": "ODTC",
      "vendor": "INHECO",
      "category": "Thermocycler",
      "summary": "INHECO Thermocycler. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "thermocycling",
          "type": "native",
          "detail": "native thermocycling capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Plate format and controller options"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "odtc",
          "title": "INHECO ODTC",
          "url": "https://www.inheco.com/odtc.html",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "magblock",
      "name": "Flex Magnetic Block",
      "vendor": "Opentrons",
      "category": "Magnetic separation",
      "summary": "Opentrons Magnetic separation. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "magnetic-separation",
          "type": "native",
          "detail": "native magnetic-separation capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Labware adapters"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "flexmodules",
          "title": "Opentrons Flex modules",
          "url": "https://docs.opentrons.com/flex/modules/",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "cfx",
      "name": "CFX Opus 96",
      "vendor": "Bio-Rad",
      "category": "QC / reader",
      "summary": "Bio-Rad QC / reader. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "qc",
          "type": "native",
          "detail": "native qc capability. Review the source for exact configuration and integration requirements."
        },
        {
          "operation": "thermocycling",
          "type": "native",
          "detail": "native thermocycling capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Optical plates/seals",
        "Analysis software"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "cfx",
          "title": "Bio-Rad CFX Opus 96",
          "url": "https://www.bio-rad.com/sites/default/files/webroot/web/pdf/lsr/literature/Bulletin_7299.pdf",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "tapestation",
      "name": "4200 TapeStation",
      "vendor": "Agilent",
      "category": "QC / reader",
      "summary": "Agilent QC / reader. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "qc",
          "type": "native",
          "detail": "native qc capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "ScreenTape assay-specific reagents"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "tapestation",
          "title": "Agilent 4200 TapeStation",
          "url": "https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-instruments/4200-tapestation-system-228263",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "storage",
      "name": "Automated cold-storage systems",
      "vendor": "Azenta",
      "category": "Storage",
      "summary": "Azenta Storage. Model-family reference; select and verify the exact configuration before use.",
      "capabilities": [
        {
          "operation": "cold-storage",
          "type": "native",
          "detail": "native cold-storage capability. Review the source for exact configuration and integration requirements."
        }
      ],
      "modules": [
        "Model-specific temperature zones",
        "Inventory software",
        "Tube/plate handling"
      ],
      "performance": "Condition-specific performance has not been extracted into this record.",
      "sources": [
        {
          "id": "azenta",
          "title": "Azenta automated sample storage",
          "url": "https://www.azenta.com/automated-sample-storage-systems",
          "kind": "manufacturer",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "curated-reference",
      "license": "Release licence for authored records not yet selected; linked manufacturer documents retain their own rights.",
      "verified": "2026-10-31",
      "completeness": {
        "headSelection": "Review source; family envelope may combine multiple heads",
        "labware": "Not fully extracted",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Native/optional/external roles; exact device compatibility requires review"
      },
      "upstream": null
    },
    {
      "id": "plr-agilent-benchcel-4r",
      "name": "BenchCel 4R",
      "vendor": "Agilent",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/agilent/benchcel/hello-world.html",
          "kind": "integration documentation"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.benchcel.BenchCel4R",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/agilent/benchcel/hello-world.html",
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "BenchCel 4R four-stacker configuration; protocol verified with firmware 3.2.20.0.",
        "metadata": {
          "api_version": "v1",
          "code_slug": "agilent/benchcel",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-agilent-plateloc",
      "name": "PlateLoc",
      "vendor": "Agilent",
      "category": "sealer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "sealing",
          "upstreamOperation": "sealing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/agilent/plateloc/hello-world.html",
          "kind": "integration documentation"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.PlateLoc",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/agilent/plateloc/hello-world.html",
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "agilent/plateloc"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-agilent-vspin",
      "name": "VSpin",
      "vendor": "Agilent",
      "category": "centrifuge",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "centrifugation",
          "upstreamOperation": "centrifuging",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/agilent/vspin/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agilent.com/en/product/automated-liquid-handling/automated-microplate-management/microplate-centrifuge",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.vspin.VSpin",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/agilent/vspin/hello-world.html",
        "manufacturerUrl": "https://www.agilent.com/en/product/automated-liquid-handling/automated-microplate-management/microplate-centrifuge",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "agilent/vspin",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-agilent-vspin-access2",
      "name": "VSpin Access2 Loader",
      "vendor": "Agilent",
      "category": "centrifuge loader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "centrifugation",
          "upstreamOperation": "centrifuging",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/agilent/vspin/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agilent.com/en/product/automated-liquid-handling/automated-microplate-management/microplate-centrifuge",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.vspin.Access2",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/agilent/vspin/hello-world.html",
        "manufacturerUrl": "https://www.agilent.com/en/product/automated-liquid-handling/automated-microplate-management/microplate-centrifuge",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "agilent/vspin",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-biotek-cytation-1",
      "name": "Cytation 1",
      "vendor": "Agilent (BioTek)",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "microscopy",
          "upstreamOperation": "microscopy",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agilent.com/en/product/cell-analysis/cell-imaging-microscopy/cell-imaging-multimode-readers/biotek-cytation-1-cell-imaging-multimode-reader-1623200",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.biotek.cytation.Cytation1",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.agilent.com/en/product/cell-analysis/cell-imaging-microscopy/cell-imaging-multimode-readers/biotek-cytation-1-cell-imaging-multimode-reader-1623200",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "agilent/biotek/cytation",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-biotek-cytation-5",
      "name": "Cytation 5",
      "vendor": "Agilent (BioTek)",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "luminescence",
          "upstreamOperation": "luminescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "microscopy",
          "upstreamOperation": "microscopy",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agilent.com/en/product/cell-analysis/cell-imaging-microscopy/cell-imaging-multimode-readers/biotek-cytation-5-cell-imaging-multimode-reader-1623202",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.biotek.cytation.Cytation5",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.agilent.com/en/product/cell-analysis/cell-imaging-microscopy/cell-imaging-multimode-readers/biotek-cytation-5-cell-imaging-multimode-reader-1623202",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "agilent/biotek/cytation",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-biotek-el405",
      "name": "EL405",
      "vendor": "Agilent (BioTek)",
      "category": "plate washer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "plate-washing",
          "upstreamOperation": "plate washing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "dispensing",
          "upstreamOperation": "dispensing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agilent.com/en/product/microplate-instrumentation/automated-liquid-dispensing-handling/automated-microplate-washers-dispensers/biotek-elx405-select-deep-well-washer-1623269",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.agilent.com/en/product/microplate-instrumentation/automated-liquid-dispensing-handling/automated-microplate-washers-dispensers/biotek-elx405-select-deep-well-washer-1623269",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-biotek-el406",
      "name": "EL406",
      "vendor": "Agilent (BioTek)",
      "category": "plate washer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "plate-washing",
          "upstreamOperation": "plate washing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "dispensing",
          "upstreamOperation": "dispensing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agilent.com/en/product/cell-analysis/microplate-automation-detection/microplate-washers-dispensers/biotek-el406-washer-dispenser-1623255",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.biotek.el406.EL406",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.agilent.com/en/product/cell-analysis/microplate-automation-detection/microplate-washers-dispensers/biotek-el406-washer-dispenser-1623255",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "agilent/biotek/el406",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-biotek-synergy-h1",
      "name": "Synergy H1",
      "vendor": "Agilent (BioTek)",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "luminescence",
          "upstreamOperation": "luminescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agilent.com/en/product/microplate-instrumentation/microplate-readers/multimode-microplate-readers/biotek-synergy-h1-multimode-reader-1623193",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.biotek.synergy.SynergyH1",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.agilent.com/en/product/microplate-instrumentation/microplate-readers/multimode-microplate-readers/biotek-synergy-h1-multimode-reader-1623193",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "agilent/biotek/synergy",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-biotek-synergy-ht",
      "name": "Synergy HT",
      "vendor": "Agilent (BioTek)",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/agilent/synergy_ht/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agilent.com/en/product/microplate-instrumentation/microplate-readers/multimode-microplate-readers/biotek-synergy-ht-multi-mode-reader-1623194",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agilent.biotek.synergy_ht.SynergyHT",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/agilent/synergy_ht/hello-world.html",
        "manufacturerUrl": "https://www.agilent.com/en/product/microplate-instrumentation/microplate-readers/multimode-microplate-readers/biotek-synergy-ht-multi-mode-reader-1623194",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "Endpoint absorbance with optional shaking before reads on built-in 24- and 96-well plates.",
        "metadata": {
          "api_version": "v1",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga",
          "needs_hardware_testing": false,
          "code_slug": "agilent/biotek/synergy_ht"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-agrowtek-pump-array",
      "name": "Pump Array",
      "vendor": "Agrowtek",
      "category": "pump",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "pumping",
          "upstreamOperation": "pumping",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.agrowtek.com/index.php/products/dosing_systems/dosing-pumps/agrowdose-adi-digital-persitaltic-dosing-pumps-detail",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.agrowpumps.AgrowPumpArray",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.agrowtek.com/index.php/products/dosing_systems/dosing-pumps/agrowdose-adi-digital-persitaltic-dosing-pumps-detail",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "agrowpumps",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-azenta-a4s",
      "name": "a4S",
      "vendor": "Azenta",
      "category": "sealer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "sealing",
          "upstreamOperation": "sealing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.azenta.com/products/automated-roll-heat-sealer-formerly-a4s",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.azenta.A4S",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.azenta.com/products/automated-roll-heat-sealer-formerly-a4s",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "azenta",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-azenta-fluidx-intellixcap96",
      "name": "FluidX IntelliXcap 96",
      "vendor": "Azenta",
      "category": "decapper",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "decapping",
          "upstreamOperation": "decapping",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/azenta/fluidx/intellixcap96/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.azenta.com/products/intellixcap-automated-screw-cap-decapper-recapper-96-format",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.azenta.fluidx.FluidXIntelliXcap96",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/azenta/fluidx/intellixcap96/hello-world.html",
        "manufacturerUrl": "https://www.azenta.com/products/intellixcap-automated-screw-cap-decapper-recapper-96-format",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "azenta/fluidx",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-azenta-xpeel",
      "name": "XPeel",
      "vendor": "Azenta",
      "category": "peeler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "peeling",
          "upstreamOperation": "peeling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.azenta.com/products/automated-plate-seal-remover-formerly-xpeel",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.azenta.XPeel",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.azenta.com/products/automated-plate-seal-remover-formerly-xpeel",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "azenta",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-beckman-cytoflex-s",
      "name": "CytoFLEX S",
      "vendor": "Beckman Coulter",
      "category": "flow cytometer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "flow-cytometry",
          "upstreamOperation": "flow cytometry",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.beckman.com/flow-cytometry/research-flow-cytometers/cytoflex-s",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.beckman.com/flow-cytometry/research-flow-cytometers/cytoflex-s",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-big-bear-orbital-shaker",
      "name": "Orbital Shaker",
      "vendor": "BigBear",
      "category": "shaker",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/big_bear/orbital-shaker/hello-world.html",
          "kind": "integration documentation"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.big_bear.BigBearOrbitalShaker",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/big_bear/orbital-shaker/hello-world.html",
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "needs_hardware_testing": true,
          "api_version": "v1",
          "code_slug": "big_bear",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-bmg-clariostar",
      "name": "CLARIOstar (Plus)",
      "vendor": "BMG Labtech",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "luminescence",
          "upstreamOperation": "luminescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.bmglabtech.com/en/clariostar-plus/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.bmglabtech.com/en/clariostar-plus/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/camillomoschner"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-brooks-preciseflex",
      "name": "PreciseFlex",
      "vendor": "Brooks",
      "category": "arm",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "arm",
          "upstreamOperation": "arm",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/brooks/precise_flex/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.preciseflexrobots.com/lab-automation-applicable-products",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.brooks.precise_flex.PreciseFlex",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/brooks/precise_flex/hello-world.html",
        "manufacturerUrl": "https://www.preciseflexrobots.com/lab-automation-applicable-products",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "models": [
            {
              "name": "PreciseFlex PF3400",
              "status": "full"
            },
            {
              "name": "PreciseFlex PF400",
              "status": "full"
            }
          ],
          "api_version": "v1",
          "code_slug": "brooks/precise_flex",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-btx-gemini-x2",
      "name": "Gemini X2",
      "vendor": "BTX",
      "category": "electroporator",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "electroporation",
          "upstreamOperation": "electroporation",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/thermo_fisher/btx/gemini/X2/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://support.btxonline.com/hc/en-us/articles/6215664757907-Gemini-Twin-Wave-Electroporators-Manual-and-Quick-Start-guide",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.thermo_fisher.btx.gemini.X2.BTXGeminiX2",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/thermo_fisher/btx/gemini/X2/hello-world.html",
        "manufacturerUrl": "https://support.btxonline.com/hc/en-us/articles/6215664757907-Gemini-Twin-Wave-Electroporators-Manual-and-Quick-Start-guide",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "thermo_fisher/btx/gemini/X2"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-byonoy-absorbance-96",
      "name": "Absorbance 96 Automate",
      "vendor": "Byonoy",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/byonoy/absorbance_96/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://byonoy.com/absorbance-automate/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.byonoy.ByonoyAbsorbance96",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/byonoy/absorbance_96/hello-world.html",
        "manufacturerUrl": "https://byonoy.com/absorbance-automate/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "byonoy",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-byonoy-luminescence-96",
      "name": "Luminescence 96",
      "vendor": "Byonoy",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "luminescence",
          "upstreamOperation": "luminescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/byonoy/luminescence_96/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://byonoy.com/luminescence-96/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.byonoy.ByonoyLuminescence96",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/byonoy/luminescence_96/hello-world.html",
        "manufacturerUrl": "https://byonoy.com/luminescence-96/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "byonoy",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-byonoy-luminescence-96-automate",
      "name": "Luminescence 96 Automate",
      "vendor": "Byonoy",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "luminescence",
          "upstreamOperation": "luminescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/byonoy/luminescence_96/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://byonoy.com/luminescence-96-automate/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.byonoy.ByonoyLuminescence96",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/byonoy/luminescence_96/hello-world.html",
        "manufacturerUrl": "https://byonoy.com/luminescence-96-automate/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "byonoy",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-cole-parmer-genogrinder",
      "name": "GenoGrinder",
      "vendor": "Cole Parmer",
      "category": "shaker",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "grinding",
          "upstreamOperation": "grinding",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/cole_parmer/genogrinder/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.cpsampleprep.com/product/bead-beaters/hg-600-geno-grinder-2010",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.cole_parmer.GenoGrinder",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/cole_parmer/genogrinder/hello-world.html",
        "manufacturerUrl": "https://www.cpsampleprep.com/product/bead-beaters/hg-600-geno-grinder-2010",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "needs_hardware_testing": true,
          "api_version": "v1",
          "code_slug": "cole_parmer",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-cole-parmer-masterflex",
      "name": "Masterflex L/S",
      "vendor": "Cole Parmer",
      "category": "pump",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "pumping",
          "upstreamOperation": "pumping",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://corporate.avantorsciences.com/us/en/bioprocess-solutions/fluid-management/masterflex-peristaltic-pumps/ls-series",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.cole_parmer.Masterflex",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://corporate.avantorsciences.com/us/en/bioprocess-solutions/fluid-management/masterflex-peristaltic-pumps/ls-series",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "models": [
            {
              "name": "07522-20",
              "status": "full"
            },
            {
              "name": "07522-30",
              "status": "full"
            },
            {
              "name": "07551-20",
              "status": "full"
            },
            {
              "name": "07551-30",
              "status": "full"
            },
            {
              "name": "07575-30",
              "status": "full"
            },
            {
              "name": "07575-40",
              "status": "full"
            }
          ],
          "api_version": "v1",
          "code_slug": "cole_parmer",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-curiox-ht2000",
      "name": "HT2000",
      "vendor": "Curiox",
      "category": "plate washer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "plate-washing",
          "upstreamOperation": "plate washing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/curiox/curiox-ht2000/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.curiox.com/laminar-wash-ht2000-system/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.curiox.CurioxHT2000",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/curiox/curiox-ht2000/hello-world.html",
        "manufacturerUrl": "https://www.curiox.com/laminar-wash-ht2000-system/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "needs_hardware_testing": true,
          "api_version": "v1",
          "code_slug": "curiox",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-formulatrix-mantis",
      "name": "Mantis",
      "vendor": "Formulatrix",
      "category": "bulk dispenser",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "dispensing",
          "upstreamOperation": "dispensing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://formulatrix.com/liquid-handling-systems/mantis-liquid-handler/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://formulatrix.com/liquid-handling-systems/mantis-liquid-handler/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hamilton-heater-shaker",
      "name": "Heater Shaker",
      "vendor": "Hamilton",
      "category": "heater shaker",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hamiltoncompany.com/temperature-control/hamilton-heater-shaker",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.legacy.heating_shaking.HamiltonHeaterShakerBackend",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.hamiltoncompany.com/temperature-control/hamilton-heater-shaker",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "code_slug": "legacy/heating_shaking",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hamilton-heater-cooler",
      "name": "Heater/Cooler",
      "vendor": "Hamilton",
      "category": "temperature controller",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hamiltoncompany.com/temperature-control/hamilton-heater-cooler",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.hamiltoncompany.com/temperature-control/hamilton-heater-cooler",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hamilton-hepa-fan",
      "name": "HEPA Fan",
      "vendor": "Hamilton",
      "category": "fan",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "air-filtration",
          "upstreamOperation": "air filtration",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hamilton-nimbus",
      "name": "Nimbus",
      "vendor": "Hamilton",
      "category": "liquid handler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "liquid-handling",
          "upstreamOperation": "liquid handling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "arm",
          "upstreamOperation": "arm",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hamiltoncompany.com/microlab-nimbus",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.hamiltoncompany.com/microlab-nimbus",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hamilton-prep",
      "name": "Prep",
      "vendor": "Hamilton",
      "category": "liquid handler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "liquid-handling",
          "upstreamOperation": "liquid handling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/hamilton/prep/index.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hamiltoncompany.com/microlab-prep",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/hamilton/prep/index.html",
        "manufacturerUrl": "https://www.hamiltoncompany.com/microlab-prep",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hamilton-star",
      "name": "STAR",
      "vendor": "Hamilton",
      "category": "liquid handler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "liquid-handling",
          "upstreamOperation": "liquid handling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "arm",
          "upstreamOperation": "arm",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/hamilton/star/index.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hamiltoncompany.com/microlab-star",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.legacy.liquid_handling.backends.STARBackend",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/hamilton/star/index.html",
        "manufacturerUrl": "https://www.hamiltoncompany.com/microlab-star",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "models": [
            {
              "name": "STAR",
              "status": "full"
            },
            {
              "name": "STARlet",
              "status": "full"
            }
          ],
          "api_version": "v0",
          "code_slug": "legacy/liquid_handling/backends/hamilton/STAR_backend",
          "manager": "https://discuss.pylabrobot.org/u/camillomoschner"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hamilton-tilt-module",
      "name": "Tilt Module",
      "vendor": "Hamilton",
      "category": "tilter",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "tilting",
          "upstreamOperation": "tilting",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hamiltoncompany.com/other-robotics/188061",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.hamiltoncompany.com/other-robotics/188061",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hamilton-vantage",
      "name": "Vantage",
      "vendor": "Hamilton",
      "category": "liquid handler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "liquid-handling",
          "upstreamOperation": "liquid handling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "arm",
          "upstreamOperation": "arm",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hamiltoncompany.com/microlab-vantage",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.hamiltoncompany.com/microlab-vantage",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hettich-rotanta-460",
      "name": "ROTANTA 460 Robotic",
      "vendor": "Hettich",
      "category": "centrifuge",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "centrifugation",
          "upstreamOperation": "centrifuging",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hettichlab.com/products/centrifuges/automated-centrifuges/rotanta-460-robotic/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.hettichlab.com/products/centrifuges/automated-centrifuges/rotanta-460-robotic/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-hettich-sbs-300r",
      "name": "SBS 300 R",
      "vendor": "Hettich",
      "category": "centrifuge",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "centrifugation",
          "upstreamOperation": "centrifuging",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.hettweb.com/products/sbs300robotic/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.hettweb.com/products/sbs300robotic/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-highres-ambistore",
      "name": "AmbiStore",
      "vendor": "HighRes Biosolutions",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/high_res/sample-storage/ambistore/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.highres.com/lab-instruments/sample-storage",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.high_res.sample_storage.AmbiStore",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/high_res/sample-storage/ambistore/hello-world.html",
        "manufacturerUrl": "https://www.highres.com/lab-instruments/sample-storage",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "needs_hardware_testing": true,
          "api_version": "v1",
          "code_slug": "high_res/sample_storage",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-highres-lid-valet",
      "name": "LidValet",
      "vendor": "HighRes Biosolutions",
      "category": "delidder",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "delidding",
          "upstreamOperation": "delidding",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/high_res/lid-valet/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.highres.com/lab-instruments/lid-management",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.high_res.HighResLidValet",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/high_res/lid-valet/hello-world.html",
        "manufacturerUrl": "https://www.highres.com/lab-instruments/lid-management",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "high_res",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-highres-microspin",
      "name": "MicroSpin",
      "vendor": "HighRes Biosolutions",
      "category": "centrifuge",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "centrifugation",
          "upstreamOperation": "centrifuging",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.highres.com/lab-instruments/microspin-centrifuge",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.legacy.centrifuge.MicroSpin",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.highres.com/lab-instruments/microspin-centrifuge",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "code_slug": "legacy/centrifuge",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-highres-steristore",
      "name": "SteriStore",
      "vendor": "HighRes Biosolutions",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/high_res/sample-storage/steristore/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.highres.com/lab-instruments/sample-storage",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.high_res.sample_storage.SteriStore",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/high_res/sample-storage/steristore/hello-world.html",
        "manufacturerUrl": "https://www.highres.com/lab-instruments/sample-storage",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "high_res/sample_storage",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-highres-tundrastore",
      "name": "TundraStore",
      "vendor": "HighRes Biosolutions",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/high_res/sample-storage/tundrastore/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.highres.com/lab-instruments/sample-storage",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.high_res.sample_storage.TundraStore",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/high_res/sample-storage/tundrastore/hello-world.html",
        "manufacturerUrl": "https://www.highres.com/lab-instruments/sample-storage",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "needs_hardware_testing": true,
          "api_version": "v1",
          "code_slug": "high_res/sample_storage",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-inheco-cpac",
      "name": "CPAC",
      "vendor": "Inheco",
      "category": "temperature controller",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/inheco/cpac/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.inheco.com/cpac.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.inheco.InhecoCPAC",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/inheco/cpac/hello-world.html",
        "manufacturerUrl": "https://www.inheco.com/cpac.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "inheco",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-inheco-incubator-shaker",
      "name": "Incubator Shaker (MTP/DWP)",
      "vendor": "Inheco",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/inheco/incubator_shaker/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.inheco.com/single-plate-incubator-shaker.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/inheco/incubator_shaker/hello-world.html",
        "manufacturerUrl": "https://www.inheco.com/single-plate-incubator-shaker.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-inheco-odtc",
      "name": "ODTC",
      "vendor": "Inheco",
      "category": "thermocycler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "thermocycling",
          "upstreamOperation": "thermocycling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/inheco/odtc/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.inheco.com/odtc.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/inheco/odtc/hello-world.html",
        "manufacturerUrl": "https://www.inheco.com/odtc.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-inheco-scila",
      "name": "SCILA",
      "vendor": "Inheco",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/inheco/scila/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.inheco.com/scila-co2-4-position-cell-incubator.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.inheco.scila.SCILA",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/inheco/scila/hello-world.html",
        "manufacturerUrl": "https://www.inheco.com/scila-co2-4-position-cell-incubator.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "inheco/scila",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-inheco-thermoshake",
      "name": "Thermoshake",
      "vendor": "Inheco",
      "category": "heater shaker",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/inheco/thermoshake/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.inheco.com/thermoshake-classic.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.inheco.inheco_thermoshake",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/inheco/thermoshake/hello-world.html",
        "manufacturerUrl": "https://www.inheco.com/thermoshake-classic.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "The ThermoShake resource is available; the AC and RM resource definitions are incomplete and cannot yet be instantiated.",
        "metadata": {
          "models": [
            {
              "name": "Thermoshake",
              "status": "wip",
              "needs_hardware_testing": true
            },
            {
              "name": "Thermoshake AC",
              "status": "wip",
              "needs_hardware_testing": true
            },
            {
              "name": "Thermoshake RM",
              "status": "wip",
              "needs_hardware_testing": false
            }
          ],
          "api_version": "v1",
          "code_slug": "inheco",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-kbioscience-kube",
      "name": "KUBE",
      "vendor": "KBioscience",
      "category": "sealer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "sealing",
          "upstreamOperation": "sealing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/kbioscience/kube/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.biosearchtech.com/products/pcr-reagents-kits-and-instruments/pcr-instruments-and-software/snpline-genotyping-automation/kube-plate-sealer",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.kbioscience.KBioscienceKUBE",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/kbioscience/kube/hello-world.html",
        "manufacturerUrl": "https://www.biosearchtech.com/products/pcr-reagents-kits-and-instruments/pcr-instruments-and-software/snpline-genotyping-automation/kube-plate-sealer",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "needs_hardware_testing": true,
          "api_version": "v1",
          "code_slug": "kbioscience",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-kbiosystems-ultraseal",
      "name": "Ultraseal",
      "vendor": "KBiosystems",
      "category": "sealer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "sealing",
          "upstreamOperation": "sealing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/kbiosystems/index.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://kbiosystems.com/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.kbiosystems",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/kbiosystems/index.html",
        "manufacturerUrl": "https://kbiosystems.com/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "Each model has its own driver class and hello-world guide.",
        "metadata": {
          "models": [
            {
              "name": "Ultraseal ePRO",
              "status": "wip",
              "needs_hardware_testing": true
            },
            {
              "name": "Ultraseal PRO",
              "status": "mostly",
              "needs_hardware_testing": false
            },
            {
              "name": "Ultraseal XT PRO",
              "status": "wip",
              "needs_hardware_testing": true
            }
          ],
          "api_version": "v1",
          "code_slug": "kbiosystems",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-keyence-barcode-scanner",
      "name": "Barcode Scanner",
      "vendor": "Keyence",
      "category": "barcode scanner",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "barcode-reading",
          "upstreamOperation": "barcode reading",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.keyence.com/products/barcode/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.keyence.KeyenceBarcodeScanner",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.keyence.com/products/barcode/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "keyence",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-liconic-stx",
      "name": "STX series",
      "vendor": "Liconic",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://liconic.com/products/stx.php",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://liconic.com/products/stx.php",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-mettler-toledo-mt-sics",
      "name": "MT-SICS scales and weigh modules",
      "vendor": "Mettler Toledo",
      "category": "scale",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "weighing",
          "upstreamOperation": "weighing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/mettler_toledo/scales/hello-world.html",
          "kind": "integration documentation"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.mettler_toledo.MTSICSDriver",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/mettler_toledo/scales/hello-world.html",
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "The listed models are known to support SICS; only WXS205SDU/15 has been hardware-validated with this driver (WXA-Bridge firmware 1.10).",
        "metadata": {
          "needs_hardware_testing": true,
          "models": [
            {
              "name": "AB104",
              "status": "wip"
            },
            {
              "name": "AB104-S",
              "status": "wip"
            },
            {
              "name": "AB104-S/FACT",
              "status": "wip"
            },
            {
              "name": "AB135-S",
              "status": "wip"
            },
            {
              "name": "AB135-S/FACT",
              "status": "wip"
            },
            {
              "name": "AB204",
              "status": "wip"
            },
            {
              "name": "AB204-S",
              "status": "wip"
            },
            {
              "name": "AB204-S/FACT",
              "status": "wip"
            },
            {
              "name": "AB265-S",
              "status": "wip"
            },
            {
              "name": "AB265-S/FACT",
              "status": "wip"
            },
            {
              "name": "AB304-S",
              "status": "wip"
            },
            {
              "name": "AB304-S/FACT",
              "status": "wip"
            },
            {
              "name": "AB54",
              "status": "wip"
            },
            {
              "name": "AB54-S",
              "status": "wip"
            },
            {
              "name": "AB54-S/FACT",
              "status": "wip"
            },
            {
              "name": "BBA422",
              "status": "wip"
            },
            {
              "name": "BBA425",
              "status": "wip"
            },
            {
              "name": "BBA432",
              "status": "wip"
            },
            {
              "name": "BBA439",
              "status": "wip"
            },
            {
              "name": "BBA442",
              "status": "wip"
            },
            {
              "name": "BBA462",
              "status": "wip"
            },
            {
              "name": "BBK422",
              "status": "wip"
            },
            {
              "name": "BBK432",
              "status": "wip"
            },
            {
              "name": "BBK442",
              "status": "wip"
            },
            {
              "name": "BBK462",
              "status": "wip"
            },
            {
              "name": "ICS226",
              "status": "wip"
            },
            {
              "name": "ICS241",
              "status": "wip"
            },
            {
              "name": "ICS425",
              "status": "wip"
            },
            {
              "name": "ICS426x",
              "status": "wip"
            },
            {
              "name": "ICS429",
              "status": "wip"
            },
            {
              "name": "ICS435",
              "status": "wip"
            },
            {
              "name": "ICS439",
              "status": "wip"
            },
            {
              "name": "ICS445",
              "status": "wip"
            },
            {
              "name": "ICS449",
              "status": "wip"
            },
            {
              "name": "ICS465",
              "status": "wip"
            },
            {
              "name": "ICS466x",
              "status": "wip"
            },
            {
              "name": "ICS469",
              "status": "wip"
            },
            {
              "name": "ICS629",
              "status": "wip"
            },
            {
              "name": "ICS639",
              "status": "wip"
            },
            {
              "name": "ICS649",
              "status": "wip"
            },
            {
              "name": "ICS669",
              "status": "wip"
            },
            {
              "name": "ICS685",
              "status": "wip"
            },
            {
              "name": "ICS689",
              "status": "wip"
            },
            {
              "name": "IND131",
              "status": "wip"
            },
            {
              "name": "IND221",
              "status": "wip"
            },
            {
              "name": "IND226",
              "status": "wip"
            },
            {
              "name": "IND226x",
              "status": "wip"
            },
            {
              "name": "IND231",
              "status": "wip"
            },
            {
              "name": "IND236",
              "status": "wip"
            },
            {
              "name": "IND246",
              "status": "wip"
            },
            {
              "name": "IND256x",
              "status": "wip"
            },
            {
              "name": "IND331",
              "status": "wip"
            },
            {
              "name": "IND360",
              "status": "wip"
            },
            {
              "name": "IND400",
              "status": "wip"
            },
            {
              "name": "IND425",
              "status": "wip"
            },
            {
              "name": "IND435",
              "status": "wip"
            },
            {
              "name": "IND445",
              "status": "wip"
            },
            {
              "name": "IND465",
              "status": "wip"
            },
            {
              "name": "IND560",
              "status": "wip"
            },
            {
              "name": "IND560x",
              "status": "wip"
            },
            {
              "name": "IND570",
              "status": "wip"
            },
            {
              "name": "IND690",
              "status": "wip"
            },
            {
              "name": "IND780",
              "status": "wip"
            },
            {
              "name": "IND930",
              "status": "wip"
            },
            {
              "name": "IND930SQC",
              "status": "wip"
            },
            {
              "name": "IND970-15",
              "status": "wip"
            },
            {
              "name": "IND970-19",
              "status": "wip"
            },
            {
              "name": "JE1002G",
              "status": "wip"
            },
            {
              "name": "JE1002GE",
              "status": "wip"
            },
            {
              "name": "JE1103C",
              "status": "wip"
            },
            {
              "name": "JE1103CE",
              "status": "wip"
            },
            {
              "name": "JE155DUG",
              "status": "wip"
            },
            {
              "name": "JE2002G",
              "status": "wip"
            },
            {
              "name": "JE2002GE",
              "status": "wip"
            },
            {
              "name": "JE203G",
              "status": "wip"
            },
            {
              "name": "JE203GE",
              "status": "wip"
            },
            {
              "name": "JE3002G",
              "status": "wip"
            },
            {
              "name": "JE3002GE",
              "status": "wip"
            },
            {
              "name": "JE303G",
              "status": "wip"
            },
            {
              "name": "JE303GE",
              "status": "wip"
            },
            {
              "name": "JE4002G",
              "status": "wip"
            },
            {
              "name": "JE4002GE",
              "status": "wip"
            },
            {
              "name": "JE5002G",
              "status": "wip"
            },
            {
              "name": "JE5002GE",
              "status": "wip"
            },
            {
              "name": "JE503C",
              "status": "wip"
            },
            {
              "name": "JE503CE",
              "status": "wip"
            },
            {
              "name": "JE503G",
              "status": "wip"
            },
            {
              "name": "JE503GE",
              "status": "wip"
            },
            {
              "name": "JE703C",
              "status": "wip"
            },
            {
              "name": "JE703CE",
              "status": "wip"
            },
            {
              "name": "JET1002G",
              "status": "wip"
            },
            {
              "name": "JET1002G/AED",
              "status": "wip"
            },
            {
              "name": "JET1003G",
              "status": "wip"
            },
            {
              "name": "JET1103C",
              "status": "wip"
            },
            {
              "name": "JET12002G",
              "status": "wip"
            },
            {
              "name": "JET1603C",
              "status": "wip"
            },
            {
              "name": "JET2001G/AED",
              "status": "wip"
            },
            {
              "name": "JET2002G",
              "status": "wip"
            },
            {
              "name": "JET3001G/AED",
              "status": "wip"
            },
            {
              "name": "JET3002G",
              "status": "wip"
            },
            {
              "name": "JET303G",
              "status": "wip"
            },
            {
              "name": "JET4002G",
              "status": "wip"
            },
            {
              "name": "JET503C",
              "status": "wip"
            },
            {
              "name": "JET6001G",
              "status": "wip"
            },
            {
              "name": "JET6001G/AED",
              "status": "wip"
            },
            {
              "name": "JET6002G",
              "status": "wip"
            },
            {
              "name": "JET602G/AED",
              "status": "wip"
            },
            {
              "name": "JET603G",
              "status": "wip"
            },
            {
              "name": "JET703C",
              "status": "wip"
            },
            {
              "name": "JL1502GE",
              "status": "wip"
            },
            {
              "name": "JL6001GE",
              "status": "wip"
            },
            {
              "name": "JL602GE",
              "status": "wip"
            },
            {
              "name": "JP105DUG",
              "status": "wip"
            },
            {
              "name": "JP1203C",
              "status": "wip"
            },
            {
              "name": "JP1603C",
              "status": "wip"
            },
            {
              "name": "JP2002G",
              "status": "wip"
            },
            {
              "name": "JP3002G",
              "status": "wip"
            },
            {
              "name": "JP303G",
              "status": "wip"
            },
            {
              "name": "JP4002G",
              "status": "wip"
            },
            {
              "name": "JP503C",
              "status": "wip"
            },
            {
              "name": "JP503G",
              "status": "wip"
            },
            {
              "name": "JP6002G",
              "status": "wip"
            },
            {
              "name": "JP703C",
              "status": "wip"
            },
            {
              "name": "JP8001G",
              "status": "wip"
            },
            {
              "name": "JP802G",
              "status": "wip"
            },
            {
              "name": "JS1203C",
              "status": "wip"
            },
            {
              "name": "JS1603C",
              "status": "wip"
            },
            {
              "name": "JS2002G",
              "status": "wip"
            },
            {
              "name": "JS3002G",
              "status": "wip"
            },
            {
              "name": "JS303G",
              "status": "wip"
            },
            {
              "name": "JS4002G",
              "status": "wip"
            },
            {
              "name": "JS503C",
              "status": "wip"
            },
            {
              "name": "JS503G",
              "status": "wip"
            },
            {
              "name": "JS6002G",
              "status": "wip"
            },
            {
              "name": "JS703C",
              "status": "wip"
            },
            {
              "name": "JS8001G",
              "status": "wip"
            },
            {
              "name": "JS802G",
              "status": "wip"
            },
            {
              "name": "LA104",
              "status": "wip"
            },
            {
              "name": "LA104E",
              "status": "wip"
            },
            {
              "name": "LA2002",
              "status": "wip"
            },
            {
              "name": "LA2002E",
              "status": "wip"
            },
            {
              "name": "LA203",
              "status": "wip"
            },
            {
              "name": "LA203E",
              "status": "wip"
            },
            {
              "name": "LA204",
              "status": "wip"
            },
            {
              "name": "LA204E",
              "status": "wip"
            },
            {
              "name": "LA4002",
              "status": "wip"
            },
            {
              "name": "LA4002E",
              "status": "wip"
            },
            {
              "name": "LA403",
              "status": "wip"
            },
            {
              "name": "LA403E",
              "status": "wip"
            },
            {
              "name": "LA84",
              "status": "wip"
            },
            {
              "name": "LA84E",
              "status": "wip"
            },
            {
              "name": "MA1002",
              "status": "wip"
            },
            {
              "name": "MA1002E",
              "status": "wip"
            },
            {
              "name": "MA103",
              "status": "wip"
            },
            {
              "name": "MA103E",
              "status": "wip"
            },
            {
              "name": "MA104",
              "status": "wip"
            },
            {
              "name": "MA104E",
              "status": "wip"
            },
            {
              "name": "MA12001L",
              "status": "wip"
            },
            {
              "name": "MA155DU",
              "status": "wip"
            },
            {
              "name": "MA16001L",
              "status": "wip"
            },
            {
              "name": "MA2002",
              "status": "wip"
            },
            {
              "name": "MA2002E",
              "status": "wip"
            },
            {
              "name": "MA2002P",
              "status": "wip"
            },
            {
              "name": "MA2002PE",
              "status": "wip"
            },
            {
              "name": "MA203",
              "status": "wip"
            },
            {
              "name": "MA203E",
              "status": "wip"
            },
            {
              "name": "MA204",
              "status": "wip"
            },
            {
              "name": "MA204E",
              "status": "wip"
            },
            {
              "name": "MA3002",
              "status": "wip"
            },
            {
              "name": "MA3002E",
              "status": "wip"
            },
            {
              "name": "MA303",
              "status": "wip"
            },
            {
              "name": "MA303E",
              "status": "wip"
            },
            {
              "name": "MA32000L",
              "status": "wip"
            },
            {
              "name": "MA32001L",
              "status": "wip"
            },
            {
              "name": "MA4002",
              "status": "wip"
            },
            {
              "name": "MA4002E",
              "status": "wip"
            },
            {
              "name": "MA5001",
              "status": "wip"
            },
            {
              "name": "MA5001E",
              "status": "wip"
            },
            {
              "name": "MA503",
              "status": "wip"
            },
            {
              "name": "MA503E",
              "status": "wip"
            },
            {
              "name": "MA54",
              "status": "wip"
            },
            {
              "name": "MA54E",
              "status": "wip"
            },
            {
              "name": "MA55",
              "status": "wip"
            },
            {
              "name": "MA6001P",
              "status": "wip"
            },
            {
              "name": "MA6001PE",
              "status": "wip"
            },
            {
              "name": "MA6002",
              "status": "wip"
            },
            {
              "name": "MA6002E",
              "status": "wip"
            },
            {
              "name": "MA602",
              "status": "wip"
            },
            {
              "name": "MA602E",
              "status": "wip"
            },
            {
              "name": "MA602P",
              "status": "wip"
            },
            {
              "name": "MA602PE",
              "status": "wip"
            },
            {
              "name": "MA95",
              "status": "wip"
            },
            {
              "name": "ME1002",
              "status": "wip"
            },
            {
              "name": "ME1002E",
              "status": "wip"
            },
            {
              "name": "ME1002T/00",
              "status": "wip"
            },
            {
              "name": "ME1002TE/00",
              "status": "wip"
            },
            {
              "name": "ME103",
              "status": "wip"
            },
            {
              "name": "ME103E",
              "status": "wip"
            },
            {
              "name": "ME103T/00",
              "status": "wip"
            },
            {
              "name": "ME103TE/00",
              "status": "wip"
            },
            {
              "name": "ME2002",
              "status": "wip"
            },
            {
              "name": "ME2002E",
              "status": "wip"
            },
            {
              "name": "ME2002T/00",
              "status": "wip"
            },
            {
              "name": "ME2002TE/00",
              "status": "wip"
            },
            {
              "name": "ME203",
              "status": "wip"
            },
            {
              "name": "ME203E",
              "status": "wip"
            },
            {
              "name": "ME203T/00",
              "status": "wip"
            },
            {
              "name": "ME203TE/00",
              "status": "wip"
            },
            {
              "name": "ME3002",
              "status": "wip"
            },
            {
              "name": "ME3002E",
              "status": "wip"
            },
            {
              "name": "ME3002T/00",
              "status": "wip"
            },
            {
              "name": "ME3002TE/00",
              "status": "wip"
            },
            {
              "name": "ME303",
              "status": "wip"
            },
            {
              "name": "ME303E",
              "status": "wip"
            },
            {
              "name": "ME303T/00",
              "status": "wip"
            },
            {
              "name": "ME303TE/00",
              "status": "wip"
            },
            {
              "name": "ME4001T/00",
              "status": "wip"
            },
            {
              "name": "ME4001TE/00",
              "status": "wip"
            },
            {
              "name": "ME4002",
              "status": "wip"
            },
            {
              "name": "ME4002E",
              "status": "wip"
            },
            {
              "name": "ME4002T/00",
              "status": "wip"
            },
            {
              "name": "ME4002TE/00",
              "status": "wip"
            },
            {
              "name": "ME403",
              "status": "wip"
            },
            {
              "name": "ME403E",
              "status": "wip"
            },
            {
              "name": "ME403T/00",
              "status": "wip"
            },
            {
              "name": "ME403TE/00",
              "status": "wip"
            },
            {
              "name": "ME5002T/00",
              "status": "wip"
            },
            {
              "name": "ME5002TE/00",
              "status": "wip"
            },
            {
              "name": "ME503T/00",
              "status": "wip"
            },
            {
              "name": "ME503TE/00",
              "status": "wip"
            },
            {
              "name": "ME6002T/00",
              "status": "wip"
            },
            {
              "name": "ME6002TE/00",
              "status": "wip"
            },
            {
              "name": "ME603T/00",
              "status": "wip"
            },
            {
              "name": "ME603TE/00",
              "status": "wip"
            },
            {
              "name": "ML1602T/00",
              "status": "wip"
            },
            {
              "name": "ML203T/00",
              "status": "wip"
            },
            {
              "name": "ML3001T/00",
              "status": "wip"
            },
            {
              "name": "ML3002T/00",
              "status": "wip"
            },
            {
              "name": "ML303T/00",
              "status": "wip"
            },
            {
              "name": "ML4002T/00",
              "status": "wip"
            },
            {
              "name": "ML503T/00",
              "status": "wip"
            },
            {
              "name": "ML6001T/00",
              "status": "wip"
            },
            {
              "name": "ML6002T/00",
              "status": "wip"
            },
            {
              "name": "ML802T/00",
              "status": "wip"
            },
            {
              "name": "MR1002",
              "status": "wip"
            },
            {
              "name": "MR104",
              "status": "wip"
            },
            {
              "name": "MR2002",
              "status": "wip"
            },
            {
              "name": "MR203",
              "status": "wip"
            },
            {
              "name": "MR204",
              "status": "wip"
            },
            {
              "name": "MR3002",
              "status": "wip"
            },
            {
              "name": "MR303",
              "status": "wip"
            },
            {
              "name": "MR304",
              "status": "wip"
            },
            {
              "name": "MR4002",
              "status": "wip"
            },
            {
              "name": "MR503",
              "status": "wip"
            },
            {
              "name": "MR6001",
              "status": "wip"
            },
            {
              "name": "MR6002",
              "status": "wip"
            },
            {
              "name": "MR603",
              "status": "wip"
            },
            {
              "name": "MS1003S",
              "status": "wip"
            },
            {
              "name": "MS1003TS",
              "status": "wip"
            },
            {
              "name": "MS1003TS/00",
              "status": "wip"
            },
            {
              "name": "MS104S",
              "status": "wip"
            },
            {
              "name": "MS104TS",
              "status": "wip"
            },
            {
              "name": "MS105",
              "status": "wip"
            },
            {
              "name": "MS105DU",
              "status": "wip"
            },
            {
              "name": "MS12001L",
              "status": "wip"
            },
            {
              "name": "MS12002TS",
              "status": "wip"
            },
            {
              "name": "MS12002TS/00",
              "status": "wip"
            },
            {
              "name": "MS15KLE",
              "status": "wip"
            },
            {
              "name": "MS15KLIPE",
              "status": "wip"
            },
            {
              "name": "MS16001L",
              "status": "wip"
            },
            {
              "name": "MS16001LE",
              "status": "wip"
            },
            {
              "name": "MS1602S",
              "status": "wip"
            },
            {
              "name": "MS1602SE",
              "status": "wip"
            },
            {
              "name": "MS1602TS",
              "status": "wip"
            },
            {
              "name": "MS1602TS/00",
              "status": "wip"
            },
            {
              "name": "MS204",
              "status": "wip"
            },
            {
              "name": "MS204S",
              "status": "wip"
            },
            {
              "name": "MS204TS",
              "status": "wip"
            },
            {
              "name": "MS205DU",
              "status": "wip"
            },
            {
              "name": "MS24KLIPE",
              "status": "wip"
            },
            {
              "name": "MS3001S",
              "status": "wip"
            },
            {
              "name": "MS3002S",
              "status": "wip"
            },
            {
              "name": "MS3002SE",
              "status": "wip"
            },
            {
              "name": "MS3002TS",
              "status": "wip"
            },
            {
              "name": "MS3002TS/00",
              "status": "wip"
            },
            {
              "name": "MS303S",
              "status": "wip"
            },
            {
              "name": "MS303SE",
              "status": "wip"
            },
            {
              "name": "MS303TS",
              "status": "wip"
            },
            {
              "name": "MS303TS/00",
              "status": "wip"
            },
            {
              "name": "MS304S",
              "status": "wip"
            },
            {
              "name": "MS304TS",
              "status": "wip"
            },
            {
              "name": "MS30KLE",
              "status": "wip"
            },
            {
              "name": "MS32000L",
              "status": "wip"
            },
            {
              "name": "MS32000LE",
              "status": "wip"
            },
            {
              "name": "MS32001L",
              "status": "wip"
            },
            {
              "name": "MS32001LE",
              "status": "wip"
            },
            {
              "name": "MS4002S",
              "status": "wip"
            },
            {
              "name": "MS4002SDR",
              "status": "wip"
            },
            {
              "name": "MS4002TS",
              "status": "wip"
            },
            {
              "name": "MS4002TS/00",
              "status": "wip"
            },
            {
              "name": "MS4002TSDR",
              "status": "wip"
            },
            {
              "name": "MS4002TSDR/00",
              "status": "wip"
            },
            {
              "name": "MS403S",
              "status": "wip"
            },
            {
              "name": "MS403TS",
              "status": "wip"
            },
            {
              "name": "MS403TS/00",
              "status": "wip"
            },
            {
              "name": "MS6001S",
              "status": "wip"
            },
            {
              "name": "MS6002S",
              "status": "wip"
            },
            {
              "name": "MS6002SDR",
              "status": "wip"
            },
            {
              "name": "MS6002TS",
              "status": "wip"
            },
            {
              "name": "MS6002TS/00",
              "status": "wip"
            },
            {
              "name": "MS6002TSDR",
              "status": "wip"
            },
            {
              "name": "MS6002TSDR/00",
              "status": "wip"
            },
            {
              "name": "MS603S",
              "status": "wip"
            },
            {
              "name": "MS603TS",
              "status": "wip"
            },
            {
              "name": "MS603TS/00",
              "status": "wip"
            },
            {
              "name": "MS8000S",
              "status": "wip"
            },
            {
              "name": "MS8000SE",
              "status": "wip"
            },
            {
              "name": "MS8001S",
              "status": "wip"
            },
            {
              "name": "MS8001SE",
              "status": "wip"
            },
            {
              "name": "MS8001TS",
              "status": "wip"
            },
            {
              "name": "MS8001TS/00",
              "status": "wip"
            },
            {
              "name": "MS802S",
              "status": "wip"
            },
            {
              "name": "MX104",
              "status": "wip"
            },
            {
              "name": "MX105",
              "status": "wip"
            },
            {
              "name": "MX105DU",
              "status": "wip"
            },
            {
              "name": "MX12001L",
              "status": "wip"
            },
            {
              "name": "MX12002",
              "status": "wip"
            },
            {
              "name": "MX1203",
              "status": "wip"
            },
            {
              "name": "MX1203N",
              "status": "wip"
            },
            {
              "name": "MX16001L",
              "status": "wip"
            },
            {
              "name": "MX2002",
              "status": "wip"
            },
            {
              "name": "MX204",
              "status": "wip"
            },
            {
              "name": "MX205DU",
              "status": "wip"
            },
            {
              "name": "MX303",
              "status": "wip"
            },
            {
              "name": "MX303N",
              "status": "wip"
            },
            {
              "name": "MX304",
              "status": "wip"
            },
            {
              "name": "MX32000L",
              "status": "wip"
            },
            {
              "name": "MX32001L",
              "status": "wip"
            },
            {
              "name": "MX4002",
              "status": "wip"
            },
            {
              "name": "MX6001",
              "status": "wip"
            },
            {
              "name": "MX6002",
              "status": "wip"
            },
            {
              "name": "MX6002DR",
              "status": "wip"
            },
            {
              "name": "MX603",
              "status": "wip"
            },
            {
              "name": "MX603N",
              "status": "wip"
            },
            {
              "name": "PB1501-L",
              "status": "wip"
            },
            {
              "name": "PB1501-S",
              "status": "wip"
            },
            {
              "name": "PB1501-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB1502-L",
              "status": "wip"
            },
            {
              "name": "PB1502-S",
              "status": "wip"
            },
            {
              "name": "PB1502-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB153-L",
              "status": "wip"
            },
            {
              "name": "PB153-S",
              "status": "wip"
            },
            {
              "name": "PB153-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB3001-L",
              "status": "wip"
            },
            {
              "name": "PB3001-S",
              "status": "wip"
            },
            {
              "name": "PB3001-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB3002-L",
              "status": "wip"
            },
            {
              "name": "PB3002-LDR",
              "status": "wip"
            },
            {
              "name": "PB3002-S",
              "status": "wip"
            },
            {
              "name": "PB3002-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB3002-SDR",
              "status": "wip"
            },
            {
              "name": "PB3002-SDR/FACT",
              "status": "wip"
            },
            {
              "name": "PB303-L",
              "status": "wip"
            },
            {
              "name": "PB303-LDR",
              "status": "wip"
            },
            {
              "name": "PB303-S",
              "status": "wip"
            },
            {
              "name": "PB303-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB303-SDR",
              "status": "wip"
            },
            {
              "name": "PB303-SDR/FACT",
              "status": "wip"
            },
            {
              "name": "PB4002-S",
              "status": "wip"
            },
            {
              "name": "PB4002-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB403-S",
              "status": "wip"
            },
            {
              "name": "PB403-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB5001-L",
              "status": "wip"
            },
            {
              "name": "PB5001-S",
              "status": "wip"
            },
            {
              "name": "PB5001-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB503-S",
              "status": "wip"
            },
            {
              "name": "PB503-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB602-L",
              "status": "wip"
            },
            {
              "name": "PB602-S",
              "status": "wip"
            },
            {
              "name": "PB602-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB8000-L",
              "status": "wip"
            },
            {
              "name": "PB8000-S",
              "status": "wip"
            },
            {
              "name": "PB8000-S/FACT",
              "status": "wip"
            },
            {
              "name": "PB8001-L",
              "status": "wip"
            },
            {
              "name": "PB8001-S",
              "status": "wip"
            },
            {
              "name": "PB8001-S/FACT",
              "status": "wip"
            },
            {
              "name": "PG1003-S",
              "status": "wip"
            },
            {
              "name": "PG2002-S",
              "status": "wip"
            },
            {
              "name": "PG203-S",
              "status": "wip"
            },
            {
              "name": "PG3001-S",
              "status": "wip"
            },
            {
              "name": "PG4002-S",
              "status": "wip"
            },
            {
              "name": "PG403-S",
              "status": "wip"
            },
            {
              "name": "PG5002-S",
              "status": "wip"
            },
            {
              "name": "PG503-S",
              "status": "wip"
            },
            {
              "name": "PG6002-S",
              "status": "wip"
            },
            {
              "name": "PG603-S",
              "status": "wip"
            },
            {
              "name": "PG802-S",
              "status": "wip"
            },
            {
              "name": "PR10003MC",
              "status": "wip"
            },
            {
              "name": "PR1200",
              "status": "wip"
            },
            {
              "name": "PR1203",
              "status": "wip"
            },
            {
              "name": "PR2002",
              "status": "wip"
            },
            {
              "name": "PR2003DR",
              "status": "wip"
            },
            {
              "name": "PR2003MC",
              "status": "wip"
            },
            {
              "name": "PR2004MC",
              "status": "wip"
            },
            {
              "name": "PR203",
              "status": "wip"
            },
            {
              "name": "PR3001",
              "status": "wip"
            },
            {
              "name": "PR5001",
              "status": "wip"
            },
            {
              "name": "PR5002",
              "status": "wip"
            },
            {
              "name": "PR5002DR",
              "status": "wip"
            },
            {
              "name": "PR5003DU",
              "status": "wip"
            },
            {
              "name": "PR5003MC",
              "status": "wip"
            },
            {
              "name": "PR502",
              "status": "wip"
            },
            {
              "name": "PR503",
              "status": "wip"
            },
            {
              "name": "PR503DR",
              "status": "wip"
            },
            {
              "name": "PR504DR",
              "status": "wip"
            },
            {
              "name": "PR700",
              "status": "wip"
            },
            {
              "name": "PR8000",
              "status": "wip"
            },
            {
              "name": "PR8001",
              "status": "wip"
            },
            {
              "name": "PR8002",
              "status": "wip"
            },
            {
              "name": "PR8002DR",
              "status": "wip"
            },
            {
              "name": "PR802",
              "status": "wip"
            },
            {
              "name": "PR803",
              "status": "wip"
            },
            {
              "name": "SAG203F",
              "status": "wip"
            },
            {
              "name": "SAG204",
              "status": "wip"
            },
            {
              "name": "SAG245",
              "status": "wip"
            },
            {
              "name": "SAG285",
              "status": "wip"
            },
            {
              "name": "SB12001",
              "status": "wip"
            },
            {
              "name": "SB16000",
              "status": "wip"
            },
            {
              "name": "SB16001",
              "status": "wip"
            },
            {
              "name": "SB16001DR",
              "status": "wip"
            },
            {
              "name": "SB24001DR",
              "status": "wip"
            },
            {
              "name": "SB32000",
              "status": "wip"
            },
            {
              "name": "SB32001DR",
              "status": "wip"
            },
            {
              "name": "SB8000",
              "status": "wip"
            },
            {
              "name": "SB8001",
              "status": "wip"
            },
            {
              "name": "SLF615",
              "status": "wip"
            },
            {
              "name": "SLF630",
              "status": "wip"
            },
            {
              "name": "SLF660",
              "status": "wip"
            },
            {
              "name": "SPC",
              "status": "wip"
            },
            {
              "name": "SPD12002",
              "status": "wip"
            },
            {
              "name": "SPD12002-C",
              "status": "wip"
            },
            {
              "name": "SPE2003-C",
              "status": "wip"
            },
            {
              "name": "SPE4002-C",
              "status": "wip"
            },
            {
              "name": "SPE403-C",
              "status": "wip"
            },
            {
              "name": "SPE404-C",
              "status": "wip"
            },
            {
              "name": "SPE7002-C",
              "status": "wip"
            },
            {
              "name": "SR16000",
              "status": "wip"
            },
            {
              "name": "SR16001",
              "status": "wip"
            },
            {
              "name": "SR16001DR",
              "status": "wip"
            },
            {
              "name": "SR32000",
              "status": "wip"
            },
            {
              "name": "SR32001",
              "status": "wip"
            },
            {
              "name": "SR32001DR",
              "status": "wip"
            },
            {
              "name": "SR64000",
              "status": "wip"
            },
            {
              "name": "SR64001",
              "status": "wip"
            },
            {
              "name": "SR64001DR",
              "status": "wip"
            },
            {
              "name": "SR8001",
              "status": "wip"
            },
            {
              "name": "Viper EX",
              "status": "wip"
            },
            {
              "name": "Viper SC",
              "status": "wip"
            },
            {
              "name": "Viper SW",
              "status": "wip"
            },
            {
              "name": "WKC204C",
              "status": "wip"
            },
            {
              "name": "WKC6002C",
              "status": "wip"
            },
            {
              "name": "WKC603C",
              "status": "wip"
            },
            {
              "name": "WM123",
              "status": "wip"
            },
            {
              "name": "WM124",
              "status": "wip"
            },
            {
              "name": "WM3002",
              "status": "wip"
            },
            {
              "name": "WM3002X",
              "status": "wip"
            },
            {
              "name": "WM503",
              "status": "wip"
            },
            {
              "name": "WM6002",
              "status": "wip"
            },
            {
              "name": "WM6002X",
              "status": "wip"
            },
            {
              "name": "WMC15-SH",
              "status": "wip"
            },
            {
              "name": "WMC24-SH",
              "status": "wip"
            },
            {
              "name": "WMC25-SH",
              "status": "wip"
            },
            {
              "name": "WMF204C-L/IE",
              "status": "wip"
            },
            {
              "name": "WMF204C-L/PN",
              "status": "wip"
            },
            {
              "name": "WMF204C-W/IE",
              "status": "wip"
            },
            {
              "name": "WMF204C-W/PN",
              "status": "wip"
            },
            {
              "name": "WMF303C-L/IE",
              "status": "wip"
            },
            {
              "name": "WMF303C-L/PN",
              "status": "wip"
            },
            {
              "name": "WMF303C-W/IE",
              "status": "wip"
            },
            {
              "name": "WMF303C-W/PN",
              "status": "wip"
            },
            {
              "name": "WMS104C",
              "status": "wip"
            },
            {
              "name": "WMS1203C",
              "status": "wip"
            },
            {
              "name": "WMS204",
              "status": "wip"
            },
            {
              "name": "WMS4002",
              "status": "wip"
            },
            {
              "name": "WMS403",
              "status": "wip"
            },
            {
              "name": "WMS404C",
              "status": "wip"
            },
            {
              "name": "WMS404C-L",
              "status": "wip"
            },
            {
              "name": "WMS6002C",
              "status": "wip"
            },
            {
              "name": "WMS803",
              "status": "wip"
            },
            {
              "name": "WXS204",
              "status": "wip"
            },
            {
              "name": "WXS204S/15",
              "status": "wip"
            },
            {
              "name": "WXS204SV/15",
              "status": "wip"
            },
            {
              "name": "WXS205",
              "status": "wip"
            },
            {
              "name": "WXS205DU",
              "status": "wip"
            },
            {
              "name": "WXS205S/15",
              "status": "wip"
            },
            {
              "name": "WXS205SDU/15",
              "status": "full",
              "needs_hardware_testing": false
            },
            {
              "name": "WXS205SDUV/15",
              "status": "wip"
            },
            {
              "name": "WXS205SV/15",
              "status": "wip"
            },
            {
              "name": "WXS26",
              "status": "wip"
            },
            {
              "name": "WXS26DU",
              "status": "wip"
            },
            {
              "name": "WXS26S/15",
              "status": "wip"
            },
            {
              "name": "WXS26SDU/15",
              "status": "wip"
            },
            {
              "name": "WXS26SDUV/15",
              "status": "wip"
            },
            {
              "name": "WXS26SV/15",
              "status": "wip"
            },
            {
              "name": "WXSS204",
              "status": "wip"
            },
            {
              "name": "WXSS204/A",
              "status": "wip"
            },
            {
              "name": "WXSS204/M",
              "status": "wip"
            },
            {
              "name": "WXSS204V",
              "status": "wip"
            },
            {
              "name": "WXSS205",
              "status": "wip"
            },
            {
              "name": "WXSS205/A",
              "status": "wip"
            },
            {
              "name": "WXSS205/M",
              "status": "wip"
            },
            {
              "name": "WXSS205DU",
              "status": "wip"
            },
            {
              "name": "WXSS205DU/A",
              "status": "wip"
            },
            {
              "name": "WXSS205DU/M",
              "status": "wip"
            },
            {
              "name": "WXSS205DUV",
              "status": "wip"
            },
            {
              "name": "WXSS205V",
              "status": "wip"
            },
            {
              "name": "WXSS26",
              "status": "wip"
            },
            {
              "name": "WXSS26/A",
              "status": "wip"
            },
            {
              "name": "WXSS26/M",
              "status": "wip"
            },
            {
              "name": "WXSS26DU",
              "status": "wip"
            },
            {
              "name": "WXSS26DU/A",
              "status": "wip"
            },
            {
              "name": "WXSS26DU/M",
              "status": "wip"
            },
            {
              "name": "WXSS26DUV",
              "status": "wip"
            },
            {
              "name": "WXSS26V",
              "status": "wip"
            },
            {
              "name": "WXTP204",
              "status": "wip"
            },
            {
              "name": "WXTP204V",
              "status": "wip"
            },
            {
              "name": "WXTP205",
              "status": "wip"
            },
            {
              "name": "WXTP205DU",
              "status": "wip"
            },
            {
              "name": "WXTP205DUV",
              "status": "wip"
            },
            {
              "name": "WXTP205V",
              "status": "wip"
            },
            {
              "name": "WXTP26",
              "status": "wip"
            },
            {
              "name": "WXTP26DU",
              "status": "wip"
            },
            {
              "name": "WXTP26DUV",
              "status": "wip"
            },
            {
              "name": "WXTP26V",
              "status": "wip"
            },
            {
              "name": "WXTS204",
              "status": "wip"
            },
            {
              "name": "WXTS204/A",
              "status": "wip"
            },
            {
              "name": "WXTS204/M",
              "status": "wip"
            },
            {
              "name": "WXTS204V",
              "status": "wip"
            },
            {
              "name": "WXTS205",
              "status": "wip"
            },
            {
              "name": "WXTS205/A",
              "status": "wip"
            },
            {
              "name": "WXTS205/M",
              "status": "wip"
            },
            {
              "name": "WXTS205DU",
              "status": "wip"
            },
            {
              "name": "WXTS205DU/A",
              "status": "wip"
            },
            {
              "name": "WXTS205DU/M",
              "status": "wip"
            },
            {
              "name": "WXTS205DUV",
              "status": "wip"
            },
            {
              "name": "WXTS205V",
              "status": "wip"
            },
            {
              "name": "WXTS26",
              "status": "wip"
            },
            {
              "name": "WXTS26/A",
              "status": "wip"
            },
            {
              "name": "WXTS26/M",
              "status": "wip"
            },
            {
              "name": "WXTS26DU",
              "status": "wip"
            },
            {
              "name": "WXTS26DU/A",
              "status": "wip"
            },
            {
              "name": "WXTS26DU/M",
              "status": "wip"
            },
            {
              "name": "WXTS26DUV",
              "status": "wip"
            },
            {
              "name": "WXTS26V",
              "status": "wip"
            },
            {
              "name": "WXTS3DU",
              "status": "wip"
            },
            {
              "name": "WXTS3DU/A",
              "status": "wip"
            },
            {
              "name": "WXTS3DU/M",
              "status": "wip"
            },
            {
              "name": "XA105",
              "status": "wip"
            },
            {
              "name": "XA1502S",
              "status": "wip"
            },
            {
              "name": "XA204",
              "status": "wip"
            },
            {
              "name": "XA3001S",
              "status": "wip"
            },
            {
              "name": "XA3002S",
              "status": "wip"
            },
            {
              "name": "XA303S",
              "status": "wip"
            },
            {
              "name": "XA5002S",
              "status": "wip"
            },
            {
              "name": "XA503S",
              "status": "wip"
            },
            {
              "name": "XP105",
              "status": "wip"
            },
            {
              "name": "XP1202S",
              "status": "wip"
            },
            {
              "name": "XP1203S",
              "status": "wip"
            },
            {
              "name": "XP2001S",
              "status": "wip"
            },
            {
              "name": "XP2002S",
              "status": "wip"
            },
            {
              "name": "XP2003S",
              "status": "wip"
            },
            {
              "name": "XP203S",
              "status": "wip"
            },
            {
              "name": "XP204S",
              "status": "wip"
            },
            {
              "name": "XP205",
              "status": "wip"
            },
            {
              "name": "XP26",
              "status": "wip"
            },
            {
              "name": "XP2U",
              "status": "wip"
            },
            {
              "name": "XP4001S",
              "status": "wip"
            },
            {
              "name": "XP4002S",
              "status": "wip"
            },
            {
              "name": "XP404S",
              "status": "wip"
            },
            {
              "name": "XP5003S",
              "status": "wip"
            },
            {
              "name": "XP504",
              "status": "wip"
            },
            {
              "name": "XP56",
              "status": "wip"
            },
            {
              "name": "XP6",
              "status": "wip"
            },
            {
              "name": "XP6001S",
              "status": "wip"
            },
            {
              "name": "XP6002S",
              "status": "wip"
            },
            {
              "name": "XP603S",
              "status": "wip"
            },
            {
              "name": "XP8001S",
              "status": "wip"
            },
            {
              "name": "XP8002S",
              "status": "wip"
            },
            {
              "name": "XP802S",
              "status": "wip"
            },
            {
              "name": "XPE10001L",
              "status": "wip"
            },
            {
              "name": "XPE10001S",
              "status": "wip"
            },
            {
              "name": "XPE10002S",
              "status": "wip"
            },
            {
              "name": "XPE105",
              "status": "wip"
            },
            {
              "name": "XPE1202S",
              "status": "wip"
            },
            {
              "name": "XPE1203S",
              "status": "wip"
            },
            {
              "name": "XPE15002L",
              "status": "wip"
            },
            {
              "name": "XPE16001L",
              "status": "wip"
            },
            {
              "name": "XPE20002LDR",
              "status": "wip"
            },
            {
              "name": "XPE2002S",
              "status": "wip"
            },
            {
              "name": "XPE204",
              "status": "wip"
            },
            {
              "name": "XPE204S",
              "status": "wip"
            },
            {
              "name": "XPE205",
              "status": "wip"
            },
            {
              "name": "XPE205CDR",
              "status": "wip"
            },
            {
              "name": "XPE205DR",
              "status": "wip"
            },
            {
              "name": "XPE26",
              "status": "wip"
            },
            {
              "name": "XPE26C",
              "status": "wip"
            },
            {
              "name": "XPE26DR",
              "status": "wip"
            },
            {
              "name": "XPE3003S",
              "status": "wip"
            },
            {
              "name": "XPE3003SD5",
              "status": "wip"
            },
            {
              "name": "XPE303S",
              "status": "wip"
            },
            {
              "name": "XPE303SN",
              "status": "wip"
            },
            {
              "name": "XPE32000L",
              "status": "wip"
            },
            {
              "name": "XPE32001L",
              "status": "wip"
            },
            {
              "name": "XPE4001S",
              "status": "wip"
            },
            {
              "name": "XPE4002S",
              "status": "wip"
            },
            {
              "name": "XPE404S",
              "status": "wip"
            },
            {
              "name": "XPE5003S",
              "status": "wip"
            },
            {
              "name": "XPE504",
              "status": "wip"
            },
            {
              "name": "XPE505C",
              "status": "wip"
            },
            {
              "name": "XPE56C",
              "status": "wip"
            },
            {
              "name": "XPE6001S",
              "status": "wip"
            },
            {
              "name": "XPE6002S",
              "status": "wip"
            },
            {
              "name": "XPE6002SDR",
              "status": "wip"
            },
            {
              "name": "XPE6003SD5",
              "status": "wip"
            },
            {
              "name": "XPE603S",
              "status": "wip"
            },
            {
              "name": "XPE603SDR",
              "status": "wip"
            },
            {
              "name": "XPE603SN",
              "status": "wip"
            },
            {
              "name": "XPE603SNDR",
              "status": "wip"
            },
            {
              "name": "XPE64000L",
              "status": "wip"
            },
            {
              "name": "XPE64001L",
              "status": "wip"
            },
            {
              "name": "XPE8001S",
              "status": "wip"
            },
            {
              "name": "XPE8002S",
              "status": "wip"
            },
            {
              "name": "XPR10",
              "status": "wip"
            },
            {
              "name": "XPR10003SC",
              "status": "wip"
            },
            {
              "name": "XPR1004SC",
              "status": "wip"
            },
            {
              "name": "XPR105",
              "status": "wip"
            },
            {
              "name": "XPR105DUHR",
              "status": "wip"
            },
            {
              "name": "XPR106DUH",
              "status": "wip"
            },
            {
              "name": "XPR106DUHR",
              "status": "wip"
            },
            {
              "name": "XPR12001L",
              "status": "wip"
            },
            {
              "name": "XPR12001S",
              "status": "wip"
            },
            {
              "name": "XPR12002S",
              "status": "wip"
            },
            {
              "name": "XPR12003SD5",
              "status": "wip"
            },
            {
              "name": "XPR1202S",
              "status": "wip"
            },
            {
              "name": "XPR1203S",
              "status": "wip"
            },
            {
              "name": "XPR15002L",
              "status": "wip"
            },
            {
              "name": "XPR16001L",
              "status": "wip"
            },
            {
              "name": "XPR2",
              "status": "wip"
            },
            {
              "name": "XPR20002LDR",
              "status": "wip"
            },
            {
              "name": "XPR2002S",
              "status": "wip"
            },
            {
              "name": "XPR2003S",
              "status": "wip"
            },
            {
              "name": "XPR2003SC",
              "status": "wip"
            },
            {
              "name": "XPR2004SC",
              "status": "wip"
            },
            {
              "name": "XPR204",
              "status": "wip"
            },
            {
              "name": "XPR204E",
              "status": "wip"
            },
            {
              "name": "XPR204E/A",
              "status": "wip"
            },
            {
              "name": "XPR204E/M",
              "status": "wip"
            },
            {
              "name": "XPR204S",
              "status": "wip"
            },
            {
              "name": "XPR205",
              "status": "wip"
            },
            {
              "name": "XPR225DR",
              "status": "wip"
            },
            {
              "name": "XPR226CDR",
              "status": "wip"
            },
            {
              "name": "XPR226DR",
              "status": "wip"
            },
            {
              "name": "XPR26003LC",
              "status": "wip"
            },
            {
              "name": "XPR2U",
              "status": "wip"
            },
            {
              "name": "XPR2U/A",
              "status": "wip"
            },
            {
              "name": "XPR2U/M",
              "status": "wip"
            },
            {
              "name": "XPR3003S",
              "status": "wip"
            },
            {
              "name": "XPR3004SD5",
              "status": "wip"
            },
            {
              "name": "XPR303S",
              "status": "wip"
            },
            {
              "name": "XPR303SN",
              "status": "wip"
            },
            {
              "name": "XPR305DR",
              "status": "wip"
            },
            {
              "name": "XPR32000L",
              "status": "wip"
            },
            {
              "name": "XPR32001L",
              "status": "wip"
            },
            {
              "name": "XPR32003LD5C",
              "status": "wip"
            },
            {
              "name": "XPR36",
              "status": "wip"
            },
            {
              "name": "XPR36C",
              "status": "wip"
            },
            {
              "name": "XPR36DR",
              "status": "wip"
            },
            {
              "name": "XPR4001S",
              "status": "wip"
            },
            {
              "name": "XPR4002S",
              "status": "wip"
            },
            {
              "name": "XPR404S",
              "status": "wip"
            },
            {
              "name": "XPR5003S",
              "status": "wip"
            },
            {
              "name": "XPR5003SC",
              "status": "wip"
            },
            {
              "name": "XPR5004SC",
              "status": "wip"
            },
            {
              "name": "XPR504S",
              "status": "wip"
            },
            {
              "name": "XPR56",
              "status": "wip"
            },
            {
              "name": "XPR56C",
              "status": "wip"
            },
            {
              "name": "XPR56DR",
              "status": "wip"
            },
            {
              "name": "XPR6002S",
              "status": "wip"
            },
            {
              "name": "XPR6002SDR",
              "status": "wip"
            },
            {
              "name": "XPR6003SD5",
              "status": "wip"
            },
            {
              "name": "XPR603S",
              "status": "wip"
            },
            {
              "name": "XPR603SN",
              "status": "wip"
            },
            {
              "name": "XPR64000L",
              "status": "wip"
            },
            {
              "name": "XPR64001L",
              "status": "wip"
            },
            {
              "name": "XPR64002LC",
              "status": "wip"
            },
            {
              "name": "XPR64002LC-T",
              "status": "wip"
            },
            {
              "name": "XPR64003LD5C",
              "status": "wip"
            },
            {
              "name": "XPR6U",
              "status": "wip"
            },
            {
              "name": "XPR6U/M",
              "status": "wip"
            },
            {
              "name": "XPR6UD5",
              "status": "wip"
            },
            {
              "name": "XPR8001S",
              "status": "wip"
            },
            {
              "name": "XPR8002S",
              "status": "wip"
            },
            {
              "name": "XS10000M",
              "status": "wip"
            },
            {
              "name": "XS10001L",
              "status": "wip"
            },
            {
              "name": "XS10001M",
              "status": "wip"
            },
            {
              "name": "XS10001S",
              "status": "wip"
            },
            {
              "name": "XS10002S",
              "status": "wip"
            },
            {
              "name": "XS1003S",
              "status": "wip"
            },
            {
              "name": "XS104",
              "status": "wip"
            },
            {
              "name": "XS105",
              "status": "wip"
            },
            {
              "name": "XS1202S",
              "status": "wip"
            },
            {
              "name": "XS1203S",
              "status": "wip"
            },
            {
              "name": "XS16000L",
              "status": "wip"
            },
            {
              "name": "XS16000M",
              "status": "wip"
            },
            {
              "name": "XS16001L",
              "status": "wip"
            },
            {
              "name": "XS2002S",
              "status": "wip"
            },
            {
              "name": "XS203S",
              "status": "wip"
            },
            {
              "name": "XS204",
              "status": "wip"
            },
            {
              "name": "XS204SX",
              "status": "wip"
            },
            {
              "name": "XS205",
              "status": "wip"
            },
            {
              "name": "XS3",
              "status": "wip"
            },
            {
              "name": "XS303S",
              "status": "wip"
            },
            {
              "name": "XS303SN",
              "status": "wip"
            },
            {
              "name": "XS32000L",
              "status": "wip"
            },
            {
              "name": "XS32001L",
              "status": "wip"
            },
            {
              "name": "XS32001LDR",
              "status": "wip"
            },
            {
              "name": "XS32001LX",
              "status": "wip"
            },
            {
              "name": "XS4001S",
              "status": "wip"
            },
            {
              "name": "XS4002S",
              "status": "wip"
            },
            {
              "name": "XS403S",
              "status": "wip"
            },
            {
              "name": "XS5003S",
              "status": "wip"
            },
            {
              "name": "XS5003SXDR",
              "status": "wip"
            },
            {
              "name": "XS6001M",
              "status": "wip"
            },
            {
              "name": "XS6001MDR",
              "status": "wip"
            },
            {
              "name": "XS6001S",
              "status": "wip"
            },
            {
              "name": "XS6002S",
              "status": "wip"
            },
            {
              "name": "XS6002SDR",
              "status": "wip"
            },
            {
              "name": "XS6002SX",
              "status": "wip"
            },
            {
              "name": "XS603S",
              "status": "wip"
            },
            {
              "name": "XS603SN",
              "status": "wip"
            },
            {
              "name": "XS603SX",
              "status": "wip"
            },
            {
              "name": "XS64",
              "status": "wip"
            },
            {
              "name": "XS64001LX",
              "status": "wip"
            },
            {
              "name": "XS8001L",
              "status": "wip"
            },
            {
              "name": "XS8001S",
              "status": "wip"
            },
            {
              "name": "XS802S",
              "status": "wip"
            },
            {
              "name": "XSR10001L",
              "status": "wip"
            },
            {
              "name": "XSR10001S",
              "status": "wip"
            },
            {
              "name": "XSR10002S",
              "status": "wip"
            },
            {
              "name": "XSR104",
              "status": "wip"
            },
            {
              "name": "XSR105",
              "status": "wip"
            },
            {
              "name": "XSR105DU",
              "status": "wip"
            },
            {
              "name": "XSR1202S",
              "status": "wip"
            },
            {
              "name": "XSR1203S",
              "status": "wip"
            },
            {
              "name": "XSR16000L",
              "status": "wip"
            },
            {
              "name": "XSR16001L",
              "status": "wip"
            },
            {
              "name": "XSR2002S",
              "status": "wip"
            },
            {
              "name": "XSR204",
              "status": "wip"
            },
            {
              "name": "XSR204DR",
              "status": "wip"
            },
            {
              "name": "XSR205DU",
              "status": "wip"
            },
            {
              "name": "XSR225DU",
              "status": "wip"
            },
            {
              "name": "XSR303S",
              "status": "wip"
            },
            {
              "name": "XSR303SN",
              "status": "wip"
            },
            {
              "name": "XSR304",
              "status": "wip"
            },
            {
              "name": "XSR32000L",
              "status": "wip"
            },
            {
              "name": "XSR32001L",
              "status": "wip"
            },
            {
              "name": "XSR32001LDR",
              "status": "wip"
            },
            {
              "name": "XSR4001S",
              "status": "wip"
            },
            {
              "name": "XSR4002S",
              "status": "wip"
            },
            {
              "name": "XSR6001S",
              "status": "wip"
            },
            {
              "name": "XSR6002S",
              "status": "wip"
            },
            {
              "name": "XSR6002SDR",
              "status": "wip"
            },
            {
              "name": "XSR603S",
              "status": "wip"
            },
            {
              "name": "XSR603SN",
              "status": "wip"
            },
            {
              "name": "XSR64",
              "status": "wip"
            },
            {
              "name": "XSR8001S",
              "status": "wip"
            }
          ],
          "api_version": "v1",
          "code_slug": "mettler_toledo/scales",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-micronic-code-reader",
      "name": "RD235",
      "vendor": "Micronic",
      "category": "barcode scanner",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "barcode-reading",
          "upstreamOperation": "barcode reading",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/micronic/code_reader/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.micronic.com/products/code-reader/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.micronic.MicronicRD235",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/micronic/code_reader/hello-world.html",
        "manufacturerUrl": "https://www.micronic.com/products/code-reader/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "micronic/code_reader"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-molecular-devices-imagexpress-micro",
      "name": "ImageXpress Micro",
      "vendor": "Molecular Devices",
      "category": "microscope",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "microscopy",
          "upstreamOperation": "microscopy",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.moleculardevices.com/products/cellular-imaging-systems/high-content-imaging/imagexpress-micro-4",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.moleculardevices.com/products/cellular-imaging-systems/high-content-imaging/imagexpress-micro-4",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-molecular-devices-imagexpress-nano",
      "name": "ImageXpress Nano",
      "vendor": "Molecular Devices",
      "category": "microscope",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "microscopy",
          "upstreamOperation": "microscopy",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.moleculardevices.com/products/cellular-imaging-systems/high-content-imaging/imagexpress-nano",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.moleculardevices.com/products/cellular-imaging-systems/high-content-imaging/imagexpress-nano",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-molecular-devices-imagexpress-pico",
      "name": "ImageXpress Pico",
      "vendor": "Molecular Devices",
      "category": "microscope",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "microscopy",
          "upstreamOperation": "microscopy",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/molecular_devices/imageXpress/pico.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.moleculardevices.com/products/cellular-imaging-systems/high-content-imaging/imagexpress-pico",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.molecular_devices.imageXpress.pico.Pico",
        "driverStatus": "basic",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/molecular_devices/imageXpress/pico.html",
        "manufacturerUrl": "https://www.moleculardevices.com/products/cellular-imaging-systems/high-content-imaging/imagexpress-pico",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "molecular_devices/imageXpress/pico",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-molecular-devices-spectramax-384plus",
      "name": "SpectraMax 384 Plus",
      "vendor": "Molecular Devices",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/molecular_devices/spectramax/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.moleculardevices.com/products/microplate-readers/absorbance-readers",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.molecular_devices.spectramax.SpectraMax384Plus",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/molecular_devices/spectramax/hello-world.html",
        "manufacturerUrl": "https://www.moleculardevices.com/products/microplate-readers/absorbance-readers",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "molecular_devices/spectramax",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-molecular-devices-spectramax-gemini-em",
      "name": "SpectraMax Gemini EM",
      "vendor": "Molecular Devices",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "luminescence",
          "upstreamOperation": "luminescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.moleculardevices.com/products/microplate-readers/fluorescence-readers/gemini-em-xps-readers",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.moleculardevices.com/products/microplate-readers/fluorescence-readers/gemini-em-xps-readers",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-molecular-devices-spectramax-m5",
      "name": "SpectraMax M5e",
      "vendor": "Molecular Devices",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "luminescence",
          "upstreamOperation": "luminescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "time-resolved-fluorescence",
          "upstreamOperation": "time-resolved fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "fluorescence-polarization",
          "upstreamOperation": "fluorescence polarization",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/molecular_devices/spectramax/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.moleculardevices.com/products/microplate-readers/multi-mode-readers/spectramax-m-series-readers",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.molecular_devices.spectramax.SpectraMaxM5",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/molecular_devices/spectramax/hello-world.html",
        "manufacturerUrl": "https://www.moleculardevices.com/products/microplate-readers/multi-mode-readers/spectramax-m-series-readers",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "molecular_devices/spectramax",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-opentrons-flex",
      "name": "Flex",
      "vendor": "Opentrons",
      "category": "liquid handler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "liquid-handling",
          "upstreamOperation": "liquid handling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/opentrons/flex/hello-world.html",
          "kind": "integration documentation"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.opentrons.Flex",
        "driverStatus": "basic",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/opentrons/flex/hello-world.html",
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "Hardware verification is operation-specific; 1-channel and 96-channel heads remain unverified.",
        "metadata": {
          "api_version": "v1",
          "code_slug": "opentrons/flex"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-opentrons-heater-shaker",
      "name": "Heater-Shaker Module",
      "vendor": "Opentrons",
      "category": "heater shaker",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://opentrons.com/products/heater-shaker-module",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://opentrons.com/products/heater-shaker-module",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-opentrons-ot2",
      "name": "OT-2",
      "vendor": "Opentrons",
      "category": "liquid handler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "liquid-handling",
          "upstreamOperation": "liquid handling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/opentrons/ot2/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://opentrons.com/products/ot-2-robot",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.opentrons.OT2",
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/opentrons/ot2/hello-world.html",
        "manufacturerUrl": "https://opentrons.com/products/ot-2-robot",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "opentrons/ot2",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-opentrons-temperature-module",
      "name": "Temperature Module",
      "vendor": "Opentrons",
      "category": "temperature controller",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://opentrons.com/products/temperature-module-gen2",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://opentrons.com/products/temperature-module-gen2",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-opentrons-thermocycler",
      "name": "Thermocycler Module",
      "vendor": "Opentrons",
      "category": "thermocycler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "thermocycling",
          "upstreamOperation": "thermocycling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://opentrons.com/products/thermocycler-module-1",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://opentrons.com/products/thermocycler-module-1",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-paa-kx2",
      "name": "KX2",
      "vendor": "PAA",
      "category": "arm",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "arm",
          "upstreamOperation": "arm",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-qinstruments-bioshake",
      "name": "BioShake",
      "vendor": "QInstruments",
      "category": "heater shaker",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/qinstruments/bioshake/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.qinstruments.com/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.qinstruments.BioShake",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/qinstruments/bioshake/hello-world.html",
        "manufacturerUrl": "https://www.qinstruments.com/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "Capabilities vary by model; use a model-specific factory function.",
        "metadata": {
          "models": [
            {
              "name": "BioShake 3000",
              "status": "full"
            },
            {
              "name": "BioShake 3000 elm",
              "status": "full"
            },
            {
              "name": "BioShake 3000 elm DWP",
              "status": "full"
            },
            {
              "name": "BioShake 3000-T",
              "status": "wip"
            },
            {
              "name": "BioShake 3000-T elm",
              "status": "wip"
            },
            {
              "name": "BioShake 5000 elm",
              "status": "wip"
            },
            {
              "name": "BioShake D30 elm",
              "status": "wip"
            },
            {
              "name": "BioShake D30-T elm",
              "status": "wip"
            },
            {
              "name": "BioShake Q1",
              "status": "full"
            },
            {
              "name": "BioShake Q2",
              "status": "wip"
            }
          ],
          "api_version": "v1",
          "code_slug": "qinstruments",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-qinstruments-coldplate",
      "name": "ColdPlate",
      "vendor": "QInstruments",
      "category": "temperature controller",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/qinstruments/bioshake/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.qinstruments.com/automation/coldplate/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.qinstruments.ColdPlate",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/qinstruments/bioshake/hello-world.html",
        "manufacturerUrl": "https://www.qinstruments.com/automation/coldplate/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "qinstruments",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-qinstruments-heatplate",
      "name": "Heatplate",
      "vendor": "QInstruments",
      "category": "temperature controller",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/qinstruments/bioshake/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.qinstruments.com/automation/heatplate/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.qinstruments.Heatplate",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/qinstruments/bioshake/hello-world.html",
        "manufacturerUrl": "https://www.qinstruments.com/automation/heatplate/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "qinstruments",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-revvity-celigo",
      "name": "Celigo",
      "vendor": "Revvity",
      "category": "microscope",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "microscopy",
          "upstreamOperation": "microscopy",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/revvity/celigo/hello-world.html",
          "kind": "integration documentation"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.revvity.Celigo",
        "driverStatus": "basic",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/revvity/celigo/hello-world.html",
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "revvity/celigo",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-sartorius-entris2",
      "name": "Entris II",
      "vendor": "Sartorius",
      "category": "scale",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "weighing",
          "upstreamOperation": "weighing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/sartorius/entris2/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.sartorius.com/en/products/weighing/laboratory-balances/entris-ii",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.sartorius.SartoriusEntris2",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/sartorius/entris2/hello-world.html",
        "manufacturerUrl": "https://www.sartorius.com/en/products/weighing/laboratory-balances/entris-ii",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "needs_hardware_testing": true,
          "api_version": "v1",
          "code_slug": "sartorius",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-tecan-evo",
      "name": "EVO",
      "vendor": "Tecan",
      "category": "liquid handler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "liquid-handling",
          "upstreamOperation": "liquid handling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "arm",
          "upstreamOperation": "arm",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://lifesciences.tecan.com/freedom-evo-platform",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "basic",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://lifesciences.tecan.com/freedom-evo-platform",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-tecan-infinite-200-pro",
      "name": "Infinite 200 PRO",
      "vendor": "Tecan",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "luminescence",
          "upstreamOperation": "luminescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://lifesciences.tecan.com/plate_readers/infinite_200_pro",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://lifesciences.tecan.com/plate_readers/infinite_200_pro",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/hazlamshamin"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-tecan-spark-20m",
      "name": "Spark 20M",
      "vendor": "Tecan",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://lifesciences.tecan.com/multimode-plate-reader",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://lifesciences.tecan.com/multimode-plate-reader",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-thermo-fisher-alps",
      "name": "ALPS",
      "vendor": "Thermo Fisher",
      "category": "sealer",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "sealing",
          "upstreamOperation": "sealing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/thermo_fisher/alps/index.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.thermofisher.com/order/catalog/product/AB-5000",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.thermo_fisher.alps",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/thermo_fisher/alps/index.html",
        "manufacturerUrl": "https://www.thermofisher.com/order/catalog/product/AB-5000",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "Each model has its own driver class and hello-world guide.",
        "metadata": {
          "needs_hardware_testing": true,
          "models": [
            {
              "name": "ALPS 300",
              "status": "wip"
            },
            {
              "name": "ALPS 3000",
              "status": "wip"
            },
            {
              "name": "ALPS 5000",
              "status": "wip"
            }
          ],
          "api_version": "v1",
          "code_slug": "thermo_fisher/alps",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-thermo-fisher-atc",
      "name": "ATC",
      "vendor": "Thermo Fisher",
      "category": "thermocycler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "thermocycling",
          "upstreamOperation": "thermocycling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.thermofisher.com/us/en/home/life-science/pcr/thermal-cyclers-realtime-instruments/thermal-cyclers/automated-thermal-cycler-atc.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.thermofisher.com/us/en/home/life-science/pcr/thermal-cyclers-realtime-instruments/thermal-cyclers/automated-thermal-cycler-atc.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-thermo-fisher-cytomat",
      "name": "Cytomat",
      "vendor": "Thermo Fisher",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "shaking",
          "upstreamOperation": "shaking",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/lab-automation/lab-automation-incubators.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.legacy.storage.cytomat.CytomatBackend",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/lab-automation/lab-automation-incubators.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "Capabilities vary by model. The driver lists Cytomat 2 C_50 but rejects it with NotImplementedError.",
        "metadata": {
          "models": [
            {
              "name": "Cytomat 2 C425",
              "status": "full"
            },
            {
              "name": "Cytomat 2 C450 SHAKE",
              "status": "full"
            },
            {
              "name": "Cytomat 2 C_50",
              "status": "wip"
            },
            {
              "name": "Cytomat 5C",
              "status": "full"
            },
            {
              "name": "Cytomat 6000",
              "status": "full"
            },
            {
              "name": "Cytomat 6002",
              "status": "full"
            }
          ],
          "api_version": "v0",
          "code_slug": "legacy/storage/cytomat",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-thermo-fisher-heraeus-cytomat",
      "name": "Heraeus Cytomat",
      "vendor": "Thermo Fisher",
      "category": "storage",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "storage",
          "upstreamOperation": "storage",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.legacy.storage.cytomat.heraeus_cytomat_backend.HeraeusCytomatBackend",
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "The legacy Heraeus unit, which uses a separate backend.",
        "metadata": {
          "api_version": "v0",
          "code_slug": "legacy/storage/cytomat",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-thermo-fisher-multidrop-combi",
      "name": "Multidrop Combi",
      "vendor": "Thermo Fisher",
      "category": "bulk dispenser",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "dispensing",
          "upstreamOperation": "dispensing",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/multidrop-dispensers/models/multidrop-combi.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "mostly",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.thermofisher.com/us/en/home/life-science/lab-equipment/multidrop-dispensers/models/multidrop-combi.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-thermo-fisher-nanodrop-1000",
      "name": "NanoDrop 1000",
      "vendor": "Thermo Fisher",
      "category": "plate reader",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "absorbance",
          "upstreamOperation": "absorbance",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/thermo_fisher/nanodrop_1000/index.html",
          "kind": "integration documentation"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.thermo_fisher.nanodrop_1000.ThermoFisherNanoDrop1000",
        "driverStatus": "basic",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/thermo_fisher/nanodrop_1000/index.html",
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "manager": "https://discuss.pylabrobot.org/u/vcjdeboer",
          "code_slug": "thermo_fisher/nanodrop_1000"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-thermo-fisher-proflex",
      "name": "ProFlex",
      "vendor": "Thermo Fisher",
      "category": "thermocycler",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "thermocycling",
          "upstreamOperation": "thermocycling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "heating",
          "upstreamOperation": "heating",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "active-cooling",
          "upstreamOperation": "active cooling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.thermofisher.com/us/en/home/life-science/pcr/thermal-cyclers-realtime-instruments/thermal-cyclers/proflex-pcr-system.html",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "full",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.thermofisher.com/us/en/home/life-science/pcr/thermal-cyclers-realtime-instruments/thermal-cyclers/proflex-pcr-system.html",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v0",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-thermo-fisher-quantstudio-5",
      "name": "QuantStudio 5",
      "vendor": "Thermo Fisher",
      "category": "qPCR machine",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "qPCR",
          "upstreamOperation": "qPCR",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        },
        {
          "operation": "thermocycling",
          "upstreamOperation": "thermocycling",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.thermofisher.com/order/catalog/product/A28574",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": null,
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": null,
        "manufacturerUrl": "https://www.thermofisher.com/order/catalog/product/A28574",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-ufactory-xarm6",
      "name": "xArm 6",
      "vendor": "UFACTORY",
      "category": "arm",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "arm",
          "upstreamOperation": "arm",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/ufactory/xarm6/hello-world.html",
          "kind": "integration documentation"
        },
        {
          "title": "Manufacturer link supplied upstream",
          "url": "https://www.ufactory.cc/xarm-collaborative-robot/",
          "kind": "manufacturer lead"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.ufactory.xarm6.XArm6",
        "driverStatus": "basic",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/ufactory/xarm6/hello-world.html",
        "manufacturerUrl": "https://www.ufactory.cc/xarm-collaborative-robot/",
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": null,
        "metadata": {
          "api_version": "v1",
          "code_slug": "ufactory/xarm6",
          "manager": "https://discuss.pylabrobot.org/u/rickwierenga"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    },
    {
      "id": "plr-li-cor-odyssey-classic",
      "name": "Odyssey Classic",
      "vendor": "LI-COR",
      "category": "imager",
      "summary": "Upstream integration registry entry. Driver keywords and support status are not verified instrument specifications.",
      "capabilities": [
        {
          "operation": "fluorescence",
          "upstreamOperation": "fluorescence",
          "type": "unspecified",
          "detail": "Keyword reported by upstream integration registry; hardware envelope and configuration not independently checked."
        }
      ],
      "modules": [],
      "performance": "Not extracted; no performance claim.",
      "sources": [
        {
          "title": "PyLabRobot instrument registry",
          "url": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "kind": "upstream registry",
          "checked": "2026-10-31"
        },
        {
          "title": "Upstream driver documentation",
          "url": "https://docs.pylabrobot.org/stable/user_guide/li_cor/odyssey/hello-world.html",
          "kind": "integration documentation"
        }
      ],
      "evidenceLevel": "upstream-discovery",
      "license": "MIT — retain PyLabRobot copyright and permission notice (THIRD_PARTY_NOTICES.md).",
      "upstream": {
        "api": "pylabrobot.li_cor.OdysseyClassic",
        "driverStatus": "wip",
        "status": "Upstream integration lead; driver status is not hardware, assay or local installation validation.",
        "documentationUrl": "https://docs.pylabrobot.org/stable/user_guide/li_cor/odyssey/hello-world.html",
        "manufacturerUrl": null,
        "source": {
          "url": "https://github.com/PyLabRobot/pylabrobot/blob/main/docs/_static/devices.json",
          "pinnedUrl": "https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json",
          "commit": "3976f1235a4e2180306005541459c2bedfd0dad4",
          "license": "MIT"
        },
        "notes": "HTTP scan control and TIFF retrieval; port pending hardware verification.",
        "metadata": {
          "models": [
            {
              "name": "9120",
              "status": "wip"
            }
          ],
          "api_version": "v1",
          "manager": "https://discuss.pylabrobot.org/u/vcjdeboer",
          "code_slug": "li_cor/odyssey"
        }
      },
      "completeness": {
        "headSelection": "Not checked",
        "labware": "Not checked",
        "accuracy": "Not extracted",
        "geometry": "Not extracted",
        "integration": "Upstream claim only; see original support status"
      }
    }
  ]
};
