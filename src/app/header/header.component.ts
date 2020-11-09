import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public featureSelected = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
