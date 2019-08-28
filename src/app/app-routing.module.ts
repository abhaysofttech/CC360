import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './pages/result/search-result/search-result.component';
import { SkuResultComponent } from './pages/result/sku-result/sku-result.component';
import { ResultComponent } from './pages/result/result.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateComponent } from './pages/update/update.component';
import { AboutComponent } from './pages/about/about.component';
import { ResultAttributesComponent } from './pages/result/result-attributes/result-attributes.component';

const appRoute: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, //Set the default route
  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'result', component: ResultComponent,
    // implement child routing
    children: [
      { path: '', component: SearchResultComponent },
      { path: 'result-attributes', component: ResultAttributesComponent },
      { path: ':id', component: SkuResultComponent }
    ]

  },
  {
    path: 'update', component: UpdateComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  // {
  //   path: 'search-result',
  //   component: SearchResultComponent
  // },
  // {
  //   path: 'sku-result',
  //   component: SkuResultComponent
  // },
  //route to define not found route
  {
    path: '**',
    redirectTo: '/result'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
