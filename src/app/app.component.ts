import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addedText = " Angular (commonly referred to as \"Angular 2+\" or \"Angular v2 and above\")[4][5]" +
    " is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of" +
    " individuals and corporations. Angular is a complete rewrite from the " +
    "same team that built AngularJS.";
  posts: {title: string, content: string, loveIts: number, hate: number, created_at: Date }[] = [
    {title:'post1',content:"contenu1 " + this.addedText,loveIts: 0,hate: 0,created_at: new Date()},
    {title:'post2',content:"contenu2 "+ this.addedText,loveIts: 0,hate: 0,created_at: new Date()},
    {title:'post3',content:"contenu3 "+ this.addedText,loveIts: 0,hate: 0,created_at: new Date()},
    {title:'post4',content:"contenu4 "+ this.addedText,loveIts: 0,hate: 0,created_at: new Date()}
  ];
  plusLoveIt(p: {title: string, content: string, loveIts: number, created_at: Date }){
    p.loveIts++;
  }

  dissLoveIt(p: {title: string, content: string, loveIts: number, hate: number, created_at: Date }) {
    p.hate++;
  }

}
