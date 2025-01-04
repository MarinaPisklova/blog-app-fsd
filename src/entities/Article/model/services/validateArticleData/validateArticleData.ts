import { ValidateArticleError } from '../../consts/articleConsts';
import { Article, ArticleBlock } from '../../types/article';

export const normilizeBlocks = (blocks: ArticleBlock[]) =>
  blocks.filter((block) => {
    if (block.type === 'CODE' && block.code) {
      return true;
    }

    if (block.type === 'IMAGE' && block.src) {
      return true;
    }

    if (
      block.type === 'TEXT' &&
      (block.title || block.paragraphs.length !== 0)
    ) {
      return true;
    }

    return false;
  });
export const validateArticleData = (article: Article) => {
  const { title, img, blocks } = article;

  const errors: ValidateArticleError[] = [];

  if (!title) {
    errors.push(ValidateArticleError.NO_TITLE);
  }
  if (!img) {
    errors.push(ValidateArticleError.NO_IMAGE);
  }

  if (blocks?.length === 0) {
    errors.push(ValidateArticleError.NO_BLOCKS);
  }

  return errors;
};
