import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor (private http:HttpClient) {

  }

  getAllCountries():Observable<Country[]> {
    let observable = this.http.get<Country[]>('http://localhost:3000/Country');
    return observable;
  }
  addCountry(country: Country):Observable<Country> {

    let observable = this.http.post<Country>('http://localhost:3000/Country', country)
    return observable;

  }
  deleteCountry(jj:number):Observable<Country> {
    let observable = this.http.delete<Country>('http://localhost:3000/Country/'+jj);
    return observable;
  }

  updateCountry(country: Country):Observable<Country> {
    let observable = this.http.put<Country>('http://localhost:3000/Country/'+country.id,country);
    return observable;
  }

  // deleteCountry(): Observable<Country>{

  //   return this.http.delete('http://localhost:3000/Country/1');
  // }
  
}
