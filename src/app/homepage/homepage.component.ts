import {Component, OnInit} from '@angular/core';
import {CommonservicesService} from '../../helper/commonservices/commonservices.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private CS: CommonservicesService) {
  }

  ngOnInit(): void {
    this.getData()
  }

  products = []
  login = localStorage.getItem('user_data') ? true : false



  /*** Get Data from Algolia (Database) **/
  getData() {
    let _this = this
    this.CS.getitems({list: true}).subscribe(response => {
      if (response.success) {
        _this.products = response.data && response.data.hits.length ? response.data.hits : _this.products;
      }
    });
  }

  /** Logout function **/
  logout() {
    localStorage.clear();
    this.login = false
  }

}
