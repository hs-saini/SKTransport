(() => {
  "use strict";

  const KEYS = {
    settings: "sk-transport-settings-v1",
    adminPassword: "sk-transport-admin-password-v1",
    adminUsername: "sk-transport-admin-username-v1"
  };
  const DEFAULTS = {
    business: "S K Transport",
    owner: "Sushil Kumar",
    address: "Noopur near Sugar Mill Deoband, Deoband, 247554",
    primary: "8445486229",
    secondary: "7078862293",
    email: "sainihimanshu27958@gmail.com",
    alternateEmail: "",
    vehicles: ["Truck", "DCM", "Chhoti Gadi", "Badi Gadi", "Mini Truck", "Car", "Tractor Trali"]
  };
  const TEXT = {
    en: {
      languageGroup: "Choose language", brandTag: "DEOBAND · ALL INDIA SERVICE", announce: "ALL-INDIA TRANSPORT SERVICE", availability: "CALL FOR AVAILABILITY", navFleet: "Our fleet", navCoverage: "Coverage", navAbout: "Why S K", navContact: "Contact", navBook: "Book a vehicle",
      heroEyebrow: "YOUR LOAD. OUR ROAD.", heroTitle: "EVERY LOAD.<br><span>ON THE MOVE.</span>", heroIntro: "From a single parcel to a full-scale haul, we transport your goods from Deoband to destinations across India.", heroCta: "Find your vehicle", quickCall: "QUICK CALL", heroProof: "Transport service across India.", heroProofSub: "Based in Deoband, ready to roll nationwide.", coverageNote: "BASED IN DEOBAND · SERVING ALL INDIA", heroStamp: "RELIABLE<br>BY NATURE", artCaption: "BUILT TO GET YOU THERE", scrollPrompt: "SCROLL TO EXPLORE <b>↓</b>",
      ticker: "<span>TRUCKS</span><b>✳</b><span>DCM</span><b>✳</b><span>MINI TRUCKS</span><b>✳</b><span>CARS</span><b>✳</b><span>TRACTOR TROLLY</span><b>✳</b><span>AND MORE</span><b>✳</b>".repeat(2),
      fleetEyebrow: "THE RIGHT RIDE FOR THE JOB", fleetTitle: "BIG LOAD. SMALL LOAD.<br><span>WE'VE GOT YOU.</span>", fleetIntro: "Choose the wheels that work for your move. Tell us what you need and we'll help line up the right vehicle.", fleetQuestion: "NOT SURE WHAT FITS?", fleetLink: "Tell us what you're moving",
      localKnowhow: "ALL-INDIA SERVICE", localArea: "BASED IN DEOBAND<br>SERVING ALL INDIA", aboutEyebrow: "A NAME YOU CAN COUNT ON", aboutTitle: "WE KNOW THE<br>WAY <span>FORWARD.</span>", aboutIntro: "Based in Deoband, S K Transport arranges dependable vehicle service for moves to destinations across India. From everyday deliveries to big hauls, we bring a personal touch to every journey.", aboutSub: "Tell us what you need moved, where it's going and when. We'll help plan the journey from Deoband to your destination.", localContact: "YOUR TRANSPORT CONTACT", proprietor: "Proprietor, S K Transport",
      bookingEyebrow: "LET'S GET YOU MOVING", bookingTitle: "YOUR NEXT MOVE<br>STARTS <span>RIGHT HERE.</span>", bookingIntro: "Need transport from Deoband to anywhere in India? Share a few details and we'll get back to you. No commitment, just a conversation about your move.", preferCall: "PREFER TO CALL?", phoneAway: "We're just a phone call away.", smsNote: "Share your pickup and destination anywhere in India. Your details open as an SMS draft—review and tap send to contact S K Transport.",
      bookingFormTitle: "BOOKING ENQUIRY", formCount: "NO. <b>01</b> / 01", chooseVehicle: "01 &nbsp; PICK YOUR VEHICLE <sup>*</sup>", nameLabel: "YOUR NAME <sup>*</sup>", phoneLabel: "PHONE NUMBER <sup>*</sup>", pickupLabel: "PICKUP LOCATION", dropLabel: "DROP LOCATION", dateLabel: "WHEN DO YOU NEED IT?", loadLabel: "WHAT ARE WE MOVING?", messageLabel: "ANYTHING ELSE WE SHOULD KNOW?",
      namePlaceholder: "e.g. Rahul Sharma", phonePlaceholder: "Your 10-digit number", pickupPlaceholder: "Where should we pick up?", dropPlaceholder: "Where is it going?", loadPlaceholder: "Furniture, goods, vehicle...", messagePlaceholder: "Add details about your load or trip...", submitBooking: "Prepare my booking", bookingConsent: "I agree to share these booking details with S K Transport by email. The email provider may retain submissions for up to 30 days.", formPrivacy: "Booking details are emailed to the business address above. SMS is not sent automatically; open a prepared SMS or WhatsApp message to contact us.",
      contactEyebrow: "HERE WHEN YOU NEED US", contactTitle: "GOOD TO GO?<br><span>LET'S TALK.</span>", findUs: "FIND US", callUs: "GIVE US A RING", emailUs: "EMAIL US", footerTag: "EVERY LOAD. ON THE MOVE.", adminButton: "ADMIN",
      privateAccess: "PRIVATE ACCESS", adminTitle: "TRANSPORT<br><span>CONTROL ROOM.</span>", adminUsername: "ADMIN USERNAME", createPassword: "CREATE PASSWORD", setPassword: "Set password & continue", adminWarning: "This static-site admin is browser-local, not secure for public production use. Use a private device; clearing browser data removes saved settings.", siteSettings: "SITE SETTINGS", dashboardTitle: "YOUR BUSINESS.<br><span>YOUR CALL.</span>", logout: "LOG OUT", businessDetails: "BUSINESS DETAILS", businessName: "BUSINESS NAME", addressLabel: "ADDRESS", primaryPhone: "PRIMARY PHONE", bookingPhone: "BOOKING PHONE", emailPrimary: "PRIMARY EMAIL (REQUIRED FOR BOOKINGS)", emailAlternate: "ALTERNATE EMAIL (OPTIONAL)", emailPrimaryPlaceholder: "Bookings go to this email", alternateEmailPlaceholder: "Booking email copy (optional)", phoneContacts: "PHONE CONTACTS", primaryMobile: "PRIMARY MOBILE", alternateMobile: "ALTERNATE MOBILE", emailOptional: "EMAIL (OPTIONAL)", emailPlaceholder: "Add an email when you have one", vehiclesHeading: "VEHICLES", newVehiclePlaceholder: "New vehicle name", newVehicleAria: "New vehicle name", addVehicle: "+ ADD VEHICLE", adminNote: "Settings are saved only in this browser; email edits here affect bookings from this device only. To change the email for all visitors, update the deployed site or connect a shared backend. FormSubmit also requires its activation email to be confirmed before bookings. SMS needs a separate provider account.", saveChanges: "Save changes", closeAdmin: "Close admin panel",
      invalidPhone: "Please enter a valid phone number with at least 10 digits.", smsReady: "Your enquiry is ready to send.", smsInstructions: "Choose a number below. Your messaging app will open with the booking details filled in; review and tap send. Repeat for the other number if you want both contacts to receive it.", emailDraftNotice: " An email draft is available too.", openSms: "Open SMS to", prepareEmail: "Prepare email to", copyBooking: "Copy booking details", copied: "Copied", copyUnavailable: "Copy unavailable — select SMS above", bookingHeading: "Booking enquiry", dateFlexible: "Flexible / not specified", notSpecified: "Not specified", none: "None", vehicleLabel: "Vehicle", customerName: "Name", customerPhone: "Phone", pickup: "Pickup", drop: "Drop", tripDate: "Date", load: "Load", notes: "Notes",
      adminLoginExisting: "Sign in to manage business details and your public vehicle list.", adminLoginNew: "Set an admin password for this browser to manage your public business details and vehicle list.", adminPassword: "ADMIN PASSWORD", login: "Log in", passwordMismatch: "Those admin credentials don't match. Please try again.", secureContext: "Password setup requires a secure browser context (HTTPS or localhost).", keepOneVehicle: "Keep at least one vehicle in the public fleet.", maxVehicles: "The public vehicle list is limited to 20 items.", duplicateVehicle: "That vehicle is already on the list.", addBeforeSave: "Add at least one vehicle before saving.", saved: "Changes saved in this browser.", saveFailed: "Changes could not be saved. Check browser storage settings and try again."
      ,deliveryHeading: "Booking details are emailed automatically", deliveryTo: "Send to", emailActivationNote: "First use: confirm the activation email from FormSubmit before accepting live bookings.", smsDeliveryNote: "SMS is prepared for you to review and send.", emailLive: "EMAIL DELIVERY", whatsappLabel: "WhatsApp us", whatsappAria: "Chat with S K Transport on WhatsApp", emailSending: "Sending booking email…", emailSent: "Booking email sent successfully.", emailSetupRequired: "The email service needs activation. Check the activation email sent by FormSubmit to the primary email address.", emailSendFailed: "We couldn't send the booking email. Please try again or use WhatsApp/SMS below.", formSubmitError: "Booking email could not be sent.", whatsappBooking: "Send booking on WhatsApp", smsFallback: "Or prepare an SMS to"
    },
    hi: {
      languageGroup: "भाषा चुनें", brandTag: "देवबंद · पूरे भारत में सेवा", announce: "पूरे भारत में ट्रांसपोर्ट सेवा", availability: "उपलब्धता के लिए कॉल करें", navFleet: "हमारी गाड़ियाँ", navCoverage: "सेवा क्षेत्र", navAbout: "एस के क्यों", navContact: "संपर्क", navBook: "गाड़ी बुक करें",
      heroEyebrow: "आपका सामान। हमारा रास्ता।", heroTitle: "हर सामान।<br><span>मंज़िल तक।</span>", heroIntro: "छोटे पार्सल से लेकर बड़े सामान तक—देवबंद से भारत के किसी भी शहर तक सामान पहुँचाने के लिए संपर्क करें।", heroCta: "अपनी गाड़ी चुनें", quickCall: "अभी कॉल करें", heroProof: "पूरे भारत में ट्रांसपोर्ट सेवा।", heroProofSub: "देवबंद से—देशभर में आपकी सेवा में।", coverageNote: "देवबंद से · पूरे भारत में सेवा", heroStamp: "भरोसेमंद<br>सेवा", artCaption: "आपकी मंज़िल तक साथ", scrollPrompt: "आगे देखने के लिए स्क्रॉल करें <b>↓</b>",
      ticker: "<span>ट्रक</span><b>✳</b><span>डीसीएम</span><b>✳</b><span>मिनी ट्रक</span><b>✳</b><span>कार</span><b>✳</b><span>ट्रैक्टर ट्रॉली</span><b>✳</b><span>और भी</span><b>✳</b>".repeat(2),
      fleetEyebrow: "हर काम के लिए सही गाड़ी", fleetTitle: "छोटा सामान हो या बड़ा।<br><span>हम हैं साथ।</span>", fleetIntro: "अपने सामान के लिए सही गाड़ी चुनें। बताइए आपको क्या चाहिए—हम सही गाड़ी चुनने में मदद करेंगे।", fleetQuestion: "कौन-सी गाड़ी सही रहेगी?", fleetLink: "क्या भेजना है, हमें बताएं",
      localKnowhow: "पूरे भारत में सेवा", localArea: "देवबंद से<br>देशभर में सेवा", aboutEyebrow: "भरोसे का नाम", aboutTitle: "आपकी राह के<br><span>हमसफ़र।</span>", aboutIntro: "एस के ट्रांसपोर्ट देवबंद से पूरे भारत में सामान पहुँचाने के लिए भरोसेमंद गाड़ी सेवा उपलब्ध कराता है। रोज़मर्रा की डिलीवरी हो या बड़ा सामान—हर सफ़र में भरोसेमंद सेवा और अपनापन।", aboutSub: "क्या सामान कहाँ से कहाँ पहुँचाना है और कब—हमें बताइए। देवबंद से आपकी मंज़िल तक सफ़र की जानकारी के लिए संपर्क करें।", localContact: "आपका ट्रांसपोर्ट संपर्क", proprietor: "मालिक, एस के ट्रांसपोर्ट",
      bookingEyebrow: "चलिए, आपकी बुकिंग करें", bookingTitle: "आपकी अगली बुकिंग<br><span>यहाँ से शुरू।</span>", bookingIntro: "देवबंद से भारत के किसी भी शहर तक सामान भेजना है? जानकारी भरें, हम आपसे संपर्क करेंगे। कोई बाध्यता नहीं—बस आपकी ज़रूरत समझने के लिए एक बातचीत।", preferCall: "सीधे बात करना चाहेंगे?", phoneAway: "हम बस एक कॉल दूर हैं।", smsNote: "भारत में कहीं से भी सामान कहाँ लेना और पहुँचाना है, बताएं। आपकी जानकारी SMS में खुलेगी—जाँचकर S K Transport को भेजें।",
      bookingFormTitle: "बुकिंग की जानकारी", formCount: "नंबर <b>01</b> / 01", chooseVehicle: "01 &nbsp; अपनी गाड़ी चुनें <sup>*</sup>", nameLabel: "आपका नाम <sup>*</sup>", phoneLabel: "आपका मोबाइल नंबर <sup>*</sup>", pickupLabel: "सामान कहाँ से लेना है?", dropLabel: "सामान कहाँ पहुँचाना है?", dateLabel: "गाड़ी कब चाहिए?", loadLabel: "क्या सामान ले जाना है?", messageLabel: "कोई और जानकारी?",
      namePlaceholder: "जैसे: राहुल शर्मा", phonePlaceholder: "10 अंकों का मोबाइल नंबर", pickupPlaceholder: "सामान कहाँ से लेना है?", dropPlaceholder: "सामान कहाँ पहुँचाना है?", loadPlaceholder: "फर्नीचर, सामान, गाड़ी...", messagePlaceholder: "सामान या रास्ते की जानकारी लिखें...", submitBooking: "बुकिंग की जानकारी तैयार करें", bookingConsent: "मैं बुकिंग की यह जानकारी ईमेल से S K Transport को भेजने के लिए सहमत हूँ। ईमेल सेवा इस जानकारी को 30 दिनों तक रख सकती है।", formPrivacy: "बुकिंग की जानकारी ऊपर दिए कारोबार के ईमेल पर भेजी जाएगी। SMS अपने आप नहीं जाता—तैयार SMS या WhatsApp संदेश खोलकर भेजें।",
      contactEyebrow: "ज़रूरत पड़ने पर हम साथ हैं", contactTitle: "तैयार हैं?<br><span>बात करें।</span>", findUs: "हमारा पता", callUs: "हमें कॉल करें", emailUs: "ईमेल करें", footerTag: "हर सामान। मंज़िल तक।", adminButton: "एडमिन",
      privateAccess: "निजी प्रवेश", adminTitle: "ट्रांसपोर्ट<br><span>कंट्रोल पैनल।</span>", adminUsername: "एडमिन यूज़रनेम", createPassword: "पासवर्ड बनाएं", setPassword: "पासवर्ड बनाएं और आगे बढ़ें", adminWarning: "यह एडमिन पैनल इसी ब्राउज़र में काम करता है; सार्वजनिक वेबसाइट के लिए सुरक्षित लॉगिन नहीं है। निजी डिवाइस का उपयोग करें। ब्राउज़र डेटा हटाने पर सेटिंग मिट सकती है।", siteSettings: "वेबसाइट सेटिंग", dashboardTitle: "आपका कारोबार।<br><span>आपके फैसले।</span>", logout: "लॉग आउट", businessDetails: "कारोबार की जानकारी", businessName: "कारोबार का नाम", addressLabel: "पता", primaryPhone: "मुख्य फ़ोन नंबर", bookingPhone: "वैकल्पिक फ़ोन नंबर", emailPrimary: "मुख्य ईमेल (बुकिंग के लिए ज़रूरी)", emailAlternate: "वैकल्पिक ईमेल (ज़रूरी नहीं)", emailPrimaryPlaceholder: "बुकिंग इस ईमेल पर आएगी", alternateEmailPlaceholder: "बुकिंग ईमेल की कॉपी (ज़रूरी नहीं)", phoneContacts: "फ़ोन संपर्क", primaryMobile: "मुख्य मोबाइल नंबर", alternateMobile: "वैकल्पिक मोबाइल नंबर", emailOptional: "ईमेल (वैकल्पिक)", emailPlaceholder: "ईमेल होने पर यहाँ लिखें", vehiclesHeading: "गाड़ियाँ", newVehiclePlaceholder: "नई गाड़ी का नाम", newVehicleAria: "नई गाड़ी का नाम", addVehicle: "+ गाड़ी जोड़ें", adminNote: "सेटिंग सिर्फ़ इसी ब्राउज़र में सेव होंगी; यहाँ बदला ईमेल इसी डिवाइस की बुकिंग के लिए लागू होगा। सभी लोगों के लिए ईमेल बदलने हेतु डिप्लॉय की गई वेबसाइट बदलें या साझा बैकएंड जोड़ें। FormSubmit के एक्टिवेशन ईमेल की पुष्टि भी ज़रूरी है। SMS के लिए अलग सेवा खाता चाहिए।", saveChanges: "बदलाव सेव करें", closeAdmin: "एडमिन पैनल बंद करें",
      invalidPhone: "कृपया कम से कम 10 अंकों का सही मोबाइल नंबर भरें।", smsReady: "आपकी बुकिंग जानकारी भेजने के लिए तैयार है।", smsInstructions: "नीचे नंबर चुनें। आपकी मैसेज ऐप में बुकिंग की जानकारी SMS के रूप में खुलेगी—जाँचकर भेजें। दोनों नंबरों पर भेजने के लिए दूसरे नंबर के लिए भी यही करें।", emailDraftNotice: " ईमेल का ड्राफ़्ट भी तैयार है।", openSms: "SMS भेजें", prepareEmail: "ईमेल का ड्राफ़्ट", copyBooking: "बुकिंग जानकारी कॉपी करें", copied: "कॉपी हो गया", copyUnavailable: "कॉपी नहीं हो पाया — ऊपर SMS चुनें", bookingHeading: "बुकिंग की जानकारी", dateFlexible: "तारीख तय नहीं", notSpecified: "जानकारी नहीं दी", none: "कुछ नहीं", vehicleLabel: "गाड़ी", customerName: "नाम", customerPhone: "फ़ोन", pickup: "कहाँ से", drop: "कहाँ तक", tripDate: "तारीख", load: "सामान", notes: "अन्य जानकारी",
      adminLoginExisting: "कारोबार की जानकारी और गाड़ियों की सूची बदलने के लिए लॉग इन करें।", adminLoginNew: "कारोबार की जानकारी और गाड़ियों की सूची बदलने के लिए इस ब्राउज़र पर एडमिन पासवर्ड बनाएं।", adminPassword: "एडमिन पासवर्ड", login: "लॉग इन", passwordMismatch: "यूज़रनेम या पासवर्ड सही नहीं है। दोबारा कोशिश करें।", secureContext: "पासवर्ड बनाने के लिए सुरक्षित ब्राउज़र (HTTPS या localhost) ज़रूरी है।", keepOneVehicle: "कम से कम एक गाड़ी सूची में रखें।", maxVehicles: "सूची में अधिकतम 20 गाड़ियाँ जोड़ी जा सकती हैं।", duplicateVehicle: "यह गाड़ी सूची में पहले से है।", addBeforeSave: "सेव करने से पहले कम से कम एक गाड़ी जोड़ें।", saved: "बदलाव इसी ब्राउज़र में सेव हो गए।", saveFailed: "बदलाव सेव नहीं हो पाए। ब्राउज़र स्टोरेज जाँचकर दोबारा कोशिश करें।",
      deliveryHeading: "बुकिंग की जानकारी ईमेल पर अपने आप भेजी जाएगी", deliveryTo: "ईमेल भेजें", emailActivationNote: "पहली बार: बुकिंग शुरू करने से पहले FormSubmit का एक्टिवेशन ईमेल कन्फ़र्म करें।", smsDeliveryNote: "SMS जाँचकर भेजने के लिए तैयार होगा।", emailLive: "ईमेल सेवा", whatsappLabel: "WhatsApp करें", whatsappAria: "S K Transport को WhatsApp संदेश भेजें", emailSending: "बुकिंग ईमेल भेज रहे हैं…", emailSent: "बुकिंग ईमेल सफलतापूर्वक भेज दिया गया।", emailSetupRequired: "ईमेल सेवा को सक्रिय करना होगा। FormSubmit द्वारा मुख्य ईमेल पर भेजे गए एक्टिवेशन ईमेल की पुष्टि करें।", emailSendFailed: "बुकिंग ईमेल नहीं भेज पाए। दोबारा कोशिश करें या नीचे WhatsApp/SMS का उपयोग करें।", formSubmitError: "बुकिंग ईमेल नहीं भेजा जा सका।", whatsappBooking: "बुकिंग WhatsApp पर भेजें", smsFallback: "या SMS तैयार करें"
    }
  };
  const FEATURE_TEXT = {
    en: {
      capEyebrow: "TRANSPORT THAT FITS YOUR LOAD", capTitle: "ONE PART LOAD.<br><span>ONE BIG MOVE.</span>", capIntro: "Choose the kind of transport you need. We’ll confirm the vehicle, route, availability and price with you before booking.", capCaveat: "Special handling, express timelines, refrigeration, permits, insurance, tracking and billing options depend on the route and available vehicle. Please confirm these with us before booking.", mapTitle: "Illustration of transport coverage across India",
      serviceTypes: ["Full truck load", "Part load", "Express enquiry", "Intercity & interstate", "Car & vehicle transfer", "Agriculture & equipment"],
      serviceCopy: ["A dedicated vehicle for your shipment. Tell us the load size and destination.", "Ask about sharing suitable vehicle space for smaller shipments.", "Need a time-sensitive trip? Share your requested date and we’ll confirm what is possible.", "Plan a move between cities or states across India.", "Enquire about moving a car or other vehicle between locations.", "Ask about tractor trolley, machinery and other equipment transport."],
      serviceBadge: ["DEDICATED VEHICLE", "ASK AVAILABILITY", "DATE CONFIRMATION", "PAN-INDIA ENQUIRY", "VEHICLE TRANSFER", "LOAD CHECK REQUIRED"],
      coverageEyebrow: "FROM DEOBAND TO DESTINATIONS ACROSS INDIA", coverageTitle: "ONE COUNTRY.<br><span>MORE WAYS TO MOVE.</span>", coverageIntro: "Explore states, union territories and key cities. Share your exact pickup and drop-off in the enquiry; each trip is confirmed individually.", statesCount: "STATES", utsCount: "UNION TERRITORIES", countryCount: "COUNTRY · PAN INDIA", networkMap: "THE INDIA NETWORK", mapLegend: "Service enquiries welcome nationwide", availabilityLegend: "Route and vehicle availability confirmed per enquiry", coverageDirectory: "COVERAGE DIRECTORY", findState: "Find a state or city", regions: "REGIONS", coverageSearch: "Search state, territory or city...", allRegions: "ALL REGIONS", directoryDisclaimer: "City names are examples of key hubs, not an exhaustive list. Ask us to confirm your exact pickup, drop-off and service availability.", routeIdeas: "ROUTE IDEAS", routeHeading: "Where are you headed?", routeDisclaimer: "Suggested city pairs only. Ask us to confirm each route and quote.", routeArrow: "TO", noResults: "No matching states or cities. Try another search.", cityLabel: "Key cities", bookThisRoute: "ENQUIRE ABOUT THIS ROUTE", coverageCount: "36 regions listed",
      customerEyebrow: "MOVING WHAT MATTERS TO YOU", customerTitle: "BUSINESS OR HOME.<br><span>LET'S GET IT THERE.</span>", customerIntro: "From one-time personal moves to recurring business shipments, tell us about your goods and we’ll discuss a suitable transport option.", customerTypes: ["Homes & families", "Retail & wholesale", "Farms & produce", "Builders & contractors", "Workshops & manufacturers", "Vehicle owners"], customerCopy: ["Household goods, furniture and personal belongings.", "Stock, supplies and goods between shops, warehouses and markets.", "Agricultural inputs, produce and equipment—vehicle suitability confirmed per load.", "Construction materials and equipment; share dimensions and weight for a check.", "Machinery, components and business consignments.", "Ask about suitable vehicle transfer options and route availability."],
      serviceLabel: "TRANSPORT SERVICE", servicePlaceholder: "Choose a service type", serviceRequired: "Please choose a transport service.", serviceNames: ["Full truck load", "Part load", "Express enquiry", "Intercity / interstate", "Car / vehicle transfer", "Agriculture / equipment", "Other — discuss with us"],
      routeFormTitle: "PICKUP & DESTINATION", originStateLabel: "PICKUP STATE / UNION TERRITORY", originStatePlaceholder: "Choose pickup state", originCityLabel: "PICKUP CITY", originCityPlaceholder: "Type or choose a pickup city", originAreaLabel: "PICKUP AREA / LANDMARK", originAreaPlaceholder: "Area, PIN code or landmark (optional)", destinationStateLabel: "DESTINATION STATE / UNION TERRITORY", destinationStatePlaceholder: "Choose destination state", destinationCityLabel: "DESTINATION CITY", destinationCityPlaceholder: "Type or choose a destination city", destinationAreaLabel: "DESTINATION AREA / LANDMARK", destinationAreaPlaceholder: "Area, PIN code or landmark (optional)", nameLabel: "YOUR NAME", phoneLabel: "YOUR PHONE NUMBER", routeLabel: "Route", serviceTypeLabel: "Service",
      lookupRoutes: "Find routes", getRoute: "Enquire about this route", allIndiaBadge: "28 STATES · 8 UNION TERRITORIES", fullCoverage: "One route enquiry. Any state or union territory.", permitDisclaimer: "Listing a region does not guarantee a truck is available on every route. We confirm trip feasibility, timing, vehicle and price with you.",
      stateCities: "Key cities", stateKind: ["STATE", "UNION TERRITORY"], noExactRoute: "Share the route in the booking form and we’ll check availability.",
      etaNotGuaranteed: "Trip time is confirmed after we review your route and vehicle availability."
    },
    hi: {
      capEyebrow: "आपके सामान के अनुसार ट्रांसपोर्ट", capTitle: "थोड़ा सामान।<br><span>या पूरी गाड़ी।</span>", capIntro: "अपनी ज़रूरत के अनुसार सेवा चुनें। बुकिंग से पहले गाड़ी, रास्ता, उपलब्धता और किराया हमसे पक्का करें।", capCaveat: "विशेष देखभाल, जल्दी डिलीवरी, रेफ्रिजरेशन, परमिट, बीमा, ट्रैकिंग और बिलिंग की सुविधा रास्ते व उपलब्ध गाड़ी पर निर्भर है। बुकिंग से पहले हमसे पुष्टि करें।", mapTitle: "भारत में ट्रांसपोर्ट सेवा का चित्र",
      serviceTypes: ["पूरा ट्रक", "पार्ट लोड", "जल्दी डिलीवरी पूछताछ", "शहरों/राज्यों के बीच", "कार/गाड़ी भेजना", "खेती/मशीनरी का सामान"],
      serviceCopy: ["आपके सामान के लिए पूरी गाड़ी। सामान और मंज़िल बताएं।", "कम सामान के लिए जगह साझा करने की उपलब्धता पूछें।", "जल्दी पहुँचाना है? तारीख बताएं, हम संभव समय की पुष्टि करेंगे।", "भारत के शहरों या राज्यों के बीच सामान भेजें।", "कार या अन्य गाड़ी एक जगह से दूसरी जगह भेजने के लिए पूछें।", "ट्रैक्टर ट्रॉली, मशीनरी और उपकरण भेजने के लिए पूछें।"],
      serviceBadge: ["पूरी गाड़ी", "उपलब्धता पूछें", "तारीख की पुष्टि", "पूरे भारत में पूछताछ", "गाड़ी भेजें", "सामान की जाँच ज़रूरी"],
      coverageEyebrow: "देवबंद से भारत के शहरों तक", coverageTitle: "एक देश।<br><span>कई मंज़िलें।</span>", coverageIntro: "राज्य, केंद्र शासित प्रदेश और प्रमुख शहर देखें। बुकिंग में सही जगह लिखें; हर यात्रा की अलग से पुष्टि होगी।", statesCount: "राज्य", utsCount: "केंद्र शासित प्रदेश", countryCount: "देश · पूरे भारत में", networkMap: "भारत में सेवा की जानकारी", mapLegend: "पूरे भारत से पूछताछ आमंत्रित है", availabilityLegend: "हर रास्ते और गाड़ी की उपलब्धता अलग से पक्की होगी", coverageDirectory: "सेवा क्षेत्र सूची", findState: "राज्य या शहर खोजें", regions: "क्षेत्र", coverageSearch: "राज्य, केंद्र शासित प्रदेश या शहर खोजें...", allRegions: "सभी क्षेत्र", directoryDisclaimer: "शहरों के नाम कुछ प्रमुख स्थानों के उदाहरण हैं, पूरी सूची नहीं। अपने पिकअप, मंज़िल और गाड़ी की उपलब्धता पूछें।", routeIdeas: "रास्ते के सुझाव", routeHeading: "कहाँ जाना है?", routeDisclaimer: "ये सिर्फ़ सुझाए गए शहर हैं। रास्ते और किराये की पुष्टि हमसे करें।", routeArrow: "से", noResults: "इस नाम का राज्य या शहर नहीं मिला। दूसरा नाम खोजें।", cityLabel: "प्रमुख शहर", bookThisRoute: "इस रास्ते के लिए पूछें", coverageCount: "36 क्षेत्र शामिल",
      customerEyebrow: "आपका सामान, हमारी मंज़िल", customerTitle: "घर हो या कारोबार।<br><span>सामान पहुँचाएँ।</span>", customerIntro: "घर का सामान हो या कारोबार की नियमित सप्लाई—हमें जानकारी दें, हम सही ट्रांसपोर्ट विकल्प पर बात करेंगे।", customerTypes: ["घर-परिवार", "दुकान और थोक कारोबारी", "किसान और कृषि सामान", "निर्माण और ठेकेदार", "वर्कशॉप और निर्माता", "गाड़ी के मालिक"], customerCopy: ["घर का सामान, फर्नीचर और निजी वस्तुएँ।", "दुकान, गोदाम और बाज़ार के बीच स्टॉक और सामान।", "खेती का सामान, उपज और उपकरण—गाड़ी की उपयुक्तता जाँची जाएगी।", "निर्माण सामग्री और उपकरण; वजन और आकार बताएं।", "मशीनरी, पुर्ज़े और कारोबार का सामान।", "गाड़ी भेजने के विकल्प और रास्ते की उपलब्धता पूछें।"],
      serviceLabel: "ट्रांसपोर्ट सेवा", servicePlaceholder: "सेवा का प्रकार चुनें", serviceRequired: "कृपया ट्रांसपोर्ट सेवा चुनें।", serviceNames: ["पूरा ट्रक", "पार्ट लोड", "जल्दी डिलीवरी पूछताछ", "शहर / राज्य के बीच", "कार / गाड़ी भेजना", "खेती / उपकरण", "अन्य — हमसे बात करें"],
      routeFormTitle: "पिकअप और मंज़िल", originStateLabel: "पिकअप का राज्य / केंद्र शासित प्रदेश", originStatePlaceholder: "पिकअप राज्य चुनें", originCityLabel: "पिकअप का शहर", originCityPlaceholder: "पिकअप शहर लिखें या चुनें", originAreaLabel: "पिकअप क्षेत्र / पहचान", originAreaPlaceholder: "इलाका, पिन कोड या पहचान (ज़रूरी नहीं)", destinationStateLabel: "मंज़िल का राज्य / केंद्र शासित प्रदेश", destinationStatePlaceholder: "मंज़िल का राज्य चुनें", destinationCityLabel: "मंज़िल का शहर", destinationCityPlaceholder: "मंज़िल का शहर लिखें या चुनें", destinationAreaLabel: "मंज़िल का क्षेत्र / पहचान", destinationAreaPlaceholder: "इलाका, पिन कोड या पहचान (ज़रूरी नहीं)", nameLabel: "आपका नाम", phoneLabel: "आपका मोबाइल नंबर", routeLabel: "रास्ता", serviceTypeLabel: "सेवा",
      lookupRoutes: "रास्ते खोजें", getRoute: "इस रास्ते के लिए पूछें", allIndiaBadge: "28 राज्य · 8 केंद्र शासित प्रदेश", fullCoverage: "एक पूछताछ। कोई भी राज्य या केंद्र शासित प्रदेश।", permitDisclaimer: "क्षेत्र सूची में होने का अर्थ यह नहीं कि हर रास्ते पर गाड़ी उपलब्ध है। यात्रा, समय, गाड़ी और किराया हम पुष्टि करके बताएंगे।",
      stateCities: "प्रमुख शहर", stateKind: ["राज्य", "केंद्र शासित प्रदेश"], noExactRoute: "बुकिंग फ़ॉर्म में रास्ता बताएं, हम उपलब्धता की जाँच करेंगे।",
      etaNotGuaranteed: "यात्रा का समय रास्ते और गाड़ी की उपलब्धता जाँचने के बाद बताया जाएगा।"
    }
  };

  const INDIA_REGIONS = [
    {en:"Andhra Pradesh",hi:"आंध्र प्रदेश",kind:"state",cities:["Visakhapatnam","Vijayawada","Guntur","Tirupati"]},
    {en:"Arunachal Pradesh",hi:"अरुणाचल प्रदेश",kind:"state",cities:["Itanagar","Naharlagun","Pasighat","Tawang"]},
    {en:"Assam",hi:"असम",kind:"state",cities:["Guwahati","Dibrugarh","Silchar","Jorhat"]},
    {en:"Bihar",hi:"बिहार",kind:"state",cities:["Patna","Gaya","Muzaffarpur","Bhagalpur"]},
    {en:"Chhattisgarh",hi:"छत्तीसगढ़",kind:"state",cities:["Raipur","Bhilai","Bilaspur","Korba"]},
    {en:"Goa",hi:"गोवा",kind:"state",cities:["Panaji","Margao","Vasco da Gama","Mapusa"]},
    {en:"Gujarat",hi:"गुजरात",kind:"state",cities:["Ahmedabad","Surat","Vadodara","Rajkot"]},
    {en:"Haryana",hi:"हरियाणा",kind:"state",cities:["Gurugram","Faridabad","Panipat","Hisar"]},
    {en:"Himachal Pradesh",hi:"हिमाचल प्रदेश",kind:"state",cities:["Shimla","Dharamshala","Mandi","Baddi"]},
    {en:"Jharkhand",hi:"झारखंड",kind:"state",cities:["Ranchi","Jamshedpur","Dhanbad","Bokaro"]},
    {en:"Karnataka",hi:"कर्नाटक",kind:"state",cities:["Bengaluru","Mysuru","Mangaluru","Hubballi"]},
    {en:"Kerala",hi:"केरल",kind:"state",cities:["Kochi","Thiruvananthapuram","Kozhikode","Thrissur"]},
    {en:"Madhya Pradesh",hi:"मध्य प्रदेश",kind:"state",cities:["Indore","Bhopal","Jabalpur","Gwalior"]},
    {en:"Maharashtra",hi:"महाराष्ट्र",kind:"state",cities:["Mumbai","Pune","Nagpur","Nashik"]},
    {en:"Manipur",hi:"मणिपुर",kind:"state",cities:["Imphal","Thoubal","Bishnupur","Churachandpur"]},
    {en:"Meghalaya",hi:"मेघालय",kind:"state",cities:["Shillong","Tura","Jowai","Nongpoh"]},
    {en:"Mizoram",hi:"मिज़ोरम",kind:"state",cities:["Aizawl","Lunglei","Champhai","Kolasib"]},
    {en:"Nagaland",hi:"नागालैंड",kind:"state",cities:["Kohima","Dimapur","Mokokchung","Wokha"]},
    {en:"Odisha",hi:"ओडिशा",kind:"state",cities:["Bhubaneswar","Cuttack","Rourkela","Sambalpur"]},
    {en:"Punjab",hi:"पंजाब",kind:"state",cities:["Ludhiana","Amritsar","Jalandhar","Patiala"]},
    {en:"Rajasthan",hi:"राजस्थान",kind:"state",cities:["Jaipur","Jodhpur","Udaipur","Kota"]},
    {en:"Sikkim",hi:"सिक्किम",kind:"state",cities:["Gangtok","Namchi","Gyalshing","Mangan"]},
    {en:"Tamil Nadu",hi:"तमिलनाडु",kind:"state",cities:["Chennai","Coimbatore","Madurai","Tiruchirappalli"]},
    {en:"Telangana",hi:"तेलंगाना",kind:"state",cities:["Hyderabad","Warangal","Karimnagar","Nizamabad"]},
    {en:"Tripura",hi:"त्रिपुरा",kind:"state",cities:["Agartala","Udaipur","Dharmanagar","Kailashahar"]},
    {en:"Uttar Pradesh",hi:"उत्तर प्रदेश",kind:"state",cities:["Deoband","Saharanpur","Lucknow","Kanpur","Varanasi","Agra","Noida"]},
    {en:"Uttarakhand",hi:"उत्तराखंड",kind:"state",cities:["Dehradun","Haridwar","Haldwani","Rudrapur"]},
    {en:"West Bengal",hi:"पश्चिम बंगाल",kind:"state",cities:["Kolkata","Howrah","Durgapur","Siliguri"]},
    {en:"Andaman and Nicobar Islands",hi:"अंडमान और निकोबार द्वीपसमूह",kind:"ut",cities:["Port Blair","Diglipur","Rangat"]},
    {en:"Chandigarh",hi:"चंडीगढ़",kind:"ut",cities:["Chandigarh"]},
    {en:"Dadra and Nagar Haveli and Daman and Diu",hi:"दादरा और नगर हवेली और दमन और दीव",kind:"ut",cities:["Daman","Diu","Silvassa"]},
    {en:"Delhi",hi:"दिल्ली",kind:"ut",cities:["New Delhi","Delhi","Dwarka","Rohini"]},
    {en:"Jammu and Kashmir",hi:"जम्मू और कश्मीर",kind:"ut",cities:["Jammu","Srinagar","Anantnag","Baramulla"]},
    {en:"Ladakh",hi:"लद्दाख",kind:"ut",cities:["Leh","Kargil"]},
    {en:"Lakshadweep",hi:"लक्षद्वीप",kind:"ut",cities:["Kavaratti","Agatti","Minicoy"]},
    {en:"Puducherry",hi:"पुदुचेरी",kind:"ut",cities:["Puducherry","Karaikal","Mahe","Yanam"]}
  ];

  const POPULAR_ROUTES = [
    {from:"Deoband",fromState:"Uttar Pradesh",to:"Delhi",toState:"Delhi"},
    {from:"Delhi",fromState:"Delhi",to:"Jaipur",toState:"Rajasthan"},
    {from:"Delhi",fromState:"Delhi",to:"Mumbai",toState:"Maharashtra"},
    {from:"Mumbai",fromState:"Maharashtra",to:"Pune",toState:"Maharashtra"},
    {from:"Bengaluru",fromState:"Karnataka",to:"Chennai",toState:"Tamil Nadu"},
    {from:"Kolkata",fromState:"West Bengal",to:"Bhubaneswar",toState:"Odisha"},
    {from:"Lucknow",fromState:"Uttar Pradesh",to:"Varanasi",toState:"Uttar Pradesh"},
    {from:"Hyderabad",fromState:"Telangana",to:"Vijayawada",toState:"Andhra Pradesh"}
  ];

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
      ? "एस के ट्रांसपोर्ट, देवबंद से पूरे भारत में ट्रक, डीसीएम, छोटी गाड़ी, कार और ट्रैक्टर ट्रॉली की सेवा।"
      : "Book nationwide transport with S K Transport, Deoband. Explore service options, states, cities and routes; request a truck, DCM, mini truck, car or tractor trolley.";
    $$("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
    $$("[data-i18n-html]").forEach((node) => { node.innerHTML = t(node.dataset.i18nHtml); });
    $$("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    $$("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", t(node.dataset.i18nAria)); });
    $("#india-map-title").textContent = t("mapTitle");
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
    renderCoverage();
    renderCapabilities();
    renderCustomerTypes();
    renderServiceOptions();
    updateCitySuggestions("originState", "originCity");
    updateCitySuggestions("destinationState", "destinationCity");
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

  $("#coverage-search").addEventListener("input", renderCoverage);
  $("#booking-form").elements.originState.addEventListener("change", () => updateCitySuggestions("originState", "originCity"));
  $("#booking-form").elements.destinationState.addEventListener("change", () => updateCitySuggestions("destinationState", "destinationCity"));

  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEYS.settings) || "null");
      if (!saved || typeof saved !== "object") return structuredClone(DEFAULTS);
      return {
        ...DEFAULTS,
        ...saved,
        email: saved.email || DEFAULTS.email,
        alternateEmail: saved.alternateEmail || "",
        secondary: saved.secondary || DEFAULTS.secondary,
        vehicles: Array.isArray(saved.vehicles) && saved.vehicles.length
          ? saved.vehicles.filter((vehicle) => typeof vehicle === "string" && vehicle.trim()).slice(0, 20)
          : [...DEFAULTS.vehicles]
      };
    } catch (error) {
      console.error("Could not read saved S K Transport settings.", error);
      return structuredClone(DEFAULTS);
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

  function localizedRegion(region) {
    return language === "hi" ? region.hi : region.en;
  }

  function renderCapabilities() {
    const grid = $("#capability-grid");
    const icons = ["▰", "▱", "ϟ", "↗", "◉", "✳"];
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
        select.selectedIndex = Number(card.dataset.serviceIndex) + 1;
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

  function renderCustomerTypes() {
    const icons = ["⌂", "▦", "✳", "⌑", "⚙", "◉"];
    $("#customer-grid").innerHTML = t("customerTypes").map((name, index) => `
      <article class="customer-card"><span class="customer-icon">${icons[index]}</span><div><h3>${safeText(name)}</h3><p>${safeText(t("customerCopy")[index])}</p></div><span class="customer-arrow">↗</span></article>`).join("");
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

  function populateRegionSelects() {
    $$("select.region-select").forEach((select) => {
      const selected = select.value;
      const isOrigin = select.name === "originState";
      const placeholder = t(isOrigin ? "originStatePlaceholder" : "destinationStatePlaceholder");
      select.innerHTML = `<option value="">${safeText(placeholder)}</option>` +
        INDIA_REGIONS.map((region) => `<option value="${safeText(region.en)}">${safeText(localizedRegion(region))} · ${safeText(t("stateKind")[region.kind === "state" ? 0 : 1])}</option>`).join("");
      if (selected && INDIA_REGIONS.some((region) => region.en === selected)) select.value = selected;
    });
  }

  function updateCitySuggestions(stateField, cityField) {
    const form = $("#booking-form");
    const regionName = form.elements[stateField].value;
    const region = INDIA_REGIONS.find((entry) => entry.en === regionName);
    const datalistId = cityField === "originCity" ? "origin-city-options" : "destination-city-options";
    const datalist = $(`#${datalistId}`);
    datalist.innerHTML = (region?.cities || []).map((city) => `<option value="${safeText(city)}"></option>`).join("");
  }

  function setRoute({ from, fromState, to, toState }) {
    const form = $("#booking-form");
    form.elements.originState.value = fromState;
    form.elements.originCity.value = from;
    form.elements.destinationState.value = toState;
    form.elements.destinationCity.value = to;
    updateCitySuggestions("originState", "originCity");
    updateCitySuggestions("destinationState", "destinationCity");
    $("#book").scrollIntoView({ behavior: "smooth" });
    form.elements.originCity.focus({ preventScroll: true });
  }

  function renderCoverage() {
    populateRegionSelects();
    const query = ($("#coverage-search")?.value || "").trim().toLocaleLowerCase();
    const filtered = INDIA_REGIONS.filter((region) =>
      [region.en, region.hi, ...region.cities].some((item) => item.toLocaleLowerCase().includes(query))
    );
    const list = $("#state-list");
    list.innerHTML = filtered.length
      ? filtered.map((region) => {
        const kind = t("stateKind")[region.kind === "state" ? 0 : 1];
        const cityNames = region.cities.slice(0, 5).join(" · ");
        return `<article class="state-card">
          <div class="state-card-title"><span class="state-pin" aria-hidden="true">⌖</span><div><span>${safeText(kind)}</span><h4>${safeText(localizedRegion(region))}</h4></div><span class="state-card-mark">IN</span></div>
          <p><b>${safeText(t("cityLabel"))}:</b> ${safeText(cityNames)}</p>
          <button type="button" class="state-route-button" data-route-state="${safeText(region.en)}">${safeText(t("bookThisRoute"))} <span>↗</span></button>
        </article>`;
      }).join("")
      : `<div class="coverage-empty">${safeText(t("noResults"))}</div>`;
    $$(".state-route-button", list).forEach((button) => {
      button.addEventListener("click", () => {
        const region = INDIA_REGIONS.find((entry) => entry.en === button.dataset.routeState);
        if (!region) return;
        setRoute({
          from: "Deoband",
          fromState: "Uttar Pradesh",
          to: region.cities[0],
          toState: region.en
        });
      });
    });

    $("#route-chips").innerHTML = POPULAR_ROUTES.map((route, index) => `
      <button type="button" class="route-chip" data-route-index="${index}">
        <span class="route-chip-icon">↗</span><span>${safeText(route.from)}<i>→</i>${safeText(route.to)}</span><b>↗</b>
      </button>`).join("");
    $$(".route-chip", $("#route-chips")).forEach((button) => {
      button.addEventListener("click", () => setRoute(POPULAR_ROUTES[Number(button.dataset.routeIndex)]));
    });
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
        <div class="fleet-photo"><img src="https://images.unsplash.com/${VEHICLE_PHOTOS[index % VEHICLE_PHOTOS.length]}?auto=format&fit=crop&w=700&q=78" alt="${safeText(language === "hi" ? `${visibleVehicle} की तस्वीर` : `${vehicle} transport vehicle`)}" loading="lazy" decoding="async"><span class="fleet-photo-shade"></span><span class="fleet-num">0${index + 1} <i> / 0${settings.vehicles.length}</i></span><span class="fleet-icon" aria-hidden="true">${VEHICLE_ICONS[index] || "↗"}</span><span class="fleet-image-label">SK · ALL INDIA</span></div>
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
      image.addEventListener("error", () => image.closest(".fleet-photo").classList.add("image-unavailable"), { once: true });
    });
  }

  function renderSettings() {
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
    }
    const activeEmails = [settings.email, settings.alternateEmail].filter(Boolean);
    $("[data-delivery-emails]").textContent = activeEmails.join(" · ");
    updateWhatsAppLink();
    renderFleet();
  }

  function updateWhatsAppLink() {
    const whatsapp = $(".whatsapp-float");
    whatsapp.href = whatsappUrl(settings.primary, language === "hi" ? "नमस्ते, मुझे S K Transport से गाड़ी बुक करनी है।" : "Hello, I would like to book a vehicle with S K Transport.");
  }

  function composeMessage(data) {
    const messageVehicle = language === "hi"
      ? (DEFAULTS.vehicles.includes(data.vehicle) ? ["ट्रक", "डीसीएम", "छोटी गाड़ी", "बड़ी गाड़ी", "मिनी ट्रक", "कार", "ट्रैक्टर ट्रॉली"][DEFAULTS.vehicles.indexOf(data.vehicle)] : data.vehicle)
      : data.vehicle;
    const serviceName = t("serviceNames")[Number(data.serviceType) - 1] || t("notSpecified");
    const origin = [data.originCity, data.originState, data.originArea].filter(Boolean).join(", ");
    const destination = [data.destinationCity, data.destinationState, data.destinationArea].filter(Boolean).join(", ");
    const lines = [
      `${t("bookingHeading")} - ${settings.business}`,
      `${t("vehicleLabel")}: ${messageVehicle}`,
      `${t("serviceTypeLabel")}: ${serviceName}`,
      `${t("customerName")}: ${data.name}`,
      `${t("customerPhone")}: ${data.phone}`,
      `${t("pickup")}: ${origin}`,
      `${t("drop")}: ${destination}`,
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
      pickup_city: data.originCity,
      pickup_state: data.originState,
      pickup_area: data.originArea || t("none"),
      destination_city: data.destinationCity,
      destination_state: data.destinationState,
      destination_area: data.destinationArea || t("none"),
      pickup: [data.originCity, data.originState, data.originArea].filter(Boolean).join(", "),
      drop: [data.destinationCity, data.destinationState, data.destinationArea].filter(Boolean).join(", "),
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
      originState: String(formData.get("originState") || ""),
      originCity: String(formData.get("originCity") || "").trim(),
      originArea: String(formData.get("originArea") || "").trim(),
      destinationState: String(formData.get("destinationState") || ""),
      destinationCity: String(formData.get("destinationCity") || "").trim(),
      destinationArea: String(formData.get("destinationArea") || "").trim(),
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

  function fillSettingsForm() {
    const form = $("#settings-form");
    for (const key of ["business", "owner", "address", "primary", "secondary", "email", "alternateEmail"]) {
      form.elements[key].value = settings[key] || "";
    }
    renderAdminVehicles();
  }

  function renderAdminVehicles() {
    $("#admin-vehicles").innerHTML = settings.vehicles.map((vehicle, index) =>
      `<div class="admin-vehicle-row"><input aria-label="${safeText(language === "hi" ? `गाड़ी ${index + 1}` : `Vehicle ${index + 1}`)}" value="${safeText(vehicle)}" maxlength="40"><button type="button" data-remove-vehicle="${index}" aria-label="${safeText(language === "hi" ? `${vehicle} हटाएं` : `Remove ${vehicle}`)}">${language === "hi" ? "हटाएं" : "REMOVE"}</button></div>`
    ).join("");
    $$("[data-remove-vehicle]", $("#admin-vehicles")).forEach((button) => {
      button.addEventListener("click", () => {
        if (settings.vehicles.length === 1) {
          window.alert(t("keepOneVehicle"));
          return;
        }
        settings.vehicles.splice(Number(button.dataset.removeVehicle), 1);
        renderAdminVehicles();
      });
    });
  }

  function translateAdminVehicles() {
    $$("[data-remove-vehicle]", $("#admin-vehicles")).forEach((button) => {
      const index = Number(button.dataset.removeVehicle);
      const vehicle = $("input", button.parentElement)?.value || settings.vehicles[index] || "";
      button.textContent = language === "hi" ? "हटाएं" : "REMOVE";
      button.setAttribute("aria-label", language === "hi" ? `${vehicle} हटाएं` : `Remove ${vehicle}`);
    });
  }

  function showDashboard() {
    login.hidden = true;
    dashboard.hidden = false;
    fillSettingsForm();
  }

  document.querySelector(".admin-trigger").addEventListener("click", () => {
    setLoginMode();
    login.hidden = false;
    dashboard.hidden = true;
    dialog.showModal();
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
    input.value = "";
    renderAdminVehicles();
  });

  $("#settings-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const numbers = $("#admin-vehicles");
    const vehicles = $$("input", numbers).map((input) => input.value.trim()).filter(Boolean);
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
      vehicles
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
  $$(".main-nav a").forEach((link) => link.addEventListener("click", () => {
    $(".main-nav").classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
  $("#year").textContent = new Date().getFullYear();
  renderSettings();
  applyLanguage();

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
