import { Routes } from '@angular/router';
import { MangaListComponent } from './manga/manga-list/manga-list.component';
import { MangaDetailsComponent } from './manga/manga-details/manga-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: 'manga', component: MangaListComponent },
    { path: 'manga/:id', component: MangaDetailsComponent }, 
    { path: '', redirectTo: 'manga', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },

];
