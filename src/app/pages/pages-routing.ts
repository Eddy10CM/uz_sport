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
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'member',
                component: MemberComponent,
                canActivate: [AuthGuard]
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