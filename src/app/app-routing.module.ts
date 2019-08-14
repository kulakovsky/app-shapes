import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DrawComponent} from './components/draw/draw.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            component: DrawComponent
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
