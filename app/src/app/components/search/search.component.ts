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

  /**
   * Handler function for a search event
   * 
   * @param searchString to search with
   */
  public onSearch(searchString: string): void {
    this.search.emit(searchString);
  }

  /**
   * Handler function for a reset event
   */
  public onReset(): void {
    this.searchInputRef.nativeElement.value = ''; // Reset the form field to empty
    this.reset.emit(null);
  }

  /**
   * Handler function for a search event. Prevents
   * default event behaviour
   * 
   * @param event to prevent default behaviour of
   * @param searchString to search with
   */
  public onEnterKeydown(event: Event, searchString: string) {
    event.preventDefault();
    this.onSearch(searchString);
  }
}
