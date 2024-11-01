import { ValidateProfileError } from '../../consts/consts';
import { Profile } from '@/entities/Profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { first, lastname, age } = profile;
  const errors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  return errors;
};
