import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CiteComponent } from './cite/cite.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { CiteService } from './cite/cite.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ParamsGettingComponent } from './params-getting/params-getting.component';

@NgModule({
  declarations: [AppComponent, CiteComponent, ParamsGettingComponent ],
  imports: [
    BrowserModule,
    SkeletonModule,
    ButtonModule,
    ReactiveFormsModule,
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
