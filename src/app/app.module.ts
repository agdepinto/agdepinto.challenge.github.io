import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { OptionsComponent } from './options/options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	IgxGridModule,
	IgxButtonGroupModule
 } from "igniteui-angular";
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { ModalModule } from 'ngx-bootstrap/modal';
 import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from'ngx-mask';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    GridComponent,
    OptionsComponent,
    Option1Component,
    Option2Component,
    Option3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxButtonGroupModule,
    ModalModule.forRoot(),
    CollapseModule,
    NgxMaskDirective, 
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
