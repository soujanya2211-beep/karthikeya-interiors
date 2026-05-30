/* ===== Karthikieya Interiors ===== */
(function () {
  "use strict";

  const WHATSAPP_NUMBER = "919052335011"; // country code + number, no +

  /* ---------- i18n dictionary ---------- */
  const I18N = {
    en: {
      nav_services: "Services", nav_why: "Why Us", nav_portfolio: "Portfolio", nav_about: "About", nav_contact: "Contact", nav_quote: "Get Quote",
      hero_eyebrow: "Hyderabad's Affordable Luxury Interiors",
      hero_title: "Designing Dreams,<br />Creating Spaces.",
      hero_tagline: "Designing Dreams • Creating Spaces • Delivering Comfort",
      hero_sub: "Complete residential & commercial interior solutions — from concept to comfort. Modern designs tailored to your lifestyle and budget.",
      hero_cta_quote: "Get a Free Quote", hero_cta_wa: "WhatsApp Us",
      badge_exp: "★ 1 Year Experience", badge_area: "📍 All over Hyderabad", badge_visit: "🏠 Home Visits Available",
      services_eyebrow: "What We Do", services_title: "Our Services", services_lead: "Complete interior solutions under one roof.",
      srv_design: "Interior Design", srv_design_d: "Creative & functional designs tailored to your space.",
      srv_kitchen: "Modular Kitchens", srv_kitchen_d: "Smart, durable and elegant modular kitchen setups.",
      srv_wardrobe: "Wardrobes", srv_wardrobe_d: "Custom wardrobes that maximise storage and style.",
      srv_tv: "TV Units", srv_tv_d: "Statement TV units designed for your living room.",
      srv_ceiling: "False Ceiling", srv_ceiling_d: "Modern false ceilings with ambient lighting.",
      srv_paint: "Wall Painting", srv_paint_d: "Premium finishes that elevate every room.",
      srv_electrical: "Electrical Work", srv_electrical_d: "Safe, modern & aesthetic electrical solutions.",
      srv_clean: "Deep Cleaning", srv_clean_d: "Thorough cleaning for a fresh, hygienic space.",
      srv_turnkey: "Turnkey Projects", srv_turnkey_d: "End-to-end, move-in ready interior delivery.",
      why_eyebrow: "Why Karthikieya", why_title: "Complete Interior Solutions, From Concept to Comfort",
      why1: "Creative Design", why1_d: "Functional, beautiful designs for every budget.",
      why2: "Premium Wall Paint", why2_d: "Finishes that elevate your space.",
      why3: "Modern Electrical", why3_d: "Safe and aesthetic electrical solutions.",
      why4: "Deep Cleaning", why4_d: "A fresh, hygienic, ready space.",
      why5: "Ready to Occupy", why5_d: "Move-in ready spaces, hassle free.",
      portfolio_eyebrow: "Our Work", portfolio_title: "Portfolio", portfolio_lead: "A glimpse of the spaces we create.",
      shot_kitchen: "Modular Kitchen", shot_living: "Living Room", shot_bedroom: "Bedroom", shot_office: "Office Interior",
      portfolio_note: "Want to see more? Message us on WhatsApp for our full project gallery.",
      about_eyebrow: "About Us", about_title: "Affordable Luxury Interiors in Hyderabad",
      about_p1: "Karthikieya Interiors is a Hyderabad-based interior solutions company offering complete residential and commercial interior services. We specialise in modern interior design, modular kitchens, wardrobes, TV units, wall painting, electrical work, deep cleaning and complete turnkey solutions.",
      about_p2: "Our mission is to create elegant, functional and comfortable spaces tailored to every client's lifestyle and budget.",
      type_home: "Homes", type_apt: "Apartments", type_villa: "Villas", type_office: "Offices", type_shop: "Shops",
      stat_services: "Services", stat_types: "Project Types", stat_turnkey: "Turnkey Ready", stat_budget: "Budget Tiers",
      quote_eyebrow: "Free Estimate", quote_title: "Get a Free Quote", quote_lead: "Fill in your details and we'll send the quote straight to your WhatsApp.",
      quote_pt1: "✔ No-obligation estimate", quote_pt2: "✔ Home visit available in Hyderabad", quote_pt3: "✔ Budget, mid-range & luxury options",
      form_name: "Your Name", form_phone: "Phone Number", form_service: "Service Needed", form_service_ph: "Select a service",
      form_message: "Project Details (optional)", form_submit: "Send on WhatsApp", form_hint: "This opens WhatsApp with your details pre-filled.",
      footer_tag: "Designing Dreams • Creating Spaces • Delivering Comfort",
      footer_contact: "Contact", footer_wa: "Chat on WhatsApp", footer_visit: "Visit Us",
      footer_addr: "Venkata Sai Apartment, Rd 19, Sai Iswarya Colony, Parvathapur, Medipally, Hyderabad",
      footer_map: "Open in Google Maps →", footer_hours: "Service Area", footer_area: "All over Hyderabad",
      footer_hours_v: "Mon – Sun, 9 AM – 8 PM", footer_rights: "All rights reserved.", footer_built: "Affordable luxury interiors • Hyderabad",
      wa_greeting: "Hello Karthikieya Interiors! I'm interested in your interior services. Please share more details.",
      wa_quote_title: "New Interior Enquiry",
      wa_l_name: "Name", wa_l_phone: "Phone", wa_l_service: "Service", wa_l_details: "Details",
      toast_sent: "Opening WhatsApp…", form_err: "Please fill in your name, phone and service."
    },
    te: {
      nav_services: "సేవలు", nav_why: "మమ్మల్ని ఎందుకు", nav_portfolio: "పోర్ట్‌ఫోలియో", nav_about: "మా గురించి", nav_contact: "సంప్రదించండి", nav_quote: "కోట్ పొందండి",
      hero_eyebrow: "హైదరాబాద్ అందుబాటు ధర లగ్జరీ ఇంటీరియర్స్",
      hero_title: "కలలను రూపొందిస్తూ,<br />ప్రదేశాలను సృష్టిస్తూ.",
      hero_tagline: "కలలను రూపొందించడం • ప్రదేశాలను సృష్టించడం • సౌకర్యాన్ని అందించడం",
      hero_sub: "పూర్తి నివాస & వాణిజ్య ఇంటీరియర్ పరిష్కారాలు — ఆలోచన నుండి సౌకర్యం వరకు. మీ జీవనశైలి, బడ్జెట్‌కు తగ్గట్టుగా ఆధునిక డిజైన్లు.",
      hero_cta_quote: "ఉచిత కోట్ పొందండి", hero_cta_wa: "వాట్సాప్ చేయండి",
      badge_exp: "★ 1 సంవత్సరం అనుభవం", badge_area: "📍 హైదరాబాద్ అంతటా", badge_visit: "🏠 ఇంటి సందర్శన అందుబాటులో",
      services_eyebrow: "మేము చేసేది", services_title: "మా సేవలు", services_lead: "ఒకే చోట పూర్తి ఇంటీరియర్ పరిష్కారాలు.",
      srv_design: "ఇంటీరియర్ డిజైన్", srv_design_d: "మీ ప్రదేశానికి తగ్గట్టు సృజనాత్మక & ఉపయోగకర డిజైన్లు.",
      srv_kitchen: "మాడ్యులర్ కిచెన్‌లు", srv_kitchen_d: "స్మార్ట్, మన్నికైన, అందమైన మాడ్యులర్ కిచెన్లు.",
      srv_wardrobe: "వార్డ్‌రోబ్‌లు", srv_wardrobe_d: "నిల్వ, శైలిని పెంచే కస్టమ్ వార్డ్‌రోబ్‌లు.",
      srv_tv: "టీవీ యూనిట్లు", srv_tv_d: "మీ హాల్ కోసం ప్రత్యేక టీవీ యూనిట్లు.",
      srv_ceiling: "ఫాల్స్ సీలింగ్", srv_ceiling_d: "ఆధునిక ఫాల్స్ సీలింగ్ మరియు లైటింగ్.",
      srv_paint: "వాల్ పెయింటింగ్", srv_paint_d: "ప్రతి గదిని ఉన్నతీకరించే ప్రీమియం ఫినిష్‌లు.",
      srv_electrical: "ఎలక్ట్రికల్ పని", srv_electrical_d: "సురక్షితమైన, ఆధునిక ఎలక్ట్రికల్ పరిష్కారాలు.",
      srv_clean: "డీప్ క్లీనింగ్", srv_clean_d: "తాజా, పరిశుభ్రమైన ప్రదేశం కోసం పూర్తి శుభ్రత.",
      srv_turnkey: "టర్న్‌కీ ప్రాజెక్టులు", srv_turnkey_d: "ఆరంభం నుండి ముగింపు వరకు సిద్ధంగా అందజేత.",
      why_eyebrow: "ఎందుకు కార్తికేయ", why_title: "ఆలోచన నుండి సౌకర్యం వరకు పూర్తి ఇంటీరియర్ పరిష్కారాలు",
      why1: "సృజనాత్మక డిజైన్", why1_d: "ప్రతి బడ్జెట్‌కు ఉపయోగకరమైన అందమైన డిజైన్లు.",
      why2: "ప్రీమియం వాల్ పెయింట్", why2_d: "మీ ప్రదేశాన్ని ఉన్నతీకరించే ఫినిష్‌లు.",
      why3: "ఆధునిక ఎలక్ట్రికల్", why3_d: "సురక్షితమైన, అందమైన ఎలక్ట్రికల్ పరిష్కారాలు.",
      why4: "డీప్ క్లీనింగ్", why4_d: "తాజా, పరిశుభ్రమైన, సిద్ధమైన ప్రదేశం.",
      why5: "నివాసానికి సిద్ధం", why5_d: "ఇబ్బంది లేకుండా సిద్ధమైన ప్రదేశాలు.",
      portfolio_eyebrow: "మా పని", portfolio_title: "పోర్ట్‌ఫోలియో", portfolio_lead: "మేము సృష్టించే ప్రదేశాల ఒక సంగ్రహం.",
      shot_kitchen: "మాడ్యులర్ కిచెన్", shot_living: "లివింగ్ రూమ్", shot_bedroom: "బెడ్‌రూమ్", shot_office: "ఆఫీస్ ఇంటీరియర్",
      portfolio_note: "మరిన్ని చూడాలనుందా? మా పూర్తి గ్యాలరీ కోసం వాట్సాప్‌లో సందేశం పంపండి.",
      about_eyebrow: "మా గురించి", about_title: "హైదరాబాద్‌లో అందుబాటు ధర లగ్జరీ ఇంటీరియర్స్",
      about_p1: "కార్తికేయ ఇంటీరియర్స్ హైదరాబాద్ ఆధారిత ఇంటీరియర్ సంస్థ. ఇంటీరియర్ డిజైన్, మాడ్యులర్ కిచెన్‌లు, వార్డ్‌రోబ్‌లు, టీవీ యూనిట్లు, వాల్ పెయింటింగ్, ఎలక్ట్రికల్, డీప్ క్లీనింగ్ మరియు పూర్తి టర్న్‌కీ సేవలను అందిస్తాం.",
      about_p2: "ప్రతి క్లయింట్ జీవనశైలి, బడ్జెట్‌కు తగ్గట్టు అందమైన, ఉపయోగకరమైన, సౌకర్యవంతమైన ప్రదేశాలను రూపొందించడమే మా లక్ష్యం.",
      type_home: "ఇళ్లు", type_apt: "అపార్ట్‌మెంట్లు", type_villa: "విల్లాలు", type_office: "కార్యాలయాలు", type_shop: "దుకాణాలు",
      stat_services: "సేవలు", stat_types: "ప్రాజెక్ట్ రకాలు", stat_turnkey: "టర్న్‌కీ సిద్ధం", stat_budget: "బడ్జెట్ స్థాయిలు",
      quote_eyebrow: "ఉచిత అంచనా", quote_title: "ఉచిత కోట్ పొందండి", quote_lead: "మీ వివరాలు నింపండి, కోట్‌ను నేరుగా మీ వాట్సాప్‌కు పంపుతాం.",
      quote_pt1: "✔ ఎటువంటి బాధ్యత లేని అంచనా", quote_pt2: "✔ హైదరాబాద్‌లో ఇంటి సందర్శన", quote_pt3: "✔ బడ్జెట్, మిడ్-రేంజ్ & లగ్జరీ ఆప్షన్లు",
      form_name: "మీ పేరు", form_phone: "ఫోన్ నంబర్", form_service: "అవసరమైన సేవ", form_service_ph: "ఒక సేవను ఎంచుకోండి",
      form_message: "ప్రాజెక్ట్ వివరాలు (ఐచ్ఛికం)", form_submit: "వాట్సాప్‌లో పంపండి", form_hint: "ఇది మీ వివరాలతో వాట్సాప్‌ను తెరుస్తుంది.",
      footer_tag: "కలలను రూపొందించడం • ప్రదేశాలను సృష్టించడం • సౌకర్యాన్ని అందించడం",
      footer_contact: "సంప్రదించండి", footer_wa: "వాట్సాప్‌లో చాట్ చేయండి", footer_visit: "మమ్మల్ని సందర్శించండి",
      footer_addr: "వెంకట సాయి అపార్ట్‌మెంట్, రోడ్ 19, సాయి ఇశ్వర్య కాలనీ, పర్వతాపూర్, మేడిపల్లి, హైదరాబాద్",
      footer_map: "గూగుల్ మ్యాప్స్‌లో తెరవండి →", footer_hours: "సేవా ప్రాంతం", footer_area: "హైదరాబాద్ అంతటా",
      footer_hours_v: "సోమ – ఆది, ఉ. 9 – రా. 8", footer_rights: "అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.", footer_built: "అందుబాటు ధర లగ్జరీ ఇంటీరియర్స్ • హైదరాబాద్",
      wa_greeting: "నమస్తే కార్తికేయ ఇంటీరియర్స్! మీ ఇంటీరియర్ సేవలపై నాకు ఆసక్తి ఉంది. దయచేసి మరిన్ని వివరాలు తెలియజేయండి.",
      wa_quote_title: "కొత్త ఇంటీరియర్ విచారణ",
      wa_l_name: "పేరు", wa_l_phone: "ఫోన్", wa_l_service: "సేవ", wa_l_details: "వివరాలు",
      toast_sent: "వాట్సాప్ తెరుస్తోంది…", form_err: "దయచేసి మీ పేరు, ఫోన్, సేవను నింపండి."
    },
    hi: {
      nav_services: "सेवाएं", nav_why: "क्यों चुनें", nav_portfolio: "पोर्टफोलियो", nav_about: "हमारे बारे में", nav_contact: "संपर्क", nav_quote: "कोट लें",
      hero_eyebrow: "हैदराबाद की किफायती लक्जरी इंटीरियर्स",
      hero_title: "सपनों को आकार,<br />स्थानों का निर्माण।",
      hero_tagline: "सपनों को आकार • स्थानों का निर्माण • आराम की प्राप्ति",
      hero_sub: "संपूर्ण आवासीय और व्यावसायिक इंटीरियर समाधान — कॉन्सेप्ट से कम्फर्ट तक। आपकी जीवनशैली और बजट के अनुरूप आधुनिक डिज़ाइन।",
      hero_cta_quote: "मुफ्त कोट लें", hero_cta_wa: "व्हाट्सएप करें",
      badge_exp: "★ 1 वर्ष का अनुभव", badge_area: "📍 पूरे हैदराबाद में", badge_visit: "🏠 घर पर विज़िट उपलब्ध",
      services_eyebrow: "हम क्या करते हैं", services_title: "हमारी सेवाएं", services_lead: "एक ही छत के नीचे संपूर्ण इंटीरियर समाधान।",
      srv_design: "इंटीरियर डिज़ाइन", srv_design_d: "आपके स्थान के अनुरूप रचनात्मक और कार्यात्मक डिज़ाइन।",
      srv_kitchen: "मॉड्यूलर किचन", srv_kitchen_d: "स्मार्ट, टिकाऊ और सुंदर मॉड्यूलर किचन।",
      srv_wardrobe: "वार्डरोब", srv_wardrobe_d: "भंडारण और शैली बढ़ाने वाले कस्टम वार्डरोब।",
      srv_tv: "टीवी यूनिट", srv_tv_d: "आपके लिविंग रूम के लिए खास टीवी यूनिट।",
      srv_ceiling: "फॉल्स सीलिंग", srv_ceiling_d: "एम्बिएंट लाइटिंग के साथ आधुनिक फॉल्स सीलिंग।",
      srv_paint: "वॉल पेंटिंग", srv_paint_d: "हर कमरे को निखारने वाली प्रीमियम फिनिश।",
      srv_electrical: "इलेक्ट्रिकल कार्य", srv_electrical_d: "सुरक्षित, आधुनिक और सुंदर इलेक्ट्रिकल समाधान।",
      srv_clean: "डीप क्लीनिंग", srv_clean_d: "ताज़ा, स्वच्छ स्थान के लिए संपूर्ण सफाई।",
      srv_turnkey: "टर्नकी प्रोजेक्ट", srv_turnkey_d: "शुरू से अंत तक, मूव-इन रेडी डिलीवरी।",
      why_eyebrow: "क्यों कार्तिकेया", why_title: "कॉन्सेप्ट से कम्फर्ट तक, संपूर्ण इंटीरियर समाधान",
      why1: "रचनात्मक डिज़ाइन", why1_d: "हर बजट के लिए कार्यात्मक, सुंदर डिज़ाइन।",
      why2: "प्रीमियम वॉल पेंट", why2_d: "आपके स्थान को निखारने वाली फिनिश।",
      why3: "आधुनिक इलेक्ट्रिकल", why3_d: "सुरक्षित और सुंदर इलेक्ट्रिकल समाधान।",
      why4: "डीप क्लीनिंग", why4_d: "ताज़ा, स्वच्छ, तैयार स्थान।",
      why5: "रहने के लिए तैयार", why5_d: "बिना झंझट मूव-इन रेडी स्थान।",
      portfolio_eyebrow: "हमारा काम", portfolio_title: "पोर्टफोलियो", portfolio_lead: "हमारे बनाए स्थानों की एक झलक।",
      shot_kitchen: "मॉड्यूलर किचन", shot_living: "लिविंग रूम", shot_bedroom: "बेडरूम", shot_office: "ऑफिस इंटीरियर",
      portfolio_note: "और देखना चाहते हैं? हमारी पूरी गैलरी के लिए व्हाट्सएप पर संदेश भेजें।",
      about_eyebrow: "हमारे बारे में", about_title: "हैदराबाद में किफायती लक्जरी इंटीरियर्स",
      about_p1: "कार्तिकेया इंटीरियर्स हैदराबाद स्थित इंटीरियर कंपनी है। हम इंटीरियर डिज़ाइन, मॉड्यूलर किचन, वार्डरोब, टीवी यूनिट, वॉल पेंटिंग, इलेक्ट्रिकल कार्य, डीप क्लीनिंग और संपूर्ण टर्नकी समाधान प्रदान करते हैं।",
      about_p2: "हमारा लक्ष्य हर ग्राहक की जीवनशैली और बजट के अनुरूप सुंदर, कार्यात्मक और आरामदायक स्थान बनाना है।",
      type_home: "घर", type_apt: "अपार्टमेंट", type_villa: "विला", type_office: "ऑफिस", type_shop: "दुकानें",
      stat_services: "सेवाएं", stat_types: "प्रोजेक्ट प्रकार", stat_turnkey: "टर्नकी तैयार", stat_budget: "बजट स्तर",
      quote_eyebrow: "मुफ्त अनुमान", quote_title: "मुफ्त कोट लें", quote_lead: "अपनी जानकारी भरें, हम कोट सीधे आपके व्हाट्सएप पर भेजेंगे।",
      quote_pt1: "✔ बिना किसी बाध्यता के अनुमान", quote_pt2: "✔ हैदराबाद में घर पर विज़िट", quote_pt3: "✔ बजट, मिड-रेंज और लक्जरी विकल्प",
      form_name: "आपका नाम", form_phone: "फ़ोन नंबर", form_service: "आवश्यक सेवा", form_service_ph: "एक सेवा चुनें",
      form_message: "प्रोजेक्ट विवरण (वैकल्पिक)", form_submit: "व्हाट्सएप पर भेजें", form_hint: "यह आपकी जानकारी के साथ व्हाट्सएप खोलेगा।",
      footer_tag: "सपनों को आकार • स्थानों का निर्माण • आराम की प्राप्ति",
      footer_contact: "संपर्क", footer_wa: "व्हाट्सएप पर चैट करें", footer_visit: "हमसे मिलें",
      footer_addr: "वेंकट साई अपार्टमेंट, रोड 19, साई इश्वर्या कॉलोनी, पर्वतापुर, मेडिपल्ली, हैदराबाद",
      footer_map: "गूगल मैप्स में खोलें →", footer_hours: "सेवा क्षेत्र", footer_area: "पूरे हैदराबाद में",
      footer_hours_v: "सोम – रवि, सुबह 9 – रात 8", footer_rights: "सर्वाधिकार सुरक्षित।", footer_built: "किफायती लक्जरी इंटीरियर्स • हैदराबाद",
      wa_greeting: "नमस्ते कार्तिकेया इंटीरियर्स! मुझे आपकी इंटीरियर सेवाओं में रुचि है। कृपया अधिक जानकारी साझा करें।",
      wa_quote_title: "नई इंटीरियर पूछताछ",
      wa_l_name: "नाम", wa_l_phone: "फ़ोन", wa_l_service: "सेवा", wa_l_details: "विवरण",
      toast_sent: "व्हाट्सएप खुल रहा है…", form_err: "कृपया अपना नाम, फ़ोन और सेवा भरें।"
    }
  };

  let currentLang = localStorage.getItem("ki_lang") || "en";

  /* ---------- Apply language ---------- */
  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    const dict = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll(".lang__btn").forEach((b) => {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("ki_lang", lang);
  }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || "";
  }

  /* ---------- WhatsApp helpers ---------- */
  function openWhatsApp(text) {
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank", "noopener");
  }

  /* ---------- Toast ---------- */
  let toastTimer;
  function showToast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-show"), 2600);
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(currentLang);

    // year
    document.getElementById("year").textContent = new Date().getFullYear();

    // language buttons
    document.querySelectorAll(".lang__btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
    });

    // generic whatsapp triggers (floating + hero + footer)
    document.querySelectorAll(".js-whatsapp").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openWhatsApp(t("wa_greeting"));
        showToast(t("toast_sent"));
      });
    });

    // quote form -> whatsapp
    const form = document.getElementById("quoteForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const service = form.service.value.trim();
        const message = form.message.value.trim();

        if (!name || !phone || !service) {
          showToast(t("form_err"));
          return;
        }

        const lines = [
          "*" + t("wa_quote_title") + "*",
          t("wa_l_name") + ": " + name,
          t("wa_l_phone") + ": " + phone,
          t("wa_l_service") + ": " + service
        ];
        if (message) lines.push(t("wa_l_details") + ": " + message);

        openWhatsApp(lines.join("\n"));
        showToast(t("toast_sent"));
        form.reset();
      });
    }

    // mobile nav
    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");
    if (navToggle && nav) {
      navToggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        navToggle.classList.toggle("is-open", open);
        navToggle.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          nav.classList.remove("is-open");
          navToggle.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        })
      );
    }

    // header shadow on scroll
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    });

    // scroll reveal
    const revealEls = document.querySelectorAll(".card, .why-item, .stat, .shot, .section__head");
    revealEls.forEach((el) => el.setAttribute("data-reveal", ""));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  });
})();
