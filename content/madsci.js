// Curated cross-links to public upstream modules; no upstream driver code is copied.
const index = {
  id: 'int-madsci-index',
  title: 'MADSci node module index at bbfcba5',
  url: 'https://github.com/AD-SDL/MADSci/blob/bbfcba5efcaeacb750252a921256de5d61d51bb2/docs/madsci_powered/Modules.md',
  section: 'Liquid handling and formulation: ot2_module',
  checked: '2026-11-02'
};
const moduleSource = {
  id: 'int-madsci-ot2-module',
  title: 'MADSci Opentrons module at ecb4e6e',
  url: 'https://github.com/AD-SDL/ot2_module/tree/ecb4e6e80a5f9c1ac8d79a5753e62e4b5cb69105',
  section: 'README and src/ot2_rest_node.py: run_protocol',
  checked: '2026-11-02'
};
const opentrons = {
  framework: 'MADSci',
  status: 'upstream-listed',
  module: 'ot2_module',
  moduleRevision: 'ecb4e6e80a5f9c1ac8d79a5753e62e4b5cb69105',
  indexRevision: 'bbfcba5efcaeacb750252a921256de5d61d51bb2',
  license: 'MIT; see upstream module LICENSE',
  documentationUrl: moduleSource.url,
  sourceIds: [index.id, moduleSource.id],
  scope: 'Upstream index lists OT-2 and Flex. Exact commands, firmware and configuration need independent verification.',
  limitations: 'This is a software discovery lead, not proof of installed hardware or validated operations. The run_protocol action substitutes parameters into its input file in place; use a disposable working copy if independently evaluating it.'
};
// IDs are intentionally exact; do not infer from manufacturer, text similarity or family.
const exactIds = new Set(['ot2', 'flex', 'plr-opentrons-ot2', 'plr-opentrons-flex']);
export function madsciFor(id) {
  return exactIds.has(id)
    ? {status: 'upstream-listed', integrations: [opentrons], sources: [index, moduleSource]}
    : {status: 'not-assessed', integrations: [], sources: []};
}
