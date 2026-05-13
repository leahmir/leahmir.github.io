# Getting Your Site Live on GitHub Pages
### leahmir.github.io — Step-by-step guide

No coding experience needed. This will take about 15 minutes.

---

## Before you start

You need the 8 files from the `leahmir-website` folder:

```
index.html
style.css
site-config.js
music.html
teaching.html
writing.html
vacation.html
vacations-data.js
```

---

## Step 1 — Create a GitHub account

1. Go to **[github.com](https://github.com)**
2. Click **Sign up** (top right)
3. When asked for a username, enter: **leahmir**
   - This sets your site address to `leahmir.github.io`
4. Use your email, create a password, complete the verification
5. Choose the **Free** plan

---

## Step 2 — Create your repository

A "repository" is just a folder on GitHub that holds your website files.

1. Once logged in, click the **+** icon (top right corner) → **New repository**
2. In the "Repository name" box, type exactly: **`leahmir.github.io`**
   - It must be your username + `.github.io` — spelled exactly right
3. Make sure **Public** is selected (not Private)
4. Leave everything else as-is
5. Click **Create repository**

---

## Step 3 — Upload your files

1. On your new empty repository page, click **uploading an existing file**
   (you'll see this link in the center of the page)
2. Open the `leahmir-website` folder on your computer
3. Select all 8 files (Ctrl+A on Windows, Cmd+A on Mac) and drag them into the browser window
4. Wait for all files to finish uploading (you'll see them listed)
5. At the bottom, leave the default "Commit changes" message as-is
6. Click **Commit changes**

---

## Step 4 — Turn on GitHub Pages

1. On your repository page, click **Settings** (the gear icon in the top menu)
2. In the left sidebar, scroll down and click **Pages**
3. Under "Branch", click the dropdown that says **None** → select **main**
4. Leave the folder set to **/ (root)**
5. Click **Save**

GitHub will show a message: *"Your site is being deployed."*

Wait 1–2 minutes, then visit: **[https://leahmir.github.io](https://leahmir.github.io)**

Your site is live.

---

## Adding your YouTube recital video

1. Go to your YouTube video
2. Click **Share** (below the video) → **Embed**
3. In the box that appears, find the part that says `src="..."` — copy the URL inside the quotes.
   It looks like: `https://www.youtube.com/embed/dQw4w9WgXcQ`
4. Open the file `music.html` in a plain text editor
   (on Windows: right-click → Open with → Notepad)
5. Find this line:
   ```
   src="https://www.youtube.com/embed/VIDEO_ID_HERE"
   ```
6. Replace it with the URL you copied from YouTube
7. Also update the title below it:
   ```
   Spring Recital  →  your actual recital name
   2024            →  the correct year
   ```
8. Save the file
9. Upload the updated `music.html` to GitHub (same as Step 3, but just this one file)

To add more videos: copy the whole `<div class="video-item">` block and paste it below, then update the src and title for each one.

---

## Adding a vacation

1. Open `vacations-data.js` in Notepad (or any text editor)
2. Find the comment block that says **ADD A NEW VACATION HERE**
3. Copy the commented-out example block (the Tokyo one) and remove the `//` from the start of each line
4. Fill in your trip details:
   - `id` — a short nickname with no spaces (e.g., `"london-2025"`)
   - `title` — the display name (e.g., `"London, England"`)
   - `year` — the year
   - For each `day`: the date, title, a note, and highlights
5. For `lat` and `lng` (the map coordinates):
   - Go to [maps.google.com](https://maps.google.com)
   - Right-click on the location you visited
   - Click the coordinates at the top — they copy to your clipboard
   - Paste them (first number = lat, second = lng)
6. Save the file and upload it to GitHub

---

## Adding a new section (later)

When you're ready to add a new area — Photography, Recipes, anything:

1. Open `site-config.js` in a text editor
2. Find the comment that says **ADDING A NEW SECTION**
3. Uncomment the example block and fill in your values
4. Copy `teaching.html`, rename it to `your-section.html`, and replace the placeholder text
5. Upload both files to GitHub

The new section will automatically appear in the navigation and on the homepage grid.

---

## Making changes later

Any time you want to update something:
1. Edit the file on your computer
2. Go to your repository on github.com
3. Click on the file you want to replace
4. Click the pencil icon (Edit) — or drag your updated file into the repository
5. Click **Commit changes**

Changes go live within a minute or two.

---

## Something not working?

Feel free to share the error message or describe what's happening — it's almost always a quick fix.
