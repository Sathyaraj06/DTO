import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotificationBarCenterModule } from './shared/notification-bar-center/notification-bar-center.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationBarModule } from './shared/notification-bar/notification-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    SummaryViewComponent,
    DetailedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NotificationBarCenterModule,
    NotificationBarModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
