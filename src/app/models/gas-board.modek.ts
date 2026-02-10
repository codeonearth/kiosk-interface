export interface GasBoard {
id: number;
  providerName: string;

  // Dropdown fields
  district?: string;
  subDistrict?: string;

  // Dynamic input flags (show/hide fields)
  businessPartnerNumber?: boolean;
  caNumber?: boolean;
  customerId?: boolean;
  bpNumber?: boolean;
  customerNumber?: boolean;
  cidNumber?: boolean;
  crnNumber?: boolean;
}