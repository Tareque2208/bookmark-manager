import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaptchaComponent } from './add-bookmark/add-bookmark.component';
import { BookmarkRoutingModule } from './bookmark-routing.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { BookmarkManagerComponent } from './bookmark-manager/bookmark-manager.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ListBookmarksComponent } from './list-bookmarks/list-bookmarks.component';



@NgModule({
  imports: [BookmarkRoutingModule,
    CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgZorroAntdModule],
  declarations: [CaptchaComponent, BookmarkManagerComponent, ViewDetailsComponent, ListBookmarksComponent],
  exports: [CaptchaComponent]
})
export class BookmarkModule { }
