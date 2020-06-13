import { Component, Input , OnInit } from '@angular/core';

import { EmojiItem } from '../utils/EmojiItem';

@Component({
  selector: 'app-emoji-list-item',
  templateUrl: './emoji-list-item.component.html',
  styleUrls: ['./emoji-list-item.component.css']
})
export class EmojiListItemComponent implements OnInit {
  @Input() emojiItem: EmojiItem;

  public copyButtonText: string = "Copy";

  constructor() { }

  ngOnInit(): void {
  }

  handleClickCopy(): void {
    navigator.clipboard.writeText(this.emojiItem.emoji).then(() => {
      this.copyButtonText = "Copied!";
      setTimeout(() => {
        this.copyButtonText = "Copy";
      }, 1000);
    })
  }

}
