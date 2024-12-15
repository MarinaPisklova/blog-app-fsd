import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { memo } from 'react';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const title = isEdit
    ? t('article_edit_page_redactor')
    : t('article_edit_page_creator');

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Text size="m" title={title} />}
      off={<TextDeprecated size={TextSize.M} title={title} />}
    />
  );

  return (
    <Page
      data-testid="ArticleEditPage"
      className={classNames(cls.ArticleEditPage, {}, [className])}
    >
      {content}
    </Page>
  );
};

export default memo(ArticleEditPage);
