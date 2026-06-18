export interface FAQItem {
  question: string;
  answer: string;
  category: 'Filing' | 'Notices' | 'Advisory' | 'TDS' | 'Audit';
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  blueprint: {
    keyIncentive: string;
    criticalForm: string;
    filingFrequency: string;
    commonRisk: string;
  };
}

export interface ProblemItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  mitigation: string;
}

export interface HubItem {
  id: string;
  name: string;
  description: string;
  coordinates: { x: number; y: number };
  address: string;
  prominentSectors: string[];
  contactPhone: string;
}

export interface EntityTaxRule {
  entityType: string;
  keyForms: string;
  taxRate: string;
  auditRequirement: string;
  tip: string;
}

export interface ConsultationBooking {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  entityType: string;
  serviceRequested: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  bookedAt: string;
}
