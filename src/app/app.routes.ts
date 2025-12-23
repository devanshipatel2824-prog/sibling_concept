import { Routes } from '@angular/router';
import { Display } from './display/display';
import { Buttons } from './buttons/buttons';

export const routes: Routes = [

{
    path:'display',
    component:Display
},
{
    path:'buttons',
    component:Buttons
}
];
