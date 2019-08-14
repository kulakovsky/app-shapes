import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Figure} from '../../models/figure.model';
import {Observable} from 'rxjs/internal/Observable';
import {ChangeShape, FigureActionTypes} from '../../store/actions/figure.actions';

@Component({
    selector: 'app-draw',
    templateUrl: './draw.component.html',
    styleUrls: ['./draw.component.sass']
})
export class DrawComponent implements OnInit {

    figure: Observable<Figure>;

    constructor(private store: Store<{ figure: Figure }>) {

        this.figure = store.pipe(
            select('figure')
        );
    }

    colors = [
        'green',
        'red',
        'blue'
    ];

    shapes = [
        'square',
        'circle',
        'triangle',
        'rectangle'
    ];

    onSelectingShape(shape: string) {

        this.store.dispatch(({type:  FigureActionTypes.ChangeShape, payload: {shape: shape}}));
    }

    onSelectingColor(color: string) {

        this.store.dispatch(({type:  FigureActionTypes.ChangeColor, payload: {color: color}}));
    }

    onUndo() {

        this.store.dispatch(({type:  FigureActionTypes.Undo}))

    }

    ngOnInit() {
    }

}
