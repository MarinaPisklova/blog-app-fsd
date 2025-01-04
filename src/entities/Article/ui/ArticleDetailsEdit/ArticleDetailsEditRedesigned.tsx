import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleDetailsData } from '../../model/selectors/articleDetails';
import { ArticleBlock } from '../../model/types/article';
import { ARTICLE_TYPES, ArticleType } from '../../model/consts/articleConsts';
import { AddArticleBlockDropdown } from '../AddArticleBlockDropdown/AddArticleBlockDropdown';
import cls from './ArticleDetailsEdit.module.scss';
import { renderArticleEditBlock } from './renderBlock';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface ArticleDetailsEditProps {
  onChangeTitle: (value: string) => void;
  onChangeSubtitle: (value: string) => void;
  onChangeImg: (value: string) => void;
  onChangeBlocks: (value: ArticleBlock[]) => void;
  onChangeType: (value: ArticleType) => void;
}

export const ArticleDetailsEditRedesigned = (
  props: ArticleDetailsEditProps,
) => {
  const {
    onChangeTitle,
    onChangeSubtitle,
    onChangeImg,
    onChangeBlocks,
    onChangeType,
  } = props;
  const article = useArticleDetailsData();
  const { t } = useTranslation('articles', { keyPrefix: 'edit' });

  const onChangeBlock = useCallback(
    (block: ArticleBlock, id: string) => {
      const updatedBlocks = article?.blocks.map((b) =>
        b.id === id ? block : b,
      );

      onChangeBlocks?.(updatedBlocks ?? []);
    },
    [article?.blocks, onChangeBlocks],
  );

  const onDeleteBlock = useCallback(
    (id: string) => {
      const updatedBlocks = article?.blocks.filter((b) => b.id !== id);

      onChangeBlocks?.(updatedBlocks ?? []);
    },
    [article?.blocks, onChangeBlocks],
  );

  return (
    <>
      <VStack gap="16" max>
        <Card padding="24" max border="partial">
          <VStack gap="16" max>
            <Text title={t('main_info')} size="m" />
            <Input
              value={article?.title ?? ''}
              label={t('title')}
              onChange={onChangeTitle}
            />
            <Input
              value={article?.subtitle ?? ''}
              label={t('subtitle')}
              onChange={onChangeSubtitle}
            />
            {article?.img && (
              <AppImage
                fallback={<Skeleton width="100%" height={420} border="16px" />}
                src={article?.img}
                className={cls.img}
              />
            )}
            <Input
              value={article?.img ?? ''}
              label={t('image')}
              onChange={onChangeImg}
            />
            <ListBox
              label={t('type')}
              items={ARTICLE_TYPES.map((item) => ({
                value: item,
                content: item,
              }))}
              value={article?.type ?? ArticleType.IT}
              onChange={onChangeType}
            />
          </VStack>
        </Card>
      </VStack>

      {article?.blocks &&
        article?.blocks.map(
          renderArticleEditBlock(onChangeBlock, onDeleteBlock),
        )}
      <HStack justify="center" max>
        <AddArticleBlockDropdown onChangeBlocks={onChangeBlocks} />
      </HStack>
    </>
  );
};
