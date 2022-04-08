import {InjectionToken} from "@angular/core";
import {FirstService} from "./services/first.service";
import {SecondService} from "./services/second.service";
import {ThirdService} from "./services/third.service";

export const SIGNATURE_SERVICE = new InjectionToken('signature');

export const SignatureServiceProvider = {
  provide: SIGNATURE_SERVICE,
  useFactory: (
    nameService: string
  ) => {
    switch (nameService) {
      case "FirstService":
        return new FirstService();
        break;
      case "SecondService":
        return new SecondService();
        break;
      case "ThirdService":
        return new ThirdService();
        break;
      default:
        console.log("Sorry, we are out of " + nameService + ".");
    }
  },
  deps: [FirstService,SecondService,ThirdService]
}
