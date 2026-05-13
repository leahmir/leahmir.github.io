/**
 * LEAH MIR — SITE CONFIGURATION
 * ============================================================
 *
 * This file controls the navigation and section cards on the
 * landing page. To add a new section to the site:
 *
 *   1. Add a new entry to the `sections` array below
 *   2. Create a new HTML page for it (copy teaching.html as a template)
 *   3. Set the `href` to your new file name
 *
 * Accent colors — use one of these per section:
 *   Turquoise  #2EC4B6
 *   Yellow     #FFD43B
 *   Pink       #FF6FA8
 *   Green      #74C69D
 *
 * ============================================================
 */

const SITE_CONFIG = {

  name: "Leah Mir",
  tagline: "Music educator. Storyteller with an engineer brain. Forever curious.",

  sections: [
    {
      id:          "music",
      title:       "Music",
      description: "Recitals, recordings, and the sounds that shape the room.",
      href:        "music.html",
      accent:      "#2EC4B6"   /* turquoise */
    },
    {
      id:          "teaching",
      title:       "Teaching",
      description: "Philosophy, resources, and twenty years of believing music changes people.",
      href:        "teaching.html",
      accent:      "#FFD43B"   /* yellow */
    },
    {
      id:          "writing",
      title:       "Writing",
      description: "Short pieces, long thoughts, and the occasional rebellion on the page.",
      href:        "writing.html",
      accent:      "#FF6FA8"   /* pink */
    },
    {
      id:          "vacation",
      title:       "Vacation",
      description: "Day by day. Place by place. The trips that became part of the story.",
      href:        "vacation.html",
      accent:      "#74C69D"   /* green */
    }

    /*
     * ====================================================
     * ADDING A NEW SECTION — copy this block:
     * ====================================================
     *
     * ,{
     *   id:          "new-section-id",
     *   title:       "Section Title",
     *   description: "One or two lines describing what lives here.",
     *   href:        "new-section.html",
     *   accent:      "#2EC4B6"
     * }
     *
     * Then:
     *   1. Create new-section.html (copy teaching.html)
     *   2. Upload both files to GitHub
     *   Done — it will appear in the nav and on the homepage card grid.
     */

  ]

};
