export interface WaterBoard {
  id: number;
  boardName: string;
  serviceType?: string;

  consumerId: boolean;
  rrNumber: boolean;
  accountNo: boolean;
  billNumber: boolean;
  mobileNo: boolean;
  sequenceNo: boolean;
  connectionNo: boolean;
  applicationNo: boolean;
  customerId: boolean;
  kNumber: boolean;
  waterTaxNo: boolean;
  tapNo: boolean;
}