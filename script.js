(() => {
  "use strict";
  const isAdminPage = new URLSearchParams(window.location.search).get("admin") === "1";

  const KEYS = {
    settings: "sk-transport-settings-v1",
    adminPassword: "sk-transport-admin-password-v1",
    adminUsername: "sk-transport-admin-username-v1"
  };
  const DEFAULT_MENU_ITEMS = [
    { en: "Our fleet", hi: "हमारी गाड़ियाँ", href: "#services" },
    { en: "Services", hi: "सेवाएँ", href: "#capabilities" },
    { en: "Routes", hi: "रूट", href: "#routes" },
    { en: "About us", hi: "हमारे बारे में", href: "#about" },
    { en: "Contact", hi: "संपर्क", href: "#contact" }
  ];
  const DEFAULT_ROUTES = [
    { from: "Deoband", to: "Delhi" },
    { from: "Deoband", to: "Lucknow" },
    { from: "Deoband", to: "Jaipur" },
    { from: "Deoband", to: "Mumbai" },
    { from: "Deoband", to: "Ahmedabad" },
    { from: "Deoband", to: "Bengaluru" }
  ];
  const MENU_TARGETS = ["#home", "#services", "#capabilities", "#routes", "#about", "#book", "#contact"];
  const MAX_MENU_ITEMS = 12;
  const MAX_ROUTES = 30;
  const SERVICE_OPTION_INDEX = [0, 3, 5, 6];
  const DEFAULTS = {
    business: "S K Transport",
    owner: "Sushil Kumar",
    address: "Noopur near Sugar Mill Deoband, Deoband, 247554",
    primary: "8445486229",
    secondary: "7078862293",
    email: "sainihimanshu27958@gmail.com",
    alternateEmail: "",
    vehicles: ["Truck", "DCM", "Chhoti Gadi", "Badi Gadi", "Mini Truck", "Car", "Tractor Trali"],
    menuItems: DEFAULT_MENU_ITEMS,
    routes: DEFAULT_ROUTES
  };
  const TEXT = {
    en: {
      languageGroup: "Choose language", brandTag: "DEOBAND · ALL INDIA SERVICE", announce: "ALL-INDIA TRANSPORT SERVICE", availability: "CALL FOR AVAILABILITY", navFleet: "Our fleet", navCoverage: "Services", navRoutes: "Routes", navAbout: "About us", navContact: "Contact", navAdmin: "Admin login ↗", navBook: "Book a vehicle",
      heroEyebrow: "YOUR LOAD. OUR ROAD.", heroTitle: "EVERY LOAD.<br><span>ON THE MOVE.</span>", heroIntro: "From a single parcel to a full-scale haul, we transport your goods from Deoband to destinations across India.", heroCta: "Find your vehicle", quickCall: "QUICK CALL", heroProof: "Transport service across India.", heroProofSub: "Based in Deoband, ready to roll nationwide.", coverageNote: "BASED IN DEOBAND · SERVING ALL INDIA", heroStamp: "RELIABLE<br>BY NATURE", artCaption: "BUILT TO GET YOU THERE", scrollPrompt: "SCROLL TO EXPLORE <b>↓</b>",
      ticker: "<span>TRUCKS</span><b>✳</b><span>DCM</span><b>✳</b><span>MINI TRUCKS</span><b>✳</b><span>CARS</span><b>✳</b><span>TRACTOR TROLLY</span><b>✳</b><span>AND MORE</span><b>✳</b>".repeat(2),
      fleetEyebrow: "THE RIGHT RIDE FOR THE JOB", fleetTitle: "BIG LOAD. SMALL LOAD.<br><span>WE'VE GOT YOU.</span>", fleetIntro: "Choose the wheels that work for your move. Tell us what you need and we'll help line up the right vehicle.", fleetQuestion: "NOT SURE WHAT FITS?", fleetLink: "Tell us what you're moving",
      localKnowhow: "ALL-INDIA SERVICE", localArea: "BASED IN DEOBAND<br>SERVING ALL INDIA", aboutEyebrow: "A NAME YOU CAN COUNT ON", aboutTitle: "WE KNOW THE<br>WAY <span>FORWARD.</span>", aboutIntro: "Based in Deoband, S K Transport arranges dependable vehicle service for moves to destinations across India. From everyday deliveries to big hauls, we bring a personal touch to every journey.", aboutSub: "Tell us what you need moved, where it's going and when. We'll help plan the journey from Deoband to your destination.", localContact: "YOUR TRANSPORT CONTACT", proprietor: "Proprietor, S K Transport",
      bookingEyebrow: "LET'S GET YOU MOVING", bookingTitle: "YOUR NEXT MOVE<br>STARTS <span>RIGHT HERE.</span>", bookingIntro: "Need transport from Deoband to anywhere in India? Share a few details and we'll get back to you. No commitment, just a conversation about your move.", preferCall: "PREFER TO CALL?", phoneAway: "We're just a phone call away.", smsNote: "Share your pickup and destination anywhere in India. Your details open as an SMS draft—review and tap send to contact S K Transport.", driverConnectTitle: "DRIVER OR FLEET OWNER?", driverConnectCopy: "Connect with us to discuss joining our transport network and receiving booking opportunities. Availability and terms are confirmed individually.", driverConnectAction: "Connect on WhatsApp",
      bookingFormTitle: "BOOKING ENQUIRY", formCount: "NO. <b>01</b> / 01", chooseVehicle: "01 &nbsp; PICK YOUR VEHICLE <sup>*</sup>", nameLabel: "YOUR NAME <sup>*</sup>", phoneLabel: "PHONE NUMBER <sup>*</sup>", pickupLabel: "PICKUP LOCATION", dropLabel: "DESTINATION", dateLabel: "WHEN DO YOU NEED IT?", loadLabel: "WHAT ARE WE MOVING?", messageLabel: "ANYTHING ELSE WE SHOULD KNOW?",
      namePlaceholder: "e.g. Rahul Sharma", phonePlaceholder: "Your 10-digit number", pickupPlaceholder: "City, state, PIN or landmark", dropPlaceholder: "City, state, PIN or landmark", loadPlaceholder: "Furniture, goods, vehicle...", messagePlaceholder: "Add details about your load or trip...", submitBooking: "Prepare my booking", bookingConsent: "I agree to share these booking details with S K Transport by email. The email provider may retain submissions for up to 30 days.", formPrivacy: "Booking details are emailed to the business address above. SMS is not sent automatically; open a prepared SMS or WhatsApp message to contact us.",
      contactEyebrow: "HERE WHEN YOU NEED US", contactTitle: "GOOD TO GO?<br><span>LET'S TALK.</span>", findUs: "FIND US", callUs: "GIVE US A RING", emailUs: "EMAIL US", footerTag: "EVERY LOAD. ON THE MOVE.", adminButton: "ADMIN",
      privateAccess: "PRIVATE ACCESS", adminTitle: "TRANSPORT<br><span>CONTROL ROOM.</span>", adminUsername: "ADMIN USERNAME", createPassword: "CREATE PASSWORD", setPassword: "Set password & continue", adminWarning: "This static-site admin is browser-local, not secure for public production use. Use a private device; clearing browser data removes saved settings.", siteSettings: "SITE SETTINGS", dashboardTitle: "YOUR BUSINESS.<br><span>YOUR CALL.</span>", logout: "LOG OUT", businessDetails: "BUSINESS DETAILS", businessName: "BUSINESS NAME", addressLabel: "ADDRESS", primaryPhone: "PRIMARY PHONE", bookingPhone: "BOOKING PHONE", emailPrimary: "PRIMARY EMAIL (REQUIRED FOR BOOKINGS)", emailAlternate: "ALTERNATE EMAIL (OPTIONAL)", emailPrimaryPlaceholder: "Bookings go to this email", alternateEmailPlaceholder: "Booking email copy (optional)", phoneContacts: "PHONE CONTACTS", primaryMobile: "PRIMARY MOBILE", alternateMobile: "ALTERNATE MOBILE", emailOptional: "EMAIL (OPTIONAL)", emailPlaceholder: "Add an email when you have one", vehiclesHeading: "VEHICLES & PHOTOS", newVehiclePlaceholder: "New vehicle name", newVehicleAria: "New vehicle name", addVehicle: "+ ADD VEHICLE", adminNote: "Changes, including vehicle photos, are saved only in this browser and do not update the public site for other visitors.", saveChanges: "Save changes", closeAdmin: "Close admin panel",
      invalidPhone: "Please enter a valid phone number with at least 10 digits.", smsReady: "Your enquiry is ready to send.", smsInstructions: "Choose a number below. Your messaging app will open with the booking details filled in; review and tap send. Repeat for the other number if you want both contacts to receive it.", emailDraftNotice: " An email draft is available too.", openSms: "Open SMS to", prepareEmail: "Prepare email to", copyBooking: "Copy booking details", copied: "Copied", copyUnavailable: "Copy unavailable — select SMS above", bookingHeading: "Booking enquiry", dateFlexible: "Flexible / not specified", notSpecified: "Not specified", none: "None", vehicleLabel: "Vehicle", customerName: "Name", customerPhone: "Phone", pickup: "Pickup", drop: "Drop", tripDate: "Date", load: "Load", notes: "Notes",
      adminLoginExisting: "Sign in to manage business details and your public vehicle list.", adminLoginNew: "Set an admin password for this browser to manage your public business details and vehicle list.", adminPassword: "ADMIN PASSWORD", login: "Log in", passwordMismatch: "Those admin credentials don't match. Please try again.", secureContext: "Password setup requires a secure browser context (HTTPS or localhost).", keepOneVehicle: "Keep at least one vehicle in the public fleet.", maxVehicles: "The public vehicle list is limited to 20 items.", duplicateVehicle: "That vehicle is already on the list.", addBeforeSave: "Add at least one vehicle before saving.", saved: "Changes saved in this browser.", saveFailed: "Changes could not be saved. Check browser storage settings and try again."
      ,deliveryHeading: "Booking details are emailed automatically", deliveryTo: "Send to", emailActivationNote: "First use: confirm the activation email from FormSubmit before accepting live bookings.", smsDeliveryNote: "SMS is prepared for you to review and send.", emailLive: "EMAIL DELIVERY", whatsappLabel: "WhatsApp us", whatsappAria: "Chat with S K Transport on WhatsApp", emailSending: "Sending booking email…", emailSent: "Booking email sent successfully.", emailSetupRequired: "The email service needs activation. Check the activation email sent by FormSubmit to the primary email address.", emailSendFailed: "We couldn't send the booking email. Please try again or use WhatsApp/SMS below.", formSubmitError: "Booking email could not be sent.", whatsappBooking: "Send booking on WhatsApp", smsFallback: "Or prepare an SMS to"
    },
    hi: {
      languageGroup: "भाषा चुनें", brandTag: "देवबंद · पूरे भारत में सेवा", announce: "पूरे भारत में ट्रांसपोर्ट सेवा", availability: "उपलब्धता के लिए कॉल करें", navFleet: "हमारी गाड़ियाँ", navCoverage: "सेवाएँ", navRoutes: "रूट", navAbout: "हमारे बारे में", navContact: "संपर्क", navAdmin: "एडमिन लॉगिन ↗", navBook: "गाड़ी बुक करें",
      heroEyebrow: "आपका सामान। हमारा रास्ता।", heroTitle: "हर सामान।<br><span>मंज़िल तक।</span>", heroIntro: "छोटे पार्सल से लेकर बड़े सामान तक—देवबंद से भारत के किसी भी शहर तक सामान पहुँचाने के लिए संपर्क करें।", heroCta: "अपनी गाड़ी चुनें", quickCall: "अभी कॉल करें", heroProof: "पूरे भारत में ट्रांसपोर्ट सेवा।", heroProofSub: "देवबंद से—देशभर में आपकी सेवा में।", coverageNote: "देवबंद से · पूरे भारत में सेवा", heroStamp: "भरोसेमंद<br>सेवा", artCaption: "आपकी मंज़िल तक साथ", scrollPrompt: "आगे देखने के लिए स्क्रॉल करें <b>↓</b>",
      ticker: "<span>ट्रक</span><b>✳</b><span>डीसीएम</span><b>✳</b><span>मिनी ट्रक</span><b>✳</b><span>कार</span><b>✳</b><span>ट्रैक्टर ट्रॉली</span><b>✳</b><span>और भी</span><b>✳</b>".repeat(2),
      fleetEyebrow: "हर काम के लिए सही गाड़ी", fleetTitle: "छोटा सामान हो या बड़ा।<br><span>हम हैं साथ।</span>", fleetIntro: "अपने सामान के लिए सही गाड़ी चुनें। बताइए आपको क्या चाहिए—हम सही गाड़ी चुनने में मदद करेंगे।", fleetQuestion: "कौन-सी गाड़ी सही रहेगी?", fleetLink: "क्या भेजना है, हमें बताएं",
      localKnowhow: "पूरे भारत में सेवा", localArea: "देवबंद से<br>देशभर में सेवा", aboutEyebrow: "भरोसे का नाम", aboutTitle: "आपकी राह के<br><span>हमसफ़र।</span>", aboutIntro: "एस के ट्रांसपोर्ट देवबंद से पूरे भारत में सामान पहुँचाने के लिए भरोसेमंद गाड़ी सेवा उपलब्ध कराता है। रोज़मर्रा की डिलीवरी हो या बड़ा सामान—हर सफ़र में भरोसेमंद सेवा और अपनापन।", aboutSub: "क्या सामान कहाँ से कहाँ पहुँचाना है और कब—हमें बताइए। देवबंद से आपकी मंज़िल तक सफ़र की जानकारी के लिए संपर्क करें।", localContact: "आपका ट्रांसपोर्ट संपर्क", proprietor: "मालिक, एस के ट्रांसपोर्ट",
      bookingEyebrow: "चलिए, आपकी बुकिंग करें", bookingTitle: "आपकी अगली बुकिंग<br><span>यहाँ से शुरू।</span>", bookingIntro: "देवबंद से भारत के किसी भी शहर तक सामान भेजना है? जानकारी भरें, हम आपसे संपर्क करेंगे। कोई बाध्यता नहीं—बस आपकी ज़रूरत समझने के लिए एक बातचीत।", preferCall: "सीधे बात करना चाहेंगे?", phoneAway: "हम बस एक कॉल दूर हैं।", smsNote: "भारत में कहीं से भी सामान कहाँ लेना और पहुँचाना है, बताएं। आपकी जानकारी SMS में खुलेगी—जाँचकर S K Transport को भेजें।", driverConnectTitle: "ड्राइवर या गाड़ी के मालिक?", driverConnectCopy: "हमारे ट्रांसपोर्ट नेटवर्क से जुड़ने और बुकिंग के काम के अवसरों पर बात करने के लिए संपर्क करें। उपलब्धता और शर्तें अलग से तय होंगी।", driverConnectAction: "WhatsApp पर जुड़ें",
      bookingFormTitle: "बुकिंग की जानकारी", formCount: "नंबर <b>01</b> / 01", chooseVehicle: "01 &nbsp; अपनी गाड़ी चुनें <sup>*</sup>", nameLabel: "आपका नाम <sup>*</sup>", phoneLabel: "आपका मोबाइल नंबर <sup>*</sup>", pickupLabel: "पिकअप की जगह", dropLabel: "मंज़िल", dateLabel: "गाड़ी कब चाहिए?", loadLabel: "क्या सामान ले जाना है?", messageLabel: "कोई और जानकारी?",
      namePlaceholder: "जैसे: राहुल शर्मा", phonePlaceholder: "10 अंकों का मोबाइल नंबर", pickupPlaceholder: "शहर, राज्य, पिन कोड या पहचान", dropPlaceholder: "शहर, राज्य, पिन कोड या पहचान", loadPlaceholder: "फर्नीचर, सामान, गाड़ी...", messagePlaceholder: "सामान या रास्ते की जानकारी लिखें...", submitBooking: "बुकिंग की जानकारी तैयार करें", bookingConsent: "मैं बुकिंग की यह जानकारी ईमेल से S K Transport को भेजने के लिए सहमत हूँ। ईमेल सेवा इस जानकारी को 30 दिनों तक रख सकती है।", formPrivacy: "बुकिंग की जानकारी ऊपर दिए कारोबार के ईमेल पर भेजी जाएगी। SMS अपने आप नहीं जाता—तैयार SMS या WhatsApp संदेश खोलकर भेजें।",
      contactEyebrow: "ज़रूरत पड़ने पर हम साथ हैं", contactTitle: "तैयार हैं?<br><span>बात करें।</span>", findUs: "हमारा पता", callUs: "हमें कॉल करें", emailUs: "ईमेल करें", footerTag: "हर सामान। मंज़िल तक।", adminButton: "एडमिन",
      privateAccess: "निजी प्रवेश", adminTitle: "ट्रांसपोर्ट<br><span>कंट्रोल पैनल।</span>", adminUsername: "एडमिन यूज़रनेम", createPassword: "पासवर्ड बनाएं", setPassword: "पासवर्ड बनाएं और आगे बढ़ें", adminWarning: "यह एडमिन पैनल इसी ब्राउज़र में काम करता है; सार्वजनिक वेबसाइट के लिए सुरक्षित लॉगिन नहीं है। निजी डिवाइस का उपयोग करें। ब्राउज़र डेटा हटाने पर सेटिंग मिट सकती है।", siteSettings: "वेबसाइट सेटिंग", dashboardTitle: "आपका कारोबार।<br><span>आपके फैसले।</span>", logout: "लॉग आउट", businessDetails: "कारोबार की जानकारी", businessName: "कारोबार का नाम", addressLabel: "पता", primaryPhone: "मुख्य फ़ोन नंबर", bookingPhone: "वैकल्पिक फ़ोन नंबर", emailPrimary: "मुख्य ईमेल (बुकिंग के लिए ज़रूरी)", emailAlternate: "वैकल्पिक ईमेल (ज़रूरी नहीं)", emailPrimaryPlaceholder: "बुकिंग इस ईमेल पर आएगी", alternateEmailPlaceholder: "बुकिंग ईमेल की कॉपी (ज़रूरी नहीं)", phoneContacts: "फ़ोन संपर्क", primaryMobile: "मुख्य मोबाइल नंबर", alternateMobile: "वैकल्पिक मोबाइल नंबर", emailOptional: "ईमेल (वैकल्पिक)", emailPlaceholder: "ईमेल होने पर यहाँ लिखें", vehiclesHeading: "गाड़ियाँ और तस्वीरें", newVehiclePlaceholder: "नई गाड़ी का नाम", newVehicleAria: "नई गाड़ी का नाम", addVehicle: "+ गाड़ी जोड़ें", adminNote: "तस्वीरों सहित बदलाव सिर्फ़ इसी ब्राउज़र में सेव होंगे; दूसरे लोगों की साइट पर नहीं दिखेंगे।", saveChanges: "बदलाव सेव करें", closeAdmin: "एडमिन पैनल बंद करें",
      invalidPhone: "कृपया कम से कम 10 अंकों का सही मोबाइल नंबर भरें।", smsReady: "आपकी बुकिंग जानकारी भेजने के लिए तैयार है।", smsInstructions: "नीचे नंबर चुनें। आपकी मैसेज ऐप में बुकिंग की जानकारी SMS के रूप में खुलेगी—जाँचकर भेजें। दोनों नंबरों पर भेजने के लिए दूसरे नंबर के लिए भी यही करें।", emailDraftNotice: " ईमेल का ड्राफ़्ट भी तैयार है।", openSms: "SMS भेजें", prepareEmail: "ईमेल का ड्राफ़्ट", copyBooking: "बुकिंग जानकारी कॉपी करें", copied: "कॉपी हो गया", copyUnavailable: "कॉपी नहीं हो पाया — ऊपर SMS चुनें", bookingHeading: "बुकिंग की जानकारी", dateFlexible: "तारीख तय नहीं", notSpecified: "जानकारी नहीं दी", none: "कुछ नहीं", vehicleLabel: "गाड़ी", customerName: "नाम", customerPhone: "फ़ोन", pickup: "कहाँ से", drop: "कहाँ तक", tripDate: "तारीख", load: "सामान", notes: "अन्य जानकारी",
      adminLoginExisting: "कारोबार की जानकारी और गाड़ियों की सूची बदलने के लिए लॉग इन करें।", adminLoginNew: "कारोबार की जानकारी और गाड़ियों की सूची बदलने के लिए इस ब्राउज़र पर एडमिन पासवर्ड बनाएं।", adminPassword: "एडमिन पासवर्ड", login: "लॉग इन", passwordMismatch: "यूज़रनेम या पासवर्ड सही नहीं है। दोबारा कोशिश करें।", secureContext: "पासवर्ड बनाने के लिए सुरक्षित ब्राउज़र (HTTPS या localhost) ज़रूरी है।", keepOneVehicle: "कम से कम एक गाड़ी सूची में रखें।", maxVehicles: "सूची में अधिकतम 20 गाड़ियाँ जोड़ी जा सकती हैं।", duplicateVehicle: "यह गाड़ी सूची में पहले से है।", addBeforeSave: "सेव करने से पहले कम से कम एक गाड़ी जोड़ें।", saved: "बदलाव इसी ब्राउज़र में सेव हो गए।", saveFailed: "बदलाव सेव नहीं हो पाए। ब्राउज़र स्टोरेज जाँचकर दोबारा कोशिश करें।",
      deliveryHeading: "बुकिंग की जानकारी ईमेल पर अपने आप भेजी जाएगी", deliveryTo: "ईमेल भेजें", emailActivationNote: "पहली बार: बुकिंग शुरू करने से पहले FormSubmit का एक्टिवेशन ईमेल कन्फ़र्म करें।", smsDeliveryNote: "SMS जाँचकर भेजने के लिए तैयार होगा।", emailLive: "ईमेल सेवा", whatsappLabel: "WhatsApp करें", whatsappAria: "S K Transport को WhatsApp संदेश भेजें", emailSending: "बुकिंग ईमेल भेज रहे हैं…", emailSent: "बुकिंग ईमेल सफलतापूर्वक भेज दिया गया।", emailSetupRequired: "ईमेल सेवा को सक्रिय करना होगा। FormSubmit द्वारा मुख्य ईमेल पर भेजे गए एक्टिवेशन ईमेल की पुष्टि करें।", emailSendFailed: "बुकिंग ईमेल नहीं भेज पाए। दोबारा कोशिश करें या नीचे WhatsApp/SMS का उपयोग करें।", formSubmitError: "बुकिंग ईमेल नहीं भेजा जा सका।", whatsappBooking: "बुकिंग WhatsApp पर भेजें", smsFallback: "या SMS तैयार करें"
    }
  };
  const FEATURE_TEXT = {
    en: {
      capEyebrow: "TRANSPORT FOR EVERY LOAD", capTitle: "SMALL LOAD.<br><span>BIG LOAD. EXPRESS.</span>", capIntro: "Small or large goods, express delivery, and workshop or industry items. Tell us what you need moved.", capCaveat: "Pan-India delivery and express timing are confirmed for each route. 24×7 enquiry support and GST billing are available; share billing details with us when booking. Cold-chain handling depends on suitable vehicle and route availability; please confirm before booking.",
      serviceTypes: ["Small load", "Big load", "Express delivery", "Workshop & industry goods"],
      serviceCopy: ["Mini trucks and suitable vehicles for smaller goods and local moves.", "Truck and larger vehicle options for bigger consignments.", "Time-sensitive delivery requests; timing confirmed for each route.", "Tools, machinery, parts and other workshop or industrial items."],
      serviceBadge: ["SMALL GOODS", "LARGE GOODS", "FAST DELIVERY", "BUSINESS & INDUSTRY"],
      serviceHighlights: ["24×7 enquiries", "GST billing", "Pan-India delivery"],
      nationwideEyebrow: "DEOBAND TO DESTINATIONS ACROSS INDIA", nationwideTitle: "PAN-INDIA DELIVERY", nationwideCta: "PLAN A DELIVERY",
      routesEyebrow: "SUGGESTED ROUTES", routesTitle: "ROUTES THAT<br><span>KEEP YOU MOVING.</span>", routesIntro: "Explore example routes and send us an enquiry. Route, vehicle availability, timing and price are confirmed individually.", routesDisclaimer: "These are suggested route enquiries, not a live schedule. Contact us to confirm service for your dates and locations.", routeFrom: "FROM", routeTo: "TO", routeEnquire: "ENQUIRE ABOUT THIS ROUTE", routeAvailability: "Route availability confirmed on enquiry.",
      footerContact: "CONTACT DETAILS", alternateContact: "ALTERNATE", footerLoadDetails: "LOAD DETAILS", footerExplore: "ABOUT & ROUTES", rightsReserved: "All rights reserved.", footerServiceArea: "Based in Deoband · Serving destinations across India",
      serviceSmallLoad: "Small load", servicePartLoad: "Part load", serviceFullLoad: "Full load", serviceBigLoad: "Big load", serviceColdChain: "Cold chain enquiry", serviceExpress: "Express delivery", serviceWorkshop: "Workshop & industry goods",
      menuManagerTitle: "MENU LINKS", addMenuItem: "+ ADD MENU LINK", routeManagerTitle: "ROUTES", addRoute: "+ ADD ROUTE", menuLabelEnglish: "ENGLISH MENU LABEL", menuLabelHindi: "HINDI MENU LABEL", menuDestination: "LINK TO SECTION", routeFromPlaceholder: "Origin city / location", routeToPlaceholder: "Destination city / location", removeItem: "REMOVE",
      serviceLabel: "TRANSPORT SERVICE", servicePlaceholder: "Choose a service type", serviceRequired: "Please choose a transport service.", serviceNames: ["Small load", "Part load", "Full load", "Big load", "Cold chain enquiry", "Express delivery", "Workshop & industry goods", "Other — discuss with us"],
      serviceTypeLabel: "Service", pickupPlaceholder: "City, state, PIN or landmark", dropPlaceholder: "City, state, PIN or landmark", photoHttpsOnly: "Use a secure image URL beginning with https://."
    },
    hi: {
      capEyebrow: "हर सामान के लिए ट्रांसपोर्ट", capTitle: "छोटा लोड।<br><span>बड़ा। एक्सप्रेस।</span>", capIntro: "छोटा-बड़ा सामान, एक्सप्रेस डिलीवरी और वर्कशॉप या इंडस्ट्री की वस्तुएँ। अपनी ज़रूरत बताएं।", capCaveat: "पूरे भारत में डिलीवरी और एक्सप्रेस समय हर रास्ते के लिए पक्का होगा। 24×7 पूछताछ सहायता और GST बिलिंग उपलब्ध है; बुकिंग के समय बिलिंग की जानकारी दें। कोल्ड चेन सेवा उपयुक्त गाड़ी और रूट मिलने पर निर्भर है—बुकिंग से पहले पुष्टि करें।",
      serviceTypes: ["छोटा लोड", "बड़ा लोड", "एक्सप्रेस डिलीवरी", "वर्कशॉप और इंडस्ट्री का सामान"],
      serviceCopy: ["छोटे सामान और लोकल मूव के लिए मिनी ट्रक व उपयुक्त गाड़ियाँ।", "बड़े सामान के लिए ट्रक और बड़ी गाड़ियों के विकल्प।", "जल्दी डिलीवरी की पूछताछ; हर रास्ते का समय अलग से पक्का होगा।", "औज़ार, मशीनरी, पुर्ज़े और अन्य वर्कशॉप या इंडस्ट्री का सामान।"],
      serviceBadge: ["छोटा सामान", "बड़ा सामान", "तेज़ डिलीवरी", "कारोबार और इंडस्ट्री"],
      serviceHighlights: ["24×7 पूछताछ", "GST बिलिंग", "पूरे भारत में डिलीवरी"],
      nationwideEyebrow: "देवबंद से पूरे भारत में", nationwideTitle: "पूरे भारत में डिलीवरी", nationwideCta: "डिलीवरी बुक करें",
      routesEyebrow: "सुझाए गए रूट", routesTitle: "आपके लिए<br><span>आसान रास्ते।</span>", routesIntro: "उदाहरण के रूट देखें और पूछताछ भेजें। रूट, गाड़ी, समय और किराये की पुष्टि अलग से होगी।", routesDisclaimer: "ये सुझाए गए रूट हैं, लाइव शेड्यूल नहीं। तारीख और जगह के लिए उपलब्धता पूछें।", routeFrom: "यहाँ से", routeTo: "यहाँ तक", routeEnquire: "इस रूट के लिए पूछें", routeAvailability: "रूट की उपलब्धता पूछताछ पर पक्की होगी।",
      footerContact: "संपर्क जानकारी", alternateContact: "वैकल्पिक नंबर", footerLoadDetails: "सामान की सेवाएँ", footerExplore: "हमारे बारे में और रूट", rightsReserved: "सर्वाधिकार सुरक्षित।", footerServiceArea: "देवबंद से · पूरे भारत में सेवा",
      serviceSmallLoad: "छोटा लोड", servicePartLoad: "पार्ट लोड", serviceFullLoad: "फुल लोड", serviceBigLoad: "बड़ा लोड", serviceColdChain: "कोल्ड चेन पूछताछ", serviceExpress: "एक्सप्रेस डिलीवरी", serviceWorkshop: "वर्कशॉप और इंडस्ट्री का सामान",
      menuManagerTitle: "मेनू लिंक", addMenuItem: "+ मेनू लिंक जोड़ें", routeManagerTitle: "रूट", addRoute: "+ रूट जोड़ें", menuLabelEnglish: "अंग्रेज़ी मेनू नाम", menuLabelHindi: "हिंदी मेनू नाम", menuDestination: "किस सेक्शन से लिंक करें", routeFromPlaceholder: "शुरुआती शहर / जगह", routeToPlaceholder: "मंज़िल शहर / जगह", removeItem: "हटाएं",
      serviceLabel: "ट्रांसपोर्ट सेवा", servicePlaceholder: "सेवा का प्रकार चुनें", serviceRequired: "कृपया ट्रांसपोर्ट सेवा चुनें।", serviceNames: ["छोटा लोड", "पार्ट लोड", "फुल लोड", "बड़ा लोड", "कोल्ड चेन पूछताछ", "एक्सप्रेस डिलीवरी", "वर्कशॉप और इंडस्ट्री का सामान", "अन्य — हमसे बात करें"],
      serviceTypeLabel: "सेवा", pickupPlaceholder: "शहर, राज्य, पिन कोड या पहचान", dropPlaceholder: "शहर, राज्य, पिन कोड या पहचान", photoHttpsOnly: "सुरक्षित तस्वीर का URL https:// से शुरू होना चाहिए।"
    }
  };

  const VEHICLE_ICONS = ["▰", "▱", "◩", "▰", "▰", "◒", "✳", "↗"];
  const VEHICLE_PHOTOS = [
    "photo-1519003722824-194d4455a60c",
    "photo-1601584115197-04ecc0da31d7",
    "photo-1501706362039-c06b2d715385",
    "photo-1519003722824-194d4455a60c",
    "photo-1601584115197-04ecc0da31d7",
    "photo-1492144534655-ae79c964c9d7",
    "photo-1501706362039-c06b2d715385"
  ];
  const defaultVehiclePhoto = (index) => `https://images.unsplash.com/${VEHICLE_PHOTOS[index % VEHICLE_PHOTOS.length]}?auto=format&fit=crop&w=700&q=78`;
  const validPhotoUrl = (value) => {
    if (!value) return true;
    try {
      return new URL(value).protocol === "https:";
    } catch {
      return false;
    }
  };
  const VEHICLE_COPY = {
    en: [
    "The workhorse for bigger loads and longer hauls.",
    "A dependable fit for goods, stock and deliveries.",
    "A nimble ride for lighter loads and tight streets.",
    "Room for the bigger move. Ready when you are.",
    "Small footprint, surprisingly big capability.",
    "A comfortable ride for your vehicle transfer.",
    "A sturdy choice for agricultural loads and more.",
    "Tell us what you need moved."
    ],
    hi: [
      "ज़्यादा सामान और लंबी दूरी के लिए भरोसेमंद।",
      "सामान और डिलीवरी के लिए बढ़िया विकल्प।",
      "हल्के सामान और छोटी गलियों के लिए फुर्तीली गाड़ी।",
      "बड़े सामान के लिए भरपूर जगह।",
      "छोटी गाड़ी, काम बड़ा।",
      "गाड़ी एक जगह से दूसरी जगह पहुँचाने के लिए।",
      "खेती के सामान और अन्य ज़रूरतों के लिए मज़बूत।",
      "अपनी ज़रूरत बताइए, हम मदद करेंगे।"
    ]
  };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  let settings = loadSettings();
  let language = localStorage.getItem("sk-transport-language") === "hi" ? "hi" : "en";

  function t(key) {
    return TEXT[language][key] || FEATURE_TEXT[language][key] || TEXT.en[key] || FEATURE_TEXT.en[key] || key;
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    document.body.classList.toggle("hindi", language === "hi");
    document.title = language === "hi" ? `${settings.business} | हर सामान, मंज़िल तक` : `${settings.business} | Every load. On the move.`;
    $('meta[name="description"]').content = language === "hi"
      ? "एस के ट्रांसपोर्ट, देवबंद से पूरे भारत में डिलीवरी, एक्सप्रेस डिलीवरी पूछताछ, GST बिलिंग और 24×7 बुकिंग सहायता।"
      : "S K Transport, Deoband: pan-India delivery, express delivery enquiries, GST billing and 24x7 booking assistance.";
    $$("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
    $$("[data-i18n-html]").forEach((node) => { node.innerHTML = t(node.dataset.i18nHtml); });
    $$("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    $$("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", t(node.dataset.i18nAria)); });
    $$("[data-i18n-label]").forEach((node) => {
      const firstText = [...node.childNodes].find((child) => child.nodeType === Node.TEXT_NODE);
      if (firstText) firstText.textContent = t(node.dataset.i18nLabel);
    });
    updateWhatsAppLink();
    $$("[data-language]").forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderFleet();
    renderCapabilities();
    renderServiceHighlights();
    renderServiceOptions();
    renderMenuItems();
    renderRoutes();
    if (!dashboard.hidden) translateAdminVehicles();
    if (!login.hidden) setLoginMode();
  }

  $$("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.language;
      try {
        localStorage.setItem("sk-transport-language", language);
      } catch (error) {
        console.error("Could not remember language selection.", error);
      }
      applyLanguage();
    });
  });

  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEYS.settings) || "null");
      if (!saved || typeof saved !== "object") {
        return { ...structuredClone(DEFAULTS), vehiclePhotos: DEFAULTS.vehicles.map((_, index) => defaultVehiclePhoto(index)) };
      }
      const vehicles = Array.isArray(saved.vehicles) && saved.vehicles.length
        ? saved.vehicles.filter((vehicle) => typeof vehicle === "string" && vehicle.trim()).slice(0, 20)
        : [...DEFAULTS.vehicles];
      const menuItems = Array.isArray(saved.menuItems)
        ? saved.menuItems.filter((item) => item && typeof item.en === "string" && typeof item.hi === "string" && MENU_TARGETS.includes(item.href)).slice(0, MAX_MENU_ITEMS)
        : structuredClone(DEFAULT_MENU_ITEMS);
      const routes = Array.isArray(saved.routes)
        ? saved.routes.filter((route) => route && typeof route.from === "string" && typeof route.to === "string").slice(0, MAX_ROUTES)
        : structuredClone(DEFAULT_ROUTES);
      return {
        ...DEFAULTS,
        ...saved,
        email: saved.email || DEFAULTS.email,
        alternateEmail: saved.alternateEmail || "",
        secondary: saved.secondary || DEFAULTS.secondary,
        vehicles,
        menuItems,
        routes,
        vehiclePhotos: vehicles.map((_, index) =>
          typeof saved.vehiclePhotos?.[index] === "string" && validPhotoUrl(saved.vehiclePhotos[index])
            ? saved.vehiclePhotos[index]
            : defaultVehiclePhoto(index))
      };
    } catch (error) {
      console.error("Could not read saved S K Transport settings.", error);
      return { ...structuredClone(DEFAULTS), vehiclePhotos: DEFAULTS.vehicles.map((_, index) => defaultVehiclePhoto(index)) };
    }
  }

  function formatPhone(value) {
    const digits = String(value || "").replace(/\D/g, "");
    return digits.length === 10 ? `${digits.slice(0, 5)} ${digits.slice(5)}` : value;
  }

  function safeText(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function renderCapabilities() {
    const grid = $("#capability-grid");
    const icons = ["▱", "▰", "ϟ", "⚙"];
    grid.innerHTML = t("serviceTypes").map((name, index) => `
      <article class="capability-card" tabindex="0" role="button" data-service-index="${index}">
        <div class="capability-card-head"><span class="capability-icon">${icons[index]}</span><span class="capability-card-number">0${index + 1}</span></div>
        <span class="capability-badge">${safeText(t("serviceBadge")[index])}</span>
        <h3>${safeText(name)}</h3><p>${safeText(t("serviceCopy")[index])}</p>
        <span class="capability-link">${safeText(t("fleetLink"))} <b>↗</b></span>
      </article>`).join("");
    $$(".capability-card", grid).forEach((card) => {
      const choose = () => {
        const select = $("#booking-service");
        select.selectedIndex = SERVICE_OPTION_INDEX[Number(card.dataset.serviceIndex)] + 1;
        $("#book").scrollIntoView({ behavior: "smooth" });
        select.focus({ preventScroll: true });
      };
      card.addEventListener("click", choose);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          choose();
        }
      });
    });
  }

  function renderServiceHighlights() {
    const icons = ["◷", "▤", "↗"];
    $("#service-highlights").innerHTML = t("serviceHighlights").map((label, index) =>
      `<div class="service-highlight"><span aria-hidden="true">${icons[index]}</span><strong>${safeText(label)}</strong></div>`
    ).join("");
  }

  function menuTargetLabel(href) {
    const labels = {
      "#home": language === "hi" ? "होम" : "Home",
      "#services": language === "hi" ? "गाड़ियाँ" : "Fleet",
      "#capabilities": language === "hi" ? "सेवाएँ" : "Services",
      "#routes": language === "hi" ? "रूट" : "Routes",
      "#about": language === "hi" ? "हमारे बारे में" : "About",
      "#book": language === "hi" ? "बुकिंग" : "Booking",
      "#contact": language === "hi" ? "संपर्क" : "Contact"
    };
    return labels[href] || href;
  }

  function renderMenuItems() {
    const links = settings.menuItems.map((item) => {
      const label = language === "hi" ? item.hi || item.en : item.en || item.hi;
      return `<a href="${safeText(item.href)}">${safeText(label)}</a>`;
    }).join("");
    $("#menu-items").innerHTML = links;
    $("#footer-menu-items").innerHTML = settings.menuItems
      .filter((item) => item.href !== "#routes" && item.href !== "#about")
      .map((item) => {
        const label = language === "hi" ? item.hi || item.en : item.en || item.hi;
        return `<a href="${safeText(item.href)}">${safeText(label)}</a>`;
      }).join("");
  }

  function renderRoutes() {
    $("#routes-grid").innerHTML = settings.routes.length
      ? settings.routes.map((route, index) => `
        <article class="route-card">
          <div class="route-card-index">ROUTE ${String(index + 1).padStart(2, "0")}</div>
          <div class="route-card-stops"><span><small>${safeText(t("routeFrom"))}</small><strong>${safeText(route.from)}</strong></span><i aria-hidden="true">→</i><span><small>${safeText(t("routeTo"))}</small><strong>${safeText(route.to)}</strong></span></div>
          <p>${safeText(t("routeAvailability"))}</p>
          <button type="button" data-enquire-route="${index}">${safeText(t("routeEnquire"))} <b>↗</b></button>
        </article>`).join("")
      : `<p class="routes-empty">${safeText(t("routesDisclaimer"))}</p>`;
    $$("[data-enquire-route]", $("#routes-grid")).forEach((button) => {
      button.addEventListener("click", () => {
        const route = settings.routes[Number(button.dataset.enquireRoute)];
        if (!route) return;
        $("#booking-form").elements.pickup.value = route.from;
        $("#booking-form").elements.drop.value = route.to;
        $("#book").scrollIntoView({ behavior: "smooth" });
        $("#booking-form").elements.name.focus({ preventScroll: true });
      });
    });
  }

  function renderServiceOptions() {
    const select = $("#booking-service");
    const selected = select.value;
    select.innerHTML = `<option value="" disabled>${safeText(t("servicePlaceholder"))}</option>` +
      t("serviceNames").map((name, index) => `<option value="${index + 1}">${safeText(name)}</option>`).join("");
    if (selected) select.value = selected;
    else select.selectedIndex = 0;
    select.required = true;
  }

  function renderFleet() {
    const grid = $("#fleet-grid");
    const choices = $("#vehicle-options");
    const chosenVehicle = $('input[name="vehicle"]:checked', choices)?.value || "";
    grid.innerHTML = "";
    choices.innerHTML = "";
    settings.vehicles.forEach((vehicle, index) => {
      const label = safeText(vehicle);
      const slug = `vehicle-${index}`;
      const description = VEHICLE_COPY[language][index] || (language === "hi" ? "इस गाड़ी के बारे में पूछें।" : "Available for your next move. Ask us about this vehicle.");
      const visibleVehicle = language === "hi" ? (DEFAULTS.vehicles[index] === vehicle ? ["ट्रक", "डीसीएम", "छोटी गाड़ी", "बड़ी गाड़ी", "मिनी ट्रक", "कार", "ट्रैक्टर ट्रॉली"][index] : label) : label;
      grid.insertAdjacentHTML("beforeend", `<article class="fleet-card" data-vehicle="${label}" tabindex="0" role="button" aria-label="${safeText(language === "hi" ? `${visibleVehicle} बुक करें` : `Book ${vehicle}`)}">
        <div class="fleet-photo"><img src="${safeText(settings.vehiclePhotos?.[index] || defaultVehiclePhoto(index))}" data-fallback="${safeText(defaultVehiclePhoto(index))}" alt="${safeText(language === "hi" ? `${visibleVehicle} की तस्वीर` : `${vehicle} transport vehicle`)}" loading="lazy" decoding="async"><span class="fleet-photo-shade"></span><span class="fleet-num">0${index + 1} <i> / 0${settings.vehicles.length}</i></span><span class="fleet-icon" aria-hidden="true">${VEHICLE_ICONS[index] || "↗"}</span><span class="fleet-image-label">SK · ALL INDIA</span></div>
        <div class="fleet-card-copy"><h3>${safeText(visibleVehicle)}</h3><p>${description}</p><span class="fleet-arrow" aria-hidden="true">↗</span></div>
      </article>`);
      choices.insertAdjacentHTML("beforeend", `<span class="vehicle-choice"><input id="${slug}" name="vehicle" type="radio" value="${label}" ${index === 0 ? "required" : ""}><label for="${slug}">${safeText(visibleVehicle)}</label></span>`);
    });
    if (chosenVehicle) {
      const previouslyChosen = $$('input[name="vehicle"]', choices).find((radio) => radio.value === chosenVehicle);
      if (previouslyChosen) previouslyChosen.checked = true;
    }
    $$(".fleet-card", grid).forEach((card) => {
      const choose = () => {
        const radio = $(`#vehicle-options input[value="${CSS.escape(card.dataset.vehicle)}"]`);
        if (radio) radio.checked = true;
        $("#book").scrollIntoView({ behavior: "smooth" });
      };
      card.addEventListener("click", choose);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          choose();
        }
      });
    });
    $$("img", grid).forEach((image) => {
      image.addEventListener("error", () => {
        if (!image.dataset.fallbackUsed && image.src !== image.dataset.fallback) {
          image.dataset.fallbackUsed = "true";
          image.src = image.dataset.fallback;
          return;
        }
        image.closest(".fleet-photo").classList.add("image-unavailable");
      });
    });
  }

  function renderSettings() {
    $$("[data-business]").forEach((node) => { node.textContent = settings.business; });
    $$("[data-owner]").forEach((node) => { node.textContent = settings.owner; });
    $$("[data-address]").forEach((node) => {
      node.innerHTML = safeText(settings.address).replace(/, /g, "<br>");
    });
    $$("[data-primary-display]").forEach((node) => { node.textContent = formatPhone(settings.primary); });
    $$("[data-secondary-display]").forEach((node) => { node.textContent = formatPhone(settings.secondary); });
    $$("[data-primary-phone]").forEach((node) => {
      node.href = `tel:${settings.primary.replace(/\D/g, "")}`;
    });
    $$("[data-secondary-phone]").forEach((node) => {
      node.href = `tel:${settings.secondary.replace(/\D/g, "")}`;
    });
    const emailContact = $("#email-contact");
    emailContact.hidden = !settings.email;
    if (settings.email) {
      const emailLink = $("[data-email-link]", emailContact);
      emailLink.href = `mailto:${settings.email}`;
      emailLink.textContent = settings.email;
      $("#footer-email").href = `mailto:${settings.email}`;
      $("[data-footer-email-text]").textContent = settings.email;
    }
    $("#footer-email").hidden = !settings.email;
    const activeEmails = [settings.email, settings.alternateEmail].filter(Boolean);
    $("[data-delivery-emails]").textContent = activeEmails.join(" · ");
    updateWhatsAppLink();
    renderFleet();
    renderMenuItems();
    renderRoutes();
  }

  function updateWhatsAppLink() {
    const whatsapp = $(".whatsapp-float");
    whatsapp.href = whatsappUrl(settings.primary, language === "hi" ? "नमस्ते, मुझे S K Transport से गाड़ी बुक करनी है।" : "Hello, I would like to book a vehicle with S K Transport.");
    const driverWhatsApp = $("[data-driver-whatsapp]");
    driverWhatsApp.href = whatsappUrl(settings.primary, language === "hi"
      ? "नमस्ते, मैं ड्राइवर/गाड़ी मालिक हूँ और S K Transport के ट्रांसपोर्ट नेटवर्क से जुड़कर बुकिंग के काम के अवसरों के बारे में बात करना चाहता हूँ।"
      : "Hello, I am a driver/fleet owner interested in connecting with S K Transport's transport network to discuss booking opportunities.");
  }

  function composeMessage(data) {
    const messageVehicle = language === "hi"
      ? (DEFAULTS.vehicles.includes(data.vehicle) ? ["ट्रक", "डीसीएम", "छोटी गाड़ी", "बड़ी गाड़ी", "मिनी ट्रक", "कार", "ट्रैक्टर ट्रॉली"][DEFAULTS.vehicles.indexOf(data.vehicle)] : data.vehicle)
      : data.vehicle;
    const serviceName = t("serviceNames")[Number(data.serviceType) - 1] || t("notSpecified");
    const lines = [
      `${t("bookingHeading")} - ${settings.business}`,
      `${t("vehicleLabel")}: ${messageVehicle}`,
      `${t("serviceTypeLabel")}: ${serviceName}`,
      `${t("customerName")}: ${data.name}`,
      `${t("customerPhone")}: ${data.phone}`,
      `${t("pickup")}: ${data.pickup}`,
      `${t("drop")}: ${data.drop}`,
      `${t("tripDate")}: ${data.date || t("dateFlexible")}`,
      `${t("load")}: ${data.load || t("notSpecified")}`,
      `${t("notes")}: ${data.message || t("none")}`
    ];
    return lines.join("\n");
  }

  function smsLink(number, message) {
    const separator = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? "&" : "?";
    return `sms:${number.replace(/\D/g, "")}${separator}body=${encodeURIComponent(message)}`;
  }

  function whatsappUrl(number, message) {
    let digits = number.replace(/\D/g, "");
    if (digits.length === 10) digits = `91${digits}`;
    return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  }

  async function sendBookingEmail(data, message) {
    const payload = {
      name: data.name,
      phone: data.phone,
      vehicle: data.vehicle,
      service_type: t("serviceNames")[Number(data.serviceType) - 1] || t("notSpecified"),
      pickup: data.pickup,
      drop: data.drop,
      date: data.date || t("dateFlexible"),
      load: data.load || t("notSpecified"),
      notes: data.message || t("none"),
      booking_details: message,
      _subject: `${settings.business}: ${t("bookingHeading")} — ${data.name}`,
      _template: "table",
      _honey: ""
    };
    if (settings.alternateEmail && settings.alternateEmail.toLowerCase() !== settings.email.toLowerCase()) {
      payload._cc = settings.alternateEmail;
    }

    let response;
    try {
      response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(settings.email)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error("Could not connect to the booking email provider.", error);
      throw new Error(t("emailSendFailed"));
    }
    let result;
    try {
      result = await response.json();
    } catch (error) {
      console.error("The booking email provider returned an unreadable response.", error);
      throw new Error(t("formSubmitError"));
    }
    if (!response.ok || !(result.success === true || result.success === "true")) {
      const providerMessage = typeof result.message === "string" ? result.message : "";
      const needsActivation = /activat|verify|confirm/i.test(providerMessage);
      throw new Error(needsActivation ? t("emailSetupRequired") : t("emailSendFailed"));
    }
  }

  function showBookingActions(result, message) {
    const uniqueNumbers = [...new Set([settings.primary, settings.secondary].map((number) => number.replace(/\D/g, "")).filter(Boolean))];
    result.insertAdjacentHTML("beforeend", `<p class="delivery-actions-label">${t("whatsappBooking")}</p>
      <a class="delivery-whatsapp-link" href="${whatsappUrl(settings.primary, message)}" target="_blank" rel="noopener noreferrer">◉ ${t("whatsappBooking")} ↗</a>
      <p class="delivery-actions-label">${t("smsFallback")}</p>
      ${uniqueNumbers.map((number) => `<a href="${smsLink(number, message)}">${t("openSms")} ${safeText(formatPhone(number))} ↗</a>`).join("")}
      <br><button type="button" id="copy-booking">${t("copyBooking")}</button>`);
    $("#copy-booking", result).addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(message);
        $("#copy-booking").textContent = t("copied");
      } catch (error) {
        console.error("Could not copy booking details.", error);
        $("#copy-booking").textContent = t("copyUnavailable");
      }
    });
  }

  $("#booking-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.dataset.submitting === "true") return;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const phone = String(formData.get("phone")).trim();
    if (phone.replace(/\D/g, "").length < 10) {
      form.elements.phone.setCustomValidity(t("invalidPhone"));
      form.elements.phone.reportValidity();
      form.elements.phone.addEventListener("input", () => form.elements.phone.setCustomValidity(), { once: true });
      return;
    }
    const data = {
      vehicle: String(formData.get("vehicle") || ""),
      serviceType: String(formData.get("serviceType") || ""),
      name: String(formData.get("name") || "").trim(),
      phone,
      pickup: String(formData.get("pickup") || "").trim(),
      drop: String(formData.get("drop") || "").trim(),
      date: String(formData.get("date") || ""),
      load: String(formData.get("load") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };
    if (!data.vehicle) {
      $("#vehicle-options input").item(0)?.focus();
      return;
    }
    const message = composeMessage(data);
    const result = $("#sms-result");
    result.hidden = false;
    result.classList.remove("delivery-failed");
    result.innerHTML = `<strong>${t("emailSending")}</strong><span class="sending-spinner" aria-hidden="true"></span>`;
    form.dataset.submitting = "true";
    const submitButton = $(".submit-button", form);
    submitButton.disabled = true;
    try {
      await sendBookingEmail(data, message);
      result.innerHTML = `<strong>${t("emailSent")}</strong><p>${t("smsInstructions")}</p>`;
      showBookingActions(result, message);
    } catch (error) {
      console.error("Booking email delivery failed.", error);
      result.classList.add("delivery-failed");
      result.innerHTML = `<strong>${safeText(error.message || t("emailSendFailed"))}</strong><p>${t("emailSendFailed")}</p>`;
      showBookingActions(result, message);
    } finally {
      form.dataset.submitting = "false";
      submitButton.disabled = false;
    }
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  const dialog = $("#admin-dialog");
  const login = $("#admin-login");
  const dashboard = $("#admin-dashboard");
  const passwordConfigured = () => Boolean(localStorage.getItem(KEYS.adminPassword) && localStorage.getItem(KEYS.adminUsername));

  function setLoginMode() {
    const existing = passwordConfigured();
    $("#admin-login-copy").textContent = existing ? t("adminLoginExisting") : t("adminLoginNew");
    $("#admin-password-label").innerHTML = `${existing ? t("adminPassword") : t("createPassword")}<input name="password" type="password" autocomplete="${existing ? "current-password" : "new-password"}" ${existing ? "" : "minlength=\"8\""} required>`;
    $("#admin-auth-submit").innerHTML = `<span>${existing ? t("login") : t("setPassword")}</span> <span>↗</span>`;
    $("#admin-error").textContent = "";
  }

  async function digest(value) {
    const encoded = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest("SHA-256", encoded);
    return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  let adminMenuItems = [];
  let adminRoutes = [];

  function fillSettingsForm() {
    const form = $("#settings-form");
    for (const key of ["business", "owner", "address", "primary", "secondary", "email", "alternateEmail"]) {
      form.elements[key].value = settings[key] || "";
    }
    renderAdminVehicles();
    adminMenuItems = structuredClone(settings.menuItems);
    adminRoutes = structuredClone(settings.routes);
    renderAdminMenuItems();
    renderAdminRoutes();
  }

  function renderAdminMenuItems() {
    $("#admin-menu-items").innerHTML = adminMenuItems.map((item, index) => `
      <div class="admin-menu-editor" data-menu-row="${index}">
        <label><span>${safeText(t("menuLabelEnglish"))}</span><input data-menu-en value="${safeText(item.en)}" maxlength="50" required></label>
        <label><span>${safeText(t("menuLabelHindi"))}</span><input data-menu-hi value="${safeText(item.hi)}" maxlength="50" required></label>
        <label><span>${safeText(t("menuDestination"))}</span><select data-menu-href required>${MENU_TARGETS.map((href) => `<option value="${href}" ${item.href === href ? "selected" : ""}>${safeText(menuTargetLabel(href))}</option>`).join("")}</select></label>
        <button type="button" data-remove-menu="${index}">${safeText(t("removeItem"))}</button>
      </div>`).join("");
    $$("[data-menu-en], [data-menu-hi]", $("#admin-menu-items")).forEach((input) => {
      input.addEventListener("input", () => {
        const row = Number(input.closest("[data-menu-row]").dataset.menuRow);
        adminMenuItems[row][input.hasAttribute("data-menu-en") ? "en" : "hi"] = input.value;
      });
    });
    $$("[data-menu-href]", $("#admin-menu-items")).forEach((select) => {
      select.addEventListener("change", () => {
        adminMenuItems[Number(select.closest("[data-menu-row]").dataset.menuRow)].href = select.value;
      });
    });
    $$("[data-remove-menu]", $("#admin-menu-items")).forEach((button) => {
      button.addEventListener("click", () => {
        adminMenuItems.splice(Number(button.dataset.removeMenu), 1);
        renderAdminMenuItems();
      });
    });
  }

  function renderAdminRoutes() {
    $("#admin-routes").innerHTML = adminRoutes.map((route, index) => `
      <div class="admin-route-editor" data-admin-route="${index}">
        <label><span>${safeText(t("routeFrom"))}</span><input data-route-from value="${safeText(route.from)}" placeholder="${safeText(t("routeFromPlaceholder"))}" maxlength="100" required></label>
        <span class="admin-route-arrow" aria-hidden="true">→</span>
        <label><span>${safeText(t("routeTo"))}</span><input data-route-to value="${safeText(route.to)}" placeholder="${safeText(t("routeToPlaceholder"))}" maxlength="100" required></label>
        <button type="button" data-remove-route="${index}">${safeText(t("removeItem"))}</button>
      </div>`).join("");
    $$("[data-route-from], [data-route-to]", $("#admin-routes")).forEach((input) => {
      input.addEventListener("input", () => {
        const row = Number(input.closest("[data-admin-route]").dataset.adminRoute);
        adminRoutes[row][input.hasAttribute("data-route-from") ? "from" : "to"] = input.value;
      });
    });
    $$("[data-remove-route]", $("#admin-routes")).forEach((button) => {
      button.addEventListener("click", () => {
        adminRoutes.splice(Number(button.dataset.removeRoute), 1);
        renderAdminRoutes();
      });
    });
  }

  function renderAdminVehicles() {
    $("#admin-vehicles").innerHTML = settings.vehicles.map((vehicle, index) => `
      <div class="admin-vehicle-editor" data-vehicle-row="${index}">
        <div class="admin-vehicle-row"><input data-vehicle-name aria-label="${safeText(language === "hi" ? `गाड़ी ${index + 1}` : `Vehicle ${index + 1}`)}" value="${safeText(vehicle)}" maxlength="40"><button type="button" data-remove-vehicle="${index}" aria-label="${safeText(language === "hi" ? `${vehicle} हटाएं` : `Remove ${vehicle}`)}">${language === "hi" ? "हटाएं" : "REMOVE"}</button></div>
        <div class="admin-vehicle-photo-row"><img class="admin-vehicle-preview" src="${safeText(settings.vehiclePhotos?.[index] || defaultVehiclePhoto(index))}" alt=""><label class="admin-photo-field"><span>${language === "hi" ? "गाड़ी की तस्वीर का HTTPS URL" : "VEHICLE PHOTO HTTPS URL"}</span><input data-vehicle-photo type="url" inputmode="url" placeholder="https://…" value="${safeText(settings.vehiclePhotos?.[index] || "")}" aria-label="${safeText(language === "hi" ? `${vehicle} की तस्वीर का URL` : `${vehicle} photo URL`)}" maxlength="2048"></label></div>
      </div>`).join("");
    $$("[data-vehicle-photo]", $("#admin-vehicles")).forEach((input) => {
      input.addEventListener("input", () => {
        const value = input.value.trim();
        input.setCustomValidity(validPhotoUrl(value) ? "" : t("photoHttpsOnly"));
        if (value && validPhotoUrl(value)) {
          $(".admin-vehicle-preview", input.closest(".admin-vehicle-editor")).src = value;
        }
      });
    });
    $$("[data-remove-vehicle]", $("#admin-vehicles")).forEach((button) => {
      button.addEventListener("click", () => {
        if (settings.vehicles.length === 1) {
          window.alert(t("keepOneVehicle"));
          return;
        }
        const index = Number(button.dataset.removeVehicle);
        settings.vehicles.splice(index, 1);
        settings.vehiclePhotos.splice(index, 1);
        renderAdminVehicles();
      });
    });
  }

  function translateAdminVehicles() {
    $$("[data-remove-vehicle]", $("#admin-vehicles")).forEach((button) => {
      const index = Number(button.dataset.removeVehicle);
      const vehicle = $("[data-vehicle-name]", button.parentElement)?.value || settings.vehicles[index] || "";
      button.textContent = language === "hi" ? "हटाएं" : "REMOVE";
      button.setAttribute("aria-label", language === "hi" ? `${vehicle} हटाएं` : `Remove ${vehicle}`);
    });
  }

  function showDashboard() {
    login.hidden = true;
    dashboard.hidden = false;
    fillSettingsForm();
  }

  function openAdminDialog() {
    setLoginMode();
    login.hidden = false;
    dashboard.hidden = true;
    dialog.showModal();
  }

  document.querySelector(".admin-trigger").addEventListener("click", openAdminDialog);
  dialog.addEventListener("close", () => {
    if (!isAdminPage) return;
    if (window.parent !== window) window.parent.location.href = "index.html";
    else window.location.href = "index.html";
  });
  $(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  $("#admin-auth-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const password = form.elements.password.value;
    const error = $("#admin-error");
    try {
      const passwordHash = await digest(password);
      if (passwordConfigured()) {
        const username = form.elements.username.value.trim();
        if (username !== localStorage.getItem(KEYS.adminUsername) || passwordHash !== localStorage.getItem(KEYS.adminPassword)) {
          error.textContent = t("passwordMismatch");
          return;
        }
      } else {
        localStorage.setItem(KEYS.adminUsername, form.elements.username.value.trim());
        localStorage.setItem(KEYS.adminPassword, passwordHash);
      }
      form.reset();
      showDashboard();
    } catch (failure) {
      console.error("Admin login could not be completed.", failure);
      error.textContent = t("secureContext");
    }
  });

  $("#add-vehicle").addEventListener("click", () => {
    const input = $("#new-vehicle");
    const name = input.value.trim();
    if (!name) {
      input.focus();
      return;
    }
    if (settings.vehicles.length >= 20) {
      window.alert(t("maxVehicles"));
      return;
    }
    if (settings.vehicles.some((vehicle) => vehicle.toLowerCase() === name.toLowerCase())) {
      window.alert(t("duplicateVehicle"));
      return;
    }
    settings.vehicles.push(name);
    settings.vehiclePhotos.push(defaultVehiclePhoto(settings.vehicles.length - 1));
    input.value = "";
    renderAdminVehicles();
  });

  $("#add-menu-item").addEventListener("click", () => {
    if (adminMenuItems.length >= MAX_MENU_ITEMS) {
      window.alert(language === "hi" ? "मेनू में अधिकतम 12 लिंक जोड़ सकते हैं।" : "You can add up to 12 menu links.");
      return;
    }
    adminMenuItems.push({ en: "New link", hi: "नया लिंक", href: "#routes" });
    renderAdminMenuItems();
    $("[data-menu-en]", $("#admin-menu-items").lastElementChild)?.focus();
  });

  $("#add-route").addEventListener("click", () => {
    if (adminRoutes.length >= MAX_ROUTES) {
      window.alert(language === "hi" ? "अधिकतम 30 रूट जोड़ सकते हैं।" : "You can add up to 30 routes.");
      return;
    }
    adminRoutes.push({ from: "", to: "" });
    renderAdminRoutes();
    $("[data-route-from]", $("#admin-routes").lastElementChild)?.focus();
  });

  $("#settings-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const numbers = $("#admin-vehicles");
    const vehicleEntries = $$(".admin-vehicle-editor", numbers).map((row) => ({
      name: $("[data-vehicle-name]", row).value.trim(),
      photo: $("[data-vehicle-photo]", row).value.trim()
    })).filter((entry) => entry.name);
    const vehicles = vehicleEntries.map((entry) => entry.name);
    if (!vehicles.length) {
      window.alert(t("addBeforeSave"));
      return;
    }
    settings = {
      business: String(data.get("business")).trim(),
      owner: String(data.get("owner")).trim(),
      address: String(data.get("address")).trim(),
      primary: String(data.get("primary")).trim(),
      secondary: String(data.get("secondary")).trim(),
      email: String(data.get("email")).trim(),
      alternateEmail: String(data.get("alternateEmail")).trim(),
      vehicles,
      vehiclePhotos: vehicleEntries.map((entry) => entry.photo),
      menuItems: adminMenuItems.map((item) => ({
        en: item.en.trim(),
        hi: item.hi.trim(),
        href: MENU_TARGETS.includes(item.href) ? item.href : "#home"
      })),
      routes: adminRoutes.map((route) => ({ from: route.from.trim(), to: route.to.trim() }))
    };
    try {
      localStorage.setItem(KEYS.settings, JSON.stringify(settings));
      renderSettings();
      window.alert(t("saved"));
    } catch (error) {
      console.error("Could not save S K Transport settings.", error);
      window.alert(t("saveFailed"));
    }
  });

  $("#admin-logout").addEventListener("click", () => {
    dialog.close();
  });

  const menuButton = $(".menu-toggle");
  menuButton.addEventListener("click", () => {
    const nav = $(".main-nav");
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  $(".main-nav").addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    $(".main-nav").classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
  $(".footer-main").addEventListener("click", (event) => {
    const link = event.target.closest("[data-footer-service]");
    if (!link) return;
    $("#booking-service").value = String(Number(link.dataset.footerService) + 1);
  });
  $("#year").textContent = new Date().getFullYear();
  renderSettings();
  applyLanguage();
  if (isAdminPage) {
    document.body.classList.add("admin-only");
    openAdminDialog();
  }

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $$(".section-heading,.fleet-card,.about-copy,.booking-form,.contact-strip-copy").forEach((node) => {
      node.classList.add("reveal-on-scroll");
      revealObserver.observe(node);
    });
  }

  const heroArt = $(".hero-art");
  if (window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $(".hero").addEventListener("pointermove", (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      heroArt.style.setProperty("--pointer-x", `${x * 12}px`);
      heroArt.style.setProperty("--pointer-y", `${y * 9}px`);
    });
  }
})();
