import { of } from "rxjs";

const TestCompany = {
  items: [
    {
      "company_status": "active",
      "address_snippet": "Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD",
      "date_of_creation": "2008-02-11",
      "matches": {
        "title": [
          1,
          3
        ]
      },
      "description": "06500244 - Incorporated on 11 February 2008",
      "links": {
        "self": "/company/06500244"
      },
      "company_number": "06500244",
      "title": "BBC LIMITED",
      "company_type": "ltd",
      "address": {
        "premises": "Boswell Cottage Main Street",
        "postal_code": "DN22 0AD",
        "country": "England",
        "locality": "Retford",
        "address_line_1": "North Leverton"
      },
      "kind": "searchresults#company",
      "description_identifier": [
        "incorporated-on"
      ]
    }
  ]
};

export class MockCompanySearchService {
  getCompaniesByFragment(fragment: string): any {
    return of(TestCompany);
  }

  getCompanyDetails(companyNumber: string) {
    return of(TestCompany);
  }
}