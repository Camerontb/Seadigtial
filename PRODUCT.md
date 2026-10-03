# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

The marketing site for EMPX (seadigital.com.au). The product it sells runs at app.seadigital.com.au and as a native iPad/iPhone app, but this repository is the static marketing site only.

## Users

Two audiences, weighted equally:

- **Working marine pilots**, including solo pilots. They do the Master Pilot Exchange on the bridge, often at night and at arm's length on a tablet, and judge software by whether it survives a real job.
- **Pilotage organisation decision-makers**, such as chief pilots, operations managers and providers. They would roll EMPX out across their pilots and care about their own form, shared passages, admin control, records and data isolation.

The site has to work for both of them without forcing either to pick a path that wasn't written for them.

## Product Purpose

EMPX replaces the paper Master Pilot Exchange with a digital, IMO A.960–compliant workflow. It brings the checklist, charts and passage plan, per-leg under-keel clearance, an underway logbook and a signed PDF record together in one tablet-first tool.

The site's current job is to recruit test pilots and pilotage organisations for a free trial through the access form. The form posts to Formspree (`formspree.io/f/xrpggywg`). Formspree is the chosen backend (confirmed 2026-10-03). `functions/submit-access`, a Cloudflare function that writes to D1, is unused. Success means qualified applications from people who will use EMPX in real service.

## Positioning

EMPX is built by a working marine pilot (Cameron, Marine Pilot & Founder) and tested on real passages, not designed in an office. It is a working product, live in service, not a mockup. As of 2026-10-03 Cameron confirmed every feature is ready, and the site no longer calls EMPX a beta or shows a status list.

## Operating Context

- **Use:** the bridge and bridge wing during pilotage, from the boarding ground to the berth, in day and night conditions. The pilot is standing, hurried and in a safety-critical setting.
- **Trial process:** the pilot applies, Sea Digital provisions the organisation by hand (its form and passages are built in), the pilot gets a sign-in link by email and then uses EMPX on real jobs. Paper stays alongside during the trial.
- **Supporting artefacts:** IMO A.960 / SOLAS Chapter V checklists, ECDIS / RTZ route exchange, pilot cards, berth chartlets, tug bollard pull, tide and squat calculations.

## Capabilities and Constraints

- **Shipped (live):**
  - MPX checklist and form builder, including photo import of an existing paper form
  - charts and passage builder
  - per-leg UKC with squat
  - underway logbook with GPS, presets and voice memos; time corrections are marked as amended
  - signatures and branded PDF export
  - vessel memory
  - weather and tides
  - admin console and invite-based onboarding with per-org isolation
- **Also ready (confirmed by Cameron, 2026-10-03):** native iPad & iPhone app, offline on passage, ship and mooring diagrams, record export (CSV), push notifications. How the iOS app is distributed (App Store or TestFlight) is not stated on the site.
- **Customisation claims are limited to what ships:**
  - the org's checklist form, passages, tugs, chartlets and vessels
  - the org's name and logo on every signed record
- **No white-label claim:** the app's colours, name and icon don't change per customer.
- **Trial terms:** free, no card, limited invite-only places. Trial length is agreed per customer, and there is no paid tier holding features back.
- **Market:** global from day one, for any pilotage under IMO. Copy should not frame the product as Australia-only. *Open:* the structured data lists the price currency as AUD, and pricing after the beta is not decided.
- **Deployment:** static HTML on Cloudflare, served from `dist/`. Root `index.html` and `images/` must be kept in sync with `dist/`. Deploying means pushing to `DeployBranch`, and only when Cameron says so.

## Brand Commitments

- **Names:** the company is Sea Digital and the product is EMPX. The tagline is "Precision Maritime Technology".
- **Voice:** plain, direct and candid, in a pilot's own language. It owns the trial's limits ("Tell us what breaks", "we'd think less of you if you didn't" keep paper alongside). No sales-call tone and no hype.
- **Contact:** admin@seadigital.com.au.

## Evidence on Hand

- **Real iOS build screenshots** at `images/ios/` (raw sources in `assets-src/ios/`). They use fictional demo data ("Coral Coast Pilots", "MV Coral Meridian"), and the site has to say so. Every screenshot is from iPad: there are no iPhone or logbook shots yet, and none in landscape.
- **Build status and release facts:** version 0.8.5 and nine releases shipped.
- **Photos supplied by Cameron (2026-10-03):** `assets-src/photos/pilot-ladder.png` (pilot boarding by ladder from the launch, 696px wide) and `assets-src/photos/bridge-night.jpeg`. The bridge image is **AI-generated** (Gemini). Its tablet screen is not EMPX, so it must always be labelled as an illustration.
- **Product facts confirmed by Cameron (2026-10-03):** 12 IMO sections, about 80 checklist fields, one tap to export, nine releases shipped.
- **No testimonials, named customer organisations, trial results or usage numbers exist.** Future work must never invent them, and should not leave placeholder slots that look like they are coming.

## Product Principles

1. **Honesty is the product.** It's safety-critical software, so every claim matches what ships, and status is shown rather than implied.
2. **The bridge is the bar.** If it doesn't work at arm's length, at 0400, on a wing, it isn't done.
3. **The customer's own workflow, not ours.** The org's form, passages and fleet are built in for them, and the record carries their name.
4. **Personal, not scaled.** It's a small trial, set up by hand, with a direct line to the pilot who builds it.
5. **Serve the solo pilot and the organisation equally.** The whole product is available to both.

## Accessibility & Inclusion

The product's users read screens under bridge conditions, at night, at distance and in glare, which is why day and night themes ship. No formal standard is set for the marketing site, so treat WCAG 2.2 AA as the baseline.
