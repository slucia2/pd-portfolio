# Enterprise Permissions — Case Study Rebuild Brief

> **For Cursor.** Self-contained. Everything needed to rebuild the case study is in this file, including working code for the three new diagrams. Drop at `docs/PERMISSIONS-REBUILD.md` and reference it in prompts.

**Target page:** `/work/enterprise-permissions/`
**Figma file key:** `lO4Djo7jQ0wYD9JFgcn0NK`
**Author:** Samuel Lucia — Product Designer, Seattle

---

## 1. GOAL

Convert a case study that reads as **delivered** into one that reads as **designed**.

The reader is a recruiter or hiring manager scanning for **30 seconds**, reading only headings, captions, and images. They are not reading the prose.

**The problem:** all 10 images on the page are finished UI screenshots. Zero wireframes, zero rejected explorations, zero annotated iterations, zero research artifacts, zero systems diagrams. The RESEARCH section makes three specific claims and shows nothing for any of them. The four-step HOW IT WORKS section is a process diagram written as prose.

**Target ratio:** ~60% finished UI / ~40% process artifact. Currently 100/0.

### Hard constraints

1. **Do not rewrite existing prose.** It is good. ~80% of current copy survives unchanged. This brief adds evidence and two sections; it does not re-voice the page.
2. **Diagrams are inline SVG/HTML, not exported PNGs.** They must be responsive, theme-aware, and text-editable.
3. **Map all colors to the site's existing tokens.** Code below uses placeholder CSS vars — swap them.
4. **Headings argue, they don't label.** Match the existing page voice: "Ownership is required at creation, not discovered later in an audit."

---

## 2. SCAFFOLD — current vs target

### Current (16 blocks, 10 images, 0 process evidence)

```
01  Title + subtitle
02  Metadata — ROLE / YEAR / SCOPE
03  Hero — ep-hero.mp4
04  THE PROBLEM
05  THE OUTCOME
06  THE CONTEXT + metrics
07  RESEARCH — 4 constraints + DESIGN BAR          ← no images
08  THE GROUP MODEL — 4 types                      ← no diagram
     └ Ownership                    [1 img]
     └ Exception groups             [2 img]
09  HOW IT WORKS — 01/02/03/04                     ← text-as-diagram
10  TWO SURFACES                    [2 img]
11  DESIGNED FOR FIRST-TIME OWNERS  [2 img]
     └ Rule builder                 [1 img]
12  KEY DECISION — inheritance      [1 img]
13  Content default
14  IMPACT
15  KEY LEARNINGS
16  Next case study
```

### Target (19 blocks, ~20 images, 10 process evidence)

```
01  Title + subtitle                               UNCHANGED
02  Metadata — 5 fields                            EDIT      → §4.1
03  Hero — ep-hero.mp4                             UNCHANGED (decision logged §6)
04  THE PROBLEM                                    UNCHANGED
05  THE OUTCOME                                    UNCHANGED
06  THE CONTEXT + collaborators line               EDIT      → §4.2
07  RESEARCH                                       +2 IMAGES
     └ Questions panel               Figma 45:51789 crop     → §4.3
     └ Attribute inventory           BUILD, code in §5.3     → §4.3
08  THE GROUP MODEL                                +1 DIAGRAM
     └ Group model diagram           BUILD, code in §5.2
     └ Ownership · Exception groups                UNCHANGED
09  HOW IT WORKS                                   +1 DIAGRAM
     └ Permissions loop diagram      BUILD, code in §5.1
10  TWO SURFACES                                   UNCHANGED
11  ★ NEW — ITERATION: the rule builder            BUILD     → §3
     └ v1 annotated                  Figma 44:6622
     └ v2 annotated + rejection      Figma 44:5052
     └ Salesforce tree grid          Figma 44:7464
     └ v3 shipped annotated          Figma 44:6771
12  DESIGNED FOR FIRST-TIME OWNERS                 UNCHANGED
13  KEY DECISION — inheritance                     +1 IMAGE
     └ Cascade task flow             Figma 45:48135
14  ★ NEW — SYSTEM + SCALE                         BUILD     → §4.4
     └ Iterations board              Figma 44:41850
     └ Sprint handoff                Figma 45:48145
     └ Component permissions + safeguards
15  Content default                                UNCHANGED
16  IMPACT                                         UNCHANGED
17  KEY LEARNINGS                                  UNCHANGED
18  Next case study                                UNCHANGED
```

---

## 3. PRIORITY 1 — the ITERATION section

**This is the highest-value change on the page.** It is the only place that proves iteration, and it carries the accessibility evidence.

**Placement:** between TWO SURFACES and DESIGNED FOR FIRST-TIME OWNERS. It must come **before** the polished rule-builder screenshot in §12, so that screenshot reads as an earned endpoint rather than an opening assumption.

### 3.1 Heading

```
The first two rule builders failed accessibility review. The third borrowed from Salesforce.
```

Alternates if that runs long:
- "Two versions in, accessibility told me the whole table model was wrong."
- "The rule builder took three structural rewrites."

### 3.2 Body copy — two paragraphs, use as-is

> The first rule builder exposed three add-buttons whose behavior wasn't obvious even to me, and a table that only allowed rows at the end. I grouped the expressions, moved nesting into a row menu, and darkened the nested signifiers to hit AAA contrast.
>
> The accessibility team rejected it anyway — nested blocks weren't traceable by screen readers, the format broke under standard table CSS, and there was no room for validation errors. The fix came from Salesforce's tree grid: collapsible rows for nested values, sized to hold text and errors at a 1200px floor.

### 3.3 Four beats

| # | Image | Annotation callouts | Caption |
|---|---|---|---|
| 1 | Rule builder v1 | Three add-buttons, unclear function · Nesting can't be edited after creation · Rows only append at the end · Attribute names read as DB columns | v1: the interaction model assumed the operator already understood the data schema |
| 2 | Rule builder v2 | Grouped expressions + row menu · AAA contrast on nested signifiers · **Rejected:** not screen-reader traceable, breaks standard table CSS, no room for validation errors | Better, and still not accessible — the table model itself was the problem |
| 3 | `44:7464` Salesforce tree grid | *(no pins — reference image)* | The pattern that unblocked it — collapsible rows keep nested hierarchy traceable to a screen reader |
| 4 | Rule builder v3 | Nested expressions collapse · Fixed widths hold at 1200px · Error space reserved, no shift | Shipped: worked out with the a11y partner, not retrofitted |

### 3.4 Frame selection — CONFIRMED

| Beat | Node | Size | What it shows |
|---|---|---|---|
| **v1** | `44:6622` | 1100×560 | Three add-buttons ("Add new expression" / "Add nested value" / "Add to nested grouping"), no Entity column, nesting as grey bars, filled example: Location = Seattle |
| **v2** | `44:5052` | 1006×714 | Entity column added, expressions grouped in boxes, three buttons collapsed into one + per-row ⋮ menus, darkened nested signifiers. No error states. |
| **v3** | `44:6771` | 1100×560 | Collapsible nested rows (chevrons), inline error states, reserved error space, "Select" verbiage removed |

**Width note:** v1 and v3 are both 1100 wide; v2 is 1006. If a consistent set matters visually, either render v2 at 1100 with padding, or check whether a 1100 variant exists. Not blocking — the annotation frame can normalize.

**Related frames if needed:**
- `44:6493` (1100×560) — Bulk Dynamic variant at the v2 structure, with the row menu open showing "Nest Expression / Remove Expression". Useful if beat 2 needs to show the menu explicitly.
- `44:5185` (1006×804) — v3 with the full error-state treatment visible.

**Reference — the parent board `44:4803`** contains all three columns side by side with the original annotations. Useful for reading the reasoning; **do not export it as an image** — the annotation styling is Figma-native and should be re-typeset as HTML callouts using §5.4.

### 3.5 Source annotations (verbatim from Figma, for reference)

**v1 — Design Concerns**
> "Complicated logic and low visibility for add buttons: + Add new expression – Create a new top level expression / + Add nested value – Create a nested expression under current row / + Add to nested grouping – Appears when interacting with an already nested row. Adds expression at same nested level as current expression. Table format only allow rows to be appended at the end of the table."
>
> **Technology requests:** "Add entity select field. Remove responsive nested grouping button."

**v2 — Design Updates, then rejection**
> "Separated new expressions into groups and created a menu dropdown for nesting and removing rows within a group. This allows users to make changes anywhere in the table, simplifying workflow. Added boxes around each expression group to differentiate to users, and darkened nested signifiers to meet triple AAA contrast."
>
> "Working with the accessibility team, we determined that the table as built here could not be an accessible solution: Table rows and nested blocks are not traceable by screen readers / Format would break with a typical table css / Verbiage for 'select item', and filled text would not fit in smaller screen sizes / No room for validation errors"

**v3 — shipped**
> "After more collaboration with the accessibility team, we found an end product solution based off a salesforce tree grid. Used collapsible rows for nested values to make sure the end product is accessible. Set dropdown component and spacing in table cell with the initial and/or operator. Default filled and for new rows to maximum space. Removed 'select' verbiage and resized the select fields to fit text at a minimum screen size of 1200. Added spacing to show error fields without having to shift screen, potentially breaking table."

---

## 4. OTHER SECTION EDITS

### 4.1 Metadata — expand to five fields

```
ROLE       Sole designer
COMPANY    T-Mobile          ← ADD
YEAR       2025
DURATION   6 months          ← ADD
SCOPE      150K+ employees
```

"T-Mobile" is the strongest credibility token on the page and currently appears only in body copy. "6 months" signals a real product cycle.

### 4.2 Collaborators line

Add at the end of THE CONTEXT, or beneath the metadata block:

> Partnered with TPM, technical architect, design systems, and accessibility.

"Sole designer" with no named cast can read as a small project. Naming who had to be aligned proves the scale of what was owned.

### 4.3 RESEARCH — add two images

**a) Questions panel** — crop from Figma `45:51789`. The board contains Jira tickets (DREUI-5416, DREUI-5373), a requirements block, and an open Questions panel. Crop **just the Questions panel**.

Caption: *Requirements arrived as tickets. These are the questions I sent back.*

**b) Attribute inventory** — build from §5.3. Full code and data included there.

### 4.4 NEW SECTION — System + scale

**Placement:** after KEY DECISION, before the content-default callout.

**Heading:**
```
50+ screens, ~5 flows, one component system.
```

**Body:** two sentences on how variant architecture absorbed constantly-shifting scope without redesign.

**Images:**
- `44:41850` — "Iterations" board, ~40 screens in color-coded swim lanes. Export **wide, near-full-bleed, deliberately unreadable**. The point is volume and organization; the caption carries the numbers.
  Caption: *50+ screens across ~5 core flows, built on one component system — so shifting scope meant new compositions, not new design work*
- `45:48145` — "Sprint 1 UX Handoff (5/7/25–5/20/25)". Crop to the two numbered workstreams. Proves shipping *to engineers*, which nothing else on the page does.
  Caption: *Sprint handoff: annotated screens, requirements, and dev notes — scoped in two-week windows*

**Also restore from the 2025 version:**
- Component permissions — one paragraph. Page-level + component-level + globals responding inherently.
- Adoption safeguards — one line. Threshold warnings on large dynamic group updates.

### 4.5 KEY DECISION — add the cascade flow

Add `45:48135` beneath the existing cascade screenshot. It's a linear task flow with the deep-link breadcrumb spelled out:

```
Apply Permissions > Manage > The parent page (link) > # child pages (link)
> Child Pages dashboard > Manage > Apply Permissions Details
```

Caption: *The cascade path end to end — every step an author takes to push parent access down, none of it automatic*

### 4.6 Copy fixes

**Doubled step labels** — currently render as typos:
```
01 · DEFINE GROUP MANAGEMENT   →   01 · DEFINE
02 · APPLY APPLY PERMISSIONS   →   02 · APPLY
03 · CASCADE EXPLICIT ACTION   →   03 · CASCADE
04 · GOVERN BUILT-IN EXPIRY    →   04 · GOVERN
```
(The surface names move into the diagram's lane labels — see §5.1.)

**Attribute reduction claim** — the page says the default list was cut *"by more than half."* The audit data says 15 of 39 = **38%**. Replace with the stronger, defensible stat:

> Only 9 of 39 attributes shipped unchanged.

77% of the original set was cut or relabeled. Bigger number, and the data supports it.

### 4.7 Captions — rewrite to argue

| Current | Replace with |
|---|---|
| Create Dynamic Group: visual expressions with a live syntax preview | Two audiences, one builder — non-technical authors compose visually while power users validate in syntax, after cutting the default attribute list by half |
| Group Management: list, search, and create any group type | Admins start here — every group type, every owner, searchable in one view |
| Management view: search, filters, and table | The patterns owners use daily — built for Permissions, not borrowed from a generic library |
| Update child pages: add parent groups, or replace child groups, each with a confirmation | Inheritance is a decision, not a default — every cascade is confirmed, visible, and reversible |

---

## 5. CODE — the three diagrams + annotation component

All code below uses placeholder CSS variables. **Map these to the site's existing tokens:**

| Placeholder | Meaning |
|---|---|
| `--panel` | Card/surface background |
| `--bg` | Page background |
| `--mag` | Accent (magenta) — for the governance/loop-closing emphasis |
| `--mag-bg` | Accent tint |
| `--admin` / `--admin-bg` | Admin lane color + tint |
| `--author` / `--author-bg` | Author lane color + tint |
| `--keep` / `--keep-bg` | "Shipped at launch" green + tint |
| `currentColor` | Inherits page foreground — leave as-is, this is what makes it theme-aware |

Each SVG uses `role="img"` + `aria-label`. Keep those. Wrap each in `<figure>` with `<figcaption>`.

### 5.1 Permissions loop — HOW IT WORKS

Replaces the four numbered text blocks as the section's **primary visual**. Keep the text blocks beneath it.

The thing the page never states: **the loop closes.** Govern feeds back into Define, which is the whole argument for why sprawl can't accumulate.

```html
<figure>
<svg viewBox="0 0 1000 440" role="img" aria-label="Two-lane process diagram. Admin lane: Define groups. Author lane: Apply permissions, then Cascade to child pages. Govern spans both lanes and returns to Define, closing the loop. Governance gates: ownership required at creation, renew or expire.">
  <defs>
    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="arM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--mag)"/>
    </marker>
  </defs>

  <rect x="120" y="66" width="800" height="104" rx="3" fill="var(--admin-bg)"/>
  <rect x="120" y="186" width="800" height="104" rx="3" fill="var(--author-bg)"/>

  <text x="112" y="112" text-anchor="end" font-size="12" font-weight="700" fill="var(--admin)">ADMIN</text>
  <text x="112" y="129" text-anchor="end" font-size="10.5" fill="currentColor" opacity=".55">Group Management</text>
  <text x="112" y="232" text-anchor="end" font-size="12" font-weight="700" fill="var(--author)">AUTHOR</text>
  <text x="112" y="249" text-anchor="end" font-size="10.5" fill="currentColor" opacity=".55">Apply Permissions</text>

  <rect x="150" y="88" width="152" height="60" rx="4" fill="var(--panel)" stroke="var(--admin)" stroke-width="1.5"/>
  <text x="164" y="108" font-size="10" font-family="ui-monospace,monospace" fill="var(--admin)" font-weight="700">01</text>
  <text x="164" y="127" font-size="15" font-weight="650" fill="currentColor">Define</text>
  <text x="226" y="127" font-size="11" fill="currentColor" opacity=".6">groups</text>

  <rect x="392" y="208" width="152" height="60" rx="4" fill="var(--panel)" stroke="var(--author)" stroke-width="1.5"/>
  <text x="406" y="228" font-size="10" font-family="ui-monospace,monospace" fill="var(--author)" font-weight="700">02</text>
  <text x="406" y="247" font-size="15" font-weight="650" fill="currentColor">Apply</text>
  <text x="459" y="247" font-size="11" fill="currentColor" opacity=".6">at publish</text>

  <rect x="592" y="208" width="152" height="60" rx="4" fill="var(--panel)" stroke="var(--author)" stroke-width="1.5"/>
  <text x="606" y="228" font-size="10" font-family="ui-monospace,monospace" fill="var(--author)" font-weight="700">03</text>
  <text x="606" y="247" font-size="15" font-weight="650" fill="currentColor">Cascade</text>

  <rect x="800" y="88" width="104" height="180" rx="4" fill="var(--mag-bg)" stroke="var(--mag)" stroke-width="1.5"/>
  <text x="816" y="112" font-size="10" font-family="ui-monospace,monospace" fill="var(--mag)" font-weight="700">04</text>
  <text x="816" y="132" font-size="15" font-weight="650" fill="currentColor">Govern</text>
  <text x="816" y="152" font-size="10.5" fill="currentColor" opacity=".65">spans both</text>
  <text x="816" y="167" font-size="10.5" fill="currentColor" opacity=".65">roles</text>

  <path d="M 302 122 L 350 122 L 350 238 L 386 238" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".55" marker-end="url(#ar)"/>
  <text x="356" y="184" font-size="10.5" fill="currentColor" opacity=".7">reusable</text>
  <text x="356" y="197" font-size="10.5" fill="currentColor" opacity=".7">audiences</text>

  <line x1="544" y1="238" x2="586" y2="238" stroke="currentColor" stroke-width="1.5" opacity=".55" marker-end="url(#ar)"/>
  <text x="565" y="228" text-anchor="middle" font-size="10.5" fill="currentColor" opacity=".7">parent → child</text>

  <path d="M 744 238 L 772 238 L 772 178 L 794 178" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".55" marker-end="url(#ar)"/>

  <path d="M 852 268 L 852 356 L 226 356 L 226 154" fill="none" stroke="var(--mag)" stroke-width="2" marker-end="url(#arM)"/>
  <rect x="452" y="342" width="176" height="26" rx="3" fill="var(--bg)"/>
  <text x="540" y="360" text-anchor="middle" font-size="11.5" font-weight="650" fill="var(--mag)">expiry closes the loop</text>

  <line x1="226" y1="88" x2="226" y2="64" stroke="var(--admin)" stroke-width="1.2" opacity=".6"/>
  <circle cx="226" cy="58" r="4" fill="var(--admin)"/>
  <text x="226" y="42" text-anchor="middle" font-size="11" font-weight="600" fill="var(--admin)">owner required at creation</text>

  <line x1="852" y1="88" x2="852" y2="64" stroke="var(--mag)" stroke-width="1.2" opacity=".6"/>
  <circle cx="852" cy="58" r="4" fill="var(--mag)"/>
  <text x="852" y="42" text-anchor="middle" font-size="11" font-weight="600" fill="var(--mag)">renew or expire</text>

  <text x="150" y="404" font-size="11" fill="currentColor" opacity=".5">No IT ticket at any step.</text>
</svg>
<figcaption>One loop, two roles: admins define reusable audiences, authors apply them at publish, and expiry closes it back to definition.</figcaption>
</figure>
```

Required CSS:
```css
figure svg { display:block; max-width:100%; height:auto; margin:0 auto; }
figure { overflow-x:auto; -webkit-overflow-scrolling:touch; }
```

### 5.2 Group model — THE GROUP MODEL

Makes two things visible that the prose doesn't: the governance contract applies to **all four types uniformly**, and the two "later" types are **compositions of the launch types**, not separate inventions.

```html
<figure>
<svg viewBox="0 0 1000 520" role="img" aria-label="Group model diagram. A governance bar across the top applies owner-required-at-creation and expiration policy to all four group types. Launch types: Dynamic (attribute rules) and Exception (manual, expiring). Later types: Bulk Dynamic, which generates many dynamic groups from one rule set, and Nested, which composes dynamic and exception groups plus individuals into one audience.">
  <defs>
    <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <rect x="60" y="40" width="880" height="52" rx="4" fill="var(--mag-bg)" stroke="var(--mag)" stroke-width="1.5"/>
  <text x="80" y="63" font-size="10" font-family="ui-monospace,monospace" fill="var(--mag)" font-weight="700" letter-spacing="1.2">ONE GOVERNANCE CONTRACT · ALL FOUR TYPES</text>
  <text x="80" y="81" font-size="12.5" fill="currentColor">Owner named at creation &#160;·&#160; expiration policy attached &#160;·&#160; membership auditable</text>

  <line x1="180" y1="92" x2="180" y2="128" stroke="var(--mag)" stroke-width="1.2" opacity=".45"/>
  <line x1="420" y1="92" x2="420" y2="128" stroke="var(--mag)" stroke-width="1.2" opacity=".45"/>
  <line x1="660" y1="92" x2="660" y2="128" stroke="var(--mag)" stroke-width="1.2" opacity=".45"/>
  <line x1="860" y1="92" x2="860" y2="128" stroke="var(--mag)" stroke-width="1.2" opacity=".45"/>

  <text x="60" y="146" font-size="10" font-family="ui-monospace,monospace" fill="var(--keep)" font-weight="700" letter-spacing="1.2">SHIPPED AT LAUNCH</text>
  <text x="560" y="146" font-size="10" font-family="ui-monospace,monospace" fill="currentColor" opacity=".55" font-weight="700" letter-spacing="1.2">ADDED LATER, BY REQUEST</text>
  <line x1="60" y1="154" x2="530" y2="154" stroke="var(--keep)" stroke-width="1.5" opacity=".5"/>
  <line x1="560" y1="154" x2="940" y2="154" stroke="currentColor" stroke-width="1.5" opacity=".25" stroke-dasharray="4 3"/>

  <rect x="60" y="176" width="240" height="118" rx="4" fill="var(--panel)" stroke="var(--keep)" stroke-width="1.8"/>
  <text x="80" y="203" font-size="16" font-weight="650" fill="currentColor">Dynamic</text>
  <rect x="180" y="189" width="60" height="18" rx="9" fill="var(--keep-bg)"/>
  <text x="210" y="202" text-anchor="middle" font-size="9.5" font-family="ui-monospace,monospace" fill="var(--keep)" font-weight="700">DEFAULT</text>
  <text x="80" y="228" font-size="12" fill="currentColor" opacity=".75">Membership from attribute rules</text>
  <text x="80" y="247" font-size="12" fill="currentColor" opacity=".75">e.g. all People Managers</text>
  <text x="80" y="275" font-size="11" fill="currentColor" opacity=".5">Saves immediately · syncs overnight</text>

  <rect x="60" y="316" width="240" height="118" rx="4" fill="var(--panel)" stroke="var(--keep)" stroke-width="1.8"/>
  <text x="80" y="343" font-size="16" font-weight="650" fill="currentColor">Exception</text>
  <rect x="187" y="329" width="66" height="18" rx="9" fill="var(--mag-bg)"/>
  <text x="220" y="342" text-anchor="middle" font-size="9.5" font-family="ui-monospace,monospace" fill="var(--mag)" font-weight="700">EXPIRING</text>
  <text x="80" y="368" font-size="12" fill="currentColor" opacity=".75">Manual members — contractors,</text>
  <text x="80" y="387" font-size="12" fill="currentColor" opacity=".75">testing, short-lived needs</text>
  <text x="80" y="415" font-size="11" fill="var(--mag)" opacity=".9">Must renew or it stops granting access</text>

  <rect x="560" y="176" width="380" height="118" rx="4" fill="var(--panel)" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 3" opacity=".85"/>
  <text x="580" y="203" font-size="16" font-weight="650" fill="currentColor">Bulk dynamic</text>
  <text x="580" y="228" font-size="12" fill="currentColor" opacity=".75">One rule set generates many groups —</text>
  <text x="580" y="247" font-size="12" fill="currentColor" opacity=".75">one per value of an attribute</text>
  <text x="580" y="275" font-size="11" fill="currentColor" opacity=".5">e.g. a group for every store, or HR in each state</text>

  <rect x="560" y="316" width="380" height="118" rx="4" fill="var(--panel)" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 3" opacity=".85"/>
  <text x="580" y="343" font-size="16" font-weight="650" fill="currentColor">Nested</text>
  <text x="580" y="368" font-size="12" fill="currentColor" opacity=".75">Composes existing groups and individuals</text>
  <text x="580" y="387" font-size="12" fill="currentColor" opacity=".75">into one audience</text>
  <text x="580" y="415" font-size="11" fill="currentColor" opacity=".5">Reuse without rewriting rules</text>

  <path d="M 300 224 L 430 224 L 430 214 L 554 214" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5" marker-end="url(#ar2)"/>
  <text x="428" y="204" text-anchor="middle" font-size="10.5" fill="currentColor" opacity=".7">generates many</text>

  <path d="M 300 262 L 400 262 L 400 366 L 554 366" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5" marker-end="url(#ar2)"/>
  <path d="M 300 396 L 400 396 L 400 380 L 554 380" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".5" marker-end="url(#ar2)"/>
  <text x="452" y="344" text-anchor="middle" font-size="10.5" fill="currentColor" opacity=".7">composed into</text>

  <text x="60" y="478" font-size="12" fill="currentColor" opacity=".6">The later types add no new governance rules — they compose the launch types, so ownership and expiry carry through.</text>
</svg>
<figcaption>Four types, one governance contract — ownership and expiration attach at creation, and the two later types compose the first two rather than escaping their rules.</figcaption>
</figure>
```

### 5.3 Attribute inventory — RESEARCH

Built from the real UXP audit sheet. 39 attributes: 15 cut, 15 renamed, 9 kept.

**The Leader 0–8 block is the argument.** Nine consecutive attributes named `Leader 0 Email` … `Leader 8 Email` — raw org-hierarchy depth indices exposed to content authors — each replaced with the job title it actually meant. Keep the `Employee — ?` row against Leader 6; it's honest and shows the source data was genuinely opaque.

**If space-constrained:** show the stat row + the Leader block only, with a "+30 more audited" line. That alone carries the point.

```html
<div class="attr-stats">
  <div><span class="l">Audited</span><span class="v">39</span><span class="s">attributes in the UXP set</span></div>
  <div><span class="l">Cut</span><span class="v">15</span><span class="s">removed outright</span></div>
  <div><span class="l">Renamed</span><span class="v">15</span><span class="s">kept, relabeled for authors</span></div>
  <div><span class="l">Untouched</span><span class="v">9</span><span class="s">shipped as-is</span></div>
</div>

<div class="inv">
  <div class="inv-h"><div>As named in UXP</div><div>What authors see</div></div>

  <div class="grp ren">
    <div class="grp-l"><span>Renamed — the Leader block</span><span>9</span></div>
    <div class="row"><div>Leader 0 Email</div><div>Employee — CEO</div></div>
    <div class="row"><div>Leader 1 Email</div><div>Employee — EVP</div></div>
    <div class="row"><div>Leader 2 Email</div><div>Employee — SVP</div></div>
    <div class="row"><div>Leader 3 Email</div><div>Employee — VP</div></div>
    <div class="row"><div>Leader 4 Email</div><div>Employee — Sr Director</div></div>
    <div class="row"><div>Leader 5 Email</div><div>Employee — Director</div></div>
    <div class="row"><div>Leader 6 Email</div><div>Employee — ?</div></div>
    <div class="row"><div>Leader 7 Email</div><div>Employee — Sr Manager</div></div>
    <div class="row"><div>Leader 8 Email</div><div>Employee — Manager</div></div>
  </div>

  <div class="grp ren">
    <div class="grp-l"><span>Renamed — the rest</span><span>6</span></div>
    <div class="row"><div>User Type</div><div>Employee Type</div></div>
    <div class="row"><div>Employee Type</div><div>Pay Type</div></div>
    <div class="row"><div>Email</div><div>Employee Email</div></div>
    <div class="row"><div>Department</div><div>Functional Group</div></div>
    <div class="row"><div>Manager ID</div><div>Manager Email</div></div>
    <div class="row"><div>Management Level</div><div>VP — not 3_VP</div></div>
  </div>

  <div class="grp cut">
    <div class="grp-l"><span>Cut</span><span>15</span></div>
    <div class="row"><div>Display Name</div><div>removed</div></div>
    <div class="row"><div>First Name</div><div>removed</div></div>
    <div class="row"><div>Last Name</div><div>removed</div></div>
    <div class="row"><div>User Principal Name</div><div>duplicate of email</div></div>
    <div class="row"><div>Object ID</div><div>removed</div></div>
    <div class="row"><div>NTID</div><div>sam_account_name in system</div></div>
    <div class="row"><div>Employee Org Data</div><div>removed</div></div>
    <div class="row"><div>Street Address</div><div>removed</div></div>
    <div class="row"><div>Phone Mobile</div><div>removed</div></div>
    <div class="row"><div>Archetype</div><div>no known purpose</div></div>
    <div class="row"><div>Account enabled</div><div>always true</div></div>
    <div class="row"><div>Created at</div><div>removed</div></div>
    <div class="row"><div>Created by</div><div>removed</div></div>
    <div class="row"><div>Updated at</div><div>removed</div></div>
    <div class="row"><div>Updated by</div><div>removed</div></div>
  </div>

  <div class="grp kept">
    <div class="grp-l"><span>Kept as-is</span><span>9</span></div>
    <div class="row"><div>Employee ID</div><div>unchanged</div></div>
    <div class="row"><div>Job Title</div><div>unchanged</div></div>
    <div class="row"><div>Office Location</div><div>unchanged</div></div>
    <div class="row"><div>People Manager flag</div><div>unchanged</div></div>
    <div class="row"><div>Location ID</div><div>unchanged</div></div>
    <div class="row"><div>City</div><div>unchanged</div></div>
    <div class="row"><div>State</div><div>unchanged</div></div>
    <div class="row"><div>Zipcode</div><div>unchanged</div></div>
    <div class="row"><div>Company Name</div><div>unchanged</div></div>
  </div>
</div>
```

```css
.attr-stats{display:flex;flex-wrap:wrap;border:1px solid var(--rule);border-radius:3px;
  overflow:hidden;background:var(--panel);margin:22px 0;}
.attr-stats > div{flex:1 1 130px;padding:15px 17px;border-right:1px solid var(--rule);
  display:flex;flex-direction:column;}
.attr-stats > div:last-child{border-right:0;}
.attr-stats .l{font-family:var(--mono);font-size:9.5px;letter-spacing:.13em;
  text-transform:uppercase;color:var(--ink-3);margin-bottom:6px;}
.attr-stats .v{font-size:22px;font-weight:650;line-height:1.15;}
.attr-stats .s{font-size:12.5px;color:var(--ink-3);margin-top:3px;line-height:1.35;}

.inv{border:1px solid var(--rule);border-radius:4px;overflow:hidden;
  background:var(--panel);margin:22px 0;}
.inv-h{display:flex;background:var(--panel-2);border-bottom:1.5px solid var(--ink);}
.inv-h div{flex:1;padding:11px 16px;font-family:var(--mono);font-size:9.5px;
  letter-spacing:.13em;text-transform:uppercase;color:var(--ink-3);font-weight:500;}
.inv-h div:first-child{border-right:1px solid var(--rule);}
.grp{border-bottom:1px solid var(--rule);}
.grp:last-child{border-bottom:0;}
.grp-l{padding:9px 16px;background:var(--panel-2);font-family:var(--mono);
  font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;
  display:flex;justify-content:space-between;gap:10px;}
.grp.cut  .grp-l{color:var(--cut);}
.grp.ren  .grp-l{color:var(--author);}
.grp.kept .grp-l{color:var(--keep);}
.row{display:flex;border-top:1px solid var(--rule-2);font-size:13.5px;}
.row div{flex:1;padding:8px 16px;line-height:1.4;}
.row div:first-child{border-right:1px solid var(--rule-2);
  font-family:var(--mono);font-size:12.5px;}
.cut .row div:first-child{text-decoration:line-through;
  text-decoration-color:var(--cut);text-decoration-thickness:1.5px;color:var(--ink-3);}
.cut  .row div:last-child{color:var(--ink-3);font-style:italic;}
.ren  .row div:last-child{font-weight:600;}
.kept .row div:last-child{color:var(--ink-3);}
```

**Two details worth a sentence of body copy each:**

- **The name collision.** `User Type` became Employee Type, and `Employee Type` became Pay Type — because what the system called "Employee Type" was actually pay type. The original names weren't just opaque, they were actively misleading; an author building a rule would have picked the wrong field.
- **Cuts with reasons.** `Account enabled` was removed because every account is enabled. `Archetype` because nobody could say what it was. Not tidying — removing fields that could only produce wrong rules.

### 5.4 Annotation component

Reusable pin-and-label pattern for numbered callouts over a screenshot. **Build once, use everywhere** — the three rule-builder frames here, the nav v1 on the Site Architecture case study, anything later.

Pins use **percentage coordinates** so they hold position at every breakpoint. Labels are ordinary HTML — selectable, accessible, and a typo is a text edit rather than a Figma re-export.

```html
<figure>
<div class="anno">
  <div class="anno-img">
    <img src="/images/enterprise-permissions/ep-rulebuilder-v1.png"
         alt="Dynamic Rule Creator v1: expression rows with three add-buttons beneath">
    <div class="pin" style="left:14%;top:26%">1</div>
    <div class="pin" style="left:62%;top:41%">2</div>
    <div class="pin" style="left:88%;top:58%">3</div>
    <div class="pin" style="left:30%;top:82%">4</div>
  </div>
  <ol class="anno-list">
    <li><span class="num">1</span><span>Three add-buttons, unclear function</span></li>
    <li><span class="num">2</span><span>Nesting can't be edited after creation</span></li>
    <li><span class="num">3</span><span>Error states shift frame height</span></li>
    <li><span class="num">4</span><span>Attribute names read as database columns</span></li>
  </ol>
</div>
<figcaption>v1: the interaction model assumed the operator already understood the data schema</figcaption>
</figure>
```

```css
.anno{position:relative;max-width:100%;margin:0 auto;}
.anno-img{position:relative;border:1px solid var(--rule);border-radius:3px;
  overflow:hidden;background:var(--panel-2);}
.anno-img img{display:block;width:100%;height:auto;}
.pin{position:absolute;width:24px;height:24px;border-radius:50%;
  background:var(--mag);color:var(--on-mag,#fff);font-family:var(--mono);
  font-size:12px;font-weight:700;display:flex;align-items:center;
  justify-content:center;transform:translate(-50%,-50%);
  box-shadow:0 1px 4px rgba(0,0,0,.3);z-index:2;}
.anno-list{list-style:none;padding:0;margin:16px 0 0;}
.anno-list li{display:flex;gap:11px;align-items:flex-start;margin-bottom:9px;
  font-size:14px;line-height:1.45;}
.anno-list .num{flex:0 0 20px;height:20px;border-radius:50%;background:var(--mag);
  color:var(--on-mag,#fff);font-family:var(--mono);font-size:10.5px;font-weight:700;
  display:flex;align-items:center;justify-content:center;margin-top:1px;}
```

**Note:** define `--on-mag` as a foreground that reads on the accent in both themes (a near-black in dark mode if the accent lightens).

**Screenshot backgrounds:** the source UI is light. If the site has a dark theme, wrap screenshots in a panel that holds its own light background regardless of theme — otherwise they'll fight the surrounding page. Decide this once, before building all four annotated frames.

---

## 6. DECISIONS ALREADY SETTLED — do not revisit

| Decision | Outcome |
|---|---|
| **Hero video** | **KEEP `ep-hero.mp4`.** An earlier draft proposed a split legacy-vs-new frame; the legacy state was spread across multiple systems and no screenshots exist. THE PROBLEM section directly below does the framing. Optional low-cost improvement: a poster frame or 2–3 static labels so a scan that doesn't wait for playback still lands. |
| **Platform Navigation** | Stays merged into the Site Architecture case study. Two case studies is the right portfolio length. |
| **Competitive teardown** | Dropped as a standalone research image. The Salesforce tree grid reference (`44:7464`) does the job better inside the Iteration section, because it has a causal chain rather than being a generic survey. |
| **Figma export workflow** | No manual export needed. Figma MCP pulls frames directly by node ID; the individual rule-builder frames are addressable as their own nodes. |
| **`45:48106` Current Prod Screenshots** | Has content but it isn't useful. Not part of this build. |

---

## 7. BUILD ORDER

**Nothing blocked.** Rule-builder frame order is confirmed (§3.4).

### Phase 1 — no dependencies
- [ ] Map placeholder CSS vars in §5 to site tokens; extract to shared stylesheet if the two case studies duplicate styles
- [ ] Build permissions loop diagram (§5.1) into HOW IT WORKS
- [ ] Fix doubled step labels (§4.6)
- [ ] Build group model diagram (§5.2) into THE GROUP MODEL
- [ ] Build attribute inventory (§5.3) into RESEARCH
- [ ] Fix the "more than half" claim → "only 9 of 39 shipped unchanged" (§4.6)
- [ ] Metadata to five fields (§4.1)
- [ ] Collaborators line (§4.2)
- [ ] Build annotation component (§5.4); decide screenshot background treatment

### Phase 2 — needs Figma frames
- [ ] Pull `44:6622` (v1), `44:5052` (v2), `44:6771` (v3), `44:7464` (Salesforce) via Figma MCP
- [ ] Build ITERATION section, four beats (§3)
- [ ] Pull `44:41850` + `45:48145`; build SYSTEM + SCALE (§4.4)
- [ ] Pull `45:51789`, crop Questions panel → RESEARCH (§4.3)
- [ ] Pull `45:48135` → KEY DECISION (§4.5)

### Phase 3 — polish
- [ ] Rewrite captions to argue (§4.7)
- [ ] Restore component permissions + adoption safeguards (§4.4)
- [ ] Restore group management detail view paragraph (rule logic + membership + applied content + activity history in one view)
- [ ] Verify every diagram in light and dark, at 375px / 768px / 1440px
- [ ] Re-run the 30-second scan test (§8)

---

## 8. ACCEPTANCE TEST

Scroll the finished page fast, reading only headings, captions, and images. A cold reader should get:

1. Permissions system, T-Mobile, 6 months, 150K employees
2. IT tickets → self-serve
3. **Requirements were interrogated, not just received** ← new
4. **A four-type model with governance built in, drawn as a system** ← new
5. **A closed loop from define to expire** ← new
6. **A v1 that failed, and the specific fixes that shipped** ← new
7. **Accessibility as concrete remediation, not a claim** ← new
8. **50+ screens on one component system** ← new
9. **Work handed off to engineers on a sprint cadence** ← new
10. Real numbers: 3,000 pages, 30 groups, 0 tickets

If items 3–9 aren't legible from a fast scroll, the rebuild hasn't landed regardless of how good the prose is.

---

## 9. FIGMA NODE INDEX

File key: `lO4Djo7jQ0wYD9JFgcn0NK`

| Node | Name | Size | Use |
|---|---|---|---|
| `44:4803` | DRC Changes | 3946×2843 | Parent board — read for reasoning, don't export |
| `44:6622` | Dynamic Rule Creator | 1100×560 | **Rule builder v1** → Iteration beat 1 |
| `44:5052` | Dynamic Rule Creator | 1006×714 | **Rule builder v2** → Iteration beat 2 |
| `44:6771` | Dynamic Rule Creator | 1100×560 | **Rule builder v3** → Iteration beat 4 |
| `44:6493` | Bulk Dynamic Rule Creator | 1100×560 | v2 structure, row menu open — optional |
| `44:5185` | Dynamic Rule Creator | 1006×804 | v3 with full error states — alternate |
| `44:7464` | Reference - SAP *(actually Salesforce)* | 985×627 | Tree grid reference → Iteration beat 3 |
| `44:41850` | Iterations | 13685×6149 | ~40 screens → System + Scale |
| `45:48135` | Group Management Flow - Current UX | 30874×3620 | Cascade task flow → Key Decision |
| `45:48145` | Sprint 1 UX Handoff | 19792×4790 | Engineering handoff → System + Scale |
| `45:51789` | Permissions: Group Management 6/4/25 | 10942×3478 | Crop Questions panel → Research |
| `45:51803` | Permissions Email Notification | 651×815 | Optional → governance/expiry |

**Reserve** (use only if a section needs strengthening): `44:15716` Exception Group flow · `44:16884` Dynamic group · `44:24009` Apply Permissions · `44:27331` Group Management · `45:52791` Groups pending creation

**Housekeeping:** rename `44:7464` from "Reference - SAP" to "Reference - Salesforce Tree Grid".
