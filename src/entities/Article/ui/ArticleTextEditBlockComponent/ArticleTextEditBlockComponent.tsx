import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Textarea } from '@/shared/ui/redesigned/Textarea';
import { Textarea as TextareaDeprecated } from '@/shared/ui/deprecated/Textarea';
import { Card } from '@/shared/ui/redesigned/Card';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleEditTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
  onChangeBlock?: (blocks: ArticleBlock, id: string) => void;
}

export const ArticleTextEditBlockComponent = memo(
  (props: ArticleEditTextBlockComponentProps) => {
    const { className, block, onChangeBlock } = props;
    const { t } = useTranslation('articles', { keyPrefix: 'edit' });

    const onChangeTitle = (value: string) => {
      onChangeBlock?.(
        {
          ...block,
          title: value,
        },
        block.id,
      );
    };

    const onChangeParagraph = (ind: number) => (value: string) => {
      onChangeBlock?.(
        {
          ...block,
          paragraphs: block.paragraphs.map((p, index) =>
            index === ind ? value : p,
          ),
        },
        block.id,
      );
    };

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Card padding="24" max border="partial">
              <VStack gap="16" max>
                <Text title={t('text_block')} size="m" />
                {block.title && (
                  <Input
                    value={block?.title}
                    label={t('title')}
                    onChange={onChangeTitle}
                  />
                )}
                <Text title={t('paragraphs')} size="s" />
                {block.paragraphs.map((paragraph, ind) => (
                  <Textarea
                    key={paragraph}
                    value={paragraph}
                    onChange={onChangeParagraph(ind)}
                  />
                ))}
              </VStack>
            </Card>
          }
          off={
            <CardDeprecated max>
              <VStack gap="16" max>
                <TextDeprecated title={t('text_block')} className={cls.title} />
                {block.title && (
                  <InputDeprecated
                    value={block?.title}
                    onChange={onChangeTitle}
                    placeholder={t('title')}
                    className={cls.input}
                  />
                )}
                <TextDeprecated
                  title={t('paragraphs')}
                  className={cls.title}
                  size={TextSize.S}
                />
                {block.paragraphs.map((paragraph, ind) => (
                  <TextareaDeprecated
                    key={paragraph}
                    value={paragraph}
                    onChange={onChangeParagraph(ind)}
                    className={cls.textarea}
                  />
                ))}
              </VStack>
            </CardDeprecated>
          }
        />
      </div>
    );
  },
);
