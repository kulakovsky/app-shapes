import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-figure',
    templateUrl: './figure.component.html',
    styleUrls: ['./figure.component.sass']
})
export class FigureComponent implements OnInit {

    @Input() color: string;
    @Input() shape: string;

    constructor() {
    }

    ngOnInit() {
    }

}
