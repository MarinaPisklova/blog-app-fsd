import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  TextAlign,
  Text as TextDeprecated,
  TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
  onChangeBlock?: (blocks: ArticleBlock, id: string) => void;
}

export const ArticleImageEditBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block, onChangeBlock } = props;
    const { t } = useTranslation('articles', { keyPrefix: 'edit' });

    const onChangeImg = (value: string) => {
      onChangeBlock?.(
        {
          ...block,
          src: value,
        },
        block.id,
      );
    };

    const onChangeImgTitle = (value: string) => {
      onChangeBlock?.(
        {
          ...block,
          title: value,
        },
        block.id,
      );
    };

    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Card padding="24" max border="partial">
              <VStack gap="16" max>
                <Text title={t('image_block')} size="m" />
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && <Text text={block.title} align="center" />}

                <Input
                  value={block.src}
                  label={t('image')}
                  onChange={onChangeImg}
                />
                <Input
                  value={block.title}
                  label={t('image_caption')}
                  onChange={onChangeImgTitle}
                />
              </VStack>
            </Card>
          }
          off={
            <CardDeprecated max>
              <VStack gap="16" max>
                <TextDeprecated title={t('image_block')} size={TextSize.M} />
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && (
                  <TextDeprecated text={block.title} align={TextAlign.CENTER} />
                )}
                <InputDeprecated
                  value={block.src}
                  onChange={onChangeImg}
                  placeholder={t('image')}
                  className={cls.input}
                />
                <InputDeprecated
                  value={block.title}
                  onChange={onChangeImgTitle}
                  placeholder={t('image_caption')}
                  className={cls.input}
                />
              </VStack>
            </CardDeprecated>
          }
        />
      </div>
    );
  },
);
