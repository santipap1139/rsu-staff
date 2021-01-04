import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LogInComponent } from './layout/log-in/log-in.component';
import { MenuLeftLayoutComponent } from './layout/menu-left-layout/menu-left-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    {
      path:'load',
      // canActivate:[AuthGuard],
      // redirectTo:'/load',
      component:LogInComponent,
      pathMatch:'full'
    },
   
    {
      path:'app',
      canActivate:[AuthGuard],
      canActivateChild:[AuthGuard],
      component:MenuLeftLayoutComponent,
      children:[
        {
          path:'',
          redirectTo:'Project',
          pathMatch:'full'
        },
        // {
        //   path:'login',
        //   loadChildren: () => import('./feature/authen/authen.module')
        //     .then(x => x.AuthenModule)
        // },
        {
          path:'Project',
          canActivate:[AuthGuard],
          canActivateChild:[AuthGuard],
          loadChildren: () => import('./feature/project-schedule/project-schedule.module')
            .then(x => x.ProjectScheduleModule)
        },
       
      ]
    },
    {
      path:'**',
      redirectTo:'sing-in'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
