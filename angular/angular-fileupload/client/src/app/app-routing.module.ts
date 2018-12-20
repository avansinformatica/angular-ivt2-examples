import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UploadFileComponent } from './components/images/upload.form/upload.file.component';
import { UploadFileBodyComponent } from './components/images/upload.reqbody/upload.file.component';
import { ImageListComponent } from './components/images/image.list/image.list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'upload-via-ng2upload', component: UploadFileComponent },
  { path: 'upload', component: UploadFileBodyComponent },
  { path: 'images', component: ImageListComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
