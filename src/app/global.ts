import { Injectable, Input } from "@angular/core";
import { userDetails } from "./Classes/userDetails";


@Injectable()
export class global{

   @Input() userDetails:any; 
userInfo={
   "firstName": userDetails.firstName
}


}