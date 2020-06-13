import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiListItemComponent } from './emoji-list-item.component';

describe('EmojiListItemComponent', () => {
  let component: EmojiListItemComponent;
  let fixture: ComponentFixture<EmojiListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
