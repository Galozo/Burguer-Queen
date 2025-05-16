import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Category } from 'src/app/models/category';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategories () {
    return CapacitorHttp.get({
      url: environment.urlApi + 'categories',
      // url: 'http://localhost:3000/api/v1/categories',
      params: {},
      headers: {
        'Content-type': 'application/json',
      }
    }).then((response: HttpResponse) => {
      if(response.status == 200) {
        const data = response.data as Category[];
        return data;
      }
      return [];
    }).catch(err => {
      console.error(err);
      return [];

    }
    )
  }

  constructor() { }
}
