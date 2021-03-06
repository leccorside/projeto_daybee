import { AuthGuard } from './guards/auth.guard';
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
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
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
  },
  {
    path: 'novoqueridinho2',
    loadChildren: () => import('./novoqueridinho2/novoqueridinho2.module').then( m => m.Novoqueridinho2PageModule)
  },
  {
    path: 'novoqueridinho3',
    loadChildren: () => import('./novoqueridinho3/novoqueridinho3.module').then( m => m.Novoqueridinho3PageModule)
  },
  {
    path: 'novoqueridinho4',
    loadChildren: () => import('./novoqueridinho4/novoqueridinho4.module').then( m => m.Novoqueridinho4PageModule)
  },
  {
    path: 'novointeresse',
    loadChildren: () => import('./novointeresse/novointeresse.module').then( m => m.NovointeressePageModule)
  },
  {
    path: 'datapersonalizada',
    loadChildren: () => import('./datapersonalizada/datapersonalizada.module').then( m => m.DatapersonalizadaPageModule)
  },
  {
    path: 'ajusantecedencia',
    loadChildren: () => import('./ajusantecedencia/ajusantecedencia.module').then( m => m.AjusantecedenciaPageModule)
  },
  {
    path: 'presentear1',
    loadChildren: () => import('./presentear1/presentear1.module').then( m => m.Presentear1PageModule)
  },
  {
    path: 'presentear2',
    loadChildren: () => import('./presentear2/presentear2.module').then( m => m.Presentear2PageModule)
  },
  {
    path: 'presentear3',
    loadChildren: () => import('./presentear3/presentear3.module').then( m => m.Presentear3PageModule)
  },
  {
    path: 'meuscartoes',
    loadChildren: () => import('./meuscartoes/meuscartoes.module').then( m => m.MeuscartoesPageModule)
  },
  {
    path: 'novocartao',
    loadChildren: () => import('./novocartao/novocartao.module').then( m => m.NovocartaoPageModule)
  },
  {
    path: 'novoendereco',
    loadChildren: () => import('./novoendereco/novoendereco.module').then( m => m.NovoenderecoPageModule)
  },
  {
    path: 'confirmacompra',
    loadChildren: () => import('./confirmacompra/confirmacompra.module').then( m => m.ConfirmacompraPageModule)
  },
  {
    path: 'pedidoconfirmado',
    loadChildren: () => import('./pedidoconfirmado/pedidoconfirmado.module').then( m => m.PedidoconfirmadoPageModule)
  },
  {
    path: 'planomensal',
    loadChildren: () => import('./planomensal/planomensal.module').then( m => m.PlanomensalPageModule)
  },
  {
    path: 'meuscartoes2',
    loadChildren: () => import('./meuscartoes2/meuscartoes2.module').then( m => m.Meuscartoes2PageModule)
  },
  {
    path: 'confirmacaoplano',
    loadChildren: () => import('./confirmacaoplano/confirmacaoplano.module').then( m => m.ConfirmacaoplanoPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'meusinteresses',
    loadChildren: () => import('./meusinteresses/meusinteresses.module').then( m => m.MeusinteressesPageModule)
  },
  {
    path: 'politicasprivacidade',
    loadChildren: () => import('./politicasprivacidade/politicasprivacidade.module').then( m => m.PoliticasprivacidadePageModule)
  },
  {
    path: 'politicasdaybee',
    loadChildren: () => import('./politicasdaybee/politicasdaybee.module').then( m => m.PoliticasdaybeePageModule)
  },
  {
    path: 'configuracoesqueridinho',
    loadChildren: () => import('./configuracoesqueridinho/configuracoesqueridinho.module').then( m => m.ConfiguracoesqueridinhoPageModule)
  },
  {
    path: 'deletarqueridinho1',
    loadChildren: () => import('./deletarqueridinho1/deletarqueridinho1.module').then( m => m.Deletarqueridinho1PageModule)
  },
  {
    path: 'deletarqueridinho2',
    loadChildren: () => import('./deletarqueridinho2/deletarqueridinho2.module').then( m => m.Deletarqueridinho2PageModule)
  },
  {
    path: 'presentescomprados',
    loadChildren: () => import('./presentescomprados/presentescomprados.module').then( m => m.PresentescompradosPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'comofunciona',
    loadChildren: () => import('./comofunciona/comofunciona.module').then( m => m.ComofuncionaPageModule)
  },
  {
    path: 'conhecaadaybee',
    loadChildren: () => import('./conhecaadaybee/conhecaadaybee.module').then( m => m.ConhecaadaybeePageModule)
  },
  {
    path: 'redefinirsenha',
    loadChildren: () => import('./redefinirsenha/redefinirsenha.module').then( m => m.RedefinirsenhaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
