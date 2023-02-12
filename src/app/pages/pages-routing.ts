import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ThisIsUsComponent } from "./this-is-us/this-is-us.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LeagueComponent } from './league/league.component';
import { ProfileComponent } from './profile/profile.component';
import { MemberComponent } from './member/member.component';
import { AuthGuard } from "../shared/guards/auth.guard";
import { CoachesComponent } from "./coaches/coaches.component";
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from "./teams/teams.component";
import { AdminLeagueComponent } from './admin-league/admin-league.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'thisisus',
                component: ThisIsUsComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'league/:league',
                component: LeagueComponent
            },
            {
                path: 'profile/:typeRole',
                component: ProfileComponent,
                //canActivate: [AuthGuard]
            },
            {
                path: 'member',
                component: MemberComponent,
                //canActivate: [AuthGuard]
            },
            {
                path: 'player',
                component: PlayersComponent,
                //canActivate: [AuthGuard]
            },
            {
                path: 'member/couches',
                component: CoachesComponent 
            },
            {
                path: 'team',
                component: TeamsComponent,
                //canActivate: [AuthGuard]
            },
            {
                path: 'adminLeague',
                component: AdminLeagueComponent,
                //canActivate: [AuthGuard]
            },
            {
                path: 'adminTeam',
                component: AdminTeamComponent,
                //canActivate: [AuthGuard]
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class PagesRoutingModule {}