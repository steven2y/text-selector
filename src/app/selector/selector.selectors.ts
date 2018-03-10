import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STORE_SELECTOR_NAMESPACE } from './constant';
import { StoreSelector } from './selector.model';


const fSelector = createFeatureSelector(STORE_SELECTOR_NAMESPACE);
export const getSelectorSelections = createSelector(
    fSelector,
    (state: StoreSelector) => state.selectorSelections
);
