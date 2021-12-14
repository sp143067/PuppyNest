import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppy-sitter',
  templateUrl: './puppy-sitter.component.html',
  styleUrls: ['./puppy-sitter.component.css']
})
export class PuppySitterComponent implements OnInit {


  public zipCode = '';
  breedType = "";
  lengthSitting = ""
  foundPuppySitter = false;
  errorMessage = false;
  constructor() { }


  ngOnInit(): void {
  }


  searchPuppySitter() {
    this.foundPuppySitter = false;
    this.errorMessage = false;
    if (this.breedType !== '' && this.lengthSitting !== '' && this.zipCode !== '') {
      this.foundPuppySitter = true;
    } else {
      this.errorMessage = true;
    }
  }
}
