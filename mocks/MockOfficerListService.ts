import { of } from "rxjs";
import { OFFICERS_LIST } from "../mockData/getOfficersList";

export class MockOfficerListService {
  getOfficersList(companyNumber: string) {
    return of(OFFICERS_LIST);
  }
}