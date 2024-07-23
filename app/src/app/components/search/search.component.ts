import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter();
  @Output() public reset: EventEmitter<null> = new EventEmitter();
  @ViewChild('searchInput') private searchInputRef!: ElementRef<HTMLInputElement>;

  constructor() {
  }

  public onSearch(searchString: string): void {
    this.search.emit(searchString);
  }

  public onReset(): void {
    this.searchInputRef.nativeElement.value = ''; // Reset the form field to empty
    this.reset.emit(null);
  }

  public onEnterKeydown(event: Event, searchString: string) {
    event.preventDefault(); // Prevents default page refresh behaviour
    this.onSearch(searchString);
  }
}
