import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptchaComponent } from './add-bookmark/add-bookmark.component';
import { BookmarkManagerComponent } from './bookmark-manager/bookmark-manager.component';

const routes: Routes = [
  { path: '', component: BookmarkManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkRoutingModule { }
