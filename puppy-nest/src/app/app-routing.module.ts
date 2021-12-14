import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAPuppyComponent } from './components/find-a-puppy/find-a-puppy.component';
import { CustomersBlogComponent } from './components/customers-blog/customers-blog.component';
import { CustomersFeedbackComponent } from './components/customers-feedback/customers-feedback.component';
import { PuppySitterComponent } from './components/puppy-sitter/puppy-sitter.component';
import { KnowYourPuppyComponent } from './components/know-your-puppy/know-your-puppy.component';

const routes: Routes = [
  {
    path: 'find-a-puppy',
    component: FindAPuppyComponent
  },
  {
    path: 'customers-blog',
    component: CustomersBlogComponent
  },
  {
    path: 'customers-feedback',
    component: CustomersFeedbackComponent
  },
  {
    path: 'puppy-sitter',
    component: PuppySitterComponent
  },
  {
    path: 'know-your-puppy',
    component: KnowYourPuppyComponent
  },
  {
    path: '**',
    redirectTo: 'find-a-puppy'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
