import { Meuscartoes2PageModule } from './../meuscartoes2/meuscartoes2.module';
import { Deletarqueridinho2PageModule } from './../deletarqueridinho2/deletarqueridinho2.module';
import { Deletarqueridinho1PageModule } from './../deletarqueridinho1/deletarqueridinho1.module';
import { PoliticasdaybeePageModule } from './../politicasdaybee/politicasdaybee.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'configuracoes',
        loadChildren: () => import('../configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
      },
      {
        path: 'meusinteresses',
        loadChildren: () => import('../meusinteresses/meusinteresses.module').then( m => m.MeusinteressesPageModule)
      },
      {
        path: 'politicasprivacidade',
        loadChildren: () => import('../politicasprivacidade/politicasprivacidade.module').then( m => m.PoliticasprivacidadePageModule)
      },
      {
        path: 'politicasdaybee',
        loadChildren: () => import('../politicasdaybee/politicasdaybee.module').then( m => m.PoliticasdaybeePageModule)
      },
      {
        path: 'configuracoesqueridinho',
        loadChildren: () => import('../configuracoesqueridinho/configuracoesqueridinho.module').then( m => m.ConfiguracoesqueridinhoPageModule)
      },
      {
        path: 'detalhesqueridinhos',
        loadChildren: () => import('../detalhesqueridinhos/detalhesqueridinhos.module').then( m => m.DetalhesqueridinhosPageModule)
      },
      {
        path: 'presentear1',
        loadChildren: () => import('../presentear1/presentear1.module').then( m => m.Presentear1PageModule)
      },
      {
        path: 'novointeresse',
        loadChildren: () => import('../novointeresse/novointeresse.module').then( m => m.NovointeressePageModule)
      },
      {
        path: 'novoqueridinho2',
        loadChildren: () => import('../novoqueridinho2/novoqueridinho2.module').then( m => m.Novoqueridinho2PageModule)
      },
      {
        path: 'novoqueridinho3',
        loadChildren: () => import('../novoqueridinho3/novoqueridinho3.module').then( m => m.Novoqueridinho3PageModule)
      },
      {
        path: 'novoqueridinho4',
        loadChildren: () => import('../novoqueridinho4/novoqueridinho4.module').then( m => m.Novoqueridinho4PageModule)
      },
      {
        path: 'ajusantecedencia',
        loadChildren: () => import('../ajusantecedencia/ajusantecedencia.module').then( m => m.AjusantecedenciaPageModule)
      },
      {
        path: 'datapersonalizada',
        loadChildren: () => import('../datapersonalizada/datapersonalizada.module').then( m => m.DatapersonalizadaPageModule)
      },
      {
        path: 'deletarqueridinho1',
        loadChildren: () => import('../deletarqueridinho1/deletarqueridinho1.module').then( m => m.Deletarqueridinho1PageModule)
      },
      {
        path: 'deletarqueridinho2',
        loadChildren: () => import('../deletarqueridinho2/deletarqueridinho2.module').then( m => m.Deletarqueridinho2PageModule)
      },
      {
        path: 'presentescomprados',
        loadChildren: () => import('../presentescomprados/presentescomprados.module').then( m => m.PresentescompradosPageModule)
      },
      {
        path: 'ajuda',
        loadChildren: () => import('../ajuda/ajuda.module').then( m => m.AjudaPageModule)
      },
      {
        path: 'comofunciona',
        loadChildren: () => import('../comofunciona/comofunciona.module').then( m => m.ComofuncionaPageModule)
      },
      {
        path: 'meuscartoes2',
        loadChildren: () => import('../meuscartoes2/meuscartoes2.module').then( m => m.Meuscartoes2PageModule)
      },
      {
        path: 'confirmacaoplano',
        loadChildren: () => import('../confirmacaoplano/confirmacaoplano.module').then( m => m.ConfirmacaoplanoPageModule)
      },
      {
        path: 'conhecaadaybee',
        loadChildren: () => import('../conhecaadaybee/conhecaadaybee.module').then( m => m.ConhecaadaybeePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
