import { useSettings, Language } from "./use-settings";

type TranslationKeys = {
  // Header
  home: string;
  about: string;
  services: string;
  portfolio: string;
  leadershipTeam: string;
  getInTouch: string;
  elevatingYourBusiness: string;
  
  // Hero
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  getStartedToday: string;
  viewOurWork: string;
  
  // About
  aboutIntro1: string;
  aboutIntro2: string;
  ourMission: string;
  ourMissionText: string;
  ourVision: string;
  ourVisionText: string;
  ourCoreValues: string;
  innovation: string;
  innovationDesc: string;
  excellence: string;
  excellenceDesc: string;
  collaboration: string;
  collaborationDesc: string;
  transparency: string;
  transparencyDesc: string;
  
  // Services
  ourServices: string;
  servicesSubtitle: string;
  customSoftware: string;
  customSoftwareDesc: string;
  webDevelopment: string;
  webDevelopmentDesc: string;
  mobileApp: string;
  mobileAppDesc: string;
  consultingSupport: string;
  consultingSupportDesc: string;
  keyFeatures: string;
  
  // Contact
  getInTouchTitle: string;
  contactSubtitle: string;
  sendMessage: string;
  formSubtitle: string;
  fullName: string;
  emailAddress: string;
  companyName: string;
  projectDetails: string;
  send: string;
  sending: string;
  letsConnect: string;
  email: string;
  phone: string;
  office: string;
  whyWorkWithUs: string;
  readyToStart: string;
  readyToStartSubtitle: string;
  scheduleConsultation: string;
  callNow: string;
  messageSent: string;
  messageSuccess: string;
  messageFailed: string;
  messageError: string;
  
  // Footer
  quickLinks: string;
  contact: string;
  privacyPolicy: string;
  termsOfService: string;
  settings: string;
  allRightsReserved: string;
  footerDescription: string;
  
  // FAQ
  faq: string;
  faqSubtitle: string;
  
  // Settings
  settingsTitle: string;
  settingsSubtitle: string;
  backToHome: string;
  notifications: string;
  notificationsDesc: string;
  emailNotifications: string;
  emailNotificationsDesc: string;
  marketingEmails: string;
  marketingEmailsDesc: string;
  appearance: string;
  appearanceDesc: string;
  darkMode: string;
  darkModeDesc: string;
  languageRegion: string;
  languageRegionDesc: string;
  language: string;
  languageDesc: string;
  change: string;
  privacy: string;
  privacyDesc: string;
  analytics: string;
  analyticsDesc: string;
  settingsUpdated: string;
  enabled: string;
  disabled: string;
  languageUpdated: string;
  languageChangedTo: string;
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    // Header
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    leadershipTeam: "Leadership Team",
    getInTouch: "Get In Touch",
    elevatingYourBusiness: "Elevating Your Business",
    
    // Hero
    heroTitle1: "Elevating Your Business",
    heroTitle2: "with Technology",
    heroSubtitle: "Professional software development solutions that drive growth, innovation, and success for businesses of all sizes.",
    getStartedToday: "Get Started Today",
    viewOurWork: "View Our Work",
    
    // About
    aboutIntro1: "Founded in 2022, Servio Tech Solutions has emerged from a simple belief that technology should empower businesses to reach their full potential. Our founders, with years of combined experience in software development and business consulting, saw an opportunity to bridge the gap between business challenges and cutting-edge technology solutions.",
    aboutIntro2: "We are technology partner for businesses across vast industries. We successfully delivered 60+ projects in various sectors, helping clients transform their ideas and business processes into digital solutions. Our clients trust us because we do not just write code; we understand business needs and create solutions designed to achieve tangible business goals.",
    ourMission: "Our Mission",
    ourMissionText: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be their trusted partners, providing cutting-edge software development services tailored to their unique needs.",
    ourVision: "Our Vision",
    ourVisionText: "To be the leading technology partner for businesses seeking to harness the power of innovation and digital transformation. We aim to create lasting success for our clients by delivering exceptional results.",
    ourCoreValues: "Our Core Values",
    innovation: "Innovation",
    innovationDesc: "We embrace cutting-edge technology to deliver cutting-edge solutions",
    excellence: "Excellence",
    excellenceDesc: "We maintain the highest standards of quality in everything we do",
    collaboration: "Collaboration",
    collaborationDesc: "We work closely with our clients to ensure success",
    transparency: "Transparency",
    transparencyDesc: "We believe in open communication and honest progress updates",
    
    // Services
    ourServices: "Our Services",
    servicesSubtitle: "Comprehensive technology solutions designed to accelerate your business growth and drive digital transformation",
    customSoftware: "Custom Software Development",
    customSoftwareDesc: "Tailored software solutions built from scratch, aligned with your specific business requirements and goals.",
    webDevelopment: "Web Development",
    webDevelopmentDesc: "Create stunning, high-performance websites that provide exceptional user experience across all devices and platforms.",
    mobileApp: "Mobile App Development",
    mobileAppDesc: "Build powerful, user-friendly mobile applications that engage users and drive business growth.",
    consultingSupport: "Consulting & Support",
    consultingSupportDesc: "Expert guidance and ongoing support to help you make informed technology decisions and maintain your solutions.",
    keyFeatures: "Key Features:",
    
    // Contact
    getInTouchTitle: "Get in Touch",
    contactSubtitle: "Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you succeed.",
    sendMessage: "Send us a message",
    formSubtitle: "Fill out the form below and we'll get back to you shortly",
    fullName: "Full Name",
    emailAddress: "Email Address",
    companyName: "Company Name",
    projectDetails: "Project Details",
    send: "Send Message",
    sending: "Sending...",
    letsConnect: "Let's connect",
    email: "Email",
    phone: "Phone",
    office: "Office",
    whyWorkWithUs: "Why work with us?",
    readyToStart: "Ready to Start Your Project?",
    readyToStartSubtitle: "Schedule a free consultation call to discuss your project requirements and get a detailed estimate.",
    scheduleConsultation: "Schedule Consultation",
    callNow: "Call Now",
    messageSent: "Message Sent!",
    messageSuccess: "We'll get back to you as soon as possible.",
    messageFailed: "Failed to Send Message",
    messageError: "Something went wrong. Please try again later.",
    
    // Footer
    quickLinks: "Quick Links",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    settings: "Settings",
    allRightsReserved: "All rights reserved.",
    footerDescription: "Professional software development company specializing in custom solutions that drive business growth.",
    
    // FAQ
    faq: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our services, process, and how we can help your business grow",
    
    // Settings
    settingsTitle: "Settings",
    settingsSubtitle: "Manage your preferences and account settings",
    backToHome: "Back to Home",
    notifications: "Notifications",
    notificationsDesc: "Configure how you receive notifications",
    emailNotifications: "Email Notifications",
    emailNotificationsDesc: "Receive updates via email",
    marketingEmails: "Marketing Emails",
    marketingEmailsDesc: "Receive promotional content",
    appearance: "Appearance",
    appearanceDesc: "Customize the look and feel",
    darkMode: "Dark Mode",
    darkModeDesc: "Use dark theme",
    languageRegion: "Language & Region",
    languageRegionDesc: "Set your preferred language and region",
    language: "Language",
    languageDesc: "Select your preferred language",
    change: "Change",
    privacy: "Privacy",
    privacyDesc: "Manage your privacy settings",
    analytics: "Analytics",
    analyticsDesc: "Help improve our services",
    settingsUpdated: "Settings Updated",
    enabled: "enabled",
    disabled: "disabled",
    languageUpdated: "Language Updated",
    languageChangedTo: "Language changed to",
  },
  
  es: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    portfolio: "Portafolio",
    leadershipTeam: "Equipo Directivo",
    getInTouch: "Contáctanos",
    elevatingYourBusiness: "Elevando Tu Negocio",
    heroTitle1: "Elevando Tu Negocio",
    heroTitle2: "con Tecnología",
    heroSubtitle: "Soluciones profesionales de desarrollo de software que impulsan el crecimiento, la innovación y el éxito para empresas de todos los tamaños.",
    getStartedToday: "Comienza Hoy",
    viewOurWork: "Ver Nuestro Trabajo",
    aboutIntro1: "Fundada en 2022, Servio Tech Solutions surgió de la simple creencia de que la tecnología debe empoderar a las empresas para alcanzar su máximo potencial. Nuestros fundadores, con años de experiencia combinada en desarrollo de software y consultoría empresarial, vieron la oportunidad de cerrar la brecha entre los desafíos empresariales y las soluciones tecnológicas de vanguardia.",
    aboutIntro2: "Somos socios tecnológicos para empresas de diversas industrias. Hemos entregado exitosamente más de 60 proyectos en varios sectores, ayudando a los clientes a transformar sus ideas y procesos empresariales en soluciones digitales. Nuestros clientes confían en nosotros porque no solo escribimos código; entendemos las necesidades del negocio y creamos soluciones diseñadas para lograr objetivos empresariales tangibles.",
    ourMission: "Nuestra Misión",
    ourMissionText: "Empoderar a las empresas con soluciones tecnológicas innovadoras que impulsen el crecimiento, la eficiencia y la ventaja competitiva. Nos esforzamos por ser sus socios de confianza, proporcionando servicios de desarrollo de software de vanguardia adaptados a sus necesidades únicas.",
    ourVision: "Nuestra Visión",
    ourVisionText: "Ser el socio tecnológico líder para empresas que buscan aprovechar el poder de la innovación y la transformación digital. Nuestro objetivo es crear un éxito duradero para nuestros clientes al entregar resultados excepcionales.",
    ourCoreValues: "Nuestros Valores Fundamentales",
    innovation: "Innovación",
    innovationDesc: "Adoptamos tecnología de vanguardia para ofrecer soluciones de vanguardia",
    excellence: "Excelencia",
    excellenceDesc: "Mantenemos los más altos estándares de calidad en todo lo que hacemos",
    collaboration: "Colaboración",
    collaborationDesc: "Trabajamos estrechamente con nuestros clientes para asegurar el éxito",
    transparency: "Transparencia",
    transparencyDesc: "Creemos en la comunicación abierta y las actualizaciones honestas de progreso",
    ourServices: "Nuestros Servicios",
    servicesSubtitle: "Soluciones tecnológicas integrales diseñadas para acelerar el crecimiento de su negocio e impulsar la transformación digital",
    customSoftware: "Desarrollo de Software Personalizado",
    customSoftwareDesc: "Soluciones de software a medida construidas desde cero, alineadas con sus requisitos y objetivos comerciales específicos.",
    webDevelopment: "Desarrollo Web",
    webDevelopmentDesc: "Cree sitios web impresionantes y de alto rendimiento que brinden una experiencia de usuario excepcional en todos los dispositivos y plataformas.",
    mobileApp: "Desarrollo de Aplicaciones Móviles",
    mobileAppDesc: "Cree aplicaciones móviles potentes y fáciles de usar que atraigan a los usuarios e impulsen el crecimiento empresarial.",
    consultingSupport: "Consultoría y Soporte",
    consultingSupportDesc: "Orientación experta y soporte continuo para ayudarlo a tomar decisiones tecnológicas informadas y mantener sus soluciones.",
    keyFeatures: "Características Principales:",
    getInTouchTitle: "Ponte en Contacto",
    contactSubtitle: "¿Listo para transformar tu negocio con tecnología de vanguardia? Discutamos tu proyecto y exploremos cómo podemos ayudarte a tener éxito.",
    sendMessage: "Envíanos un mensaje",
    formSubtitle: "Complete el formulario a continuación y nos pondremos en contacto con usted en breve",
    fullName: "Nombre Completo",
    emailAddress: "Correo Electrónico",
    companyName: "Nombre de la Empresa",
    projectDetails: "Detalles del Proyecto",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    letsConnect: "Conectemos",
    email: "Correo",
    phone: "Teléfono",
    office: "Oficina",
    whyWorkWithUs: "¿Por qué trabajar con nosotros?",
    readyToStart: "¿Listo para Comenzar tu Proyecto?",
    readyToStartSubtitle: "Programa una llamada de consulta gratuita para discutir los requisitos de tu proyecto y obtener una estimación detallada.",
    scheduleConsultation: "Programar Consulta",
    callNow: "Llamar Ahora",
    messageSent: "¡Mensaje Enviado!",
    messageSuccess: "Nos pondremos en contacto contigo lo antes posible.",
    messageFailed: "Error al Enviar Mensaje",
    messageError: "Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
    quickLinks: "Enlaces Rápidos",
    contact: "Contacto",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    settings: "Configuración",
    allRightsReserved: "Todos los derechos reservados.",
    footerDescription: "Empresa profesional de desarrollo de software especializada en soluciones personalizadas que impulsan el crecimiento empresarial.",
    faq: "Preguntas Frecuentes",
    faqSubtitle: "Encuentre respuestas a preguntas comunes sobre nuestros servicios, proceso y cómo podemos ayudar a su negocio a crecer",
    settingsTitle: "Configuración",
    settingsSubtitle: "Administre sus preferencias y configuración de cuenta",
    backToHome: "Volver al Inicio",
    notifications: "Notificaciones",
    notificationsDesc: "Configure cómo recibe las notificaciones",
    emailNotifications: "Notificaciones por Correo",
    emailNotificationsDesc: "Recibir actualizaciones por correo electrónico",
    marketingEmails: "Correos de Marketing",
    marketingEmailsDesc: "Recibir contenido promocional",
    appearance: "Apariencia",
    appearanceDesc: "Personaliza la apariencia",
    darkMode: "Modo Oscuro",
    darkModeDesc: "Usar tema oscuro",
    languageRegion: "Idioma y Región",
    languageRegionDesc: "Establece tu idioma y región preferidos",
    language: "Idioma",
    languageDesc: "Selecciona tu idioma preferido",
    change: "Cambiar",
    privacy: "Privacidad",
    privacyDesc: "Administra tu configuración de privacidad",
    analytics: "Analíticas",
    analyticsDesc: "Ayuda a mejorar nuestros servicios",
    settingsUpdated: "Configuración Actualizada",
    enabled: "habilitado",
    disabled: "deshabilitado",
    languageUpdated: "Idioma Actualizado",
    languageChangedTo: "Idioma cambiado a",
  },
  
  fr: {
    home: "Accueil",
    about: "À Propos",
    services: "Services",
    portfolio: "Portfolio",
    leadershipTeam: "Équipe de Direction",
    getInTouch: "Contactez-nous",
    elevatingYourBusiness: "Élevez Votre Entreprise",
    heroTitle1: "Élevez Votre Entreprise",
    heroTitle2: "avec la Technologie",
    heroSubtitle: "Des solutions professionnelles de développement logiciel qui stimulent la croissance, l'innovation et le succès pour les entreprises de toutes tailles.",
    getStartedToday: "Commencez Aujourd'hui",
    viewOurWork: "Voir Notre Travail",
    aboutIntro1: "Fondée en 2022, Servio Tech Solutions est née d'une simple conviction : la technologie doit permettre aux entreprises d'atteindre leur plein potentiel. Nos fondateurs, forts de nombreuses années d'expérience combinée dans le développement logiciel et le conseil aux entreprises, ont vu l'opportunité de combler le fossé entre les défis commerciaux et les solutions technologiques de pointe.",
    aboutIntro2: "Nous sommes partenaires technologiques pour les entreprises de diverses industries. Nous avons livré avec succès plus de 60 projets dans divers secteurs, aidant les clients à transformer leurs idées et processus commerciaux en solutions numériques. Nos clients nous font confiance car nous ne faisons pas que coder; nous comprenons les besoins commerciaux et créons des solutions conçues pour atteindre des objectifs commerciaux tangibles.",
    ourMission: "Notre Mission",
    ourMissionText: "Donner aux entreprises les moyens de solutions technologiques innovantes qui stimulent la croissance, l'efficacité et l'avantage concurrentiel. Nous nous efforçons d'être leurs partenaires de confiance, fournissant des services de développement logiciel de pointe adaptés à leurs besoins uniques.",
    ourVision: "Notre Vision",
    ourVisionText: "Être le partenaire technologique de référence pour les entreprises cherchant à exploiter le pouvoir de l'innovation et de la transformation numérique. Nous visons à créer un succès durable pour nos clients en livrant des résultats exceptionnels.",
    ourCoreValues: "Nos Valeurs Fondamentales",
    innovation: "Innovation",
    innovationDesc: "Nous adoptons des technologies de pointe pour offrir des solutions de pointe",
    excellence: "Excellence",
    excellenceDesc: "Nous maintenons les plus hauts standards de qualité dans tout ce que nous faisons",
    collaboration: "Collaboration",
    collaborationDesc: "Nous travaillons en étroite collaboration avec nos clients pour assurer le succès",
    transparency: "Transparence",
    transparencyDesc: "Nous croyons en une communication ouverte et des mises à jour honnêtes sur les progrès",
    ourServices: "Nos Services",
    servicesSubtitle: "Des solutions technologiques complètes conçues pour accélérer la croissance de votre entreprise et stimuler la transformation numérique",
    customSoftware: "Développement Logiciel Personnalisé",
    customSoftwareDesc: "Des solutions logicielles sur mesure construites à partir de zéro, alignées sur vos exigences et objectifs commerciaux spécifiques.",
    webDevelopment: "Développement Web",
    webDevelopmentDesc: "Créez des sites web époustouflants et performants qui offrent une expérience utilisateur exceptionnelle sur tous les appareils et plateformes.",
    mobileApp: "Développement d'Applications Mobiles",
    mobileAppDesc: "Créez des applications mobiles puissantes et conviviales qui engagent les utilisateurs et stimulent la croissance de l'entreprise.",
    consultingSupport: "Conseil et Support",
    consultingSupportDesc: "Conseils d'experts et support continu pour vous aider à prendre des décisions technologiques éclairées et à maintenir vos solutions.",
    keyFeatures: "Caractéristiques Principales:",
    getInTouchTitle: "Contactez-nous",
    contactSubtitle: "Prêt à transformer votre entreprise avec une technologie de pointe? Discutons de votre projet et explorons comment nous pouvons vous aider à réussir.",
    sendMessage: "Envoyez-nous un message",
    formSubtitle: "Remplissez le formulaire ci-dessous et nous vous répondrons rapidement",
    fullName: "Nom Complet",
    emailAddress: "Adresse Email",
    companyName: "Nom de l'Entreprise",
    projectDetails: "Détails du Projet",
    send: "Envoyer le Message",
    sending: "Envoi en cours...",
    letsConnect: "Connectons-nous",
    email: "Email",
    phone: "Téléphone",
    office: "Bureau",
    whyWorkWithUs: "Pourquoi travailler avec nous?",
    readyToStart: "Prêt à Démarrer Votre Projet?",
    readyToStartSubtitle: "Planifiez un appel de consultation gratuit pour discuter des exigences de votre projet et obtenir une estimation détaillée.",
    scheduleConsultation: "Planifier une Consultation",
    callNow: "Appeler Maintenant",
    messageSent: "Message Envoyé!",
    messageSuccess: "Nous vous répondrons dès que possible.",
    messageFailed: "Échec de l'Envoi du Message",
    messageError: "Une erreur s'est produite. Veuillez réessayer plus tard.",
    quickLinks: "Liens Rapides",
    contact: "Contact",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    settings: "Paramètres",
    allRightsReserved: "Tous droits réservés.",
    footerDescription: "Entreprise professionnelle de développement logiciel spécialisée dans les solutions personnalisées qui stimulent la croissance des entreprises.",
    faq: "Questions Fréquentes",
    faqSubtitle: "Trouvez des réponses aux questions courantes sur nos services, notre processus et comment nous pouvons aider votre entreprise à se développer",
    settingsTitle: "Paramètres",
    settingsSubtitle: "Gérez vos préférences et paramètres de compte",
    backToHome: "Retour à l'Accueil",
    notifications: "Notifications",
    notificationsDesc: "Configurez comment vous recevez les notifications",
    emailNotifications: "Notifications par Email",
    emailNotificationsDesc: "Recevoir les mises à jour par email",
    marketingEmails: "Emails Marketing",
    marketingEmailsDesc: "Recevoir du contenu promotionnel",
    appearance: "Apparence",
    appearanceDesc: "Personnalisez l'apparence",
    darkMode: "Mode Sombre",
    darkModeDesc: "Utiliser le thème sombre",
    languageRegion: "Langue et Région",
    languageRegionDesc: "Définissez votre langue et région préférées",
    language: "Langue",
    languageDesc: "Sélectionnez votre langue préférée",
    change: "Changer",
    privacy: "Confidentialité",
    privacyDesc: "Gérez vos paramètres de confidentialité",
    analytics: "Analytiques",
    analyticsDesc: "Aidez à améliorer nos services",
    settingsUpdated: "Paramètres Mis à Jour",
    enabled: "activé",
    disabled: "désactivé",
    languageUpdated: "Langue Mise à Jour",
    languageChangedTo: "Langue changée en",
  },
  
  de: {
    home: "Startseite",
    about: "Über Uns",
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    leadershipTeam: "Führungsteam",
    getInTouch: "Kontakt",
    elevatingYourBusiness: "Ihr Geschäft Erhöhen",
    heroTitle1: "Ihr Geschäft Erhöhen",
    heroTitle2: "mit Technologie",
    heroSubtitle: "Professionelle Softwareentwicklungslösungen, die Wachstum, Innovation und Erfolg für Unternehmen jeder Größe vorantreiben.",
    getStartedToday: "Heute Starten",
    viewOurWork: "Unsere Arbeit Ansehen",
    aboutIntro1: "2022 gegründet, entstand Servio Tech Solutions aus der einfachen Überzeugung, dass Technologie Unternehmen befähigen sollte, ihr volles Potenzial zu erreichen. Unsere Gründer, mit jahrelanger kombinierter Erfahrung in Softwareentwicklung und Unternehmensberatung, sahen die Möglichkeit, die Lücke zwischen geschäftlichen Herausforderungen und modernsten Technologielösungen zu schließen.",
    aboutIntro2: "Wir sind Technologiepartner für Unternehmen in verschiedenen Branchen. Wir haben erfolgreich über 60 Projekte in verschiedenen Sektoren geliefert und Kunden dabei geholfen, ihre Ideen und Geschäftsprozesse in digitale Lösungen umzuwandeln. Unsere Kunden vertrauen uns, weil wir nicht nur Code schreiben; wir verstehen Geschäftsanforderungen und erstellen Lösungen, die darauf ausgelegt sind, greifbare Geschäftsziele zu erreichen.",
    ourMission: "Unsere Mission",
    ourMissionText: "Unternehmen mit innovativen Technologielösungen zu befähigen, die Wachstum, Effizienz und Wettbewerbsvorteile vorantreiben. Wir streben danach, ihre vertrauenswürdigen Partner zu sein und modernste Softwareentwicklungsdienstleistungen anzubieten, die auf ihre einzigartigen Bedürfnisse zugeschnitten sind.",
    ourVision: "Unsere Vision",
    ourVisionText: "Der führende Technologiepartner für Unternehmen zu sein, die die Kraft von Innovation und digitaler Transformation nutzen möchten. Wir wollen nachhaltigen Erfolg für unsere Kunden schaffen, indem wir außergewöhnliche Ergebnisse liefern.",
    ourCoreValues: "Unsere Kernwerte",
    innovation: "Innovation",
    innovationDesc: "Wir setzen auf modernste Technologie, um modernste Lösungen zu liefern",
    excellence: "Exzellenz",
    excellenceDesc: "Wir halten die höchsten Qualitätsstandards in allem, was wir tun",
    collaboration: "Zusammenarbeit",
    collaborationDesc: "Wir arbeiten eng mit unseren Kunden zusammen, um Erfolg zu gewährleisten",
    transparency: "Transparenz",
    transparencyDesc: "Wir glauben an offene Kommunikation und ehrliche Fortschrittsmeldungen",
    ourServices: "Unsere Dienstleistungen",
    servicesSubtitle: "Umfassende Technologielösungen zur Beschleunigung Ihres Geschäftswachstums und zur Förderung der digitalen Transformation",
    customSoftware: "Individuelle Softwareentwicklung",
    customSoftwareDesc: "Maßgeschneiderte Softwarelösungen von Grund auf, abgestimmt auf Ihre spezifischen Geschäftsanforderungen und Ziele.",
    webDevelopment: "Webentwicklung",
    webDevelopmentDesc: "Erstellen Sie beeindruckende, leistungsstarke Websites, die ein außergewöhnliches Benutzererlebnis auf allen Geräten und Plattformen bieten.",
    mobileApp: "Mobile App-Entwicklung",
    mobileAppDesc: "Entwickeln Sie leistungsstarke, benutzerfreundliche mobile Anwendungen, die Benutzer ansprechen und das Geschäftswachstum fördern.",
    consultingSupport: "Beratung und Support",
    consultingSupportDesc: "Expertenberatung und kontinuierlicher Support, um Ihnen bei fundierten Technologieentscheidungen zu helfen und Ihre Lösungen zu pflegen.",
    keyFeatures: "Hauptmerkmale:",
    getInTouchTitle: "Kontaktieren Sie Uns",
    contactSubtitle: "Bereit, Ihr Unternehmen mit modernster Technologie zu transformieren? Lassen Sie uns Ihr Projekt besprechen und erkunden, wie wir Ihnen zum Erfolg verhelfen können.",
    sendMessage: "Senden Sie uns eine Nachricht",
    formSubtitle: "Füllen Sie das untenstehende Formular aus und wir werden uns in Kürze bei Ihnen melden",
    fullName: "Vollständiger Name",
    emailAddress: "E-Mail-Adresse",
    companyName: "Firmenname",
    projectDetails: "Projektdetails",
    send: "Nachricht Senden",
    sending: "Wird gesendet...",
    letsConnect: "Verbinden wir uns",
    email: "E-Mail",
    phone: "Telefon",
    office: "Büro",
    whyWorkWithUs: "Warum mit uns arbeiten?",
    readyToStart: "Bereit, Ihr Projekt zu Starten?",
    readyToStartSubtitle: "Vereinbaren Sie ein kostenloses Beratungsgespräch, um Ihre Projektanforderungen zu besprechen und eine detaillierte Schätzung zu erhalten.",
    scheduleConsultation: "Beratung Planen",
    callNow: "Jetzt Anrufen",
    messageSent: "Nachricht Gesendet!",
    messageSuccess: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
    messageFailed: "Nachricht konnte nicht gesendet werden",
    messageError: "Etwas ist schief gelaufen. Bitte versuchen Sie es später erneut.",
    quickLinks: "Schnelllinks",
    contact: "Kontakt",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    settings: "Einstellungen",
    allRightsReserved: "Alle Rechte vorbehalten.",
    footerDescription: "Professionelles Softwareentwicklungsunternehmen, spezialisiert auf maßgeschneiderte Lösungen, die das Geschäftswachstum vorantreiben.",
    faq: "Häufig Gestellte Fragen",
    faqSubtitle: "Finden Sie Antworten auf häufige Fragen zu unseren Dienstleistungen, unserem Prozess und wie wir Ihrem Unternehmen beim Wachstum helfen können",
    settingsTitle: "Einstellungen",
    settingsSubtitle: "Verwalten Sie Ihre Präferenzen und Kontoeinstellungen",
    backToHome: "Zurück zur Startseite",
    notifications: "Benachrichtigungen",
    notificationsDesc: "Konfigurieren Sie, wie Sie Benachrichtigungen erhalten",
    emailNotifications: "E-Mail-Benachrichtigungen",
    emailNotificationsDesc: "Updates per E-Mail erhalten",
    marketingEmails: "Marketing-E-Mails",
    marketingEmailsDesc: "Werbeinhalte erhalten",
    appearance: "Erscheinungsbild",
    appearanceDesc: "Passen Sie das Aussehen an",
    darkMode: "Dunkelmodus",
    darkModeDesc: "Dunkles Theme verwenden",
    languageRegion: "Sprache und Region",
    languageRegionDesc: "Legen Sie Ihre bevorzugte Sprache und Region fest",
    language: "Sprache",
    languageDesc: "Wählen Sie Ihre bevorzugte Sprache",
    change: "Ändern",
    privacy: "Datenschutz",
    privacyDesc: "Verwalten Sie Ihre Datenschutzeinstellungen",
    analytics: "Analytik",
    analyticsDesc: "Helfen Sie, unsere Dienste zu verbessern",
    settingsUpdated: "Einstellungen Aktualisiert",
    enabled: "aktiviert",
    disabled: "deaktiviert",
    languageUpdated: "Sprache Aktualisiert",
    languageChangedTo: "Sprache geändert zu",
  },
  
  sw: {
    home: "Nyumbani",
    about: "Kuhusu",
    services: "Huduma",
    portfolio: "Kazi Zetu",
    leadershipTeam: "Timu ya Uongozi",
    getInTouch: "Wasiliana Nasi",
    elevatingYourBusiness: "Kuinua Biashara Yako",
    heroTitle1: "Kuinua Biashara Yako",
    heroTitle2: "kwa Teknolojia",
    heroSubtitle: "Suluhisho za kitaalamu za maendeleo ya programu zinazosukuma ukuaji, uvumbuzi, na mafanikio kwa biashara za ukubwa wote.",
    getStartedToday: "Anza Leo",
    viewOurWork: "Ona Kazi Yetu",
    aboutIntro1: "Ilianzishwa mwaka 2022, Servio Tech Solutions imechipuka kutoka imani rahisi kwamba teknolojia inapaswa kuwezesha biashara kufikia uwezo wao kamili. Waanzilishi wetu, wenye uzoefu wa miaka mingi katika maendeleo ya programu na ushauri wa biashara, waliona fursa ya kuziba pengo kati ya changamoto za biashara na suluhisho za kisasa za teknolojia.",
    aboutIntro2: "Sisi ni washirika wa teknolojia kwa biashara katika sekta mbalimbali. Tumefanikiwa kutoa miradi zaidi ya 60 katika sekta mbalimbali, kusaidia wateja kubadilisha mawazo na michakato yao ya biashara kuwa suluhisho za kidijitali. Wateja wetu wanatuamini kwa sababu hatuwandiki msimbo tu; tunaelewa mahitaji ya biashara na kuunda suluhisho zilizoundwa kufikia malengo ya biashara yanayoonekana.",
    ourMission: "Dhamira Yetu",
    ourMissionText: "Kuwezesha biashara kwa suluhisho za teknolojia za ubunifu zinazosukuma ukuaji, ufanisi, na faida ya ushindani. Tunajitahidi kuwa washirika wao wa kuaminika, kutoa huduma za kisasa za maendeleo ya programu zilizobinafsishwa kwa mahitaji yao ya kipekee.",
    ourVision: "Maono Yetu",
    ourVisionText: "Kuwa mshirika mkuu wa teknolojia kwa biashara zinazotaka kutumia nguvu ya uvumbuzi na mabadiliko ya kidijitali. Tunalenga kuunda mafanikio ya kudumu kwa wateja wetu kwa kutoa matokeo ya kipekee.",
    ourCoreValues: "Maadili Yetu ya Msingi",
    innovation: "Uvumbuzi",
    innovationDesc: "Tunakumbatia teknolojia ya kisasa kutoa suluhisho za kisasa",
    excellence: "Ubora",
    excellenceDesc: "Tunadumisha viwango vya juu vya ubora katika kila tunachofanya",
    collaboration: "Ushirikiano",
    collaborationDesc: "Tunafanya kazi kwa karibu na wateja wetu kuhakikisha mafanikio",
    transparency: "Uwazi",
    transparencyDesc: "Tunaamini katika mawasiliano wazi na sasisho za uaminifu za maendeleo",
    ourServices: "Huduma Zetu",
    servicesSubtitle: "Suluhisho kamili za teknolojia zilizoundwa kuharakisha ukuaji wa biashara yako na kusukuma mabadiliko ya kidijitali",
    customSoftware: "Maendeleo ya Programu Maalum",
    customSoftwareDesc: "Suluhisho za programu zilizobinafsishwa zilizotengenezwa kutoka mwanzo, zinazolenga mahitaji na malengo yako maalum ya biashara.",
    webDevelopment: "Maendeleo ya Wavuti",
    webDevelopmentDesc: "Unda tovuti za kuvutia, zenye utendaji wa juu zinazotoa uzoefu wa kipekee wa mtumiaji kwenye vifaa na majukwaa yote.",
    mobileApp: "Maendeleo ya Programu za Simu",
    mobileAppDesc: "Jenga programu za simu zenye nguvu, rafiki kwa watumiaji zinazoshirikisha watumiaji na kusukuma ukuaji wa biashara.",
    consultingSupport: "Ushauri na Msaada",
    consultingSupportDesc: "Mwongozo wa kitaalamu na msaada unaoendelea kukusaidia kufanya maamuzi sahihi ya teknolojia na kudumisha suluhisho zako.",
    keyFeatures: "Vipengele Vikuu:",
    getInTouchTitle: "Wasiliana Nasi",
    contactSubtitle: "Uko tayari kubadilisha biashara yako kwa teknolojia ya kisasa? Hebu tujadili mradi wako na tuchunguze jinsi tunavyoweza kukusaidia kufanikiwa.",
    sendMessage: "Tutumie ujumbe",
    formSubtitle: "Jaza fomu hapa chini na tutawasiliana nawe hivi karibuni",
    fullName: "Jina Kamili",
    emailAddress: "Barua Pepe",
    companyName: "Jina la Kampuni",
    projectDetails: "Maelezo ya Mradi",
    send: "Tuma Ujumbe",
    sending: "Inatuma...",
    letsConnect: "Tuungane",
    email: "Barua Pepe",
    phone: "Simu",
    office: "Ofisi",
    whyWorkWithUs: "Kwa nini ufanye kazi nasi?",
    readyToStart: "Uko Tayari Kuanza Mradi Wako?",
    readyToStartSubtitle: "Panga simu ya ushauri bila malipo kujadili mahitaji ya mradi wako na kupata makadirio ya kina.",
    scheduleConsultation: "Panga Ushauri",
    callNow: "Piga Simu Sasa",
    messageSent: "Ujumbe Umetumwa!",
    messageSuccess: "Tutawasiliana nawe haraka iwezekanavyo.",
    messageFailed: "Imeshindwa Kutuma Ujumbe",
    messageError: "Kuna kitu kimeenda vibaya. Tafadhali jaribu tena baadaye.",
    quickLinks: "Viungo vya Haraka",
    contact: "Mawasiliano",
    privacyPolicy: "Sera ya Faragha",
    termsOfService: "Masharti ya Huduma",
    settings: "Mipangilio",
    allRightsReserved: "Haki zote zimehifadhiwa.",
    footerDescription: "Kampuni ya kitaalamu ya maendeleo ya programu inayobobea katika suluhisho maalum zinazosukuma ukuaji wa biashara.",
    faq: "Maswali Yanayoulizwa Mara kwa Mara",
    faqSubtitle: "Pata majibu ya maswali ya kawaida kuhusu huduma zetu, mchakato, na jinsi tunavyoweza kusaidia biashara yako kukua",
    settingsTitle: "Mipangilio",
    settingsSubtitle: "Simamia mapendeleo yako na mipangilio ya akaunti",
    backToHome: "Rudi Nyumbani",
    notifications: "Arifa",
    notificationsDesc: "Sanidi jinsi unavyopokea arifa",
    emailNotifications: "Arifa za Barua Pepe",
    emailNotificationsDesc: "Pokea sasisho kupitia barua pepe",
    marketingEmails: "Barua Pepe za Masoko",
    marketingEmailsDesc: "Pokea maudhui ya matangazo",
    appearance: "Mwonekano",
    appearanceDesc: "Binafsisha mwonekano",
    darkMode: "Hali ya Giza",
    darkModeDesc: "Tumia mandhari ya giza",
    languageRegion: "Lugha na Eneo",
    languageRegionDesc: "Weka lugha na eneo unalopendelea",
    language: "Lugha",
    languageDesc: "Chagua lugha unayopendelea",
    change: "Badilisha",
    privacy: "Faragha",
    privacyDesc: "Simamia mipangilio yako ya faragha",
    analytics: "Uchanganuzi",
    analyticsDesc: "Saidia kuboresha huduma zetu",
    settingsUpdated: "Mipangilio Imesasishwa",
    enabled: "imewezeshwa",
    disabled: "imezimwa",
    languageUpdated: "Lugha Imesasishwa",
    languageChangedTo: "Lugha imebadilishwa kuwa",
  },
  
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    portfolio: "أعمالنا",
    leadershipTeam: "فريق القيادة",
    getInTouch: "تواصل معنا",
    elevatingYourBusiness: "ارفع مستوى عملك",
    heroTitle1: "ارفع مستوى عملك",
    heroTitle2: "بالتكنولوجيا",
    heroSubtitle: "حلول تطوير برمجيات احترافية تدفع النمو والابتكار والنجاح للشركات من جميع الأحجام.",
    getStartedToday: "ابدأ اليوم",
    viewOurWork: "شاهد أعمالنا",
    aboutIntro1: "تأسست شركة سيرفيو تك سولوشنز في عام 2022، وقد نشأت من إيمان بسيط بأن التكنولوجيا يجب أن تمكّن الشركات من الوصول إلى إمكاناتها الكاملة. رأى مؤسسونا، بسنوات من الخبرة المشتركة في تطوير البرمجيات واستشارات الأعمال، فرصة لسد الفجوة بين تحديات الأعمال وحلول التكنولوجيا المتطورة.",
    aboutIntro2: "نحن شركاء تكنولوجيا للشركات في مختلف الصناعات. قدمنا بنجاح أكثر من 60 مشروعًا في قطاعات مختلفة، مساعدين العملاء على تحويل أفكارهم وعمليات أعمالهم إلى حلول رقمية. يثق بنا عملاؤنا لأننا لا نكتب الكود فقط؛ نحن نفهم احتياجات الأعمال ونخلق حلولاً مصممة لتحقيق أهداف أعمال ملموسة.",
    ourMission: "مهمتنا",
    ourMissionText: "تمكين الشركات بحلول تكنولوجية مبتكرة تدفع النمو والكفاءة والميزة التنافسية. نسعى لأن نكون شركاءهم الموثوقين، نقدم خدمات تطوير برمجيات متطورة مصممة لاحتياجاتهم الفريدة.",
    ourVision: "رؤيتنا",
    ourVisionText: "أن نكون الشريك التكنولوجي الرائد للشركات التي تسعى لاستغلال قوة الابتكار والتحول الرقمي. نهدف إلى خلق نجاح دائم لعملائنا من خلال تقديم نتائج استثنائية.",
    ourCoreValues: "قيمنا الأساسية",
    innovation: "الابتكار",
    innovationDesc: "نتبنى التكنولوجيا المتطورة لتقديم حلول متطورة",
    excellence: "التميز",
    excellenceDesc: "نحافظ على أعلى معايير الجودة في كل ما نقوم به",
    collaboration: "التعاون",
    collaborationDesc: "نعمل بشكل وثيق مع عملائنا لضمان النجاح",
    transparency: "الشفافية",
    transparencyDesc: "نؤمن بالتواصل المفتوح وتحديثات التقدم الصادقة",
    ourServices: "خدماتنا",
    servicesSubtitle: "حلول تكنولوجية شاملة مصممة لتسريع نمو أعمالك ودفع التحول الرقمي",
    customSoftware: "تطوير البرمجيات المخصصة",
    customSoftwareDesc: "حلول برمجية مخصصة مبنية من الصفر، متوافقة مع متطلبات وأهداف عملك المحددة.",
    webDevelopment: "تطوير الويب",
    webDevelopmentDesc: "أنشئ مواقع ويب مذهلة وعالية الأداء توفر تجربة مستخدم استثنائية عبر جميع الأجهزة والمنصات.",
    mobileApp: "تطوير تطبيقات الجوال",
    mobileAppDesc: "أنشئ تطبيقات جوال قوية وسهلة الاستخدام تجذب المستخدمين وتدفع نمو الأعمال.",
    consultingSupport: "الاستشارات والدعم",
    consultingSupportDesc: "إرشادات الخبراء والدعم المستمر لمساعدتك في اتخاذ قرارات تكنولوجية مستنيرة وصيانة حلولك.",
    keyFeatures: "الميزات الرئيسية:",
    getInTouchTitle: "تواصل معنا",
    contactSubtitle: "هل أنت مستعد لتحويل عملك بتكنولوجيا متطورة؟ دعنا نناقش مشروعك ونستكشف كيف يمكننا مساعدتك على النجاح.",
    sendMessage: "أرسل لنا رسالة",
    formSubtitle: "املأ النموذج أدناه وسنتواصل معك قريباً",
    fullName: "الاسم الكامل",
    emailAddress: "البريد الإلكتروني",
    companyName: "اسم الشركة",
    projectDetails: "تفاصيل المشروع",
    send: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    letsConnect: "لنتواصل",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    office: "المكتب",
    whyWorkWithUs: "لماذا تعمل معنا؟",
    readyToStart: "مستعد لبدء مشروعك؟",
    readyToStartSubtitle: "احجز مكالمة استشارة مجانية لمناقشة متطلبات مشروعك والحصول على تقدير مفصل.",
    scheduleConsultation: "حجز استشارة",
    callNow: "اتصل الآن",
    messageSent: "تم إرسال الرسالة!",
    messageSuccess: "سنتواصل معك في أقرب وقت ممكن.",
    messageFailed: "فشل إرسال الرسالة",
    messageError: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً.",
    quickLinks: "روابط سريعة",
    contact: "التواصل",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    settings: "الإعدادات",
    allRightsReserved: "جميع الحقوق محفوظة.",
    footerDescription: "شركة تطوير برمجيات احترافية متخصصة في الحلول المخصصة التي تدفع نمو الأعمال.",
    faq: "الأسئلة الشائعة",
    faqSubtitle: "اعثر على إجابات للأسئلة الشائعة حول خدماتنا وعمليتنا وكيف يمكننا مساعدة عملك على النمو",
    settingsTitle: "الإعدادات",
    settingsSubtitle: "إدارة تفضيلاتك وإعدادات الحساب",
    backToHome: "العودة للرئيسية",
    notifications: "الإشعارات",
    notificationsDesc: "تكوين كيفية تلقي الإشعارات",
    emailNotifications: "إشعارات البريد الإلكتروني",
    emailNotificationsDesc: "تلقي التحديثات عبر البريد الإلكتروني",
    marketingEmails: "رسائل التسويق",
    marketingEmailsDesc: "تلقي المحتوى الترويجي",
    appearance: "المظهر",
    appearanceDesc: "تخصيص الشكل والمظهر",
    darkMode: "الوضع الداكن",
    darkModeDesc: "استخدام المظهر الداكن",
    languageRegion: "اللغة والمنطقة",
    languageRegionDesc: "تعيين لغتك ومنطقتك المفضلة",
    language: "اللغة",
    languageDesc: "اختر لغتك المفضلة",
    change: "تغيير",
    privacy: "الخصوصية",
    privacyDesc: "إدارة إعدادات الخصوصية الخاصة بك",
    analytics: "التحليلات",
    analyticsDesc: "المساعدة في تحسين خدماتنا",
    settingsUpdated: "تم تحديث الإعدادات",
    enabled: "مفعل",
    disabled: "معطل",
    languageUpdated: "تم تحديث اللغة",
    languageChangedTo: "تم تغيير اللغة إلى",
  },
};

export const useTranslations = () => {
  const { settings } = useSettings();
  return translations[settings.language];
};

export type { TranslationKeys };
