import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchResultItemComponent } from '../search-result-item/search-result-item.component';
import { CompanySearchService } from '../services/company-search.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchResultItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  fragment: string = "";
  searchResults: any[] = [];
  title: string = "SEARCH RESULTS";
  goBackButtonLabel = "Back";
  zeroResultsMessage = "Sorry, we did not find any results to match your query.";

  constructor(private route: ActivatedRoute, private companySearchService: CompanySearchService, private location: Location) { }

  ngOnInit() {
    this.fragment = this.route.snapshot.paramMap.get('fragment') || "";
    this.companySearchService.getCompaniesByFragment(this.fragment).subscribe((data: any) => this.searchResults = data.items);
  }

  goBack() {
    this.location.back();
  }
}
