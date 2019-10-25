import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { PersonaIndexComponent } from './persona-index/persona-index.component';
import { PersonaFormComponent } from './persona-form/persona-form.component';

import { EgresadosIndexComponent } from './egresados-index/egresados-index.component';
import { EgresadosFormComponent } from './egresados-form/egresados-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products',  component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'shipping', component: ShippingComponent },

  { path: 'personaindex',  component: PersonaIndexComponent },
  { path: 'personaform',  component: PersonaFormComponent },
  { path: 'personaform/:id',  component: PersonaFormComponent },

  { path: 'egresadosindex',  component: EgresadosIndexComponent },
  { path: 'egresadosform',  component: EgresadosFormComponent },
  { path: 'egresadosform/:id',  component: EgresadosFormComponent },
  

  



  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ClienteIndexComponent,
    ClienteFormComponent,
    PersonaIndexComponent,
    PersonaFormComponent,
    EgresadosIndexComponent,
    EgresadosFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
