import { Component } from '@angular/core';
import { Country } from 'src/model/country';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restapi';
  countries:Country[] = [];
  country:Country = new Country;
  error_message = "";
  id:number = 0;
  name:string = "";
  code:string = "";

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getRecordsFromService();
  }


  getRecordsFromService() {
    this.countryService.getAllCountries().subscribe(countries => {
      this.countries = countries;
    })
  }

  addRecordsToService() {
    if (this.id == 0 || this.name == "" || this.code == "") {
      this.error_message = "Please fill all the fields";
      alert(this.error_message);
    } else {

      this.country.id = this.id;
      this.country.name = this.name;
      this.country.code = this.code;

      this.countryService.addCountry(this.country).subscribe(savedCountry => {
        this.countries.push(savedCountry);
        this.country = new Country;
        this.error_message = ""
      })
      alert(this.error_message)
    }
  }
}
