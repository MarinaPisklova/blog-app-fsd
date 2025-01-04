import { ArticleBlock } from '../model/types/article';

export const deleteEmptyBlocks = (blocks: ArticleBlock[]) =>
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
