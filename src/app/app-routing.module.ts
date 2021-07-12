import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'esquecisenha',
    loadChildren: () => import('./esquecisenha/esquecisenha.module').then( m => m.EsquecisenhaPageModule)
  },
  {
    path: 'cadastro1',
    loadChildren: () => import('./cadastro1/cadastro1.module').then( m => m.Cadastro1PageModule)
  },
  {
    path: 'cadastro2',
    loadChildren: () => import('./cadastro2/cadastro2.module').then( m => m.Cadastro2PageModule)
  },
  {
    path: 'cadastro3',
    loadChildren: () => import('./cadastro3/cadastro3.module').then( m => m.Cadastro3PageModule)
  },
  {
    path: 'cadastro4',
    loadChildren: () => import('./cadastro4/cadastro4.module').then( m => m.Cadastro4PageModule)
  },
  {
    path: 'contacriada',
    loadChildren: () => import('./contacriada/contacriada.module').then( m => m.ContacriadaPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'detalhesqueridinhos',
    loadChildren: () => import('./detalhesqueridinhos/detalhesqueridinhos.module').then( m => m.DetalhesqueridinhosPageModule)
  },  {
    path: 'novoqueridinho2',
    loadChildren: () => import('./novoqueridinho2/novoqueridinho2.module').then( m => m.Novoqueridinho2PageModule)
  },
  {
    path: 'novoqueridinho3',
    loadChildren: () => import('./novoqueridinho3/novoqueridinho3.module').then( m => m.Novoqueridinho3PageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
