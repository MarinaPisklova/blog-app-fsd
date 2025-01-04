export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export const ARTICLE_TYPES = [
  ArticleType.IT,
  ArticleType.SCIENCE,
  ArticleType.ECONOMICS,
];

export enum ValidateArticleError {
  NO_TITLE = 'NO_TITLE',
  NO_IMAGE = 'NO_IMAGE',
  NO_BLOCKS = 'NO_BLOCKS',
}
