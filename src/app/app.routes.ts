import { Routes } from '@angular/router';
import { Contect } from './contect/contect';
import { ContectForm } from './contect/contect-form/contect-form';
import { ContectList } from './contect/contect-list/contect-list';

export const routes: Routes = [
{
        path:'contect',
        component:Contect,
        children:[
            {
                path:'contect-form',
                component:ContectForm
            },
            {
                path:'contect-list',
                component:ContectList
            },
]
}


];
