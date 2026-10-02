# Swastik Cyber Cafe — Website Guide & User Manual

Welcome to the website for **Swastik Cyber Cafe** (Computer Centre & Tuition Centre) located in Sujanpur, Distt. Pathankot, Punjab.

This website is custom-built with **plain HTML, CSS, and vanilla JavaScript** without any complex frameworks or build steps. It is designed to be ultra-fast on 3G mobile connections, accessible, and easy for the shop owner to maintain.

---

## 📁 Project File Structure

```text
Swastik_Cafe/
├── index.html          # Main website page (opens on desktop and mobile)
├── print.html          # Printable shop counter standee & flyer with QR code
├── style.css           # Styling, colors, responsive layouts, and mobile bar
├── app.js              # Live search filter, IST open/closed clock, accordions
├── data.js             # ★ THE MAIN FILE: Edit all content, prices, hours here!
├── assets/
│   ├── logo.png        # Shop logo (replace with your original logo image)
│   └── icons.svg       # Local SVG icon definitions
├── PROGRESS.md         # Development log and milestone tracker
└── README.md           # This guide
```

---

## 🛠️ How to Edit Content in `data.js`

**All website content, services, documents, prices, hours, notices, courses, and translations live in `data.js`.**  
You never need to touch HTML or CSS to change text, phone numbers, or services.

Open `data.js` in any text editor (Notepad, VS Code, Notepad++).

### 1. Changing Phone Numbers, WhatsApp, and Address
Look for the `business` block near the top:
```javascript
phones: {
  primary: "7508364975",
  primaryFormatted: "75083-64975",
  secondary: "7681920047",
  secondaryFormatted: "76819-20047"
},
whatsappNumber: "917508364975", // International format without +
address: {
  en: "Main Market, Sujanpur, Distt. Pathankot, Punjab - 145023",
  hi: "मुख्य बाजार, सुजानपुर, जिला पठानकोट, पंजाब - 145023"
}
```

### 2. Updating Shop Timings (Open/Closed Badge)
The website automatically shows **"Open now, closes at 8:00 PM"** or **"Closed, opens at 9:00 AM"** using Indian Standard Time (IST).
To adjust your shop timings, update the `schedule` block (times in 24-hour format `"HH:MM"`):
```javascript
schedule: [
  {
    days: [1, 2, 3, 4, 5, 6], // Monday (1) to Saturday (6)
    dayLabel: { en: "Monday to Saturday", hi: "सोमवार से शनिवार" },
    open: "09:00", // 9:00 AM
    close: "20:00" // 8:00 PM
  },
  {
    days: [0], // Sunday (0)
    dayLabel: { en: "Sunday", hi: "रविवार" },
    open: "10:00", // 10:00 AM
    close: "17:00" // 5:00 PM
  }
]
```

### 3. Updating Service Fees, Processing Time & Documents
Under `services`, each service has `fee`, `time`, and `documents`:
- **If `fee: ""` is blank**, the website displays **"Call for price"**.  
  To set a price, change it to e.g. `fee: "₹50 - ₹100"`.
- **If `time: ""` is blank**, the website displays **"Contact shop"**.  
  To set a time, change it to e.g. `time: "15-20 Mins"`.
- **Documents list**: Each service has draft document items in English and Hindi. You can add, remove, or modify documents in the array.

Example:
```javascript
{
  id: "pan-card",
  category: "identity",
  title: { en: "PAN Card (New & Correction)", hi: "पैन कार्ड (नया एवं सुधार)" },
  fee: "₹120",        // Fill your fee here!
  time: "24-48 Hours", // Fill your turnaround time here!
  documents: {
    en: [
      "Aadhaar Card with linked mobile number",
      "2 Passport size color photos"
    ],
    hi: [
      "आधार कार्ड (मोबाइल नंबर लिंक होना आवश्यक)",
      "2 पासपोर्ट साइज फोटो"
    ]
  },
  whatsappQuery: "Hi, I want to apply for a PAN card."
}
```

### 4. Latest Updates & Notices
In `latestUpdates`:
- Add urgent form deadlines, government schemes, or exam announcements.
- **To hide the updates strip completely**, simply set: `latestUpdates: []`.

### 5. Admission Open Banner
In `admissionBanner`:
- To show the banner: `enabled: true`.
- To hide the banner: `enabled: false`.

### 6. Computer Courses & Tuition
- Edit `coursesSection.list` to add/remove courses and durations.
- Edit `tuitionSection` to adjust classes, college degrees, and subjects.

---

## 🖼️ How to Replace the Logo

Place your original shop logo file at:
`assets/logo.png`
- A transparent PNG or high-resolution image with width ~300px to 500px and height ~80px to 120px works best.

---

## 🖨️ How to Use the Printable Counter Standee (`print.html`)

1. Open `print.html` in your browser.
2. Enter your live website URL in the **Poster QR URL** input box at the top.
3. Click the red **🖨️ Print Poster / Save PDF** button.
4. Set print destination to **Save as PDF** or print directly on A4 paper.
5. Place this sheet in an acrylic standee or laminate it on the shop counter so customers can scan the QR code to see all service documents and fees!

---

## 🌐 How to Deploy for Free

You can host this website completely free of cost with zero monthly fees on any of the following platforms:

### Option A: Netlify Drop (Easiest - 1 Minute)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the whole `Swastik_Cafe` folder into the browser.
3. Your site is live instantly with a free `.netlify.app` web address and free SSL certificate!
4. (Optional) In Site Settings, you can connect your own custom domain name (e.g., `swastikcafe.com`).

### Option B: Cloudflare Pages
1. Sign up for a free account at [https://pages.cloudflare.com](https://pages.cloudflare.com).
2. Click **Create a project** &rarr; **Direct Upload**.
3. Upload the `Swastik_Cafe` folder.
4. It goes live globally on Cloudflare's ultra-fast CDN network.

### Option C: GitHub Pages
1. Create a free GitHub repository (e.g., `swastik-cafe`).
2. Push your files to the repository.
3. In repository **Settings** &rarr; **Pages**, choose the `main` branch and `/root` folder &rarr; **Save**.
4. Your site will be published at `https://<username>.github.io/swastik-cafe`.

---

## 🔒 Important Rules & Best Practices
- **Do not collect Aadhaar numbers or government identity cards** directly through public web forms. Direct visitors to walk into the shop or WhatsApp the owner.
- **Keep disclaimer intact**: The footer includes a clear disclaimer that Swastik Cyber Cafe is an independent service kiosk.
