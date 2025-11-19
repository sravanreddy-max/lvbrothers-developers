import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'en' | 'te' | 'hi' | 'kn' | 'ta'

type I18nContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const uiTranslations: Record<Language, Record<string, string>> = {
  en: {
    'header.slogan': 'Building Dreams, Moving Mountains',
    'nav.services': 'Services',
    'nav.equipment': 'Equipment',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Real Estate, Reliable Construction, Earth Movers & Contract Works',
    'hero.ctaQuote': 'Get a Quote',
    'hero.ctaServices': 'Our Services',
    'services.title': 'Services',
    'services.cardDesc': 'Trusted execution with experienced engineers, operators, and safety-first processes.',
    'equipment.title': 'Earth Movers & Equipment',
    'equipment.combinedTitle': 'Excavators & Loaders',
    'equipment.combinedBody': 'Our fleet offers a powerful and versatile range of machinery to handle every stage of site development, excavation, and construction. From JCB backhoe loaders and Tata Hitachi hydraulic excavators to cranes, dozers, tractors with trolleys, water tankers, and cement mixers, we provide the right equipment for every job. Whether it’s excavation, trenching, lifting, grading, rock breaking, or material transport, each machine is operated by skilled professionals to ensure efficiency, safety, and precision. Available on hourly, daily, or contract basis, our equipment and attachments are designed to deliver faster and more reliable results, making your projects smoother and more productive.',
    'about.title': 'About Us',
    'about.body': 'At {company}, we are more than just builders—we are trusted partners in turning visions into reality. With expertise spanning real estate, civil construction, residential and commercial projects, site development, and roadworks, we deliver end-to-end contracting solutions built on quality, reliability, and safety.\n\nOur strength lies in a modern fleet of earthmoving machinery—including JCB and Tata Hitachi excavators—operated by skilled professionals who ensure efficiency even in the most challenging terrains and tight schedules. Every project is guided by experienced engineers and executed with a safety-first mindset, ensuring lasting value for our clients.\n\nWhether it’s residential spaces, commercial complexes, infrastructure development, or turnkey contract works, {company} stands committed to delivering on time, every time—without compromising on standards.',
    'contact.title': 'Contact',
    'reach.title': 'Reach Us',
    'reach.phone': 'Phone',
    'reach.email': 'Email',
    'reach.address': 'Address',
    'reach.hours': 'Hours',
    'reach.maps': 'Open in Google Maps',
    'form.name': 'Your Name',
    'form.phone': 'Phone Number',
    'form.email': 'Email Address',
    'form.details': 'Project details',
    'form.submit': 'Request Callback',
    'footer.rights': 'All rights reserved.',
    'lang.label': 'Language',
  },
  te: {
    'header.slogan': 'స్వప్నాలను నిర్మించడం, పర్వతాలను కదిలించడం',
    'nav.services': 'సేవలు',
    'nav.equipment': 'పరికరాలు',
    'nav.about': 'గురించి',
    'nav.contact': 'సంప్రదించండి',
    'hero.title': 'నమ్మకమైన నిర్మాణం, ఎర్త్ మూవర్స్ & కాంట్రాక్ట్ పనులు, రియల్ ఎస్టేట్',
    'hero.ctaQuote': 'కొటేషన్ పొందండి',
    'hero.ctaServices': 'మా సేవలు',
    'services.title': 'సేవలు',
    'services.cardDesc': 'అనుభవజ్ఞులైన ఇంజనీర్లు, ఆపరేటర్లు మరియు భద్రతా ప్రక్రియలతో నమ్మదగిన అమలు.',
    'equipment.title': 'ఎర్త్ మూవర్స్ & పరికరాలు',
    'equipment.combinedTitle': 'ఎక్స్కవేటర్లు & లోడర్లు',
    'equipment.combinedBody': 'ఎక్స్కవేషన్, ట్రెంచింగ్, లోడింగ్ మరియు సైట్ అభివృద్ధికి శక్తివంతమైన బృందం. JCB బ్యాక్‌హో లోడర్లు మరియు టాటా హిటాచి హైడ్రాలిక్ ఎక్స్కవేటర్లు అనుభవజ్ఞులైన ఆపరేటర్లతో గంటవారీ/రోజువారీ/ఒప్పంద ప్రాతిపదికన అందుబాటులో. రాక్ బ్రేకింగ్, గ్రేడింగ్, లిఫ్టింగ్ అటాచ్మెంట్లు వేగంగా మరియు భద్రంగా పని చేయడంలో సహాయపడతాయి.',
    'about.title': 'మా గురించి',
    'about.body': '{company} గుణాత్మకత మరియు సమయపాలనపై దృష్టి పెట్టి సంపూర్ణ నిర్మాణ కాంట్రాక్టింగ్ అందిస్తుంది. JCB మరియు Tata Hitachi వంటి యంత్రాల మా నౌకాదళం క్లిష్టమైన ప్రదేశాల్లో మరియు కఠినమైన షెడ్యూళ్లలో సమర్థవంతంగా డెలివరీ చేయడంలో సహాయపడుతుంది.',
    'contact.title': 'సంప్రదించండి',
    'reach.title': 'మమ్మల్ని సంప్రదించండి',
    'reach.phone': 'ఫోన్',
    'reach.email': 'ఈమెయిల్',
    'reach.address': 'చిరునామా',
    'reach.hours': 'పని సమయం',
    'reach.maps': 'గూగుల్ మ్యాప్స్‌లో తెరవండి',
    'form.name': 'మీ పేరు',
    'form.phone': 'ఫోన్ నంబర్',
    'form.email': 'ఈమెయిల్ చిరునామా',
    'form.details': 'ప్రాజెక్ట్ వివరాలు',
    'form.submit': 'కాల్‌బ్యಾಕ್ కోరండి',
    'footer.rights': 'అన్ని హక్కులు సంక్రమించబడ్డాయి.',
    'lang.label': 'భాష',
  },
  hi: {
    'header.slogan': 'सपनों का निर्माण, पर्वतों को हिलाना',
    'nav.services': 'सेवाएँ',
    'nav.equipment': 'उपकरण',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',
    'hero.title': 'विश्वसनीय निर्माण, अर्थ मूवर्स व कॉन्ट्रैक्ट कार्य, रियल एस्टेट',
    'hero.ctaQuote': 'कोटेशन प्राप्त करें',
    'hero.ctaServices': 'हमारी सेवाएँ',
    'services.title': 'सेवाएँ',
    'services.cardDesc': 'अनुभवी इंजीनियरों, ऑपरेटरों और सेफ्टी-फर्स्ट प्रक्रियाओं के साथ विश्वसनीय निष्पादन।',
    'equipment.title': 'अर्थ मूवर्स और उपकरण',
    'equipment.combinedTitle': 'एक्सकेवेटर और लोडर',
    'equipment.combinedBody': 'खुदाई, ट्रेंचिंग, लोडिंग और साइट विकास के लिए शक्तिशाली एवं बहुमुखी फ्लीट। JCB बैकहो लोडर और टाटा हिताची हाइड्रोलिक एक्सकेवेटर अनुभवी ऑपरेटरों सहित प्रति घंटे, प्रति दिन या अनुबंध पर उपलब्ध। रॉक ब्रेकर, ग्रेडिंग और लिफ्टिंग अटैचमेंट्स तेज़, सुरक्षित और सटीक कार्य सुनिश्चित करते हैं.',
    'about.title': 'हमारे बारे में',
    'about.body': '{company} गुणवत्ता और समयबद्धता पर ध्यान के साथ एंड-टू-एंड निर्माण अनुबंध सेवाएँ प्रदान करता है। JCB और Tata Hitachi जैसे उपकरणों का हमारा बेड़ा कठिन भूभाग और तंग समय-सारिणी पर भी प्रभावी डिलीवरी में मदद करता है।',
    'contact.title': 'संपर्क',
    'reach.title': 'हमसे संपर्क करें',
    'reach.phone': 'फोन',
    'reach.email': 'ईमेल',
    'reach.address': 'पता',
    'reach.hours': 'समय',
    'reach.maps': 'गूगल मैप्स पर खोलें',
    'form.name': 'आपका नाम',
    'form.phone': 'फोन नंबर',
    'form.email': 'ईमेल पता',
    'form.details': 'परियोजना विवरण',
    'form.submit': 'कॉल बैक का अनुरोध करें',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'lang.label': 'भाषा',
  },
  kn: {
    'header.slogan': 'ಕನಸುಗಳನ್ನು ನಿರ್ಮಿಸಿ, ಪರ್ವತಗಳನ್ನು ಚಲಿಸಿ',
    'nav.services': 'ಸೇವೆಗಳು',
    'nav.equipment': 'ಉಪಕರಣ',
    'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'nav.contact': 'ಸಂಪರ್ಕ',
    'hero.title': 'ವಿಶ್ವಾಸಾರ್ಹ ನಿರ್ಮಾಣ, ಅರ್ಥ್ ಮೂವರ್ಸ್ ಮತ್ತು ಗುತ್ತಿಗೆ ಕೆಲಸಗಳು, ರಿಯಲ್ ಎಸ್ಟೇಟ್',
    'hero.ctaQuote': 'ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ',
    'hero.ctaServices': 'ನಮ್ಮ ಸೇವೆಗಳು',
    'services.title': 'ಸೇವೆಗಳು',
    'services.cardDesc': 'ಅನುಭವಸಂಪನ್ನ ಇಂಜಿನಿಯರ್‌ಗಳು, ಆಪರೇಟರ್‌ಗಳು ಮತ್ತು ಸೆಫ್ಟಿ-ಫಸ್ಟ್ ಪ್ರಕ್ರಿಯೆಗಳೊಂದಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಕಾರ್ಯಗತಗೊಳಿಕೆ.',
    'equipment.title': 'ಅರ್ಥ್ ಮೂವರ್ಸ್ ಮತ್ತು ಉಪಕರಣ',
    'equipment.combinedTitle': 'ಎಕ್ಸ್ಕವೇಟರ್‌ಗಳು & ಲೋಡರ್‌ಗಳು',
    'equipment.combinedBody': 'ಅಗೆದು ತೆಗೆದುಹಾಕುವುದು, ಟ್ರೆಂಚಿಂಗ್, ಲೋಡಿಂಗ್ ಮತ್ತು ಸೈಟ್ ಡೆವಲಪ್‌ಮೆಂಟ್‌ಗಾಗಿ ಶಕ್ತಿಶಾಲಿ ಮತ್ತು ಬಹುಮುಖ ದಳ. JCB ಬ್ಯಾಕ್‌ಹೋ ಲೋಡರ್‌ಗಳು ಮತ್ತು ಟಾಟಾ ಹಿಟಾಚಿ ಹೈಡ್ರಾಲಿಕ್ ಎಕ್ಸ್ಕವೇಟರ್‌ಗಳು ಅನುಭವಸಂಪನ್ನ ಆಪರೇಟರ್‌ಗಳೊಂದಿಗೆ ಗಂಟೆ/ದಿನ/ಒಪ್ಪಂದ ಆಧಾರದಲ್ಲಿ ಲಭ್ಯ. ರಾಕ್ ಬ್ರೇಕಿಂಗ್, ಗ್ರೇಡಿಂಗ್ ಮತ್ತು ಲಿಫ್ಟಿಂಗ್ ಅಟ್ಯಾಚ್ಮೆಂಟ್‌ಗಳು ವೇಗವಾದ, ಸುರಕ್ಷಿತ ಮತ್ತು ನಿಖರವಾದ ಕೆಲಸವನ್ನು ಖಚಿತಪಡಿಸುತ್ತವೆ.',
    'about.title': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'about.body': '{company} ಗುಣಮಟ್ಟ ಮತ್ತು ಸಮಯಪಾಲನೆಗೆ ಪ್ರಾಮುಖ್ಯತೆ ನೀಡಿ ಸಂಪೂರ್ಣ ನಿರ್ಮಾಣ ಗುತ್ತಿಗೆ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತದೆ. JCB ಮತ್ತು Tata Hitachi ಸೇರಿದಂತೆ ನಮ್ಮ ಯಂತ್ರಗಳ ದಳವು ಕಠಿಣ ಪ್ರದೇಶಗಳು ಮತ್ತು ಕಡಿದಾದ ವೇಳಾಪಟ್ಟಿಗಳಲ್ಲಿಯೂ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಕೆಲಸ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
    'contact.title': 'ಸಂಪರ್ಕ',
    'reach.title': 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'reach.phone': 'ಫೋನ್',
    'reach.email': 'ಇಮೇಲ್',
    'reach.address': 'ವಿಳಾಸ',
    'reach.hours': 'ಸಮಯ',
    'reach.maps': 'ಗೂಗಲ್ ನಕ್ಷೆಗಳಲ್ಲಿ ತೆರೆಯಿರಿ',
    'form.name': 'ನಿಮ್ಮ ಹೆಸರು',
    'form.phone': 'ಫೋನ್ ಸಂಖ್ಯೆ',
    'form.email': 'ಇಮೇಲ್ ವಿಳಾಸ',
    'form.details': 'ಯೋಜನೆ ವಿವರಗಳು',
    'form.submit': 'ಕಾಲ್‌ಬ್ಯಾಕ್ ವಿನಂತಿಸಿ',
    'footer.rights': 'ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    'lang.label': 'ಭಾಷೆ',
  },
  ta: {
    'header.slogan': 'கனவுகளை கட்டி, மலைகளை நகர்த்து',
    'nav.services': 'சேவைகள்',
    'nav.equipment': 'சாதனங்கள்',
    'nav.about': 'எங்களை பற்றி',
    'nav.contact': 'தொடர்பு',
    'hero.title': 'நம்பகமான கட்டிடத் தொழில், எர்த் மூவர்ஸ் & ஒப்பந்த பணிகள், ரியல் எஸ்டேட்',
    'hero.ctaQuote': 'மதிப்பீடு பெற',
    'hero.ctaServices': 'எங்கள் சேவைகள்',
    'services.title': 'சேவைகள்',
    'services.cardDesc': 'அனுபவமுள்ள இன்ஜினியர்கள், ஆபரேட்டர்கள் மற்றும் பாதுகாப்பு செயல்முறைகளுடன் நம்பகமான செயலாக்கம்.',
    'equipment.title': 'எர்த் மூவர்ஸ் & சாதனங்கள்',
    'equipment.combinedTitle': 'எக்ஸ்கவேட்டர்களும் லோடர்களும்',
    'equipment.combinedBody': 'துரப்புதல், அகழைத் தோண்டுதல், ஏற்றுதல் மற்றும் தள மேம்பாட்டிற்கான சக்திவாய்ந்த மற்றும் பல்துறை படை. JCB பேக்கோ லோடர்கள் மற்றும் டாடா ஹிடாச்சி ஹைட்ராலிக் எக்ஸ்கவேட்டர்கள் அனுபவமுள்ள ஆபரேட்டர்களுடன் மணி/நாள்/ஒப்பந்த அடிப்படையில் கிடைக்கும். ராக் பிரேக்கர், கிரேடிங், லிப்டிங் இணைப்புகள் வேகமான, பாதுகாப்பான மற்றும் துல்லியமான பணியை உறுதி செய்கின்றன.',
    'about.title': 'எங்களை பற்றி',
    'about.body': '{company} தரமும் காலக்கெடு பற்றிய கவனத்துடன் முழுமையான கட்டுமான ஒப்பந்த சேவைகளை வழங்குகிறது. JCB மற்றும் Tata Hitachi போன்ற இயந்திரங்கள் கொண்ட எங்கள் கப்பல் தொகுதி கடினமான நிலப்பரப்பிலும் குறுகிய காலக்கெடுவிலும் திறம்பட வழங்க உதவுகிறது.',
    'contact.title': 'தொடர்பு',
    'reach.title': 'எங்களை அணுக',
    'reach.phone': 'தொலைபேசி',
    'reach.email': 'மின்னஞ்சல்',
    'reach.address': 'முகவரி',
    'reach.hours': 'நேரம்',
    'reach.maps': 'கூகுள் வரைபடத்தில் திறக்க',
    'form.name': 'உங்கள் பெயர்',
    'form.phone': 'தொலைபேசி எண்',
    'form.email': 'மின்னஞ்சல் முகவரி',
    'form.details': 'திட்ட விவரங்கள்',
    'form.submit': 'கால் பின் அழைப்பு கோருக',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'lang.label': 'மொழி',
  },
}

const I18nContext = createContext<I18nContextValue>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = (localStorage.getItem('lang') as Language | null) || null
    if (saved) {
      setLanguageState(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const setLanguage = (lng: Language) => {
    setLanguageState(lng)
    localStorage.setItem('lang', lng)
    document.documentElement.lang = lng
  }

  const t = useMemo(() => {
    return (key: string, vars?: Record<string, string | number>) => {
      const table = uiTranslations[language] || uiTranslations.en
      const fallback = uiTranslations.en
      const template = (table[key] ?? fallback[key] ?? key) as string
      return template.replace(/\{(\w+)\}/g, (_, k: string) => String(vars?.[k] ?? ''))
    }
  }, [language])

  const value = useMemo<I18nContextValue>(() => ({ language, setLanguage, t }), [language, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}

export const supportedLanguages: Array<{ code: Language; label: string }> = [
  { code: 'en', label: 'English' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ta', label: 'தமிழ்' },
]


