# Global Presentation - Content Verification Checklist

> [!WARNING]
> **DO NOT PUBLISH THE WEBSITE** until every item marked `[VERIFY]` has been confirmed and replaced with actual data. Fictitious or unverified data should not be made public under any circumstances.

## Verification Status Key
- ✅ **VERIFIED**: Confirmed by the company
- 📋 **CLIENT-PROVIDED**: Supplied by company directly
- 📰 **PUBLICLY REFERENCED**: Found in public sources, needs confirmation before formal use
- ⚠️ **NEEDS CONFIRMATION**: Placeholder - must verify before publishing

---

## 1. Company Information (`src/content/company.json` & components)

| Item | Current Status | Notes |
| :--- | :--- | :--- |
| **Address** | ⚠️ NEEDS CONFIRMATION | Ensure registered or operational address is accurate |
| **Phone Number** | ⚠️ NEEDS CONFIRMATION | Ensure primary contact number is correct |
| **Alternate Phone** | ⚠️ NEEDS CONFIRMATION | Confirm if a secondary number should be displayed |
| **Email Address** | ⚠️ NEEDS CONFIRMATION | Needs a professional email (e.g. info@, sales@) |
| **WhatsApp Number** | ⚠️ NEEDS CONFIRMATION | Verify the active WhatsApp business number |
| **Google Maps Embed** | ⚠️ NEEDS CONFIRMATION | Need precise URL for office location |
| **Social Links** | ⚠️ NEEDS CONFIRMATION | Confirm LinkedIn, Twitter, etc., before adding URLs |

## 2. Business Identifiers & Registrations

| Item | Current Status | Notes |
| :--- | :--- | :--- |
| **GSTIN** | ⚠️ NEEDS CONFIRMATION | Verify valid GST number before adding to footer/about |
| **PAN / CIN** | ⚠️ NEEDS CONFIRMATION | If required on website |

## 3. Trust Metrics & Statistics (`src/content/trust-metrics.json`)

| Item | Current Status | Notes |
| :--- | :--- | :--- |
| **Years of Experience** | 📰 PUBLICLY REFERENCED | "Established approx 2003" - confirm actual date |
| **Projects Completed** | ⚠️ NEEDS CONFIRMATION | Provide an exact or minimum guaranteed number |
| **Institutional Clients** | ⚠️ NEEDS CONFIRMATION | Provide a defensible number |
| **Cities Served** | ⚠️ NEEDS CONFIRMATION | Confirm coverage footprint |
| **OEM Partnerships** | ⚠️ NEEDS CONFIRMATION | Confirm number of active agreements |

## 4. Client References & Projects (`src/content/projects.json`)

> [!CAUTION]
> Do NOT use fake client names, fictitious case studies, or unauthorized government logos.

| Item | Current Status | Notes |
| :--- | :--- | :--- |
| **Rajasthan Govt Depts**| 📰 PUBLICLY REFERENCED | Need authorization to list specific departments |
| **IITs & NITs** | 📰 PUBLICLY REFERENCED | Need authorization before displaying their logos/names |
| **Defence/Police** | 📰 PUBLICLY REFERENCED | Often strict about vendor publicity. Ensure clearance. |
| **Case Studies** | ⚠️ NEEDS CONFIRMATION | Replace placeholders with real documented projects |

## Final Pre-Launch Sign-off
- [ ] All `[VERIFY]` markers removed from codebase
- [ ] Contact form connected to active endpoints/email
- [ ] Domain and hosting environment configured
- [ ] SEO metadata correctly updated
- [ ] Final visual QA across desktop, tablet, and mobile devices

*Sign-off by Project Owner: _________________________*
*Date: _________________________*

## Images
- Solution and industry image assets have been replaced with the image files provided for this website update.
- Solution assets are stored in `public/images/solutions/` and industry assets in `public/images/industries/`.
- Verify usage rights/authorization for any client-site or installation photography before publication.
