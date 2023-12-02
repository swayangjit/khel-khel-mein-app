import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'otp-submission',
    loadChildren: () => import('./pages/onboarding/otp-submission/otp-submission.module').then( m => m.OtpSubmissionPageModule)
  },
  {
    path: 'persona-selection',
    loadChildren: () => import('./pages/onboarding/persona-selection/persona-selection.module').then( m => m.PersonaSelectionPageModule)
  },
  {
    path: 'language-selection',
    loadChildren: () => import('./pages/onboarding/language-selection/language-selection.module').then( m => m.LanguageSelectionPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/onboarding/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my-pitara',
    loadChildren: () => import('./pages/tabs/my-pitara/my-pitara.module').then( m => m.MyPitaraPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
