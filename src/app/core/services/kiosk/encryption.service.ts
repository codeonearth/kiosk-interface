// src/app/services/encryption.service.ts
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private secretKey: string;
  private iv: string;

  constructor() {
    // In production, get these from secure configuration
    this.secretKey = 'A9f3K2mP7R8X4L6Z0C1D5E9H2WQYBTJX';
    this.iv = 'F7K9M2P4R8X3L6Z0';
  }

  // Encrypt data before sending to backend
  encryptData(data: any): string {
    console.log('Encrypting data:', data);
    try {
      const jsonString = JSON.stringify(data);
      
      // Using AES encryption
      const encrypted = CryptoJS.AES.encrypt(
        jsonString,
        CryptoJS.enc.Utf8.parse(this.secretKey),
        {
          iv: CryptoJS.enc.Utf8.parse(this.iv),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        }
      );
      
      return encrypted.toString();
    } catch (error) {
      console.error('Encryption error:', error);
      throw error;
    }
  }

  // Decrypt data received from backend
  decryptData(cipherText: string): any {
    try {
      const decrypted = CryptoJS.AES.decrypt(
        cipherText,
        CryptoJS.enc.Utf8.parse(this.secretKey),
        {
          iv: CryptoJS.enc.Utf8.parse(this.iv),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        }
      );
      
      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedText);
    } catch (error) {
      console.error('Decryption error:', error);
      throw error;
    }
  }

  // Generate a unique kiosk ID
  generateKioskId(): string {
    return 'kiosk-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }
}