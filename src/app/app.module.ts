import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabaseService } from './services/database.service';
import { Routes, RouterModule } from '@angular/router';
import { AddSenderComponent } from './components/add-sender/add-sender.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { ListParcelsComponent } from './components/list-parcels/list-parcels.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {DeleteSenderComponent} from './components/delete-sender/delete-sender.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { ListSendersComponent } from './components/list-senders/list-senders.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "addsender", component: AddSenderComponent },
  { path: "addparcel", component: AddParcelComponent },
  { path: "listsenders", component: ListSendersComponent },
  { path: "listparcels", component: ListParcelsComponent },
  { path: "deletesender", component: DeleteSenderComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  declarations: [AppComponent, AddSenderComponent, DeleteSenderComponent, AddParcelComponent, ListParcelsComponent, DashboardComponent, PageNotFoundComponent, ListSendersComponent],
  imports: [RouterModule.forRoot(appRoutes),BrowserModule,HttpClientModule,FormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerImmediately'
})],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
