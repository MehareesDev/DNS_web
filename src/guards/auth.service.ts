import { Injectable } from '@angular/core';
import { CommonservicesService } from '../helper/commonservices/commonservices.service';

@Injectable({
  providedIn: 'root',

})
export class AuthService {
  constructor(private commonSr: CommonservicesService) {}

  isAuthenticated() {
    if (sessionStorage.getItem('userId')) {
      return true;
    } else {
      return false;
    }
  }

  checkRoleId() {
    var roleId = sessionStorage.getItem('userRoleId');
    var userRole;
    console.log("userRole",userRole)
    return userRole;
  }
}
