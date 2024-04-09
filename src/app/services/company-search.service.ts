import { Injectable } from '@angular/core';
import { COMPANIES_BY_NAME } from '../mockData/getCompaniesByName';

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {

  constructor() { }

  getCompaniesByName(): any {
    return COMPANIES_BY_NAME;
  }
}
