import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit, OnDestroy {
  onPermissionStartEditing$!: Subscription;
  editedItemId!: number;
  isEditMode!: boolean;
  editedItem: any;


  categoryList: { id: number; name: string }[] = [
    { id: 1, name: 'You better see this one' },
    { id: 2, name: 'Booom ! ! !' },
    { id: 3, name: 'Wanna play a game?' },
  ];

  constructor(
    private fb: FormBuilder
  ) {
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
}
