import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-bookmarks',
  templateUrl: './list-bookmarks.component.html',
  styleUrls: ['./list-bookmarks.component.scss'],
})
export class ListBookmarksComponent implements OnInit, OnDestroy {
  onPermissionStartEditing$!: Subscription;
  editedItemId!: number;
  isEditMode!: boolean;
  editedItem: any;
  previousDatas:any = [];


  categoryList: { id: number; name: string }[] = [
    { id: 1, name: 'You better see this one' },
    { id: 2, name: 'Booom ! ! !' },
    { id: 3, name: 'Wanna play a game?' },
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.getItem();
  }

  ngOnInit(): void {

  }

  submitForm(value: any): void {
  }

  resetForm(): void {
  }

  onModuleChange() {}

  ngOnDestroy(): void {
  }


  getItem(): any {
    // console.log(JSON.parse(localStorage.getItem('datas')));
    let localDatas = JSON.parse(localStorage.getItem("datas")|| '{}');
    this.previousDatas = localDatas;
    console.log(localDatas);
    return localDatas;
  }
}
