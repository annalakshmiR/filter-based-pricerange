import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { OrderformComponent } from './orderform/orderform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSliderModule} from '@angular/material/slider';
import { BusinesscardComponent } from './order/cards/businesscard/businesscard.component';
import { PackagingboxComponent } from './order/cards/packagingbox/packagingbox.component';
import { InvitationcardComponent } from './order/cards/invitationcard/invitationcard.component';
import { BrouchureComponent } from './order/cards/brouchure/brouchure.component';
import { CalendarComponent } from './order/cards/calendar/calendar.component';
import { MagazineComponent } from './order/cards/magazine/magazine.component';
import { FlexComponent } from './order/cards/flex/flex.component';
import { LeafletComponent } from './order/cards/leaflet/leaflet.component';
import { DiaryComponent } from './order/cards/diary/diary.component';
import { NoteBookComponent } from './order/cards/note-book/note-book.component';
import {HttpClientModule} from '@angular/common/http';
import{MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FeedbackComponent } from './feedback/feedback.component';
import { BrochComponent } from './prange/broch/broch.component';
import { BusinessComponent } from './prange/business/business.component';
import { CalendarrangeComponent } from './prange/calendarrange/calendarrange.component';
import { DiaryrangeComponent } from './prange/diaryrange/diaryrange.component';
import { FlexrangeComponent } from './prange/flexrange/flexrange.component';
import { InvitationrangeComponent } from './prange/invitationrange/invitationrange.component';
import { LeafletrangeComponent } from './prange/leafletrange/leafletrange.component';
import { MagazinerangeComponent } from './prange/magazinerange/magazinerange.component';
import { NotebookrangeComponent } from './prange/notebookrange/notebookrange.component';
import { PackagingrangeComponent } from './prange/packagingrange/packagingrange.component'
import { DataService } from './data.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OrderComponent,
    FooterComponent,
    LoginComponent,
    OrderformComponent,
    BusinesscardComponent,
    PackagingboxComponent,
    InvitationcardComponent,
    BrouchureComponent,
    CalendarComponent,
    MagazineComponent,
    FlexComponent,
    LeafletComponent,
    DiaryComponent,
    NoteBookComponent,
    FeedbackComponent,
    BrochComponent,
    BusinessComponent,
    CalendarrangeComponent,
    DiaryrangeComponent,
    FlexrangeComponent,
    InvitationrangeComponent,
    LeafletrangeComponent,
    MagazinerangeComponent,
    NotebookrangeComponent,
    PackagingrangeComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MdbCarouselModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatSliderModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(faFilm,faFish,fas,far);
  }
 }
