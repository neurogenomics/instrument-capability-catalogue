// Independently authored factual summaries of public manufacturer documentation.
// Specification evidence is not independent testing or assay validation.
const source = (id, title, url, section) => ({id, title, url, section, checked:'2026-10-31'});
const claim = (id, operation, type, statement, sourceIds, configuration, conditions, extra={}) => ({id, operation, type, statement, ...extra, configuration, conditions, sourceIds, evidence:'manufacturer'});

export const peripheralEvidence = [
  {
    id:'mantis',
    claims:[
      claim('mantis-lv-minimum','dispensing','native','The silicone LV chip has a 0.1 µL minimum dispense and 0.1/0.5 µL diaphragms.',['mantis-hardware-54'],'MANTIS with silicone LV chip','Chip-specific minimum; not a finite upper volume guarantee.',{value:0.1,unit:'µL'}),
      claim('mantis-hv-minimum','dispensing','native','The silicone HV chip has a 1 µL minimum dispense and 1/5 µL diaphragms.',['mantis-hardware-54'],'MANTIS with silicone HV chip','Select the chip; the LV minimum does not apply to HV.',{value:1,unit:'µL'}),
      claim('mantis-hifi-specification','dispensing','optional','LV and HV Hi-Fi rows specify CV <2% and 5% accuracy error for both diaphragms.',['mantis-hardware-54'],'LV or HV Hi-Fi chip; MANTIS software 5.1 or newer','Technical specification, not an extracted test result: liquid, replicates and test volume are not given in this table.'),
      claim('mantis-lc3','reagent-selection','optional','The optional LC3 upgrade accommodates up to 48 chips.',['mantis-hardware-54'],'MANTIS with Large Capacity Chip Changer','Carousel configuration must be selected; this is not the standard chip inventory.',{value:48,unit:'chips maximum'}),
      claim('mantis-plate-formats','dispensing','native','The manufacturer describes dispensing into SBS plate formats from 6 through 1536 wells and programmable custom layouts.',['mantis-product'],'MANTIS dispenser','Verify exact plate geometry and dispense clearance; no universal labware fit is established.')
    ],
    sources:[
      source('mantis-hardware-54','MANTIS 5.4 Hardware Overview','https://help.formulatrix.com/mantis/5.4/Content/Hardware_Overview.htm','Large Capacity Chip Changer; Chip Types and Specifications, silicone LV/HV and Hi-Fi rows; footnote **'),
      source('mantis-product','MANTIS product information','https://formulatrix.com/liquid-handling-systems/mantis-liquid-dispenser/','More Than a Reagent Dispenser')
    ],
    gaps:['No liquid-specific measured precision or accuracy result is admitted here. The public Artel study summary links to a form-gated full report.','The newer product-page <2% claim must not be applied to standard chips: the 5.4 table gives <3% for standard silicone LV/HV chips.','Chip/nozzle compatibility and exact labware geometry require configuration review.']
  },
  {
    id:'dragonfly',
    claims:[
      claim('dragonfly-volume','dispensing','native','Each head aspirates 0.3–4 mL and dispenses 0.2–4000 µL; one syringe fill holds up to 4 mL.',['dragonfly-technology'],'dragonfly discovery positive-displacement syringe head','Aspiration and dispense limits are different.',{value:'0.2–4000',unit:'µL dispense'}),
      claim('dragonfly-precision','dispensing','native','The technical manual specifies CV below 5% from 1 µL and 10% across 0.2–1 µL.',['dragonfly-technology'],'dragonfly discovery syringe dispensing','The manual refers to a broad range of fluids but does not identify tested liquids, replicates or an accuracy experiment; do not treat this as assay-specific validation.'),
      claim('dragonfly-heads','dispensing','optional','Instrument configurations provide 3, 6 or 10 dispensing heads.',['dragonfly-product'],'Selected dragonfly discovery configuration','Head count must be selected; not all configurations contain ten heads.'),
      claim('dragonfly-labware','plate-handling','optional','The product table lists 96-, 384- and 1536-well formats; the deep-well configuration accommodates blocks or racked tubes up to 44 mm high.',['dragonfly-product','dragonfly-technology'],'Deep-well-block variant for tall labware','DWB instruments use an insert for standard-depth plates.',{value:44,unit:'mm maximum labware height in DWB configuration'}),
      claim('dragonfly-integration','device-integration','external','A documented API supports integration with external plate handlers, stackers and liquid handlers.',['dragonfly-product'],'dragonfly discovery plus selected third-party devices','An API is not evidence that any particular device combination is installed or qualified.')
    ],
    sources:[
      source('dragonfly-technology','dragonfly discovery user manual: technology','https://www.sptlabtech.com/product-help-center/dragonfly-discovery-user-manual-dragonfly-discovery-technology','dragonfly discovery technology; Deep well block dragonfly discovery'),
      source('dragonfly-product','dragonfly discovery product specifications','https://www.sptlabtech.com/products/dragonfly/dragonfly-discovery','Technical Specification; Versatile workflow integration')
    ],
    gaps:['No liquid-specific accuracy test or precision replicate count extracted.','Source speed claims omit dispense-volume conditions and are not converted into workflow or unattended duration.','Exact plate part numbers, reservoir choice and driver compatibility remain unverified.']
  },
  {
    id:'kingfisher',
    claims:[
      claim('kingfisher-formats','magnetic-separation','optional','Four selectable magnetic heads correspond to PCR, 96-well, 96-deep-well and 24-deep-well configurations.',['kingfisher-spec'],'KingFisher Flex; chosen head and matching plastics','Heads are alternative configurations; no pipetting capability is inferred from processing-volume specifications.'),
      claim('kingfisher-pcr-volume','magnetic-separation','native','The PCR-plate configuration processes 20–100 µL.',['kingfisher-spec'],'96 PCR head and skirted PCR plate','A processing-volume specification, not liquid-transfer accuracy.',{value:'20–100',unit:'µL'}),
      claim('kingfisher-96-volume','magnetic-separation','native','The 96-well format processes 20–200 µL; the 96-deep-well format processes 50–1000 µL.',['kingfisher-spec'],'96 KF head or 96 deep-well head with corresponding plate','Do not combine the two envelopes into one head specification.'),
      claim('kingfisher-24-volume','magnetic-separation','native','The 24-deep-well configuration processes 200–5000 µL.',['kingfisher-spec'],'24 deep-well head and plate','Capacity is 24 samples for this head, not 96.',{value:'200–5000',unit:'µL'}),
      claim('kingfisher-heating','heating','native','The published heating range starts 5 °C above ambient and ends at 115 °C.',['kingfisher-spec'],'KingFisher Flex heating position','The lower limit is relative to ambient; it is not refrigeration to 5 °C.',{value:'ambient +5 to 115',unit:'°C'})
    ],
    sources:[source('kingfisher-spec','KingFisher Flex product specifications','https://www.thermofisher.com/us/en/home/life-science/dna-rna-purification-analysis/automated-purification-extraction/kingfisher-systems/models/kingfisher-flex.html','Specifications: processing volumes, selectable magnetic heads, heating/cooling; ordering table 5400610/620/630/640')],
    gaps:['No extraction yield or recovery performance inferred from processing volumes.','Exact consumable identity, head installed, heating performance and robotic loading integration need confirmation.','The manufacturer site redirected to its German locale during verification; the corresponding specification rows were checked.']
  },
  {
    id:'rotina',
    claims:[
      claim('rotina-variants','centrifugation','native','The non-refrigerated 380 is rated to 5000 rpm; refrigerated 380 RC is rated to 5100 rpm.',['rotina-datasheet'],'ROTINA 380 Robotic versus 380 RC Robotic','Instrument maxima do not replace rotor and vessel ratings.'),
      claim('rotina-tube-rotor','centrifugation','optional','Rotor 3724-R with bucket 3725-R/4 is rated to 5000 rpm and 4696 ×g, with capacity up to sixteen 50 mL tubes.',['rotina-datasheet'],'Four-place swing-out rotor 3724-R; bucket 3725-R/4','RCF describes rotor performance. Check vessel ratings; the datasheet limits its annotated glass tubes to 4000 ×g.',{value:4696,unit:'×g maximum'}),
      claim('rotina-plate-rotor','centrifugation','optional','Rotor 3722-R with bucket 3730-R/2 is rated to 5100 rpm and 4362 ×g. It holds six 15 mm microplates or two 44.5 mm deep-well plates.',['rotina-datasheet'],'Two-place swing-out plate rotor 3722-R; bucket 3730-R/2; 5100 rpm requires RC instrument','Capacity depends on plate height; six plates is not the deep-well capacity.',{value:4362,unit:'×g maximum'}),
      claim('rotina-cooled-rotors','cooling','native','Both listed rotor configurations specify a lowest achievable temperature of 0 °C for cooled versions.',['rotina-datasheet'],'ROTINA 380 RC Robotic with listed rotor/bucket combinations','Datasheet footnote: with precooling at maximum speed. This is not a complete setpoint range.',{value:0,unit:'°C lowest specified'}),
      claim('rotina-loading','plate-handling','external','The centrifuge provides a loading hatch and an RS-232 interface for integration.',['rotina-datasheet'],'ROTINA 380 / 380 RC Robotic','The external robot, gripping geometry and workcell control still require integration.')
    ],
    sources:[source('rotina-datasheet','ROTINA 380 / RC Robotic datasheet DS.0525-EN','https://www.hettichlab.com/downloadcenter/Products/Datasheets/ROTINA380-380RC-Robotic_EN.pdf','p1 Features; p2 Technical data and rotor 3724-R; p3 rotor 3722-R and plate table; temperature/RCF footnotes')],
    gaps:['No universal temperature setpoint range extracted.','Adapters, vessel permissible RCF, balancing rules, seal/lid clearance and external loading must be checked for the chosen configuration.']
  },
  {
    id:'plateloc',
    claims:[
      claim('plateloc-temperature','plate-sealing','native','The sealing temperature setting spans 30–200 °C.',['plateloc-datasheet'],'Agilent PlateLoc Thermal Microplate Sealer','Select temperature and dwell for the exact plate and heat-seal material.',{value:'30–200',unit:'°C'}),
      claim('plateloc-labware','plate-sealing','native','The datasheet permits microplates up to 51 mm high, meeting ANSI/SBS 1-2004 through 4-2004 and having heat-sealable raised well rims.',['plateloc-datasheet'],'PlateLoc with appropriate support insert','Skirtless and half-skirt PCR plates additionally require the Agilent 96-well PCR Plate Support.',{value:51,unit:'mm maximum plate height'}),
      claim('plateloc-film','plate-sealing','native','PlateLoc uses roll-fed thermal seals; individual cut sheets and pressure-sensitive adhesive films are not supported.',['plateloc-datasheet'],'PlateLoc thermal roll-fed mechanism','Confirm compatible seal chemistry and plate material.'),
      claim('plateloc-cycle','plate-sealing','native','The datasheet gives an approximate eight-second cycle per plate.',['plateloc-datasheet'],'PlateLoc sealing cycle','Loading, warm-up and external transport are not included; sealing settings can affect workflow time.',{value:8,unit:'s approximate cycle'}),
      claim('plateloc-control','device-integration','external','RS-232 and an ActiveX interface support third-party automation; Agilent workstations use VWorks.',['plateloc-datasheet'],'PlateLoc plus external automation controller','VWorks is not included with a standalone instrument purchase.')
    ],
    sources:[source('plateloc-datasheet','PlateLoc Thermal Microplate Sealer datasheet 5991-7947EN','https://www.agilent.com/cs/library/datasheets/public/5991-7947EN.pdf','Specifications: microplate height, labware compatibility, performance, sealing technology, interface/software; 30 October 2019')],
    gaps:['No seal-integrity performance inferred for a particular plate, contents or downstream operation.','The approximately eight-second cycle is not an unattended-workflow duration or throughput guarantee.']
  },
  {
    id:'linq',
    claims:[
      claim('linq-workcell','orchestration','native','LINQ represents a workcell as an instrument list and a transport matrix.',['linq-instruments'],'Automata LINQ SDK workcell','A software model must correspond to a configured physical workcell.'),
      claim('linq-drivers','device-integration','external','Instruments have a selected driver and configuration; workflow actions execute against those devices.',['linq-instruments'],'LINQ with configured external instruments and compatible drivers','The orchestration platform does not itself supply a centrifuge, thermal cycler or liquid-transfer envelope.'),
      claim('linq-task-types','orchestration','native','Action tasks can represent labware movement, instrument actions or operator confirmation; custom code and data integrations are also supported.',['linq-tasks'],'LINQ workflow task graph','A manual confirmation remains a human handoff.'),
      claim('linq-constraints','scheduling','native','Workflow definitions carry time constraints, instrument blocks and run instructions.',['linq-workflow'],'LINQ Workflow object','These are scheduling inputs, not measured execution times or a guarantee of unattended operation.')
    ],
    sources:[
      source('linq-instruments','LINQ SDK: Instruments and Drivers','https://docs.automata.tech/instruments-drivers','Workcell; Instruments / Config'),
      source('linq-tasks','LINQ SDK: Tasks and Transport','https://docs.automata.tech/tasks-transport','Overview; ActionTask basics'),
      source('linq-workflow','LINQ SDK: Workflow','https://docs.automata.tech/workflow','Workflow classes: time_constraints, instrument_blocks, run_instructions')
    ],
    gaps:['No vendor-independent hardware performance is assigned to LINQ.','Device availability, driver version, transport compatibility, recovery behavior and timing need a concrete workcell.']
  },
  {
    id:'odtc',
    claims:[
      claim('odtc-temperature','thermocycling','native','ODTC 96 and 384 specification tables give a 4–99 °C temperature range.',['odtc-spec'],'ODTC 96/96 XL or 384/384 XL, selected model','Below-ambient operation footnote is incomplete on the retrieved page; confirm the operating manual and condensation restrictions.',{value:'4–99',unit:'°C'}),
      claim('odtc-accuracy','thermocycling','native','Temperature accuracy is specified as ±0.30 K at 55 °C.',['odtc-spec'],'ODTC 96/96 XL and 384/384 XL','The stated test temperature is 55 °C; this is not accuracy across the entire operating range.',{value:0.30,unit:'K ± at 55 °C'}),
      claim('odtc-uniformity','thermocycling','native','Temperature uniformity is specified as ±0.20 K at 55, 72 and 95 °C.',['odtc-spec'],'ODTC 96/96 XL and 384/384 XL','Applies to the specified plateau temperatures; no sample-temperature validation is inferred.',{value:0.20,unit:'K ±'}),
      claim('odtc-formats','thermocycling','native','The 96 versions list 100 µL/well maximum PCR volume; the 384 versions list 50 µL/well.',['odtc-spec'],'Selected ODTC plate-format version with its optimized VCM plate interface','Technical tables specify optimization for particular PCR plates; other formats require enquiry. Do not assume every plate fits.'),
      claim('odtc-integration','device-integration','external','An automated horizontal lid and plate ejection support robotic access; the separate Power & Control Unit provides SiLA over Ethernet.',['odtc-spec'],'ODTC with its mandatory Power & Control Unit and external robot','ODTC must be powered by the designated PCU; robot integration is additional.')
    ],
    sources:[source('odtc-spec','INHECO ODTC technical specifications','https://www.inheco.com/odtc.html','Technical Specifications ODTC 96/96 XL/384/384 XL; PCU; footnotes 1, 2 and 4')],
    gaps:['The below-ambient footnote is incomplete in the public page text; condensation limitations require the exact manual.','Plate part-number compatibility, liquid loading, verification method and robot clearance remain configuration-specific.']
  },
  {
    id:'magblock',
    claims:[
      claim('magblock-passive','magnetic-separation','native','GEN1 uses fixed ring magnets in a passive 96-well holder; it has no powered bead-moving mechanism.',['magblock-manual'],'Opentrons Flex Magnetic Block GEN1','Moving labware onto and off the block changes exposure; the block cannot raise or lower magnets.'),
      claim('magblock-labware','magnetic-separation','native','Named compatible labware includes Opentrons Tough full-skirt 0.2 mL PCR plates and NEST 2 mL 96-deep-well plates.',['magblock-product'],'Magnetic Block GEN1 with the named plates','These are plate capacities, not a bead-capture performance guarantee for every working volume.'),
      claim('magblock-gripper','plate-handling','external','Automated plate placement and removal use the Flex Gripper; this block is intended for Flex and is not OT-2 compatible.',['magblock-product','magblock-manual'],'Flex robot and Flex Gripper plus Magnetic Block GEN1','The gripper is a separate required component for automated movement.'),
      claim('magblock-environment','magnetic-separation','native','The specification lists an ambient operating temperature of 20–25 °C.',['magblock-manual'],'Magnetic Block GEN1','Indoor use; 30–80% non-condensing relative humidity.',{value:'20–25',unit:'°C ambient'})
    ],
    sources:[
      source('magblock-manual','Opentrons Flex Magnetic Block documentation','https://docs.opentrons.com/flex/modules/magnetic-block/','Magnetic components; Software control; Magnetic Block specifications'),
      source('magblock-product','Opentrons Flex Magnetic Block GEN1','https://opentrons.com/products/opentrons-flex-magnetic-block-gen1','Recommended labware; FAQs: deepwell compatibility; Features')
    ],
    gaps:['No capture time, recovery, pellet location or liquid-specific separation performance is established.','Other plates require fit and performance verification; Magnetic Module GEN2 compatibility must not be transferred to this passive block.']
  },
  {
    id:'cfx',
    claims:[
      claim('cfx-capacity','qpcr','native','CFX Opus 96 has a fixed 96-well block and specifies 1–50 µL samples, with 10–50 µL recommended.',['cfx-bulletin'],'CFX Opus 96, not CFX Opus 384 or other CFX models','Sample-size specification is not pipetting capability.'),
      claim('cfx-temperature','thermocycling','native','The block temperature range is 4–100 °C; the lid heating range is 30–110 °C.',['cfx-bulletin'],'CFX Opus 96 fixed block','Block and lid ranges are separate specifications.',{value:'4–100',unit:'°C block'}),
      claim('cfx-thermal-accuracy','thermocycling','native','The bulletin specifies thermal accuracy of ±0.2 °C.',['cfx-bulletin'],'CFX Opus 96','The bulletin does not state an accuracy test temperature or equilibration condition. Do not transfer the separate uniformity timing condition.',{value:0.2,unit:'°C ±'}),
      claim('cfx-thermal-uniformity','thermocycling','native','Uniformity is ±0.3 °C, with max–min ≤0.6 °C, measured ten seconds after the block reaches its target.',['cfx-bulletin'],'CFX Opus 96','Block specification; not independent measurement of liquid temperature.',{value:0.3,unit:'°C ±'}),
      claim('cfx-detection','fluorescence-detection','native','The optical system has six filtered LEDs and six filtered photodiodes, a 450–730 nm excitation/emission range and multiplex analysis of up to five targets per well.',['cfx-bulletin'],'CFX Opus 96','Six optical components do not mean six independently quantified assay targets; dye and assay selection remain necessary.')
    ],
    sources:[source('cfx-bulletin','CFX Opus 96 Real-Time PCR System, Bulletin 7299 Ver D','https://www.bio-rad.com/sites/default/files/webroot/web/pdf/lsr/literature/Bulletin_7299.pdf','p1 System and Optical Detection System; p2 96-Well Reaction Block; March 2023')],
    gaps:['Thermal-accuracy measurement conditions are not supplied in this bulletin.','No one-copy sensitivity guarantee is assigned: the bulletin does not give the full detection experiment.','Robotic loading, external control and assay performance require separate evidence.']
  },
  {
    id:'tapestation',
    claims:[
      claim('tapestation-capacity','electrophoresis','native','4200 TapeStation accepts runs of 1–96 samples.',['tapestation-product'],'4200 TapeStation','Choose the matching DNA or RNA ScreenTape assay.',{value:'1–96',unit:'samples per run'}),
      claim('tapestation-d1000-range','electrophoresis','native','The D1000 ScreenTape assay sizes DNA from 35–1000 bp and requires 1 µL of sample.',['tapestation-d1000'],'4200 TapeStation with standard D1000 ScreenTape assay','Not the High Sensitivity D1000 assay.',{value:'35–1000',unit:'bp'}),
      claim('tapestation-d1000-time','electrophoresis','native','D1000 analysis is specified at under 20 minutes for 16 samples or under 90 minutes for 96 samples.',['tapestation-d1000'],'4200 TapeStation, standard D1000 assay','Analysis time is assay-specific; it is not hands-on time or a universal TapeStation runtime.'),
      claim('tapestation-d1000-sizing','electrophoresis','native','D1000 sizing precision is 5% CV and sizing accuracy ±10% when using one ladder per ScreenTape device.',['tapestation-d1000'],'4200 TapeStation, standard D1000 assay','With the electronic ladder, the guide instead specifies ±20% sizing accuracy.'),
      claim('tapestation-d1000-quantitation','electrophoresis','native','D1000 quantitative range is 0.1–50 ng/µL; precision is 15% CV at 0.1–1 ng/µL and 10% CV at 1–50 ng/µL.',['tapestation-d1000'],'4200 TapeStation, standard D1000 assay','Do not transfer these values to other ScreenTape assays.')
    ],
    sources:[
      source('tapestation-product','Agilent 4200 TapeStation','https://www.agilent.com/en/product/automated-electrophoresis/tapestation-systems/tapestation-instruments/4200-tapestation-system-228263','Specifications: Number of Samples per Run'),
      source('tapestation-d1000','D1000 ScreenTape Assay Quick Guide for 4200 TapeStation','https://download.chem.agilent.com/software/4200_tapestation_user_info_package_v2/tapestation%20user%20information/tapestation%20quick%20guides/agilent%20d1000%20quick%20guide_g2991-90030.pdf','p1 Specifications: Analytical and Physical tables; footnotes 2–3')
    ],
    gaps:['Only standard D1000 quantitative specifications are extracted; other assays need their own current guides.','No robotic loading or fully unattended upstream sample preparation is established.','The assay guide is a historical manufacturer document, checked online in 2026; confirm revision for current consumables.']
  },
  {
    id:'storage',
    claims:[
      claim('storage-biostore-temperature','cold-storage','native','The BioStore brochure describes automated sample storage at −80 °C.',['storage-biostore'],'BioStore −80 °C family in the cited brochure','This is a named family example, not a temperature shared by every automated storage system.',{value:-80,unit:'°C nominal storage'}),
      claim('storage-dual-temperature','cold-storage','optional','A dual-temperature BioStore configuration offers separate −20 °C and −80 °C storage options.',['storage-biostore'],'Optional dual-temperature BioStore configuration','Separate zones; not a continuously validated −20 to −80 °C operating envelope.'),
      claim('storage-pickers','sample-retrieval','optional','The brochure describes configurations with up to sixteen picking stations and single- or dual-shuttle robotics.',['storage-biostore'],'Configured BioStore system','Capacity and throughput depend on the chosen selectors, shuttles, labware and store dimensions.',{value:16,unit:'maximum optional picking stations'}),
      claim('storage-interface','device-integration','external','An optional Automation Interface Module presents samples on HD trays or SBS rack trays for downstream exchange.',['storage-biostore'],'BioStore with Automation Interface Module and external automation','External handling and LIMS integration need their own interfaces and qualification.')
    ],
    sources:[source('storage-biostore','Azenta BioStore −80 °C Automated Storage System brochure','https://web.azenta.com/hubfs/azenta-files/resources/brochures-flyers/B309-18-BioStore-II-Jun-20.pdf','p2 Dual Temperature Options; p3 scalable throughput and Automation Interface Module')],
    gaps:['The existing record is a broad family placeholder. No specific store configuration, capacity, temperature tolerance, retrieval time or sample-preservation outcome is established.','The family landing page returned HTTP 403. Accessible brochure uses historical BioStore/Strata names; current product naming and configuration must be confirmed.','Manufacturer search results indicate BioStore was renamed BioArc, but no new-name equivalence is used to transfer these specifications.']
  }
];
