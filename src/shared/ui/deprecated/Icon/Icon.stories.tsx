import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack, VStack } from '../../redesigned/Stack';
import { Icon } from './Icon';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import NotificationIcon from '@/shared/assets/tests/notification-20-20.svg';

export default {
  title: 'shared/deprecated/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    Svg: NotificationIcon,
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <HStack gap="32" align="start">
    <VStack gap="8" align="center">
      Primary <Icon {...args} />
    </VStack>
    <VStack gap="8" align="center">
      Inverted <Icon {...args} inverted />
    </VStack>
  </HStack>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
