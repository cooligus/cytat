import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CiteComponent } from './cite/cite.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { TreeSelectModule } from 'primeng/treeselect';
import { CiteService } from './cite/cite.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { FavouritesComponent } from './favourites/favourites.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CiteComponent, FavouritesComponent],
  imports: [
    BrowserModule,
    SkeletonModule,
    ButtonModule,
    TreeSelectModule,
    FormsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
  ],
  providers: [CiteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
