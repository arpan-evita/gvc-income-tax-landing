import { FAQItem, IndustryItem, ProblemItem, HubItem, EntityTaxRule } from './types';

export const PROBLEMS_DATA: ProblemItem[] = [
  {
    id: 'section-notices',
    title: 'Income Tax Notices from the IT Department',
    iconName: 'AlertTriangle',
    description: 'A notice under Section 143(1), 143(2), or Section 148 arrives without warning. Most Gurgaon business owners panic because they don’t understand the 30-day response deadline. Mismatches between ITR filings and AIS data — unreported interest, TDS discrepancies, high-value transactions — are leading triggers. Ignoring notices leads to ex-parte orders, penalties under Section 271(1)(b), and prosecution. Dealing with the Assessing Officer without CA representation is often worse financially than the original demand.',
    mitigation: 'GVC handles direct notice assessment representation. We draft legal submissions, upload supporting records to the digital e-portal, and satisfy queries raised under Scrutiny/Reassessment pipelines with absolute precision.'
  },
  {
    id: 'ais-mismatch',
    title: 'AIS Mismatches and Form 26AS Reconciliation Errors',
    iconName: 'RefreshCw',
    description: 'The Annual Information Statement (AIS) now captures every financial transaction — bank interest, stock trades, property purchases, foreign remittances. When your ITR doesn’t match AIS data, the system auto-generates a notice. A startup founder in Cyber City recently faced a Section 143(1)(a) demand because his company’s fixed deposit interest wasn’t reported — Rs. 47,000 in tax plus interest. Form 26AS reconciliation before filing isn’t optional anymore — it’s survival.',
    mitigation: 'We establish seamless transaction-level reconciliations of form 26AS, AIS, and your internal books of accounts, correcting any discrepancies before submission to avoid automated warning signals.'
  },
  {
    id: 'tds-interest',
    title: 'TDS Mismatch and Compliance Failures',
    iconName: 'DollarSign',
    description: 'Every business deducting TDS on salary, professional fees, rent, or contractor payments must file quarterly returns and issue Form 16/16A. When TDS deposited doesn’t match the deductee’s Form 26AS, relationships suffer. Non-filing of Form 26QB (property) or Form 26QC (rent) attracts penalties of Rs. 200/day under Section 234E, plus expense disallowance under Section 40(a)(ia). A trading company on Sohna Road lost Rs. 3.2 lakh in disallowed expenses because their accountant missed quarterly TDS filing for three consecutive quarters.',
    mitigation: 'Our partners reconcile bank schedules with the government system quarterly, rectifying mismatches and producing error-free filing routines across Cyber City and Sohna Road enterprises.'
  },
  {
    id: 'advance-tax',
    title: 'Advance Tax Payment Errors and Interest Penalties',
    iconName: 'Clock',
    description: 'Businesses with tax liability exceeding Rs. 10,000 must pay Advance Tax quarterly (June 15, September 15, December 15, March 15). Many Gurgaon businesses fail to estimate correctly, triggering Section 234B (1% per month) and Section 234C interest. This is common for seasonal businesses, ecommerce sellers with irregular cash flows, and professionals who underestimate income. A manufacturing SME in Udyog Vihar paid Rs. 1.8 lakh in unnecessary interest because their advance tax was paid in a single March installment instead of quarterly.',
    mitigation: 'We design quarterly tax computation routines that track real-time turnover margins, maintaining proper Advance Tax installments to protect capital from 12% annual interest leaks.'
  },
  {
    id: 'scrutiny-docs',
    title: 'Tax Scrutiny Risk from Inadequate Documentation',
    iconName: 'FileText',
    description: 'When the Assessing Officer selects your case for scrutiny under Section 143(2), the quality of your documentation determines the outcome. Most businesses in Gurgaon’s DLF Corporate Hubs maintain digital records but lack systematic documentation mapped to ITR line items. Without organized invoices, bank statements, investment proofs, and TDS certificates, even legitimate deductions get disallowed. The cost of poor documentation isn’t just the additional tax — it’s the professional fees, time lost, and stress of assessment proceedings.',
    mitigation: 'We structure and organize all business bills, partner allocations, capital additions, and travel overheads into clean, audit-ready structured digital folders mapped to your actual return files.'
  },
  {
    id: 'missed-deductions',
    title: 'Missed Deductions and Overpaid Taxes',
    iconName: 'Percent',
    description: 'Most MSMEs fail to utilize the full spectrum of deductions available — Section 80C (Rs. 1.5 lakh), 80D (health insurance), 80GG (rent), 80IAC (startup tax holiday), 44AD (presumptive taxation). A professional services firm near Golf Course Road overpaid Rs. 2.4 lakh annually for three years because they didn’t optimize partner remuneration structure and missed Section 80CCD(1B) NPS contributions. Without strategic Tax Planning, you’re voluntarily funding the government instead of reinvesting in growth.',
    mitigation: 'GVC drafts strategic year-round tax-saving frameworks, mapping corporate structures and salary packages to recover typical lost margins of 15% to 30% of total tax outgo.'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'startups',
    name: 'Startups',
    iconName: 'Rocket',
    description: 'ESOPs, 80IAC, Section 56, Funding Taxation. From DLF Cyber Hub to Sohna Road incubators, we help secure 80-IAC tax holidays, structure founder salaries, and navigate Section 56 valuations.',
    blueprint: {
      keyIncentive: 'DPIIT tax benefits including Section 80-IAC (100% tax holiday for 3 years out of 10) & ESOP tax deferrals.',
      criticalForm: 'Form 56(2)(viib) validation report prior to investment rounds to claim Angel Tax relief.',
      filingFrequency: 'Ongoing expert consultation on corporate filings, quarterly TDS, and funding round valuations.',
      commonRisk: 'Section 56(2)(viib) valuations missing, or poor planning of founder shares leading to high tax exposure.'
    }
  },
  {
    id: 'msmes',
    name: 'MSMEs',
    iconName: 'Building2',
    description: 'Presumptive Taxation (44AD/44ADA), Composition. We optimize choice between presumptive and standard taxation regimes to maximize direct tax efficiency and protect working capital.',
    blueprint: {
      keyIncentive: 'Section 44AD / 44ADA allowing relaxed accounting burdens and simplified presumptive rates.',
      criticalForm: 'ITR-3 or ITR-4 depending on the scale of independent practice & turnover levels.',
      filingFrequency: 'Quarterly Advance Tax projections matched against business ledger receipts.',
      commonRisk: 'Crossing Rs. 2 Crore turnover threshold without establishing compliance audit systems.'
    }
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    iconName: 'Factory',
    description: 'Depreciation, Export Benefits, GST-ITC. Serving units in Manesar, IMT Manesar, and Sohna Road dealing with heavy capex, depreciation schedules, and multi-state compliance.',
    blueprint: {
      keyIncentive: 'Section 32 depreciation allowances and Section 35AD weighted deductions for specified infrastructure.',
      criticalForm: 'Form 3CEB and Form 3CD audit logs matching manufacturing machinery blocks.',
      filingFrequency: 'Quarterly compliance checks, bi-annual physical asset valuations, and GST alignment reports.',
      commonRisk: 'Inaccurate coordination between GST Input Tax Credits and Income Tax depreciation claims.'
    }
  },
  {
    id: 'trading',
    name: 'Trading & Retail',
    iconName: 'Store',
    description: 'Inventory Valuation, Turnover Audit, Multi-Branch records. Standardizing methods for entities in Udyog Vihar and Gurgaon Old City to satisfy Indian ceiling thresholds.',
    blueprint: {
      keyIncentive: 'Utilize Section 44AD schemes or structured inventory adjustments to lower net taxable profits.',
      criticalForm: 'Form ITR-5 / ITR-6 with detailed stock schedules and multi-state branching allocations.',
      filingFrequency: 'Monthly stock balance valuations and year-end consolidated corporate filings.',
      commonRisk: 'Breaching cash deposit/withdrawal limitations under Section 269ST & Section 194N rules.'
    }
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce',
    iconName: 'ShoppingCart',
    description: 'Section 194-O, TCS, Marketplace Reconciliation. Custom automation frameworks for sellers on Amazon, Flipkart, or Meesho to reconcile payouts and claim appropriate credits.',
    blueprint: {
      keyIncentive: 'TCS adjustment with real-time matching against 26AS directories to recapture lost credits.',
      criticalForm: 'Form 26AS reconciled monthly paired with GSTR-1 and GSTR-3B filings.',
      filingFrequency: 'Monthly dashboard ledger matching to avoid double taxation on Aggregator charges.',
      commonRisk: 'Omission of TDS credits withheld by marketplace under Section 194-O (1% rate).'
    }
  },
  {
    id: 'service-businesses',
    name: 'Service Businesses',
    iconName: 'Laptop',
    description: '44ADA, TDS on Professional Fees. IT consultancies and agencies across Cyber City and DLF corporate hubs optimizing partner payouts and expense structures.',
    blueprint: {
      keyIncentive: 'Deemed presumptive income of 50% under Section 44ADA for receipt sizes up to Rs. 50 lakh.',
      criticalForm: 'Form ITR-4 aligned with Section 194J tax certificates issued by enterprise clients.',
      filingFrequency: 'Bi-annual advance tax modeling and annual simplified online return submission.',
      commonRisk: 'Failing to track business travel and utility overheads correctly inside books of accounts.'
    }
  },
  {
    id: 'professionals',
    name: 'Professionals',
    iconName: 'Briefcase',
    description: 'Doctors, Lawyers, Architects. Custom tax structure designs for individual partners in DLF Phase clinics and Golf Course Road boutique offices.',
    blueprint: {
      keyIncentive: 'Strategic partner remuneration schedules, home office deductions, and asset lease write-offs.',
      criticalForm: 'Form ITR-3 or structured Partnership ITR-5 with professional logs.',
      filingFrequency: 'Quarterly tax estimations, bi-annual advance tax installments, and annual audits.',
      commonRisk: 'Incorrect mixing of personal investments and professional operational expenses.'
    }
  }
];

export const HUBS_DATA: HubItem[] = [
  {
    id: 'cyber-city',
    name: 'Cyber City',
    description: 'Serving software companies, MNC headquarters, and professional services near DLF Cyber Hub.',
    coordinates: { x: 50, y: 30 },
    address: 'GVC Towers, DLF Cyber City, Phase 2, Sector 24, Gurgaon, Haryana - 122002',
    prominentSectors: ['Software & MNCs', 'Cross-Border SaaS', 'Funding Advisory'],
    contactPhone: '+91 124 496 9001'
  },
  {
    id: 'udyog-vihar',
    name: 'Udyog Vihar',
    description: 'Direct support for manufacturing units, export houses, and trading operations in Phases I-V.',
    coordinates: { x: 62, y: 22 },
    address: 'Suite 405, Sector 18, Udyog Vihar Industrial Area, Gurgaon, Haryana - 122015',
    prominentSectors: ['Manufacturing Units', 'Export Operations', 'SME Audit Links'],
    contactPhone: '+91 124 496 9002'
  },
  {
    id: 'golf-course-road',
    name: 'Golf Course Road',
    description: 'Premium tax services and partner salary structural optimization for boutique agencies.',
    coordinates: { x: 75, y: 55 },
    address: 'Level 8, Horizon Center, Golf Course Road, Sector 43, Gurgaon, Haryana - 122003',
    prominentSectors: ['Professional Firms', 'PE & VC Funds', 'LLP Partner Desks'],
    contactPhone: '+91 124 496 9003'
  },
  {
    id: 'sohna-road',
    name: 'Sohna Road',
    description: 'Compliance consulting and local support for emerging retail, startups, and MSME clusters.',
    coordinates: { x: 40, y: 78 },
    address: 'Office 212, Spaze i-Tech Park, Sohna Road, Sector 49, Gurgaon, Haryana - 122018',
    prominentSectors: ['Retail Logistics', 'Incubator Startups', 'E-com Hubs'],
    contactPhone: '+91 124 496 9004'
  },
  {
    id: 'manesar',
    name: 'Manesar Industrial Hub',
    description: 'Heavy capex planning, depreciation advisory, and tax audits for automotive / logistics sectors.',
    coordinates: { x: 20, y: 88 },
    address: 'GVC Compliance Lab, Sector 8, IMT Manesar, Gurgaon, Haryana - 122051',
    prominentSectors: ['Automotive Supply', 'Heavy Plant Clusters', 'Corporate Audits'],
    contactPhone: '+91 124 496 9005'
  }
];

export const COMPLIANCE_RULES: EntityTaxRule[] = [
  {
    entityType: 'Proprietorship',
    keyForms: 'ITR-3 / ITR-4',
    taxRate: 'Individual Slab Rates (Up to 30% + Surcharge)',
    auditRequirement: 'Mandatory if business turnover exceeds Rs. 1 Crore (Rs. 10 Cr if cash transactions under 5%)',
    tip: 'Option of presumptive taxation under Section 44AD avoids tedious record bookkeeping tasks.'
  },
  {
    entityType: 'Partnership / LLP',
    keyForms: 'ITR-5',
    taxRate: '30% Flat Rate',
    auditRequirement: 'Mandatory once turnover crosses threshold. LLP gets corporate tax structure benefits',
    tip: 'Incorporate partner salary details within partner agreement prior to fiscal startup.'
  },
  {
    entityType: 'Pvt Ltd Company',
    keyForms: 'ITR-6',
    taxRate: '22% Base Rate (New manufacturing 15% under Section 115BAB)',
    auditRequirement: 'Compulsory statutory and tax audits regardless of revenue size or turnover status',
    tip: 'Timely coordinate GST Input Tax Credit claims with Income Tax depreciation calculations.'
  },
  {
    entityType: 'Startups (80-IAC)',
    keyForms: 'ITR-6',
    taxRate: '0% Tax Holiday (3 consecutive years out of 10)',
    auditRequirement: 'Compulsory statutory and corporate compliance check annually',
    tip: 'Submit Form 56(2)(viib) validation prior to investment rounds to secure Angel Tax immunity.'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'Filing',
    question: 'Who needs to file an income tax return in Gurgaon?',
    answer: 'Any business entity with taxable income exceeding the basic exemption limit must file an ITR. For individuals and HUFs, the limit is Rs. 3 lakh; for companies and LLPs, filing is mandatory regardless of income. Additionally, businesses claiming deductions, carrying forward losses, or holding foreign assets must file. Even below-threshold filing is recommended for financial credibility with banks and investors. GVC Audit provides Income Tax Filing in Gurgaon for all entity types.'
  },
  {
    category: 'Filing',
    question: 'What is the due date for ITR filing for businesses?',
    answer: 'For businesses not requiring tax audit, the due date is July 31 of the assessment year. Businesses requiring Tax Audit under Section 44AB must file by October 31 (November 30 for transfer pricing cases). TDS returns follow quarterly deadlines. Missing these attracts Section 234F penalties up to Rs. 5,000 and interest under Sections 234A/B/C. Our compliance calendar ensures you never miss a deadline.'
  },
  {
    category: 'Filing',
    question: 'What documents are required for business tax filing?',
    answer: 'Businesses need: PAN card, Aadhaar, bank statements, GST returns (GSTR-1, GSTR-3B), financial statements (balance sheet, P&L), Form 16A/16B for TDS credits, Form 26AS and AIS, investment proofs for Section 80C-80U deductions, and audit reports if applicable. For companies, MCA annual return copies are also required. We provide a customized checklist based on your entity type and business model.'
  },
  {
    category: 'Filing',
    question: 'What is the difference between ITR-3, ITR-4, ITR-5, and ITR-6?',
    answer: 'ITR-3 is for individuals/HUFs with business/profession income. ITR-4 (Sugam) is for those opting for presumptive taxation under Sections 44AD, 44ADA, or 44AE. ITR-5 is for LLPs, AOPs, and BOIs. ITR-6 is exclusively for companies not claiming Section 11 exemption. Choosing the wrong form results in a defective return notice from the Income Tax Department.'
  },
  {
    category: 'Audit',
    question: 'What is tax audit under Section 44AB and who needs it?',
    answer: 'Tax Audit under Section 44AB is mandatory examination of financial records by a Chartered Accountant. It applies when: business turnover exceeds Rs. 1 crore (Rs. 10 crore if cash transactions under 5%), or professional gross receipts exceed Rs. 50 lakh. The audit report (Form 3CA/3CB + 3CD) must be filed before October 31. We provide complete Tax Audit Services for businesses across Gurgaon and Delhi NCR.'
  },
  {
    category: 'Filing',
    question: 'What are the penalties for late ITR filing?',
    answer: 'Section 234F imposes a late filing fee of up to Rs. 5,000 (Rs. 1,000 if income below Rs. 5 lakh). Section 234A charges 1% per month interest on unpaid tax. Late filers also lose the right to carry forward business losses (except house property) and may face restricted deductions. In severe cases, Section 271F penalties apply. Timely filing through a professional Tax Consultant in Gurgaon eliminates these risks.'
  },
  {
    category: 'Advisory',
    question: 'Can I file ITR myself or do I need a CA?',
    answer: 'Individuals with simple salary income can file independently. Business owners should engage a qualified CA — business taxation involves depreciation, inventory valuation, GST reconciliation, TDS compliance, and Advance Tax estimation. A professional Income Tax Consultant in Gurgaon ensures accurate filing, maximizes deductions, handles audits, and represents you during assessments. The cost is significantly lower than potential penalties.'
  },
  {
    category: 'Filing',
    question: 'What is Advance Tax and when must businesses pay it?',
    answer: 'Advance Tax is prepayment of estimated tax liability in quarterly installments. Businesses with tax liability exceeding Rs. 10,000 must pay: 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15. Failure attracts interest under Section 234B (1% per month on shortfall) and Section 234C (interest on deferred installments). We provide quarterly computation and reminder services.'
  },
  {
    category: 'TDS',
    question: 'What is TDS compliance and why does my business need it?',
    answer: 'TDS (Tax Deducted at Source) requires businesses to deduct tax at prescribed rates on payments including salaries (Section 192), professional fees (Section 194J — 10%), rent (Section 194I), and contractor payments (Section 194C — 1%/2%), interest (Section 194A), and dividends (Section 194). Quarterly returns in Forms 24Q, 26Q, 27Q must be filed by the due dates: Q1 (July 31), Q2 (October 31), Q3 (January 31), Q4 (May 31). Deposit TDS by the 7th of the following month. Non-compliance attracts interest under Section 201(1A) and penalties under Section 271H.'
  },
  {
    category: 'Advisory',
    question: 'How can tax planning reduce my business tax liability?',
    answer: 'Strategic Tax Planning reduces liability through: timely investments in Section 80C instruments (ELSS, PPF, LIC — up to Rs. 1.5 lakh), Section 80D health insurance, Section 80CCD(1B) NPS (additional Rs. 50,000), optimizing business structure (proprietorship vs. LLP vs. company), claiming depreciation benefits under Section 32, Section 35 R&D deductions, and Section 54/54EC capital gains exemptions. Effective planning requires year-round professional management, not last-minute March rush.'
  },
  {
    category: 'Advisory',
    question: 'What is the new tax regime vs old tax regime for businesses?',
    answer: 'The old regime allows deductions under Sections 80C, 80D, HRA, and other exemptions with slab rates up to 30%. The new regime (default from FY 2023-24) offers lower slab rates but disallows most deductions. Businesses themselves don’t choose regimes, but proprietors and partners do. For those with significant investments, the old regime often yields lower tax. We run comparative calculations to determine the optimal choice.'
  },
  {
    category: 'Notices',
    question: 'How do I respond to an income tax notice?',
    answer: 'First, read carefully to understand if it’s an inquiry, scrutiny, or demand. Verify the DIN on the e-filing portal for authenticity. Gather relevant documents and respond within the timeline (typically 15-30 days). For scrutiny notices, engage a CA in Gurgaon with assessment experience. Never ignore notices — non-response leads to ex-parte assessments under Section 144 with adverse findings that are difficult to overturn.'
  },
  {
    category: 'Advisory',
    question: 'What is Form 26AS and AIS? Why are they important?',
    answer: 'Form 26AS is your tax credit statement showing TDS deducted, advance tax paid, self-assessment tax, and refunds. AIS (Annual Information Statement) is comprehensive — including interest, dividends, securities transactions, foreign remittances, and off-market credits. The Income Tax Department cross-references your ITR with AIS data. Discrepancies are the leading cause of tax notices. We reconcile both before every filing.'
  },
  {
    category: 'Advisory',
    question: 'What deductions are available under Section 80C to 80U?',
    answer: 'Section 80C: Up to Rs. 1.5 lakh (PPF, ELSS, LIC, tuition fees, principal repayment). 80D: Health insurance up to Rs. 25,000 (Rs. 50,000 for senior citizens). 80CCD(1B): Additional NPS Rs. 50,000. 80E: Education loan interest. 80G: Charitable donations. 80GG: Rent for those without HRA. 80JJAA: Employment generation. 80IAC: 100% tax holiday for eligible startups. We ensure you claim every deduction applicable.'
  },
  {
    category: 'Advisory',
    question: 'Do startups get any tax benefits in India?',
    answer: 'Yes. DPIIT-recognized startups enjoy: Section 80IAC (100% tax deduction for 3 consecutive years out of 10), Section 56(2)(viib) exemption (Angel Tax relief on investments up to Rs. 25 crore), Section 54GB (LTCG exemption for investment in startup equity), and relaxed compliance norms. Professional Startup Tax Consultant guidance ensures optimal benefit utilization and proper documentation.'
  },
  {
    category: 'Advisory',
    question: 'What is presumptive taxation under Section 44AD/44ADA?',
    answer: 'Section 44AD: Businesses with turnover up to Rs. 2 crore declare income at 6% (digital) or 8% (cash) of gross receipts — no detailed bookkeeping needed. Section 44ADA: Professionals (consultants, doctors, architects) with receipts up to Rs. 50 lakh declare 50% as taxable income. While simplifying compliance, taxpayers cannot claim expense deductions or set off losses. We analyze whether presumptive or regular taxation saves more tax for your specific situation.'
  },
  {
    category: 'Filing',
    question: 'How long should I maintain tax records?',
    answer: 'The Income Tax Act requires maintaining books and documents for eight years from the end of the relevant assessment year. This includes invoices, receipts, bank statements, contracts, depreciation schedules, TDS certificates, GST returns, and audit reports. For immovable property transactions, retain for 12 years. The Assessing Officer can reopen assessments up to 8 years back under Section 148.'
  },
  {
    category: 'Filing',
    question: 'Can a revised return be filed if I made a mistake?',
    answer: 'Yes. A revised return under Section 139(5) can be filed before the end of the relevant assessment year or before assessment completion, whichever is earlier. For FY 2024-25 (AY 2025-26), the deadline is March 31, 2027. Revised returns can correct income omissions, wrong deductions, and incorrect details. However, deliberately filing false returns attracts Section 270A penalty up to 200% of tax on underreported income.'
  },
  {
    category: 'Advisory',
    question: 'What is the tax rate for LLPs and private limited companies?',
    answer: 'Domestic companies: Base rate 22% (15% for new manufacturing companies under Section 115BAB), plus surcharge and cess. LLPs: Flat 30% on total income, plus 12% surcharge (if income > Rs. 1 crore) and 4% cess. LLPs distribute profits to partners without dividend distribution tax, often making them more tax-efficient than companies for closely-held businesses. The choice requires careful analysis of projected revenue and distribution plans.'
  },
  {
    category: 'Advisory',
    question: 'How do I choose the right tax consultant in Gurgaon?',
    answer: 'Look for: ICAI membership (verify on icai.org), relevant industry experience, local Gurgaon presence for accessibility, comprehensive service range (filing, planning, audit, representation), technology adoption (secure portals, not WhatsApp), transparent pricing, and positive client references. The right Tax Consultant Near Me should be a year-round partner, not a seasonal filer. GVC Audit serves businesses across Cyber City, DLF, Udyog Vihar, Golf Course Road, Sohna Road, Manesar, and all of Delhi NCR.'
  }
];
