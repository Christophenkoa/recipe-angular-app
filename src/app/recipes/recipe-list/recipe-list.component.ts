import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // tslint:disable-next-line:typedef
  public onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
