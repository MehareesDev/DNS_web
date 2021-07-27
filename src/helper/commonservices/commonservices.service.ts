import {Injectable} from '@angular/core';
import {HttpService} from '../../@core/http/http.service';
import {Observable, BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CommonservicesService {


  constructor(private httpService: HttpService) {
  }



  itemUpdate(params) {
    let _this = this
    return new Observable<any>(observer => {
      this.httpService
        .post(environment.BACK_END + 'update_item',
          params
        )
        .subscribe(res => {
          observer.next(res);
          observer.complete();
        });
    });
  }


  getitems(params) {
    let _this = this
    return new Observable<any>(observer => {
      this.httpService
        .post(environment.BACK_END + 'get_items',
          params
        )
        .subscribe(res => {
          observer.next(res);
          observer.complete();
        });
    });
  }

  getItem(params) {
    let _this = this
    return new Observable<any>(observer => {
      this.httpService
        .post(environment.BACK_END + 'get_item',
          params
        )
        .subscribe(res => {
          observer.next(res);
          observer.complete();
        });
    });
  }

  deleteitem(params) {
    let _this = this
    return new Observable<any>(observer => {
      this.httpService
        .post(environment.BACK_END + 'delete_item',
          params
        )
        .subscribe(res => {
          observer.next(res);
          observer.complete();
        });
    });
  }



}


