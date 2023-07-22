import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from '../Button/Button';

export interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames('', {}, [className])}
        onClick={toggle}
      >
        {t('Язык')}
      </Button>
    </div>
  );
};

export default LangSwitcher;
