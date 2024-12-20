import { FC } from 'react';
import cls from './Loader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface LoaderProps {
  className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames(cls.ldsEllipsis, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
