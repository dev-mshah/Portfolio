import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
export interface LeetCodeQuestion {
  id: number;
  title: string;
  difficulty: string;
  status: string;
  notes: string;
  dateAdded: string;
  completed?: boolean; // <-- new


}

@Component({
  selector: 'app-leetcode-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    CommonModule,
    HttpClientModule, MatIcon],
  templateUrl: './leetcode-table.component.html',
  styleUrl: './leetcode-table.component.css'
})
export class LeetCodeTableComponent implements OnInit {
  displayedColumns: string[] = ['completed', 'id', 'title', 'difficulty', 'status', 'notes'];
  dataSource: LeetCodeQuestion[] = [];

  toggleCompleted(question: LeetCodeQuestion) {
    question.completed = !question.completed;
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<LeetCodeQuestion[]>('https://problemsettracker.onrender.com/api/leetcode')
      .subscribe(data => this.dataSource = data);
  }
}