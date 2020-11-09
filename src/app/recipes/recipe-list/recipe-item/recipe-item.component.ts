import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  // @Output() public recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  public ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
