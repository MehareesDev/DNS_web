import { Component, OnInit } from '@angular/core';
import {CommonservicesService} from '../../helper/commonservices/commonservices.service';
import {Router, ActivatedRoute,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss','../homepage/homepage.component.scss']
})
export class DashboardComponent implements OnInit {
  id = this.activatedroute.snapshot.params.parentId;
  constructor(private router: Router, private activatedroute: ActivatedRoute, private CS: CommonservicesService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = this.activatedroute.snapshot.params.parentId && this.activatedroute.snapshot.params.parentId != 'null' ? this.activatedroute.snapshot.params.parentId : null;
        this.getData()
      }
    });
  }

  ngOnInit(): void {
  }


  products = []
  category = []


  getData(){
    let _this = this
    _this.products = [];
    _this.category = [];
    this.CS.getitems({id:this.id}).subscribe(response => {
      if (response.success) {
        _this.products = response.data && response.data.hits.length ? response.data.hits :[]
      }
    });
    this.CS.getitems({type:'category',id:this.id}).subscribe(response => {
      if (response.success) {
        _this.category = response.data && response.data.hits.length ? response.data.hits : [];
        console.log("_this.category ",_this.category )
      }
    });
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/']);
  }

  deleteProduct(item){
    let _this = this
    this.CS.deleteitem(item).subscribe(response => {
      if(response.success){
        _this.products = _this.products.filter(function(elem) {
          return elem.objectID !== item.objectID;
        })
      }
    });
  }



}
