import { lazy, Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { useUserAuthData } from '@/entities/User';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
  const { profileId } = props;
  const user = useUserAuthData();

  if (user?.id === profileId) {
    return null;
  }

  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ProfileRatingLazy {...props} />
    </Suspense>
  );
};
