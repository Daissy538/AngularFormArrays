import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SelectionItemField } from './selectionItemField';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public testForm!: FormGroup;

  private fields!: SelectionItemField[];


  ngOnInit(): void {
    this.setupOptions();

    this.setupForm();
  }

  private setupForm():void {

    var fruitSelectionFormArray = new FormArray([]);
    this.fields.forEach(field => {
      var item = new FormGroup({
        name: ,
        selection: new FormControl(),
        children: new FormArray([])
      });

      if(field.children.length > 0){
        field.children.length
      }

      fruitSelectionFormArray.push(new FormControl(false));
    });

    
    this.testForm = new FormGroup({
      fruitSelection: fruitSelectionFormArray,
      hiddenMultiSelectFied: new FormControl()
    });


  }

  private setupOptions(): void{
    this.fields = [
      new SelectionItemField("Apple", [
        new SelectionItemField("Pink", [], false),
        new SelectionItemField("Elstar", [], false)        
      ], false),
      new SelectionItemField("Pineapple", [], false),
      new SelectionItemField("Otherwise", [], true),
    ]
  }
}
