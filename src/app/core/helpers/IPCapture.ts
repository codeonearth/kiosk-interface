// ip-capture.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IPCaptureService {

  private apiEndpoints: string[] = [
    'https://api.ipify.org?format=json',
    'https://api64.ipify.org?format=json',
    'https://api.my-ip.io/ip.json',
    'https://ipapi.co/json/'
  ];

  async getPublicIP(): Promise<string> {
    for (const endpoint of this.apiEndpoints) {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) continue;

        const data = await response.json();

        if (data.ip) return data.ip;
        if (data.IPv4) return data.IPv4;
      } catch {
        continue;
      }
    }
    throw new Error('Unable to fetch IP');
  }

  async getIPAddress(): Promise<{
    ip: string;
    version: 'IPv4' | 'IPv6';
    timestamp: number;
  }> {
    const ip = await this.getPublicIP();
    return {
      ip,
      version: this.isIPv6(ip) ? 'IPv6' : 'IPv4',
      timestamp: Date.now()
    };
  }

  private isIPv6(ip: string): boolean {
    return ip.includes(':');
  }

  validateIP(ip: string): boolean {
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    
    const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    
    return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
  }
}