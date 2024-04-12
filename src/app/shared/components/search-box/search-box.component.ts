import { Component, EventEmitter, Input, Output, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  public sendValue( value: string ): void {
    this.onValue.emit( value );
  }
}
