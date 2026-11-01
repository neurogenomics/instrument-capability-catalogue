# Public procurement observations

Checked 31 October 2026. `content/procurement.js` contains 34 observations against 11 instrument records, including 23 numerical price observations. Some observations intentionally index the same compatible module under different instruments; these are not distinct required purchases. This is a bounded pricing survey, not an exhaustive market-price or availability database. No private quotations, correspondence, internal budgets or contact names were consulted or copied.

## What the numerical prices mean

The official [Opentrons robot category](https://opentrons.com/products/categories/robots), [pipette category](https://opentrons.com/products/categories/pipettes), [module category](https://opentrons.com/products/categories/modules) and [workstation category](https://opentrons.com/products/categories/workstations) expose public **Starting at** prices. These are US-dollar starting offers, not final configured totals or UK landed costs. Every corresponding observation carries `priceBasis: 'starting-at'`; the interface must retain that qualifier. Category values were used because some dynamic product pages omit their selected total or expose a zero-price shell. Zero placeholders and differently configured cached totals were excluded.

The robot category currently lists Flex starting at USD 24,950 and OT-2 at USD 15,950. [Flex's product page](https://opentrons.com/products/opentrons-flex-robot) requires On-Site Installation but does not give a separately verified current amount in the inspected extraction. [OT-2's product page](https://opentrons.com/products/ot-2-robot) says its base includes one GEN2 single-channel pipette. The independent pipette price must not automatically be added to that base. Chosen tips, heads, modules, installation, tax, shipping and support need an itemised current offer.

Module category prices distinguish the named module from separately listed Flex caddy/calibration accessories. [Heater-Shaker](https://opentrons.com/products/heater-shaker-module), [Temperature Module](https://opentrons.com/products/temperature-module-gen2) and [Thermocycler](https://opentrons.com/products/thermocycler-module-1) pages expose OT-2-only and Flex-with-caddy variants; the category starting number does not establish which bundle is included. The selected aluminum block/plate adapter is described separately. Do not count a separately listed caddy twice if a configured bundle already includes it.

The [Flex Stacker page](https://opentrons.com/products/opentrons-flex-stacker-1) states that pre-Q3-2025 robots require an upgrade, whose cost is not included, and describes a required customer/stacker kit. Its starting price therefore cannot establish a complete retrofit cost. The exact kit variant and eligibility must be checked.

[Fisher Scientific NC1916994](https://www.fishersci.com/shop/products/mantis-chip-1ul-and-5ul-12pk/NC1916994) displays USD 1,954.08 for a purchase package described as twelve MANTIS silicone HV chips, supplier SKU 233648. This is a **reseller-listed consumable**, not a manufacturer instrument price or evidence of performance. Account pricing may differ and supplier surcharges may apply. Pack size, tax and shipping need checking; no per-chip calculation is introduced.

## Availability is a separate observation

`orderable` means an inspected product page exposes Add to Cart. It does not mean in stock, tested, reservable or guaranteed to arrive on a stated date. Supplier “ships in” graphics were not converted into live stock claims. Category-only prices have `not-verified` availability. Contact/request-quote buttons likewise do not establish stock.

The [OT-2 Magnetic Module documentation](https://docs.opentrons.com/ot-2/modules/magnetic/) explicitly states that the module is discontinued, while some inventory may remain. The observation preserves that distinction; it does not assert there is no stock anywhere or substitute the Flex passive block.

## Quotation and remaining gaps

Public manufacturer routes for Andrew+, Bravo, i7, firefly/firefly+, NGS STARlet and Fluent are retained with null amounts. Here `quote-required` means a current itemised quote is needed to fill the recorded cost gap; it does not prove no public price exists elsewhere. The legacy Andrew Alliance ROI URL redirected to the current Waters automation page, so the final manufacturer page and Contact Sales section are linked. SPT and Hamilton enquiry routes were checked as product pages; exact bundle contents and delivery remain unverified.

[Opentrons Instrument Services](https://opentrons.com/instrument-services) describes installation, protocol development and maintenance without an admitted current numerical observation here. A discoverable January 2024 service-price sheet and 2024 hardware update were excluded from current prices. Older reseller prices and a sold-out MANTIS listing were not used as live available offers. No inferred used-equipment market value, currency conversion, annual service estimate or whole-workcell budget is supplied.

Not yet covered with numerical purchase evidence: other curated peripherals, most module options from quotation-led manufacturers and all 82 upstream driver-discovery records. Missing price is unknown, never zero. The survey should grow by adding dated, region-specific observations rather than overwriting old values without provenance.

## Record checks

All 11 record IDs resolve against the curated reference; all observation IDs are unique and all source IDs resolve locally. Numeric observations carry currency, price basis, date, configuration, inclusion/exclusion and tax/shipping fields. Only new manufacturer storefront offers and the explicitly identified reseller consumable were admitted numerically. No stock status or selected price is inferred from a catalogue starting offer.
