import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-officers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.css'
})
export class OfficersListComponent {
  companyName = "Company Name";
  companyNumberLabel = "Company Number";
  companyNumber = "123456";
  officersList: any[] = [
    { name: "John Smith", role: "director" },
    { name: "Mary Jane", role: "secretary" }
  ];
}
