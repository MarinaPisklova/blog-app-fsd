import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeEditBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Textarea } from '@/shared/ui/redesigned/Textarea';
import { Textarea as TextareaDeprecated } from '@/shared/ui/deprecated/Textarea';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
  onChangeBlock?: (blocks: ArticleBlock, id: string) => void;
}

export const ArticleCodeEditBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block, onChangeBlock } = props;
    const { t } = useTranslation('articles', { keyPrefix: 'edit' });

    const onChange = (value: string) => {
      onChangeBlock?.({ ...block, code: value }, block.id);
    };

    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Card padding="24" max border="partial">
              <VStack gap="16" max>
                <Text title={t('code_block')} size="m" />
                <Textarea value={block.code} onChange={onChange} size="l" />
              </VStack>
            </Card>
          }
          off={
            <CardDeprecated max>
              <VStack gap="16" max>
                <TextDeprecated title={t('code_block')} size={TextSize.M} />
                <TextareaDeprecated
                  value={block.code}
                  onChange={onChange}
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
