export interface SelectorSelection {
    id: number;
    start: number;
    end: number;
    value: string;
}

export interface StoreSelector {
    selectorSelections: SelectorSelection[];
}
