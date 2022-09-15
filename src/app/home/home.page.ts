import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private dataService: DataService, private navCtrl: NavController, private alertCtrl:AlertController) {
    this.dataService.getNotes().subscribe(res=>{
      console.log(res);
    })
  }

  name1:String;
  address_line1:String;
  address_line2:String;
  city:String;
  state:String;
  zipcode:String;
  gender:String;
  email:String;
  marks_12:number;
  marks_10:number;
  flag_filled=true;
  public message:string;
  name_flag=false;
  add1_flag=false;
  add2_flag=false;
  city_flag=false;
  state_flag=false;
  gender_flag=false;
  zipcode_flag=false;
  email_flag=false;
  marks12_flag=false;
  marks10_flag=false;
  emailAt_flag=false;

  submitData(){
    this.dataService.addNote({
        name: this.name1,
        address_line1: this.address_line1,
        address_line2: this.address_line2,
        city: this.city,
        state: this.state,
        gender:this.gender,
        zipcode: this.zipcode,
        email: this.email,
        marks_12: this.marks_12,
        marks_10: this.marks_10
      });
      this.navCtrl.navigateForward(['success'])
    }
    name_Check() 
    {
      this.name_flag=false;
      if(this.name1 == null || this.name1 == undefined)
      {
        
        this.message="Name not Filled";
        this.showAlert();
      }
      else{
        this.name_flag=true;
      }
    }

    add1_Check()
    {
      this.add1_flag=false;
      if(this.address_line1 == null || this.address_line1 == undefined)
      {
        this.message="Address Line 1 not Filled";
        this.showAlert();
        //give alert
      }
      else{
        this.add1_flag=true;
      }
    }

    add2_Check()
    {
      this.add2_flag=false;
      if(this.address_line2 == null || this.address_line2 == undefined)
      {
        this.message="Address Line 2 not Filled";
        this.showAlert();
        //give alert
      }
      else{
        this.add2_flag=true;
      }
    }

    city_Check()
    {
      this.city_flag=false;
      if(this.city == null || this.city == undefined)
      {
        this.message="City not Filled";
        this.showAlert();
        //give alert
      }
      else{
        this.city_flag=true;
      }
    }

    state_Check()
    {
      this.state_flag=false;
      if(this.state == null || this.state == undefined)
      {
        this.message="State not Filled";
        this.showAlert();
        //give alert
      }
      else{
        this.state_flag=true;
      }
    }

    zipcode_Check()
    {
      this.zipcode_flag=false;
      if(this.zipcode == null || this.zipcode == undefined)
      {
        
        this.message="Zipcode not Filled";
        this.showAlert();
      }
      else
      {
        if(this.zipcode.length !=6)
        {
          this.message="Zipcode should be 6 digits";
          this.showAlert();
          //alert
        } 
        else
        {
          this.zipcode_flag=true;
        }
      }
    }

    email_Check()
    {
      this.email_flag=false;
      this.emailAt_flag=false;
      if(this.email == null || this.email == undefined)
      {
        this.message="Email not Filled";
        this.showAlert();
        //give alert
      }
      else
      {
        for(let i=0;i< this.email.length;i++)
        {
          if(this.email.charAt(i)=='@')
          {
            this.emailAt_flag=true; 
          }
        }
        if(this.emailAt_flag == true)
        {
          this.email_flag=true;
        }
        else
        {
          this.message="Invalid Email";
          this.showAlert();
          // alert
        }
      }
    }

    gender_Check()
    {
      this.gender_flag=false;
      if(this.gender == null || this.gender == undefined)
      {
        this.message="Gender not Filled";
        this.showAlert();
        //give alert
      }
      else
      {
        this.gender_flag=true;
      }
    }

    marks12_Check()
    {
      this.marks12_flag=false;
      if(this.marks_12 == null || this.marks_12 == undefined)
      {
        this.message="12th Marks not Filled";
        this.showAlert();
      }
      else
      {
        if(this.marks_12>100 || this.marks_12<0)
        {
        this.message="12th Marks should be greater than 0 or less than 100";
        this.showAlert();
        }
        else
        {
          this.marks12_flag=true;
        }
      }
    }

    marks10_Check()
    {
      this.marks10_flag=false;
      if(this.marks_10 == null || this.marks_10 == undefined)
      {
        this.message="10th Marks not Filled";
        this.showAlert();
        
      }
      else
      {
        if(this.marks_10>100 || this.marks_10<0)
        {
          this.message="Marks should be greater than 0 or less than 100";
          this.showAlert();
        }
        else
        {
          
          this.marks10_flag=true;
        }
      }
    }
    
    flag_Check()
    {
      if(this.name_flag == false || this.add1_flag == false || this.add2_flag == false || this.city_flag == false || this.state_flag == false || this.zipcode_flag == false || this.email_flag == false || this.gender_flag == false || this.marks12_flag == false || this.marks10_flag == false)
      {
        this.flag_filled=true;
        console.log(this.name_flag,this.add1_flag,this.add2_flag,this.city_flag,this.state_flag,this.zipcode_flag,this.email_flag,this.gender_flag,this.marks12_flag,this.marks10_flag);
        // alert
      }
      else{
        this.flag_filled=false;

      }
    }

    async showAlert(){

      const alert= await this.alertCtrl.create({
        header: this.message,
        buttons: [
          {
            text: 'Ok',
            role: 'cancel'
          }
        ]
      });
      await alert.present();
    }
  }






