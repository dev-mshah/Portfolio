import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface LeetCodeQuestion {
  id?: number;
  title: string;
  difficulty: string;
  link: string;
  completed?: boolean;
  category: string;
  dateAdded?: string;
}

@Component({
  selector: 'app-leetcode-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule
  ],
  templateUrl: './leetcode-table.component.html',
  styleUrls: ['./leetcode-table.component.css']
})
export class LeetCodeTableComponent implements OnInit {
  displayedColumns: string[] = ['completed', 'link', 'title', 'difficulty', 'category',]
  dataSource: LeetCodeQuestion[] = [];
  filteredData: LeetCodeQuestion[] = [];
  categories: string[] = [];
  difficulties: string[] = ['Easy', 'Medium', 'Hard'];
  selectedCategory = '';
  selectedDifficulty = '';
  selectedStatus = '';

  newQuestion: LeetCodeQuestion = {
    title: '',
    difficulty: 'Easy',
    link: '',
    category: ''
  };

  categoryIcons: { [key: string]: string } = {
    'Array': 'view_array',
    'Stack': 'stacked_line_chart',
    'Queue': 'queue',
    'Graph': 'share', // or 'device_hub'
    'Heap': 'account_tree',
    'Greedy': 'local_offer',
    'Binary Search': 'search',
    'Interval': 'timeline',
    'Two Pointer': 'swap_horiz',
    // add more as needed
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.http.get<LeetCodeQuestion[]>('http://localhost:5000/api/leetcode')
      .subscribe(data => {
        this.dataSource = data;
        this.filteredData = [...data];
        console.log(this.filteredData);
        this.categories = [...new Set(data.map(q => q.category))];
      });
  }

  applyFilters(): void {
    this.filteredData = this.dataSource.filter(q => {
      const categoryMatch = this.selectedCategory ? q.category === this.selectedCategory : true;
      const difficultyMatch = this.selectedDifficulty ? q.difficulty === this.selectedDifficulty : true;
      return categoryMatch && difficultyMatch
    });
  }

  toggleCompleted(question: LeetCodeQuestion): void {
    question.completed = !question.completed;
  }

  addQuestion(): void {
    if (!this.newQuestion.title || !this.newQuestion.category) return;

    this.http.post<LeetCodeQuestion>(
      'http://localhost:5000/api/leetcode',
      this.newQuestion
    ).subscribe(created => {
      this.dataSource.push(created);
      this.applyFilters(); // respect current filters
      this.categories = [...new Set(this.dataSource.map(q => q.category))];
      this.newQuestion = { title: '', difficulty: 'Easy', link: '', category: '' };
    });
  }
}
