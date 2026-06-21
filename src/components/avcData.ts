// Verbatim copy and metadata for the AVC India Direct Tax Portal

export interface FAQItem {
  question: string;
  answer: string;
  category: "deadlines" | "regimes" | "documents" | "special";
}

export const AVC_FAQS: FAQItem[] = [
  {
    category: "deadlines",
    question: "What is the last date for ITR filing in Gurgaon for AY 2026-27?",
    answer: "For individuals, salaried employees, and freelancers, the last date to file an ITR for AY 2026-27 (FY 2025-26) is 31 July 2026. For taxpayers requiring a tax audit under Section 44AB, the extended deadline is typically 31 October 2026. Filing after these dates attracts a late fee under Section 234F."
  },
  {
    category: "deadlines",
    question: "What is the penalty for late ITR filing in India?",
    answer: "If you file your ITR after the due date (31 July 2026 for individuals), a late filing fee of ₹5,000 is charged under Section 234F. This is reduced to ₹1,000 if your total income does not exceed ₹5 lakh. Interest under Section 234A is also charged at 1% per month on unpaid tax."
  },
  {
    category: "special",
    question: "How much does ITR filing cost in Gurgaon?",
    answer: "ITR filing fees in Gurgaon typically range from ₹500–₹1,500 for simple salaried returns (ITR-1) to ₹2,000–₹8,000 for complex returns involving capital gains, business income, or foreign assets. AVC India provides a clear, transparent fee quote based on your income complexity before starting."
  },
  {
    category: "regimes",
    question: "Should I choose the new tax regime or old tax regime for AY 2026-27?",
    answer: "Under the new tax regime (default for AY 2026-27), income up to ₹12 lakh attracts zero tax via the Section 87A rebate, and the standard deduction is ₹75,000. The old regime offers more deductions (80C, 80D, HRA, home loan). The better choice depends on your actual deductions — a CA comparison is the only reliable way to decide."
  },
  {
    category: "deadlines",
    question: "Who should file an ITR in India?",
    answer: "You must file an ITR if your gross total income exceeds ₹2.5 lakh (₹3L for senior citizens, ₹5L for super-senior citizens), if you want to claim a refund, carry forward losses, hold foreign assets, or meet specific high-value transaction criteria such as deposits over ₹1 crore or foreign travel spend over ₹2 lakh."
  },
  {
    category: "special",
    question: "Can I file my income tax return online without visiting a CA office?",
    answer: "Yes. AVC India's ITR filing process is 100% online. You share documents via WhatsApp, email, or our secure portal. The CA reviews, prepares, and files your return without requiring a physical visit. E-verification via Aadhaar OTP completes the process digitally."
  },
  {
    category: "documents",
    question: "Which ITR form should I use as a salaried employee in Gurgaon?",
    answer: "Most salaried employees in Gurgaon with income from salary, one house property, and interest income (total income up to ₹50L) should file ITR-1 (Sahaj). If you have capital gains from stocks or mutual funds, two or more house properties, ESOPs, or are a director in a company, you need ITR-2. If you have freelance or business income alongside your salary, you need ITR-3."
  },
  {
    category: "documents",
    question: "What documents are required for ITR filing in Gurgaon?",
    answer: "The basic documents required for ITR filing include PAN card, Aadhaar card, Form 16 (for salaried employees), bank statements, investment proofs (LIC, PPF, ELSS), Form 26AS, Annual Information Statement (AIS), and home loan interest certificate if applicable. Freelancers and business owners also need their income-expense records and GST returns."
  },
  {
    category: "documents",
    question: "What is Form 26AS and why is it important for ITR filing?",
    answer: "Form 26AS is your Tax Credit Statement — it shows all TDS deducted on your income, advance tax paid, self-assessment tax paid, and high-value financial transactions. It is the primary document the Income Tax Department uses to verify your ITR. Reconciling Form 26AS with your AIS and actual income before filing is essential to avoid notices."
  },
  {
    category: "documents",
    question: "What is the Annual Information Statement (AIS)?",
    answer: "The Annual Information Statement (AIS) is a comprehensive tax document available on the Income Tax portal that shows all financial information the government has about you — salary, interest, dividends, mutual fund transactions, property purchases, foreign remittances, and more. It is more detailed than Form 26AS and must be reviewed before filing your ITR."
  },
  {
    category: "deadlines",
    question: "Can I file income tax return for previous years now?",
    answer: "Yes. You can file an updated return (ITR-U) under Section 139(8A) for up to 24 months from the end of the relevant assessment year. For AY 2024-25, the ITR-U filing window is open. Note that ITR-U attracts an additional tax of 25%–50% on the incremental tax liability depending on when it is filed."
  },
  {
    category: "special",
    question: "What happens if I receive an income tax notice?",
    answer: "Do not ignore a tax notice. The most common notice — Section 143(1) intimation — may simply confirm your return or demand a small adjustment. More serious notices under Section 148 (reassessment) or 139(9) (defective return) require prompt professional response. AVC India provides income tax notice support including drafting responses and departmental representation."
  },
  {
    category: "regimes",
    question: "What is Section 87A rebate and who can claim it?",
    answer: "Section 87A provides a tax rebate of ₹60,000 for taxpayers under the new tax regime whose total income (after deductions) does not exceed ₹12 lakh for FY 2025-26. Under the old regime, the rebate is ₹12,500 for income up to ₹5 lakh. The rebate reduces your tax liability to zero if applicable."
  },
  {
    category: "special",
    question: "How can a freelancer in Gurgaon file income tax?",
    answer: "Freelancers in Gurgaon can file ITR-3 (if maintaining books of accounts) or ITR-4 under the presumptive taxation scheme (Section 44ADA) if professional receipts do not exceed ₹75 lakh and they opt for a 50% deemed profit rate. They must reconcile all TDS deducted by clients via Form 16A and Form 26AS before filing."
  },
  {
    category: "deadlines",
    question: "What is the income tax due date for businesses in Gurgaon?",
    answer: "For businesses and professionals requiring a tax audit under Section 44AB (turnover above ₹1 crore for business, ₹50 lakh for professionals with certain exceptions), the ITR due date for AY 2026-27 is typically 31 October 2026. For businesses not requiring audit, the due date is 31 July 2026."
  },
  {
    category: "special",
    question: "Can I revise my filed ITR if I made a mistake?",
    answer: "Yes. Under Section 139(5), you can file a revised ITR before the end of the assessment year (31 March 2027 for AY 2026-27) or before the assessment is completed, whichever is earlier. However, belated returns (filed after the due date) can also be revised. Contact AVC India as soon as you identify any discrepancy."
  },
  {
    category: "regimes",
    question: "What is advance tax and when should I pay it in Gurgaon?",
    answer: "Advance tax is income tax paid in instalments during the financial year if your estimated tax liability exceeds ₹10,000. Instalments are due on 15 June (15%), 15 September (45%), 15 December (75%), and 15 March (100%). Failure to pay adequate advance tax attracts interest under Sections 234B and 234C at 1% per month."
  },
  {
    category: "special",
    question: "What tax deductions can startup founders in Gurgaon claim?",
    answer: "Startup founders who receive director remuneration can claim all standard deductions (80C, 80D, HRA) as applicable. ESOPs are taxed as perquisites at exercise and as capital gains at sale — requiring careful ITR-2 or ITR-3 disclosure. Section 54F exemption can be claimed on long-term capital gains if proceeds are reinvested in residential property. Angel funding received under certain conditions is taxable under Section 56(2)(viib) — proper valuation compliance is essential."
  },
  {
    category: "special",
    question: "How long does it take to get an income tax refund in India?",
    answer: "Most income tax refunds for electronically filed and e-verified returns are processed within 15–45 days of filing, credited directly to the pre-validated bank account linked to your PAN. Refunds can be delayed if there are discrepancies in your AIS, if the return is under manual scrutiny, or if the bank account details are incorrect."
  },
  {
    category: "special",
    question: "Is it necessary to hire a CA for income tax filing, or can I file myself?",
    answer: "You can self-file a straightforward salaried return (ITR-1) on the Income Tax portal. However, a CA is advisable if you have multiple income sources, capital gains, business income, foreign assets, ESOPs, or have received a tax notice. A CA ensures accuracy, optimises deductions, selects the right tax regime, and provides professional accountability that self-filing cannot."
  }
];

export const INTRO_PARA_1 = `Gurgaon is one of India's most dynamic business cities — home to Fortune 500 headquarters, thriving startups, consulting firms, and a large community of working professionals with complex income profiles. Whether you earn a salary from a multinational in Cyber City, run a consultancy from Udyog Vihar, or manage a growing business on Golf Course Road, your income tax obligations are governed by the same Income Tax Act, 1961 — but your filing requirements can be significantly different.`;

export const INTRO_PARA_2 = `Filing an Income Tax Return (ITR) is not just a legal obligation. Done correctly, it is one of the most effective tools for financial planning, refund recovery, and long-term wealth management. A poorly filed return — or one that misses legitimate deductions — can cost you thousands, or invite unwanted scrutiny from the Income Tax Department.`;

export const INTRO_PARA_3 = `At AVC India, we do not simply 'file returns.' We review your complete income profile, reconcile your Annual Information Statement (AIS) and Form 26AS, identify every deduction and exemption you are entitled to, and file your return with precision. Our team of practising Chartered Accountants has deep experience serving individuals, freelancers, consultants, startup founders, and business owners across Gurgaon and the wider Delhi NCR region.`;

export const INTRO_PARA_4 = `For AY 2026-27 (Financial Year 2025-26), the Income Tax Department has introduced updated ITR forms, a revised new tax regime with zero tax on income up to ₹12 lakh under Section 87A, and tighter deadlines. Navigating these changes alone is difficult. With AVC India, you do not have to.`;

export const EDITORIAL_CONTENT = {
  p1: `Income tax filing in Gurgaon follows the same Income Tax Act, 1961 framework as the rest of India — but the city's unique professional landscape creates specific scenarios that require careful attention. Gurgaon has one of the highest concentrations of MNC employees, startup founders, and high-income consultants in the country, meaning the average taxpayer here often has more complex income than a standard salaried individual in a smaller city.`,
  p2: `Our deep professional filing is a comprehensive reconciliation. This involves cross-verifying your Form 16, AIS (Annual Information Statement), and TIS (Taxpayer Information Summary). Discrepancies between these documents are a primary trigger for tax notices; our process starts with a thorough digital reconciliation of these statements to ensure the data reported to the Income Tax Department matches your records perfectly.`,
  p3: `Similarly, strategic deduction planning is what many professionals are unaware of: specific exemptions under sections like 80CCD(1B) for additional NPS contributions. Professionally filing your return ensures you can optimize your investment records. Our Gurgaon-based CAs are well-versed in the specific financial nuances of local sectors—from IT and fintech to real estate and manufacturing.`,
  p4: `Finally, professional filing provides a safety net for the future. A correctly filed ITR is a crucial legal document used for visa applications, high-value loan approvals, and proving financial standing. Choosing a professional service like AVC India ensures that your financial history is built on a foundation of accuracy and legal integrity.`
};
