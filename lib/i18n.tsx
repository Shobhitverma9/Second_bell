"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Lang = "en" | "hi";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      programs: "Programs",
      getInvolved: "Get Involved",
      contact: "Contact",
      donate: "Donate",
    },
    footer: {
      blurb:
        "We settle pending school fees so children can walk back into class, and we help their parents build steady work — so the door doesn't close again.",
      explore: "Explore",
      programs: "Programs",
      reachUs: "Reach us",
      backToClass: "Back to Class",
      steadyIncome: "Steady Income",
      fullPlate: "Full Plate",
      trust: "Registered Section 8 Non-Profit Organization",
      rights: "All donations are eligible for tax exemption under 80G.",
      tagline: "Restoring Dignity. Rebuilding Families.",
    },
    home: {
      kicker: "Second Bell Foundation",
      heroTitle1: "When the School Bell Rings,",
      heroTitleItalic: " Every Child Belongs Inside.",
      heroTitle2: "",
      heroBody:
        "We clear pending school fees, restore classroom dignity, and empower unemployed parents with micro-loans and training—so no child ever drops out in silence.",
      ctaFund: "Sponsor a Child’s Dignity",
      ctaSee: "Partner with Us (CSR)",
      registerCaption: "Illustrative — real names withheld to protect children's privacy.",
      registerTitle: "Attendance Register — Session 2026",
      registerRoll: "Roll No. 001–006",
      
      processKicker: "How It Works (Operational Workflow)",
      processTitle: "Our four-step operational workflow ensures total transparency, dignity, and measurable social impact at every stage.",
      step1title: "01 | Identification & Referral",
      step1body: "A school administration or distressed parent confidentially alerts Second Bell Foundation regarding overdue fees and financial crisis.",
      step2title: "02 | Immediate Shield & Fee Clearance",
      step2body: "Second Bell clears dues directly into the school's official account. The child continues classes without interruption or social stigma.",
      step3title: "03 | Livelihood Restructuring",
      step3body: "Parents complete skill assessment, receive business training, and access a 1% interest micro-loan to initiate a sustainable micro-venture.",
      step4title: "04 | Graduation & Self-Reliance",
      step4body: "The family establishes stable monthly earnings, repays the micro-loan into the revolving fund, and comfortably resumes funding their child's future.",

      stat1: "children returned to class since we started",
      stat2: "in pending fees cleared directly with schools",
      stat3: "parents placed in jobs or running a small venture",
      stat4: "yearly interest on every livelihood loan we give",
      voicesKicker: "In their words",
      voice1: "I used to walk the long way home so my daughter's friends wouldn't see her getting picked up separately. Now she takes the bus with everyone else.",
      voice1role: "Parent, Uttar Pradesh",
      voice2: "They didn't just pay the fee. They asked why I'd lost my tailoring work, and helped me set up a stall of my own.",
      voice2role: "Parent, and now shop owner",
      voiceIllustrative: "Illustrative account",
      voiceNote: "Names withheld and composited to protect family privacy.",
      ctaBandTitle: "A cleared fee is quiet. A child walking back into class is not.",
      ctaBandDonate: "Donate now",
      ctaBandPartner: "Partner your school or business",
    },
    donate: {
      kicker: "Donation & Fundraising Campaigns",
      title: "Donate",
      body: "Your daily choices can ring the Second Bell for a deserving child. Every contribution directly funds tuition settlements, learning kits, or micro-capital for a parent's business startup.",
      tier1: "One month of fees for one child",
      tier2: "A full session of fees for one child",
      tier3: "Skill training + loan setup for one parent",
      customLabel: "Or enter your own amount (₹)",
      customPlaceholder: "e.g. 5000",
      nameLabel: "Full name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      payButton: "Proceed to pay",
      paying: "Opening secure checkout…",
      selectAmount: "Please select or enter an amount.",
      fillDetails: "Please fill in your name, email and phone.",
      configMissing:
        "Payments aren't fully configured yet — the Razorpay keys need to be added on the server before this goes live.",
      successTitle: "Thank you — payment received",
      successBody: "A receipt has been sent to your email. Your contribution will directly clear a pending fee or fund a livelihood loan.",
      failTitle: "Payment could not be verified",
      failBody: "If money was deducted, it will be auto-refunded within 5–7 working days. Please write to hello@secondbell.org if this repeats.",
      tryAgain: "Try again",
    },
    about: {
      kicker: "About Us / Our Story",
      title:
        "The Silent Crisis in Our Classrooms",
      intro:
        "Every year, thousands of promising students disappear from school rosters. They are not dropping out because they lack ambition or intellectual capability; they drop out because of a sudden, temporary financial crisis at home.\n\nWhen a family faces unexpected job loss, severe health emergencies, or the compounded struggle of single parenthood, school fees naturally fall behind. Tragically, the immediate fallout often hits the child directly in the classroom—being asked to step outside during lectures, sitting isolated in a reception area, or being barred from boarding the school bus at the end of the day.\n\nThe intense psychological weight of this public humiliation leads innocent children to withdraw from school entirely, sacrificing their future to escape temporary embarrassment.",
      beliefKicker: "Why \"Second Bell\"?",
      beliefTitle: "The second chance—a firm promise that a family’s temporary financial struggle will never compromise a child’s fundamental right to learn.",
      beliefBody:
        "The first bell signals the routine start of a standard school day. For a child facing economic distress, missing that start often feels like the final bell of their educational journey. Second Bell Foundation represents the second chance—a firm promise that a family’s temporary financial struggle will never compromise a child’s fundamental right to learn, belong, and hold their head high with pride.",
      founderKicker: "Message from the Founder",
      founderBody: "\"No 10-year-old child should ever be forced to choose between their self-respect and their right to an education. Second Bell Foundation was born out of a simple, unshakeable conviction: poverty in a family is temporary, but the psychological humiliation inflicted on a child leaves permanent scars. We are here to ensure that when hard times hit a home, the classroom doors remain wide open.\"\n— Founder & Director, Second Bell Foundation",
      stat1: "the year we started working with our first partner school",
      stat2: "partner schools across three states",
      stat3: "conditions placed on the child once fees are cleared",
      cta: "See how you can help",
    },
    programs: {
      kicker: "Our Three-Pillar Framework",
      title: "We do not rely on superficial or temporary patches. Our integrated model provides immediate protective relief to the student while systematically addressing the root cause of unemployment in the household.",
      b2c: {
        tag: "Pillar 1",
        title: "Education Continuity & Dignity (Immediate Intervention)",
        intro: "We engage directly with school management teams to clear pending tuition dues with complete confidentiality. By assuming full financial responsibility for the student’s remaining academic session, we ensure zero disruption to their learning and shield them completely from public embarrassment or isolation.",
        pts: [],
      },
      si: {
        tag: "Pillar 2",
        title: "Parental Livelihood & Empowerment (Long-Term Solution)",
        intro: "To ensure true family self-reliance, we counsel unemployed parents, align them with market-relevant vocational training, and offer low-interest micro-loans from our Revolving Fund at an annual interest rate of just 1%. We mentor them to launch viable micro-businesses, closely monitoring their progress until they reach financial independence.",
        pts: [],
      },
      fp: {
        tag: "Pillar 3",
        title: "Essential Nutrition & Well-being (Supplementary Support)",
        intro: "A hungry child cannot focus on education. For families enduring extreme economic distress, we sponsor daily mid-day meals and supply essential monthly nutrition kits to safeguard the student’s health, cognitive growth, and daily school attendance.",
        pts: [],
      },
      ctaTitle: "Partner with Us (Dedicated School Management Portal)",
      ctaButton: "Request a School Partnership MoU",
    },
    getInvolved: {
      kicker: "Donation & Fundraising Campaigns",
      title: "Your daily choices can ring the Second Bell for a deserving child. Every contribution directly funds tuition settlements, learning kits, or micro-capital for a parent's business startup.",
      
      c1Tag: "Campaign 1: Sip for a Second Chance",
      c1Focus: "Focus: Daily Micro-Donations for Education Continuity",
      c1Body: "A single morning cup of coffee costs approximately ₹150. For a child sitting outside a closed classroom door, less than ₹30 a day represents the difference between public humiliation and a bright future. Redirect a small fraction of your weekly routine to keep a child inside the classroom where they belong.",
      c1p1: "₹900 / month: Sponsors a child’s complete monthly tuition and examination fees.",
      c1p2: "₹10,800 / year: Guarantees one full, uninterrupted academic year of education and dignity.",
      
      c2Tag: "Campaign 2: The Kit of Confidence",
      c2Focus: "Focus: Uniforms, Footwear & Essential Learning Kits",
      c2Body: "True dignity in school requires feeling equal among peers. A torn uniform or makeshift plastic bag quietly erodes a student's self-esteem long before class begins.",
      c2p1: "₹800 — Uniform & Shoes Package: 2 sets of tailored school uniforms and sturdy leather school shoes.",
      c2p2: "₹500 — Annual Study Kit: A durable backpack, 10 notebooks, geometry set, and complete writing stationery.",
      c2p3: "₹1,300 — Complete Confidence Kit: Full Uniform + Shoes + Complete Backpack Kit.",

      c3Tag: "Campaign 3: Unbox Their Future (360° Dignity Package)",
      c3Focus: "Focus: Total Student Transformation Sponsorship",
      c3Body: "Equip a student with everything necessary to re-enter school with pride and complete security. This all-inclusive annual package covers tuition fees, examination costs, double uniform sets, shoes, and an annual learning kit.",
      c3p1: "₹12,000 / year: Fully supports 1 student with education, kit, and uniform for an entire academic year.",

      c4Tag: "Campaign 4: Fuel a Parent, Fund a Child",
      c4Focus: "Focus: Sustainable Micro-Credit & Family Empowerment",
      c4Body: "We do not foster long-term charity dependence—we build self-reliant families. Contributions to our Revolving Livelihood Fund provide unemployed parents with skill development and a 1% low-interest micro-loan to launch a small enterprise. As loans are repaid, funds cycle forward to assist the next family.",
      c4p1: "₹5,000: Seeds a micro-enterprise capital loan for a parent in need.",
      c4p2: "₹15,000: Restores a family's financial stability while sponsoring their child's academic year simultaneously.",

      partTag: "Partner with Us",
      partTitle: "Dedicated School Management Portal",
      partBody: "School administrators face a difficult balance between maintaining financial operations and treating defaulted families with compassion. Second Bell Foundation bridges this gap as your institutional social partner.\n\nWe collaborate with school management under a formal Memorandum of Understanding (MoU) to settle outstanding fee defaults directly and discreetly—eliminating the need for coercive reminders, public isolation, or transport disruptions.",
      part1t: "Action:",
      part1b: "Request a School Partnership MoU",
      part2t: "Action:",
      part2b: "Schedule an Administrative Discussion",
      
      partCta: "Talk to our partnerships team",
    },
    contact: {
      kicker: "Governance & Contact Information",
      title: "Get in Touch with Us",
      reachDirect: "Reach us directly",
      email: "Email",
      phone: "Phone",
      office: "Office",
      officeAddr: "Second Bell Foundation",
      forSchools: "Governance",
      entity: "Legal Entity: Second Bell Foundation (Registered Section 8 Non-Profit Organization, Ministry of Corporate Affairs, Govt. of India)",
      tax: "Tax Compliance: Section 12A & 80G Certified | CSR Registration Compliant",
      emailLabel: "connect@secondbell.org",
      phoneLabel: "+91-XXXXXXXXXX",
      webLabel: "www.secondbell.org",
      
      formName: "Full name",
      formContact: "Phone or email",
      formRole: "I'm reaching out as a",
      formRoleSelect: "Select one",
      roleDonor: "Donor",
      roleVolunteer: "Volunteer",
      roleSchool: "School administrator",
      roleEmployer: "Employer / CSR partner",
      roleParent: "Parent seeking support",
      roleOther: "Other",
      formMessage: "Message",
      formMessagePlaceholder: "Tell us a bit about the situation",
      send: "Send message",

      faqKicker: "7. Frequently Asked Questions (FAQs)",
      q1: "Q1: How does Second Bell verify if a family genuinely requires financial support?",
      a1: "Our field verification team conducts rigorous background checks, including home visits, income assessment, documentation of employment loss, and direct consultation with school authorities before approving financial sponsorship.",
      q2: "Q2: Are donations made to Second Bell Foundation eligible for tax deductions?",
      a2: "Yes. All financial contributions made to Second Bell Foundation qualify for tax exemption benefits under Section 80G of the Income Tax Act. Donors receive automated tax receipts immediately upon transaction completion.",
      q3: "Q3: Why do you charge a 1% annual interest rate on parental loans instead of giving free grants?",
      a3: "The nominal 1% interest rate instills personal ownership, financial accountability, and self-respect. It transforms a traditional charity handout into a dignified stepping stone. Furthermore, repaid principal recycles endlessly through our Revolving Fund to support new families in crisis.",
      q4: "Q4: Are fee payments given directly to parents?",
      a4: "No. To guarantee 100% financial compliance and intent integrity, all educational fee settlements are transferred directly into the verified bank account of the respective educational institution.",
    },
  },
  hi: {
    // Falling back to English for updated fields in this example to ensure app builds 
    // without typing errors while preserving the language switcher structure.
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      programs: "कार्यक्रम",
      getInvolved: "जुड़िए",
      contact: "संपर्क करें",
      donate: "दान करें",
    },
    footer: {
      blurb:
        "हम बकाया स्कूल फ़ीस भरते हैं ताकि बच्चे फिर से क्लास में लौट सकें, और उनके माता-पिता के लिए स्थिर रोज़गार बनाने में मदद करते हैं — ताकि यह दरवाज़ा दोबारा बंद न हो।",
      explore: "जानिए",
      programs: "कार्यक्रम",
      reachUs: "हमसे संपर्क करें",
      backToClass: "बैक टू क्लास",
      steadyIncome: "स्टेडी इनकम",
      fullPlate: "फुल प्लेट",
      trust: "रजिस्टर्ड ट्रस्ट · रजि. नं. XXXXXXX",
      rights: "सभी दान 80G के तहत टैक्स छूट के पात्र हैं।",
      tagline: "हर उस बच्चे के लिए, जो अभी भी रजिस्टर पर अपनी बारी का इंतज़ार कर रहा है।",
    },
    home: {
      kicker: "Second Bell Foundation",
      heroTitle1: "When the School Bell Rings,",
      heroTitleItalic: " Every Child Belongs Inside.",
      heroTitle2: "",
      heroBody:
        "We clear pending school fees, restore classroom dignity, and empower unemployed parents with micro-loans and training—so no child ever drops out in silence.",
      ctaFund: "Sponsor a Child’s Dignity",
      ctaSee: "Partner with Us (CSR)",
      registerCaption: "Illustrative — real names withheld to protect children's privacy.",
      registerTitle: "Attendance Register — Session 2026",
      registerRoll: "Roll No. 001–006",
      
      processKicker: "How It Works (Operational Workflow)",
      processTitle: "Our four-step operational workflow ensures total transparency, dignity, and measurable social impact at every stage.",
      step1title: "01 | Identification & Referral",
      step1body: "A school administration or distressed parent confidentially alerts Second Bell Foundation regarding overdue fees and financial crisis.",
      step2title: "02 | Immediate Shield & Fee Clearance",
      step2body: "Second Bell clears dues directly into the school's official account. The child continues classes without interruption or social stigma.",
      step3title: "03 | Livelihood Restructuring",
      step3body: "Parents complete skill assessment, receive business training, and access a 1% interest micro-loan to initiate a sustainable micro-venture.",
      step4title: "04 | Graduation & Self-Reliance",
      step4body: "The family establishes stable monthly earnings, repays the micro-loan into the revolving fund, and comfortably resumes funding their child's future.",

      stat1: "बच्चे अब तक क्लास में वापस लौटे",
      stat2: "बकाया फ़ीस सीधे स्कूलों को भरी गई",
      stat3: "माता-पिता को नौकरी या छोटा व्यवसाय शुरू करवाया गया",
      stat4: "हर लोन पर सालाना ब्याज़ दर",
      voicesKicker: "उन्हीं की ज़ुबानी",
      voice1: "पहले मैं घर लौटते वक़्त लंबा रास्ता लेती थी ताकि बेटी की सहेलियां उसे अलग से लिए जाते न देखें। अब वह सबके साथ बस में जाती है।",
      voice1role: "अभिभावक, उत्तर प्रदेश",
      voice2: "उन्होंने सिर्फ़ फ़ीस नहीं भरी। उन्होंने पूछा कि मेरा सिलाई का काम क्यों छूटा, और मुझे अपनी दुकान लगाने में मदद की।",
      voice2role: "अभिभावक, अब दुकान के मालिक",
      voiceIllustrative: "उदाहरण मात्र",
      voiceNote: "परिवारों की निजता की सुरक्षा के लिए नाम नहीं दिखाए गए हैं।",
      ctaBandTitle: "भरी हुई फ़ीस की कोई आवाज़ नहीं होती। क्लास में लौटते बच्चे की होती है।",
      ctaBandDonate: "अभी दान करें",
      ctaBandPartner: "अपने स्कूल या बिज़नेस को जोड़ें",
    },
    donate: {
      kicker: "Donation & Fundraising Campaigns",
      title: "Donate",
      body: "Your daily choices can ring the Second Bell for a deserving child. Every contribution directly funds tuition settlements, learning kits, or micro-capital for a parent's business startup.",
      tier1: "One month of fees for one child",
      tier2: "A full session of fees for one child",
      tier3: "Skill training + loan setup for one parent",
      customLabel: "या अपनी पसंद की राशि डालें (₹)",
      customPlaceholder: "जैसे 5000",
      nameLabel: "पूरा नाम",
      emailLabel: "ईमेल",
      phoneLabel: "फ़ोन नंबर",
      payButton: "भुगतान करें",
      paying: "सुरक्षित चेकआउट खोला जा रहा है…",
      selectAmount: "कृपया एक राशि चुनें या दर्ज करें।",
      fillDetails: "कृपया अपना नाम, ईमेल और फ़ोन नंबर भरें।",
      configMissing:
        "भुगतान अभी पूरी तरह सेट अप नहीं हुआ है — इसे लाइव करने से पहले सर्वर पर Razorpay की keys जोड़नी होंगी।",
      successTitle: "धन्यवाद — भुगतान प्राप्त हुआ",
      successBody: "आपके ईमेल पर रसीद भेज दी गई है। आपका योगदान सीधे किसी बकाया फ़ीस या लोन फंड में जाएगा।",
      failTitle: "भुगतान की पुष्टि नहीं हो पाई",
      failBody: "अगर पैसे कटे हैं, तो 5–7 कार्यदिवसों में अपने চরম आप वापस आ जाएंगे। यह दोबारा हो तो hello@secondbell.org पर लिखें।",
      tryAgain: "दोबारा कोशिश करें",
    },
    about: {
      kicker: "About Us / Our Story",
      title:
        "The Silent Crisis in Our Classrooms",
      intro:
        "Every year, thousands of promising students disappear from school rosters. They are not dropping out because they lack ambition or intellectual capability; they drop out because of a sudden, temporary financial crisis at home.\n\nWhen a family faces unexpected job loss, severe health emergencies, or the compounded struggle of single parenthood, school fees naturally fall behind. Tragically, the immediate fallout often hits the child directly in the classroom—being asked to step outside during lectures, sitting isolated in a reception area, or being barred from boarding the school bus at the end of the day.\n\nThe intense psychological weight of this public humiliation leads innocent children to withdraw from school entirely, sacrificing their future to escape temporary embarrassment.",
      beliefKicker: "Why \"Second Bell\"?",
      beliefTitle: "The second chance—a firm promise that a family’s temporary financial struggle will never compromise a child’s fundamental right to learn.",
      beliefBody:
        "The first bell signals the routine start of a standard school day. For a child facing economic distress, missing that start often feels like the final bell of their educational journey. Second Bell Foundation represents the second chance—a firm promise that a family’s temporary financial struggle will never compromise a child’s fundamental right to learn, belong, and hold their head high with pride.",
      founderKicker: "Message from the Founder",
      founderBody: "\"No 10-year-old child should ever be forced to choose between their self-respect and their right to an education. Second Bell Foundation was born out of a simple, unshakeable conviction: poverty in a family is temporary, but the psychological humiliation inflicted on a child leaves permanent scars. We are here to ensure that when hard times hit a home, the classroom doors remain wide open.\"\n— Founder & Director, Second Bell Foundation",
      stat1: "जिस साल हमने पहले पार्टनर स्कूल के साथ काम शुरू किया",
      stat2: "तीन राज्यों में पार्टनर स्कूल",
      stat3: "फ़ीस भरने के बाद बच्चे पर कोई शर्त नहीं",
      cta: "देखें आप कैसे मदद कर सकते हैं",
    },
    programs: {
      kicker: "Our Three-Pillar Framework",
      title: "We do not rely on superficial or temporary patches. Our integrated model provides immediate protective relief to the student while systematically addressing the root cause of unemployment in the household.",
      b2c: {
        tag: "Pillar 1",
        title: "Education Continuity & Dignity (Immediate Intervention)",
        intro: "We engage directly with school management teams to clear pending tuition dues with complete confidentiality. By assuming full financial responsibility for the student’s remaining academic session, we ensure zero disruption to their learning and shield them completely from public embarrassment or isolation.",
        pts: [],
      },
      si: {
        tag: "Pillar 2",
        title: "Parental Livelihood & Empowerment (Long-Term Solution)",
        intro: "To ensure true family self-reliance, we counsel unemployed parents, align them with market-relevant vocational training, and offer low-interest micro-loans from our Revolving Fund at an annual interest rate of just 1%. We mentor them to launch viable micro-businesses, closely monitoring their progress until they reach financial independence.",
        pts: [],
      },
      fp: {
        tag: "Pillar 3",
        title: "Essential Nutrition & Well-being (Supplementary Support)",
        intro: "A hungry child cannot focus on education. For families enduring extreme economic distress, we sponsor daily mid-day meals and supply essential monthly nutrition kits to safeguard the student’s health, cognitive growth, and daily school attendance.",
        pts: [],
      },
      ctaTitle: "Partner with Us (Dedicated School Management Portal)",
      ctaButton: "Request a School Partnership MoU",
    },
    getInvolved: {
      kicker: "Donation & Fundraising Campaigns",
      title: "Your daily choices can ring the Second Bell for a deserving child. Every contribution directly funds tuition settlements, learning kits, or micro-capital for a parent's business startup.",
      
      c1Tag: "Campaign 1: Sip for a Second Chance",
      c1Focus: "Focus: Daily Micro-Donations for Education Continuity",
      c1Body: "A single morning cup of coffee costs approximately ₹150. For a child sitting outside a closed classroom door, less than ₹30 a day represents the difference between public humiliation and a bright future. Redirect a small fraction of your weekly routine to keep a child inside the classroom where they belong.",
      c1p1: "₹900 / month: Sponsors a child’s complete monthly tuition and examination fees.",
      c1p2: "₹10,800 / year: Guarantees one full, uninterrupted academic year of education and dignity.",
      
      c2Tag: "Campaign 2: The Kit of Confidence",
      c2Focus: "Focus: Uniforms, Footwear & Essential Learning Kits",
      c2Body: "True dignity in school requires feeling equal among peers. A torn uniform or makeshift plastic bag quietly erodes a student's self-esteem long before class begins.",
      c2p1: "₹800 — Uniform & Shoes Package: 2 sets of tailored school uniforms and sturdy leather school shoes.",
      c2p2: "₹500 — Annual Study Kit: A durable backpack, 10 notebooks, geometry set, and complete writing stationery.",
      c2p3: "₹1,300 — Complete Confidence Kit: Full Uniform + Shoes + Complete Backpack Kit.",

      c3Tag: "Campaign 3: Unbox Their Future (360° Dignity Package)",
      c3Focus: "Focus: Total Student Transformation Sponsorship",
      c3Body: "Equip a student with everything necessary to re-enter school with pride and complete security. This all-inclusive annual package covers tuition fees, examination costs, double uniform sets, shoes, and an annual learning kit.",
      c3p1: "₹12,000 / year: Fully supports 1 student with education, kit, and uniform for an entire academic year.",

      c4Tag: "Campaign 4: Fuel a Parent, Fund a Child",
      c4Focus: "Focus: Sustainable Micro-Credit & Family Empowerment",
      c4Body: "We do not foster long-term charity dependence—we build self-reliant families. Contributions to our Revolving Livelihood Fund provide unemployed parents with skill development and a 1% low-interest micro-loan to launch a small enterprise. As loans are repaid, funds cycle forward to assist the next family.",
      c4p1: "₹5,000: Seeds a micro-enterprise capital loan for a parent in need.",
      c4p2: "₹15,000: Restores a family's financial stability while sponsoring their child's academic year simultaneously.",

      partTag: "Partner with Us",
      partTitle: "Dedicated School Management Portal",
      partBody: "School administrators face a difficult balance between maintaining financial operations and treating defaulted families with compassion. Second Bell Foundation bridges this gap as your institutional social partner.\n\nWe collaborate with school management under a formal Memorandum of Understanding (MoU) to settle outstanding fee defaults directly and discreetly—eliminating the need for coercive reminders, public isolation, or transport disruptions.",
      part1t: "Action:",
      part1b: "Request a School Partnership MoU",
      part2t: "Action:",
      part2b: "Schedule an Administrative Discussion",
      
      partCta: "Talk to our partnerships team",
    },
    contact: {
      kicker: "Governance & Contact Information",
      title: "Get in Touch with Us",
      reachDirect: "Reach us directly",
      email: "Email",
      phone: "Phone",
      office: "Office",
      officeAddr: "Second Bell Foundation",
      forSchools: "Governance",
      entity: "Legal Entity: Second Bell Foundation (Registered Section 8 Non-Profit Organization, Ministry of Corporate Affairs, Govt. of India)",
      tax: "Tax Compliance: Section 12A & 80G Certified | CSR Registration Compliant",
      emailLabel: "connect@secondbell.org",
      phoneLabel: "+91-XXXXXXXXXX",
      webLabel: "www.secondbell.org",
      
      formName: "पूरा नाम",
      formContact: "फ़ोन या ईमेल",
      formRole: "मैं संपर्क कर रहा/रही हूं",
      formRoleSelect: "एक चुनें",
      roleDonor: "दानदाता",
      roleVolunteer: "स्वयंसेवक",
      roleSchool: "स्कूल प्रशासक",
      roleEmployer: "एम्प्लॉयर / CSR पार्टनर",
      roleParent: "सहयोग चाहने वाले अभिभावक",
      roleOther: "अन्य",
      formMessage: "संदेश",
      formMessagePlaceholder: "स्थिति के बारे में थोड़ा बताएं",
      send: "संदेश भेजें",

      faqKicker: "7. Frequently Asked Questions (FAQs)",
      q1: "Q1: How does Second Bell verify if a family genuinely requires financial support?",
      a1: "Our field verification team conducts rigorous background checks, including home visits, income assessment, documentation of employment loss, and direct consultation with school authorities before approving financial sponsorship.",
      q2: "Q2: Are donations made to Second Bell Foundation eligible for tax deductions?",
      a2: "Yes. All financial contributions made to Second Bell Foundation qualify for tax exemption benefits under Section 80G of the Income Tax Act. Donors receive automated tax receipts immediately upon transaction completion.",
      q3: "Q3: Why do you charge a 1% annual interest rate on parental loans instead of giving free grants?",
      a3: "The nominal 1% interest rate instills personal ownership, financial accountability, and self-respect. It transforms a traditional charity handout into a dignified stepping stone. Furthermore, repaid principal recycles endlessly through our Revolving Fund to support new families in crisis.",
      q4: "Q4: Are fee payments given directly to parents?",
      a4: "No. To guarantee 100% financial compliance and intent integrity, all educational fee settlements are transferred directly into the verified bank account of the respective educational institution.",
    },
  },
} as const;

type Translations = typeof translations.en;

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("second-bell-lang");
    if (saved === "en" || saved === "hi") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("second-bell-lang", l);
  };

  const t = translations[lang] as unknown as Translations;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div lang={lang} className={lang === "hi" ? "font-hindi" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
