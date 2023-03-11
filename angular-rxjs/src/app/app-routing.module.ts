import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsModule } from './operators/operators.module';

const routes: Routes = [
  {path : '',
  loadChildren : () =>  import('./operators/operators.module').then( m => OperatorsModule )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
