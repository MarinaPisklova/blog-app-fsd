import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserAuthData } from '@/entities/User';
import {
  getFeatureFlag,
  ToggleFeatures,
  updateFeatureFlag,
} from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'settings.design' });
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const dispatch = useAppDispatch();
  const authData = useUserAuthData();
  const [isLoading, setIsLoading] = useState(false);

  const items = [
    {
      content: t('new'),
      value: 'new',
    },
    {
      content: t('old'),
      value: 'old',
    },
  ];

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlag({
          userId: authData.id,
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
        }),
      ).unwrap();
      setIsLoading(false);
    }
  };

  const skeleton = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<SkeletonRedesigned width={100} height={40} />}
      off={<SkeletonDeprecated width={100} height={40} />}
    />
  );

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ListBox
          onChange={onChange}
          items={items}
          value={isAppRedesigned ? 'new' : 'old'}
          className={className}
        />
      }
      off={
        <ListBoxDeprecated
          onChange={onChange}
          items={items}
          value={isAppRedesigned ? 'new' : 'old'}
          className={className}
        />
      }
    />
  );

  return (
    <HStack>
      <Text text={t('title')} />
      {isLoading ? skeleton : content}
    </HStack>
  );
});
