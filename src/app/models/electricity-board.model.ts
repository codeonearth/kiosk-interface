export interface ElectricityBoard {
  id: number;
  state: string;
  boardName: string;
  districtOrType?: string;

  consumerNumber: boolean;
  serviceNumber: boolean;
  connectionNumber: boolean;
  tenantNumber: boolean;
}