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
      trust: "Registered Trust · Reg. No. XXXXXXX",
      rights: "All donations are eligible for tax exemption under 80G.",
      tagline: "Built with care, for every kid still waiting on the register.",
    },
    home: {
      kicker: "फिर से घंटी बजे — the bell rings for every child, twice",
      heroTitle1: "No child should be walked out of class",
      heroTitleItalic: " in front of everyone",
      heroTitle2:
        ", over a fee their parents couldn't pay.",
      heroBody:
        "Every year, thousands of children are pulled out of school mid-session — not for missing marks, but for missing money. Second Bell clears the pending fees, restores the seat, and works with parents so the next session never starts the same way.",
      ctaFund: "Fund a child's return",
      ctaSee: "See how it works",
      registerCaption: "Illustrative — real names withheld to protect children's privacy.",
      registerTitle: "Attendance Register — Session 2026",
      registerRoll: "Roll No. 001–006",
      problemKicker: "What actually happens",
      problemTitle:
        "The child rarely understands the money problem at home. They only understand the humiliation.",
      problem1Title: "Called out, mid-class",
      problem1Body:
        "Fees fall behind, and a child is asked — in front of the whole class — to step out to the reception or a separate room, often with the reason said out loud for everyone to hear. Many decide dropping out is less painful than going back to that room again.",
      problem2Title: "Left off the bus",
      problem2Body:
        "Some schools stop unpaid students from boarding the bus altogether, leaving young children to find their own way home — through traffic, unfamiliar routes, and real risk to their safety, simply because the fee ledger wasn't settled.",
      problemQuote:
        "\u201cMost of these families aren't careless with fees. They're carrying a job loss, an illness, or a home with only one earning parent — and no one at the school gate asks why.\u201d",
      approachKicker: "Our approach",
      approachTitle:
        "We treat this as one problem with two ends: the child's classroom, and the parent's income.",
      p1tag: "Program 01",
      p1title: "Back to Class",
      p1body:
        "We work directly with schools to identify capable children who were forced to drop out, clear their pending fees, and take full responsibility for that session's remaining costs — quietly, with no further conditions on the child.",
      p2tag: "Program 02",
      p2title: "Steady Income",
      p2body:
        "We counsel parents to understand why the work stopped, train them for roles the current market is actually hiring for, and help them either get placed or start a small venture — backed by loans at 1% yearly interest, with regular follow-up.",
      p3tag: "Program 03 · Optional",
      p3title: "Full Plate",
      p3body:
        "For children who need it, we arrange a free, nutritious mid-day meal — so an empty stomach is never the reason a child can't concentrate in class.",
      learnMore: "Learn more →",
      processKicker: "The process",
      processTitle: "From a name on a withdrawal list to a name back on the register.",
      step1title: "We hear from the school",
      step1body: "Partner schools flag meritorious children withdrawn or at risk of withdrawal over unpaid fees, before the child is asked to leave.",
      step2title: "We verify, gently",
      step2body: "A home visit and a conversation with parents — never the child — to understand the real financial situation.",
      step3title: "Fees are cleared",
      step3body: "We settle the pending amount directly with the school and cover the rest of that session, so the seat is secured.",
      step4title: "Parents get support",
      step4body: "Skill counseling, job placement or a low-interest micro-loan, and monthly check-ins until the household is stable.",
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
      kicker: "Option 01",
      title: "Donate",
      body: "Every rupee goes to a school fee, a training course, or a loan fund — we publish where each contribution lands. Donations are eligible for tax exemption under Section 80G.",
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
      kicker: "Why we exist",
      title:
        "A late fee shouldn't cost a child their classroom, their friends, or their dignity.",
      intro:
        "Second Bell started from one observation: children who are pulled out of school over unpaid fees are almost never the ones responsible for the situation — and they carry the humiliation of it long after the fee itself is forgotten. We work upstream of that moment, with both the child's seat and the parent's income.",
      beliefKicker: "Our belief",
      beliefTitle: "Fixing the fee without fixing the income just delays the next dropout.",
      beliefBody:
        "Paying a pending fee gets a child back into the classroom this session. It doesn't answer why the parent couldn't pay in the first place. So we treat the two as one case: the child's education, and the household's ability to sustain it — long after we've stopped watching.",
      stat1: "the year we started working with our first partner school",
      stat2: "partner schools across three states",
      stat3: "conditions placed on the child once fees are cleared",
      howKicker: "How we work",
      pr1t: "The child is never the point of contact",
      pr1b: "Every conversation about money happens with parents and school administration — never in front of, or through, the child.",
      pr2t: "We fund the whole session, not just the arrears",
      pr2b: "Clearing only the overdue amount leaves the same cliff a few months later. We commit to the full session once we take a case on.",
      pr3t: "Livelihood support isn't charity, it's a loan",
      pr3b: "Parents repay their micro-loans at 1% yearly interest — enough to build ownership and discipline, low enough to actually be repayable.",
      pr4t: "We stay for the follow-up",
      pr4b: "A job placement or a new stall is the start, not the finish. We check in monthly until the household is stable on its own.",
      cta: "See how you can help",
    },
    programs: {
      kicker: "What we run",
      title: "Three programs. One goal — a child who stays in school because the household can carry it.",
      b2c: {
        tag: "Program 01",
        title: "Back to Class",
        intro: "For children who were withdrawn, or are about to be, purely over pending fees.",
        pts: [
          "We partner directly with schools to identify meritorious children forced into a dropout over unpaid fees.",
          "We clear the pending amount with the school directly — no cash changes hands with the family.",
          "We take responsibility for that child's fees for the rest of the academic session, not just the overdue portion.",
          "The process stays between us, the parents, and the school administration. The child simply comes back to class.",
        ],
      },
      si: {
        tag: "Program 02",
        title: "Steady Income",
        intro: "For the parent or guardian behind that child, especially where there's only one earning adult in the house.",
        pts: [
          "One-on-one counseling to understand what actually stopped the income — job loss, illness, or a business that failed.",
          "Skill training mapped to what the local job market is hiring for right now, not generic courses.",
          "Support finding a job, or a micro-loan at 1% yearly interest to start a small venture of their own.",
          "Monthly monitoring after placement or launch, so problems get caught early instead of turning into another dropout.",
        ],
      },
      fp: {
        tag: "Program 03 · Optional",
        title: "Full Plate",
        intro: "Rolled out where a school or community needs it — a free, nutritious mid-day meal.",
        pts: [
          "Offered to students who need it, on top of fee support, at partner schools that request it.",
          "Meals are planned with basic nutrition guidelines so kids can actually concentrate through an afternoon of class.",
          "Run in coordination with the school kitchen or a local partner, rather than a separate parallel system.",
        ],
      },
      ctaTitle: "Know a school, or a family, that needs one of these programs?",
      ctaButton: "Get in touch",
    },
    getInvolved: {
      kicker: "Get involved",
      title: "There are three ways to help. Pick the one you can actually sustain.",
      donateTag: "Option 01",
      donateTitle: "Donate",
      donateBody:
        "Every rupee goes to a school fee, a training course, or a loan fund — we publish where each contribution lands. Donations are eligible for tax exemption under Section 80G.",
      startDonation: "Start a donation",
      volTag: "Option 02",
      volTitle: "Volunteer your skill",
      volBody: "We need people more than we need more donors, sometimes. Here's where hands-on time helps most.",
      vol1t: "Skill trainers",
      vol1b: "Run short, practical sessions in trades the local market is actually hiring for.",
      vol2t: "Career counselors",
      vol2b: "Sit with a parent for an hour and help map what work fits their situation.",
      vol3t: "School liaisons",
      vol3b: "Help us build and maintain relationships with school administrations in your city.",
      partTag: "Option 03",
      partTitle: "Partner with us",
      partBody: "If you run a school, a business that's hiring, or a CSR program, we can plug in directly.",
      part1t: "Schools",
      part1b: "Flag children at risk of a fee-related dropout before it happens, and we'll take it from there.",
      part2t: "Employers",
      part2b: "Offer entry-level roles suited to parents we've trained — we handle the referral and follow-up.",
      part3t: "CSR & foundations",
      part3b: "Fund a cohort of children or a training batch, with full reporting on outcomes.",
      partCta: "Talk to our partnerships team",
    },
    contact: {
      kicker: "Contact",
      title: "Whether it's one child or a whole school, tell us the situation.",
      reachDirect: "Reach us directly",
      email: "Email",
      phone: "Phone",
      office: "Office",
      officeAddr: "Second Bell Trust, 4th Floor, Sector 18, Noida, Uttar Pradesh",
      forSchools: "For schools",
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
    },
  },
  hi: {
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
      kicker: "फिर से घंटी बजे — हर बच्चे के लिए घंटी दो बार बजे",
      heroTitle1: "किसी भी बच्चे को सबके सामने क्लास से",
      heroTitleItalic: " बाहर नहीं निकाला जाना चाहिए",
      heroTitle2: ", सिर्फ़ इसलिए क्योंकि उसके माता-पिता फ़ीस नहीं भर पाए।",
      heroBody:
        "हर साल हज़ारों बच्चों को सत्र के बीच में स्कूल से निकाल दिया जाता है — पढ़ाई में कमी की वजह से नहीं, बल्कि पैसों की कमी की वजह से। Second Bell बकाया फ़ीस भरता है, बच्चे की सीट वापस दिलाता है, और माता-पिता के साथ मिलकर काम करता है ताकि अगला सत्र फिर उसी तरह शुरू न हो।",
      ctaFund: "किसी बच्चे की वापसी को फंड करें",
      ctaSee: "जानिए यह कैसे काम करता है",
      registerCaption: "उदाहरण मात्र — बच्चों की निजता की सुरक्षा के लिए असली नाम नहीं दिखाए गए हैं।",
      registerTitle: "अटेंडेंस रजिस्टर — सत्र 2026",
      registerRoll: "रोल नं. 001–006",
      problemKicker: "असल में होता क्या है",
      problemTitle:
        "बच्चे को घर की पैसों की परेशानी शायद ही समझ आती है। उसे बस अपमान समझ आता है।",
      problem1Title: "क्लास के बीच में बुलाया जाना",
      problem1Body:
        "फ़ीस बकाया होने पर, बच्चे को पूरी क्लास के सामने रिसेप्शन या किसी अलग कमरे में जाने के लिए कह दिया जाता है, अक्सर वजह भी सबके सामने बोल दी जाती है। कई बच्चे स्कूल छोड़ना ही बेहतर समझते हैं, बजाय दोबारा उस कमरे में जाने के।",
      problem2Title: "बस में बैठने से रोक दिया जाना",
      problem2Body:
        "कुछ स्कूल फ़ीस बकाया होने पर बच्चों को बस में चढ़ने ही नहीं देते, जिससे छोटे बच्चों को खुद ही ट्रैफ़िक और अनजान रास्तों से होकर घर जाना पड़ता है — सिर्फ़ इसलिए क्योंकि फ़ीस का हिसाब पूरा नहीं हुआ था।",
      problemQuote:
        "\u201cज़्यादातर परिवार फ़ीस को लेकर लापरवाह नहीं होते। वे नौकरी छूटने, बीमारी, या सिर्फ़ एक कमाने वाले माता-पिता के बोझ से जूझ रहे होते हैं — और स्कूल के गेट पर कोई यह वजह पूछता ही नहीं।\u201d",
      approachKicker: "हमारा तरीका",
      approachTitle:
        "हम इसे एक ही समस्या के दो सिरे मानते हैं: बच्चे की क्लास, और माता-पिता की कमाई।",
      p1tag: "कार्यक्रम 01",
      p1title: "बैक टू क्लास",
      p1body:
        "हम स्कूलों के साथ मिलकर उन मेधावी बच्चों की पहचान करते हैं जिन्हें फ़ीस के कारण स्कूल छोड़ना पड़ा, उनकी बकाया फ़ीस भरते हैं, और उस पूरे सत्र की ज़िम्मेदारी लेते हैं — चुपचाप, बिना बच्चे पर कोई शर्त लगाए।",
      p2tag: "कार्यक्रम 02",
      p2title: "स्टेडी इनकम",
      p2body:
        "हम माता-पिता की काउंसलिंग करते हैं ताकि समझ सकें कि कमाई क्यों रुकी, उन्हें आज के बाज़ार की ज़रूरत के हिसाब से ट्रेनिंग देते हैं, और नौकरी दिलाने या सिर्फ़ 1% सालाना ब्याज पर लोन देकर खुद का छोटा काम शुरू करवाने में मदद करते हैं — साथ ही नियमित निगरानी भी।",
      p3tag: "कार्यक्रम 03 · वैकल्पिक",
      p3title: "फुल प्लेट",
      p3body:
        "जिन बच्चों को ज़रूरत है, उनके लिए हम मुफ़्त, पौष्टिक मिड-डे मील की व्यवस्था करते हैं — ताकि खाली पेट कभी क्लास में ध्यान न लगा पाने की वजह न बने।",
      learnMore: "और जानें →",
      processKicker: "प्रक्रिया",
      processTitle: "निकाले गए बच्चे की लिस्ट से लेकर, फिर से रजिस्टर पर नाम आने तक।",
      step1title: "स्कूल से जानकारी मिलती है",
      step1body: "पार्टनर स्कूल उन मेधावी बच्चों की जानकारी देते हैं जिन्हें फ़ीस के कारण निकाला गया या निकाले जाने का खतरा है — बच्चे को कुछ कहे जाने से पहले ही।",
      step2title: "हम धीरे से पुष्टि करते हैं",
      step2body: "माता-पिता से घर जाकर बात — बच्चे से कभी नहीं — ताकि असली आर्थिक स्थिति समझी जा सके।",
      step3title: "फ़ीस भर दी जाती है",
      step3body: "हम बकाया राशि सीधे स्कूल को भरते हैं और उस पूरे सत्र का खर्च उठाते हैं, ताकि सीट पक्की रहे।",
      step4title: "माता-पिता को सहयोग मिलता है",
      step4body: "स्किल काउंसलिंग, नौकरी दिलाना या कम ब्याज़ पर माइक्रो-लोन, और परिवार स्थिर होने तक हर महीने जांच।",
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
      kicker: "विकल्प 01",
      title: "दान करें",
      body: "हर रुपया स्कूल फ़ीस, ट्रेनिंग या लोन फंड में जाता है — हम हर योगदान का हिसाब सार्वजनिक करते हैं। सभी दान धारा 80G के तहत टैक्स छूट के पात्र हैं।",
      tier1: "एक बच्चे की एक महीने की फ़ीस",
      tier2: "एक बच्चे की पूरे सत्र की फ़ीस",
      tier3: "एक अभिभावक की ट्रेनिंग + लोन सेटअप",
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
      failBody: "अगर पैसे कटे हैं, तो 5–7 कार्यदिवसों में अपने आप वापस आ जाएंगे। यह दोबारा हो तो hello@secondbell.org पर लिखें।",
      tryAgain: "दोबारा कोशिश करें",
    },
    about: {
      kicker: "हम यह क्यों करते हैं",
      title: "देर से भरी फ़ीस की वजह से किसी बच्चे को उसकी क्लास, दोस्त या इज़्ज़त नहीं गंवानी चाहिए।",
      intro:
        "Second Bell की शुरुआत एक बात से हुई: जो बच्चे बकाया फ़ीस के कारण स्कूल से निकाले जाते हैं, वे लगभग कभी भी इसके ज़िम्मेदार नहीं होते — और फ़ीस भुला दिए जाने के बाद भी वे अपमान का बोझ लंबे समय तक ढोते हैं। हम इस पल से पहले ही काम करते हैं — बच्चे की सीट और माता-पिता की कमाई, दोनों पर।",
      beliefKicker: "हमारी सोच",
      beliefTitle: "सिर्फ़ फ़ीस भरना, बिना कमाई ठीक किए, अगला ड्रॉपआउट टाल भर देता है।",
      beliefBody:
        "बकाया फ़ीस भरने से बच्चा इस सत्र में क्लास में वापस आ जाता है। लेकिन यह इस सवाल का जवाब नहीं देता कि माता-पिता पहले फ़ीस क्यों नहीं भर पाए। इसलिए हम दोनों को एक ही मामला मानते हैं: बच्चे की पढ़ाई, और परिवार की उसे संभालने की क्षमता — हमारे नज़र हटाने के बाद भी।",
      stat1: "जिस साल हमने पहले पार्टनर स्कूल के साथ काम शुरू किया",
      stat2: "तीन राज्यों में पार्टनर स्कूल",
      stat3: "फ़ीस भरने के बाद बच्चे पर कोई शर्त नहीं",
      howKicker: "हम कैसे काम करते हैं",
      pr1t: "बच्चा कभी संपर्क का माध्यम नहीं होता",
      pr1b: "पैसों को लेकर हर बातचीत माता-पिता और स्कूल प्रशासन के साथ होती है — कभी बच्चे के सामने या उसके ज़रिए नहीं।",
      pr2t: "हम पूरा सत्र फंड करते हैं, सिर्फ़ बकाया नहीं",
      pr2b: "सिर्फ़ बकाया राशि भरने से कुछ महीनों बाद वही स्थिति फिर आ जाती है। एक बार केस लेने पर, हम पूरे सत्र की ज़िम्मेदारी लेते हैं।",
      pr3t: "आजीविका सहयोग दान नहीं, लोन है",
      pr3b: "माता-पिता अपने माइक्रो-लोन को सिर्फ़ 1% सालाना ब्याज़ पर चुकाते हैं — इतना कि मालिकाना हक़ और अनुशासन बने, और इतना कम कि चुकाना मुमकिन हो।",
      pr4t: "हम फॉलो-अप के लिए रुके रहते हैं",
      pr4b: "नौकरी मिलना या नई दुकान लगना शुरुआत है, अंत नहीं। जब तक परिवार खुद स्थिर नहीं हो जाता, हम हर महीने जांच करते हैं।",
      cta: "देखें आप कैसे मदद कर सकते हैं",
    },
    programs: {
      kicker: "हमारे कार्यक्रम",
      title: "तीन कार्यक्रम। एक लक्ष्य — ऐसा बच्चा जो स्कूल में बना रहे क्योंकि परिवार उसे संभाल सकता है।",
      b2c: {
        tag: "कार्यक्रम 01",
        title: "बैक टू क्लास",
        intro: "उन बच्चों के लिए जिन्हें सिर्फ़ बकाया फ़ीस की वजह से निकाला गया, या निकाले जाने का खतरा है।",
        pts: [
          "हम स्कूलों के साथ सीधे मिलकर उन मेधावी बच्चों की पहचान करते हैं जिन्हें फ़ीस बकाया होने पर स्कूल छोड़ना पड़ा।",
          "हम बकाया राशि सीधे स्कूल को भरते हैं — परिवार के हाथ में कोई नकद नहीं जाता।",
          "हम उस पूरे शैक्षणिक सत्र की फ़ीस की ज़िम्मेदारी लेते हैं, सिर्फ़ बकाया हिस्से की नहीं।",
          "यह पूरी प्रक्रिया हमारे, माता-पिता और स्कूल प्रशासन के बीच ही रहती है। बच्चा बस वापस क्लास में आ जाता है।",
        ],
      },
      si: {
        tag: "कार्यक्रम 02",
        title: "स्टेडी इनकम",
        intro: "बच्चे के पीछे खड़े माता-पिता या अभिभावक के लिए, ख़ासकर जहां घर में सिर्फ़ एक ही कमाने वाला हो।",
        pts: [
          "यह समझने के लिए व्यक्तिगत काउंसलिंग कि कमाई असल में क्यों रुकी — नौकरी छूटना, बीमारी, या कोई असफल व्यवसाय।",
          "स्किल ट्रेनिंग जो सामान्य कोर्स नहीं, बल्कि आज स्थानीय बाज़ार में जो भर्तियां हो रही हैं, उनके हिसाब से हो।",
          "नौकरी दिलाने में मदद, या अपना छोटा व्यवसाय शुरू करने के लिए सिर्फ़ 1% सालाना ब्याज़ पर माइक्रो-लोन।",
          "नौकरी या शुरुआत के बाद हर महीने निगरानी, ताकि समस्याएं जल्दी पकड़ में आएं, दोबारा ड्रॉपआउट होने से पहले।",
        ],
      },
      fp: {
        tag: "कार्यक्रम 03 · वैकल्पिक",
        title: "फुल प्लेट",
        intro: "जहां किसी स्कूल या समुदाय को ज़रूरत हो — मुफ़्त, पौष्टिक मिड-डे मील।",
        pts: [
          "फ़ीस सहयोग के साथ-साथ, ज़रूरतमंद बच्चों को उन पार्टनर स्कूलों में दिया जाता है जो इसका अनुरोध करते हैं।",
          "भोजन बुनियादी पोषण दिशा-निर्देशों के अनुसार तय होता है ताकि बच्चे दोपहर की क्लास में ध्यान लगा सकें।",
          "यह स्कूल की रसोई या स्थानीय पार्टनर के साथ मिलकर चलाया जाता है, अलग से समानांतर व्यवस्था के बजाय।",
        ],
      },
      ctaTitle: "किसी ऐसे स्कूल या परिवार को जानते हैं जिसे इनमें से किसी कार्यक्रम की ज़रूरत है?",
      ctaButton: "संपर्क करें",
    },
    getInvolved: {
      kicker: "जुड़िए",
      title: "मदद करने के तीन तरीके हैं। वह चुनें जिसे आप वाकई निभा सकें।",
      donateTag: "विकल्प 01",
      donateTitle: "दान करें",
      donateBody:
        "हर रुपया स्कूल फ़ीस, ट्रेनिंग या लोन फंड में जाता है — हम हर योगदान का हिसाब सार्वजनिक करते हैं। सभी दान धारा 80G के तहत टैक्स छूट के पात्र हैं।",
      startDonation: "दान शुरू करें",
      volTag: "विकल्प 02",
      volTitle: "अपना हुनर स्वयंसेवा में दें",
      volBody: "कभी-कभी हमें और दानदाताओं से ज़्यादा, लोगों की ज़रूरत होती है। यहां आपका समय सबसे ज़्यादा काम आता है।",
      vol1t: "स्किल ट्रेनर",
      vol1b: "उन हुनरों में छोटे, व्यावहारिक सेशन चलाएं जिनकी स्थानीय बाज़ार में असल में मांग है।",
      vol2t: "करियर काउंसलर",
      vol2b: "किसी अभिभावक के साथ एक घंटा बैठें और समझें कि उनके लिए कौन-सा काम सही रहेगा।",
      vol3t: "स्कूल लाइज़न",
      vol3b: "अपने शहर के स्कूल प्रशासन के साथ रिश्ते बनाने और बनाए रखने में हमारी मदद करें।",
      partTag: "विकल्प 03",
      partTitle: "हमारे साथ पार्टनर बनें",
      partBody: "अगर आप कोई स्कूल, भर्ती कर रहा बिज़नेस, या CSR प्रोग्राम चलाते हैं, तो हम सीधे जुड़ सकते हैं।",
      part1t: "स्कूल",
      part1b: "फ़ीस से जुड़े ड्रॉपआउट के खतरे में बच्चों की जानकारी हमें दें, बाकी हम संभाल लेंगे।",
      part2t: "एम्प्लॉयर",
      part2b: "हमारे प्रशिक्षित माता-पिता के लिए एंट्री-लेवल भूमिकाएं दें — रेफ़रल और फॉलो-अप हम संभालते हैं।",
      part3t: "CSR और फ़ाउंडेशन",
      part3b: "बच्चों के एक समूह या ट्रेनिंग बैच को फंड करें, पूरी रिपोर्टिंग के साथ।",
      partCta: "हमारी पार्टनरशिप टीम से बात करें",
    },
    contact: {
      kicker: "संपर्क करें",
      title: "चाहे एक बच्चे की बात हो या पूरे स्कूल की, हमें स्थिति बताएं।",
      reachDirect: "सीधे संपर्क करें",
      email: "ईमेल",
      phone: "फ़ोन",
      office: "कार्यालय",
      officeAddr: "Second Bell Trust, चौथी मंज़िल, सेक्टर 18, नोएडा, उत्तर प्रदेश",
      forSchools: "स्कूलों के लिए",
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
