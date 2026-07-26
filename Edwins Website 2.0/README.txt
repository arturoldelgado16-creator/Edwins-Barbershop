EDWIN'S BARBERSHOP — WEBSITE NOTES
===================================

FILES
  index.html      Home page
  services.html   Full service menu & pricing
  about.html      Edwin's story
  contact.html    Contact form, hours, map placeholder
  css/style.css   All styling (colors, fonts, layout)
  js/script.js    Mobile menu toggle + contact form handling
  images/         Drop your real photos here

ADDING YOUR OWN PHOTOS
  There are 4 spots currently using placeholder boxes/gradients:
    1. Homepage hero background
       -> in css/style.css, find ".hero-photo" and add:
          background-image: url('../images/hero.jpg');
    2. Homepage "Meet the Barber" section (index.html)
    3. About page portrait of Edwin (about.html)
    4. About page shop interior photo (about.html)
       -> for 2-4, replace the <div class="photo-placeholder">...</div>
          with: <img src="images/your-photo.jpg" alt="description">

  Recommended photo sizes: at least 1200px wide for the hero,
  800x1000px (portrait) for the about-page photos.

CHANGING COLORS / FONTS
  Everything is controlled from the :root section at the top of
  css/style.css — change --red, --black, --gold, --cream to retheme
  the whole site in one place.

CONTACT FORM
  The form on contact.html currently just shows a thank-you message
  after submitting — it isn't wired up to send email yet. To make it
  functional, connect it to a form service (e.g. Formspree, Netlify
  Forms) or your own backend.

ADDING AN IMAGES FOLDER
  This folder does not include an "images" folder yet since there are
  no real photos in place. To add your own:
    1. Create a folder named "images" right next to index.html
    2. Drop your photo files into it (e.g. hero.jpg, edwin.jpg)
    3. Follow the steps above to reference them in the HTML/CSS

MAP / LOCATION EMBED
  To swap the ".map-placeholder" divs (on the homepage and contact
  page) for a real Google Map:
    1. Go to Google Maps and search your address
       (1351 Lamberton Dr, Silver Spring, MD 20902)
    2. Click "Share" > "Embed a map" > copy the provided <iframe> code
    3. Replace the <div class="map-placeholder">...</div> with that
       <iframe> tag (it will be a single line of code Google gives you)
  This is free and does not require a Google API key.

HOW TO VIEW
  Just open index.html in any browser — no build step or server
  required. To publish it, upload the whole folder to any web host
  (Netlify, Vercel, GitHub Pages, or your own hosting).
