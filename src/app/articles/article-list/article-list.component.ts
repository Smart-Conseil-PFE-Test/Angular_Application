import { Component, OnInit } from '@angular/core';
import { Article } from '../model/articles';
import { ArticleService } from '../service/article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  imports: [CommonModule]

})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  selectedArticle: Article | null = null;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAll().subscribe((data: Article[]) => {
      this.articles = data;
    });
  }

   // Fetch article by ID and open the modal
   openModal(id: number): void {
    this.articleService.getById(id).subscribe((data: Article) => {
      this.selectedArticle = data;
    });
  }

  closeModal(): void {
    this.selectedArticle = null;
  }
}
