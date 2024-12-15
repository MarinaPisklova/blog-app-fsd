import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
