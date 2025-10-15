import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  imports: [ProjectsComponent, MatButtonModule, MatCardModule, MatGridListModule, MatExpansionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
