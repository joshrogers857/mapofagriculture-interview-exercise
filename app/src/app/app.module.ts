import { HttpClientModule } from "@angular/common/http";
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { StudentsComponent } from './students/components/students/students.component';
import { StudentComponent } from './students/components/student/student.component';
import { SearchComponent } from './students/components/search/search.component';

@NgModule({
              declarations: [
                  AppComponent,
                  StudentsComponent,
                  StudentComponent,
                  SearchComponent,
              ],
              imports:      [
                  BrowserModule,
                  AppRoutingModule,
                  HttpClientModule,
              ],
              providers:    [],
              bootstrap:    [ AppComponent ],
          })
export class AppModule {}
