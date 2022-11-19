import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-bookmark-manager',
  templateUrl: './bookmark-manager.component.html',
  styleUrls: ['./bookmark-manager.component.scss'],
})
export class BookmarkManagerComponent implements OnInit {
  editedItemId!: number;
  isEditMode!: boolean;
  editedItem: any;
  previousDatas:any = [];
  isAddBookmarkVisible: boolean = false;
  isAddNewCategory: boolean = false;
  otpForm: FormGroup;


  categoryList: { id: number; name: string }[] = [
    { id: 1, name: 'You better see this one' },
    { id: 4, name: 'Booom ! ! !' },
    { id: 5, name: 'Wanna play a game?' },
  ];

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {

    this.otpForm = this.fb.group({
      title: [null],
      url: [null],
      selectedCategoryId: [null],
      newCategoryName: [null]
    });
  }

  ngOnInit() {this.getItem("datas")}

  //#region modal
  showModal(): void {
    this.isAddBookmarkVisible = true;
  }

  handleCancel(): void {
    this.isAddBookmarkVisible = false;
    this.otpForm.reset();
  }

  addNewCategory(): void {
    this.isAddNewCategory = true;
    this.otpForm.reset();
  }

  getItem(key: string): any {
    // console.log(JSON.parse(localStorage.getItem('datas')));
    let localDatas = JSON.parse(localStorage.getItem("datas")|| '{}');
    this.previousDatas = localDatas;
    console.log(localDatas);
    return localDatas;
  }

  submitOtp(){
    this.isAddBookmarkVisible = false;
    const reportMap = new Map();
    // const dataList = [];
    let i = 1;

    

    if(this.otpForm.value.selectedCategoryId == 1){

    }


    this.previousDatas.map(function(person: any) {
      return addKeyValue(person, 'newKey', 'newValue');
    });
    // if(this.previousDatas.length > 1){
    //   for (const data of this.previousDatas) {
    //     reportMap.set('#SL', i);
    //     reportMap.set('Title', data.title);
    //     reportMap.set('Url', data.url);
    //     let selectedCat = this.categoryList.find(
    //       (cat) => cat.id == data.selectedCategoryId
    //     );
    //     reportMap.set('Selected Category', selectedCat);
    //     reportMap.set('New Category Name', data.newCategoryName);
  
    //     const jsonObject: any = {};
    //     reportMap.forEach((value, key) => {
    //       jsonObject[key] = value;
    //     });
  
    //     dataList.push(jsonObject);
    //     i++;
    //   }
    // }else{
    //   reportMap.set('#SL', i);
    //     reportMap.set('Title', this.otpForm.controls['title']);
    //     reportMap.set('Url', this.otpForm.controls['url']);
    //     let selectedCat = this.categoryList.find(
    //       (cat) => cat.id == this.otpForm.controls['selectedCategoryId'].value
    //     );
    //     // reportMap.set('Selected Category', selectedCat);
    //     reportMap.set('Selected Category', this.otpForm.controls['selectedCat']);
    //     reportMap.set('New Category Name', this.otpForm.controls['newCategoryName']);
  
    //     const jsonObject: any = {};
    //     reportMap.forEach((value, key) => {
    //       jsonObject[key] = value;
    //     });
  
    //     dataList.push(jsonObject);
    //     i++;
    // }
    
    // this.previousDatas = this.previousDatas.push(JSON.stringify(dataList));
    localStorage.setItem("datas", this.previousDatas);
  }


// addKeyValue(newObj, objKey, objVal){
//   newObj[objKey] = datobjVala;
// }

// let newinfo = persons.map(function(person) {
//   return addKeyValue(person, 'newKey', 'newValue');
// });



addKeyValue(obj: { [x: string]: any; }, key: string | number, data: any){
  obj[key] = data;
}
 

// var newinfo = 


}
function addKeyValue(person: any, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}

