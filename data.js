/**
 * SWASTIK CYBER CAFE - MAIN DATA CONFIGURATION FILE
 * ---------------------------------------------------------------------
 * All website content, services, documents, prices, hours, notices,
 * and text translations live in this single file.
 * The owner can edit this file to update any information on the website.
 */

window.SWASTIK_DATA = {
  // Business Information
  business: {
    name: {
      en: "Swastik Cyber Cafe",
      hi: "स्वस्तिक साइबर कैफे",
      pa: "ਸਵਸਤਿਕ ਸਾਈਬਰ ਕੈਫੇ"
    },
    subTitle: {
      en: "Computer Centre & Tuition Centre",
      hi: "कंप्यूटर सेंटर एवं ट्यूशन सेंटर",
      pa: "ਕੰਪਿਊਟਰ ਸੈਂਟਰ ਅਤੇ ਟਿਊਸ਼ਨ ਸੈਂਟਰ"
    },
    taglinePrimary: {
      en: "Sab kuch ek hi jagah",
      hi: "सब कुछ एक ही जगह",
      pa: "ਸਭ ਕੁਝ ਇੱਕੋ ਥਾਂ"
    },
    taglineSecondary: {
      en: "Sapne Aapke... Saath Hamara... Manzil Pakki!",
      hi: "सपने आपके... साथ हमारा... मंज़िल पक्की!",
      pa: "ਸੁਪਨੇ ਤੁਹਾਡੇ... ਸਾਥ ਸਾਡਾ... ਮੰਜ਼ਿਲ ਪੱਕੀ!"
    },
    address: {
      en: "Main Market, Sujanpur, Distt. Pathankot, Punjab - 145023",
      hi: "मुख्य बाजार, सुजानपुर, जिला पठानकोट, पंजाब - 145023",
      pa: "ਮੇਨ ਮਾਰਕੀਟ, ਸੁਜਾਨਪੁਰ, ਜ਼ਿਲ੍ਹਾ ਪਠਾਨਕੋਟ, ਪੰਜਾਬ - 145023"
    },
    phones: {
      primary: "7508364975",
      primaryFormatted: "75083-64975",
      secondary: "7681920047",
      secondaryFormatted: "76819-20047"
    },
    whatsappNumber: "917508364975", // International format without +
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Sujanpur+Pathankot+Punjab",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Sujanpur%2C%20Pathankot%2C%20Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // Operating Hours (in 24-hour IST format: "HH:MM")
  // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
  schedule: [
    {
      days: [1, 2, 3, 4, 5, 6],
      dayLabel: {
        en: "Monday to Saturday",
        hi: "सोमवार से शनिवार",
        pa: "ਸੋਮਵਾਰ ਤੋਂ ਸ਼ਨੀਵਾਰ"
      },
      open: "09:00",
      close: "20:00"
    },
    {
      days: [0],
      dayLabel: {
        en: "Sunday",
        hi: "रविवार",
        pa: "ਐਤਵਾਰ"
      },
      open: "10:00",
      close: "17:00"
    }
  ],

  // Announcement Banners
  admissionBanner: {
    enabled: true, // Set to false to hide this banner
    text: {
      en: "🎓 Admissions Open for Computer Courses & Tuition Classes (1st to 12th & College)! Contact us today.",
      hi: "🎓 कंप्यूटर कोर्स और ट्यूशन क्लास (1st से 12th एवं कॉलेज) के लिए दाखिला शुरू! आज ही संपर्क करें।",
      pa: "🎓 ਕੰਪਿਊਟਰ ਕੋਰਸਾਂ ਅਤੇ ਟਿਊਸ਼ਨ ਕਲਾਸਾਂ (1st ਤੋਂ 12th ਅਤੇ ਕਾਲਜ) ਲਈ ਦਾਖਲੇ ਸ਼ੁਰੂ! ਅੱਜ ਹੀ ਸੰਪਰਕ ਕਰੋ।"
    }
  },

  // Latest Updates Strip (Form deadlines, new services, notifications)
  // If array is empty [], this section will be hidden automatically
  latestUpdates: [
    {
      id: "up-1",
      badge: { en: "Important", hi: "जरूरी", pa: "ਜ਼ਰੂਰੀ" },
      text: {
        en: "Aadhaar demographic update (Mobile, Address, Name correction) & Biometric updates available.",
        hi: "आधार डेमोग्राफिक अपडेट (मोबाइल नंबर, पता, नाम सुधार) और बायोमेट्रिक सेवा उपलब्ध है।",
        pa: "ਆਧਾਰ ਡੈਮੋਗ੍ਰਾਫਿਕ ਅੱਪਡੇਟ (ਮੋਬਾਈਲ, ਪਤਾ, ਨਾਮ ਸੁਧਾਰ) ਅਤੇ ਬਾਇਓਮੀਟ੍ਰਿਕ ਸੇਵਾ ਉਪਲਬਧ ਹੈ।"
      }
    },
    {
      id: "up-2",
      badge: { en: "Forms", hi: "फॉर्म", pa: "ਫਾਰਮ" },
      text: {
        en: "Latest Central & Punjab Govt Job Online Applications and Scholarship forms are being filled.",
        hi: "केंद्र एवं पंजाब सरकार की नौकरियों और स्कॉलरशिप (छात्रवृत्ति) के ऑनलाइन फॉर्म भरे जा रहे हैं।",
        pa: "ਕੇਂਦਰ ਅਤੇ ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਨੌਕਰੀਆਂ ਅਤੇ ਸਕਾਲਰਸ਼ਿਪ ਫਾਰਮ ਭਰੇ ਜਾ ਰਹੇ ਹਨ।"
      }
    },
    {
      id: "up-3",
      badge: { en: "Notice", hi: "सूचना", pa: "ਸੂਚਨਾ" },
      text: {
        en: "Ayushman Card (Free Health Card) and Ration Card e-KYC service active at our counter.",
        hi: "आयुष्मान कार्ड (मुफ्त इलाज कार्ड) और राशन कार्ड ई-केवाईसी सेवा हमारे काउंटर पर चालू है।",
        pa: "ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਅਤੇ ਰਾਸ਼ਨ ਕਾਰਡ ਈ-ਕੇਵਾਈਸੀ ਸੇਵਾ ਸਾਡੇ ਕਾਊਂਟਰ 'ਤੇ ਉਪਲਬਧ ਹੈ।"
      }
    }
  ],

  // Service Categories for instant filter buttons
  serviceCategories: [
    { id: "all", label: { en: "All Services", hi: "सभी सेवाएं", pa: "ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ" } },
    { id: "identity", label: { en: "ID & Citizen Cards", hi: "पहचान एवं सरकारी कार्ड", pa: "ਪਛਾਣ ਅਤੇ ਕਾਰਡ" } },
    { id: "forms", label: { en: "Online Forms & Jobs", hi: "ऑनलाइन फॉर्म व नौकरी", pa: "ਆਨਲਾਈਨ ਫਾਰਮ" } },
    { id: "utility", label: { en: "Bills & Printing", hi: "बिल व प्रिंटिंग", pa: "ਬਿੱਲ ਅਤੇ ਪ੍ਰਿੰਟਿੰਗ" } },
    { id: "banking", label: { en: "Banking & Travel", hi: "बैंकिंग व यात्रा", pa: "ਬੈਂਕਿੰਗ ਅਤੇ ਯਾਤਰਾ" } }
  ],

  // Main Cyber Cafe Services (Primary Business)
  // Fees and Time are left blank ("") as requested for the owner to verify and fill.
  // When blank, UI displays "Call for price" and "Contact shop".
  services: [
    {
      id: "online-forms",
      category: "forms",
      title: {
        en: "Online Government Forms & Job Applications",
        hi: "सरकारी नौकरी एवं प्रतियोगी परीक्षा फॉर्म",
        pa: "ਸਰਕਾਰੀ ਨੌਕਰੀ ਅਤੇ ਮੁਕਾਬਲੇ ਦੇ ਫਾਰਮ"
      },
      summary: {
        en: "Accurate online submission for Central, Punjab Govt, Army, Police, SSC, and Railway jobs.",
        hi: "केंद्र, पंजाब सरकार, सेना, पुलिस, एसएससी और रेलवे नौकरियों के ऑनलाइन फॉर्म सुरक्षित भरवाएं।",
        pa: "ਕੇਂਦਰ, ਪੰਜਾਬ ਸਰਕਾਰ, ਫੌਜ, ਪੁਲਿਸ, ਐਸ.ਐਸ.ਸੀ ਅਤੇ ਰੇਲਵੇ ਨੌਕਰੀਆਂ ਦੇ ਆਨਲਾਈਨ ਫਾਰਮ।"
      },
      fee: "", // Owner can set e.g. "₹50 - ₹100"
      time: "", // Owner can set e.g. "15-20 Mins"
      documents: {
        en: [
          "[DRAFT] Recent passport size photograph (white/light background)",
          "[DRAFT] Candidate signature on clean white paper",
          "[DRAFT] 10th / 12th / Graduation Marksheet and Certificate",
          "[DRAFT] Aadhaar Card / ID proof",
          "[DRAFT] Category / Caste / Domicile Certificate (if applicable)",
          "[DRAFT] Active mobile number & email ID for OTP"
        ],
        hi: [
          "[प्रारूप] हाल ही का पासपोर्ट साइज फोटो",
          "[प्रारूप] सादे सफेद कागज पर उम्मीदवार के हस्ताक्षर",
          "[प्रारूप] 10वीं / 12वीं / स्नातक अंकतालिका व प्रमाण पत्र",
          "[प्रारूप] आधार कार्ड / पहचान पत्र",
          "[प्रारूप] जाति / निवास प्रमाण पत्र (यदि लागू हो)",
          "[प्रारूप] ओटीपी के लिए चालू मोबाइल नंबर और ईमेल आईडी"
        ]
      },
      whatsappQuery: "Hi, I want to inquire about applying for an Online Government Form."
    },
    {
      id: "pan-card",
      category: "identity",
      title: {
        en: "PAN Card (New & Correction)",
        hi: "पैन कार्ड (नया एवं संशोधन/सुधार)",
        pa: "ਪੈਨ ਕਾਰਡ (ਨਵਾਂ ਅਤੇ ਸੁਧਾਰ)"
      },
      summary: {
        en: "Fresh PAN card application or correction in name, father's name, or date of birth.",
        hi: "नया पैन कार्ड बनवाएं अथवा नाम, पिता का नाम या जन्मतिथि में सुधार कराएं।",
        pa: "ਨਵਾਂ ਪੈਨ ਕਾਰਡ ਬਣਵਾਓ ਜਾਂ ਨਾਮ/ਜਨਮ ਤਰੀਕ ਵਿੱਚ ਸੋਧ ਕਰਵਾਓ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Aadhaar Card (linked with active mobile for instant OTP e-KYC)",
          "[DRAFT] 2 Passport size color photographs (if manual physical form)",
          "[DRAFT] Proof of Date of Birth (Aadhaar or 10th Certificate)",
          "[DRAFT] Existing PAN copy (for correction / reprint requests)"
        ],
        hi: [
          "[प्रारूप] आधार कार्ड (ओटीपी के लिए मोबाइल से लिंक होना आवश्यक)",
          "[प्रारूप] 2 पासपोर्ट साइज रंगीन फोटो",
          "[प्रारूप] जन्मतिथि का प्रमाण (आधार या 10वीं मार्कशीट)",
          "[प्रारूप] पुराने पैन कार्ड की कॉपी (यदि सुधार या दोबारा मंगवाना हो)"
        ]
      },
      whatsappQuery: "Hi, I want to apply for a PAN card (New / Correction)."
    },
    {
      id: "aadhaar-services",
      category: "identity",
      title: {
        en: "Aadhaar Services & Demographic Update",
        hi: "आधार सेवाएं एवं डेमोग्राफिक अपडेट",
        pa: "ਆਧਾਰ ਸੇਵਾਵਾਂ ਅਤੇ ਡੈਮੋਗ੍ਰਾਫਿਕ ਅੱਪਡੇਟ"
      },
      summary: {
        en: "Aadhaar download, PVC plastic card order, mobile number linking guidance, and address update.",
        hi: "आधार डाउनलोड, पीवीसी प्लास्टिक कार्ड, पता सुधार और दस्तावेज नवीनीकरण सहायता।",
        pa: "ਆਧਾਰ ਕਾਰਡ ਡਾਊਨਲੋਡ, ਪੀਵੀਸੀ ਕਾਰਡ ਆਰਡਰ ਅਤੇ ਪਤਾ ਅੱਪਡੇਟ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Aadhaar number or 28-digit Enrolment ID (EID)",
          "[DRAFT] Mobile phone linked with Aadhaar to receive OTP",
          "[DRAFT] Valid Address Proof (Voter ID, Electricity bill, Bank passbook) for address update"
        ],
        hi: [
          "[प्रारूप] आधार नंबर या 28 अंकों की नामांकन पर्ची (EID)",
          "[प्रारूप] ओटीपी प्राप्त करने के लिए आधार से लिंक मोबाइल फोन",
          "[प्रारूप] पते के प्रमाण हेतु दस्तावेज (वोटर कार्ड, बिजली बिल, बैंक पासबुक)"
        ]
      },
      whatsappQuery: "Hi, I need help with Aadhaar card download / update."
    },
    {
      id: "ration-card",
      category: "identity",
      title: {
        en: "Ration Card Services & e-KYC",
        hi: "राशन कार्ड सेवाएं एवं ई-केवाईसी",
        pa: "ਰਾਸ਼ਨ ਕਾਰਡ ਸੇਵਾਵਾਂ ਅਤੇ ਈ-ਕੇਵਾਈਸੀ"
      },
      summary: {
        en: "Punjab smart ration card check, family member addition, e-KYC, and slip download.",
        hi: "राशन कार्ड विवरण जांच, परिवार के सदस्यों का नाम जोड़ना और ई-केवाईसी सहायता।",
        pa: "ਰਾਸ਼ਨ ਕਾਰਡ ਵੇਰਵੇ, ਨਵੇਂ ਜੀਅ ਦਾ ਨਾਮ ਚੜ੍ਹਾਉਣਾ ਅਤੇ ਈ-ਕੇਵਾਈਸੀ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Existing Ration card number or family head Aadhaar",
          "[DRAFT] Aadhaar cards of all family members",
          "[DRAFT] Bank passbook copy of the family head (women head where required)",
          "[DRAFT] Passport size photo of family head"
        ],
        hi: [
          "[प्रारूप] पुराना राशन कार्ड या मुखिया का आधार कार्ड",
          "[प्रारूप] परिवार के सभी सदस्यों के आधार कार्ड",
          "[प्रारूप] परिवार के मुखिया की बैंक पासबुक की कॉपी",
          "[प्रारूप] परिवार के मुखिया का पासपोर्ट साइज फोटो"
        ]
      },
      whatsappQuery: "Hi, I want to inquire about Ration Card services / e-KYC."
    },
    {
      id: "passport-apply",
      category: "identity",
      title: {
        en: "Passport Online Application & Appointment",
        hi: "पासपोर्ट ऑनलाइन आवेदन एवं अपॉइंटमेंट",
        pa: "ਪਾਸਪੋਰਟ ਆਨਲਾਈਨ ਅਪਲਾਈ ਅਤੇ ਅਪੁਆਇੰਟਮੈਂਟ"
      },
      summary: {
        en: "Online submission of fresh/renewal Indian passport application and slot booking for PSK/POPSK.",
        hi: "नए अथवा रिन्यूअल पासपोर्ट का ऑनलाइन फॉर्म और पासपोर्ट सेवा केंद्र अपॉइंटमेंट बुकिंग।",
        pa: "ਨਵੇਂ ਜਾਂ ਰਿਨਿਊ ਪਾਸਪੋਰਟ ਦਾ ਆਨਲਾਈਨ ਫਾਰਮ ਅਤੇ ਅਪੁਆਇੰਟਮੈਂਟ ਬੁਕਿੰਗ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Aadhaar card (mandatory)",
          "[DRAFT] 10th Class certificate (mandatory for Non-ECR status)",
          "[DRAFT] Bank account passbook with photo & bank stamp (last 1 year statement)",
          "[DRAFT] PAN card / Voter ID (if available)",
          "[DRAFT] Old passport copy (for renewal applications)"
        ],
        hi: [
          "[प्रारूप] आधार कार्ड (अनिवार्य)",
          "[प्रारूप] 10वीं कक्षा का प्रमाण पत्र (Non-ECR पासपोर्ट हेतु)",
          "[प्रारूप] फोटो व मुहर सहित बैंक पासबुक (1 वर्ष का विवरण)",
          "[प्रारूप] पैन कार्ड या वोटर कार्ड (यदि उपलब्ध हो)",
          "[प्रारूप] पुराना पासपोर्ट (रिन्यूअल की स्थिति में)"
        ]
      },
      whatsappQuery: "Hi, I want to apply for a Passport and book an appointment."
    },
    {
      id: "bill-payments",
      category: "utility",
      title: {
        en: "Utility Bill Payments & Recharge",
        hi: "बिजली/पानी बिल भुगतान एवं रिचार्ज",
        pa: "ਬਿਜਲੀ/ਪਾਣੀ ਬਿੱਲ ਭੁਗਤਾਨ ਅਤੇ ਰੀਚਾਰਜ"
      },
      summary: {
        en: "Instant PSPCL electricity bill payment, water bills, mobile and DTH recharges with receipt.",
        hi: "पंजाब बिजली बोर्ड (PSPCL) बिल, पानी का बिल, मोबाइल रिचार्ज और तुरंत पक्की रसीद।",
        pa: "ਪੰਜਾਬ ਬਿਜਲੀ ਬੋਰਡ ਬਿੱਲ, ਪਾਣੀ ਦਾ ਬਿੱਲ, ਮੋਬਾਈਲ ਰੀਚਾਰਜ ਅਤੇ ਪੱਕੀ ਰਸੀਦ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Latest Electricity Bill or Consumer Account Number",
          "[DRAFT] Mobile number for SMS confirmation",
          "[DRAFT] Bill copy / account number for other utilities"
        ],
        hi: [
          "[प्रारूप] नवीनतम बिजली बिल या खाता नंबर (Consumer Number)",
          "[प्रारूप] पुष्टिकरण हेतु मोबाइल नंबर",
          "[प्रारूप] अन्य बिलों हेतु खाता संख्या"
        ]
      },
      whatsappQuery: "Hi, I want to pay my electricity / utility bill."
    },
    {
      id: "print-scan-xerox",
      category: "utility",
      title: {
        en: "Printout, Color Xerox & Scanning",
        hi: "प्रिंटआउट, रंगीन फोटोकॉपी एवं स्कैनिंग",
        pa: "ਪ੍ਰਿੰਟਆਊਟ, ਰੰਗੀਨ ਫੋਟੋਸਟੇਟ ਅਤੇ ਸਕੈਨਿੰਗ"
      },
      summary: {
        en: "High-speed Black & White / Color printing, document scanning to PDF, WhatsApp document printing.",
        hi: "हाई स्पीड ब्लैक/व्हाइट व रंगीन प्रिंट, डॉक्यूमेंट स्कैनिंग (PDF), और लेमिनेशन।",
        pa: "ਤੇਜ਼ ਬਲੈਕ/ਵਾਈਟ ਅਤੇ ਰੰਗੀਨ ਪ੍ਰਿੰਟ, ਸਕੈਨਿੰਗ ਅਤੇ ਲੈਮੀਨੇਸ਼ਨ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Original documents for Photocopy / Scan / Lamination",
          "[DRAFT] Or send soft copy (PDF/Image) via WhatsApp or Pen Drive"
        ],
        hi: [
          "[प्रारूप] फोटोकॉपी या स्कैन के लिए मूल दस्तावेज",
          "[प्रारूप] या व्हाट्सएप / पेन ड्राइव द्वारा फाइल (PDF/फोटो) भेजें"
        ]
      },
      whatsappQuery: "Hi, I need urgent document printing / scanning service."
    },
    {
      id: "csc-services",
      category: "forms",
      title: {
        en: "CSC Citizen Services & Certificates",
        hi: "सीएससी नागरिक सेवाएं एवं प्रमाण पत्र",
        pa: "ਸੀ.ਐਸ.ਸੀ ਨਾਗਰਿਕ ਸੇਵਾਵਾਂ ਅਤੇ ਸਰਟੀਫਿਕੇਟ"
      },
      summary: {
        en: "Income certificate, Caste certificate, Residence (Domicile), Rural area certificate applications.",
        hi: "आय प्रमाण पत्र, जाति प्रमाण पत्र, मूल निवास (डोमिसाइल) एवं अन्य सरकारी प्रमाण पत्र।",
        pa: "ਆਮਦਨ ਸਰਟੀਫਿਕੇਟ, ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ, ਰਿਹਾਇਸ਼ੀ ਸਰਟੀਫਿਕੇਟ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Applicant & Father Aadhaar card",
          "[DRAFT] Ration card copy",
          "[DRAFT] Sarpanch / Municipal Councilor report / verification form",
          "[DRAFT] Passport size photo",
          "[DRAFT] Previous certificate copy (if applying for renewal/extension)"
        ],
        hi: [
          "[प्रारूप] आवेदक व पिता का आधार कार्ड",
          "[प्रारूप] राशन कार्ड की प्रति",
          "[प्रारूप] सरपंच / पार्षद द्वारा सत्यापित फॉर्म",
          "[प्रारूप] पासपोर्ट साइज फोटो",
          "[प्रारूप] पुराना प्रमाण पत्र (यदि नवीनीकरण हो)"
        ]
      },
      whatsappQuery: "Hi, I want to apply for a Domicile / Income / Caste Certificate through CSC."
    },
    {
      id: "gst-registration",
      category: "forms",
      title: {
        en: "GST Registration & Return Filing Assistance",
        hi: "जीएसटी रजिस्ट्रेशन एवं रिटर्न सहायता",
        pa: "ਜੀ.ਐਸ.ਟੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਰਿਟਰਨ ਸਹਾਇਤਾ"
      },
      summary: {
        en: "New GST number registration for local shops and traders, basic return guidance & invoicing.",
        hi: "दुकानदारों व व्यापारियों के लिए नया जीएसटी नंबर पंजीकरण एवं रिटर्न परामर्श।",
        pa: "ਦੁਕਾਨਦਾਰਾਂ ਅਤੇ ਵਪਾਰੀਆਂ ਲਈ ਨਵਾਂ ਜੀਐਸਟੀ ਨੰਬਰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] PAN card of proprietor / business",
          "[DRAFT] Aadhaar card of proprietor",
          "[DRAFT] Business address proof (Electricity bill / Rent agreement)",
          "[DRAFT] Bank account statement or cancelled cheque",
          "[DRAFT] Passport photo of owner"
        ],
        hi: [
          "[प्रारूप] व्यापारी / प्रोपराइटर का पैन कार्ड",
          "[प्रारूप] प्रोपराइटर का आधार कार्ड",
          "[प्रारूप] दुकान / व्यापार स्थल का बिजली बिल या किरायानामा",
          "[प्रारूप] बैंक पासबुक या कैंसिल्ड चेक",
          "[प्रारूप] प्रोपराइटर का फोटो"
        ]
      },
      whatsappQuery: "Hi, I want to inquire about GST Registration for my business."
    },
    {
      id: "travel-booking",
      category: "banking",
      title: {
        en: "Railway, Bus & Flight Booking",
        hi: "रेलवे, बस एवं हवाई टिकट बुकिंग",
        pa: "ਰੇਲਵੇ, ਬੱਸ ਅਤੇ ਹਵਾਈ ਟਿਕਟ ਬੁਕਿੰਗ"
      },
      summary: {
        en: "IRCTC train ticket reservation, Punjab Roadways / Volvo bus tickets, domestic flight booking.",
        hi: "आईआरसीटीसी ट्रेन टिकट आरक्षण, बस बुकिंग, फ्लाइट टिकट एवं तत्काल सहायता।",
        pa: "ਟਰੇਨ ਟਿਕਟ, ਬੱਸ ਟਿਕਟ ਅਤੇ ਹਵਾਈ ਜਹਾਜ਼ ਦੀਆਂ ਟਿਕਟਾਂ ਦੀ ਬੁਕਿੰਗ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Passenger names, ages, and gender details",
          "[DRAFT] Preferred date of travel, train/bus choice, and travel class",
          "[DRAFT] Government ID proof details (Aadhaar / Voter ID)"
        ],
        hi: [
          "[प्रारूप] यात्रियों के नाम, उम्र और लिंग का विवरण",
          "[प्रारूप] यात्रा की तारीख, ट्रेन/बस का नाम और क्लास",
          "[प्रारूप] पहचान पत्र विवरण (आधार / वोटर आईडी)"
        ]
      },
      whatsappQuery: "Hi, I want to book a Train / Bus / Flight ticket."
    },
    {
      id: "fastag-services",
      category: "banking",
      title: {
        en: "FASTag Issue & Instant Recharge",
        hi: "फास्टैग जारी करना एवं तुरंत रिचार्ज",
        pa: "ਫਾਸਟੈਗ ਜਾਰੀ ਕਰਨਾ ਅਤੇ ਰੀਚਾਰਜ"
      },
      summary: {
        en: "New vehicle FASTag sticker issue and instant wallet balance recharge for toll plazas.",
        hi: "कार/गाड़ी के लिए नया फास्टैग स्टीकर जारी कराना एवं टोल हेतु तुरंत रिचार्ज।",
        pa: "ਗੱਡੀਆਂ ਲਈ ਨਵਾਂ ਫਾਸਟੈਗ ਅਤੇ ਤੁਰੰਤ ਰੀਚਾਰਜ ਸੇਵਾ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Vehicle Registration Certificate (RC)",
          "[DRAFT] Vehicle owner's Aadhaar card",
          "[DRAFT] Owner's mobile number for FASTag activation"
        ],
        hi: [
          "[प्रारूप] वाहन की आरसी (Registration Certificate)",
          "[प्रारूप] वाहन मालिक का आधार कार्ड",
          "[प्रारूप] सक्रिय मोबाइल नंबर"
        ]
      },
      whatsappQuery: "Hi, I want to get a new FASTag or recharge my vehicle FASTag."
    },
    {
      id: "paytm-kyc",
      category: "banking",
      title: {
        en: "Paytm Full KYC Point",
        hi: "पेटीएम फुल केवाईसी (Paytm KYC)",
        pa: "ਪੇਟੀਐਮ ਫੁੱਲ ਕੇਵਾਈਸੀ"
      },
      summary: {
        en: "Biometric Aadhaar based verification for Paytm wallet & savings account upgrade.",
        hi: "बायोमेट्रिक फिंगरप्रिंट द्वारा पेटीएम वॉलेट और अकाउंट की फुल केवाईसी करवाएं।",
        pa: "ਪੇਟੀਐਮ ਵਾਲਿਟ ਅਤੇ ਬੈਂਕ ਖਾਤੇ ਦੀ ਬਾਇਓਮੀਟ੍ਰਿਕ ਕੇਵਾਈਸੀ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Original Aadhaar Card",
          "[DRAFT] Original PAN Card (if available)",
          "[DRAFT] Active smartphone with Paytm app logged in"
        ],
        hi: [
          "[प्रारूप] मूल आधार कार्ड (ओरिजिनल)",
          "[प्रारूप] मूल पैन कार्ड (यदि बना हो)",
          "[प्रारूप] पेटीएम ऐप में लॉगिन किया हुआ मोबाइल फोन"
        ]
      },
      whatsappQuery: "Hi, I want to complete my Paytm KYC at your shop."
    },
    {
      id: "nps-services",
      category: "banking",
      title: {
        en: "National Pension Scheme (NPS)",
        hi: "राष्ट्रीय पेंशन योजना (NPS) खाता",
        pa: "ਨੈਸ਼ਨਲ ਪੈਨਸ਼ਨ ਸਕੀਮ (NPS)"
      },
      summary: {
        en: "NPS Tier I & Tier II account opening, contribution deposits, and PRAN card generation.",
        hi: "एनपीएस खाता खुलवाना, अंशदान जमा करना और प्रान (PRAN) कार्ड प्राप्त करना।",
        pa: "ਐਨ.ਪੀ.ਐਸ ਖਾਤਾ ਖੋਲ੍ਹਣਾ ਅਤੇ ਪ੍ਰਾਨ ਕਾਰਡ ਸੇਵਾ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Aadhaar card and PAN card",
          "[DRAFT] Bank account details (cheque or passbook copy)",
          "[DRAFT] Passport size photograph",
          "[DRAFT] Nominee details and identification"
        ],
        hi: [
          "[प्रारूप] आधार कार्ड एवं पैन कार्ड",
          "[प्रारूप] बैंक पासबुक या चेक की कॉपी",
          "[प्रारूप] पासपोर्ट साइज फोटो",
          "[प्रारूप] नॉमिनी का विवरण और पहचान"
        ]
      },
      whatsappQuery: "Hi, I want to open an NPS (National Pension Scheme) account."
    },
    {
      id: "health-card",
      category: "identity",
      title: {
        en: "Ayushman Card & ABHA Health ID",
        hi: "आयुष्मान भारत कार्ड एवं आभा हेल्थ आईडी",
        pa: "ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਅਤੇ ਆਭਾ ਹੈਲਥ ਆਈਡੀ"
      },
      summary: {
        en: "Check eligibility, apply for ₹5 Lakh free medical treatment card, and download plastic card.",
        hi: "5 लाख रुपये तक मुफ्त इलाज हेतु आयुष्मान कार्ड पात्रता जांच, आवेदन और प्रिंट।",
        pa: "5 ਲੱਖ ਰੁਪਏ ਤੱਕ ਮੁਫ਼ਤ ਇਲਾਜ ਲਈ ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਅਤੇ ਆਭਾ ਆਈਡੀ।"
      },
      fee: "",
      time: "",
      documents: {
        en: [
          "[DRAFT] Ration card (containing applicant's name)",
          "[DRAFT] Aadhaar card of the beneficiary",
          "[DRAFT] Mobile phone linked to Aadhaar for OTP"
        ],
        hi: [
          "[प्रारूप] राशन कार्ड (जिसमें परिवार का नाम हो)",
          "[प्रारूप] लाभार्थी का आधार कार्ड",
          "[प्रारूप] आधार से लिंक मोबाइल फोन"
        ]
      },
      whatsappQuery: "Hi, I want to check eligibility and apply for an Ayushman Health Card."
    }
  ],

  // Secondary Business: Computer Centre Courses (Kept subordinate)
  coursesSection: {
    title: {
      en: "Computer Education & Training",
      hi: "कंप्यूटर शिक्षा एवं प्रशिक्षण",
      pa: "ਕੰਪਿਊਟਰ ਸਿੱਖਿਆ ਅਤੇ ਸਿਖਲਾਈ"
    },
    badge: {
      en: "Skill Development",
      hi: "कौशल विकास",
      pa: "ਹੁਨਰ ਵਿਕਾਸ"
    },
    list: [
      {
        id: "c-basic",
        name: "Basic Computer Course",
        duration: "3 Months",
        desc: "Windows basics, MS Word, Excel, PowerPoint, Internet browsing, and Email communication."
      },
      {
        id: "c-tally",
        name: "Tally Prime with GST",
        duration: "3 to 6 Months",
        desc: "Professional accounting, vouchers, ledger, billing, inventory, and GST return fundamentals."
      },
      {
        id: "c-dca",
        name: "DCA (Diploma in Computer Applications)",
        duration: "6 Months",
        desc: "Comprehensive diploma covering IT fundamentals, office automation, database, and utilities."
      },
      {
        id: "c-adca",
        name: "ADCA (Advance Diploma in Comp. App.)",
        duration: "1 Year",
        desc: "Advanced computer diploma covering multimedia, software packages, advanced accounting, and web."
      },
      {
        id: "c-dtp",
        name: "DTP (Desktop Publishing)",
        duration: "3 Months",
        desc: "Graphic editing & publishing with CorelDRAW, Adobe Photoshop, and PageMaker for printing."
      },
      {
        id: "c-web",
        name: "Web Design (HTML & CSS)",
        duration: "3 Months",
        desc: "Modern web layout creation, HTML5 semantic structure, CSS3 responsive styling, and basic hosting."
      },
      {
        id: "c-typing",
        name: "Typing Course (English & Punjabi/Hindi)",
        duration: "Flexible Speed Batches",
        desc: "Touch typing technique, accuracy training, and speed building for government test clearances."
      }
    ]
  },

  // Secondary Business: Tuition Centre (Kept subordinate)
  tuitionSection: {
    title: {
      en: "Academic Tuition Centre",
      hi: "अकादमिक ट्यूशन सेंटर",
      pa: "ਅਕਾਦਮਿਕ ਟਿਊਸ਼ਨ ਸੈਂਟਰ"
    },
    badge: {
      en: "Classes 1 to 12 & College",
      hi: "कक्षा 1 से 12 एवं कॉलेज",
      pa: "ਕਲਾਸ 1 ਤੋਂ 12 ਅਤੇ ਕਾਲਜ"
    },
    schoolClasses: "Classes 1st to 12th (CBSE, PSEB & ICSE)",
    collegeClasses: "B.Com & BCA Degree Support",
    subjects: [
      "Accounts",
      "Economics",
      "Business Studies",
      "Mathematics",
      "General Science",
      "English & Spoken English"
    ],
    features: [
      { en: "Experienced teachers with dedicated attention", hi: "अनुभवी शिक्षकों द्वारा व्यक्तिगत मार्गदर्शन" },
      { en: "Small batches for better concept clarity", hi: "बेहतर समझ के लिए सीमित छात्र संख्या" },
      { en: "Regular weekly revision & progress tests", hi: "नियमित साप्ताहिक टेस्ट और पुनरावलोकन" },
      { en: "Special exam preparation & doubt sessions", hi: "परीक्षा की विशेष तैयारी और समस्या समाधान" }
    ]
  },

  // Frequently Asked Questions
  faq: [
    {
      q: {
        en: "What are your exact shop timings in Sujanpur?",
        hi: "सुजानपुर में आपकी दुकान का सही समय क्या है?",
        pa: "ਸੁਜਾਨਪੁਰ ਵਿੱਚ ਤੁਹਾਡੀ ਦੁਕਾਨ ਦਾ ਸਮਾਂ ਕੀ ਹੈ?"
      },
      a: {
        en: "We are open Monday to Saturday from 9:00 AM to 8:00 PM. On Sundays, we are open from 10:00 AM to 5:00 PM.",
        hi: "हम सोमवार से शनिवार सुबह 9:00 बजे से रात 8:00 बजे तक और रविवार को सुबह 10:00 बजे से शाम 5:00 बजे तक खुले रहते हैं।",
        pa: "ਅਸੀਂ ਸੋਮਵਾਰ ਤੋਂ ਸ਼ਨੀਵਾਰ ਸਵੇਰੇ 9:00 ਵਜੇ ਤੋਂ ਰਾਤ 8:00 ਵਜੇ ਤੱਕ ਅਤੇ ਐਤਵਾਰ ਸਵੇਰੇ 10:00 ਵਜੇ ਤੋਂ ਸ਼ਾਮ 5:00 ਵਜੇ ਤੱਕ ਖੁੱਲ੍ਹੇ ਹਾਂ।"
      }
    },
    {
      q: {
        en: "Can I send my documents on WhatsApp for urgent printing?",
        hi: "क्या मैं जरूरी प्रिंट के लिए दस्तावेज सीधे व्हाट्सएप पर भेज सकता हूँ?",
        pa: "ਕੀ ਮੈਂ ਪ੍ਰਿੰਟ ਲਈ ਦਸਤਾਵੇਜ਼ ਸਿੱਧੇ ਵਟਸਐਪ 'ਤੇ ਭੇਜ ਸਕਦਾ ਹਾਂ?"
      },
      a: {
        en: "Yes! You can WhatsApp your PDF documents or images to 75083-64975. Your printouts will be kept ready for pick-up when you arrive.",
        hi: "हाँ! आप अपने पीडीएफ या फोटो 75083-64975 पर व्हाट्सएप कर सकते हैं। आपके आने तक आपके प्रिंटआउट तैयार मिलेंगे।",
        pa: "ਹਾਂਜੀ! ਤੁਸੀਂ ਆਪਣੇ ਦਸਤਾਵੇਜ਼ 75083-64975 'ਤੇ ਵਟਸਐਪ ਕਰ ਸਕਦੇ ਹੋ ਅਤੇ ਆ ਕੇ ਪ੍ਰਿੰਟ ਲੈ ਸਕਦੇ ਹੋ।"
      }
    },
    {
      q: {
        en: "Do I need to book an appointment before visiting for online forms?",
        hi: "क्या ऑनलाइन फॉर्म भरवाने के लिए पहले अपॉइंटमेंट लेना होगा?",
        pa: "ਕੀ ਆਨਲਾਈਨ ਫਾਰਮ ਭਰਨ ਲਈ ਪਹਿਲਾਂ ਸਮਾਂ ਲੈਣਾ ਜ਼ਰੂਰੀ ਹੈ?"
      },
      a: {
        en: "No appointment needed! You can walk directly into our shop during working hours with your documents. For long forms, visiting during morning hours is recommended.",
        hi: "किसी अपॉइंटमेंट की आवश्यकता नहीं है! आप कार्य समय में अपने जरूरी दस्तावेजों के साथ सीधे आ सकते हैं।",
        pa: "ਕਿਸੇ ਅਪੁਆਇੰਟਮੈਂਟ ਦੀ ਲੋੜ ਨਹੀਂ। ਤੁਸੀਂ ਆਪਣੇ ਜ਼ਰੂਰੀ ਦਸਤਾਵੇਜ਼ ਲੈ ਕੇ ਸਿੱਧੇ ਆ ਸਕਦੇ ਹੋ।"
      }
    },
    {
      q: {
        en: "What should I bring for PAN Card application?",
        hi: "पैन कार्ड बनवाने के लिए क्या दस्तावेज साथ लाने चाहिए?",
        pa: "ਪੈਨ ਕਾਰਡ ਬਣਵਾਉਣ ਲਈ ਕਿਹੜੇ ਕਾਗਜ਼ਾਤ ਚਾਹੀਦੇ ਹਨ?"
      },
      a: {
        en: "Bring your Aadhaar card (ensure your mobile number is active for OTP) and 2 passport size photographs. If mobile is not linked, we can still process through alternative verification.",
        hi: "अपना आधार कार्ड (ओटीपी के लिए मोबाइल चालू रखें) और 2 पासपोर्ट फोटो साथ लाएं।",
        pa: "ਆਪਣਾ ਆਧਾਰ ਕਾਰਡ ਅਤੇ 2 ਪਾਸਪੋਰਟ ਸਾਈਜ਼ ਫੋਟੋਆਂ ਲੈ ਕੇ ਆਓ।"
      }
    },
    {
      q: {
        en: "How do I enroll for Computer courses or Tuition?",
        hi: "कंप्यूटर कोर्स या ट्यूशन में प्रवेश कैसे लें?",
        pa: "ਕੰਪਿਊਟਰ ਕੋਰਸ ਜਾਂ ਟਿਊਸ਼ਨ ਵਿੱਚ ਦਾਖਲਾ ਕਿਵੇਂ ਲਈਏ?"
      },
      a: {
        en: "You can click the 'Ask on WhatsApp' button or visit Swastik Cyber Cafe directly to discuss syllabus, batch timings, and fee structures.",
        hi: "आप 'व्हाट्सएप पर पूछें' बटन दबाकर या सीधे केंद्र पर आकर बैच के समय और फीस की जानकारी ले सकते हैं।",
        pa: "ਤੁਸੀਂ ਵਟਸਐਪ 'ਤੇ ਪੁੱਛ ਸਕਦੇ ਹੋ ਜਾਂ ਸਿੱਧਾ ਸੈਂਟਰ ਆ ਕੇ ਜਾਣਕਾਰੀ ਲੈ ਸਕਦੇ ਹੋ।"
      }
    }
  ],

  // Useful Government Links (Placeholders for owner verification)
  usefulLinks: [
    {
      title: "UIDAI MyAadhaar Portal",
      category: "Aadhaar Services",
      desc: "Check Aadhaar status, download e-Aadhaar, check linked mobile.",
      url: "https://myaadhaar.uidai.gov.in"
    },
    {
      title: "UTIITSL PAN Verification",
      category: "PAN Card",
      desc: "Track status of new PAN card application and correction requests.",
      url: "https://www.trackpan.utiitsl.com"
    },
    {
      title: "Passport Seva Kendra",
      category: "Passport",
      desc: "Official portal for passport fee payment and appointment status.",
      url: "https://www.passportindia.gov.in"
    },
    {
      title: "Punjab Citizen Portal (e-District)",
      category: "Punjab Govt",
      desc: "Official portal for Punjab domicile, caste, and income certificates.",
      url: "https://edistrict.punjab.gov.in"
    },
    {
      title: "National Health Authority (ABHA)",
      category: "Ayushman",
      desc: "Create and download official ABHA Digital Health Card.",
      url: "https://abdm.gov.in"
    },
    {
      title: "EPFO Member Portal (UAN)",
      category: "Provident Fund",
      desc: "Member passbook, KYC update, and PF claim status.",
      url: "https://unifiedportal-mem.epfindia.gov.in"
    }
  ],

  // Localization Dictionary for Static UI
  i18n: {
    en: {
      siteName: "Swastik Cyber Cafe",
      siteTagline: "Sab kuch ek hi jagah",
      admissionTag: "Admission Open",
      callUs: "Call 75083-64975",
      callSecondary: "Call 76819-20047",
      callNow: "Call Now",
      whatsAppUs: "WhatsApp Us",
      askOnWhatsApp: "Ask on WhatsApp",
      quickCall: "Quick Call",
      searchPlaceholder: "Search services (e.g., PAN, Aadhaar, Ration, Form, Print...)",
      documentsNeeded: "Documents Needed (Checklist)",
      draftNotice: "DRAFT list — Please confirm exact requirements with shop",
      feeLabel: "Estimated Fee:",
      timeLabel: "Time Taken:",
      callForPrice: "Call for price",
      contactShop: "Contact shop",
      enquireService: "Enquire on WhatsApp",
      noServicesFound: "No services match your search query. Try searching 'forms', 'pan', 'card' or call us directly.",
      clearSearch: "Clear search",
      ourServices: "Our Cyber Cafe & Citizen Services",
      servicesSubtitle: "Fast, accurate and transparent assistance for all online and identity services.",
      workingHoursTitle: "Shop Working Hours & Location",
      workingHoursSubtitle: "Located conveniently in Sujanpur, Distt. Pathankot.",
      openNow: "Open now",
      closedNow: "Closed now",
      closesAt: "Closes at",
      opensAt: "Opens at",
      opensTomorrow: "Opens tomorrow at",
      getDirections: "Get Directions on Google Maps",
      loadMap: "Click to load interactive map (saves mobile data)",
      mapLoading: "Loading map...",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Quick answers to common questions about our shop and services.",
      usefulLinksTitle: "Official Citizen Portals",
      usefulLinksSubtitle: "Quick links to official government verification websites.",
      externalLinkNotice: "Opens official external portal",
      alsoAtSwastik: "Also at Swastik: Education & Coaching",
      alsoSubtitle: "Computer skills training and school/college academic tuition in Sujanpur.",
      viewCourses: "Computer Courses",
      viewTuition: "School & College Tuition",
      coursesDuration: "Duration:",
      printFlyerNotice: "Shop Owner / Customer Poster",
      printFlyerLink: "Open Printable Shop Poster with QR Code",
      disclaimer: "Disclaimer: Swastik Cyber Cafe is an independent local service and facilitation centre. We are not an official government body. We assist citizens with online forms, kiosk submissions, and educational training.",
      allRights: "All rights reserved.",
      tuitionAskMsg: "Hi Swastik Cafe, I would like to inquire about tuition classes / computer courses."
    },
    hi: {
      siteName: "स्वस्तिक साइबर कैफे",
      siteTagline: "सब कुछ एक ही जगह",
      admissionTag: "दाखिला शुरू",
      callUs: "कॉल करें 75083-64975",
      callSecondary: "कॉल करें 76819-20047",
      callNow: "कॉल करें",
      whatsAppUs: "व्हाट्सएप करें",
      askOnWhatsApp: "व्हाट्सएप पर पूछें",
      quickCall: "कॉल करें",
      searchPlaceholder: "सेवा खोजें (जैसे: पैन, आधार, राशन, फॉर्म, प्रिंट...)",
      documentsNeeded: "आवश्यक दस्तावेज (चेकलिस्ट)",
      draftNotice: "प्रारूप सूची — कृपया दुकान पर अंतिम पुष्टि करें",
      feeLabel: "अनुमानित शुल्क:",
      timeLabel: "समय:",
      callForPrice: "मूल्य हेतु कॉल करें",
      contactShop: "दुकान से संपर्क करें",
      enquireService: "व्हाट्सएप पर पूछताछ करें",
      noServicesFound: "आपकी खोज के अनुसार कोई सेवा नहीं मिली। कृपया सीधे कॉल या व्हाट्सएप करें।",
      clearSearch: "खोज हटाएं",
      ourServices: "हमारी सेवाएं एवं नागरिक सहायता",
      servicesSubtitle: "सभी ऑनलाइन फॉर्म और सरकारी सेवाओं के लिए त्वरित एवं विश्वसनीय समाधान।",
      workingHoursTitle: "दुकान का समय एवं पता",
      workingHoursSubtitle: "सुजानपुर, जिला पठानकोट (पंजाब) में स्थित।",
      openNow: "दुकान खुली है",
      closedNow: "दुकान बंद है",
      closesAt: "बंद होगी",
      opensAt: "खुलेगी",
      opensTomorrow: "कल खुलेगी",
      getDirections: "गूगल मैप्स पर रास्ता देखें",
      loadMap: "गूगल मैप लोड करें (डाटा बचाने के लिए क्लिक करें)",
      mapLoading: "मैप लोड हो रहा है...",
      faqTitle: "अक्सर पूछे जाने वाले सवाल (FAQ)",
      faqSubtitle: "हमारी सेवाओं और समय से जुड़े सामान्य प्रश्नों के उत्तर।",
      usefulLinksTitle: "महत्वपूर्ण सरकारी पोर्टल",
      usefulLinksSubtitle: "आधिकारिक सरकारी वेबसाइटों के त्वरित लिंक।",
      externalLinkNotice: "आधिकारिक बाहरी पोर्टल खुलेगा",
      alsoAtSwastik: "स्वस्तिक में और भी: कंप्यूटर कोर्स व ट्यूशन",
      alsoSubtitle: "सुजानपुर में बुनियादी व एडवांस कंप्यूटर ट्रेनिंग और 1st से 12th ट्यूशन।",
      viewCourses: "कंप्यूटर कोर्स",
      viewTuition: "अकादमिक ट्यूशन",
      coursesDuration: "अवधि:",
      printFlyerNotice: "दुकान पोस्टर / प्रिंट",
      printFlyerLink: "QR कोड के साथ प्रिंट करने योग्य दुकान का पोस्टर खोलें",
      disclaimer: "अस्वीकरण: स्वस्तिक साइबर कैफे एक स्वतंत्र स्थानीय सेवा केंद्र है। यह कोई सरकारी विभाग नहीं है। हम नागरिकों को ऑनलाइन फॉर्म, कियोस्क सेवाओं और शिक्षा में सहायता प्रदान करते हैं।",
      allRights: "सर्वाधिकार सुरक्षित।",
      tuitionAskMsg: "नमस्ते स्वस्तिक कैफे, मुझे कंप्यूटर कोर्स / ट्यूशन के संबंध में जानकारी चाहिए।"
    }
  }
};
