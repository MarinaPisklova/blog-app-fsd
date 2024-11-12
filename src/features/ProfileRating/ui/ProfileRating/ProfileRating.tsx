import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  useGetProfileRating,
  useRateProfile,
} from '../../api/profileRatingApi';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  });
  const [rateProfileMutation] = useRateProfile();

  const handleRateProfile = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfileMutation({
          userId: userData?.id ?? '',
          profileId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [profileId, rateProfileMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateProfile(starsCount, feedback);
    },
    [handleRateProfile],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateProfile(starsCount);
    },
    [handleRateProfile],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t('Оцените профиль')}
      feedbackTitle={t(
        'Оставьте свой отзыв о профиле, это поможет улучшить качество',
      )}
      hasFeedback
    />
  );
});

export default ProfileRating;
