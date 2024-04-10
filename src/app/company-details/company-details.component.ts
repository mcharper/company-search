import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanySearchService } from '../services/company-search.service';

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

  companyNumber: string = "";
  companyDetails: any;

  constructor(private route: ActivatedRoute, private companySearchService: CompanySearchService) { }

  ngOnInit() {
    this.companyNumber = this.route.snapshot.paramMap.get('companynumber') || "";
    this.companySearchService.getCompanyDetails(this.companyNumber).subscribe((data: any) => this.companyDetails = data.items[0]);
  }

  humaniseDate(dt: string) {
    return new Date(dt).toDateString()
  }
}
