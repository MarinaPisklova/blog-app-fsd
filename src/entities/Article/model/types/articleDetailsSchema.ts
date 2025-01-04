import { ValidateArticleError } from '../consts/articleConsts';
import { Article } from '../types/article';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  validationErrors?: ValidateArticleError[];
  data?: Article;
}
