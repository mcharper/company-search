import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result-item',
  standalone: true,
  imports: [],
  templateUrl: './search-result-item.component.html',
  styleUrl: './search-result-item.component.css'
})
export class SearchResultItemComponent {
  companyName: string = "companyName";
  companyNumber: string = "companyNumber";
  incorporationDateStatement: string = "incorporationDateStatement";
  companyAddress: string = "companyAddress";
}
