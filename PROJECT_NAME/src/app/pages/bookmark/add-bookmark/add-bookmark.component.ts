// import { ReCaptchaService } from './../services/re-captcha.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class CaptchaComponent implements OnInit {

  isVisible: boolean = true;

  otpForm: FormGroup;

  // siteKey = environment.recaptcha.siteKey;
  recaptchaForm = this.fb.group({
    recaptcha: ['', Validators.required]
  });  

  @Output() addFavBookMark: EventEmitter<{success:boolean,message:string}> = new EventEmitter<{success:boolean,message:string}>();

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    // private reCaptchaService: ReCaptchaService
  ) {
    this.otpForm = this.fb.group({
      tamMainId: [null],
      occupationId: [null],
      levelId: [null],
      disabilityId: [null],
      applicationId: [null],
    });

   }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  addDataFromModal(captchaResponse: string) {

    this.addFavBookMark.emit({success: true,message:'successful'});
    // this.bookmarkaService.addBookMark({ captchaResponse: captchaResponse })
    //   .subscribe(
    //     (res: any) => {
    //       if (res.success) {                      
    //         this.isVisible = false;
    //       } else {           
    //         this.isVisible = true;;
    //       }

    //     },

        // (err) => {
        //   this.notification.error("Error", "Something went wrong while adding bookmark");
        // })

  }

  submitOtp(){
    
  }

}
