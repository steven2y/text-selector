import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TextListComponent } from './text-list/text-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SelectorComponent } from './selector/selector.component';
import { selectorReducerStoreKey } from './selector/selector.reducer';
import { SelectorContainerComponent } from './selector-container/selector-container.component';
import { SelectorSelectionsListComponent } from './selector-selections-list/selector-selections-list.component';


@NgModule({
    declarations: [
        AppComponent,
        SelectorComponent,
        TextListComponent,
        SelectorContainerComponent,
        SelectorSelectionsListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        StoreModule.forRoot(selectorReducerStoreKey)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
