import {roarChecked} from './roar-models.js';

const imperial = 'https://www.imperial.ac.uk/rapid-online-analysis-of-reactions/';
const facility = (id, title, path, section) => ({
  id, title: 'Imperial ROAR: ' + title, url: imperial + path, section, checked: roarChecked, kind: 'facility'
});
const overview = facility('overview', 'Capabilities', 'capabilities/', 'Overview of capability groups and Sample preparation');
const robotic = facility('robotic', 'Robotic reaction platforms', 'capabilities/robotic-reactor-platforms/', 'What we offer; Low-cost high-throughput capabilities');
const kinetics = facility('kinetics', 'Reaction kinetics platforms', 'capabilities/reaction-kinetics-platforms/', 'What we offer');
const flow = facility('flow', 'Continuous flow reaction platforms', 'capabilities/continuous-flow-platforms/', 'Named systems under Capabilities');
const analytical = facility('analytical', 'Advanced analytical suite', 'capabilities/advanced-analytical-suite/', 'What we offer');
const access = facility('access', 'Access ROAR', 'access-roar/', 'Public access routes and access form');
const faq = facility('faq', 'FAQs', 'faqs/', 'Walk-up LCMS, training and in-situ analytics questions');
const manufacturer = (id, title, url, section) => ({id, title, url, section, checked: roarChecked, kind: 'manufacturer'});
const phoenix = manufacturer('phoenix-ii-brochure', 'ThalesNano Phoenix II brochure', 'https://thalesnano.com/wp-content/uploads/2022/08/Phoenix-Flow-Reactor-brochure.pdf', 'Title and reactor options');
const phPaths = manufacturer('hcube-oem', 'ThalesNano H-Cube Pro', 'https://thalesnano.com/products-and-services/h-cube-pro/', 'System specifications and Phoenix expansion');
const junior = 'unchained-labs-freeslate-junior';

const lead = (id, source, reportedName, reportedRole, status, modelIds, identityGap, extra = {}) => ({
  id, sourceIds: [source.id], reportedName, reportedRole, status, modelIds, identityGap,
  assurance: 'facility-reported', planningEligibility: 'unassessed', controlSupport: 'unknown', ...extra
});
const leads = [
  lead('junior-dispensing', robotic, 'Freeslate Junior', 'Dispensing role: solids and liquids, weighing and a purge enclosure.', 'grouped', [junior], 'The manufacturer model reference covers the configurable platform. Exact dispensing tools and enclosure are unknown.', {reportedGroup: 'freeslate-junior', relatedSourceIds: ['junior-elements'], additionalSourceIds: ['overview']}),
  lead('junior-optimising', robotic, 'Freeslate Junior', 'Optimising Sampling Reactor (OSR) role: independently controlled reactors with sampling under pressure.', 'grouped', [junior], 'Exact reactor options are unknown; the published operating descriptions differ.', {reportedGroup: 'freeslate-junior', conflictIds: ['osr-pressure'], additionalSourceIds: ['overview', 'faq']}),
  lead('junior-screening', robotic, 'Freeslate Junior', 'Screening Reactor role: multiple temperature zones and plate or vial formats.', 'grouped', [junior], 'Exact zones, vessel tooling and pressure configuration are unknown.', {reportedGroup: 'freeslate-junior', additionalSourceIds: ['overview']}),
  lead('ot2', robotic, 'Opentrons OT-2', 'Liquid handling robot; the facility describes support for two fitted pipettes.', 'matched', ['ot2'], 'Fitted pipette generation, channel counts and volumes are unconfirmed. The existing Atlas record describes GEN2 options, not the fitted heads.'),
  lead('paradox', robotic, 'Paradox', 'Plate and reaction-block role in a shared photochemistry description.', 'unresolved', [], 'Plate or block variant not identified; no individual specification is assigned from the group.', {reportedGroup: 'paradox-lumidox', relatedSourceIds: ['paradox-catalogue']}),
  lead('lumidox', robotic, 'Lumidox', 'Illumination role in the shared photochemistry description.', 'unresolved', [], 'Array generation, exact variant and fitted wavelength selection are unconfirmed.', {reportedGroup: 'paradox-lumidox', relatedSourceIds: ['paradox-catalogue']}),
  lead('handystep', robotic, 'BRAND HandyStep', 'Handheld positive displacement repeating dispenser.', 'unresolved', [], 'The manufacturer documents several HandyStep variants; no exact suffix or part number is reported.', {relatedSourceIds: ['handystep-variants']}),
  lead('easymax-102', kinetics, 'EasyMax 102', 'Reaction control and facility-reported heat-flow calorimetry.', 'matched', ['mettler-toledo-easymax-102'], 'Exact Basic/Advanced edition, fitted calorimetry kit and vessels are unconfirmed.', {reportedGroup: 'kinetics-suite'}),
  lead('easysampler', kinetics, 'EasySampler', 'Automated sampling, quench and dilution.', 'unresolved', [], 'The facility names a probe without identifying its model, sampler assembly or installed options.', {reportedGroup: 'kinetics-suite', relatedSourceIds: ['easysampler-1210']}),
  lead('optimax', kinetics, 'OptiMax', 'Reaction control and facility-reported heat-flow calorimetry.', 'unresolved', [], 'The facility does not report the thermostat variant, vessels or fitted calorimetry kit.', {reportedGroup: 'kinetics-suite', relatedSourceIds: ['optimax-reference']}),
  lead('reactir-15', kinetics, 'ReactIR 15', 'In situ infrared monitoring; two systems are reported under this single equipment role.', 'matched', ['mettler-toledo-reactir-15'], 'The facility count does not identify individual units, probes, flow cells or operating limits.', {reportedGroup: 'kinetics-suite', additionalSourceIds: ['faq']}),
  lead('h-cube-pro', flow, 'H-Cube Pro', 'Continuous flow reactor, reported alongside Phoenix.', 'grouped', ['thalesnano-h-cube-pro'], 'The grouped facility limits do not describe the base system or identify the connected configuration.', {reportedGroup: 'h-cube-phoenix', conflictIds: ['phoenix-hcube-group']}),
  lead('phoenix', flow, 'Phoenix', 'High-temperature flow reactor reported alongside H-Cube Pro.', 'unresolved', [], 'Exact Phoenix generation, pump, regulator and connection to H-Cube Pro are unconfirmed.', {reportedGroup: 'h-cube-phoenix', conflictIds: ['phoenix-hcube-group'], relatedSourceIds: ['phoenix-ii-brochure']}),
  lead('vapourtec-r-series', flow, 'Vapourtec R-Series', 'Modular liquid flow platform; the facility describes multiple pump and reactor roles.', 'unresolved', [], 'The report does not identify the exact system or fitted pump, reactor and collection modules.', {relatedSourceIds: ['vapourtec-modules'], additionalSourceIds: ['overview']}),
  lead('freactor', flow, 'fReactor', 'Modular continuous stirred tank reactor with stages in series.', 'unresolved', [], 'The maker distinguishes Classic and Maxi. The reported stage description does not establish the exact kit, revision or fittings.', {relatedSourceIds: ['freactor-variants']}),
  lead('flowsyn', flow, 'Uniqsis FlowSyn', 'Liquid flow platform reported with pumps, tubular reactor and column heater.', 'matched', ['uniqsis-flowsyn'], 'Exact FlowSyn variant, module part numbers and wetted path are unconfirmed.', {reportedGroup: 'flowsyn-flowuv'}),
  lead('flowuv', flow, 'Uniqsis FlowUV', 'Inline UV-visible monitoring; a dip probe is also reported.', 'matched', ['uniqsis-flowuv'], 'The flow-cell configuration and applicable pressure limit are unconfirmed.', {reportedGroup: 'flowsyn-flowuv', conflictIds: ['flowuv-pressure'], additionalSourceIds: ['faq']}),
  lead('h-genie', flow, 'ThalesNano H-Genie', 'Hydrogen generator.', 'unresolved', [], 'The reported name does not distinguish the original or later generation.', {relatedSourceIds: ['h-genie-reference']}),
  lead('agilent-1290-6530', analytical, 'Agilent 1290 Infinity II with 6530 Q-TOF', 'UHPLC and mass analysis reported as one stack.', 'grouped', ['agilent-1290-infinity-ii', 'agilent-6530-q-tof'], 'The chromatography and mass spectrometry model references are separate. The full stack and its fitted modules are unconfirmed.', {additionalSourceIds: ['overview', 'faq']}),
  lead('agilent-1260-6250', analytical, 'Agilent 1260 Infinity II Hybrid SFC/UHPLC with 6250 MS', 'Hybrid chromatography with a facility-reported detector.', 'partial', ['agilent-1260-infinity-ii-sfc-uhplc'], 'The chromatography model is identified; “6250 MS” is unresolved and has no model ID.', {conflictIds: ['agilent-detector'], additionalSourceIds: ['overview', 'faq']}),
  lead('agilent-cary-630', analytical, 'Agilent Cary 630', 'FTIR; diamond ATR and KBr are reported by the facility.', 'matched', ['agilent-cary-630'], 'Reported sampling accessory and engine have not been verified as currently fitted.'),
  lead('plate-centrifuge', overview, 'Plate centrifuge', 'Plate-based sample preparation.', 'unresolved', [], 'Manufacturer, model and rotor are not identified.'),
  lead('porvair-96-evaporator', overview, 'Porvair 96-well evaporator', 'Plate-based evaporation.', 'unresolved', [], 'Well count and brand do not identify the exact evaporator model.'),
  lead('equavap-48', overview, 'EquaVAP 48-well', 'Plate evaporator reported for 48 positions.', 'unresolved', [], 'A manufacturer brochure names a 48-position product, but the facility report does not establish its part number or whether it uses the documented reaction block configuration.', {relatedSourceIds: ['equavap-variants']}),
  lead('equavap-24', overview, 'EquaVAP 24-well', 'Plate evaporator reported for 24 positions.', 'unresolved', [], 'The manufacturer documents multiple spacing options; the facility does not specify one.', {relatedSourceIds: ['equavap-variants']}),
  lead('prusa-3d-printer', overview, 'Prusa 3D printer', 'Supporting fabrication equipment.', 'unresolved', [], 'No model or fitted printer configuration is named.')
];
const conflict = (id, title, observations, resolution, relatedSourceIds = []) => ({id, title, observations, resolution, relatedSourceIds});
const observed = (source, statement) => ({sourceId: source.id, evidence: 'facility', statement});
const conflicts = [
  conflict('osr-pressure', 'OSR pressure descriptions', [
    observed(robotic, 'The robotic platform page reports independent gas pressure control at 30–145 psi for inert gases.'),
    observed(faq, 'The FAQ describes eight batch reactions with limits of up to 200 °C and up to 27 bar.')
  ], 'The descriptions may refer to different operating scopes or configurations. No verified or simultaneous operating limit is assigned.'),
  conflict('flowuv-pressure', 'FlowUV flow-cell pressure', [
    observed(flow, 'The flow page reports up to 35 bar at room temperature.'),
    observed(faq, 'The FAQ describes flow-cell monitoring up to 34 bar.')
  ], 'The installed flow cell and pressure path must be identified before assigning a limit.'),
  conflict('phoenix-hcube-group', 'Grouped H-Cube Pro and Phoenix figures', [
    observed(flow, 'The flow page lists up to 450 °C and up to 200 bar under the shared H-Cube Pro and Phoenix heading.')
  ], 'These figures do not apply to the base H-Cube Pro and do not establish a joint operating point. The Phoenix generation and whether it uses a separate or connected pressure path are unknown.', ['hcube-oem', 'phoenix-ii-brochure']),
  conflict('agilent-detector', 'Unresolved Agilent detector identifier', [
    observed(analytical, 'The analytical page names “6250 MS” and describes single-quadrupole detection.')
  ], 'The identifier was not confirmed in the Agilent material reviewed. No detector model ID or substitute is assigned.')
];
export const roarDiscovery = {
  schemaVersion: 1, version: '2026-11-12', name: 'Imperial ROAR public equipment reports',
  checked: roarChecked,
  retrievalNote: 'Imperial page text was reviewed through the search index where direct retrieval was blocked. This is dated public reporting; current installations, availability, access, qualification and control have not been verified.',
  sourceCoverage: [
    {sourceId: 'overview', use: 'Five supporting equipment leads and overlapping summaries of the four specialist groups.'},
    {sourceId: 'robotic', use: 'Seven roles including the three Junior configurations and the two entries from the photochemistry group.'},
    {sourceId: 'kinetics', use: 'Four roles. The shared suite envelope is not a specification for any one model.'},
    {sourceId: 'flow', use: 'Seven roles, retaining the grouped reactor and spectroscopy references.'},
    {sourceId: 'analytical', use: 'Three roles including two reported instrument stacks.'},
    {sourceId: 'access', use: 'Public entry point for access enquiries; no availability or entitlement data are copied.'},
    {sourceId: 'faq', use: 'Corroborating service references and overlapping pressure descriptions; not additional model leads.'}
  ],
  sources: [overview, robotic, kinetics, flow, analytical, access, faq, phoenix, phPaths,
    manufacturer('junior-elements', 'Unchained Labs Junior and Big Kahuna elements', 'https://unchainedlabs.com/jp/specifications/', 'Shared elements; not the fitted Junior options'),
    manufacturer('paradox-catalogue', 'Analytical Sales and Services Paradox catalogue', 'https://www.analytical-sales.com/wp-content/uploads/2025/06/Paradox_catalog_spring_2025_rev1f.pdf', 'Table of contents: reaction blocks and Lumidox array options'),
    manufacturer('handystep-variants', 'BRAND HandyStep product support', 'https://www.brand.de/en/service-support/myproduct', 'Repetitive pipettes'),
    manufacturer('easysampler-1210', 'METTLER TOLEDO EasySampler 1210', 'https://www.mt.com/nz/en/home/products/L1_AutochemProducts/automated-sampling-systems/easysampler-1210.html', 'EasySampler 1210 System, Complete'),
    manufacturer('optimax-reference', 'METTLER TOLEDO OptiMax 1001', 'https://www.mt.com/in/en/home/products/L1_AutochemProducts/chemical-synthesis-reactor-systems/optimax.html', 'OptiMax 1001 Thermostat'),
    manufacturer('vapourtec-modules', 'Vapourtec R-Series pump modules', 'https://www.vapourtec.com/products/r-series-flow-chemistry-pump-modules/', 'R-Series pump module table'),
    manufacturer('freactor-variants', 'fReactor product range', 'https://www.freactor.com/buy.html', 'Product table: Classic, Maxi and Photo-Flow'),
    manufacturer('h-genie-reference', 'ThalesNano instrument fleets brochure', 'https://thalesnano.com/wp-content/uploads/2025/03/Instrument-fleets-brochure.pdf', 'Illustrated fleet listing H-Genie II'),
    manufacturer('equavap-variants', 'Analytical Sales and Services EquaVAP brochure', 'https://www.analytical-sales.com/brochure/equavap_rev1f.pdf', 'p. 2: 48-position model and 24-position spacing options')
  ],
  leads, conflicts
};
