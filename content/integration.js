// Public evidence crosswalk, not an assertion that a complete workcell is validated.
// Upstream status/API/unknown testing flags are retained from the pinned MIT registry.
import {reference} from './reference.js';

const S=(id,title,url,section)=>({id,title,url,section,checked:'2026-10-31'});
const registrySource=S('int-plr-registry','PyLabRobot device registry at 3976f1235a4e2180306005541459c2bedfd0dad4','https://raw.githubusercontent.com/PyLabRobot/pylabrobot/3976f1235a4e2180306005541459c2bedfd0dad4/docs/_static/devices.json','Device IDs, status, API generation, nested models and needs_hardware_testing fields');
const machines=S('int-plr-machines','PyLabRobot supported machines','https://docs.pylabrobot.org/stable/user_guide/machines.html','Reading the table; model-specific support; API generations');
const setup=S('int-plr-setup','PyLabRobot installation','https://docs.pylabrobot.org/stable/user_guide/getting-started/installation.html','Physical hardware dependency groups; Using the USB interface; Windows driver ownership');
const flex=S('int-plr-flex','PyLabRobot Flex guide','https://docs.pylabrobot.org/stable/user_guide/opentrons/flex/hello-world.html','Connection table; hardware-verification warning; Install and import; Prepare the physical deck');
const ot2=S('int-plr-ot2','PyLabRobot OT-2 guide','https://docs.pylabrobot.org/stable/user_guide/opentrons/ot2/hello-world.html','Supported liquid operations; Physical setup; Model the physical deck');
const star=S('int-plr-star','PyLabRobot Hamilton STAR and STARlet','https://docs.pylabrobot.org/stable/user_guide/hamilton/star/index.html','STAR/STARlet support table and legacy STARBackend API');
const plate=S('int-plr-plateloc','PyLabRobot PlateLoc guide','https://docs.pylabrobot.org/stable/user_guide/agilent/plateloc/hello-world.html','Connection; Physical setup; Read status; Serial command profile');
const bench=S('int-plr-benchcel','PyLabRobot BenchCel 4R quickstart','https://docs.pylabrobot.org/stable/user_guide/agilent/benchcel/hello-world.html','Verified firmware; How it communicates; Physical setup; transfer teachpoint');
const odtc=S('int-plr-odtc','PyLabRobot ODTC guide','https://docs.pylabrobot.org/stable/user_guide/inheco/odtc/hello-world.html','Ethernet/SiLA connection; Mostly v0 listing');
const odtcMfr=S('int-inheco-odtc','INHECO ODTC specifications','https://www.inheco.com/odtc.html','Power & Control Unit interface and footnote 1');
const mag=S('int-flex-magnetic-block','Opentrons Magnetic Block GEN1','https://docs.opentrons.com/flex/modules/magnetic-block/','Magnetic components; Software control');
const linq=S('int-linq-instruments','Automata LINQ instruments and drivers','https://docs.automata.tech/instruments-drivers','Workcell; Instruments / Config; Simulation Configuration');
const dragon=S('int-dragonfly-api','SPT dragonfly discovery','https://www.sptlabtech.com/products/dragonfly/dragonfly-discovery','Versatile workflow integration');
const bravo=S('int-bravo-control','Agilent Bravo datasheet 5990-3480EN','https://www.agilent.com/cs/library/datasheets/public/5990-3480EN.pdf','p1 VWorks; p2 Control and optional plate gripper');
const i7=S('int-biomek-integration','Beckman Biomek i-Series brochure','https://media.beckman.com/-/media/pdf-assets/brochures/biomek-i-series-automated-liquid-handlers-brochure.pdf?rev=47d63a19459246b28cbf1fd9feee7d3c','p4 Biomek software; p6 third-party device integration');
const rotina=S('int-rotina-interface','Hettich ROTINA 380 / RC Robotic datasheet','https://www.hettichlab.com/downloadcenter/Products/Datasheets/ROTINA380-380RC-Robotic_EN.pdf','p1 Features: loading hatch and RS-232');

const fact=(topic,statement,sourceIds)=>({topic,statement,sourceIds,status:'documented'});
const question=(topic,statement)=>({topic,statement,sourceIds:[],status:'verification-question'});
const readinessQuestions=()=>[
  question('configuration-and-firmware','Which exact instrument, head, modules and firmware versions must be supported? Verify the commands needed for this configuration.'),
  question('labware-and-calibration','Are the exact labware definitions, offsets and movement paths verified on the physical setup?'),
  question('software-and-service','What OS, network/USB access, vendor software licences and service arrangements are required for the chosen control route?'),
  question('recovery-and-validation','How will the system stop, recover and reconcile labware state after a failed command? Demonstrate the required operations and assay before unattended use.')
];
function driver(registryId,scope,limitations=[]){
  const r=reference.records.find(r=>r.id===registryId);
  if(!r?.upstream)throw new Error(`Missing pinned upstream record: ${registryId}`);
  const u=r.upstream;
  return {name:r.name,registryId,status:u.driverStatus,api:u.api??null,documentationUrl:u.documentationUrl??null,
    hardwareTestingRequired:typeof u.metadata?.needs_hardware_testing==='boolean'?u.metadata.needs_hardware_testing:null,
    scope,limitations:[...(u.notes?[u.notes]:[]),...limitations]};
}
function record(id,{drivers=[],prerequisites=[],gaps=[],considerations=[],sources=[]}={}){
  const found=drivers.length>0;
  return {id,integration:{framework:'PyLabRobot',status:found?'upstream-listed':'not-established',drivers,prerequisites,
    gaps:[...(!found?['No exact-model driver mapping was established in the reviewed pinned registry and current documentation; this is not proof that support is absent.']:[]),...gaps,'Driver coverage does not establish deployment effort, hardware qualification or assay validity.'],
    sourceIds:['int-plr-registry','int-plr-machines',...sources.map(s=>s.id)]},
    practicalConsiderations:[...considerations,...readinessQuestions()],sources:[registrySource,machines,...sources]};
}

export const integrationEvidence=[
  record('andrew',{
    prerequisites:['Verify whether an authorised external control interface is available for the exact Andrew+ / OneLab configuration.'],
    considerations:[question('control-route','Can the vendor supply a documented programmatic interface, its licence terms and a working example for this Andrew+ configuration?')]
  }),
  record('bravo',{
    prerequisites:['Verify a documented connection between the chosen external controller and this Bravo configuration; VWorks control does not establish a PyLabRobot driver.'],
    considerations:[fact('vendor-control','Agilent documents VWorks control and Ethernet/RS-232 interfaces for Bravo.',[bravo.id]),question('plate-handling','Is the optional gripper fitted, and which external transfer position has been qualified?')],sources:[bravo]
  }),
  record('i7',{
    prerequisites:['Establish the external-control interface and software licences for the specific Biomek installation.'],
    considerations:[fact('vendor-control','Beckman documents Biomek software control and third-party peripheral integration; these are not evidence of a PyLabRobot i7 backend.',[i7.id]),question('head-and-gripper','Which Span-8/multichannel arrangement and gripper movement paths must the integration support?')],sources:[i7]
  }),
  record('firefly',{
    prerequisites:['Verify the supported external API, software version and permissions for the exact firefly variant.'],
    considerations:[question('separate-functions','Does the proposed control route expose sample pipetting, reagent dispensing, grippers and the installed thermal/shaker modules separately?')]
  }),
  record('firefly-plus',{
    prerequisites:['Verify control of the ATL/Plus expansion and the selected thermocycler, as well as the base firefly.'],
    considerations:[question('expansion-integration','Which external API commands cover expansion storage, lids and thermocycler error recovery on this exact Plus configuration?')]
  }),
  record('flex',{
    drivers:[driver('plr-opentrons-flex','Flex v1 driver; operation-specific coverage, not every available head or module.',['Current guide examples use an eight-channel head; do not infer full multi-module workcell support.'])],
    prerequisites:['Provide the documented robot-server HTTP connection and appropriate Opentrons dependency; network discovery needs local-network visibility.','Match physical labware geometry, tip rack and calibration to the chosen head.'],
    gaps:['The current guide explicitly leaves one-channel and 96-channel heads, and some operations, unverified.'],
    considerations:[fact('connection','The guide documents HTTP over Ethernet/Wi-Fi on port 31950, with a USB-serial alternative.',[flex.id]),fact('geometry','PLR supplies aspiration/dispense coordinates from its resource definitions; the robot does not resolve the plate geometry.',[flex.id]),question('modules','Does this driver version support every installed module and required gripper operation?')],sources:[flex]
  }),
  record('ot2',{
    drivers:[driver('plr-opentrons-ot2','OT-2 v1 guide lists liquid operations for single-channel GEN1 and GEN2 pipettes.',['The registry label mostly must not be generalized to eight-channel liquid operations.'])],
    prerequisites:['Use the robot hostname/IP over the same network, with HTTP port 31950 reachable.','Complete deck, pipette-offset and exact-tip-rack tip-length calibration in the Opentrons App.'],
    gaps:['Multi-channel pipetting coverage is not established by the current guide.'],
    considerations:[fact('connection','The driver creates a robot-server run and waits for each command to succeed or fail.',[ot2.id]),fact('calibration','The physical setup instructions require deck, pipette-offset and tip-length calibration for the selected tips.',[ot2.id])],sources:[ot2]
  }),
  record('starlet',{
    drivers:[driver('plr-hamilton-star','Underlying STAR/STARlet family backend; a lead for NGS STARlet, not verification of the complete NGS workstation.',['Legacy v0 API. Confirm selected channels, gripper, peripheral interfaces and firmware.'])],
    prerequisites:['Confirm the exact STARlet generation and installed NGS accessories against backend commands.','The documented USB route requires USB dependencies and platform-specific driver access; avoid concurrent vendor control.'],
    gaps:['Family support cannot certify an NGS method, integrated ODTC, heating/shaking devices or a particular four/eight-channel configuration.'],
    considerations:[fact('family-scope','PyLabRobot lists STAR and STARlet under the legacy STARBackend.',[star.id]),fact('host-driver','The Windows USB setup changes the device driver and requires Hamilton/VENUS software to be closed; this is a setup dependency, not a step performed by this catalogue.',[setup.id]),question('vendor-recovery','What vendor-software restoration and service procedure is needed if USB driver ownership is changed?')],sources:[star,setup]
  }),
  record('fluent',{
    prerequisites:['Establish a Fluent-specific external control interface and driver; the Tecan EVO entry is a different product.'],
    gaps:['The registry contains Tecan EVO, not an exact Fluent mapping.'],
    considerations:[question('arm-scope','Does the proposed interface support the selected FCA/MCA96/MCA384 arms and gripper, including recovery and tip-selection modes?')]
  }),
  record('mantis',{
    drivers:[driver('plr-formulatrix-mantis','MANTIS is listed as work in progress.',['The pinned record supplies neither an API path nor a driver quickstart. A ready-to-run integration is not established.'])],
    prerequisites:['Obtain the current implemented driver entry point, supported commands and hardware-test evidence for the exact MANTIS generation.'],
    gaps:['An upstream WIP listing is not evidence that normal dispensing workflows can currently be controlled.'],
    considerations:[question('driver-readiness','Which commands are implemented and tested, and can the chip changer, dispensing and error reporting be demonstrated on the intended hardware?')]
  }),
  record('dragonfly',{
    prerequisites:['Verify access to the manufacturer API and its version/licensing before designing a third-party integration.'],
    considerations:[fact('vendor-api','SPT documents an API for integration with external plate handlers, stackers and other instruments; it does not identify a PyLabRobot backend.',[dragon.id]),question('consumables-and-state','How are syringe loading, reservoir state, priming, plate handoffs and failed dispenses represented by the selected API?')],sources:[dragon]
  }),
  record('kingfisher',{
    prerequisites:['Verify remote start, status/error reporting and plate-loading support for KingFisher Flex specifically.'],
    considerations:[question('model-boundary','Is the proposed remote-control route for Flex, rather than a different KingFisher model?'),question('loading','Who loads the plates and tip combs, and what physical and software interfaces would automate those handoffs?')]
  }),
  record('rotina',{
    prerequisites:['Obtain the ROTINA 380 RC Robotic serial protocol and confirm compatible firmware and loading-hatch control.'],
    gaps:['Registry ROTANTA 460 Robotic and SBS 300 R entries are not ROTINA 380 RC Robotic drivers.'],
    considerations:[fact('physical-interface','Hettich specifies RS-232 and a loading/unloading hatch on the ROTINA robotic family.',[rotina.id]),question('rotor-and-handoff','Are rotor positioning, imbalance/error handling, lids and the robot transfer geometry supported for the chosen rotor/buckets?')],sources:[rotina]
  }),
  record('plateloc',{
    drivers:[driver('plr-agilent-plateloc','PlateLoc sealer, independently of the external plate handler.',['Mostly v1; direct serial protocol does not report actual block temperature.']),driver('plr-agilent-benchcel-4r','BenchCel 4R four-stacker handler only.',['Do not generalize to BenchCel 2R, other stacker counts or an untested transfer geometry.'])],
    prerequisites:['PlateLoc needs the serial dependency, USB-to-RS-232 adapter and correct DB9 cable.','BenchCel 4R needs Ethernet, compressed air and a verified transfer teachpoint; VWorks must release the control session.'],
    gaps:['A pair of listed drivers does not establish a validated PlateLoc/BenchCel workflow.','Driver-accepted temperature commands are not a replacement for the manufacturer operating envelope.'],
    considerations:[fact('software-route','PyLabRobot documents direct PlateLoc RS-232 control without ActiveX/VWorks; BenchCel teaching still uses VWorks in its guide.',[plate.id,bench.id]),fact('status-observability','PlateLoc status includes the written target and cycle completion, but not a measured block temperature.',[plate.id]),fact('firmware-and-motion','BenchCel verification is reported for 4R firmware 3.2.20.0; its reverse-engineered protocol and transfer teachpoints need checking on the intended unit.',[bench.id])],sources:[plate,bench]
  }),
  record('linq',{
    prerequisites:['Choose who owns orchestration and each physical device connection; establish any LINQ-to-PyLabRobot bridge explicitly.'],
    considerations:[fact('separate-controller','LINQ has its own workcell, driver and configuration model. Its simulation mode can bypass hardware initialization.',[linq.id]),question('bridge-and-ownership','Is there a supported bridge between LINQ and PyLabRobot, and how does it avoid concurrent control of the same instrument?')],sources:[linq]
  }),
  record('odtc',{
    drivers:[driver('plr-inheco-odtc','ODTC family listing marked Mostly v0; exact variant and firmware need confirmation.',['The registry has no API path and the guide is an overview rather than a runnable control example.'])],
    prerequisites:['Supply the required INHECO Power & Control Unit and network connection.','Confirm protocol generation, firmware and the working API entry point for the selected ODTC.'],
    gaps:['PyLabRobot describes SiLA 2; the manufacturer page states SiLA/Ethernet without a generation in the cited table. Verify this agreement for the unit.','No blanket compatibility across ODTC 96/384/XL variants is established.'],
    considerations:[fact('controller','INHECO specifies its dedicated PCU with an Ethernet/SiLA interface and requires the ODTC to use that power/control unit.',[odtcMfr.id]),fact('driver-overview','The PyLabRobot overview requires the device IP address and Ethernet connectivity.',[odtc.id]),question('sequence-and-recovery','Does the driver expose lid state, method loading, cycle completion and recovery for this firmware?')],sources:[odtc,odtcMfr]
  }),
  record('magblock',{
    prerequisites:['Model the passive block and exact plate position; establish supported movement by the separate robot/gripper.'],
    gaps:['No standalone PyLabRobot Magnetic Block mapping is established. Flex driver coverage alone does not qualify the complete bead workflow.'],
    considerations:[fact('passive-device','The Magnetic Block is unpowered and has no electronic interface; exposure is controlled by moving labware onto and off it with the Flex Gripper.',[mag.id]),question('handling','Does the intended PLR Flex configuration support the required plate movement, offsets and collision clearance?')],sources:[mag]
  }),
  record('cfx',{
    prerequisites:['Verify a CFX Opus 96-specific remote interface, software licence and supported automation commands.'],
    considerations:[question('control-versus-export','Can the interface initiate a run and report completion/errors, rather than only export results?'),question('loading-and-optics','How will plates and the lid be handled, and how will the chosen assay settings and results be associated with each plate?')]
  }),
  record('tapestation',{
    prerequisites:['Verify external control and result export for 4200 TapeStation specifically.'],
    considerations:[question('consumables-and-loading','Which ScreenTape, tip and sample-loading steps remain manual, and does the proposed automation cover them?'),question('results','Can the control software expose reliable run IDs, completion/error state and assay-specific result files?')]
  }),
  record('storage',{
    prerequisites:['Choose an exact storage-system model and controller before assigning any driver.'],
    gaps:['The generic storage record cannot be mapped to a specific driver. Cytomat, HighRes and other registry storage entries do not establish control of an Azenta BioStore/BioArc system.'],
    considerations:[question('inventory-and-retrieval','Which controller API supports inventory reconciliation, sample retrieval, handoff and return, including failures?'),question('cold-chain','What mechanical transfer interface and temperature monitoring preserve the required storage conditions through retrieval?')]
  })
];
