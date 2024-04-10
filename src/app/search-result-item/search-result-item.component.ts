import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-item',
  standalone: true,
  imports: [],
  templateUrl: './search-result-item.component.html',
  styleUrl: './search-result-item.component.css'
})
export class SearchResultItemComponent {
  @Input() companyDetails: any;

  ngOnInit() {
    console.log(this.companyDetails);
  }
}
