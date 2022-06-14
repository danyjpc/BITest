import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchingGameComponent } from './matching-game/matching-game.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path: '', component: MatchingGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
