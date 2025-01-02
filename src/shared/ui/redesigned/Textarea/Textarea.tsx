import React, {
  memo,
  ReactNode,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { HStack } from '../Stack';
import { Text } from '../Text';
import cls from './Textarea.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type HTMLTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type TextareaSize = 's' | 'm' | 'l';

interface TextareaProps extends HTMLTextareaProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: TextareaSize;
}

export const Textarea = memo((props: TextareaProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    autofocus,
    readonly,
    addonLeft,
    addonRight,
    label,
    size = 'm',
    ...otherProps
  } = props;
  const ref = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const textarea = (
    <div className={classNames(cls.TextareaWrapper, mods, [className])}>
      <div className={cls.addonLeft}>{addonLeft}</div>
      <textarea
        ref={ref}
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.textarea, mods, [className, cls[size]])}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      <div className={cls.addonRight}>{addonRight}</div>
    </div>
  );

  if (label) {
    return (
      <HStack max gap="8">
        <Text text={label} className={cls.noWrap} />
        {textarea}
      </HStack>
    );
  }

  return textarea;
});
