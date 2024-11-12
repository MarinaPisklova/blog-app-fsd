import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useArticleCommentsIsLoading, getArticleCommentsIsLoading] =
  buildSelector(
    (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading,
  );

export const [useArticleCommentsError, getArticleCommentsError] = buildSelector(
  (state: StateSchema) => state.articleDetailsPage?.comments?.error,
);
