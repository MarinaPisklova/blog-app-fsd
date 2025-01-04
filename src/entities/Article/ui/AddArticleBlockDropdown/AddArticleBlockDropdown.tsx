import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleDetailsData } from '../../model/selectors/articleDetails';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Button } from '@/shared/ui/redesigned/Button';
import {
  Button as ButtonDeprecated,
  ButtonSize,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';

interface AddArticleBlockDropdownProps {
  onChangeBlocks: (value: ArticleBlock[]) => void;
}

export const AddArticleBlockDropdown = (
  props: AddArticleBlockDropdownProps,
) => {
  const { onChangeBlocks } = props;
  const article = useArticleDetailsData();
  const { t } = useTranslation('articles', { keyPrefix: 'edit' });

  const onAddBlock = useCallback(
    (type: ArticleBlockType) => {
      let newBlock: ArticleBlock;

      switch (type) {
        case ArticleBlockType.CODE:
          newBlock = {
            id: Date.now().toString(),
            type,
            code: '',
          };
          break;
        case ArticleBlockType.IMAGE:
          newBlock = {
            id: Date.now().toString(),
            type,
            src: '',
            title: '',
          };
          break;
        default:
          newBlock = {
            id: Date.now().toString(),
            type,
            paragraphs: [],
            title: '',
          };
          break;
      }

      const updatedBlocks = article?.blocks
        ? [...article.blocks, newBlock]
        : [newBlock];

      onChangeBlocks?.(updatedBlocks ?? []);
    },
    [article?.blocks, onChangeBlocks],
  );

  const items = [
    {
      id: '0',
      content: t('code_block'),
      onClick: () => onAddBlock(ArticleBlockType.CODE),
    },
    {
      id: '1',
      content: t('image_block'),
      onClick: () => onAddBlock(ArticleBlockType.IMAGE),
    },
    {
      id: '2',
      content: t('text_block'),
      onClick: () => onAddBlock(ArticleBlockType.TEXT),
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          direction="top right"
          trigger={<Button size="m">{t('add_btn')}</Button>}
          items={items}
        />
      }
      off={
        <DropdownDeprecated
          direction="top right"
          trigger={
            <ButtonDeprecated size={ButtonSize.M}>
              {t('add_btn')}
            </ButtonDeprecated>
          }
          items={items}
        />
      }
    />
  );
};
