import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleAdditionalInfo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props;
    const { t } = useTranslation('articles');

    return (
      <Card padding="24" border="partial" className={cls.card}>
        <VStack gap="32" className={classNames('', {}, [className])}>
          <HStack gap="8">
            <Avatar src={author.avatar} size={32} />
            <Text text={author.username} bold />
            <Text text={createdAt} />
          </HStack>
          <Button onClick={onEdit}>{t('buttons.edit_btn')}</Button>
          <Text text={t('{{count}} views', { count: views })} />
        </VStack>
      </Card>
    );
  },
);
