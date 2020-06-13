import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private searchValueChanged = new Subject<string>();
  public searchValue: string;

  constructor(private appState: AppStateService) { }

  ngOnInit(): void {
    this.appState.getSearchQuery().subscribe(query => {
      this.searchValue = query;
    });

    this.searchValueChanged.pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((updatedValue: string) => { 
        this.appState.setSearchQuery(updatedValue);
      });
  }

  onSearchValueChange(value: string): void {
    this.searchValueChanged.next(value);
  }

}
