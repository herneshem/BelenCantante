import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-stylemusic',
    templateUrl: './stylemusic.component.html',
    styleUrls: ['stylemusic.component.css', '../app.component.css']


})
export class stylemusicComponent implements OnInit{

    constructor(){}
    ngOnInit(): void {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }

    showDivOne: boolean = true;
    showDivTwo: boolean = false;
    showDivThree: boolean = false;
    titlestyle=""
    latina(){
        this.showDivOne = true;
        this.showDivTwo = false;
        this.showDivThree = false;
        this.titlestyle="Música Latina"

    }
    jazz(){
        this.showDivOne = false;
        this.showDivTwo = true;
        this.showDivThree = false;
        this.titlestyle="Jazz"

    }

    tualuta(){
        this.showDivOne = false;
        this.showDivTwo = false;
        this.showDivThree = true;
        this.titlestyle="Tualuta"

    }
}