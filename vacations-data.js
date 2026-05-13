/**
 * VACATION DATA
 * ============================================================
 *
 * Each vacation has:
 *   id      — unique slug (no spaces)
 *   title   — display name
 *   year    — shown in the sidebar
 *   days    — array of day entries (see structure below)
 *
 * Each day has:
 *   day         — day number (1, 2, 3 ...)
 *   date        — human-readable date string
 *   title       — short name for this day
 *   lat / lng   — map coordinates for the pin
 *   highlights  — array of short highlight strings
 *   notes       — one or two sentences about this day
 *
 * HOW TO FIND lat/lng:
 *   1. Go to maps.google.com
 *   2. Right-click on the exact spot you want to pin
 *   3. Click the coordinates at the top of the menu to copy them
 *   4. Paste here — first number is lat, second is lng
 *
 * HOW TO ADD A NEW VACATION:
 *   Copy the commented-out Tokyo block at the bottom and fill it in.
 *
 * ============================================================
 */

const VACATIONS = [

  /* ── Paris, France ──────────────────────────────────────── */
  {
    id:    "paris-2024",
    title: "Paris, France",
    year:  2024,
    days: [
      {
        day:  1,
        date: "June 1, 2024",
        title: "Arrival & Montmartre",
        lat:  48.8867,
        lng:  2.3431,
        highlights: [
          "Sacré-Cœur at sunset",
          "First café au lait in ten years",
          "The narrow street with the accordionist"
        ],
        notes: "The city smelled like rain and croissants. Worth every hour of travel."
      },
      {
        day:  2,
        date: "June 2, 2024",
        title: "Louvre & the Marais",
        lat:  48.8606,
        lng:  2.3376,
        highlights: [
          "An hour with Vermeer",
          "Falafel at L'As du Fallafel",
          "Lost in Marais side streets — on purpose"
        ],
        notes: "The Louvre is too big. You don't see it. You survive it."
      },
      {
        day:  3,
        date: "June 3, 2024",
        title: "Versailles",
        lat:  48.8048,
        lng:  2.1204,
        highlights: [
          "Hall of Mirrors at opening hour",
          "The gardens — two hours, still didn't finish",
          "A very long train ride home"
        ],
        notes: "Opulence as a full-body experience. I understand revolutions now."
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
   * ADD A NEW VACATION HERE — copy and edit this block:
   *
   * {
   *   id:    "tokyo-2025",
   *   title: "Tokyo, Japan",
   *   year:  2025,
   *   days: [
   *     {
   *       day:  1,
   *       date: "March 15, 2025",
   *       title: "Shinjuku & Harajuku",
   *       lat:  35.6897,
   *       lng:  139.7006,
   *       highlights: [
   *         "Meiji Shrine",
   *         "Takeshita Street",
   *         "Ramen at midnight"
   *       ],
   *       notes: "Everything here is precise and alive at the same time."
   *     }
   *   ]
   * },
   * ────────────────────────────────────────────────────────── */

];
