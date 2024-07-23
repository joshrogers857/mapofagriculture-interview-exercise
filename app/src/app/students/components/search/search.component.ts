import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() reset: EventEmitter<null> = new EventEmitter();
  @ViewChild('searchInput') searchInputRef!: ElementRef<HTMLInputElement>;

  constructor() {
  }

  onSearch(searchString: string): void {
    this.search.emit(searchString);
  }

  onReset(): void {
    this.searchInputRef.nativeElement.value = ''; // Reset the form field to empty
    this.reset.emit(null);
  }

  onEnterKeydown(event: Event, searchString: string) {
    event.preventDefault(); // Prevents default page refresh behaviour
    this.onSearch(searchString);
  }
}
