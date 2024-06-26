import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = "Company Search";
  searchLabel: string = "Company name or number";
  searchPlaceholder: string = "Company name or number";
  searchCriterion = new FormControl('');
  searchButtonText: string = "Search";

  constructor(private router: Router) { }

  search() {
    this.router.navigate([`/search-results/${this.searchCriterion.value}`]);
  }
}
