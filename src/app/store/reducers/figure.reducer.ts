import { Action } from '@ngrx/store';
import {FigureActionTypes} from '../actions/figure.actions';
import { Figure } from '../../models/figure.model';

export const initialState: Figure = {
    shape: '',
    color: '',
    history: [],
};

export function figureReducer(state = initialState, action: Action) {
    switch (action.type) {

        case FigureActionTypes.Undo:
            return state;

        case FigureActionTypes.ChangeShape:
            return state;

        case FigureActionTypes.ChangeColor:
            return state;

        default:
            return state;
    }
}