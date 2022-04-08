import {InjectionToken} from "@angular/core";

export interface userData {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface ServiceInterface {
  getUsers(): userData[]
  countUsers(): number
  findUser(name: string): userData[]
  printLog(message: string): void
  printBug(message: string): void
}

export const SERVICE_CONFIG = new InjectionToken<ServiceInterface>('service.config')
