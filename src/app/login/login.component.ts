import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {CommonservicesService} from '../../helper/commonservices/commonservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private activatedroute: ActivatedRoute, private CS: CommonservicesService) {
  }

  submitted = false;
  loginForm: FormGroup
  loading = false
  error = false

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['mehareesayur@gmail.com', Validators.required],
      password: ['Test@123', Validators.required]
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  loginSubmit() {
    let _this = this;
    this.submitted = true;
    if (this.loginForm.status == 'VALID') {
      let params = this.loginForm.value
      _this.loading = true
      localStorage.setItem('user_data', params);
      _this.router.navigate(['/dashboard']);
      _this.loading = false
    }
  }

}
