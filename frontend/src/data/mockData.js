// Mock data for Agrawal Homeo Clinic

export const siteSettings = {
  title: "Agrawal Homeo Clinic",
  subtitle: "Dr. Arpit Agrawal",
  tagline: "भारत का उन्नत होम्योपैथिक हेल्थ सेंटर बर्षों के अनुभव और भरोसे के साथ !",
  hero: {
    title: "घर बैठे लीजिए",
    subtitle: "Online इलाज",
    clinicName: "Agrawal Homeo Clinic",
    location: "Jhalawar",
    description: "Serving Pan India Telemedicine & Offline Treatment via 3+ Branches"
  },
  contact: {
    phone1: "+91-7733844557",
    phone2: "+91-7737092577",
    email: "agrawalhomeoclinic.jhalawar@gmail.com",
    address1: "In front of Jain Opticals, Purani Jail Road, Jhalawar",
    address2: "In front of Kirti Tiles, Chandragupt Nagar, Chandrabhaga Road, Jhalrapatan"
  },
  social: {
    youtube: "https://www.youtube.com/@AGRAWALHOMEOCLINIC",
    whatsapp: "https://wa.me/917733844557",
    instagram: "https://www.instagram.com/agrawal_homeo_clinic",
    facebook: "https://www.facebook.com/drarpitagrawal123"
  }
};

export const treatments = [
  {
    id: 1,
    titleHindi: "त्वचा संबंधी रोग (चर्म रोग)",
    titleEnglish: "Skin Disorder",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    slug: "skin-diseases",
    description: "Comprehensive homeopathic treatment for all skin conditions including eczema, psoriasis, acne, and dermatitis.",
    symptoms: ["Rashes", "Itching", "Dry skin", "Inflammation"],
    treatment: "Our specialized homeopathic remedies target the root cause of skin disorders for permanent relief."
  },
  {
    id: 2,
    titleHindi: "बालों के रोग",
    titleEnglish: "Hair Diseases",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
    slug: "hair-diseases",
    description: "Effective treatment for hair fall, baldness, dandruff and other hair-related problems.",
    symptoms: ["Hair fall", "Dandruff", "Premature graying", "Baldness"],
    treatment: "Natural homeopathic medicines that stimulate hair growth and improve scalp health."
  },
  {
    id: 3,
    titleHindi: "एलर्जी रोग",
    titleEnglish: "Allergy",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop",
    slug: "allergy",
    description: "Complete allergy management including food allergies, respiratory allergies, and skin allergies.",
    symptoms: ["Sneezing", "Runny nose", "Skin reactions", "Breathing difficulty"],
    treatment: "Constitutional homeopathic treatment to build immunity and eliminate allergic reactions."
  },
  {
    id: 4,
    titleHindi: "बवासीर, फिशर, संचारिका",
    titleEnglish: "Piles, Fissure, Fistula",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop",
    slug: "piles-fissure-fistula",
    description: "Non-surgical homeopathic treatment for piles, anal fissures and fistula with permanent relief.",
    symptoms: ["Pain during defecation", "Bleeding", "Swelling", "Discharge"],
    treatment: "Advanced homeopathic medicines that heal tissues and provide lasting cure."
  },
  {
    id: 5,
    titleHindi: "मानसिक स्वास्थ्य",
    titleEnglish: "Mental Health",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
    slug: "mental-health",
    description: "Holistic treatment for depression, anxiety, stress, and other mental health conditions.",
    symptoms: ["Depression", "Anxiety", "Stress", "Sleep disorders"],
    treatment: "Gentle homeopathic remedies combined with psychological counseling for complete mental wellness."
  },
  {
    id: 6,
    titleHindi: "पाचन / पेट संबंधी रोग",
    titleEnglish: "Gastrointestinal",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    slug: "gastrointestinal",
    description: "Treatment for digestive disorders, acidity, gastritis, IBS, and other stomach problems.",
    symptoms: ["Acidity", "Bloating", "Indigestion", "Stomach pain"],
    treatment: "Natural homeopathic approach to restore digestive health and improve gut function."
  },
  {
    id: 7,
    titleHindi: "गुर्दे की पथरी",
    titleEnglish: "Kidney Stones",
    image: "https://images.unsplash.com/photo-1559581431-74d807d4d981?w=300&h=200&fit=crop",
    slug: "kidney-stones",
    description: "Safe and effective homeopathic treatment for kidney stones without surgery.",
    symptoms: ["Severe pain", "Blood in urine", "Nausea", "Frequent urination"],
    treatment: "Gentle homeopathic remedies that help dissolve stones and prevent recurrence."
  },
  {
    id: 8,
    titleHindi: "स्त्री संबंधी रोग",
    titleEnglish: "Female Related Issues",
    image: "https://images.unsplash.com/photo-1559850350-2c0fcf8e8b5e?w=300&h=200&fit=crop",
    slug: "female-issues",
    description: "Specialized treatment for women's health issues including PCOD, irregular periods, and fertility problems.",
    symptoms: ["Irregular periods", "PCOD", "Fertility issues", "Hormonal imbalance"],
    treatment: "Constitutional homeopathic treatment to balance hormones naturally."
  },
  {
    id: 9,
    titleHindi: "पुरुष संबंधी रोग",
    titleEnglish: "Male Related Issues",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=200&fit=crop",
    slug: "male-issues",
    description: "Comprehensive treatment for men's health problems including erectile dysfunction and prostate issues.",
    symptoms: ["Erectile dysfunction", "Prostate problems", "Low testosterone", "Fertility issues"],
    treatment: "Natural homeopathic solutions for men's health concerns."
  },
  {
    id: 10,
    titleHindi: "जोड़ों का दर्द",
    titleEnglish: "Joint Pain",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    slug: "joint-pain",
    description: "Effective treatment for arthritis, joint pain, and mobility issues.",
    symptoms: ["Joint stiffness", "Pain", "Swelling", "Reduced mobility"],
    treatment: "Anti-inflammatory homeopathic medicines for long-term joint health."
  },
  {
    id: 11,
    titleHindi: "स्लिप डिस्क",
    titleEnglish: "Slip Disc",
    image: "https://images.unsplash.com/photo-1559757157-a4dc6b2d4f2f?w=300&h=200&fit=crop",
    slug: "slip-disc",
    description: "Non-surgical treatment for slip disc and back pain problems.",
    symptoms: ["Back pain", "Leg pain", "Numbness", "Muscle weakness"],
    treatment: "Homeopathic medicines to heal disc naturally without surgery."
  },
  {
    id: 12,
    titleHindi: "श्वसन संबंधी रोग",
    titleEnglish: "Respiratory Diseases",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop",
    slug: "respiratory",
    description: "Treatment for asthma, bronchitis, cough, and breathing problems.",
    symptoms: ["Difficulty breathing", "Chronic cough", "Wheezing", "Chest congestion"],
    treatment: "Constitutional treatment to strengthen respiratory system naturally."
  },
  {
    id: 13,
    titleHindi: "शिशु एवं बाल रोग",
    titleEnglish: "Pediatrics",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop",
    slug: "pediatrics",
    description: "Safe and gentle homeopathic treatment for children's health issues.",
    symptoms: ["Growth problems", "Behavioral issues", "Frequent infections", "Digestive issues"],
    treatment: "Child-friendly homeopathic medicines for healthy growth and development."
  },
  {
    id: 14,
    titleHindi: "मधुमेह टाइप-1,2",
    titleEnglish: "Diabetes Type - 1,2",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop",
    slug: "diabetes",
    description: "Comprehensive diabetes management with homeopathic medicines.",
    symptoms: ["High blood sugar", "Frequent urination", "Excessive thirst", "Fatigue"],
    treatment: "Constitutional treatment to manage diabetes and prevent complications."
  },
  {
    id: 15,
    titleHindi: "थायरॉयड",
    titleEnglish: "Thyroid",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    slug: "thyroid",
    description: "Natural treatment for thyroid disorders - both hypo and hyperthyroid.",
    symptoms: ["Weight changes", "Fatigue", "Hair loss", "Mood changes"],
    treatment: "Homeopathic medicines to normalize thyroid function naturally."
  }
];

export const doctorInfo = {
  name: "Dr. Arpit Agrawal",
  qualifications: "BHMS, Diploma in Nutritional Health Education, PG Diploma in Psychological Counselling",
  experience: "5+ Years Experience",
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
  about: "Dr. Arpit Agrawal is a renowned homeopathic physician with extensive experience in treating chronic and acute conditions. He specializes in constitutional remedies and anti-miasmatic treatments.",
  specialties: [
    "Anti Miasmatic Treatment",
    "Constitutional Remedy",
    "Symptoms Based Treatment",
    "Personalised Medicine Kits"
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Rajat Sharma",
    text: "मैं कई सालों से severe allergies से परेशान था, और कुछ भी असर नहीं कर रहा था। Dr. Arpit Agrawal के homeopathic इलाज से मुझे long-term राहत मिली, वो भी बिना किसी side effects के। उनकी patient-centric approach और गहरी knowledge उन्हें झालावाड़ के best homeopathy doctor बनाती है!",
    rating: 5
  }
];

export const stats = {
  patients: "10k+",
  social: "2k+",
  experience: "5+"
};

export const specialFeatures = [
  {
    title: "Anti Miasmatic",
    description: "ये दवाई Root Cause पर जाकर बीमारी को बार बार होने से रोकती है व जड़ से ख़त्म कर देती है| ये दवाइयाँ Rarest डॉक्टर्स use करते हैं |",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=250&h=250&fit=crop"
  },
  {
    title: "Constitutional Remedy", 
    description: "ये दवाई शरीर की इम्युनिटी पॉवर को बढ़ाती है जिससे पेशेंट की Rapid रिकवरी होती है|",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=250&h=250&fit=crop"
  },
  {
    title: "Symptoms Based",
    description: "बीमारी के Symptoms के आधार पर Best मेडिसिन जो बीमारी के लक्षणों को ठीक करती है",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=250&h=250&fit=crop"
  },
  {
    title: "Personalised Kit",
    description: "पेशेंट की Case Taking के बाद Researched Based Right मेडिसिन का किट बनाकर आपके घर भेजा जाता है -जो हर पेशेंट का अलग होता है",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=250&h=250&fit=crop"
  }
];

export const whyChooseUs = [
  {
    icon: "🩺",
    title: "Homeopathy and Healing",
    description: "Health is balance of physical, mental, and emotional well-being. Dr. Arpit Agrawal homeopathic solutions प्रदान करते हैं, जो समस्याओं के मूल कारण को समझकर long-term health benefits के लिए काम करते हैं।"
  },
  {
    icon: "🏥",
    title: "Disease Management", 
    description: "Homeopathy offers solutions for chronic conditions like allergies, asthma, and migraines. Dr. Arpit Agrawal शरीर की natural healing process को मजबूत करने पर ध्यान देते हैं, ताकि शरीर खुद को ठीक कर सके।"
  },
  {
    icon: "👨‍⚕️",
    title: "Doctor-Patient Relationship",
    description: "Dr. Arpit Agrawal अपने क्लिनिक में personalized इलाज योजनाएं तैयार करते हैं, जिनमें होम्योपैथी को nutritional और psychological support के साथ मिलाकर सभी को complete और compassionate स्वास्थ्य सेवा प्रदान करते हैं।"
  },
  {
    icon: "🧠",
    title: "Psychological healing",
    description: "Homeopathy helps manage stress, anxiety, and emotions. Dr. Arpit Agrawal, PG Diploma in Psychological Counselling के साथ, holistic care प्रदान करते हैं ताकि मानसिक और भावनात्मक स्वास्थ्य सुधार सके।"
  }
];

export const treatmentProcess = [
  {
    step: 1,
    title: "Book Appointment",
    description: "नीचे दिये गये Book Appointment Button पर क्लिक कर के 200 रुपये का भुगतान करना है। उसके बाद डॉक्टर अपॉइंटमेंट टाइम आपके WhatsApp नंबर पे मिलेगा।",
    icon: "📅"
  },
  {
    step: 2, 
    title: "Doctor Call Back On Your Mobile",
    description: "बताये गये समय पर आपके मोबाइल नंबर पर एक्सपर्ट डॉक्टर द्वारा आपकी पूरी 'Case taking' / आपकी बीमारी की सारी जानकारी ली जाएँगी ।",
    icon: "📞"
  },
  {
    step: 3,
    title: "Free Home Delivery",
    description: "डॉक्टर से कॉल के बाद आपको दवाईयो का शुल्क बता दिया जाएगा । आपके व्हाट्सएप नंबर पर हमारा QR रिसीव होगा । Address verification पेमेंट होने के बाद , हमारी टीम द्वारा आपका एड्रेस verify होगा । Free delivery दवाईया भेजने का कोई शुल्क नहीं होगा । 24 घंटे के अंदर आपको आपके पार्सल के tracking ID भेज दी जाएगी",
    icon: "🚚"
  }
];