import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Textarea } from '@/shared/ui/redesigned/Textarea';
import { Textarea as TextareaDeprecated } from '@/shared/ui/deprecated/Textarea';
import { Card } from '@/shared/ui/redesigned/Card';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';

interface ArticleEditTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
  onChangeBlock?: (blocks: ArticleBlock, id: string) => void;
  onDeleteBlock?: (id: string) => void;
}

export const ArticleTextEditBlockComponent = memo(
  (props: ArticleEditTextBlockComponentProps) => {
    const { className, block, onChangeBlock, onDeleteBlock } = props;
    const { t } = useTranslation('articles', { keyPrefix: 'edit' });
    const paragraphsText = block.paragraphs.join('\n');

    const onChangeTitle = (value: string) => {
      onChangeBlock?.(
        {
          ...block,
          title: value,
        },
        block.id,
      );
    };

    const onChangeParagraph = (value: string) => {
      onChangeBlock?.(
        {
          ...block,
          paragraphs: value.split('\n'),
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
                <HStack justify="between" max>
                  <Text title={t('text_block')} size="m" />
                  <Button onClick={() => onDeleteBlock?.(block.id)}>
                    {t('delete_btn')}
                  </Button>
                </HStack>
                <Input
                  value={block?.title}
                  label={t('title')}
                  onChange={onChangeTitle}
                />
                <Textarea value={paragraphsText} onChange={onChangeParagraph} />
              </VStack>
            </Card>
          }
          off={
            <CardDeprecated max>
              <VStack gap="16" max>
                <HStack justify="between" max>
                  <TextDeprecated
                    title={t('text_block')}
                    className={cls.title}
                  />
                  <ButtonDeprecated onClick={() => onDeleteBlock?.(block.id)}>
                    {t('delete_btn')}
                  </ButtonDeprecated>
                </HStack>
                <InputDeprecated
                  value={block?.title}
                  onChange={onChangeTitle}
                  placeholder={t('title')}
                  className={cls.input}
                />
                <TextareaDeprecated
                  value={paragraphsText}
                  onChange={onChangeParagraph}
                  className={cls.textarea}
                />
              </VStack>
            </CardDeprecated>
          }
        />
      </div>
    );
  },
);
