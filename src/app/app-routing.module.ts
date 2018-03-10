import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextListComponent } from './text-list/text-list.component';
import { SelectorContainerComponent } from './selector-container/selector-container.component';

const routes: Routes = [
    { path: '', redirectTo: '/selector', pathMatch: 'full' },
    { path: 'list', component: TextListComponent },
    { path: 'selector', component: SelectorContainerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
