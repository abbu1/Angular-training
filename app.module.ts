import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; import { RouterModule} from '@angular/router'; 
import { AppComponent } from './app.component';
import { TraineeComponent } from './trainee/trainee.component';
 import {ReactiveFormsModule, FormsModule} from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    TraineeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([
         {
            path: 'app-trainee',
            component: TraineeComponent

         }
      ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
