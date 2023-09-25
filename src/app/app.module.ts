import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibleComponent } from './bible/bible.component';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [AppComponent, BibleComponent],
  imports: [BrowserModule, AppRoutingModule, SkeletonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
