import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibleComponent } from './bible/bible.component';

const routes: Routes = [{ path: '', component: BibleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
