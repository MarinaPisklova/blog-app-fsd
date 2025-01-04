import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleCodeEditBlockComponent } from '../ArticleCodeEditBlockComponent/ArticleCodeEditBlockComponent';
import { ArticleImageEditBlockComponent } from '../ArticleImageEditBlockComponent/ArticleImageEditBlockComponent';
import { ArticleTextEditBlockComponent } from '../ArticleTextEditBlockComponent/ArticleTextEditBlockComponent';
import cls from './ArticleDetailsEdit.module.scss';

export const renderArticleEditBlock =
  (
    onChangeBlock?: (block: ArticleBlock, id: string) => void,
    onDeleteBlock?: (id: string) => void,
  ) =>
  (block: ArticleBlock) => {
    const { type, id } = block;
    switch (type) {
      case ArticleBlockType.CODE: {
        return (
          <ArticleCodeEditBlockComponent
            key={id}
            block={block}
            className={cls.block}
            onChangeBlock={onChangeBlock}
            onDeleteBlock={onDeleteBlock}
          />
        );
      }
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageEditBlockComponent
            key={id}
            block={block}
            className={cls.block}
            onChangeBlock={onChangeBlock}
            onDeleteBlock={onDeleteBlock}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextEditBlockComponent
            key={id}
            className={cls.block}
            block={block}
            onChangeBlock={onChangeBlock}
            onDeleteBlock={onDeleteBlock}
          />
        );
      default:
        return null;
    }
  };
