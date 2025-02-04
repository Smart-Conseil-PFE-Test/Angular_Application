import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ArticleListComponent
  ]
})
export class ArticlesModule { }
