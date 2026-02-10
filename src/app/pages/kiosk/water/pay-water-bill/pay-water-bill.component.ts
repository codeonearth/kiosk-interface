import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { WaterService } from '../../../../core/services/kiosk/water.service';
import { WaterBoard } from '../../../../models/water-board.model';

@Component({
  selector: 'app-pay-water-bill',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pay-water-bill.component.html',
  styleUrls: ['./pay-water-bill.component.scss']
})
export class PayWaterBillComponent implements OnInit {

  // ===== FLOW CONTROL =====
  step: number = 1;
  isApartment: boolean = false;

  // ===== DROPDOWN DATA =====
  boards: string[] = [];
  wService: WaterBoard[] = [];
selectedDistrictOrType: string = '';
districtOrTypes: string[] = []; 
  // ===== SELECTED VALUES =====
  selectboard: string = '';
  selectedServiceId: number | null = null;
  selectService?: any;

  // ===== DYNAMIC INPUTS =====
  consumerNumber: string = '';
  serviceNumber: string = '';
  connectionNumber: string = '';
  tenantNumber: string = '';
groupedBoards: any[] = [];

consumerId: string = '';
  rrNumber: string = '';
  accountNo: string = '';
  billNumber: string = '';
  mobileNo: string = '';
  sequenceNo: string = '';
  connectionNo: string = '';
  applicationNo: string = '';
  customerId: string = '';
  kNumber: string = '';
  waterTaxNo: string = '';
  tapNo: string = '';




  constructor(private waterService: WaterService, private router: Router) {}

  ngOnInit(): void {
    this.loadStates();
  }

  // =============================
  // TYPE SELECT
  // =============================
  selectType(type: boolean) {
    this.isApartment = type;
    this.resetFlow();
  }

  resetFlow() {
    this.step = 1;
    this.selectboard = '';
    this.selectedServiceId = null;
    this.selectService = undefined;
    this.boards = [];
    this.districtOrTypes = [];
    this.consumerNumber = '';
    this.serviceNumber = '';
    this.connectionNumber = '';
    this.tenantNumber = '';
    this.consumerId = '';
    this.rrNumber = '';
    this.wService = [];
    this.accountNo = '';
    this.billNumber = '';
    this.mobileNo = '';
    this.sequenceNo = '';
    this.connectionNo = '';
    this.applicationNo = '';
    this.customerId = '';
    this.kNumber = '';
    this.waterTaxNo = '';
    this.tapNo = '';
  }

  // =============================
  // LOAD STATES
  // =============================
  loadStates() {
    this.waterService.getBoards().subscribe({
      next: (data) => {
        this.boards = data;
      },
      error: (err) => {
        console.error('Error loading states:', err);
      }
    });
  }


  
  // =============================
  // STATE CHANGE
  // =============================
  onStateChange() {
    if (!this.selectboard) return;

    this.waterService
      .getServiceByBoards(this.selectboard)
      .subscribe({
        next: (data: any[]) => {
          this.wService = data;
          this.selectService = undefined;
          this.selectedServiceId = null;
          this.step = 2;
        },
        error: (err) => {
          console.error('Error loading Service:', err);
        }
      });
  }



  // =============================
  // BOARD CHANGE
  // =============================
  onBoardChange() {
    this.selectService =
      this.wService.find(b => b.id === Number(this.selectedServiceId));

    if (this.selectService && this.selectService.length > 0) {
      this.step = 3;
    }
  }
  
  
 

  // =============================
  // FINAL SUBMIT
  // =============================
  nextStep() {

    if (this.step < 3) {
      this.step++;
      return;
    }

     const payload = {
      type: this.isApartment ? 'Apartment' : 'Electricity',
      board: this.selectboard,
      serviceId: this.selectedServiceId,
      districtOrType: this.selectedDistrictOrType,  // ✅ added
      consumerNumber: this.consumerNumber,
      serviceNumber: this.serviceNumber,
      connectionNumber: this.connectionNumber,
      tenantNumber: this.tenantNumber,
      consumerId: this.consumerId,
      rrNumber: this.rrNumber,
      accountNo: this.accountNo,
      billNumber: this.billNumber,
      mobileNo: this.mobileNo,
      sequenceNo: this.sequenceNo,
      connectionNo: this.connectionNo,
      applicationNo: this.applicationNo,
      customerId: this.customerId,
      kNumber: this.kNumber,
      waterTaxNo: this.waterTaxNo,
      tapNo: this.tapNo,
    };

    console.log("Final Submit:", payload);

    // 🔥 Later you will call backend here
    alert("Proceeding to payment...");
    this.router.navigate(['/kiosk/redirect']);
  }
}