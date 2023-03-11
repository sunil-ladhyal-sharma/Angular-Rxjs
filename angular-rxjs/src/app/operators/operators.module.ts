import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromComponent } from './from/from.component';

const routes : Routes = [{
    path : 'from',
    component : FromComponent

    // children : [
    //     {path: 'from',
    //      component:FromComponent}
    // ]
}
]
@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class OperatorsModule {}