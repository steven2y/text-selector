import { Component, Input, OnInit } from '@angular/core';
import { WindowRefService } from '../shared/window-ref.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { ACTIONS } from './constant';

@Component({
    selector: 'tsl-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
    @Input() public data: string;

    constructor(private windowRefService: WindowRefService, private store: Store<AppState>) {
    }

    public ngOnInit() {
    }

    public handleMouseUp() {
        const selection = this.windowRefService.getWindow().getSelection();
        this.store.dispatch({
            type: ACTIONS.SELECTED_HIGHLIGHT,
            payload: {
                start: selection.anchorOffset,
                end: selection.focusOffset,
                value: selection.toString()
            }
        });
    }
}
