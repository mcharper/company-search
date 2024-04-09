import { Component } from '@angular/core';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {
  companyName = "Company Name";
  companyNumberLabel = "Company number";
  companyNumber = "123456";
  companyAddressLabel = "Registered office address";
  companyAddress = "1 The Street";
  companyStatusLabel = "Company status";
  companyStatus = "Active";
  companyTypeLabel = "Company type"
  companyType = "Private limited company";
  incorporationDateLabel = "Incorporated on";
  incorporationDate = "1st February 1997";
}
