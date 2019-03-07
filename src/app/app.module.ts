import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { CommonModule }                       from '@angular/common';
import { FormsModule }                        from '@angular/forms';
import { PaginationService, TestDataService } from '@shared/services';
import { AppComponent }                       from './app.component';
import { PaginationComponent }                from './views/pagination/pagination.component';
import { ContentComponent }                   from './views/content/content.component';
import { DropDownComponent }                  from './components/drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ContentComponent,
    DropDownComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    PaginationService,
    TestDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
