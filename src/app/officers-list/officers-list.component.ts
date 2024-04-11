import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficersListService } from '../services/officers-list.service';
import { CompanySearchService } from '../services/company-search.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-officers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.css'
})
export class OfficersListComponent {
  companyNumber: string = "";
  companyName: string = "";
  officersList: any[] = [];
  companyNumberLabel = "Company Number";
  goBackButtonLabel = "Back";

  constructor(private route: ActivatedRoute,
    private companySearchService: CompanySearchService,
    private officersListService: OfficersListService,
    private location: Location) { }

  ngOnInit() {
    this.companyNumber = this.route.snapshot.paramMap.get('companynumber') || "";
    this.companySearchService.getCompaniesByFragment(this.companyNumber).subscribe((data: any) => this.companyName = data.items[0].title)
    this.officersListService.getOfficersList(this.companyNumber).subscribe((data: any) => this.officersList = data.items);
  }

  goBack() {
    this.location.back();
  }
}
