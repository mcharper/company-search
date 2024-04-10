import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { OfficersListComponent } from './officers-list/officers-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'search-results/:fragment', component: SearchResultsComponent },
  { path: 'company-details/:companynumber', component: CompanyDetailsComponent },
  { path: 'officers-list/:companynumber', component: OfficersListComponent },
];
