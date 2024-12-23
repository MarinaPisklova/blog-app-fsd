import { FC } from 'react';
import cls from './PageLoader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { ToggleFeatures } from '@/shared/lib/features';

export interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Loader />}
      off={<LoaderDeprecated />}
    />
  );

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>{content}</div>
  );
};
