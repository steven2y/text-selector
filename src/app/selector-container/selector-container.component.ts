import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { getSelectorSelections } from '../selector/selector.selectors';

@Component({
    selector: 'tsl-selector-container',
    templateUrl: './selector-container.component.html',
    styleUrls: ['./selector-container.component.css']
})
export class SelectorContainerComponent implements OnInit {

    public dataText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
        ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
        'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur' +
        ' sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    public selections = this.store.select(getSelectorSelections);
    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
    }

}
