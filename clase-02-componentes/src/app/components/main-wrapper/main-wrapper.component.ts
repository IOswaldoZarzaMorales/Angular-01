import { Component } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `<main>
    <!-- <ng-content select="h1"/>
    <ng-content/> -->
    <ng-content/>
    </main>`,
  styles: `
  main{
    // background-color:yellow
    padding: 20px
  }`,
})
export class MainWrapperComponent {

}