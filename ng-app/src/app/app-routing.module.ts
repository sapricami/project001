import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
	{
		path: 'home',
		//canActivate: [AuthGuardGuard],
		component: HomeComponent
	},
	{
		path: 'profile',
		//canActivate: [AuthGuardGuard],
		component: ProfileComponent
	},
/*	{
		path: 'reset-password',
		canActivate: [AuthGuardGuard],
		component: ResetPasswordComponent
	},
	{
		path: 'login',
		canActivate: [AuthGuardGuard],
		component: LoginComponent
	},
	{
		path: 'unauthorized',
		canActivate: [AuthGuardGuard],
		component: UnauthorizedComponent
	},
	{
		path: 'learner',
		component: MainContainerComponent,
		canActivate: [AuthGuardGuard],
		children: [
			{ 
				path: 'learning',
				canActivate: [AuthGuardGuard],
				loadChildren: 'app/learner/my-learning/my-learning.module#MyLearningModule'
			},
			{ 
				path: 'catalogue',
				canActivate: [AuthGuardGuard],
				loadChildren: 'app/learner/catalogue/catalogue.module#CatalogueModule'
			},
			{ 
				path: 'videos',
				canActivate: [AuthGuardGuard],
				loadChildren: 'app/learner/videos/videos.module#VideosModule'
			},
			{ 
				path: 'training',
				canActivate: [AuthGuardGuard],
				loadChildren: 'app/learner/training-history/training-history.module#TrainingHistoryModule'
			},
			{ 
				path: 'profile',
				canActivate: [AuthGuardGuard],
				loadChildren: 'app/learner/profile/profile.module#ProfileModule'
			}
		]
	},
    {
        path: 'open-sub-menu',
        canActivate: [AuthGuardGuard],
        component: SubMenuComponent,
    }*/
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			initialNavigation: true,
			enableTracing: false
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
