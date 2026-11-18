import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'composiciones',
    loadComponent: () =>
      import('./features/compositions/compositions.component').then((m) => m.CompositionsComponent),
  },
  {
    path: 'tutoriales',
    loadComponent: () =>
      import('./features/tutorials/tutorials.component').then((m) => m.TutorialsComponent),
  },
  {
    path: 'noticias',
    loadComponent: () => import('./features/news/news.component').then((m) => m.NewsComponent),
  },
  { path: 'guias', redirectTo: 'noticias', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./core/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
