// Manufacturer model references. Imperial's reported roles are in roar-discovery.js.
export const roarChecked = '2026-11-12';
const source = (id, title, url, section) => ({id, title, url, section, checked: roarChecked, kind: 'manufacturer'});
const junior = source('mfr-junior', 'Unchained Labs Junior', 'https://unchainedlabs.com/jp/junior/', 'Junior overview and application list');
const easymax = source('mfr-easymax-102', 'METTLER TOLEDO EasyMax 102 user manual', 'https://www.mt.com/dam/0autochem/EasyMax102_UserManual.pdf', '§1 Introduction and §1.1 Scope of delivery');
const hfcal = source('mfr-easymax-hfcal', 'METTLER TOLEDO EasyMax HFCal upgrade kit', 'https://www.mt.com/sg/en/home/products/L1_AutochemProducts/reaction-calorimeters/EasyMax-HFCal-Heat-Flow-Calorimeter-Upgrade-Kit.html', 'Highlights: Upgrade your synthesis workstation');
const reactir = source('mfr-reactir-15', 'METTLER TOLEDO ReactIR 15', 'https://www.mt.com/gb/en/home/phased_out_products/L1_AutochemProducts/ReactIR/ReactIR-15.html', 'Specifications and ReactIR Sampling Technology');
const hcube = source('mfr-h-cube-pro', 'ThalesNano H-Cube Pro', 'https://thalesnano.com/products-and-services/h-cube-pro/', 'Flow reactor overview, system expansion options and system specifications');
const flowsyn = source('mfr-flowsyn', 'Uniqsis FlowSyn range brochure (Asynt)', 'https://www.asynt.com/wp-content/uploads/2024/12/Asynt-FlowSyn-Brochure-web.pdf', 'FlowSyn overview, pump specifications, coil reactors and column reactors');
const flowuv = source('mfr-flowuv', 'Uniqsis FlowUV features (Asynt)', 'https://www.asynt.com/wp-content/uploads/2025/06/Asynt-FlowUV-Spectrometer-Key-Features-V1.0.pdf', 'First page: overview of features');
const lc = source('mfr-1290-ii', 'Agilent 1290 Infinity II LC System', 'https://www.agilent.com/about/sustainable-lab-solutions/en/act-1290-Infinity-II-LC.html', '1290 Infinity II LC System and Product Content');
const lcModules = source('mfr-1290-ii-modules', 'Agilent 1290 Infinity II LC ordering details', 'https://www.agilent.com/sites/Satellite?assetid=1405201828424&assettype=Support_C&d=&formassembly=false&pagename=Agilent%2FGSA_C%2FGenericInnerTemplateWithFourZones_New', 'Ordering table: high-speed/flexible pumps, multisampler and detectors');
const qtof = source('mfr-6530-qtof', 'Agilent 6530 Accurate-Mass Q-TOF LC/MS', 'https://www.agilent.com/en/product/liquid-chromatography-mass-spectrometry-lc-ms/lc-ms-instruments/quadrupole-time-of-flight-lc-ms/6530-q-tof-lc-ms', 'Product details and specifications: quadrupole isolation and TOF mass ranges');
const sfc = source('mfr-1260-ii-hybrid', 'Agilent 1260 Infinity II SFC/UHPLC Hybrid System technical overview', 'https://www.agilent.com/cs/library/technicaloverviews/public/5991-8276EN.pdf', 'p. 2: Instrumentation and Instrumental setup');
const cary = source('mfr-cary-630', 'Agilent Cary 630 FTIR user guide', 'https://www.agilent.com/cs/library/usermanuals/public/G8043-90001_Cary_630_FTIR_UG_EN.pdf', '§3 Analyzing Samples; §6 Specifications');

const claim = (id, operation, type, statement, source, configuration, extra = {}) =>
  ({id, operation, type, statement, sourceIds: [source.id], evidence: 'manufacturer', configuration, ...extra});
const models = [
  {
    id: 'unchained-labs-freeslate-junior', name: 'Freeslate Junior', vendor: 'Unchained Labs', category: 'robotic reactor platform',
    summary: 'Configurable benchtop automation platform for dispensing, screening and reaction work.',
    inputs: 'Samples or materials in vessels selected for the fitted tool.', outputs: 'Dispensed materials or processed vessels, depending on the configured tools.',
    sources: [junior],
    claims: [
      claim('junior-powder', 'solid dispensing', 'optional', 'The Junior platform can be configured for powder dispensing.', junior, 'Junior with powder dispensing tooling'),
      claim('junior-reactor', 'reaction screening', 'optional', 'Reaction screening and pressurised reactors are documented application options.', junior, 'Junior with the relevant reactor tools')
    ],
    gaps: ['The platform name does not identify the reactor, dispenser, enclosure or installed configuration. The three ROAR roles are separate facility reports.']
  },
  {
    id: 'mettler-toledo-easymax-102', name: 'EasyMax 102', vendor: 'METTLER TOLEDO', category: 'batch reaction workstation',
    summary: 'Benchtop reaction control with two independent zones and interchangeable vessels.',
    inputs: 'Batch samples in one of the documented reactor or vial sizes.', outputs: 'Processed batch samples and recorded temperature data.',
    sources: [easymax, hfcal],
    claims: [
      claim('easymax-zones', 'reaction control', 'native', 'The thermostat provides two independently controlled reactor zones.', easymax, 'EasyMax 102 thermostat', {value: 2, unit: 'zones'}),
      claim('easymax-vessels', 'reaction control', 'optional', 'Vessel choices include 50 and 100 mL reactors and 8, 10 and 25 mL vials.', easymax, 'Each capacity refers to a different reactor or vial; capacities are not a working-volume range', {value: [8, 10, 25, 50, 100], unit: 'mL nominal vessel capacity'}),
      claim('easymax-hfcal', 'heat-flow calorimetry', 'optional', 'Heat-flow calorimetry is documented for the Advanced workstation with the HFCal upgrade.', hfcal, 'EasyMax 102 Advanced with HFCal')
    ],
    gaps: ['Installed edition, vessel and software are unconfirmed. Do not apply the shared ROAR kinetics suite envelope to this model.']
  },
  {
    id: 'mettler-toledo-reactir-15', name: 'ReactIR 15', vendor: 'METTLER TOLEDO', category: 'infrared spectrometer',
    summary: 'In situ infrared spectrometer with probe options for batch and continuous monitoring.',
    inputs: 'Sample presented through a compatible probe or sampling interface.', outputs: 'Infrared spectral data.',
    sources: [reactir],
    claims: [
      claim('reactir-15-optics', 'infrared spectroscopy', 'native', 'The base-unit optical range is broader than the maximum range specified for a fibre probe.', reactir, 'ReactIR 15 base optics only', {value: {min: 650, max: 4000}, unit: 'cm⁻¹'}),
      claim('reactir-15-fibre-optics', 'infrared spectroscopy', 'optional', 'Maximum optical span stated for the fibre probe.', reactir, 'ReactIR 15 with fibre probe', {value: {min: 650, max: 2500}, unit: 'cm⁻¹'})
    ],
    gaps: ['A base-unit optical range is not a probe range. Pressure, temperature and optical limits depend on the selected probe, flow cell and configuration; no joint envelope is established here.']
  },
  {
    id: 'thalesnano-h-cube-pro', name: 'H-Cube Pro', vendor: 'ThalesNano', category: 'continuous flow reactor',
    summary: 'Base flow reactor for hydrogenation with separately documented expansion options.',
    inputs: 'Liquid feed and hydrogen supplied by the instrument.', outputs: 'Liquid reaction stream.',
    sources: [hcube],
    claims: [
      claim('hcube-pro-temperature', 'flow reaction', 'native', 'Manufacturer temperature range for the base system.', hcube, 'H-Cube Pro base system without Phoenix', {value: {min: 10, max: 150}, unit: '°C', conditions: 'The temperature, pressure and flow specifications are separate ranges. Concurrent endpoints are not established.'}),
      claim('hcube-pro-pressure', 'flow reaction', 'native', 'Manufacturer pressure range for the base system.', hcube, 'H-Cube Pro base system without Phoenix', {value: {min: 'Atmospheric', max: 100}, unit: 'bar', conditions: 'The temperature, pressure and flow specifications are separate ranges. Concurrent endpoints are not established.'}),
      claim('hcube-pro-flow', 'flow reaction', 'native', 'Manufacturer liquid flow range for the base system.', hcube, 'H-Cube Pro base system without Phoenix', {value: {min: 0.3, max: 3}, unit: 'mL/min', conditions: 'The temperature, pressure and flow specifications are separate ranges. Concurrent endpoints are not established.'}),
      claim('hcube-phoenix-option', 'flow reaction', 'external', 'The manufacturer describes connecting a separate Phoenix reactor module.', hcube, 'H-Cube Pro with external Phoenix; actual generation and pressure path require verification')
    ],
    gaps: ['The facility lists H-Cube Pro and Phoenix together. Its grouped maxima do not apply to the base H-Cube Pro or demonstrate simultaneous operation.']
  },
  {
    id: 'uniqsis-flowsyn', name: 'FlowSyn', vendor: 'Uniqsis', category: 'continuous flow reactor',
    summary: 'Modular continuous-flow platform with pump, coil and column options.',
    inputs: 'Liquid feed through a selected pump and flow path.', outputs: 'Continuous liquid stream.',
    sources: [flowsyn],
    claims: [
      claim('flowsyn-hotcoil-temperature', 'flow reaction', 'optional', 'The documented HotCoil heater range is ambient to 260 °C.', flowsyn, 'FlowSyn with HotCoil heater', {value: {min: 'Ambient', max: 260}, unit: '°C', conditions: 'Heater range only. Coil material and flow-path pressure limits apply separately.'}),
      claim('flowsyn-modules', 'flow reaction', 'optional', 'The manufacturer documents coil reactors and a column heater as distinct options.', flowsyn, 'FlowSyn with the selected coil or column module')
    ],
    gaps: ['Flow path material, pump and heater part numbers are unconfirmed. Their compatibility and combined operating envelope require the actual configuration.']
  },
  {
    id: 'uniqsis-flowuv', name: 'FlowUV', vendor: 'Uniqsis', category: 'UV-visible spectrometer',
    summary: 'Fibre-coupled UV-visible spectrometer for inline or batch measurements with different sample interfaces.',
    inputs: 'Sample presented in a compatible inline cell, dip probe or cuvette holder.', outputs: 'UV-visible spectral data.',
    sources: [flowuv],
    claims: [
      claim('flowuv-spectrum', 'UV-visible spectroscopy', 'native', 'Full-spectrum optical readout is supported by the fibre-coupled instrument.', flowuv, 'FlowUV spectrometer with a compatible sample interface'),
      claim('flowuv-scan-time', 'UV-visible spectroscopy', 'native', 'The feature sheet lists a 50 ms full-wavelength scan.', flowuv, 'FlowUV in full-wavelength scan mode', {value: 50, unit: 'ms', conditions: 'Published scan time; not end-to-end sampling interval or an installed performance test.'}),
      claim('flowuv-interface', 'UV-visible spectroscopy', 'optional', 'Flow cells and dip probes are distinct sample interface options.', flowuv, 'FlowUV with selected flow cell or dip probe')
    ],
    gaps: ['Cell, tubing and probe part numbers are unconfirmed. The pressure limit depends on the installed flow path; the two public ROAR reports differ.']
  },
  {
    id: 'agilent-1290-infinity-ii', name: '1290 Infinity II LC', vendor: 'Agilent', category: 'liquid chromatograph',
    summary: 'Modular UHPLC platform; pump, sample handling and detection depend on the stack.',
    inputs: 'Liquid mobile phase and samples introduced through the selected sampler.', outputs: 'Chromatographic separation and, with a suitable detector, chromatograms.',
    sources: [lc, lcModules],
    claims: [
      claim('1290-ii-uhplc', 'liquid chromatography', 'native', 'The Infinity II LC platform is designed for UHPLC.', lc, '1290 Infinity II analytical LC system'),
      claim('1290-ii-options', 'liquid chromatography', 'optional', 'Agilent lists G7120A High Speed and G7104A Flexible pump options, the G7167B Multisampler, and multiple detector options.', lcModules, 'Each part number identifies a distinct module option')
    ],
    gaps: ['The exact pump, sampler, detector options and working capacity of the ROAR stack are unconfirmed. The 6530 Q-TOF is a separate component.']
  },
  {
    id: 'agilent-6530-q-tof', name: '6530 Q-TOF LC/MS', vendor: 'Agilent', category: 'mass spectrometer',
    summary: 'Quadrupole time-of-flight mass spectrometer for LC/MS.',
    inputs: 'Compatible sample stream presented through a selected ion source.', outputs: 'Mass spectra.',
    sources: [qtof],
    claims: [
      claim('6530-tof-range', 'mass spectrometry', 'native', 'Published TOF analyser mass range.', qtof, '6530 Q-TOF TOF analyser', {value: {min: 20, max: 20000}, unit: 'm/z', conditions: 'TOF detection range, not the quadrupole isolation range.'}),
      claim('6530-quad-range', 'mass spectrometry', 'native', 'Published quadrupole isolation mass range.', qtof, '6530 Q-TOF quadrupole', {value: {min: 20, max: 4000}, unit: 'm/z'})
    ],
    gaps: ['The selected source and coupling configuration at ROAR are unconfirmed.']
  },
  {
    id: 'agilent-1260-infinity-ii-sfc-uhplc', name: '1260 Infinity II SFC/UHPLC Hybrid', vendor: 'Agilent', category: 'hybrid chromatograph',
    summary: 'Agilent hybrid chromatography platform with a choice of SFC and UHPLC modes.',
    inputs: 'Sample and mode-specific mobile phase.', outputs: 'Chromatographic separation and, with a suitable detector, chromatograms.',
    sources: [sfc],
    claims: [
      claim('1260-ii-hybrid-modes', 'hybrid chromatography', 'native', 'The documented hybrid arrangement uses separate pumps and a switching valve to select SFC or UHPLC on shared modules.', sfc, '1260 Infinity II SFC/UHPLC Hybrid; modes selected in turn, not simultaneous')
    ],
    gaps: ['The manufacturer example does not identify the detector at ROAR. “6250 MS” remains an unresolved facility identifier; do not substitute the detector from the example.']
  },
  {
    id: 'agilent-cary-630', name: 'Cary 630 FTIR', vendor: 'Agilent', category: 'infrared spectrometer',
    summary: 'Modular FTIR with interchangeable sampling accessories and two beamsplitter choices.',
    inputs: 'Sample presented through a selected FTIR sampling accessory.', outputs: 'Infrared spectral data.',
    sources: [cary],
    claims: [
      claim('cary-630-resolution', 'infrared spectroscopy', 'native', 'Maximum spectral resolution in the user guide.', cary, 'Cary 630 FTIR base spectrometer', {value: 2, unit: 'cm⁻¹'}),
      claim('cary-630-optical-options', 'infrared spectroscopy', 'optional', 'Diamond ATR is a sampling accessory; KBr and ZnSe are beamsplitter alternatives.', cary, 'Cary 630 with selected beamsplitter and sample accessory')
    ],
    gaps: ['The ROAR report of diamond ATR and KBr is facility evidence. No site-specific performance or working configuration has been verified.']
  }
];

export const roarRecords = models.map(({claims, gaps, ...model}) => ({
  ...model,
  capabilities: [...new Map(claims.map(({operation, type, sourceIds}) => [
    operation + ':' + type, {operation, type, sourceIds, detail: 'See the sourced claims for configurations and limits.'}
  ])).values()],
  modules: [], performance: null, verified: roarChecked, evidenceLevel: 'curated-reference',
  completeness: {inputs: model.inputs, outputs: model.outputs, workingEnvelope: gaps[0]},
  planningEligibility: 'unassessed', controlSupport: 'unknown', upstream: null
}));

export const roarEvidence = models.map(({id, sources, claims, gaps}) => ({id, sources, claims, gaps}));
