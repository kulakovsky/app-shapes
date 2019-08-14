import {Action} from '@ngrx/store';

export enum FigureActionTypes {
    Undo = '[Figure] Undo',
    ChangeShape = '[Figure] ChangeShape',
    ChangeColor = '[Figure] ChangeColor',
}

export class Undo implements Action {
    readonly type = FigureActionTypes.Undo;
}

export class ChangeShape implements Action {
    readonly type = FigureActionTypes.ChangeShape;
}

export class ChangeColor implements Action {
    readonly type = FigureActionTypes.ChangeColor;
}
