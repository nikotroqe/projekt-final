import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface countDashboard{
  followers: number;
  following: number;
  questions: number;
  answers: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard:  countDashboard =
  {followers: 345, following: 40, questions: 12, answers: 40};


  iamFollowing = true;
  youFollowing = true;
  iamSending = true;
  youSending = true;


//Follow
  follow(){
    this.iamFollowing?
    this.dashboard.followers++:this.dashboard.followers--;
    this.iamFollowing = !this.iamFollowing;
    if (this.iamFollowing) {
      
      return;
    }else{
      setTimeout(() => {
        this.youFollowing?
        this.dashboard.following++ : this.dashboard.following--;
        this.youFollowing = !this.youFollowing;
        alert("Gregory accepted the request. \nThank You!");
      }, 5000)
    }
  }
//Send Message
  onSending(){
    this.send = true;
      
    if (this.messageAdd.invalid && this.iamSending) {
      return ;
    }else{
        this.iamSending?
        this.dashboard.questions++:this.dashboard.questions++;
        this.iamSending = !this.iamSending;
      } if(this.messageAdd.invalid && this.iamSending){
        return;
    }else{
      setTimeout(() => {
        this.youSending?
        this.dashboard.answers++ : this.dashboard.answers++;
        this.youSending = !this.youSending;
        alert("Pershendetje! Ne todo list duhet te shtosh disa produkte te caktura qe kerkojne klientet!");
      }, 10000)
    }
  }

  //form Message

  
  messageAdd: FormGroup = this.formMessage.group(
    {
      email: ['', [Validators.required, Validators.email]],
    },
  );
  send = false;
  constructor(private formMessage: FormBuilder) { }

  get x(): { [key: string]: AbstractControl } {
    return this.messageAdd.controls;
  }


  ngOnInit(): void {
  }


}
