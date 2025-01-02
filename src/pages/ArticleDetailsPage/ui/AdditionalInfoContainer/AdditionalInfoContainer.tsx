import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getRouteArticleEdit } from '@/shared/const/router';
import { useArticleDetailsData } from '@/entities/Article';

export const AdditionalInfoContainer = memo(() => {
  const article = useArticleDetailsData();

  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  return (
    <ArticleAdditionalInfo
      onEdit={onEditArticle}
      author={article.user}
      createdAt={article.createdAt}
      views={article.views}
    />
  );
});
