import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { GameComponent } from './Components/game/game.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'game', component: GameComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }