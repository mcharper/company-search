import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from "rxjs";
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {
  companySearchUrl = 'api/Search?Query=';
  searchResults: Observable<any[]> = new Observable<any[]>();
  currentPattern: string = "";

  constructor(private http: HttpClient) { }

  getCompaniesByFragment(fragment: string): any {
    const ucaseFragment = fragment.toUpperCase();
    if (ucaseFragment != this.currentPattern) {
      this.retrieveCompaniesByFragment(fragment);
      this.currentPattern = ucaseFragment;
    }

    return this.searchResults;
  }

  retrieveCompaniesByFragment(fragment: string): any {
    this.searchResults = this.http.get<any>(`${this.companySearchUrl}${fragment}`);
  }

  getCompanyDetails(companyNumber: string) {
    return this.http.get<any>(`${this.companySearchUrl}${companyNumber}`);
  }

}
