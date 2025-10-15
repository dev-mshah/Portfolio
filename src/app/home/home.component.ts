import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AvatarComponent } from '../avatar/avatar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [ProjectsComponent, MatButtonModule, MatCardModule, MatGridListModule, MatExpansionModule, AvatarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
