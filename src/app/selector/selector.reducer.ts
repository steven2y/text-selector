import { Action } from '@ngrx/store';
import { ACTIONS, STORE_SELECTOR_NAMESPACE } from './constant';
import { StoreSelector } from './selector.model';

const INITIAL_STATE: StoreSelector = {
    selectorSelections: []
};

function selectedHighlightHandler() {
    let id = 0;
    return (state: StoreSelector, action) => {
        const { start, end, value } = action.payload;
        const selectorSelections = [...state.selectorSelections, { start, end, value, id }];
        id++;

        return {
            ...state,
            selectorSelections
        };
    };
}

const REDUCER_MAP = {
    [ACTIONS.SELECTED_HIGHLIGHT]: selectedHighlightHandler()
};

function selectorReducer(state = INITIAL_STATE, action: Action) {
    const handler = REDUCER_MAP[action.type];
    return handler ? handler(state, action) : state;
}

export const selectorReducerStoreKey = {
    [STORE_SELECTOR_NAMESPACE]: selectorReducer
};
