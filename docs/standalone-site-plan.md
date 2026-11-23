# Building the public Instrument Atlas

A scientist with capped tubes and an existing robot arm should be able to decide whether to buy a robotic centrifuge, adapt the handoff, or leave loading to an operator. A builder should be able to tell exactly which parts can be printed and which must be bought. The unit of comparison is a configured instrument performing a named operation with particular labware.

## Starting point

Use the existing public Instrument Atlas and its stable model IDs, search, three-model comparison, source-linked claims and JSON/CSV exports. The molecular biology equipment guide adds navigation by equipment family and acquisition route. Keep the Automation Atlas as a consumer: it can link a workflow operation to candidate instruments, while the public catalogue owns instrument identity and evidence. An installation, inventory count or private workflow belongs to its lab. Public records cite public evidence.

## A one-day build and test

| Time | Owner role | Work and deliverable |
| --- | --- | --- |
| 09:00–10:00 | Bench scientist + curator | Walk through a tube spin, incubator handoff and empty plate transfer. Write down vessel, cap/lid state, orientation, required environment and which handoffs may be manual. Pick two real alternatives per task, including a sourced reason to exclude a candidate. |
| 10:00–12:00 | Equipment curators | Give each shortlist a configuration sheet. Split base model, loader, rotor or nest, arm, gripper, software and consumables. Record exact part numbers where public, manual section and version, and one unresolved question per missing interface. |
| 10:00–12:00 | Software pair | Add operation-to-model crosslinks from the Automation Atlas using stable public IDs. Implement a comparison of physical loading, control and completion signals as separate fields. An unknown value must survive the round trip through export. |
| 13:00–14:30 | Hardware pair | With authorised equipment, document an empty-vessel handoff. Record fixture revision, orientation, clearances, outcome and intervention. A cardboard mock-up can establish reach only. Photograph or publish observations only where permitted. |
| 14:30–15:30 | External tester + observer | Give the three tasks to a scientist or integrator who did not curate them. Ask for a shortlist, a rejection and the evidence that settles each. Log wrong answers, missing filters, time and unresolved questions. |
| 15:30–17:00 | Editor + release owner | Fix false compatibility matches first. Verify links, source attribution, public-only build and exports. Ship the comparison only when the record explains the configuration and surviving unknowns; publish the outstanding questions alongside it. |

## Next releases

1. **Make decisions searchable.** Add a controlled vocabulary for plate, tube, flask, rack and slide formats. Record physical access (door, drawer, lid, handoff pose, gripper clearance), software control (commands, status, faults, recovery), and result export independently. Let users include unknowns deliberately. Acceptance: a data-only Qubit record cannot satisfy a request for arm loading. A plate hotel cannot satisfy an incubator requirement.
2. **Make build, retrofit and buy comparable.** Give accessories their own IDs and explicit relationships to supported configurations. For open designs, link versioned CAD, printable files, licence per component, BOM, bought components and assembly/test evidence. For commercial products, capture SKU, required options, software, service, region and dated price basis. Keep missing prices blank. Acceptance: two centrifuges can be compared with their loaders, and a printable gripper can be costed separately from its motor and controller.
3. **Collect demonstrations and failures.** Publish a dated integration record with model, firmware, driver, vessel, fixture, test scope, operator interventions and evidence. Permit a source-backed negative result alongside a successful configuration. Commission deeper coverage of underrepresented families (cold chain, flasks and tube culture, extraction, clean-up, vessel opening, waste and facility equipment) based on failed searches. Assign a curator to each queue.
4. **Make the catalogue durable.** Publish crawlable operation and model pages, redirect aliases, version the downloadable records, document their schema and publish a changelog. Add a public correction route independent of private repository access. Capture contributor attribution and reuse permission; distinguish original metadata rights from linked manual or design rights. Run link checks, mark superseded records and expose the last substantive review. A second editor reviews new compatibility or licence claims.
5. **Evaluate with other labs.** Each release, ask outside scientists, builders and integrators to answer one procurement and one integration question using only the site. Measure false compatibility conclusions, proportion of decisions with a decisive source, unresolved searches and correction turnaround. Prioritise the missing evidence that would change a purchase or build decision.
