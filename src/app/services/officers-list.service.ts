import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficersListService {
  officersListUrl = "api/Officers?CompanyNumber=";

  constructor(private http: HttpClient) { }

  getOfficersList(companyNumber: string): any {
    console.log(`${this.officersListUrl}${companyNumber}`);
    return this.http.get<any>(`${this.officersListUrl}${companyNumber}`);
  }
}
