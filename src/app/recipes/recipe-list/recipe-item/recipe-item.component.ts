import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Input() public index: number;

  public ngOnInit(): void {
  }
}
