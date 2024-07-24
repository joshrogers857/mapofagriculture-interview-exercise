import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter();
  @Output() public reset: EventEmitter<null> = new EventEmitter();
  public searchString: string = '';

  constructor() {
  }

  /**
   * Handler function for a search event
   */
  public onSearch(): void {
    this.search.emit(this.searchString);
  }

  /**
   * Handler function for a reset event
   */
  public onReset(): void {
    this.searchString = ''; // Reset the form field to empty
    this.reset.emit(null);
  }

  /**
   * Handler function for a search event. Prevents
   * default event behaviour
   * 
   * @param event to prevent default behaviour of
   */
  public onEnterKeydown(event: Event) {
    event.preventDefault();
    this.onSearch();
  }
}
