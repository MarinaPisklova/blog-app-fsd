import { FC } from 'react';
import cls from './Loader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.ldsEllipsis, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
