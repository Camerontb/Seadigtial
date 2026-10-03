---
name: Sea Digital EMPX
description: The darkened bridge at 0400, set on the app's own night chart.
colors:
  sea: "#0A1922"
  console: "#0A0D18"
  panel: "#0F222E"
  panel-raised: "#132A38"
  rule: "#1F3747"
  rule-strong: "#2C4A5C"
  ink: "#E3EAEE"
  ink-muted: "#A9BAC4"
  ink-faint: "#869DAA"
  route: "#3FB26A"
  route-ink: "#4CC27A"
  amber: "#E0A030"
  red: "#C8322B"
  red-hover: "#A82822"
  red-ink: "#EF7068"
  on-red: "#FFFFFF"
  bezel: "#05070C"
  dawn-sea: "#EEF1EC"
  dawn-console: "#FFFFFF"
  dawn-panel: "#FFFFFF"
  dawn-panel-raised: "#F5F7F3"
  dawn-rule: "#D3DAD5"
  dawn-rule-strong: "#B8C3BE"
  dawn-ink: "#0E1B24"
  dawn-ink-muted: "#3E4F5A"
  dawn-ink-faint: "#56666F"
  dawn-route: "#23854C"
  dawn-route-ink: "#1C7041"
  dawn-amber: "#8A5A00"
  dawn-red: "#B3261E"
  dawn-red-hover: "#9C1F18"
  dawn-red-ink: "#A82A22"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 1.6rem + 5.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.01em"
  panel-title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.01em"
  quote:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 1.8vw, 2.625rem)"
    fontWeight: 600
    lineHeight: 1.3
  button:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  lede:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  control:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.3
  small:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  readout-label:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  readout-value:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.3
    fontFeature: "tnum"
rounded:
  focus: "2px"
  control: "4px"
  switch: "6px"
  panel: "8px"
  device-frame-outer: "clamp(18px, 3vw, 34px)"
  device-frame-outer-min: "18px"
  device-frame-outer-fluid: "3vw"
  device-frame-outer-max: "34px"
  device-frame-screen: "clamp(10px, 1.6vw, 18px)"
  device-frame-screen-min: "10px"
  device-frame-screen-fluid: "1.6vw"
  device-frame-screen-max: "18px"
  light: "50%"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  s-10: "128px"
  gutter: "clamp(16px, 4vw, 48px)"
  max: "1280px"
  rail: "208px"
  nav-h: "64px"
components:
  button-apply:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-apply-hover:
    backgroundColor: "{colors.red-hover}"
    textColor: "{colors.on-red}"
  nav:
    backgroundColor: "{colors.console}"
    textColor: "{colors.ink-muted}"
    height: "64px"
    padding: "0 clamp(16px, 4vw, 48px)"
  nav-apply-link:
    textColor: "{colors.red-ink}"
  theme-switch:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.switch}"
    padding: "3px"
  theme-switch-option:
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "34px"
    padding: "0 12px"
  theme-switch-option-active:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.ink}"
  readout:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.readout-value}"
    padding: "12px 16px"
  readout-stack:
    backgroundColor: "{colors.rule}"
    rounded: "{rounded.panel}"
  apply-panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "12px"
  apply-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "40px"
  field:
    backgroundColor: "{colors.console}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "48px"
    padding: "0 16px"
  segment:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.small}"
    padding: "8px 16px"
  segment-on:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.ink}"
  tab:
    textColor: "{colors.ink-muted}"
    typography: "{typography.panel-title}"
    padding: "16px 16px 16px 24px"
  tab-selected:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
  device-frame:
    backgroundColor: "{colors.bezel}"
    rounded: "{rounded.device-frame-outer}"
    padding: "clamp(10px, 1.6%, 18px)"
    width: "620px"
  status-strip:
    backgroundColor: "{colors.console}"
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
    padding: "8px clamp(16px, 4vw, 48px)"
  site-foot:
    backgroundColor: "{colors.console}"
    textColor: "{colors.ink-faint}"
    typography: "{typography.small}"
    padding: "32px clamp(16px, 4vw, 48px)"
  form-error:
    backgroundColor: "{colors.console}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "16px"
  awaiting-slot:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.panel}"
    padding: "32px"
    height: "240px"
---

# Design System: Sea Digital EMPX

## Overview

**Creative North Star: "The Bridge at 0400"**

The page is a darkened wheelhouse, and the EMPX app's own night chart is the ground it is set on. Every colour is lifted from that chart: the deep sea, the near-black console, route green for the passage, amber for own-ship, and night-vision red kept for the one thing a visitor should do. Type reads like ship marking: Barlow Condensed capitals for headings and buttons over plain Barlow text, with tabular numerals everywhere so figures sit like instrument readouts.

Density is calm and instrument-like rather than editorial. Information sits in labelled panels (small caps label above a large value), separated by hairlines, with section breaks drawn as chart scale bars. Depth comes from tonal layering of console, sea and panel, not from light effects: there is no glow and no gradient fill anywhere. Dawn is not an accent swap but a whole-page day state that mirrors the app's day chart, driven by the same token names.

This world replaces an earlier cream and pastel editorial look. That look is retired: no cream paper, pastel tints or serif editorial display.

**Key Characteristics:**
- Real app captures as imagery: the hero is a crop of the night (or day) chart, never an illustration or mockup scene.
- Two complete themes, Night (default) and Dawn, sharing one token set.
- Condensed uppercase display over a humanist sans; tabular numerals throughout.
- Labelled-value instrument panels in hairline-separated stacks.
- Colour is semantic: green means route and position, amber means own-ship, red means Apply.
- Flat tonal depth; one soft lift reserved for surfaces you act in or look into.

## Colors

A low-light chart palette: dark blue-black grounds, cool grey-blue inks, and three signal colours that each mean exactly one thing. Dawn tokens (prefixed `dawn-`) replace the Night values under `data-theme="dawn"`; components always reference the role, never the theme.

### Primary
- **Night-Vision Red** (red; hover red-hover; text form red-ink): the Apply button fill, the Apply nav link (as red-ink text), the skip link, the lower pilot light in the status readout, and field and form errors. On Dawn it deepens to a printed signal red.

### Secondary
- **Route Green** (route; text form route-ink): the passage. It draws the rail's dashed line and waypoints, the selected tab's bar, the top rule of trial steps, the dash before term list items, inline link underlines, text selection, the focus ring and text caret, and the success heading after an application is sent.

### Tertiary
- **Own-Ship Amber** (amber): the own-ship marker on the passage rail, and the dashed border and label of draft-only "awaiting material" slots. On Dawn it darkens to an ochre (dawn-amber) to stay legible on white.

### Neutral
- **Chart Sea** (sea): the page ground and the hero's open water.
- **Console Black** (console): nav bar, status strip, footer and form-field wells; the darkest structural layer. On Dawn it becomes pure white.
- **Instrument Panel** (panel) and **Raised Panel** (panel-raised): panel fills, and the selected state of segments and switches.
- **Hairline** (rule) and **Strong Hairline** (rule-strong): dividers, panel rings, field borders, device-frame ring, the 2px group divider.
- **Ink** (ink), **Muted Ink** (ink-muted), **Faint Ink** (ink-faint): headings and values; body prose and captions; labels, placeholders and the scale-bar mark.
- **Bezel** (bezel): the iPad frame. It is hardware and stays the same in both themes.

### Mask Colour (not a palette colour)
- **Mask Opaque** (#000): appears only as the opaque stop inside alpha masks: the hero fade gradients and the scale-bar SVG mask. It never reaches the screen as a colour, so it is not a palette token and must never be used as a fill, ink or border.

### Named Rules
**The One Meaning Rule.** Each signal colour means one thing. Green is the route, current position, focus and success. Amber is own-ship and draft-only slots. Red is Apply, the lit signal, and errors. Never use one decoratively or borrow it for another meaning.

**The Night-Vision Red Rule.** Red never fills more than the Apply controls and the small lit signals. A red section background or a red heading breaks night vision and the hierarchy.

**The Two Themes, One Token Set Rule.** Every colour goes through a role token so Dawn swaps cleanly. The only fixed values are the device bezel and the screenshot backing colour behind images while they load.

## Typography

**Display Font:** Barlow Condensed 600/700 (with Arial Narrow, sans-serif)
**Body Font:** Barlow 400/500/600, italic 400 (with Helvetica Neue, Arial, sans-serif)

**Character:** Condensed capitals read as ship and chart marking; Barlow text underneath is plain, wide-apertured and legible at arm's length. `font-variant-numeric: tabular-nums` is set on the body, so every figure aligns like a readout.

### Hierarchy
- **Display** (700, uppercase, line-height 0.9): the hero headline only, kept to roughly 720px wide.
- **Headline** (700, uppercase, line-height 0.95): section headings; balanced wrapping; 24px below.
- **Title** (600, uppercase, 1.2): step and card headings.
- **Panel Title** (Barlow Condensed 600/700, 1.375rem, uppercase): the brand wordmark, screen tab titles (1.125rem on mobile) and the "Your …" organisation panel titles.
- **Quote** (Barlow Condensed 600, mixed case, 1.3): the founder quote, the only mixed-case use of the condensed face.
- **Body** (400, 1.6): running text, with prose capped at 62ch and the hero lede at 36ch. Muted ink for prose, ink for emphasis.
- **Control** (Barlow 500, 0.9375rem, 1.3): nav and rail links, the hero and form field labels (at 600), tab captions, notes, the hero "or see it working" line, and awaiting-slot text.
- **Small** (Barlow 400, 0.875rem): field error messages, the footer, segmented-strip cells (at 600), the "EMPX" brand product label and the mobile Menu toggle (both at 600 caps, 0.08em).
- **Label** (600, 0.08em tracking, uppercase): readout labels (0.75rem), status-strip and footer keys, rail captions and awaiting-slot headers. Always faint ink unless it marks a signal.
- **Button** (Barlow Condensed 600, 0.04em, uppercase): every button and the theme switch (switch at 0.8125rem Barlow).

### Named Rules
**The Ship Marking Rule.** The condensed face appears only in uppercase headings, buttons and the brand. The one exception is the founder quote. Running text, labels and values stay in Barlow.

**The Tight Display Rule.** Only the condensed uppercase display and headline sizes run below 1.0 leading (0.9 and 0.95). That is a deliberate ship-marking setting, and the detector's `tight-leading` hit is suppressed in `.impeccable/config.json` for it alone. Everything else stays at 1.2 or above.

## Layout

The hero is full-bleed, at least `max(680px, 100svh)` tall. The chart image is anchored right and centred vertically at about 62vw (max 900px; the day crop is 58vw, max 860px). It is masked to fade into open sea at left, where the copy sits, and faded top and bottom. Below the hero, a "voyage" grid sets a 208px passage rail beside the content column (max 1280px plus the rail), with gutters of `clamp(16px, 4vw, 48px)`.

Sections ("legs") get 128px of vertical padding (96px at 960px and below, 64px at 640px and below). Content inside follows 5/7 or 3/9 asymmetric splits: tabs against the device, group title against features, quote against stats, intro against the Apply card. The spacing scale is a 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

Responsive steps:
- **1180px:** the rail hides and the voyage becomes one column.
- **960px:** splits stack, screen tabs become a horizontal snap-scrolling strip, and readouts go to two columns.
- **900px:** nav links collapse behind a "Menu" text toggle into a full-width console drop panel.
- **640px:** the nav drops to 56px and the hero copy anchors to the bottom. The chart sits at top, 150vw wide, opaque to 55% and fading out by 95%, under a 62% console dimmer (66% sea on Dawn). The hero form, features and Apply form go single-column, and CTAs go full width.

**The Scale-Bar Break Rule.** Sections are divided by a 1px hairline carrying a 121 x 7px chart scale bar (alternating filled and open segments, in faint ink) at its left end. The first leg has neither.

## Elevation & Depth

Depth is tonal. Console is the darkest, sea is the ground, panel sits one step lighter, and panel-raised marks selection. Panels are outlined with a 1px ring (`box-shadow: 0 0 0 1px` rule) instead of borders, so stacks stay pixel-tight. One soft drop shadow exists. It is not a glow: it is a long, low-opacity lift.

### Shadow Vocabulary
- **Hairline ring** (`box-shadow: 0 0 0 1px var(--rule)`): every panel and panel stack.
- **Lift** (`0 18px 40px -18px rgba(0,0,0,0.7)` Night; `0 18px 40px -22px rgba(14,27,36,0.35)` Dawn): only the hero Apply panel, the Apply card and the device frame, combined with a ring.
- **Inset ring** (`inset 0 0 0 1px`): the theme switch track (rule) and its pressed option (rule-strong).

### Named Rules
**The Lift Is Earned Rule.** Only surfaces you type into or look into (the Apply panels and the device) carry the lift. Information panels stay flat with a hairline ring.

**The No Glow Rule.** No glows, no coloured shadows, no gradient fills. Gradients appear only as alpha masks (the hero fade) and as the rail's dash pattern.

## Shapes

Corners are small and consistent: 2px on the focus-ring outline, 4px for controls (buttons, fields, switch options, the error box), 6px for the switch track, and 8px for panels and panel stacks. The device frame is the one generous curve. Its radius pair (device-frame-outer and device-frame-screen) scales with the viewport, and the two values always travel together. The -min, -fluid and -max entries are the terms of those two clamps, listed so each term is on record. They are not standalone radii; use the composite pair. Circles appear only as waypoints (12px rings) and pilot lights (7px). Linework is 1px hairlines, 2px for emphasis (group dividers, step rules, selected-tab bar, focus ring). Icons are inline SVG strokes (1.6 to 2px, round joins): the Apply arrow, the select chevron, and the own-ship pentagon.

## Components

### Buttons
Firm and plain, like a console key.
- **Shape:** 4px corners, minimum 48px tall, 24px horizontal padding, condensed uppercase label with an optional 16px stroke arrow.
- **Apply (the only button variant):** red fill, white label. It is used in the hero panel, after the trial, and in the Apply card.
- **Hover / Focus:** fill steps to red-hover over 160ms ease-out (no transition under reduced motion). Focus uses the global 2px route-ink outline offset by 3px.
- **Busy:** disabled at 0.7 opacity with a progress cursor while the label reads "Sending…".

### Navigation
- A fixed 64px console bar with a bottom hairline. The brand ("Sea Digital" in condensed caps, then "EMPX" as a faint label) sits left. Links use control type (Barlow 500) in muted ink, hovering to ink. "Apply" is set in red-ink at 600.
- **Night/Dawn switch:** a segmented pair inside a 6px panel track with an inset hairline. The pressed option takes panel-raised, ink and a strong inset ring. Its state is in `aria-pressed`, the choice persists in localStorage, it is applied before paint, and it also updates `theme-color`.
- **Mobile (900px and below):** a "Menu"/"Close" text toggle opens a stacked console panel of 1.0625rem links divided by hairlines. Escape closes it.

### Chart Hero
A real app chart crop placed as the background. Its mask fades from transparent at left to opaque by 38%, intersected with a top and bottom fade (14% and 86% on Night, 18% and 82% on Dawn). A sea or console dimmer layer sits over it. Night and day crops swap with the theme. The headline and copy sit on open water and never on chart labels.

### Instrument Readouts
A four-column `dl` of labelled values: faint caps label (0.75rem) over a 1rem 600 value, each in a panel cell, joined by 1px rule gaps inside an 8px ringed stack. The Status value carries a pilot-lights glyph: two stacked 7px discs, white over red, the pilot-on-board signal. The founder stats reuse the pattern centred, with 1.75rem values.

### Apply Panel (hero) and Apply Card
- **Hero panel:** a panel with 12px padding, ring plus lift. It holds a label, an email field and the Apply button in a `1fr auto` grid that stacks at 640px. Submitting carries the email into the full form and focuses Name.
- **Card:** a panel with 40px padding (24px on mobile), ring plus lift, a title-size heading, and a two-column form grid with 24px by 16px gaps.

### Inputs / Fields
- **Style:** console well, 1px rule-strong border, 4px corners, 48px tall, route-ink caret, faint-ink placeholder. Selects draw their own faint chevron. Textareas start at 112px.
- **Labels:** control size at 600, ink. "(optional)" is set at 400 in faint ink.
- **Focus:** the border and a 1px ring both turn route-ink; there is no outline glow.
- **Error:** border turns red-ink, and a small red-ink message below is linked by `aria-describedby`. The form-level error is a console box with a red-ink border, `role="alert"`, and a mailto fallback.
- **Success:** the form is replaced by a focused "Application received." in route-ink title type, echoing back the email.

### Passage Rail (signature)
A sticky 208px aside listing the sections as waypoints along a dashed route line (2px, route green, 10px dash and 6px gap, 60% opacity). Waypoints are 12px rings in route green, filled when current (`aria-current`, ink 600 label). The amber own-ship pentagon travels the line on scroll, interpolating between waypoints from a 35% viewport mark. Its position is set by rAF on scroll, with no CSS transition. A faint caption "Boarding ground to berth" closes the rail. The dashed line is a planned route, not decoration; the detector's `repeating-stripes-gradient` hit is suppressed for it in `.impeccable/config.json`.

### Screen Tabs and Device Frame
- **Tabs:** an ARIA tablist (arrow, Home and End keys). Each tab has a condensed caps title over a faint caption, separated by hairlines. The selected tab takes a panel fill and a 2px route bar at left. At 960px and below it becomes a horizontal snap strip with the bar underneath and captions hidden.
- **Device:** bezel-coloured iPad frame with a strong-hairline ring plus lift. Captures are at 1100:1467, max 620px wide, right-aligned, and corners use the device-frame radius pair. Passage plan is the default tab. Screen captures do not swap with the theme; only the hero chart does.

### Segmented Strip
An inline row of panel cells joined by 1px rule gaps in an 8px ringed stack (small type at 600, muted ink). The "on" cell takes panel-raised and ink. It lists facts and is not interactive.

### Notes
Short asides beside a CTA or under a form ("Limited places · no card", the privacy line) use control type in faint ink.

### Status-Strip Captions and Footer
Console bands with a top hairline, set as wrapped `key value` pairs: a caps 0.08em key, then plain faint-ink text. The strip runs at the hero foot ("Chart / Passage") and under each screen as a demo note ("Source / Data"). The footer repeats the form (Sea Digital, Build, App, Contact), with muted-ink links that hover to ink. Demo data is always labelled fictional here.

### Awaiting-Material Slot (draft only)
A placeholder for user-supplied evidence (signed PDF page, job photos): an 8px box at least 240px tall with a 2px dashed amber border, an amber caps "Awaiting material" header and a muted description. It is `display: none` on the live site and shown only when the root carries `.draft` (localhost or `?draft`). It must never render in production.

## Do's and Don'ts

### Do:
- **Do** build imagery from real EMPX captures (chart crops, device screens), with demo data labelled fictional in a status strip.
- **Do** route every colour through the role tokens so Night and Dawn both work; check every new surface in both themes.
- **Do** present facts as labelled values: faint 0.08em caps label over an ink value, in hairline-joined panel stacks with 8px corners.
- **Do** keep red for Apply, lit signals and errors; green for route, position, focus and success; amber for own-ship and draft slots.
- **Do** divide sections with the hairline-plus-scale-bar break, and keep the 4px-based spacing scale.
- **Do** set headings in uppercase Barlow Condensed and running text in Barlow with tabular numerals.

### Don't:
- **Don't** return to the retired cream and pastel editorial look: no cream paper grounds, pastel tints or serif display.
- **Don't** add glows, coloured shadows or gradient fills; gradients exist only as masks and the route dash.
- **Don't** give information panels the lift shadow; it belongs to the Apply panels and the device frame.
- **Don't** set Barlow Condensed in mixed-case body text or below 1.0 leading outside the display and headline sizes.
- **Don't** use icon fonts or glyph icons; draw icons as small inline SVG strokes.
- **Don't** ship an awaiting-material slot to the live site, or style anything else with the amber dashed border.
