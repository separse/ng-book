import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  template: '<h1>Protected</h1>',
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
