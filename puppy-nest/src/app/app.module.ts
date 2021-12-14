import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindAPuppyComponent } from './components/find-a-puppy/find-a-puppy.component';
import { PuppySitterComponent } from './components/puppy-sitter/puppy-sitter.component';
import { KnowYourPuppyComponent } from './components/know-your-puppy/know-your-puppy.component';
import { CustomersFeedbackComponent } from './components/customers-feedback/customers-feedback.component';
import { CustomersBlogComponent } from './components/customers-blog/customers-blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FindAPuppyComponent,
    PuppySitterComponent,
    KnowYourPuppyComponent,
    CustomersFeedbackComponent,
    CustomersBlogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
