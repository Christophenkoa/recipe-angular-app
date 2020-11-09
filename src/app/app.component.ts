import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public loadedFeature = 'recipe';

  // tslint:disable-next-line:typedef
  public onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
