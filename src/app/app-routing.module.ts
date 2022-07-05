import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrderformComponent } from './orderform/orderform.component';
import { LoginComponent } from './login/login.component';
import { BusinesscardComponent } from './order/cards/businesscard/businesscard.component';
import { CalendarComponent } from './order/cards/calendar/calendar.component';
import { DiaryComponent } from './order/cards/diary/diary.component';
import { FlexComponent } from './order/cards/flex/flex.component';
import { InvitationcardComponent } from './order/cards/invitationcard/invitationcard.component';
import { LeafletComponent } from './order/cards/leaflet/leaflet.component';
import { MagazineComponent } from './order/cards/magazine/magazine.component';
import { NoteBookComponent } from './order/cards/note-book/note-book.component';
import { PackagingboxComponent } from './order/cards/packagingbox/packagingbox.component';
import { BrouchureComponent } from './order/cards/brouchure/brouchure.component';
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
import { PackagingrangeComponent } from './prange/packagingrange/packagingrange.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'order',component:OrderComponent},
  {path:'orderform',component:OrderformComponent},
  {path:'login',component:LoginComponent},
  {path:'businesscard',component:BusinesscardComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'diary',component:DiaryComponent},
  {path:'flex',component:FlexComponent},
  {path:'leaflet',component:LeafletComponent},
  {path:'magazine',component:MagazineComponent},
  {path:'note-book',component:NoteBookComponent},
  {path:'packagingbox',component:PackagingboxComponent},
  {path:'brouchure',component:BrouchureComponent},
  {path:'invitationcard',component:InvitationcardComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'broch',component:BrochComponent},
  {path:'business',component:BusinessComponent},
  {path:'calendarrange',component:CalendarrangeComponent},
  {path:'diaryrange',component:DiaryrangeComponent},
  {path:'flexrange',component:FlexrangeComponent},
  {path:'invitationrange',component:InvitationrangeComponent},
  {path:'leafletrange',component:LeafletrangeComponent},
  {path:'magazinerange',component:MagazinerangeComponent},
  {path:'notebookrange',component:NotebookrangeComponent},
  {path:'packagingrange',component:PackagingrangeComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'AdminDashboard',component:AdminDashboardComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
