import { Component } from '@angular/core';

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
    public listItems: Array<string>
    = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];

    public value = ['Basketball', 'Cricket']
}
