import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ElectricityBoard } from '../../../../models/electricity-board.model';
import { ElectricityService } from '../../../../core/services/kiosk/electricity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-bill',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss']
})
export class PayBillComponent implements OnInit {

  // ===== FLOW CONTROL =====
  step: number = 1;
  isApartment: boolean = false;

  // ===== DROPDOWN DATA =====
  states: string[] = [];
  boards: ElectricityBoard[] = [];
selectedDistrictOrType: string = '';
districtOrTypes: string[] = []; 
  // ===== SELECTED VALUES =====
  selectedState: string = '';
  selectedBoardId: number | null = null;
  selectedBoard?: ElectricityBoard;

  // ===== DYNAMIC INPUTS =====
  consumerNumber: string = '';
  serviceNumber: string = '';
  connectionNumber: string = '';
  tenantNumber: string = '';
groupedBoards: any[] = [];
  constructor(private electricityService: ElectricityService , private router: Router) {}

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
    this.selectedState = '';
    this.selectedBoardId = null;
    this.selectedBoard = undefined;
    this.boards = [];
    this.districtOrTypes = [];
    this.consumerNumber = '';
    this.serviceNumber = '';
    this.connectionNumber = '';
    this.tenantNumber = '';
  }

  // =============================
  // LOAD STATES
  // =============================
  loadStates() {
    this.electricityService.getStates().subscribe({
      next: (data) => {
        this.states = data;
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
    if (!this.selectedState) return;

    this.electricityService
      .getBoardsByState(this.selectedState)
      .subscribe({
        next: (data) => {
          this.boards = data;
          this.selectedBoard = undefined;
          this.selectedBoardId = null;
          this.step = 2;
        },
        error: (err) => {
          console.error('Error loading boards:', err);
        }
      });
  }



  // =============================
  // BOARD CHANGE
  // =============================
  onBoardChange() {
    this.selectedBoard =
      this.boards.find(b => b.id === Number(this.selectedBoardId));

    if (this.selectedBoard) {
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
      state: this.selectedState,
      boardId: this.selectedBoardId,
      districtOrType: this.selectedDistrictOrType,  // ✅ added
      consumerNumber: this.consumerNumber,
      serviceNumber: this.serviceNumber,
      connectionNumber: this.connectionNumber,
      tenantNumber: this.tenantNumber
    };

    console.log("Final Submit:", payload);

    // 🔥 Later you will call backend here
    alert("Proceeding to payment...");
    this.router.navigate(['/kiosk/redirect']);
  }
}