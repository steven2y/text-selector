import { Component, Input, OnInit } from '@angular/core';
import { SelectorSelection } from '../selector/selector.model';

@Component({
    selector: 'tsl-selector-selections-list',
    templateUrl: './selector-selections-list.component.html',
    styleUrls: ['./selector-selections-list.component.css']
})
export class SelectorSelectionsListComponent implements OnInit {

    @Input() selections: SelectorSelection[] = [];

    constructor() {
    }

    ngOnInit() {
    }
}
