import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchResultItemComponent } from '../search-result-item/search-result-item.component';
import { CompanySearchService } from '../services/company-search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchResultItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  fragment: string = "";
  title: string = "SEARCH RESULTS";
  searchResults: any[] = [];

  constructor(private route: ActivatedRoute, private companySearchService: CompanySearchService) { }

  ngOnInit() {
    this.fragment = this.route.snapshot.paramMap.get('fragment') || "";
    this.companySearchService.getCompaniesByFragment(this.fragment).subscribe((data: any) => this.searchResults = data.items);
    // this.companySearchService.getOfficersList("10241297").subscribe((data: any[]) => console.log(data));
  }
}
