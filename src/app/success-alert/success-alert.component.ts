import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  <strong>Success! </strong>Indicates a successful or positive action.
</div>`,
  styles: [
    `
    /* The alert message box */
.alert {
    padding: 20px;
    background-color: #04AA6D; /* Green */
    color: white;
    margin-bottom: 15px;
  }
  
  /* The close button */
  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  /* When moving the mouse over the close button */
  .closebtn:hover {
    color: black;
  }
    `
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

