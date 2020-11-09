import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ts-ignore
  @ViewChild('nameInput') public nameInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('amountInput') public amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  public ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
