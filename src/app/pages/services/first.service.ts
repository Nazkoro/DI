import {ELEMENT_DATA} from "../data";
import {ServiceInterface, userData} from "../interface/serviceInterface";
import {Injectable} from "@angular/core";

@Injectable()
export class FirstService implements ServiceInterface{
  constructor() {}

  getUsers(): userData[] {
    return ELEMENT_DATA
  }
  countUsers(): number{
    return ELEMENT_DATA.length
  }
  findUser(name: string): userData[]{
    return ELEMENT_DATA.filter( user => user.name == name)
  }
  printLog(message: string): void{
    console.log(message)
  }
  printBug(message: string): void{
    console.log(message)
  }
}
