import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchResultItemComponent } from '../search-result-item/search-result-item.component';
import { CompanySearchService } from '../services/company-search.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchResultItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  constructor(private companySearchService: CompanySearchService) {
    this.searchResults = companySearchService.getCompaniesByName();
  }

  searchResults: any;
  title: string = "SEARCH RESULTS";
  list: string[] = ["a", "b"]
}
