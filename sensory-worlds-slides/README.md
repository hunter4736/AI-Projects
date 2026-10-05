# The Sensory Worlds of AI

A 3-slide deck for the "Sensory Worlds of AI" assignment, which builds on Ed Yong's
*An Immense World*. Each slide covers one AI system and follows the
**world → sensor → data → AI analysis → output** chain, with an "Its Umwelt" box
that names what the system can and can't sense.

- **Live deck (Claude Slides artifact):** https://claude.ai/artifact/MqtRJy7ZTbzhGSmeFoZZZw
  (download it as .pptx or PDF from the deck's Share / Export menu)
- **Source:** `project/deck.json` plus one HTML file per slide in `project/slides/`.
  The schematics are original inline SVG drawings, not product photos.

## The three systems

| Slide | System | Senses | Hardware → data | AI |
|---|---|---|---|---|
| 1 | **Apple Face ID** (iPhone TrueDepth camera) | Near-infrared light → depth | Dot projector (30,000+ IR dots) → depth map; flood illuminator → 2D IR image; IR camera → signed frames sent to the Secure Enclave | Neural networks trained on 1B+ IR/depth images match a mathematical face representation; separate networks handle attention and anti-spoofing |
| 2 | **WHOOP 5.0 / MG** (wrist wearable) | Light through skin, motion, heat, electricity | Optical PPG (green/red/IR LEDs + photodiodes) → pulse waveform; accelerometer + gyroscope → motion; skin-temperature sensor; ECG electrodes in the MG clasp → single-lead ECG | ML sleep staging trained on polysomnography; Recovery, Strain and AFib classification |
| 3 | **Anduril Sentry Tower** (CBP Autonomous Surveillance Tower) | Radio echoes, visible light, heat | Radar → movement detections that cue the cameras; daylight camera → color video; mid-wave IR camera → thermal video | Lattice fuses the sensors on the tower and classifies person / vehicle / animal, then alerts agents |

## Sources

### Slide 1: Face ID
- Apple Support, "About Face ID advanced technology": https://support.apple.com/en-us/102381
- Apple Platform Security Guide, "Facial matching security": https://support.apple.com/guide/security/facial-matching-security-sece151358d1/web
- Apple Platform Security Guide, "Biometric security": https://support.apple.com/guide/security/sec067eb0c9e/web
- Apple Newsroom, "The future is here: iPhone X" (2017), the source of the 30,000-dot figure: https://www.apple.com/newsroom/2017/09/the-future-is-here-iphone-x/

### Slide 2: WHOOP
- WHOOP 5.0 / MG launch press release (May 8, 2025), the source of the 26-samples-per-second figure: https://www.businesswire.com/news/home/20250508546933/en/WHOOP-Unveils-WHOOP-5.0-and-WHOOP-MG-Powerful-New-Devices-with-Breakthrough-Health-and-Longevity-Features
- WHOOP CTO on 4.0 sensors (5 LEDs: 3 green, 1 red, 1 IR; 4 photodiodes): https://www.whoop.com/us/en/thelocker/chief-technology-officer-whoop-4-0-accuracy/
- "The WHOOP approach to measuring sleep" (30-second epochs, PSG-trained models, 3-axis accelerometer + gyroscope): https://www.whoop.com/us/en/thelocker/the-whoop-approach-to-measuring-sleep/
- WHOOP Support, "WHOOP Recovery": https://support.whoop.com/s/article/WHOOP-Recovery?language=en_US
- "How WHOOP tracks skin temperature" (90-night baseline): https://www.whoop.com/us/en/thelocker/how-whoop-tracks-skin-temperature/
- FDA 510(k) K243236 (WHOOP MG ECG): https://www.accessdata.fda.gov/cdrh_docs/pdf24/K243236.pdf
- Miller et al., *J. Sports Sci.* 2020, sleep staging vs. polysomnography: https://pubmed.ncbi.nlm.nih.gov/32713257/

### Slide 3: Anduril Sentry Tower
- CBP, "CBP's Autonomous Surveillance Towers declared program of record" (2020): https://www.cbp.gov/newsroom/national-media-release/cbp-s-autonomous-surveillance-towers-declared-program-record-along
- Anduril Sentry product pages: https://www.anduril.com/sentry and https://www.anduril.com/sentry-tower
- DHS AI Use Case Inventory (CBP): https://www.dhs.gov/ai/use-case-inventory/cbp
- CBP Frontline, "Watchful Eye": https://www.cbp.gov/frontline/watchful-eye
- FedScoop on Anduril Sentry towers: https://fedscoop.com/anduril-sentry-towers-cbp/
- GAO-25-107302 (Dec. 2024): https://www.gao.gov/products/gao-25-107302

## Verification caveat

This sandbox's network policy blocked direct page loads from apple.com, whoop.com,
cbp.gov, anduril.com and similar sites. The facts above were checked against
search-engine extracts of these specific URLs; one CBP press release was read in full
from an archived copy. Open each link and confirm the wording before submitting,
especially:

- the 26-samples-per-second figure (WHOOP 5.0 press release)
- Anduril's 2.8 km person-detection range
- the 64% four-stage sleep agreement (Miller et al. 2020, which used older WHOOP hardware)
