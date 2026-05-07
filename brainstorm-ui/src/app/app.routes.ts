import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'library', loadComponent: () => import('./features/library/library').then(m => m.Library) },
    { path: 'decks', loadComponent: () => import('./features/decks/decks').then(m => m.Decks) },
    { path: 'play', loadComponent: () => import('./features/play/play').then(m => m.Play) },
    { path: 'stats', loadComponent: () => import('./features/stats/stats').then(m => m.Stats) },
    { path: 'settings', loadComponent: () => import('./features/settings/settings').then(m => m.Settings) },
];
