import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetCodeTableComponent } from './leetcode-table.component';
import { MatIcon } from '@angular/material/icon';

describe('LeetcodeTableComponent', () => {
  let component: LeetCodeTableComponent;
  let fixture: ComponentFixture<LeetCodeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeetCodeTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LeetCodeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
