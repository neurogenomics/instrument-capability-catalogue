// Authored factual summaries of public manufacturer documentation, checked 31 October 2026.
// Source manuals are linked, not redistributed; no private laboratory information is included.
const source = (id, title, url, section) => ({id,title,url,section,checked:'2026-10-31'});
const claim = (id,operation,type,statement,sourceIds,extra={}) => ({id,operation,type,statement,...extra,sourceIds,evidence:'manufacturer'});
const range = (min,max,configuration,conditions='Published operating range; selected tips and liquid-specific qualification still apply.') => ({value:{min,max},unit:'µL',configuration,conditions});
const waters = source('mfr-waters-pipettes','Waters WKB122208: supported Andrew+/Pipette+ pipettes','https://support.waters.com/KB_Inst/Other/WKB122208_What_Pipettors_and_Pipet_Tips_Are_Supported_on_Andrew','Additional Information / part-number list; Answer / supported pipettes');
const connected = source('mfr-waters-connected','Waters connected devices and accessories','https://www.waters.com/waters/en_US/Automation-Connected-Devices-and-Accessories/nav.htm?cid=135073544&locale=en_US','Connected devices: grippers, Peltier+, Shaker+ and Heater-Shaker+');
const bravo = source('mfr-bravo-datasheet','Bravo datasheet 5990-3480EN, February 2023','https://www.agilent.com/cs/library/datasheets/public/5990-3480EN.pdf','Page 2: key features, pipetting specifications and accessories');
const i7 = source('mfr-i7-brochure','Biomek i-Series brochure, 2025','https://media.beckman.com/-/media/pdf-assets/brochures/biomek-i-series-automated-liquid-handlers-brochure.pdf?rev=47d63a19459246b28cbf1fd9feee7d3c','PDF pages 3, 5 and 6: gripper, model comparison and device integrations');
const firefly = source('mfr-firefly-spec','SPT firefly technology specifications','https://www.sptlabtech.com/migration/product-help-center/firefly-user-guide-specifications-1.3-firefly-technology','Sections 1.3.1–1.3.6, 1.3.11 and 1.3.12');
const flex = source('mfr-flex-pipettes','Opentrons Flex pipettes','https://docs.opentrons.com/flex/system-description/pipettes/','Pipette specifications: 1-, 8- and 96-channel tables; introduction');
const flexModules = source('mfr-flex-modules','Opentrons Flex modules','https://docs.opentrons.com/flex/modules/','Supported modules; Thermocycler generation compatibility');
const ot2 = source('mfr-ot2-pipettes','Opentrons OT-2 GEN2 pipettes','https://docs.opentrons.com/ot-2/pipettes/','Replacing OT-2 pipettes; single-channel and multi-channel specifications');
const starlet = source('mfr-ngs-starlet','Hamilton NGS STARlet','https://www.hamiltoncompany.com/assay-ready-workstations/ngs-starlet','Overview / NGS Automation for Any Laboratory; Specifications / Pipetting Options, Platform/Accessories and Transport Tools');
const starletApp = source('mfr-ngs-starlet-2025-app','Hamilton NGS STARlet ONT application AN-2501-11','https://assets-robotics.hamiltoncompany.com/Application-Notes-ROB/Application-Notes-ROB-2025-05/AN-2501-11_NGS-STARlet-ONT-LSK114.pdf?v=1746176174','System Description: eight independent 1000 µL channels; application-specific deck');
const fluent = source('mfr-fluent-platform','Tecan Fluent automated workstation','https://www.tecan.com/fluent-automated-workstation','Fluent Liquid Handler Specifications table');
export const handlerEvidence = [
 {id:'andrew',summary:'Electronic pipette robot with separately selected single/eight-channel pipettes and connected devices.',sources:[waters,connected],claims:[
 claim('andrew-single-low','liquid-transfer','native','Single-channel low-volume pipette option.',[waters.id],range(.2,10,'186009769, 1 channel')),
 claim('andrew-single-large','liquid-transfer','native','Single-channel larger-volume option.',[waters.id],range(50,1000,'186009766, 1 channel')),
 claim('andrew-eight-low','liquid-transfer','native','Eight-channel low-volume option.',[waters.id],range(.2,10,'186009768, 8 channels')),
 claim('andrew-eight-large','liquid-transfer','native','Eight-channel larger-volume option.',[waters.id],range(50,1200,'186009615, 8 channels')),
 claim('andrew-pipette-compatibility','consumable-compatibility','native','Supported pipettes are Waters/Andrew Alliance-branded Sartorius units; robot adapters are separate items.',[waters.id]),
 claim('andrew-connected-handling','vessel-transfer','optional','Connected tube and microplate/column grippers provide vessel movement.',[connected.id],{configuration:'Compatible connected gripper and supported vessel'})
 ],gaps:['Remaining supported pipette sizes are listed in the linked part-number table; no single pipette spans the entire family envelope.','Condition-specific accuracy tables are supplied as an image/attached manual; not transcribed here.','Connected grippers do not establish centrifuge loading, cap manipulation or arbitrary off-deck reach.']},
 {id:'bravo',summary:'Nine-position plate handler with interchangeable pipette heads and optional thermal/handling accessories.',sources:[bravo],claims:[
 claim('bravo-96lt','liquid-transfer','native','Long-tip 96-channel head range.',[bravo.id],range(2,250,'96LT disposable-tip head')),
 claim('bravo-st','liquid-transfer','native','Short-tip head range depends further on selected tip.',[bravo.id],range(.3,70,'96ST or 384ST disposable-tip head','10 µL tips: 0.3–10; 30 µL: 0.5–30; 70 µL: 0.75–70 µL.')),
 claim('bravo-deck','deck-capacity','native','Up to nine pipettable platepad positions.',[bravo.id],{value:9,unit:'positions',conditions:'Tips, waste, reservoirs and modules also consume positions.'}),
 claim('bravo-gripper','vessel-transfer','optional','Plate gripper relocates labware and handles lids/stacks.',[bravo.id]),
 claim('bravo-odtc','thermocycling','optional','An on-deck thermal cycler is an accessory.',[bravo.id]),
 claim('bravo-external','device-integration','external','Open design supports integration with a separate robot or BenchCel handler.',[bravo.id])
 ],gaps:['No condition-specific volumetric accuracy table extracted.','ODTC, gripper and other accessories cannot be inferred from ownership of a Bravo.','A centrifuge is not documented as a native component in this datasheet.']},
 {id:'i7',summary:'Large configurable workstation with Span-8/multichannel combinations and third-party peripheral integration.',sources:[i7],claims:[
 claim('i7-deck','deck-capacity','native','i7 provides 45 pipettable positions.',[i7.id],{value:45,unit:'positions',configuration:'i7 model comparison, PDF page 5'}),
 claim('i7-heads','liquid-transfer','native','Options include Span-8, one or two 96/384 multichannel heads, or a hybrid Span-8/multichannel arrangement.',[i7.id]),
 claim('i7-volume','liquid-transfer','native','Published alternatives are 0.5–1200 or 0.5–5000 µL, depending on head.',[i7.id],{configuration:'Selected i7 pipetting head; these are alternative envelopes, not one guaranteed head range.'}),
 claim('i7-gripper','vessel-transfer','native','The brochure includes a rotating labware gripper.',[i7.id]),
 claim('i7-peripherals','device-integration','external','Listed integrations include thermocyclers, readers, shakers, Peltier devices, storage and robotic arms.',[i7.id])
 ],gaps:['The brochure does not provide a condition-specific accuracy matrix.','Individual historic machines may differ from the 2025 brochure.','Integrated peripheral availability and exact controller compatibility require configuration evidence; no native centrifuge claim is made.']},
 {id:'firefly',summary:'Separate reagent dispensing and sample pipetting, with configuration-dependent genomic modules.',sources:[firefly],claims:[
 claim('firefly-pipette','liquid-transfer','native','Sample-pipetting range.',[firefly.id],range(.5,125,'96/384 arrays or 8/16-tip strips')),
 claim('firefly-dispense','dispensing','native','Positive-displacement reagent-syringe range.',[firefly.id],range(.2,3690,'4 mL reagent syringes')),
 claim('firefly-deck','deck-capacity','native','Two movable decks each accommodate eight plate positions.',[firefly.id],{value:16,unit:'positions',conditions:'Upper/lower labware height limits are 49.7/93 mm; occupied accessories restrict usable layouts.'}),
 claim('firefly-temperature','heating-cooling','optional','Genomics thermal-module setpoints span −20 to 99°C; incubation module is not a PCR cycler.',[firefly.id],{value:{min:-20,max:99},unit:'°C',configuration:'Genomics plate thermal module',conditions:'Surface regulation specification; not guaranteed sample temperature.'}),
 claim('firefly-shaker','mixing','optional','Genomics shaker operates from 200 to 3000 rpm.',[firefly.id],{value:{min:200,max:3000},unit:'rpm',configuration:'Genomics shaker; separate thermal station'}),
 claim('firefly-gripper','vessel-transfer','native','Built-in grippers move compatible labware between decks, modules and magnetic blocks.',[firefly.id]),
 claim('firefly-magnets','magnetic-separation','optional','Alpaqua/Permagen blocks support compatible 96/384 plates and downloaded stack definitions.',[firefly.id])
 ],gaps:['No pipetting accuracy matrix extracted.','The thermal module is not a thermocycler.','Centrifugation is not listed among these native modules.']},
 {id:'firefly-plus',summary:'ATL expansion adds plate/lid/tip storage and configurable integrated thermocycling.',sources:[firefly],claims:[
 claim('fireflyplus-atl','configuration','optional','firefly+ expansion requires the ATL head variant.',[firefly.id]),
 claim('fireflyplus-pipette','liquid-transfer','native','Inherits firefly sample-pipetting range.',[firefly.id],range(.5,125,'ATL firefly with Plus expansion')),
 claim('fireflyplus-storage','storage','optional','Expansion provides additional storage for plates, lids and tips.',[firefly.id]),
 claim('fireflyplus-cycler','thermocycling','optional','Integrated thermocycler options extend the incubation-only base platform.',[firefly.id])
 ],gaps:['Select the actual thermocycler option and compatible plate/lid.','Storage positions and thermal block performance are not fully extracted.','No integrated centrifuge or qPCR fluorescence capability established by this specification.']},
 {id:'flex',summary:'Configurable single-, eight- and 96-channel pipettes, optional gripper and USB-controlled modules.',sources:[flex,flexModules],claims:[
 claim('flex-small','liquid-transfer','native','Small pipette models support one or eight channels.',[flex.id],range(1,50,'Flex 1-channel or 8-channel 1–50 µL pipette')),
 claim('flex-large','liquid-transfer','native','Large pipette models support one or eight channels.',[flex.id],range(5,1000,'Flex 1-channel or 8-channel 5–1000 µL pipette')),
 claim('flex-96','liquid-transfer','native','96-channel alternatives occupy both pipette mounts.',[flex.id],{configuration:'96-channel 1–200 or 5–1000 µL models; not simultaneous independent pipettes.'}),
 claim('flex-small-error','pipetting-performance','native','At 1 µL: systematic error ±10%, random error 6% CV.',[flex.id],{configuration:'1–50 µL eight-channel head; 20 µL tips',conditions:'Manufacturer table at this exact volume/tip combination; no other liquids inferred.'}),
 claim('flex-larger-error','pipetting-performance','native','At 50 µL: systematic error ±1.25%, random error 0.60% CV.',[flex.id],{configuration:'1–50 µL eight-channel head; 50 µL tips',conditions:'Manufacturer table at this exact volume/tip combination.'}),
 claim('flex-heatshake','mixing','optional','Heater-Shaker heats to 95°C and shakes at 200–3000 rpm.',[flexModules.id]),
 claim('flex-cooling','heating-cooling','optional','Temperature Module maintains 4–95°C steady state.',[flexModules.id]),
 claim('flex-magnet','magnetic-separation','optional','Magnetic Block is passive; OT-2 active Magnetic Modules are unsupported.',[flexModules.id]),
 claim('flex-cycler','thermocycling','optional','Thermocycler GEN2 supports gripper access; GEN1 is unsupported on Flex.',[flexModules.id])
 ],gaps:['The selected instrument may have only one subset of these heads/modules.','Performance examples are not universal accuracy guarantees.','Detailed deck/labware constraints remain source-dependent.']},
 {id:'ot2',summary:'Two-mount GEN2 platform with head-specific ranges; generation compatibility must be preserved.',sources:[ot2],claims:[
 claim('ot2-p20','liquid-transfer','native','P20 is available as single or eight-channel.',[ot2.id],range(1,20,'P20 GEN2')),
 claim('ot2-p300','liquid-transfer','native','P300 is available as single or eight-channel.',[ot2.id],range(20,300,'P300 GEN2')),
 claim('ot2-p1000','liquid-transfer','native','P1000 is single-channel.',[ot2.id],range(100,1000,'P1000 GEN2 single-channel')),
 claim('ot2-mount','configuration','native','Each single/eight-channel pipette occupies one left or right mount.',[ot2.id]),
 claim('ot2-p20-performance','pipetting-performance','native','P20 eight-channel at 1 µL: ±20% systematic error and 10% CV.',[ot2.id],{configuration:'P20 GEN2 multi-channel at 1 µL',conditions:'Manufacturer multi-channel specification; not the tighter single-channel specification.'}),
 claim('ot2-generation','consumable-compatibility','native','OT-2 and Flex pipettes are mutually incompatible.',[ot2.id])
 ],gaps:['Compatible module generations and deck footprints need separate module-source extraction.','No native plate-gripper or centrifuge claim follows from the pipette documentation.']},
 {id:'starlet',summary:'Preconfigured NGS STARlet with documented magnetic, thermal, mixing and handling functions.',sources:[starlet,starletApp],claims:[
 claim('starlet-volume','liquid-transfer','native','Published pipetting range depends on configuration.',[starlet.id],range(1,1000,'NGS STARlet 1 mL channels')),
 claim('starlet-channels','liquid-transfer','native','Channel count is unresolved: the current manufacturer overview says eight channels while its specification table says four.',[starlet.id,starletApp.id],{configuration:'Exact quoted NGS STARlet configuration required',conditions:'Current page is internally inconsistent. A separate 2025 application also describes eight channels; do not treat either count as universal.'}),
 claim('starlet-deck','deck-capacity','native','Published capacity is 25 ANSI/SLAS positions.',[starlet.id],{value:25,unit:'positions',configuration:'NGS STARlet product specification'}),
 claim('starlet-mag','magnetic-separation','native','NGS processing zone includes a magnetic plate.',[starlet.id]),
 claim('starlet-shakers','mixing','native','Two HHS units are described with 2500 rpm and heating up to 105°C; two cooling/heating devices are also listed.',[starlet.id]),
 claim('starlet-gripper','vessel-transfer','native','CO-RE Gripper is listed as standard.',[starlet.id]),
 claim('starlet-odtc','thermocycling','optional','ODTC is identified as optional.',[starlet.id])
 ],gaps:['Current product page itself says eight channels in its overview and four in its specification table. Resolve exact quoted configuration; the 2025 application is a separate eight-channel example.','No condition-specific pipetting accuracy extracted.','Actual quoted configuration determines installed accessories.']},
 {id:'fluent',summary:'FCA, MCA96/MCA384 and robotic-gripper arm options have distinct operating envelopes.',sources:[fluent],claims:[
 claim('fluent-fca','liquid-transfer','optional','FCA has eight independent-Z channels with adjustable 9–38 mm Y spacing.',[fluent.id],{configuration:'Flexible Channel Arm'}),
 claim('fluent-mca96','liquid-transfer','optional','MCA96 published volume range.',[fluent.id],range(1,1000,'Multiple Channel Arm 96')),
 claim('fluent-mca384','liquid-transfer','optional','MCA384 exchanges adapters for 96/384 formats and supports selective tip pickup.',[fluent.id],{configuration:'MCA384; 15/50/125 µL disposable-tip sizes in 384 format are capacities, not minimum-volume specifications.'}),
 claim('fluent-gripper','vessel-transfer','optional','RGA offers standard/long-Z and interchangeable finger configurations.',[fluent.id]),
 claim('fluent-arm-count','configuration','native','480 supports one/two arms; 780 and 1080 support up to three subject to configuration.',[fluent.id])
 ],gaps:['FCA low-volume accuracy requires its liquid/air displacement and tip-specific specification.','MCA96 marketing precision phrase lacks a complete condition matrix here, so no universal accuracy value is asserted.','Thermal, magnetic and centrifuge integration requires separate device/configuration records.']}
];
