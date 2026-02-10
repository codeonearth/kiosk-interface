import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ElectricityService } from '../../../../core/services/kiosk/electricity.service';
import { Router } from '@angular/router';
import { GasBoard } from '../../../../models/gas-board.modek';
import { GasService } from '../../../../core/services/kiosk/gas.service';


@Component({
  selector: 'app-pay-gas-bill',
  imports: [CommonModule, FormsModule],
  templateUrl: './pay-gas-bill.component.html',
  styleUrl: './pay-gas-bill.component.scss'
})
export class PayGasBillComponent implements OnInit {

  // ===== FLOW CONTROL =====
  step: number = 1;
  isApartment: boolean = false;

  // ===== DROPDOWN DATA =====
  providers: string[] = [];
  district: GasBoard[] = [];
selectedSubDistrict: string = '';
districtOrTypes: string[] = []; 
  // ===== SELECTED VALUES =====
  selectedProvider: string = '';
  selectedDistrictId: number | null = null;
  selectedDistrict?: any;

  // ===== DYNAMIC INPUTS =====
  businessPartnerNumber: string = '';
caNumber: string = '';
customerId: string = '';
bpNumber: string = '';
customerNumber: string = '';
cidNumber: string = '';
crnNumber: string = '';

// GAS Grouped Providers
groupedGasBoards: any[] = [];
  constructor(private gasService: GasService , private router: Router) {}

  ngOnInit(): void {
    this.loadProviders();
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
    this.selectedProvider = '';
    this.selectedDistrictId = null;
    this.selectedDistrict = undefined;
    this.district = [];
    this.districtOrTypes = [];
    this.businessPartnerNumber = '';
    this.caNumber = '';
    this.customerId = '';
    this.bpNumber = '';
    this.customerNumber = '';
    this.cidNumber = '';
    this.crnNumber = '';
  }

  // =============================
  // LOAD PROVIDERS
  // =============================
  loadProviders() {
    this.gasService.getProviders().subscribe({
      next: (data) => {
        this.providers = data;
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
    if (!this.selectedProvider) return;

    this.gasService
      .getDistrictByProvider(this.selectedProvider)
      .subscribe({
        next: (data) => {
          this.district = data;
          this.selectedDistrict = undefined;
          this.selectedDistrictId = null;
          this.step = 2;
          console.log("Districts loaded:", this.district);
        },
        error: (err) => {
          console.error('Error loading boards:', err);
        }
      });
  }



  // =============================
  // BOARD CHANGE
  // =============================
  // onBoardChange() {
  //   this.selectedDistrict =
  //     this.district.find(b => b.id === Number(this.selectedDistrictId));

  //   if (this.selectedDistrict) {
  //     this.step = 3;
  //   }
  // }
  onBoardChange() {
  this.selectedDistrict =
    this.district.find(b => b.id === Number(this.selectedDistrictId));

  console.log("Selected District:", this.selectedDistrict);

  if (this.selectedDistrict) {
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
      provider: this.selectedProvider,
      districtId: this.selectedDistrictId,
      subDistrict: this.selectedSubDistrict,  // ✅ added
      businessPartnerNumber: this.businessPartnerNumber,
      caNumber: this.caNumber,
      customerId: this.customerId,
      bpNumber: this.bpNumber,
      customerNumber: this.customerNumber,
      cidNumber: this.cidNumber,
      crnNumber: this.crnNumber
    };

    console.log("Final Submit:", payload);

    // 🔥 Later you will call backend here
    alert("Proceeding to payment...");
    this.router.navigate(['/kiosk/redirect']);
  }
}
