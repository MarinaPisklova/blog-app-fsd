import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleDetailsData } from '../../model/selectors/articleDetails';
import { ArticleBlock } from '../../model/types/article';
import { ARTICLE_TYPES, ArticleType } from '../../model/consts/articleConsts';
import cls from './ArticleDetailsEdit.module.scss';
import { renderArticleEditBlock } from './renderBlock';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { ListBox } from '@/shared/ui/deprecated/Popups';

interface ArticleDetailsEditProps {
  onChangeTitle: (value: string) => void;
  onChangeSubtitle: (value: string) => void;
  onChangeImg: (value: string) => void;
  onChangeBlocks: (value: ArticleBlock[]) => void;
  onChangeType: (value: ArticleType) => void;
}

export const ArticleDetailsEditDeprecated = (
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

  const onChangeCodeBlock = useCallback(
    (block: ArticleBlock, id: string) => {
      const updatedBlocks = article?.blocks.map((b) =>
        b.id === id ? block : b,
      );

      onChangeBlocks?.(updatedBlocks ?? []);
    },
    [article?.blocks, onChangeBlocks],
  );

  return (
    <VStack gap="16" max>
      <CardDeprecated max>
        <VStack gap="16" max>
          <TextDeprecated title={t('main_info')} size={TextSize.M} />
          <InputDeprecated
            value={article?.title}
            placeholder={t('title')}
            onChange={onChangeTitle}
            className={cls.input}
          />
          <InputDeprecated
            value={article?.subtitle}
            placeholder={t('subtitle')}
            onChange={onChangeSubtitle}
            className={cls.input}
          />
          <HStack justify="center" max className={cls.avatarWrapper}>
            <Avatar size={200} src={article?.img} className={cls.avatar} />
          </HStack>
          <InputDeprecated
            value={article?.img}
            placeholder={t('image')}
            onChange={onChangeImg}
            className={cls.input}
          />
          <ListBox
            label={t('type')}
            items={ARTICLE_TYPES.map((item) => ({
              value: item,
              content: item,
            }))}
            value={article?.type}
            onChange={(value: string) => onChangeType?.(value as ArticleType)}
          />
        </VStack>
      </CardDeprecated>

      {article?.blocks.map(renderArticleEditBlock(onChangeCodeBlock))}
    </VStack>
  );
};
