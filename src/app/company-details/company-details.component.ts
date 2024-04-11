import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanySearchService } from '../services/company-search.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {
  companyNumberLabel = "Company number";
  companyAddressLabel = "Registered office address";
  companyStatusLabel = "Company status";
  companyTypeLabel = "Company type"
  incorporationDateLabel = "Incorporated on";
  goBackButtonLabel = "Back";

  companyNumber: string = "";
  companyDetails: any;

  constructor(private route: ActivatedRoute, private companySearchService: CompanySearchService, private location: Location) { }

  ngOnInit() {
    this.companyNumber = this.route.snapshot.paramMap.get('companynumber') || "";
    this.companySearchService.getCompanyDetails(this.companyNumber).subscribe((data: any) => this.companyDetails = data.items[0]);
  }

  humaniseDate(dt: string) {
    if (!isNaN(new Date(dt).getTime())) {
      return new Date(dt).toDateString();
    } else {
      return "(date was not supplied or was invalid)"

    }
  }

  humaniseCompanyType(companyType: string) {
    const companyTypeDescriptions: any = {
      "ltd": "Private Limited Company",
      "plc": "Public Limited Company"
    };

    return (companyType in companyTypeDescriptions) ? companyTypeDescriptions[companyType] : companyType;
  }

  goBack() {
    this.location.back();
  }
}
