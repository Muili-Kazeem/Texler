import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { SearchHomeComponent } from './components/search-home/search-home.component';

const routes: Routes = [
  { path:"", component: SearchHomeComponent },
  { path:"search/:game-search", component: SearchHomeComponent },
  { path:"details/:id", component: GameDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
