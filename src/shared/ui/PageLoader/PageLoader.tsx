import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

export interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);