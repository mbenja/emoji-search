import { Component, Input, OnInit } from '@angular/core';

import { AppStateService } from '../app-state.service';
import { EmojiItem } from '../utils/EmojiItem';

@Component({
  selector: 'app-emoji-list',
  templateUrl: './emoji-list.component.html',
  styleUrls: ['./emoji-list.component.css']
})
export class EmojiListComponent implements OnInit {
  public emojiList: EmojiItem[];
  public filterQuery: string;

  constructor(private appState: AppStateService) { }

  ngOnInit(): void {
    this.appState.getSearchQuery().subscribe(query => {
      this.filterQuery = query;
      this.emojiList = this.appState.getFilteredEmojiList(query);
    });
  }

}
