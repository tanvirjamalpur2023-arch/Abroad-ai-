import { createClient } from '@libsql/client';

// ============================================================
// ScholarAI - Comprehensive Scholarship Database
// Wet Process Engineering + All Textile Subjects
// World Universities Accepting International Students
// ============================================================

export const scholarships = [
  // =========================================================
  // WET PROCESS ENGINEERING SUBJECTS
  // =========================================================

  // --- Dyeing & Finishing Engineering ---
  {
    id: "sch_dye_01",
    title: "DAAD Scholarship - Dyeing & Finishing Engineering",
    description: "German Academic Exchange Service scholarship for international students to pursue master's in dyeing and finishing engineering at RWTH Aachen. The program covers advanced dyeing mechanisms, finishing processes, and color science with hands-on laboratory research.",
    university: "RWTH Aachen University",
    country: "Germany",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Chemical Engineering, IELTS 6.5+, 2 years work experience, Strong academic record",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Study materials, Research funding"
  },
  {
    id: "sch_dye_02",
    title: "CSC Scholarship - Dyeing & Finishing Engineering at Donghua",
    description: "Chinese Government Scholarship for international students to study dyeing and finishing engineering at Donghua University, China's top textile institution. Research focuses on eco-friendly dyeing, digital color management, and advanced finishing techniques.",
    university: "Donghua University",
    country: "China",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "Full tuition + CNY 3,000/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35 years old, HSK 4 or IELTS 6.0+, Good health certificate",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Comprehensive medical insurance"
  },
  {
    id: "sch_dye_03",
    title: "Erasmus Mundus - Advanced Dyeing & Finishing Technology",
    description: "Joint master's program across European universities focusing on advanced dyeing and finishing technology. Students study in at least two European countries, gaining exposure to diverse textile chemical processing methods and sustainable practices.",
    university: "Erasmus Mundus Consortium (Ghent/RWTH/Borås)",
    country: "Multiple European Countries",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "Full tuition + €1,400/month stipend",
    applicationUrl: "https://erasmusmundus.eu/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Chemical Engineering, IELTS 6.5+, Two recommendation letters, Statement of purpose",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance between countries, Health insurance"
  },
  {
    id: "sch_dye_04",
    title: "MEXT Scholarship - Dyeing & Finishing at Shinshu University",
    description: "Japanese Government Scholarship for international students to study dyeing and finishing engineering at Shinshu University, renowned for its fiber and textile research. Includes Japanese language training for the first semester.",
    university: "Shinshu University",
    country: "Japan",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "¥143,000/month + tuition waiver",
    applicationUrl: "https://www.studyinjapan.go.jp/en/mext/",
    openDate: "2026-04-01T00:00:00.000Z",
    deadlineDate: "2026-05-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Under 35 years old, Bachelor's degree, Good academic record, Japanese or English proficiency",
    benefits: "Full tuition waiver, Monthly stipend, Round-trip airfare, Japanese language training"
  },
  {
    id: "sch_dye_05",
    title: "VLIR-UOS Scholarship - Sustainable Dyeing & Finishing",
    description: "Belgian development cooperation scholarship for students from developing countries to study sustainable dyeing and finishing processes at Ghent University. Focuses on low-impact dyeing, enzymatic treatments, and circular textile processing.",
    university: "Ghent University",
    country: "Belgium",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "Full tuition + €1,100/month allowance",
    applicationUrl: "https://www.vliruos.be/en/scholarships",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, Professional experience in textile sector",
    benefits: "Full tuition waiver, Monthly allowance, Insurance, Travel costs, Accommodation"
  },

  // --- Textile Chemistry ---
  {
    id: "sch_chem_01",
    title: "CSC Scholarship - Textile Chemistry at Donghua University",
    description: "Chinese Government Scholarship for international students to pursue graduate studies in textile chemistry, dyeing and finishing at Donghua University, one of China's premier textile institutions. Research areas include fiber chemistry, dye synthesis, and textile auxiliaries.",
    university: "Donghua University",
    country: "China",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "Full tuition + CNY 3,000/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35 years old, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Comprehensive medical insurance"
  },
  {
    id: "sch_chem_02",
    title: "Chevening Scholarship - Textile Chemistry at University of Leeds",
    description: "UK government's global scholarship program for master's study in textile chemistry at the University of Leeds. The program covers color chemistry, polymer science, and sustainable chemical processing of textiles.",
    university: "University of Leeds",
    country: "United Kingdom",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "Full tuition + living allowance + travel",
    applicationUrl: "https://www.chevening.org/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-02T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "2 years work experience, Undergraduate degree, English proficiency, Leadership potential",
    benefits: "Full tuition fees, Monthly living allowance, Return flight to UK, Arrival allowance"
  },
  {
    id: "sch_chem_03",
    title: "Eiffel Scholarship - Textile Chemistry at ENSISA",
    description: "French Government Eiffel Excellence Scholarship for international students to study textile chemistry and color science at ENSISA (University of Haute-Alsace). Covers advanced topics in dye chemistry, fiber modification, and sustainable textile processing.",
    university: "ENSISA (University of Haute-Alsace)",
    country: "France",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "€1,181/month + housing allowance",
    applicationUrl: "https://www.campusfrance.org/en/eiffel-scholarship",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-10T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Under 30 years old, Bachelor's degree, Non-French nationality, Strong academic record",
    benefits: "Monthly allowance, Housing allowance, Travel expenses, Health insurance, Cultural activities"
  },
  {
    id: "sch_chem_04",
    title: "Fulbright Scholarship - Textile Chemistry at NC State",
    description: "Fulbright Program research and study opportunity in textile chemistry at North Carolina State University's College of Textiles. Focus on innovative dye synthesis, fiber surface modification, and green chemistry applications in textiles.",
    university: "North Carolina State University",
    country: "United States",
    subject: "Textile Chemistry",
    degree: "PhD",
    amount: "Full tuition + $2,500/month stipend",
    applicationUrl: "https://fulbright.org/apply/",
    openDate: "2026-03-01T00:00:00.000Z",
    deadlineDate: "2026-08-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, TOEFL 100+, Three recommendation letters",
    benefits: "Full tuition, Monthly stipend, Health insurance, Book allowance, Conference travel fund"
  },
  {
    id: "sch_chem_05",
    title: "IsDB Scholarship - Textile Chemistry at University of Manchester",
    description: "Islamic Development Bank Scholarship for citizens of IsDB member countries to study textile chemistry at the University of Manchester. Research focuses on sustainable textile chemical processes and innovative dyeing technologies.",
    university: "University of Manchester",
    country: "United Kingdom",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "Full tuition + monthly living allowance",
    applicationUrl: "https://www.isdb.org/scholarships",
    openDate: "2026-01-01T00:00:00.000Z",
    deadlineDate: "2026-03-31T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of IsDB member country, Bachelor's degree, Work experience, Age under 35",
    benefits: "Full tuition, Monthly living allowance, Health insurance, Return airfare, Books allowance"
  },

  // --- Color Chemistry ---
  {
    id: "sch_color_01",
    title: "Commonwealth Scholarship - Color Chemistry at University of Leeds",
    description: "Commonwealth Scholarship for students from Commonwealth countries to study color chemistry at the University of Leeds, home to the world-renowned Department of Colour Science. Covers dye chemistry, color physics, and digital color technology.",
    university: "University of Leeds",
    country: "United Kingdom",
    subject: "Color Chemistry",
    degree: "Master's",
    amount: "Full tuition + £1,236/month allowance",
    applicationUrl: "https://cscuk.fcdo.gov.uk/scholarships/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-12T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Commonwealth citizen, Bachelor's degree with 2:1 or above, IELTS 6.5+, Development impact statement",
    benefits: "Full tuition fees, Stipend, Travel allowance, Warm clothing allowance, Thesis grant"
  },
  {
    id: "sch_color_02",
    title: "DAAD Scholarship - Color Chemistry & Spectroscopy",
    description: "German Academic Exchange Service scholarship for international students at Dresden University of Technology to study color chemistry, spectroscopy, and photochemistry applied to textile materials and dyes.",
    university: "Dresden University of Technology",
    country: "Germany",
    subject: "Color Chemistry",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Chemistry/Textile Engineering, IELTS 6.5+, 2 years experience",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research funding"
  },
  {
    id: "sch_color_03",
    title: "Gates Cambridge Scholarship - Color Chemistry & Dye Science",
    description: "Prestigious Gates Cambridge Scholarship for outstanding applicants to pursue PhD research in color chemistry and dye science at the University of Cambridge. Focus on molecular design of dyes and colorants for advanced textile applications.",
    university: "University of Cambridge",
    country: "United Kingdom",
    subject: "Color Chemistry",
    degree: "PhD",
    amount: "Full tuition + £18,744/year stipend",
    applicationUrl: "https://www.gatescambridge.org/apply/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-03T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Outstanding academic record, Research proposal, Four references, IELTS 7.5+",
    benefits: "Full cost of studying at Cambridge, Discretionary funding, Family allowance"
  },
  {
    id: "sch_color_04",
    title: "Swedish Institute Scholarship - Color Chemistry at Borås",
    description: "Swedish Institute Study Scholarship for master's studies in color chemistry and sustainable dyeing at the University of Borås. Research includes natural dye extraction, bio-based colorants, and color measurement science.",
    university: "University of Borås",
    country: "Sweden",
    subject: "Color Chemistry",
    degree: "Master's",
    amount: "Full tuition + SEK 10,000/month",
    applicationUrl: "https://si.se/scholarship/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of eligible country, 3,000 hours work experience, Bachelor's degree, Leadership experience",
    benefits: "Full tuition fee, Monthly living allowance, Insurance, Travel grant"
  },

  // --- Textile Wet Processing ---
  {
    id: "sch_wet_01",
    title: "Erasmus Mundus - Textile Wet Processing Engineering",
    description: "Joint European master's program specializing in textile wet processing engineering. Covers pretreatment, dyeing, printing, and finishing processes with emphasis on sustainability, water management, and process optimization across multiple European universities.",
    university: "University of Borås / Ghent University",
    country: "Sweden",
    subject: "Textile Wet Processing",
    degree: "Master's",
    amount: "Full tuition + €1,400/month stipend",
    applicationUrl: "https://erasmusmundus.eu/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Chemical Engineering, IELTS 6.5+, Two recommendation letters, Statement of purpose",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance, Health insurance"
  },
  {
    id: "sch_wet_02",
    title: "CSC Scholarship - Textile Wet Processing at Tianjin Polytechnic",
    description: "Chinese Government Scholarship to study textile wet processing at Tianjin Polytechnic University. Focus on dyeing mechanisms, waterless dyeing technology, and advanced textile chemical processing methods.",
    university: "Tianjin Polytechnic University",
    country: "China",
    subject: "Textile Wet Processing",
    degree: "Master's",
    amount: "Full tuition + CNY 2,500/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Medical insurance"
  },
  {
    id: "sch_wet_03",
    title: "Australia Awards - Textile Wet Processing at RMIT",
    description: "Australian Government scholarship for students from developing countries to study textile wet processing at RMIT University. Covers dyeing technology, textile effluent treatment, and sustainable wet processing methods.",
    university: "RMIT University",
    country: "Australia",
    subject: "Textile Wet Processing",
    degree: "Master's",
    amount: "Full tuition + AUD 30,000/year living allowance",
    applicationUrl: "https://www.dfat.gov.au/australia-awards",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-30T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, Work experience, English proficiency",
    benefits: "Full tuition, Living contribution, Overseas Health Cover, Introductory academic program"
  },
  {
    id: "sch_wet_04",
    title: "Turkish Government Scholarship - Textile Wet Processing",
    description: "Türkiye Burslari scholarship for international students to study textile wet processing at Ege University, one of Turkey's leading textile research institutions. Includes Turkish language preparation year.",
    university: "Ege University",
    country: "Turkey",
    subject: "Textile Wet Processing",
    degree: "Master's",
    amount: "Full tuition + 4,500 TL/month stipend",
    applicationUrl: "https://www.turkiyeburslari.gov.tr/",
    openDate: "2026-01-10T00:00:00.000Z",
    deadlineDate: "2026-02-20T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Under 35 years old, Bachelor's degree, Minimum 70% academic score, Health requirements",
    benefits: "Full tuition, Monthly stipend, Free accommodation, Health insurance, Turkish language course"
  },

  // --- Textile Chemical Processing ---
  {
    id: "sch_tcp_01",
    title: "MEXT Scholarship - Textile Chemical Processing at Tokyo Tech",
    description: "Japanese Government Scholarship for international students to study textile chemical processing at Tokyo Institute of Technology. Research areas include fiber surface modification, plasma treatment, and nano-finishing of textiles.",
    university: "Tokyo Institute of Technology",
    country: "Japan",
    subject: "Textile Chemical Processing",
    degree: "Master's",
    amount: "¥143,000/month + tuition waiver",
    applicationUrl: "https://www.studyinjapan.go.jp/en/mext/",
    openDate: "2026-04-01T00:00:00.000Z",
    deadlineDate: "2026-05-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Under 35 years old, Bachelor's degree, Good academic record, Language proficiency",
    benefits: "Full tuition waiver, Monthly stipend, Round-trip airfare, Language training"
  },
  {
    id: "sch_tcp_02",
    title: "Korean Government Scholarship - Textile Chemical Processing",
    description: "KGSP scholarship for international students to study textile chemical processing at Hanyang University, South Korea. Covers dye chemistry, textile auxiliaries, and functional finishing with research laboratory access.",
    university: "Hanyang University",
    country: "South Korea",
    subject: "Textile Chemical Processing",
    degree: "Master's",
    amount: "Full tuition + ₩900,000/month stipend",
    applicationUrl: "https://www.studyinkorea.go.kr/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-03-20T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Under 40 years old, Bachelor's degree, GPA 2.64+, Good health",
    benefits: "Full tuition, Monthly stipend, Korean language training, Medical insurance, Settlement allowance"
  },
  {
    id: "sch_tcp_03",
    title: "DAAD Scholarship - Textile Chemical Processing at Stuttgart",
    description: "German scholarship for international students to study textile chemical processing at the University of Stuttgart. Research includes enzymatic textile processing, bio-polymers for textile finishing, and sustainable chemistry.",
    university: "University of Stuttgart",
    country: "Germany",
    subject: "Textile Chemical Processing",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Chemistry/Textile Engineering, IELTS 6.5+, Research experience",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research funding"
  },

  // --- Polymer Science & Engineering ---
  {
    id: "sch_poly_01",
    title: "Erasmus Mundus - Polymer Science & Textile Engineering",
    description: "Joint European master's in polymer science applied to textile engineering. Study at universities in France, Germany, and Belgium with focus on polymer synthesis, fiber spinning, and smart polymer applications in textiles.",
    university: "University of Strasbourg / TU Dresden",
    country: "France",
    subject: "Polymer Science & Engineering",
    degree: "Master's",
    amount: "Full tuition + €1,400/month stipend",
    applicationUrl: "https://erasmusmundus.eu/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Chemistry/Textile/Polymer Engineering, IELTS 6.5+, Two recommendation letters",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance, Health insurance"
  },
  {
    id: "sch_poly_02",
    title: "Fulbright Scholarship - Polymer & Fiber Science at Georgia Tech",
    description: "Fulbright research opportunity in polymer and fiber science at Georgia Institute of Technology. Focus on high-performance fibers, polymer nanocomposites, and functional fiber-based materials for advanced textile applications.",
    university: "Georgia Institute of Technology",
    country: "United States",
    subject: "Polymer Science & Engineering",
    degree: "PhD",
    amount: "Full tuition + $2,800/month stipend",
    applicationUrl: "https://fulbright.org/apply/",
    openDate: "2026-03-01T00:00:00.000Z",
    deadlineDate: "2026-08-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, TOEFL 100+, Three recommendation letters",
    benefits: "Full tuition, Monthly stipend, Health insurance, Research funding, Conference travel"
  },
  {
    id: "sch_poly_03",
    title: "Eiffel Scholarship - Polymer Engineering for Textiles at Lyon",
    description: "French Government Eiffel Scholarship for master's studies in polymer engineering applied to textiles at Claude Bernard University Lyon 1. Covers polymer synthesis, characterization, and fiber-forming polymers.",
    university: "Claude Bernard University Lyon 1",
    country: "France",
    subject: "Polymer Science & Engineering",
    degree: "Master's",
    amount: "€1,181/month + housing allowance",
    applicationUrl: "https://www.campusfrance.org/en/eiffel-scholarship",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-10T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Under 30 years old, Bachelor's degree, Non-French nationality, Strong academic record",
    benefits: "Monthly allowance, Housing allowance, Travel expenses, Health insurance"
  },
  {
    id: "sch_poly_04",
    title: "CSC Scholarship - Polymer & Fiber Science at Soochow University",
    description: "Chinese Government Scholarship for international students to study polymer and fiber science at Soochow University. Research in functional polymers, fiber modification, and bio-based textile materials.",
    university: "Soochow University",
    country: "China",
    subject: "Polymer Science & Engineering",
    degree: "Master's",
    amount: "Full tuition + CNY 3,000/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Medical insurance"
  },
  {
    id: "sch_poly_05",
    title: "Aalto University Scholarship - Polymer & Textile Technology",
    description: "Aalto University scholarship for international students to study polymer technology and textile materials in Finland. Covers advanced polymer processing, bio-based fibers, and sustainable textile material development.",
    university: "Aalto University",
    country: "Finland",
    subject: "Polymer Science & Engineering",
    degree: "Master's",
    amount: "Full tuition + €1,500/month stipend",
    applicationUrl: "https://www.aalto.fi/en/study-at-aalto/scholarships",
    openDate: "2026-11-01T00:00:00.000Z",
    deadlineDate: "2027-01-09T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.5+, Strong academic record, Motivation letter",
    benefits: "Full tuition waiver, Monthly stipend, Access to state-of-the-art labs, Research funding"
  },

  // --- Fiber Science & Technology ---
  {
    id: "sch_fiber_01",
    title: "Gates Cambridge Scholarship - Fiber Science & Technology",
    description: "Prestigious Gates Cambridge Scholarship for PhD research in fiber science and technology at the University of Cambridge. Research focus on advanced fiber characterization, smart fiber development, and bio-fiber engineering.",
    university: "University of Cambridge",
    country: "United Kingdom",
    subject: "Fiber Science & Technology",
    degree: "PhD",
    amount: "Full tuition + £18,744/year stipend",
    applicationUrl: "https://www.gatescambridge.org/apply/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-03T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Outstanding academic record, Research proposal, Four references, IELTS 7.5+",
    benefits: "Full cost of studying, Discretionary funding for conferences, Family allowance"
  },
  {
    id: "sch_fiber_02",
    title: "MEXT Scholarship - Fiber Science at Shinshu University",
    description: "Japanese Government Scholarship for international students to study fiber science and technology at Shinshu University's Faculty of Textile Science and Technology. World-class research in carbon fibers, high-performance fibers, and nanofibers.",
    university: "Shinshu University",
    country: "Japan",
    subject: "Fiber Science & Technology",
    degree: "Master's",
    amount: "¥143,000/month + tuition waiver",
    applicationUrl: "https://www.studyinjapan.go.jp/en/mext/",
    openDate: "2026-04-01T00:00:00.000Z",
    deadlineDate: "2026-05-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Under 35, Bachelor's degree, Good academic record, Language proficiency",
    benefits: "Full tuition waiver, Monthly stipend, Round-trip airfare, Language training"
  },
  {
    id: "sch_fiber_03",
    title: "ETH Zurich Excellence Scholarship - Fiber Science",
    description: "ETH Zurich Excellence Scholarship & Opportunity Programme for outstanding international students to study fiber science and advanced materials. Research includes carbon nanotube fibers, electrospinning, and biomimetic fiber systems.",
    university: "ETH Zurich",
    country: "Switzerland",
    subject: "Fiber Science & Technology",
    degree: "Master's",
    amount: "Full tuition + CHF 12,000/semester + living costs",
    applicationUrl: "https://ethz.ch/en/studies/financial/scholarships/excellence-scholarship.html",
    openDate: "2026-11-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Outstanding bachelor's degree, Top 10% of class, GRE scores, Two recommendation letters",
    benefits: "Tuition waiver, Semester stipend, Research funding, Mentorship program"
  },
  {
    id: "sch_fiber_04",
    title: "Fulbright Scholarship - Fiber Science at Cornell",
    description: "Fulbright research opportunity in fiber science at Cornell University's Department of Fiber Science & Apparel Design. Research in fiber physics, high-performance fibers, and fiber-based composites for textile applications.",
    university: "Cornell University",
    country: "United States",
    subject: "Fiber Science & Technology",
    degree: "PhD",
    amount: "Full tuition + $2,600/month stipend",
    applicationUrl: "https://fulbright.org/apply/",
    openDate: "2026-03-01T00:00:00.000Z",
    deadlineDate: "2026-08-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, TOEFL 100+, Three recommendation letters",
    benefits: "Full tuition, Monthly stipend, Health insurance, Conference travel fund"
  },
  {
    id: "sch_fiber_05",
    title: "CSC Scholarship - Fiber Science at Zhejiang Sci-Tech University",
    description: "Chinese Government Scholarship for international students to study fiber science and engineering at Zhejiang Sci-Tech University. Research areas include silk fiber engineering, regenerated fibers, and functional fiber materials.",
    university: "Zhejiang Sci-Tech University",
    country: "China",
    subject: "Fiber Science & Technology",
    degree: "Master's",
    amount: "Full tuition + CNY 2,500/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Accommodation, Medical insurance"
  },

  // --- Textile Printing Technology ---
  {
    id: "sch_print_01",
    title: "ITU/BDT Fellowship - Digital Textile Printing Technology",
    description: "International Telecommunication Union fellowship for researchers from developing countries to study digital textile printing technology at ETH Zurich. Covers inkjet printing, color management, and digital design for textiles.",
    university: "ETH Zurich",
    country: "Switzerland",
    subject: "Textile Printing Technology",
    degree: "Master's",
    amount: "Full tuition + CHF 2,000/month",
    applicationUrl: "https://www.itu.int/en/ITU-D/",
    openDate: "2026-07-01T00:00:00.000Z",
    deadlineDate: "2026-09-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of developing country, Bachelor's degree, Professional experience",
    benefits: "Full tuition, Monthly stipend, Travel costs, Research funding"
  },
  {
    id: "sch_print_02",
    title: "Chevening Scholarship - Textile Printing at Royal College of Art",
    description: "UK Chevening Scholarship for master's study in textile printing at the Royal College of Art, London. Combines traditional printing techniques with digital innovation in textile design and production.",
    university: "Royal College of Art",
    country: "United Kingdom",
    subject: "Textile Printing Technology",
    degree: "Master's",
    amount: "Full tuition + living allowance + travel",
    applicationUrl: "https://www.chevening.org/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-02T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "2 years work experience, Undergraduate degree, English proficiency, Leadership potential",
    benefits: "Full tuition fees, Monthly living allowance, Return flight, Arrival allowance"
  },
  {
    id: "sch_print_03",
    title: "DAAD Scholarship - Digital Textile Printing at Dresden",
    description: "German scholarship for master's in digital textile printing at Dresden University of Technology. Research includes inkjet technology, pigment printing, and sustainable printing processes.",
    university: "Dresden University of Technology",
    country: "Germany",
    subject: "Textile Printing Technology",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Design Engineering, IELTS 6.5+, Portfolio",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research materials"
  },
  {
    id: "sch_print_04",
    title: "CSC Scholarship - Textile Printing at Wuhan Textile University",
    description: "Chinese Government Scholarship for international students to study textile printing technology at Wuhan Textile University. Focus on digital printing, transfer printing, and eco-friendly printing processes.",
    university: "Wuhan Textile University",
    country: "China",
    subject: "Textile Printing Technology",
    degree: "Master's",
    amount: "Full tuition + CNY 2,500/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Accommodation, Medical insurance"
  },

  // --- Sustainable Textile Processing ---
  {
    id: "sch_sust_01",
    title: "VLIR-UOS Scholarship - Sustainable Textile Processing at Ghent",
    description: "Belgian development cooperation scholarship for students from developing countries to study sustainable textile processing at Ghent University. Focuses on green chemistry, water recycling, enzymatic processing, and circular economy in textiles.",
    university: "Ghent University",
    country: "Belgium",
    subject: "Sustainable Textile Processing",
    degree: "Master's",
    amount: "Full tuition + €1,100/month allowance",
    applicationUrl: "https://www.vliruos.be/en/scholarships",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, Professional experience",
    benefits: "Full tuition waiver, Monthly allowance, Insurance, Travel costs, Accommodation"
  },
  {
    id: "sch_sust_02",
    title: "Erasmus Mundus - Sustainable Textile Processing & Circularity",
    description: "Joint European master's program in sustainable textile processing and circularity. Study at multiple European universities with focus on zero-waste processing, bio-based dyes, and textile recycling technologies.",
    university: "University of Borås / Ghent / Valencia",
    country: "Multiple European Countries",
    subject: "Sustainable Textile Processing",
    degree: "Master's",
    amount: "Full tuition + €1,400/month stipend",
    applicationUrl: "https://erasmusmundus.eu/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Environmental Engineering, IELTS 6.5+, Statement of purpose",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance, Health insurance"
  },
  {
    id: "sch_sust_03",
    title: "Rhodes Scholarship - Sustainable Textile Engineering at Oxford",
    description: "The Rhodes Scholarship for outstanding young people to study sustainable textile engineering at the University of Oxford. Research in sustainable processing methods, circular fashion systems, and textile waste management.",
    university: "University of Oxford",
    country: "United Kingdom",
    subject: "Sustainable Textile Processing",
    degree: "Master's",
    amount: "Full tuition + £18,180/year stipend",
    applicationUrl: "https://www.rhodeshouse.ox.ac.uk/scholarships/apply/",
    openDate: "2026-06-01T00:00:00.000Z",
    deadlineDate: "2026-10-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Age 19-25, Undergraduate degree, Scholastic attainments, Leadership qualities",
    benefits: "Full tuition, Living stipend, Travel to and from Oxford, Settlement allowance"
  },
  {
    id: "sch_sust_04",
    title: "Australia Awards - Sustainable Textile Processing at Deakin",
    description: "Australian Government scholarship for students from developing countries to study sustainable textile processing at Deakin University. Covers eco-friendly dyeing, waterless processing, and textile waste valorization.",
    university: "Deakin University",
    country: "Australia",
    subject: "Sustainable Textile Processing",
    degree: "Master's",
    amount: "Full tuition + AUD 30,000/year living allowance",
    applicationUrl: "https://www.dfat.gov.au/australia-awards",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-30T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, Work experience, English proficiency",
    benefits: "Full tuition, Living contribution, Overseas Health Cover, Academic program"
  },
  {
    id: "sch_sust_05",
    title: "New Zealand Scholarship - Sustainable Textile Innovation",
    description: "New Zealand Government scholarship for students from developing countries to study sustainable textile innovation at the University of Auckland. Focuses on clean processing technologies and environmental impact reduction.",
    university: "University of Auckland",
    country: "New Zealand",
    subject: "Sustainable Textile Processing",
    degree: "Master's",
    amount: "Full tuition + NZD 28,000/year living allowance",
    applicationUrl: "https://www.mfat.govt.nz/en/aid-and-development/scholarships/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-03-31T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of eligible country, Work experience, Bachelor's degree, English proficiency",
    benefits: "Full tuition, Living allowance, Establishment allowance, Medical and travel insurance"
  },

  // --- Textile Finishing Technology ---
  {
    id: "sch_finish_01",
    title: "DAAD Scholarship - Textile Finishing Technology at Aachen",
    description: "German scholarship for international students to study textile finishing technology at RWTH Aachen's Institute for Textile Technology. Research includes functional finishing, nano-finishing, and plasma surface treatment.",
    university: "RWTH Aachen University",
    country: "Germany",
    subject: "Textile Finishing Technology",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Chemical Engineering, IELTS 6.5+, Research interest",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research funding"
  },
  {
    id: "sch_finish_02",
    title: "Swedish Institute Scholarship - Textile Finishing at Borås",
    description: "Swedish Institute Study Scholarship for master's studies in textile finishing technology at the Swedish School of Textiles, University of Borås. Research in smart finishing, antimicrobial treatments, and sustainable finishing methods.",
    university: "University of Borås",
    country: "Sweden",
    subject: "Textile Finishing Technology",
    degree: "Master's",
    amount: "Full tuition + SEK 10,000/month",
    applicationUrl: "https://si.se/scholarship/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of eligible country, 3,000 hours work experience, Bachelor's degree",
    benefits: "Full tuition fee, Monthly living allowance, Insurance, Travel grant"
  },
  {
    id: "sch_finish_03",
    title: "Korean Government Scholarship - Textile Finishing at Seoul National",
    description: "KGSP scholarship for international students to study textile finishing technology at Seoul National University. Covers functional finishing, flame-retardant treatments, and smart textile finishing with Korean language training.",
    university: "Seoul National University",
    country: "South Korea",
    subject: "Textile Finishing Technology",
    degree: "Master's",
    amount: "Full tuition + ₩900,000/month stipend",
    applicationUrl: "https://www.studyinkorea.go.kr/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-03-20T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Under 40 years old, Bachelor's degree, GPA 2.64+, Good health",
    benefits: "Full tuition, Monthly stipend, Language training, Medical insurance, Settlement allowance"
  },
  {
    id: "sch_finish_04",
    title: "CSC Scholarship - Textile Finishing at Jiangnan University",
    description: "Chinese Government Scholarship for international students at Jiangnan University to study textile finishing technology. Research in bio-finishing, enzymatic treatment, and functional coating for textiles.",
    university: "Jiangnan University",
    country: "China",
    subject: "Textile Finishing Technology",
    degree: "Master's",
    amount: "Full tuition + CNY 2,500/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Accommodation, Medical insurance"
  },

  // --- Textile Engineering (General) ---
  {
    id: "sch_eng_01",
    title: "Commonwealth Scholarship - Textile Engineering at University of Manchester",
    description: "Commonwealth Scholarship for students from developing Commonwealth countries to study textile engineering at the University of Manchester. Comprehensive program covering all aspects of textile manufacturing, quality control, and process optimization.",
    university: "University of Manchester",
    country: "United Kingdom",
    subject: "Textile Engineering",
    degree: "Master's",
    amount: "Full tuition + £1,236/month allowance",
    applicationUrl: "https://cscuk.fcdo.gov.uk/scholarships/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-12T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Commonwealth citizen, Bachelor's degree with 2:1 or above, IELTS 6.5+, Development impact statement",
    benefits: "Full tuition fees, Stipend, Travel allowance, Warm clothing allowance, Thesis grant"
  },
  {
    id: "sch_eng_02",
    title: "CSC Scholarship - Textile Engineering at Donghua University",
    description: "Chinese Government Scholarship for international students to study textile engineering at Donghua University. Comprehensive program covering spinning, weaving, knitting, and textile management with hands-on factory training.",
    university: "Donghua University",
    country: "China",
    subject: "Textile Engineering",
    degree: "Master's",
    amount: "Full tuition + CNY 3,000/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Comprehensive medical insurance"
  },
  {
    id: "sch_eng_03",
    title: "Erasmus Mundus - Textile Engineering & Innovation",
    description: "Joint European master's program in textile engineering and innovation. Study at universities in Belgium, Sweden, and France with focus on smart textiles, technical textiles, and Industry 4.0 in textile manufacturing.",
    university: "Ghent University / University of Borås / ENSISA",
    country: "Multiple European Countries",
    subject: "Textile Engineering",
    degree: "Master's",
    amount: "Full tuition + €1,400/month stipend",
    applicationUrl: "https://erasmusmundus.eu/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile Engineering, IELTS 6.5+, Two recommendation letters, Statement of purpose",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance, Health insurance"
  },
  {
    id: "sch_eng_04",
    title: "MEXT Scholarship - Textile Engineering at Kyoto Institute",
    description: "Japanese Government Scholarship for international students to study textile engineering at Kyoto Institute of Technology. Research in advanced textile machinery, smart fabric systems, and Japanese textile traditions.",
    university: "Kyoto Institute of Technology",
    country: "Japan",
    subject: "Textile Engineering",
    degree: "Master's",
    amount: "¥143,000/month + tuition waiver",
    applicationUrl: "https://www.studyinjapan.go.jp/en/mext/",
    openDate: "2026-04-01T00:00:00.000Z",
    deadlineDate: "2026-05-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Under 35, Bachelor's degree, Good academic record, Language proficiency",
    benefits: "Full tuition waiver, Monthly stipend, Round-trip airfare, Language training"
  },
  {
    id: "sch_eng_05",
    title: "Australia Awards - Textile Engineering at Deakin University",
    description: "Australian Government scholarship for students from developing countries to study textile engineering at Deakin University's Institute for Frontier Materials. Covers advanced manufacturing, technical textiles, and fiber science.",
    university: "Deakin University",
    country: "Australia",
    subject: "Textile Engineering",
    degree: "Master's",
    amount: "Full tuition + AUD 30,000/year living allowance",
    applicationUrl: "https://www.dfat.gov.au/australia-awards",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-30T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, Work experience, English proficiency",
    benefits: "Full tuition, Living contribution, Overseas Health Cover, Academic program"
  },

  // --- Textile Materials Science ---
  {
    id: "sch_mat_01",
    title: "ETH Zurich Scholarship - Textile Materials Science",
    description: "ETH Zurich master's program in textile materials science with scholarship support. Research in advanced fiber materials, nanofiber technology, and smart textile composites for medical and technical applications.",
    university: "ETH Zurich",
    country: "Switzerland",
    subject: "Textile Materials Science",
    degree: "Master's",
    amount: "Full tuition + CHF 12,000/semester",
    applicationUrl: "https://ethz.ch/en/studies/financial/scholarships/excellence-scholarship.html",
    openDate: "2026-11-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Outstanding bachelor's degree, Top 10% of class, GRE scores, Two recommendation letters",
    benefits: "Tuition waiver, Semester stipend, Research funding, Mentorship program"
  },
  {
    id: "sch_mat_02",
    title: "DAAD Scholarship - Textile Materials at TU Dresden",
    description: "German scholarship for international students to study textile materials science at TU Dresden. Research includes bio-based textile materials, smart fiber composites, and functional textile surfaces.",
    university: "TU Dresden",
    country: "Germany",
    subject: "Textile Materials Science",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Materials/Textile Engineering, IELTS 6.5+, Research interest",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research funding"
  },
  {
    id: "sch_mat_03",
    title: "Fulbright Scholarship - Textile Materials at MIT",
    description: "Fulbright research opportunity in textile materials science at Massachusetts Institute of Technology. Research in advanced textile composites, fiber-reinforced polymers, and textile-based electronic materials.",
    university: "Massachusetts Institute of Technology",
    country: "United States",
    subject: "Textile Materials Science",
    degree: "PhD",
    amount: "Full tuition + $3,200/month stipend",
    applicationUrl: "https://fulbright.org/apply/",
    openDate: "2026-03-01T00:00:00.000Z",
    deadlineDate: "2026-08-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, TOEFL 100+, Three recommendation letters",
    benefits: "Full tuition, Monthly stipend, Health insurance, Research funding, Conference travel"
  },
  {
    id: "sch_mat_04",
    title: "Aalto University Scholarship - Textile Materials Innovation",
    description: "Aalto University scholarship for international students to study textile materials innovation in Finland. Covers biomaterial textiles, recycled fiber technology, and circular material design.",
    university: "Aalto University",
    country: "Finland",
    subject: "Textile Materials Science",
    degree: "Master's",
    amount: "Full tuition + €1,500/month stipend",
    applicationUrl: "https://www.aalto.fi/en/study-at-aalto/scholarships",
    openDate: "2026-11-01T00:00:00.000Z",
    deadlineDate: "2027-01-09T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.5+, Strong academic record, Motivation letter",
    benefits: "Full tuition waiver, Monthly stipend, Access to state-of-the-art labs, Research funding"
  },

  // --- Technical Textiles ---
  {
    id: "sch_tech_01",
    title: "Erasmus Mundus - Technical Textiles & Smart Fabrics",
    description: "Joint European master's program in technical textiles and smart fabrics. Study at multiple universities with focus on e-textiles, wearable technology, medical textiles, and protective clothing systems.",
    university: "University of Borås / Ghent / ENSISA",
    country: "Multiple European Countries",
    subject: "Technical Textiles",
    degree: "Master's",
    amount: "Full tuition + €1,400/month stipend",
    applicationUrl: "https://erasmusmundus.eu/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Electrical Engineering, IELTS 6.5+, Statement of purpose",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance, Health insurance"
  },
  {
    id: "sch_tech_02",
    title: "MEXT Scholarship - Technical Textiles at Tokyo Tech",
    description: "Japanese Government Scholarship for international students to study technical textiles at Tokyo Institute of Technology. Research in smart textiles, wearable sensors, and advanced functional textile materials.",
    university: "Tokyo Institute of Technology",
    country: "Japan",
    subject: "Technical Textiles",
    degree: "Master's",
    amount: "¥143,000/month + tuition waiver",
    applicationUrl: "https://www.studyinjapan.go.jp/en/mext/",
    openDate: "2026-04-01T00:00:00.000Z",
    deadlineDate: "2026-05-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Under 35, Bachelor's degree, Good academic record, Language proficiency",
    benefits: "Full tuition waiver, Monthly stipend, Round-trip airfare, Language training"
  },
  {
    id: "sch_tech_03",
    title: "CSC Scholarship - Technical Textiles at Donghua University",
    description: "Chinese Government Scholarship for international students to study technical textiles at Donghua University. Research in geotextiles, medical textiles, and industrial textile applications.",
    university: "Donghua University",
    country: "China",
    subject: "Technical Textiles",
    degree: "Master's",
    amount: "Full tuition + CNY 3,000/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Comprehensive medical insurance"
  },
  {
    id: "sch_tech_04",
    title: "Chevening Scholarship - Technical Textiles at Imperial College",
    description: "UK Chevening Scholarship for master's study in technical textiles at Imperial College London. Covers smart materials, composite textiles, and advanced manufacturing for defense and medical applications.",
    university: "Imperial College London",
    country: "United Kingdom",
    subject: "Technical Textiles",
    degree: "Master's",
    amount: "Full tuition + living allowance + travel",
    applicationUrl: "https://www.chevening.org/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-02T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "2 years work experience, Undergraduate degree, English proficiency, Leadership potential",
    benefits: "Full tuition fees, Monthly living allowance, Return flight, Arrival allowance"
  },

  // --- Textile Design & Technology ---
  {
    id: "sch_des_01",
    title: "Chevening Scholarship - Textile Design at RCA London",
    description: "UK Chevening Scholarship for master's study in textile design at the Royal College of Art. Combines traditional craft with cutting-edge digital technology in textile design, smart fabrics, and sustainable design practices.",
    university: "Royal College of Art",
    country: "United Kingdom",
    subject: "Textile Design & Technology",
    degree: "Master's",
    amount: "Full tuition + living allowance + travel",
    applicationUrl: "https://www.chevening.org/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-02T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "2 years work experience, Undergraduate degree, Portfolio, English proficiency",
    benefits: "Full tuition fees, Monthly living allowance, Return flight, Arrival allowance"
  },
  {
    id: "sch_des_02",
    title: "Swedish Institute Scholarship - Textile Design at Borås",
    description: "Swedish Institute Study Scholarship for master's studies in textile design at the Swedish School of Textiles, University of Borås. Focus on sustainable design, smart textile prototyping, and digital fabrication.",
    university: "University of Borås",
    country: "Sweden",
    subject: "Textile Design & Technology",
    degree: "Master's",
    amount: "Full tuition + SEK 10,000/month",
    applicationUrl: "https://si.se/scholarship/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of eligible country, 3,000 hours work experience, Bachelor's degree, Portfolio",
    benefits: "Full tuition fee, Monthly living allowance, Insurance, Travel grant"
  },
  {
    id: "sch_des_03",
    title: "CSC Scholarship - Textile Design at Soochow University",
    description: "Chinese Government Scholarship for international students to study textile design and technology at Soochow University. Research in traditional Chinese textile arts, digital jacquard design, and cultural textile preservation.",
    university: "Soochow University",
    country: "China",
    subject: "Textile Design & Technology",
    degree: "Master's",
    amount: "Full tuition + CNY 3,000/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Portfolio",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Medical insurance"
  },

  // --- Apparel Engineering ---
  {
    id: "sch_apparel_01",
    title: "DAAD Scholarship - Apparel Engineering at Hof University",
    description: "German scholarship for international students to study apparel engineering at Hof University of Applied Sciences. Covers garment manufacturing technology, 3D body scanning, and automated pattern making systems.",
    university: "Hof University of Applied Sciences",
    country: "Germany",
    subject: "Apparel Engineering",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Apparel Engineering, IELTS 6.5+, Work experience",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research funding"
  },
  {
    id: "sch_apparel_02",
    title: "CSC Scholarship - Apparel Engineering at Zhejiang Sci-Tech",
    description: "Chinese Government Scholarship for international students to study apparel engineering at Zhejiang Sci-Tech University. Research in intelligent garment manufacturing, CAD/CAM systems, and sustainable apparel production.",
    university: "Zhejiang Sci-Tech University",
    country: "China",
    subject: "Apparel Engineering",
    degree: "Master's",
    amount: "Full tuition + CNY 2,500/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Accommodation, Medical insurance"
  },
  {
    id: "sch_apparel_03",
    title: "Turkish Government Scholarship - Apparel Engineering",
    description: "Türkiye Burslari scholarship for international students to study apparel engineering at Ege University. Covers garment technology, production management, and quality control with Turkish language preparation year.",
    university: "Ege University",
    country: "Turkey",
    subject: "Apparel Engineering",
    degree: "Master's",
    amount: "Full tuition + 4,500 TL/month stipend",
    applicationUrl: "https://www.turkiyeburslari.gov.tr/",
    openDate: "2026-01-10T00:00:00.000Z",
    deadlineDate: "2026-02-20T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Under 35 years old, Bachelor's degree, Minimum 70% academic score, Health requirements",
    benefits: "Full tuition, Monthly stipend, Free accommodation, Health insurance, Turkish language course"
  },

  // --- Yarn Manufacturing ---
  {
    id: "sch_yarn_01",
    title: "MEXT Scholarship - Yarn Manufacturing at Shinshu University",
    description: "Japanese Government Scholarship for international students to study yarn manufacturing technology at Shinshu University. Research in novel spinning methods, compact spinning, and high-performance yarn production.",
    university: "Shinshu University",
    country: "Japan",
    subject: "Yarn Manufacturing",
    degree: "Master's",
    amount: "¥143,000/month + tuition waiver",
    applicationUrl: "https://www.studyinjapan.go.jp/en/mext/",
    openDate: "2026-04-01T00:00:00.000Z",
    deadlineDate: "2026-05-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Under 35, Bachelor's degree, Good academic record, Language proficiency",
    benefits: "Full tuition waiver, Monthly stipend, Round-trip airfare, Language training"
  },
  {
    id: "sch_yarn_02",
    title: "CSC Scholarship - Yarn Manufacturing at Tianjin Polytechnic",
    description: "Chinese Government Scholarship to study yarn manufacturing at Tianjin Polytechnic University. Research in ring spinning optimization, rotor spinning, and air-jet spinning technologies for high-quality yarn production.",
    university: "Tianjin Polytechnic University",
    country: "China",
    subject: "Yarn Manufacturing",
    degree: "Master's",
    amount: "Full tuition + CNY 2,500/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Medical insurance"
  },
  {
    id: "sch_yarn_03",
    title: "Korean Government Scholarship - Yarn Manufacturing at Yeungnam",
    description: "KGSP scholarship for international students to study yarn manufacturing at Yeungnam University, South Korea. Covers advanced spinning, fiber processing, and yarn quality assessment.",
    university: "Yeungnam University",
    country: "South Korea",
    subject: "Yarn Manufacturing",
    degree: "Master's",
    amount: "Full tuition + ₩900,000/month stipend",
    applicationUrl: "https://www.studyinkorea.go.kr/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-03-20T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Under 40 years old, Bachelor's degree, GPA 2.64+, Good health",
    benefits: "Full tuition, Monthly stipend, Korean language training, Medical insurance, Settlement allowance"
  },

  // --- Fabric Manufacturing ---
  {
    id: "sch_fab_01",
    title: "DAAD Scholarship - Fabric Manufacturing at RWTH Aachen",
    description: "German scholarship for international students to study fabric manufacturing at RWTH Aachen's Institute for Textile Technology. Research in weaving technology, knitting machine innovation, and 3D fabric formation.",
    university: "RWTH Aachen University",
    country: "Germany",
    subject: "Fabric Manufacturing",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile Engineering, IELTS 6.5+, Research interest",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research funding"
  },
  {
    id: "sch_fab_02",
    title: "CSC Scholarship - Fabric Manufacturing at Jiangnan University",
    description: "Chinese Government Scholarship for international students to study fabric manufacturing at Jiangnan University. Research in advanced weaving, warp knitting, and computational fabric design.",
    university: "Jiangnan University",
    country: "China",
    subject: "Fabric Manufacturing",
    degree: "Master's",
    amount: "Full tuition + CNY 2,500/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Accommodation, Medical insurance"
  },
  {
    id: "sch_fab_03",
    title: "MEXT Scholarship - Fabric Manufacturing at Kyoto Institute",
    description: "Japanese Government Scholarship for international students to study fabric manufacturing at Kyoto Institute of Technology. Research in traditional and advanced weaving, Nishijin textile techniques, and smart fabric production.",
    university: "Kyoto Institute of Technology",
    country: "Japan",
    subject: "Fabric Manufacturing",
    degree: "Master's",
    amount: "¥143,000/month + tuition waiver",
    applicationUrl: "https://www.studyinjapan.go.jp/en/mext/",
    openDate: "2026-04-01T00:00:00.000Z",
    deadlineDate: "2026-05-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Under 35, Bachelor's degree, Good academic record, Language proficiency",
    benefits: "Full tuition waiver, Monthly stipend, Round-trip airfare, Language training"
  },

  // --- Textile Testing & Quality Control ---
  {
    id: "sch_test_01",
    title: "DAAD Scholarship - Textile Testing & Quality at Hohenstein",
    description: "German scholarship for international students to study textile testing and quality control in collaboration with Hohenstein Institute. Research in textile testing standards, wear comfort analysis, and quality assurance systems.",
    university: "Hohenstein Institute / University of Stuttgart",
    country: "Germany",
    subject: "Textile Testing & Quality Control",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's in Textile Engineering, IELTS 6.5+, Lab experience",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research funding"
  },
  {
    id: "sch_test_02",
    title: "Chevening Scholarship - Textile Quality at University of Leeds",
    description: "UK Chevening Scholarship for master's study in textile quality management at the University of Leeds. Covers statistical quality control, textile testing methods, and international textile standards.",
    university: "University of Leeds",
    country: "United Kingdom",
    subject: "Textile Testing & Quality Control",
    degree: "Master's",
    amount: "Full tuition + living allowance + travel",
    applicationUrl: "https://www.chevening.org/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-02T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "2 years work experience, Undergraduate degree, English proficiency, Leadership potential",
    benefits: "Full tuition fees, Monthly living allowance, Return flight, Arrival allowance"
  },

  // --- Textile Management & Fashion Technology ---
  {
    id: "sch_mgmt_01",
    title: "Chevening Scholarship - Textile Management at University of Manchester",
    description: "UK Chevening Scholarship for master's study in textile management at the University of Manchester. Covers textile supply chain management, sustainability in fashion, and global textile business strategy.",
    university: "University of Manchester",
    country: "United Kingdom",
    subject: "Textile Management & Fashion Technology",
    degree: "Master's",
    amount: "Full tuition + living allowance + travel",
    applicationUrl: "https://www.chevening.org/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-02T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "2 years work experience, Undergraduate degree, English proficiency, Leadership potential",
    benefits: "Full tuition fees, Monthly living allowance, Return flight, Arrival allowance"
  },
  {
    id: "sch_mgmt_02",
    title: "IsDB Scholarship - Textile Management at University of Bolton",
    description: "Islamic Development Bank Scholarship for citizens of IsDB member countries to study textile management and fashion technology at the University of Bolton, known for its British textile heritage programs.",
    university: "University of Bolton",
    country: "United Kingdom",
    subject: "Textile Management & Fashion Technology",
    degree: "Master's",
    amount: "Full tuition + monthly living allowance",
    applicationUrl: "https://www.isdb.org/scholarships",
    openDate: "2026-01-01T00:00:00.000Z",
    deadlineDate: "2026-03-31T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of IsDB member country, Bachelor's degree, Work experience, Age under 35",
    benefits: "Full tuition, Monthly living allowance, Health insurance, Return airfare, Books allowance"
  },
  {
    id: "sch_mgmt_03",
    title: "VLIR-UOS Scholarship - Sustainable Fashion Management at Ghent",
    description: "Belgian development cooperation scholarship for students from developing countries to study sustainable fashion and textile management at Ghent University. Focuses on circular fashion, sustainable supply chains, and ethical production.",
    university: "Ghent University",
    country: "Belgium",
    subject: "Textile Management & Fashion Technology",
    degree: "Master's",
    amount: "Full tuition + €1,100/month allowance",
    applicationUrl: "https://www.vliruos.be/en/scholarships",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, Professional experience",
    benefits: "Full tuition waiver, Monthly allowance, Insurance, Travel costs, Accommodation"
  },

  // --- Non-Textile Scholarships (General) ---
  {
    id: "sch_gen_01",
    title: "Fulbright Scholarship - Computer Science at MIT",
    description: "Fulbright Program research opportunity in computer science at Massachusetts Institute of Technology. Research in artificial intelligence, machine learning, and computational systems.",
    university: "Massachusetts Institute of Technology",
    country: "United States",
    subject: "Computer Science",
    degree: "PhD",
    amount: "Full tuition + $3,200/month stipend",
    applicationUrl: "https://fulbright.org/apply/",
    openDate: "2026-03-01T00:00:00.000Z",
    deadlineDate: "2026-08-01T00:00:00.000Z",
    status: "open",
    isTextile: 0,
    requirements: "Master's degree, Research proposal, TOEFL 100+, Three recommendation letters",
    benefits: "Full tuition, Monthly stipend, Health insurance, Research funding"
  },
  {
    id: "sch_gen_02",
    title: "Chevening Scholarship - Public Health at London School of Hygiene",
    description: "UK Chevening Scholarship for master's study in public health at the London School of Hygiene & Tropical Medicine. Covers epidemiology, global health policy, and disease control programs.",
    university: "London School of Hygiene & Tropical Medicine",
    country: "United Kingdom",
    subject: "Public Health",
    degree: "Master's",
    amount: "Full tuition + living allowance + travel",
    applicationUrl: "https://www.chevening.org/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-02T00:00:00.000Z",
    status: "open",
    isTextile: 0,
    requirements: "2 years work experience, Undergraduate degree, English proficiency, Leadership potential",
    benefits: "Full tuition fees, Monthly living allowance, Return flight, Arrival allowance"
  },
  {
    id: "sch_gen_03",
    title: "DAAD Scholarship - Mechanical Engineering at TU Munich",
    description: "German Academic Exchange Service scholarship for international students to pursue master's in mechanical engineering at Technical University of Munich. Covers advanced manufacturing, robotics, and energy systems.",
    university: "Technical University of Munich",
    country: "Germany",
    subject: "Mechanical Engineering",
    degree: "Master's",
    amount: "€934/month + tuition waiver",
    applicationUrl: "https://www.daad.de/en/",
    openDate: "2026-08-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 0,
    requirements: "Bachelor's in Mechanical Engineering, IELTS 6.5+, 2 years work experience",
    benefits: "Monthly stipend, Health insurance, Travel allowance, Research funding"
  },
  {
    id: "sch_gen_04",
    title: "Commonwealth Scholarship - Environmental Science at University of Melbourne",
    description: "Commonwealth Scholarship for students from developing Commonwealth countries to study environmental science at the University of Melbourne. Research in climate change adaptation, water resource management, and biodiversity conservation.",
    university: "University of Melbourne",
    country: "Australia",
    subject: "Environmental Science",
    degree: "Master's",
    amount: "Full tuition + AUD 30,000/year living allowance",
    applicationUrl: "https://cscuk.fcdo.gov.uk/scholarships/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-30T00:00:00.000Z",
    status: "closed",
    isTextile: 0,
    requirements: "Commonwealth citizen, Bachelor's degree with 2:1 or above, IELTS 6.5+",
    benefits: "Full tuition fees, Stipend, Travel allowance, Thesis grant"
  },
  {
    id: "sch_gen_05",
    title: "MEXT Scholarship - Electrical Engineering at Osaka University",
    description: "Japanese Government Scholarship for international students to study electrical engineering at Osaka University. Research in power systems, semiconductor technology, and renewable energy.",
    university: "Osaka University",
    country: "Japan",
    subject: "Electrical Engineering",
    degree: "Master's",
    amount: "¥143,000/month + tuition waiver",
    applicationUrl: "https://www.studyinjapan.go.jp/en/mext/",
    openDate: "2026-04-01T00:00:00.000Z",
    deadlineDate: "2026-05-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 0,
    requirements: "Under 35 years old, Bachelor's degree, Good academic record, Language proficiency",
    benefits: "Full tuition waiver, Monthly stipend, Round-trip airfare, Language training"
  },
  {
    id: "sch_gen_06",
    title: "Erasmus Mundus - Data Science & AI",
    description: "Joint European master's program in data science and artificial intelligence. Study at universities in Italy, France, and Spain with focus on machine learning, big data analytics, and AI ethics.",
    university: "University of Bologna / Sorbonne / UPF Barcelona",
    country: "Multiple European Countries",
    subject: "Data Science & AI",
    degree: "Master's",
    amount: "Full tuition + €1,400/month stipend",
    applicationUrl: "https://erasmusmundus.eu/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 0,
    requirements: "Bachelor's in Computer Science/Mathematics, IELTS 6.5+, Programming skills",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance, Health insurance"
  },
  {
    id: "sch_gen_07",
    title: "Eiffel Scholarship - Business Administration at HEC Paris",
    description: "French Government Eiffel Excellence Scholarship for international students to study business administration at HEC Paris. Covers strategic management, international business, and entrepreneurship.",
    university: "HEC Paris",
    country: "France",
    subject: "Business Administration",
    degree: "Master's",
    amount: "€1,181/month + housing allowance",
    applicationUrl: "https://www.campusfrance.org/en/eiffel-scholarship",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-10T00:00:00.000Z",
    status: "open",
    isTextile: 0,
    requirements: "Under 30 years old, Bachelor's degree, Non-French nationality, Strong academic record",
    benefits: "Monthly allowance, Housing allowance, Travel expenses, Health insurance"
  },
  {
    id: "sch_gen_08",
    title: "CSC Scholarship - Civil Engineering at Tsinghua University",
    description: "Chinese Government Scholarship for international students to study civil engineering at Tsinghua University. Research in structural engineering, smart infrastructure, and sustainable construction.",
    university: "Tsinghua University",
    country: "China",
    subject: "Civil Engineering",
    degree: "Master's",
    amount: "Full tuition + CNY 3,000/month stipend",
    applicationUrl: "http://www.campuschina.org/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 0,
    requirements: "Bachelor's degree, Under 35, HSK or English proficiency, Good health",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Comprehensive medical insurance"
  },
  {
    id: "sch_gen_09",
    title: "Swedish Institute Scholarship - Renewable Energy at KTH",
    description: "Swedish Institute Study Scholarship for master's studies in renewable energy technology at KTH Royal Institute of Technology. Research in solar energy, wind power systems, and sustainable energy solutions.",
    university: "KTH Royal Institute of Technology",
    country: "Sweden",
    subject: "Renewable Energy",
    degree: "Master's",
    amount: "Full tuition + SEK 10,000/month",
    applicationUrl: "https://si.se/scholarship/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 0,
    requirements: "Citizen of eligible country, 3,000 hours work experience, Bachelor's degree",
    benefits: "Full tuition fee, Monthly living allowance, Insurance, Travel grant"
  },
  {
    id: "sch_gen_10",
    title: "Australia Awards - Education at University of Sydney",
    description: "Australian Government scholarship for students from developing countries to study education at the University of Sydney. Covers curriculum development, educational leadership, and inclusive education practices.",
    university: "University of Sydney",
    country: "Australia",
    subject: "Education",
    degree: "Master's",
    amount: "Full tuition + AUD 30,000/year living allowance",
    applicationUrl: "https://www.dfat.gov.au/australia-awards",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-30T00:00:00.000Z",
    status: "closed",
    isTextile: 0,
    requirements: "Citizen of eligible developing country, Bachelor's degree, Work experience, English proficiency",
    benefits: "Full tuition, Living contribution, Overseas Health Cover, Academic program"
  },

  // =========================================================
  // MIDDLE EAST SCHOLARSHIPS
  // =========================================================

  // --- Qatar ---
  {
    id: "sch_qatar_01",
    title: "Qatar University Scholarship - Textile Chemical Processing",
    description: "Qatar University graduate scholarship for international students to study textile chemical processing and sustainable dyeing methods. Research focuses on waterless dyeing technologies and eco-friendly textile processing in arid climates.",
    university: "Qatar University",
    country: "Qatar",
    subject: "Textile Chemical Processing",
    degree: "Master's",
    amount: "Full tuition + QAR 10,000/month stipend",
    applicationUrl: "https://www.qu.edu.qa/admissions/graduate",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree in Textile/Chemical Engineering, IELTS 6.5+, GPA 3.0+, Two recommendation letters",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Health insurance, Research funding"
  },
  {
    id: "sch_qatar_02",
    title: "Hamad Bin Khalifa University Scholarship - Sustainable Textile Engineering",
    description: "HBKU scholarship for international students to pursue research in sustainable textile engineering and green chemistry applications. Focuses on sustainable fashion, circular economy in textiles, and environmental impact assessment of textile processes.",
    university: "Hamad Bin Khalifa University",
    country: "Qatar",
    subject: "Sustainable Textile Processing",
    degree: "PhD",
    amount: "Full tuition + QAR 14,000/month stipend",
    applicationUrl: "https://www.hbku.edu.qa/en/admissions",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-28T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree in relevant field, Research proposal, IELTS 6.5+, Three recommendation letters",
    benefits: "Full tuition, Monthly stipend, Accommodation, Health insurance, Conference travel"
  },
  {
    id: "sch_qatar_03",
    title: "IsDB Scholarship - Textile Wet Processing at Qatar University",
    description: "Islamic Development Bank Scholarship for citizens of IsDB member countries to study textile wet processing at Qatar University. Covers advanced dyeing techniques, water treatment in textile industry, and process optimization.",
    university: "Qatar University",
    country: "Qatar",
    subject: "Textile Wet Processing",
    degree: "Master's",
    amount: "Full tuition + monthly living allowance",
    applicationUrl: "https://www.isdb.org/scholarships",
    openDate: "2026-01-01T00:00:00.000Z",
    deadlineDate: "2026-03-31T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of IsDB member country, Bachelor's degree, Work experience, Age under 35",
    benefits: "Full tuition, Monthly living allowance, Health insurance, Return airfare, Books allowance"
  },

  // --- United Arab Emirates ---
  {
    id: "sch_uae_01",
    title: "Khalifa University Scholarship - Textile Finishing Technology",
    description: "Khalifa University graduate research scholarship for international students specializing in textile finishing technology. Research areas include nano-finishing, smart textile coatings, and functional surface treatments for technical textiles.",
    university: "Khalifa University",
    country: "United Arab Emirates",
    subject: "Textile Finishing Technology",
    degree: "Master's",
    amount: "Full tuition + AED 12,000/month stipend",
    applicationUrl: "https://www.ku.ac.ae/admissions/graduate",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree in Textile/Chemical/Materials Engineering, IELTS 6.5+, GRE scores, Strong academic record",
    benefits: "Full tuition waiver, Monthly stipend, Accommodation, Health insurance, Research funding"
  },
  {
    id: "sch_uae_02",
    title: "Masdar Institute Scholarship - Advanced Materials in Textiles",
    description: "Masdar Institute at Khalifa University scholarship for graduate studies in advanced materials for textile applications. Research focus on smart fibers, self-cleaning textiles, and energy-harvesting fabric systems for sustainable development.",
    university: "Masdar Institute (Khalifa University)",
    country: "United Arab Emirates",
    subject: "Advanced Materials in Textiles",
    degree: "PhD",
    amount: "Full tuition + AED 16,000/month stipend",
    applicationUrl: "https://masdar.ac.ae/admissions",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-03-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, IELTS 7.0+, Three recommendation letters, Publications preferred",
    benefits: "Full tuition, Monthly stipend, Accommodation, Health insurance, Conference travel, Research funding"
  },
  {
    id: "sch_uae_03",
    title: "UAE University Scholarship - Dyeing & Finishing Engineering",
    description: "UAE University graduate scholarship for students from developing countries to study dyeing and finishing engineering. Emphasis on sustainable dyeing practices, digital color management, and textile quality control in the Gulf region.",
    university: "United Arab Emirates University",
    country: "United Arab Emirates",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "Full tuition + AED 8,000/month stipend",
    applicationUrl: "https://www.uaeu.ac.ae/en/graduate.shtml",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-15T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Bachelor's degree in Textile Engineering, IELTS 6.0+, GPA 3.0+, Two recommendation letters",
    benefits: "Full tuition, Monthly stipend, Health insurance, Study materials allowance"
  },

  // --- Saudi Arabia ---
  {
    id: "sch_saudi_01",
    title: "KAUST Scholarship - Polymer Science & Textile Engineering",
    description: "King Abdullah University of Science and Technology merit scholarship for outstanding international students to study polymer science and textile engineering. Research includes high-performance fiber development, polymer nanocomposites for textile applications, and bio-based textile materials.",
    university: "King Abdullah University of Science & Technology",
    country: "Saudi Arabia",
    subject: "Polymer Science & Engineering",
    degree: "PhD",
    amount: "Full tuition + $2,500/month stipend + housing",
    applicationUrl: "https://www.kaust.edu.sa/en/study/admissions",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, TOEFL 90+/IELTS 6.5+, Three recommendation letters, Strong publication record",
    benefits: "Full tuition, Monthly stipend, Free housing, Health insurance, Conference travel, Research funding"
  },
  {
    id: "sch_saudi_02",
    title: "KFUPM Scholarship - Textile Chemical Processing",
    description: "King Fahd University of Petroleum & Minerals scholarship for graduate studies in textile chemical processing. Focus on enzymatic textile processing, sustainable chemistry, and waste water treatment in textile manufacturing.",
    university: "King Fahd University of Petroleum & Minerals",
    country: "Saudi Arabia",
    subject: "Textile Chemical Processing",
    degree: "Master's",
    amount: "Full tuition + SAR 4,000/month stipend",
    applicationUrl: "https://www.kfupm.edu.sa/admissions",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree in Chemical/Textile Engineering, IELTS 6.0+, GPA 3.0+, GRE scores",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Medical insurance, Research support"
  },
  {
    id: "sch_saudi_03",
    title: "IsDB Scholarship - Sustainable Textile Processing at KSU",
    description: "Islamic Development Bank Scholarship for citizens of IsDB member countries to study sustainable textile processing at King Saud University. Research in green chemistry, bio-based dyes, and circular textile economy.",
    university: "King Saud University",
    country: "Saudi Arabia",
    subject: "Sustainable Textile Processing",
    degree: "Master's",
    amount: "Full tuition + monthly living allowance",
    applicationUrl: "https://www.isdb.org/scholarships",
    openDate: "2026-01-01T00:00:00.000Z",
    deadlineDate: "2026-03-31T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of IsDB member country, Bachelor's degree, Work experience, Age under 35",
    benefits: "Full tuition, Monthly living allowance, Health insurance, Return airfare, Books allowance"
  },

  // =========================================================
  // MALAYSIA SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_malaysia_01",
    title: "Malaysian International Scholarship - Textile Chemistry at UTM",
    description: "Malaysian Government International Scholarship for outstanding international students to study textile chemistry at Universiti Teknologi Malaysia. Research covers dye chemistry, fiber modification, and sustainable textile chemical processes.",
    university: "Universiti Teknologi Malaysia",
    country: "Malaysia",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "Full tuition + MYR 3,500/month stipend",
    applicationUrl: "https://educationmalaysia.gov.my/mis/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-31T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree with CGPA 3.0+, IELTS 6.0+, Under 40 years old, Medical certificate",
    benefits: "Full tuition waiver, Monthly stipend, Conference allowance, Medical insurance, Thesis allowance"
  },
  {
    id: "sch_malaysia_02",
    title: "MTC Scholarship - Textile Wet Processing at UiTM",
    description: "Malaysian Textile Council Scholarship for international students to study textile wet processing at Universiti Teknologi MARA. Focus on batik processing, traditional textile dyeing methods, and modern wet processing technology integration.",
    university: "Universiti Teknologi MARA",
    country: "Malaysia",
    subject: "Textile Wet Processing",
    degree: "Master's",
    amount: "Full tuition + MYR 2,800/month stipend",
    applicationUrl: "https://mtc.gov.my/scholarships/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-03-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree in Textile Engineering, IELTS 5.5+, Research interest in Malaysian textile heritage",
    benefits: "Full tuition, Monthly stipend, Research materials, Field trip allowance, Publication support"
  },
  {
    id: "sch_malaysia_03",
    title: "UTP Scholarship - Fiber Science & Technology",
    description: "Universiti Teknologi PETRONAS scholarship for graduate research in fiber science and technology. Research areas include natural fiber composites, bio-fiber engineering, and advanced fiber-reinforced materials for textile and industrial applications.",
    university: "Universiti Teknologi PETRONAS",
    country: "Malaysia",
    subject: "Fiber Science & Technology",
    degree: "PhD",
    amount: "Full tuition + MYR 4,000/month stipend",
    applicationUrl: "https://www.utp.edu.my/admissions/graduate",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-30T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, IELTS 6.0+, Publications in relevant field, Two recommendation letters",
    benefits: "Full tuition, Monthly stipend, Research funding, Conference allowance, Accommodation"
  },

  // =========================================================
  // AUSTRIA SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_austria_01",
    title: "OeAD Scholarship - Textile Chemistry at University of Innsbruck",
    description: "Austrian Agency for International Cooperation in Education and Research scholarship for international students to study textile chemistry at the University of Innsbruck. Research includes sustainable dye synthesis, textile auxiliaries, and green chemistry in textile processing.",
    university: "University of Innsbruck",
    country: "Austria",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "€1,050/month + tuition waiver",
    applicationUrl: "https://grants.oead.at/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.5+, Under 35 years old, Two recommendation letters",
    benefits: "Monthly stipend, Tuition waiver, Health insurance, Travel allowance, Research materials"
  },
  {
    id: "sch_austria_02",
    title: "Ernst Mach Grant - Sustainable Textile Processing at TU Wien",
    description: "Ernst Mach Grant for international students to pursue research in sustainable textile processing at Vienna University of Technology. Focus on eco-friendly finishing, plasma treatment of textiles, and zero-waste processing technologies.",
    university: "Vienna University of Technology (TU Wien)",
    country: "Austria",
    subject: "Sustainable Textile Processing",
    degree: "PhD",
    amount: "€1,200/month + tuition waiver",
    applicationUrl: "https://grants.oead.at/ernst-mach-grant",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, IELTS 6.5+, Publications preferred, Under 35 years old",
    benefits: "Monthly stipend, Tuition waiver, Health insurance, Travel allowance, Research funding"
  },
  {
    id: "sch_austria_03",
    title: "OeAD Scholarship - Dyeing & Finishing at Graz University",
    description: "Austrian government scholarship for developing country students to study dyeing and finishing engineering at Graz University of Technology. Research on low-impact dyeing, enzymatic finishing, and digital color management systems.",
    university: "Graz University of Technology",
    country: "Austria",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "€1,050/month + tuition waiver",
    applicationUrl: "https://grants.oead.at/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-03-15T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, IELTS 6.0+, Professional experience preferred",
    benefits: "Monthly stipend, Tuition waiver, Health insurance, Travel costs, Accident insurance"
  },

  // =========================================================
  // POLAND SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_poland_01",
    title: "Polish Government Scholarship - Textile Chemical Processing at Lodz",
    description: "Polish Government Scholarship for international students to study textile chemical processing at Lodz University of Technology, located in Poland's historic textile center. Research includes dye chemistry, fiber modification, and sustainable textile processing methods.",
    university: "Lodz University of Technology",
    country: "Poland",
    subject: "Textile Chemical Processing",
    degree: "Master's",
    amount: "Full tuition + PLN 2,500/month stipend",
    applicationUrl: "https://www.nawa.gov.pl/en/scholarships",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.0+, Under 35 years old, Strong academic record",
    benefits: "Full tuition waiver, Monthly stipend, Accommodation subsidy, Health insurance, Research funding"
  },
  {
    id: "sch_poland_02",
    title: "NAWA Scholarship - Textile Engineering at Warsaw University",
    description: "Polish National Agency for Academic Exchange scholarship for developing country students to study textile engineering at Warsaw University of Technology. Covers textile manufacturing, quality control, and innovative textile materials development.",
    university: "Warsaw University of Technology",
    country: "Poland",
    subject: "Textile Engineering",
    degree: "Master's",
    amount: "Full tuition + PLN 2,000/month stipend",
    applicationUrl: "https://nawa.gov.pl/en/scholarships/banach",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-28T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of developing country, Bachelor's degree, IELTS 6.0+, GPA 3.0+",
    benefits: "Full tuition, Monthly stipend, Polish language course, Health insurance, Settlement allowance"
  },
  {
    id: "sch_poland_03",
    title: "Stefan Banach Scholarship - Wet Process Engineering at Lodz",
    description: "Stefan Banach Scholarship Programme for students from developing countries to study wet process engineering at the renowned Faculty of Material Technologies and Textile Design at Lodz University of Technology.",
    university: "Lodz University of Technology",
    country: "Poland",
    subject: "Wet Process Engineering",
    degree: "Master's",
    amount: "Full tuition + PLN 1,700/month allowance",
    applicationUrl: "https://nawa.gov.pl/en/scholarships/banach",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-03-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, IELTS 6.0+, Under 30 years old",
    benefits: "Full tuition, Monthly allowance, Polish language course, Health insurance, Travel subsidy"
  },

  // =========================================================
  // GREECE SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_greece_01",
    title: "Greek Government Scholarship - Textile Chemistry at AUTH",
    description: "Greek State Scholarships Foundation (IKY) scholarship for international students to study textile chemistry at Aristotle University of Thessaloniki. Research focuses on natural dye extraction, bio-based colorants from Mediterranean plants, and sustainable dyeing methods.",
    university: "Aristotle University of Thessaloniki",
    country: "Greece",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "€700/month + tuition waiver + accommodation",
    applicationUrl: "https://www.iky.gr/en/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-31T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.0+, Under 35 years old, Good academic standing",
    benefits: "Monthly allowance, Tuition waiver, Free accommodation, Health insurance, Greek language course"
  },
  {
    id: "sch_greece_02",
    title: "Onassis Foundation Scholarship - Sustainable Textile Processing",
    description: "Onassis Foundation scholarship for international scholars to pursue research in sustainable textile processing at Greek universities. Focus on eco-friendly processing, traditional Mediterranean textile techniques, and modern sustainable practices.",
    university: "University of Patras",
    country: "Greece",
    subject: "Sustainable Textile Processing",
    degree: "PhD",
    amount: "€1,100/month + tuition waiver",
    applicationUrl: "https://www.onassis.org/en/scholars",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, IELTS 7.0+, Outstanding academic record, Three recommendation letters",
    benefits: "Monthly stipend, Tuition waiver, Research funding, Conference travel, Health insurance"
  },
  {
    id: "sch_greece_03",
    title: "Erasmus Mundus - Textile Innovation at University of Athens",
    description: "Erasmus Mundus partnership scholarship for master's study in textile innovation at the National and Kapodistrian University of Athens. Combines traditional textile heritage with modern innovation in smart textiles and digital printing.",
    university: "National and Kapodistrian University of Athens",
    country: "Greece",
    subject: "Textile Printing Technology",
    degree: "Master's",
    amount: "Full tuition + €1,400/month stipend",
    applicationUrl: "https://erasmusmundus.eu/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-15T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Bachelor's in Textile/Design Engineering, IELTS 6.5+, Two recommendation letters, Portfolio",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance, Health insurance, Study materials"
  },

  // =========================================================
  // DENMARK SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_denmark_01",
    title: "Danish Government Scholarship - Textile Wet Processing at DTU",
    description: "Danish Government Scholarship for highly qualified international students to study textile wet processing at the Technical University of Denmark. Research focuses on waterless dyeing, enzymatic textile processing, and sustainable wet processing methods.",
    university: "Technical University of Denmark",
    country: "Denmark",
    subject: "Textile Wet Processing",
    degree: "Master's",
    amount: "Full tuition + DKK 6,500/month stipend",
    applicationUrl: "https://www.dtu.dk/english/education/msc/admission/scholarships",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree in Engineering, IELTS 6.5+, Top academic performance, Two recommendation letters",
    benefits: "Full tuition waiver, Monthly stipend, Health insurance, Research funding, International environment"
  },
  {
    id: "sch_denmark_02",
    title: "Aarhus University Scholarship - Environmental Textile Engineering",
    description: "Aarhus University talent scholarship for international graduate students in environmental textile engineering. Covers water treatment in textile industry, pollution prevention, and environmental impact assessment of textile manufacturing.",
    university: "Aarhus University",
    country: "Denmark",
    subject: "Environmental Textile Engineering",
    degree: "Master's",
    amount: "Full tuition + DKK 6,000/month stipend",
    applicationUrl: "https://masters.au.dk/admission/scholarships",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.5+, Strong academic record, Motivation letter",
    benefits: "Full tuition, Monthly stipend, Research funding, Access to state-of-the-art labs"
  },
  {
    id: "sch_denmark_03",
    title: "Novo Nordisk Foundation Scholarship - Textile Biotechnology",
    description: "Novo Nordisk Foundation scholarship for research in textile biotechnology at the University of Copenhagen. Research on enzymatic fiber modification, bio-based textile finishing, and biotechnological approaches to textile processing.",
    university: "University of Copenhagen",
    country: "Denmark",
    subject: "Textile Biotechnology",
    degree: "PhD",
    amount: "Full tuition + DKK 28,000/month salary",
    applicationUrl: "https://novonordiskfonden.dk/en/grants/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-01T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Master's degree in Biotechnology/Textile Engineering, Research proposal, IELTS 7.0+, Publications",
    benefits: "Full tuition, Competitive salary, Pension scheme, Research funding, Conference travel"
  },

  // =========================================================
  // NORWAY SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_norway_01",
    title: "Quota Scheme Scholarship - Textile Chemistry at NTNU",
    description: "Norwegian Quota Scheme scholarship for students from developing countries to study textile chemistry at the Norwegian University of Science and Technology. Research covers sustainable dye chemistry, fiber modification, and green textile chemical processes.",
    university: "Norwegian University of Science and Technology",
    country: "Norway",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "Full tuition + NOK 12,000/month stipend",
    applicationUrl: "https://www.ntnu.edu/studies/admission/quota-scheme",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, IELTS 6.5+, Strong academic record",
    benefits: "Full tuition waiver, Monthly stipend, Travel allowance, Health insurance, Research funding"
  },
  {
    id: "sch_norway_02",
    title: "University of Bergen Scholarship - Green Chemistry in Textiles",
    description: "University of Bergen scholarship for international graduate students specializing in green chemistry in textiles. Focus on bio-based dyes, enzymatic processing, and zero-waste textile manufacturing methods.",
    university: "University of Bergen",
    country: "Norway",
    subject: "Green Chemistry in Textiles",
    degree: "Master's",
    amount: "Full tuition + NOK 11,000/month stipend",
    applicationUrl: "https://www.uib.no/en/education/52325/scholarships",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-01T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree in Chemistry/Environmental Engineering, IELTS 6.5+, Research interest in sustainability",
    benefits: "Full tuition, Monthly stipend, Health insurance, Research funding, Travel grant"
  },
  {
    id: "sch_norway_03",
    title: "NTNU PhD Scholarship - Sustainable Textile Processing",
    description: "NTNU PhD research scholarship in sustainable textile processing. Research includes circular economy in textiles, life cycle assessment of textile processes, and development of sustainable finishing methods.",
    university: "Norwegian University of Science and Technology",
    country: "Norway",
    subject: "Sustainable Textile Processing",
    degree: "PhD",
    amount: "Full tuition + NOK 32,000/month salary",
    applicationUrl: "https://www.ntnu.edu/vacancies",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-03-31T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, IELTS 6.5+, Publications preferred, Norwegian or English proficiency",
    benefits: "Full tuition, Competitive salary, Pension scheme, Health insurance, Conference travel, Research funding"
  },

  // =========================================================
  // IRELAND SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_ireland_01",
    title: "Government of Ireland Scholarship - Textile Chemistry at UCD",
    description: "Government of Ireland Postgraduate Scholarship for international students to study textile chemistry at University College Dublin. Research covers advanced dye chemistry, fiber surface modification, and innovative textile auxiliaries.",
    university: "University College Dublin",
    country: "Ireland",
    subject: "Textile Chemistry",
    degree: "PhD",
    amount: "Full tuition + €18,000/year stipend",
    applicationUrl: "https://www.irishresearchcms.org/postgrad/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-11-30T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "First-class or upper second-class honours degree, Research proposal, IELTS 6.5+, Two recommendation letters",
    benefits: "Full tuition, Annual stipend, Research funding, Conference travel, Equipment costs"
  },
  {
    id: "sch_ireland_02",
    title: "Irish Research Council Scholarship - Dyeing & Finishing at UL",
    description: "Irish Research Council Government of Ireland Scholarship for research in dyeing and finishing engineering at the University of Limerick. Research focus on smart finishing, antimicrobial textile treatments, and sustainable dyeing technologies.",
    university: "University of Limerick",
    country: "Ireland",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "Full tuition + €16,000/year stipend",
    applicationUrl: "https://www.research.ie/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-31T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree with 2:1 or above, IELTS 6.5+, Research proposal, Supervisor agreement",
    benefits: "Full tuition, Annual stipend, Research expenses, Conference travel, Professional development"
  },
  {
    id: "sch_ireland_03",
    title: "Trinity College Dublin Scholarship - Sustainable Textile Innovation",
    description: "Trinity College Dublin Global Excellence Scholarship for graduate study in sustainable textile innovation. Combines materials science with textile engineering for development of next-generation sustainable textile products.",
    university: "Trinity College Dublin",
    country: "Ireland",
    subject: "Sustainable Fashion Engineering",
    degree: "Master's",
    amount: "Full tuition + €12,000/year stipend",
    applicationUrl: "https://www.tcd.ie/study/fees-funding/scholarships/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-01T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.5+, Strong academic record, Statement of purpose, Two references",
    benefits: "Full tuition, Stipend, Research funding, Library access, International community"
  },

  // =========================================================
  // SPAIN SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_spain_01",
    title: "Spanish Government Scholarship - Textile Chemical Processing at UPV",
    description: "Spanish Ministry of Education scholarship for international students to study textile chemical processing at Universitat Politècnica de València. Research focuses on textile auxiliaries, dye synthesis, and sustainable chemical processing methods.",
    university: "Universitat Politècnica de València",
    country: "Spain",
    subject: "Textile Chemical Processing",
    degree: "Master's",
    amount: "Full tuition + €1,200/month stipend",
    applicationUrl: "https://www.educacion.gob.es/eeuu/becas.html",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.0+ or DELE B2, Under 35 years old, Strong academic record",
    benefits: "Full tuition waiver, Monthly stipend, Health insurance, Spanish language course, Travel allowance"
  },
  {
    id: "sch_spain_02",
    title: "La Caixa Foundation Scholarship - Sustainable Textile Processing at UPC",
    description: "La Caixa Foundation international scholarship for outstanding students to study sustainable textile processing at Universitat Politècnica de Catalunya. Research in circular economy, textile recycling, and bio-based dyeing technologies.",
    university: "Universitat Politècnica de Catalunya",
    country: "Spain",
    subject: "Sustainable Textile Processing",
    degree: "PhD",
    amount: "Full tuition + €1,400/month stipend + research funding",
    applicationUrl: "https://fundacionlacaixa.org/en/scholarships",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, IELTS 6.5+, Outstanding academic record, Three recommendation letters",
    benefits: "Full tuition, Monthly stipend, Research funding, International mobility, Health insurance"
  },
  {
    id: "sch_spain_03",
    title: "AECID Scholarship - Color Chemistry at University of Barcelona",
    description: "Spanish Agency for International Development Cooperation scholarship for students from Ibero-American and partner countries to study color chemistry at the University of Barcelona. Covers natural colorants, dye chemistry, and digital color technology.",
    university: "University of Barcelona",
    country: "Spain",
    subject: "Color Chemistry",
    degree: "Master's",
    amount: "Full tuition + €1,000/month allowance",
    applicationUrl: "https://www.aecid.es/EN/aecid",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-15T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Citizen of eligible country, Bachelor's degree, Spanish or English proficiency, Under 35",
    benefits: "Full tuition, Monthly allowance, Health insurance, Spanish language course, Cultural activities"
  },

  // =========================================================
  // HUNGARY SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_hungary_01",
    title: "Stipendium Hungaricum Scholarship - Textile Chemistry at BME",
    description: "Hungarian Government Stipendium Hungaricum Scholarship for international students to study textile chemistry at Budapest University of Technology and Economics. Research covers dye chemistry, textile auxiliaries, and sustainable textile chemical processing.",
    university: "Budapest University of Technology and Economics",
    country: "Hungary",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "Full tuition + HUF 140,000/month stipend + accommodation",
    applicationUrl: "https://stipendiumhungaricum.hu/",
    openDate: "2026-11-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.0+, Under 25 for Master's, Nomination by home country",
    benefits: "Full tuition waiver, Monthly stipend, Free accommodation, Medical insurance, Hungarian language course"
  },
  {
    id: "sch_hungary_02",
    title: "Stipendium Hungaricum - Dyeing & Finishing at University of Pannonia",
    description: "Hungarian Government Stipendium Hungaricum Scholarship for studying dyeing and finishing engineering at the University of Pannonia. Research on eco-friendly dyeing, color fastness improvement, and advanced finishing techniques for technical textiles.",
    university: "University of Pannonia",
    country: "Hungary",
    subject: "Dyeing & Finishing Engineering",
    degree: "Master's",
    amount: "Full tuition + HUF 140,000/month stipend + accommodation",
    applicationUrl: "https://stipendiumhungaricum.hu/",
    openDate: "2026-11-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.0+, Nomination by sending country, Medical certificate",
    benefits: "Full tuition, Monthly stipend, Accommodation, Health insurance, Language training"
  },
  {
    id: "sch_hungary_03",
    title: "BME Excellence Scholarship - Wet Process Engineering",
    description: "Budapest University of Technology Excellence Scholarship for outstanding international PhD candidates in wet process engineering. Research areas include textile effluent treatment, enzymatic processing, and water recycling in textile manufacturing.",
    university: "Budapest University of Technology and Economics",
    country: "Hungary",
    subject: "Wet Process Engineering",
    degree: "PhD",
    amount: "Full tuition + HUF 250,000/month stipend",
    applicationUrl: "https://www.bme.hu/en/admissions",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-01T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, IELTS 6.5+, Outstanding academic record, Publications preferred",
    benefits: "Full tuition, Competitive stipend, Research funding, Health insurance, Conference travel"
  },

  // =========================================================
  // THAILAND SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_thailand_01",
    title: "Royal Thai Government Scholarship - Textile Chemistry at KMUTT",
    description: "Royal Thai Government Scholarship for international students to study textile chemistry at King Mongkut's University of Technology Thonburi. Research includes natural dye extraction from Thai plants, sustainable dyeing methods, and textile waste valorization.",
    university: "King Mongkut's University of Technology Thonburi",
    country: "Thailand",
    subject: "Textile Chemistry",
    degree: "Master's",
    amount: "Full tuition + THB 15,000/month stipend",
    applicationUrl: "https://www.oic.go.th/",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2027-01-31T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 5.5+, Under 35 years old, Good health, Nomination required",
    benefits: "Full tuition, Monthly stipend, Accommodation, Health insurance, Thai language course"
  },
  {
    id: "sch_thailand_02",
    title: "Thailand International Postgraduate Programme - Textile Wet Processing",
    description: "Thailand International Postgraduate Programme (TIPP) scholarship for developing country students to study textile wet processing at Chulalongkorn University. Focus on eco-friendly wet processing, water treatment, and process optimization.",
    university: "Chulalongkorn University",
    country: "Thailand",
    subject: "Textile Wet Processing",
    degree: "Master's",
    amount: "Full tuition + THB 16,000/month stipend",
    applicationUrl: "https://tipp.thaishare.or.th/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-02-28T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Citizen of eligible developing country, Bachelor's degree, IELTS 6.0+, Professional experience preferred",
    benefits: "Full tuition, Monthly stipend, Accommodation, Health insurance, Round-trip airfare"
  },
  {
    id: "sch_thailand_03",
    title: "Asian Institute of Technology Scholarship - Fiber Science & Technology",
    description: "Asian Institute of Technology scholarship for graduate research in fiber science and technology. Research covers natural fiber composites, silk engineering, and bio-fiber development for sustainable textile applications.",
    university: "Asian Institute of Technology",
    country: "Thailand",
    subject: "Fiber Science & Technology",
    degree: "Master's",
    amount: "Full tuition + THB 12,000/month stipend",
    applicationUrl: "https://www.ait.ac.th/admissions/scholarships",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-03-31T00:00:00.000Z",
    status: "closing_soon",
    isTextile: 1,
    requirements: "Bachelor's degree, IELTS 6.0+, GPA 3.0+, Two recommendation letters",
    benefits: "Full tuition, Monthly stipend, Accommodation, Health insurance, Research funding"
  },

  // =========================================================
  // SINGAPORE SCHOLARSHIPS
  // =========================================================

  {
    id: "sch_singapore_01",
    title: "NUS Research Scholarship - Textile Chemical Processing",
    description: "National University of Singapore Research Scholarship for international graduate students to study textile chemical processing. Research includes advanced dye chemistry, nano-finishing, and smart textile coatings for functional applications.",
    university: "National University of Singapore",
    country: "Singapore",
    subject: "Textile Chemical Processing",
    degree: "PhD",
    amount: "Full tuition + SGD 2,700/month stipend",
    applicationUrl: "https://nusgs.nus.edu.sg/scholarships/",
    openDate: "2026-10-01T00:00:00.000Z",
    deadlineDate: "2027-01-15T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Master's degree, Research proposal, IELTS 6.5+/TOEFL 85+, GRE scores preferred, Three recommendation letters",
    benefits: "Full tuition, Monthly stipend, Health insurance, Conference travel, Research funding"
  },
  {
    id: "sch_singapore_02",
    title: "NTU Scholarship - Advanced Materials in Textiles",
    description: "Nanyang Technological University scholarship for outstanding international students to study advanced materials for textile applications. Research covers smart fibers, wearable electronics, and self-healing textile materials.",
    university: "Nanyang Technological University",
    country: "Singapore",
    subject: "Advanced Materials in Textiles",
    degree: "Master's",
    amount: "Full tuition + SGD 2,200/month stipend",
    applicationUrl: "https://www.ntu.edu.sg/admissions/graduate/scholarships",
    openDate: "2026-09-01T00:00:00.000Z",
    deadlineDate: "2026-12-31T00:00:00.000Z",
    status: "open",
    isTextile: 1,
    requirements: "Bachelor's degree with honours, IELTS 6.5+, Strong academic record, Research interest in smart materials",
    benefits: "Full tuition waiver, Monthly stipend, Health insurance, Research funding, International exposure"
  },
  {
    id: "sch_singapore_03",
    title: "SINGA Scholarship - Sustainable Textile Processing",
    description: "Singapore International Graduate Award (SINGA) for international PhD students in sustainable textile processing at NUS/NTU. Joint research program on circular textile economy, bio-based dyes, and zero-waste manufacturing processes.",
    university: "NUS / NTU Joint Program",
    country: "Singapore",
    subject: "Sustainable Textile Processing",
    degree: "PhD",
    amount: "Full tuition + SGD 3,200/month stipend",
    applicationUrl: "https://singa.a-star.edu.sg/",
    openDate: "2026-02-01T00:00:00.000Z",
    deadlineDate: "2026-04-01T00:00:00.000Z",
    status: "closed",
    isTextile: 1,
    requirements: "Bachelor's or Master's degree, IELTS 6.5+, Strong academic record, Research proposal, Two references",
    benefits: "Full tuition, Monthly stipend, Settlement allowance, Airfare, Health insurance, Conference funding"
  },

];

export async function seedDatabase(client) {
  console.log('🚀 ScholarAI - Seeding Turso Database...');
  console.log(`📊 Total scholarships to insert: ${scholarships.length}`);

  // Step 1: Create tables
  console.log('\n📋 Step 1: Creating tables...');

  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS Scholarship (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        university TEXT NOT NULL,
        country TEXT NOT NULL,
        subject TEXT NOT NULL,
        degree TEXT NOT NULL,
        amount TEXT NOT NULL,
        applicationUrl TEXT NOT NULL,
        openDate TEXT NOT NULL,
        deadlineDate TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'open',
        isTextile INTEGER NOT NULL DEFAULT 0,
        requirements TEXT NOT NULL DEFAULT '',
        benefits TEXT NOT NULL DEFAULT '',
        createdAt TEXT NOT NULL DEFAULT (datetime('now')),
        updatedAt TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `);
    console.log('  ✅ Scholarship table created');
  } catch (e) {
    console.log('  ℹ️ Scholarship table may already exist:', e.message);
  }

  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS Notification (
        id TEXT PRIMARY KEY,
        scholarshipId TEXT NOT NULL,
        type TEXT NOT NULL,
        message TEXT NOT NULL,
        isRead INTEGER NOT NULL DEFAULT 0,
        createdAt TEXT NOT NULL DEFAULT (datetime('now')),
        FOREIGN KEY (scholarshipId) REFERENCES Scholarship(id)
      )
    `);
    console.log('  ✅ Notification table created');
  } catch (e) {
    console.log('  ℹ️ Notification table may already exist:', e.message);
  }

  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS UserPreference (
        id TEXT PRIMARY KEY,
        preferredSubjects TEXT NOT NULL DEFAULT '',
        preferredCountries TEXT NOT NULL DEFAULT '',
        notificationEnabled INTEGER NOT NULL DEFAULT 1,
        emailNotifications INTEGER NOT NULL DEFAULT 1
      )
    `);
    console.log('  ✅ UserPreference table created');
  } catch (e) {
    console.log('  ℹ️ UserPreference table may already exist:', e.message);
  }

  // Step 2: Check if data already exists
  const existing = await client.execute('SELECT COUNT(*) as count FROM Scholarship');
  console.log(`\n📊 Database currently has ${existing.rows[0].count} scholarships.`);

  // Step 3: Insert scholarship data using INSERT OR IGNORE to avoid duplicates
  console.log('\n📝 Step 2: Inserting scholarship data (INSERT OR IGNORE)...');

  let inserted = 0;
  let skipped = 0;
  let failed = 0;

  for (const sch of scholarships) {
    try {
      await client.execute({
        sql: `INSERT OR IGNORE INTO Scholarship (id, title, description, university, country, subject, degree, amount, applicationUrl, openDate, deadlineDate, status, isTextile, requirements, benefits, createdAt, updatedAt)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
        args: [
          sch.id, sch.title, sch.description, sch.university, sch.country,
          sch.subject, sch.degree, sch.amount, sch.applicationUrl,
          sch.openDate, sch.deadlineDate, sch.status, sch.isTextile,
          sch.requirements, sch.benefits
        ]
      });
      // Check if the row was actually inserted or ignored
      const changes = await client.execute('SELECT changes() as count');
      if (Number(changes.rows[0].count) > 0) {
        inserted++;
      } else {
        skipped++;
      }
      if ((inserted + skipped) % 10 === 0) {
        console.log(`  📊 Processed ${inserted + skipped}/${scholarships.length} (inserted: ${inserted}, skipped: ${skipped})...`);
      }
    } catch (e) {
      console.error(`  ❌ Failed: ${sch.title} - ${e.message}`);
      failed++;
    }
  }

  // Step 4: Verify
  const result = await client.execute('SELECT COUNT(*) as count FROM Scholarship');
  const textileCount = await client.execute("SELECT COUNT(*) as count FROM Scholarship WHERE isTextile = 1");

  console.log('\n' + '='.repeat(50));
  console.log('🎉 SEEDING COMPLETE!');
  console.log('='.repeat(50));
  console.log(`✅ Successfully inserted: ${inserted}`);
  console.log(`⏭️ Skipped (already exist): ${skipped}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total in database: ${result.rows[0].count}`);
  console.log(`🧵 Textile scholarships: ${textileCount.rows[0].count}`);
  console.log(`🌍 Non-textile scholarships: ${result.rows[0].count - textileCount.rows[0].count}`);
  console.log('='.repeat(50));

}

async function seedFromEnvironment() {
  const url = process.env.DATABASE_URL || process.env.TURSO_DATABASE_URL;
  const authToken = process.env.DATABASE_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN;

  if (!url) throw new Error('DATABASE_URL or TURSO_DATABASE_URL is required');

  const client = createClient(authToken ? { url, authToken } : { url });
  try {
    await seedDatabase(client);
  } finally {
    client.close();
  }
}

if (process.argv[1]?.endsWith('seed-turso.mjs')) {
  seedFromEnvironment().catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  });
}
