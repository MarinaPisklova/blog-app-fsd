import { useTranslation } from 'react-i18next';
import { useArticleDetailsValidationError } from '../../model/selectors/articleDetails';
import { ValidateArticleError } from '../../model/consts/articleConsts';
import { Text } from '@/shared/ui/redesigned/Text';
import {
  Text as TextDeprecated,
  TextSize,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleEditErrorBlockProps {
  className?: string;
}

export const ArticleEditErrorBlock = ({
  className,
}: ArticleEditErrorBlockProps) => {
  const { t } = useTranslation('articles', { keyPrefix: 'edit.errors' });
  const errors = useArticleDetailsValidationError();

  const validateErrorTranslates = {
    [ValidateArticleError.NO_BLOCKS]: t('no_blocks'),
    [ValidateArticleError.NO_IMAGE]: t('no_image'),
    [ValidateArticleError.NO_TITLE]: t('no_title'),
  };

  if (errors?.length === 0) return null;

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <VStack max gap="8">
          {errors?.map((error) => (
            <Text
              variant="error"
              size="m"
              title={validateErrorTranslates[error]}
            />
          ))}
        </VStack>
      }
      off={
        <VStack gap="8" max className={className}>
          {errors?.map((error) => (
            <TextDeprecated
              theme={TextTheme.ERROR}
              size={TextSize.M}
              title={validateErrorTranslates[error]}
            />
          ))}
        </VStack>
      }
    />
  );

  return content;
};
