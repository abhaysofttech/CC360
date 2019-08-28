import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './pages/result/search-result/search-result.component';
import { SkuResultComponent } from './pages/result/sku-result/sku-result.component';
import { ResultHeaderComponent } from './pages/result/result-header/result-header.component';
import { ResultComponent } from './pages/result/result.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalSearchComponent } from './components/local-search/local-search.component';
import { UpdateComponent } from './pages/update/update.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ResultAttributesComponent } from './pages/result/result-attributes/result-attributes.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    SkuResultComponent,
    ResultHeaderComponent,
    ResultComponent,
    HomeComponent,
    HeaderComponent,
    GlobalSearchComponent,
    LocalSearchComponent,
    UpdateComponent,
    AboutComponent,
    ActivitiesComponent,
    ResultAttributesComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
