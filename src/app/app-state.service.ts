import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { EmojiItem } from './utils/EmojiItem';
import { EmojiList } from './utils/EmojiList';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private emojiList: EmojiItem[] = EmojiList;
  private searchQuery: BehaviorSubject<string>;

  constructor() { 
    this.searchQuery = new BehaviorSubject<string>("");
  }

  getFilteredEmojiList(filterQuery: string): EmojiItem[] {
    if (filterQuery !== "") {
      return this.emojiList.filter(emoji => emoji.description.includes(filterQuery));
    }
    return this.emojiList;
  }

  getSearchQuery(): Observable<string> {
    return this.searchQuery.asObservable();
  }

  setSearchQuery(query: string): void {
    this.searchQuery.next(query);
  }
}
