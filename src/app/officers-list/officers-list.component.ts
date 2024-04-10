import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficersListService } from '../services/officers-list.service';

@Component({
  selector: 'app-officers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.css'
})
export class OfficersListComponent {
  companyNumber: string = "";
  companyNumberLabel = "Company Number";
  officersList: any[] = [];

  constructor(private route: ActivatedRoute, private officersListService: OfficersListService) { }

  ngOnInit() {
    this.companyNumber = this.route.snapshot.paramMap.get('companynumber') || "";

    this.officersListService.getOfficersList(this.companyNumber).subscribe((data: any) => this.officersList = data.items);
    // this.companyDetails = this.companySearchService.getCompanyDetails(this.companyNumber);
  }

  companyName = "Company Name";
}
