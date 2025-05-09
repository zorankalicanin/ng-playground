import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('../app/home/home-page/home-page.component').then(m => m.HomePageComponent) },
    { path: 'tables', loadComponent: () => import('../app/tables/tables-page/tables-page.component').then(m => m.TablesPageComponent) },
    { path: 'processes', loadComponent: () => import('../app/processes/processes-page/processes-page.component').then(m => m.ProcessesPageComponent) },
    { path: 'schema', loadComponent: () => import('../app/schema/schema-page/schema-page.component').then(m => m.SchemaPageComponent) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
