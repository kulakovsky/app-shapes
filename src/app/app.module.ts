import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {figureReducer} from './store/reducers/figure.reducer';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {FormsModule} from '@angular/forms';
import { DrawComponent } from './components/draw/draw.component';
import { FigureComponent } from './components/figure/figure.component';

@NgModule({
    declarations: [
        AppComponent,
        DropdownComponent,
        DrawComponent,
        FigureComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot({ figure: figureReducer }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
