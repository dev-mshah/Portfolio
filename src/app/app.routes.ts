import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CodingComponent } from './coding/coding.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'problems',
        component: CodingComponent
    }
];
