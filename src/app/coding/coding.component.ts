import { Component } from '@angular/core';
import { LeetCodeTableComponent } from '../leetcode-table/leetcode-table.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-coding',
  imports: [LeetCodeTableComponent, MatIconModule, RouterLink],
  templateUrl: './coding.component.html',
  styleUrl: './coding.component.css'
})
export class CodingComponent {

}
