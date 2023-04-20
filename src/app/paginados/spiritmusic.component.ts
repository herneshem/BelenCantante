import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-spiritmusic',
    templateUrl: './spiritmusic.component.html',
    styleUrls: ['../app.component.css']

})
export class SpiritmusicComponent implements OnInit{
    constructor(){}
    ngOnInit(): void {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }
    
}