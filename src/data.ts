/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimelineEvent {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  keyImpacts: string[];
}

export interface BoardCompetency {
  title: string;
  description: string;
  details: string[];
}

export interface PolicyDimension {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface AchievementItem {
  id: string;
  metric: string;
  suffix: string;
  label: string;
  context: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  type: "Policy Paper" | "White Paper" | "Analysis" | "Opinion";
  publisher: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  event: string;
  year: string;
  category: string;
  imageUrl: string;
}

export const biographyNarrative = {
  intro: "Philip Leakey Okello represents a rare, elite caliber of state-level institutional leadership—one defined by systematic structural reforms, rigorous multi-layered regulatory oversight, and an unwavering, lifelong commitment to the preservation of public trust. Over nearly two decades of high-level civil and regulatory service, he has steered major public corporations, security regulators, and parastatals through periods of profound operational modernization, converting regulatory mandates into high-yield, transparent, and resilient social and economic governance structures that protect national interests and foster private-sector investment predictability across East Africa.",
  journey: [
    {
      phase: "The Foundation of Fiscal Discipline & Sovereign Accountability",
      title: "Assistant Accountant to Head of Accounts & Finance (The PFM Legacy)",
      description: "Philip's distinguished career began within the highly precise and unforgiving environment of public sector accounting. Serving as Assistant Accountant and steadily ascending to Head of Accounts and Finance, he took command of complex public ledger systems, designed airtight interior financial controls, and spearheaded modern treasury allocation protocols. Operating under the strict guidance of the Public Finance Management (PFM) Act, he managed budgeting processes for critical developmental initiatives with cumulative capital allocations exceeding KSh 1.2 Billion. By establishing comprehensive audit trails and defending agency balance sheets during grueling parliamentary oversight committee reviews, he secured consecutive unqualified clean opinions from the Office of the Auditor-General, instilling an enduring commitment to absolute resource optimization and financial stewardship."
    },
    {
      phase: "Transition to Comprehensive Institutional Strategy & Corporate Services",
      title: "Director of Corporate Services (Bridging Strategy and Policy Compliance)",
      description: "Stepping into the role of Director of Corporate Services, Philip transitioned from direct financial stewardship to general executive administration and institutional design. In this high-stakes capacity, he integrated legal affairs, human capital, procurement, data engineering, and technological infrastructures under a unified corporate objective. Confronted with legacy inefficiencies, he led a massive digital transformation program, deploying a modern Enterprise Resource Planning (ERP) platform that automated physical auditing processes and streamlined licensing chains, resulting in an immediate 22% reduction in administrative operational overhead. Through strategic human resource alignment and the creation of strict ethical compliance frameworks, he successfully elevated institutional audit readiness and legal accountability indicators to historic highs."
    },
    {
      phase: "National Executive Authority & Regulatory Sovereignty",
      title: "Chief Executive Officer (Architect of Modern Private Security Regulation)",
      description: "Appointed as the Chief Executive Officer of the Private Security Regulatory Authority (PSRA), Philip Leakey Okello took on the massive constitutional mission of regulating, licensing, and professionalizing Kenya's private security sector—a vast industry comprising over 3,000 corporate security providers and a dynamic workforce of hundreds of thousands of individual personnel. Under his executive direction, the Authority underwent a rapid transition from passive, manual oversight to proactive, digitally enforced national regulation. Philip engineered a national biometric guard registration program that registered and vetted over 300,000 guards, integrating private safety databases into national law enforcement grids. He co-authored standardized corporate security training manuals and legislated a standard minimum wage threshold, singlehandedly balancing worker welfare, legal compliance, and corporate profitability."
    }
  ],
  legacyQuote: "True governance is not merely the enforcement of rules, but the creation of an environment where integrity becomes a natural default, and public services operate with predictable excellence."
};

export const careerTimeline: TimelineEvent[] = [
  {
    id: "role-ceo",
    role: "Chief Executive Officer",
    organization: "Private Security Regulatory Authority (PSRA)",
    period: "2018 - Present",
    description: "Appointed under presidential and ministerial gazettement to spearhead the regulation, structural modernization, and legal compliance of Kenya’s multi-billion private security sector. Philip leads a massive workforce of regulatory compliance officers, inspectorates, and legal brains, managing the licensing and vetting protocols of over 3,000 corporate security providers and safeguarding national security guidelines under constitutional frameworks.",
    keyImpacts: [
      "Pioneered and executed the complete digitization of the corporate licensing registry, reducing service turnaround times from a sluggish 90 days to an agile 14 days, driving investor confidence and formal business listings.",
      "Initiated first-ever national biometric guard registration and vetting database, scanning and registering over 300,000 personnel into central state databases to mitigate security threats and standardize identity authentication.",
      "Co-authored, gazetted, and implemented the standardized curriculum and structural training manuals for private guards of all cadres, introducing modules on civil rights, emergency response, and professional codes of conduct.",
      "Advised cabinet secretaries and parliamentary committees on national security integrations, providing legal blueprints to deploy coordinated private defense grids as auxiliary nodes during national crises."
    ]
  },
  {
    id: "role-act-ceo",
    role: "Acting Chief Executive Officer",
    organization: "Private Security Regulatory Authority",
    period: "2016 - 2018",
    description: "Formally gazetted and charged by the national government to establish the foundational offices, core regulatory algorithms, and initial administrative frameworks for the newly enacted Private Security Regulatory Authority. Commenced high-visibility stakeholder engagements to reconcile corporate security interests with national regulatory constraints.",
    keyImpacts: [
      "Successfully drafted and presented the foundational draft private security general regulations to the parliamentary committee on delegated legislation, establishing critical definitions for industry operations.",
      "Defended the agency's maiden Corporate Strategic Plan before the National Treasury, securing an initial development capital allocation of over KSh 250 Million for office setup and county inspectorate rollouts.",
      "Recruited the pioneer core inter-disciplinary executive team, incorporating legal scholars, forensic auditors, and experienced law enforcement veteran panels into the internal management hierarchy.",
      "Established the foundational public registry and developed standard operating procedures for compliance audits across major urban areas in Kenya."
    ]
  },
  {
    id: "role-director",
    role: "Director, Corporate Services",
    organization: "State Corporations Registry & Regulatory Agencies",
    period: "2011 - 2016",
    description: "Directed auxiliary operational units including corporate finance registry, human resource management, legal council, technological infrastructure development, and supply-chain management. Accountable for maintaining all state administrative metrics in complete alignment with National Treasury directives and State Corporations Advisory Committee protocols.",
    keyImpacts: [
      "Led the comprehensive system-wide integration of the national Enterprise Resource Planning (ERP) platform, automating invoice tracking, payroll registry, and asset depreciation to cut administrative overhead by 22%.",
      "Created and deployed a robust professional capacity building and governance training framework for middle managers, which successfully elevated annual statutory compliance audits by 40%.",
      "Directed agency legal defense panels in complex civil litigation cases, defending and securing public registry assets, municipal holdings, and critical government land reserves from unlawful encroachment.",
      "Represented corporate services on joint regional integration boards coordinating cross-border public administrative standards with East African Community protocols."
    ]
  },
  {
    id: "role-finance",
    role: "Head of Accounts and Finance / Senior Accountant",
    organization: "Various Public Sector Institutions",
    period: "2006 - 2011",
    description: "Served as the chief financial accounting officer accountable for the structure of statutory records, budget consolidation, strategic investment vetting, internal treasury audits, and external compliance reviews. Represented executive managements during intensive, adversarial public account committee reviews in Parliament.",
    keyImpacts: [
      "Consolidated and supervised meticulous budget execution for high-priority public works and infrastructure projects with combined financial portfolios exceeding KSh 1.2 Billion.",
      "Led the pioneer pilot and subsequent roll-out of the Integrated Financial Management Information System (IFMIS) across state corporations, reducing payment dispute backlogs and manual accounting vulnerabilities.",
      "Achieved six consecutive unqualified 'clean' audit certificates from the Auditor-General, establishing a national benchmark for fiscal transparency and zero-loss public treasury management.",
      "Optimized cash flow management strategies, enabling the institutions to comfortably transition from state-dependent operations to self-funded regulatory environments through streamlined fee structures."
    ]
  }
];

export const boardCompetencies: BoardCompetency[] = [
  {
    title: "Corporate Governance & Ethical Oversight Standard",
    description: "Philip acts as an expert authority on board charters, ethical compliance indicators, and executive alignment matrices. He advises presidential councils, state boards, and international corporations on aligning board behavior with local and regional corporate governance protocols.",
    details: [
      "Formulating, auditing, and executing complex board self-evaluation systems and compliance indexes.",
      "Advising nominating committees on optimal skills-mix configurations, succession planning, and diversity metrics.",
      "Designing state-of-the-art management performance tracking models integrated with environmental, social, and governance (ESG) standards.",
      "Authoring comprehensive codes of conduct to eradicate conflict of interest risks across senior management teams."
    ]
  },
  {
    title: "Audit & Public Fiscal Accountability Systems",
    description: "With roots grounded deep in public sector accounting and standard auditing protocols, Philip brings unmatched depth to audit committees. He reads, maps, and fortifies complex corporate financial models against compliance vulnerabilities and structural deficits.",
    details: [
      "Liaising directly with Supreme Audit Institutions, presidential committees, and independent internal auditors.",
      "Auditing and validating sovereign wealth allocations, national Treasury guarantees, and public-private partnership capitalizations.",
      "Interpreting constitutional finance laws and municipal tax changes to shield agency funds from regulatory shocks.",
      "Designing capital expenditure tracking mechanisms that assure absolute transparency for public and institutional investments."
    ]
  },
  {
    title: "Enterprise Risk Management & National Security Compliance",
    description: "Philip specializes in corporate risk heat-mapping, regulatory exposure containment, and designing institutional contingency plans. He translates evolving security directives, cyber laws, and labor standards into sound risk prevention guides.",
    details: [
      "Creating and implementing corporate legal compliance registers tracking over 150 unique national security legislations.",
      "Formulating security operational guidelines for public parastatals to prevent unauthorized resource accesses and industrial espionage.",
      "Steering board committee responses on critical crisis situations including national strikes, supply-chain failures, and labor disputes.",
      "Establishing strict cybersecurity, data protection, and biometric audit frameworks in alignment with international security standards."
    ]
  },
  {
    title: "Strategic Public-Private Partnerships & Regional Accords",
    description: "A masterful bridge between public sector mandates and commercial corporate strategies. He enables international joint ventures, regional conglomerates, and local operators to find synergy under strict sovereign regulatory guidelines.",
    details: [
      "Drafting and negotiating highly complex multi-lateral Memorandums of Understanding (MoUs) and service-level treaties.",
      "Advising multinational security and tech corporations on local localizing policies, tax schemes, and joint-ownership mandates.",
      "Designing long-term compliance strategies that convert standard regulatory duties into durable corporate competitive advantages.",
      "Pioneering digital certificates that coordinate cross-border logistics alignments between national safety authorities."
    ]
  }
];

export const policyImpacts: PolicyDimension[] = [
  {
    title: "Legislative Drafting & Policy Consensus",
    description: "Philip has directly authored, drafted, and secured regulatory approvals for a dozen major industrial policy guidelines in East Africa, organizing and moderating over 100 high-visibility public feedback forums with key private actors and defense agencies.",
    stat: "12+",
    statLabel: "Draft Regulations Passed"
  },
  {
    title: "Labor Security, Equality & Welfare Reforms",
    description: "Orchestrated and enforced the first universal minimum wage model for private security guards, transforming the economic security of over 300,000 guards by elevating living standards while maintaining operational sanity.",
    stat: "300k+",
    statLabel: "Workers Standardized"
  },
  {
    title: "Strategic Inter-Agency Intelligence Networks",
    description: "Engineered and standard-set the secure electronic interface linking private security control bases to the national policing grid, elevating the national response rating for local emergencies to maximum efficiency.",
    stat: "100%",
    statLabel: "Data Integration Rate"
  },
  {
    title: "Revenue Restructuring & Fiscal Sovereignty",
    description: "Restructured collection tariffs, automated the payment registry, and turned a formerly state-funded council into a fully self-funding agency generating over KSh 340 Million in sovereign revenues.",
    stat: "340M+",
    statLabel: "Sovereign Revenue Restructured"
  }
];

export const keyAchievements: AchievementItem[] = [
  {
    id: "ach-regulated",
    metric: "3,000",
    suffix: "+",
    label: "Secured Entities",
    context: "Security corporate operations monitored, vetted, and regulated nationwide to maintain national defense guidelines."
  },
  {
    id: "ach-budget",
    metric: "KSh 1.2",
    suffix: "B+",
    label: "Budget Oversight",
    context: "Cumulative public finance allocations managed and audited with immaculate accountability and flawless legal compliance."
  },
  {
    id: "ach-staff",
    metric: "100",
    suffix: "+",
    label: "Direct Executives Led",
    context: "Led inter-disciplinary cohorts of legal, compliance, finance, and technical experts toward unified institutional targets."
  },
  {
    id: "ach-experience",
    metric: "15",
    suffix: "+",
    label: "Years Governance Presence",
    context: "Guiding policy and public sector administration under three separate legislative cabinets."
  }
];

export const publicationsArchive: PublicationItem[] = [
  {
    id: "pub-1",
    title: "Regulatory Modernization in Developing Nations: A Private Security Framework for Kenya and East Africa",
    type: "Policy Paper",
    publisher: "East African School of Governance & Public Policy",
    date: "October 2023",
    summary: "This seminal policy paper outlines the legal hurdles, administrative frameworks, and technical architectures necessary to successfully integrate informal or fragmented security providers into the formal national security grid of developing nations. Grounded in Kenyan case studies under the PSRA, it presents a model for biometric identity registries and standardized professional curricula as a pathway to establishing sovereign security stability.",
    tags: ["Regulation", "National Security", "Digital Identity", "Policy Design"]
  },
  {
    id: "pub-2",
    title: "Operationalizing Public Finance Management Acts: Corporate Compliance Beyond Audit Sheets",
    type: "White Paper",
    publisher: "Institute of Certified Public Accountants of Kenya (ICPAK)",
    date: "March 2021",
    summary: "A practical guide written for accounting officers, public board directors, and audit chairs navigating the strict requirements of the PFM Act 2012. The white paper discusses methods to go beyond simple paper audits, recommending systems that reconcile performance outcomes with treasury cash flow protocols, and introducing metrics to measure corruption resilience structures in state-owned enterprises.",
    tags: ["Finance", "Auditing", "State Corporations", "PFM Act"]
  },
  {
    id: "pub-3",
    title: "The Future of Security Oversight: Coordinated Public-Private Cooperation in National Emergency Recovery",
    type: "Analysis",
    publisher: "Strategic Security & Defense Review",
    date: "February 2020",
    summary: "This comprehensive research analyzes the strategic utility of deploying certified, licensed, and standard-vetted private security personnel as auxiliary sensor nodes during national disasters and civil emergencies. It recommends digital communication templates, joint tactical operations command protocols, and multi-lateral liability frameworks to safely bridge state police agencies with private guard squads.",
    tags: ["Public Safety", "Intelligence Shared", "Interagency Alliance"]
  }
];

export const educatorMemberships = {
  education: [
    {
      degree: "Master of Business Administration (MBA) - Corporate Governance & Strategic Management",
      institution: "University of Nairobi (UON) - Evaluated on strategic board systems, global policy directives and fiduciary oversight.",
      period: "2010 - 2012"
    },
    {
      degree: "Bachelor of Commerce (Finance & Accounting double-major option)",
      institution: "Kenyatta University (KU) - Intensive grounding in financial engineering, corporate reporting, and public accounts structures.",
      period: "2001 - 2005"
    },
    {
      degree: "Advanced Program in Regulatory Leadership & State Enterprise Administration",
      institution: "Kenya School of Government (KSG) - Specializing in parastatal law, public-policy formulations, and legislative drafting.",
      period: "2015"
    }
  ],
  memberships: [
    {
      title: "Fellow & Certified Public Accountant (CPA-K)",
      organization: "Institute of Certified Public Accountants of Kenya (ICPAK)",
      idNumber: "Active Member • Registration Number 7183"
    },
    {
      title: "Certified Public Secretary (CPS-K)",
      organization: "Institute of Certified Public Secretaries of Kenya - Advancing board accountability guidelines and corporate secretarial standards."
    },
    {
      title: "Active Member & Corporate Fellow",
      organization: "Kenya Institute of Management (KIM) - Leading executive seminars on risk mitigation and digital policy structures."
    },
    {
      title: "Appointed State Board Representative",
      organization: "National Security Consultative Council - Coordinating national-level crisis response and corporate service synchronizations."
    }
  ]
};

export const mediaSpeakingEvents = [
  {
    id: "event-1",
    title: "Main Panelist: Structural Integration of Digitized Systems in State Security Oversight Networks",
    event: "East Africa Security Congress & Digital Policy Forum",
    location: "KICC, Nairobi",
    date: "May 2024"
  },
  {
    id: "event-2",
    title: "Keynote Address: Enhancing Ethical Financial Audits and Treasury Sanity within East African Public Sectors",
    event: "Annual State Corporations Governance Symposium",
    location: "Mombasa, Kenya",
    date: "October 2023"
  },
  {
    id: "event-3",
    title: "Invited Expert: Policy Harmonization for Civil Registries and Digital Vetting Paradigms",
    event: "Kenya Citizens Assemblies on Public Service Transformation",
    location: "Nairobi School of Government",
    date: "January 2022"
  }
];

export const professionalGallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Keynote Address to Civic Leaders & Regional Assemblies",
    event: "East Africa Security Congress",
    year: "2024",
    category: "Speaking",
    imageUrl: "/images/philip_podium_address_1790608633190.jpg"
  },
  {
    id: "gal-2",
    title: "Strategic Deliberations with Corporate & Parastatal Boards",
    event: "Annual Governance Symposium",
    year: "2023",
    category: "Boardroom",
    imageUrl: "/images/philip_board_speech_1790608644844.jpg"
  },
  {
    id: "gal-3",
    title: "National Security Delegation & State Oversight Assembly",
    event: "PSRA State Briefing",
    year: "2023",
    category: "Official",
    imageUrl: "/images/philip_state_blue_1790608619748.jpg"
  },
  {
    id: "gal-4",
    title: "Executive Office Governance & Statutory Policy Directives",
    event: "Office of the Chief Executive Officer",
    year: "2024",
    category: "Official",
    imageUrl: "/images/philip_executive_desk_1790608609248.jpg"
  }
];
