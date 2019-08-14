import {Action} from '@ngrx/store';
import {FigureActionTypes} from '../actions/figure.actions';
import { Figure } from '../../models/figure.model';

export const initialState: Figure = {
    shape: '',
    color: '',
    history: [{shape: '', color: ''}],
};

export function figureReducer(state = initialState, action: Action) {
    switch (action.type) {

        case FigureActionTypes.Undo:

            const lastFigure = state.history[state.history.length - 2];


            if (state.history.length > 1) {

                state.history.pop();

            }

            return {shape: lastFigure.shape, color: lastFigure.color, history: state.history};

        case FigureActionTypes.ChangeShape:

            const newShape = action['payload'].shape;

            return {shape: newShape, color: state.color, history: [...state.history, {shape: newShape, color: state.color}]};

        case FigureActionTypes.ChangeColor:

            const newColor = action['payload'].color;

            return {shape: state.shape, color: newColor, history: [...state.history, {shape: state.shape, color: newColor}]};

        default:
            return state;
    }
}