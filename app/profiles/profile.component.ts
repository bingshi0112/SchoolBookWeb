import { Component } from '@angular/core';
@Component({
  selector: 'profile',
  template: `
  <div class = "container-fluid">
    <div class = "row">
      <div class = "col-xs-4"></div>
      <div class = "col-xs-4"></div>
      <div class = "col-xs-4"></div>
    </div>
    <div class = "row">
      <div class = "col-xs-4" id = "circle">
        <a class = "btn btn-default" routerLink="/searchProfile"><p id = "links">Searching a profile</p></a>
      </div>
      <div class = "col-xs-4" id = "circle">
        <a class = "btn btn-default" routerLink="/userProfile"><p id = "links">Access to your profile</p></a>
      </div>
      <div class = "col-xs-4" id = "circle">
        <a class = "btn btn-default" routerLink="/makeProfile"><p id = "links">Make your profile</p></a>
      </div>
    </div>
    <div class = "row">
      <div class = "col-xs-4"></div>
      <div class = "col-xs-4"></div>
      <div class = "col-xs-4"></div>
    </div>
  </div>

  <router-outlet></router-outlet>


  `,
  styles: [`
    .row{
      position: relative;
      background-color: #80CBC4;
    }
    .col-xs-4{
      height: 33vh;
    }
    .btn{
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 240px;
      height: 240px;
      border-radius: 50%;
      background-color: #2196F3 !important;
    }
    #links{
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      color: white;
    }
    `]
})

export class ProfileComponent {
}
