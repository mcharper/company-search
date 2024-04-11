import { of } from "rxjs";
import { COMPANIES_BY_NAME } from "../mockData/getCompaniesByName";

const TestCompany = COMPANIES_BY_NAME;

export class MockCompanySearchService {
  getCompaniesByFragment(fragment: string): any {
    return of(TestCompany);
  }

  getCompanyDetails(companyNumber: string) {
    return of(TestCompany);
  }
}