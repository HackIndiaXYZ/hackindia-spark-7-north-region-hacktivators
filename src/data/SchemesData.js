import { GraduationCap, Wheat, Heart, Home, Briefcase } from 'lucide-react';

export const schemesData = [
  {
    id: 'central-scholarship',
    title: 'Central Sector Scholarship',
    benefit: '₹10,000 to ₹20,000/year',
    target: 'For Students',
    icon: GraduationCap,
    category: 'student',
    eligibility: {
      minAge: 16,
      maxAge: 25,
      maxIncome: 800000
    },
    details: {
      eligibility: [
        'Above 80th percentile in Class 12 board exams',
        'Pursuing regular degree course',
        'Family income below ₹8 Lakhs/year'
      ],
      benefits: [
        '₹10,000 per year at graduation level',
        '₹20,000 per year at post-graduation level'
      ],
      documents: [
        'Aadhaar Card',
        'Class 12 Marksheet',
        'Income Certificate'
      ],
      apply: [
        'Register on National Scholarship Portal (NSP)',
        'Submit application through the institution'
      ]
    },
    detailsHindi: {
      eligibility: [
        'कक्षा 12 की बोर्ड परीक्षा में 80% से ऊपर अंक',
        'नियमित डिग्री कोर्स कर रहे हों',
        'पारिवारिक आय ₹8 लाख/वर्ष से कम हो'
      ],
      benefits: [
        'स्नातक स्तर पर ₹10,000 प्रति वर्ष',
        'स्नातकोत्तर स्तर पर ₹20,000 प्रति वर्ष'
      ],
      documents: [
        'आधार कार्ड',
        'कक्षा 12 की मार्कशीट',
        'आय प्रमाण पत्र'
      ],
      apply: [
        'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर पंजीकरण करें',
        'संस्थान के माध्यम से आवेदन जमा करें'
      ]
    },
    simpleExplanation: "This scheme gives yearly financial help to bright students from low-income families so they can complete their college education without money worries."
  },
  {
    id: 'pm-kisan',
    title: 'PM Kisan Samman Nidhi',
    benefit: '₹6,000/year',
    target: 'For Farmers',
    icon: Wheat,
    category: 'farmer',
    eligibility: {
      minAge: 18,
      maxAge: 100,
      maxIncome: 1000000
    },
    details: {
      eligibility: [
        'Must own cultivable land',
        'Should not be institutional land holders',
        'Should not hold high constitutional posts'
      ],
      benefits: [
        '₹6,000 per year transferred directly',
        'Given in 3 equal installments of ₹2,000'
      ],
      documents: [
        'Aadhaar Card',
        'Land holding papers',
        'Bank Account Details'
      ],
      apply: [
        'Apply via PM-Kisan portal or CSCs',
        'Complete e-KYC using Aadhaar'
      ]
    },
    detailsHindi: {
      eligibility: [
        'कृषि योग्य भूमि का स्वामित्व होना चाहिए',
        'संस्थागत भूमि धारक नहीं होना चाहिए',
        'उच्च संवैधानिक पदों पर आसीन नहीं होना चाहिए'
      ],
      benefits: [
        '₹6,000 प्रति वर्ष सीधे खाते में ट्रांसफर',
        '₹2,000 की 3 समान किस्तों में दिया जाता है'
      ],
      documents: [
        'आधार कार्ड',
        'भूमि स्वामित्व के कागजात',
        'बैंक खाते का विवरण'
      ],
      apply: [
        'पीएम-किसान पोर्टल या CSC के माध्यम से आवेदन करें',
        'आधार का उपयोग करके ई-केवाईसी पूरी करें'
      ]
    },
    simpleExplanation: "This scheme provides direct cash of ₹6,000 every year to farmers to help them buy seeds, fertilizers, and support their livelihood."
  },
  {
    id: 'ayushman-bharat',
    title: 'Ayushman Bharat (PM-JAY)',
    benefit: '₹5 Lakh/family',
    target: 'Health Insurance',
    icon: Heart,
    category: 'health',
    eligibility: {
      minAge: 0,
      maxAge: 100,
      maxIncome: 300000
    },
    details: {
      eligibility: [
        'Included in SECC 2011 database',
        'No age or family size restrictions',
        'Low-income households'
      ],
      benefits: [
        '₹5 Lakh health cover per family per year',
        'Cashless treatment at empanelled hospitals'
      ],
      documents: [
        'Aadhaar Card',
        'Ration Card'
      ],
      apply: [
        'Check name in PMJAY portal',
        'Do eKYC at nearest CSC or hospital'
      ]
    },
    detailsHindi: {
      eligibility: [
        'SECC 2011 डेटाबेस में शामिल',
        'उम्र या परिवार के आकार की कोई सीमा नहीं',
        'निम्न-आय वाले परिवार'
      ],
      benefits: [
        'प्रति परिवार प्रति वर्ष ₹5 लाख का स्वास्थ्य कवर',
        'सूचीबद्ध अस्पतालों में कैशलेस इलाज'
      ],
      documents: [
        'आधार कार्ड',
        'राशन कार्ड'
      ],
      apply: [
        'PMJAY पोर्टल में नाम जांचें',
        'निकटतम CSC या अस्पताल में eKYC करें'
      ]
    },
    simpleExplanation: "This is a free health insurance scheme that covers hospital bills up to ₹5 Lakhs for poor families, meaning you don't pay anything from your pocket for treatments."
  },
  {
    id: 'pm-awas',
    title: 'PM Awas Yojana',
    benefit: 'House Construction Subsidy',
    target: 'Housing',
    icon: Home,
    category: 'housing',
    eligibility: {
      minAge: 18,
      maxAge: 100,
      maxIncome: 600000
    },
    details: {
      eligibility: [
        'Must not own a pucca house in India',
        'Income should be within EWS/LIG limits'
      ],
      benefits: [
        'Financial assistance for building a house',
        'Interest subsidy on home loans'
      ],
      documents: [
        'Aadhaar Card',
        'Income proof',
        'Land ownership documents'
      ],
      apply: [
        'Apply via PMAY portal',
        'Contact Gram Panchayat (for rural)'
      ]
    },
    detailsHindi: {
      eligibility: [
        'भारत में कहीं भी पक्का घर नहीं होना चाहिए',
        'आय EWS/LIG सीमा के भीतर होनी चाहिए'
      ],
      benefits: [
        'घर बनाने के लिए आर्थिक सहायता',
        'होम लोन पर ब्याज सब्सिडी'
      ],
      documents: [
        'आधार कार्ड',
        'आय प्रमाण पत्र',
        'भूमि स्वामित्व के दस्तावेज'
      ],
      apply: [
        'PMAY पोर्टल के माध्यम से ऑनलाइन आवेदन करें',
        'ग्राम पंचायत से संपर्क करें (ग्रामीण के लिए)'
      ]
    },
    simpleExplanation: "This scheme gives you money or cheap loans to help you build or buy your first permanent (pucca) house."
  },
  {
    id: 'mudra-yojana',
    title: 'Pradhan Mantri MUDRA Yojana',
    benefit: 'Loans up to ₹10 Lakh',
    target: 'For Small Businesses',
    icon: Briefcase,
    category: 'business',
    eligibility: {
      minAge: 18,
      maxAge: 65,
      maxIncome: 2000000
    },
    details: {
      eligibility: [
        'Non-corporate small business',
        'Require credit up to ₹10 Lakh',
        'Manufacturing, trading, or service sector'
      ],
      benefits: [
        'Shishu: Loans up to ₹50,000',
        'Kishore: Loans up to ₹5 Lakh',
        'Tarun: Loans up to ₹10 Lakh'
      ],
      documents: [
        'Identity Proof',
        'Business Proof / Plan',
        'Bank Statement'
      ],
      apply: [
        'Approach nearest commercial bank',
        'Apply online via Udyami Mitra portal'
      ]
    },
    detailsHindi: {
      eligibility: [
        'गैर-कॉर्पोरेट छोटा व्यवसाय',
        '₹10 लाख तक के ऋण की आवश्यकता',
        'विनिर्माण, व्यापार या सेवा क्षेत्र'
      ],
      benefits: [
        'शिशु: ₹50,000 तक का ऋण',
        'किशोर: ₹5 लाख तक का ऋण',
        'तरुण: ₹10 लाख तक का ऋण'
      ],
      documents: [
        'पहचान प्रमाण',
        'व्यापार प्रमाण / योजना',
        'बैंक स्टेटमेंट'
      ],
      apply: [
        'निकटतम वाणिज्यिक बैंक से संपर्क करें',
        'उद्यमी मित्र पोर्टल के माध्यम से ऑनलाइन आवेदन करें'
      ]
    },
    simpleExplanation: "This scheme gives easy loans up to ₹10 Lakhs without needing collateral to help you start or grow a small business like a shop or tailoring unit."
  }
];
