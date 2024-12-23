import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack } from '../../redesigned/Stack';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <HStack gap="16">
    <AppLink {...args} theme={AppLinkTheme.PRIMARY}>
      Primary
    </AppLink>
    <AppLink {...args} theme={AppLinkTheme.SECONDARY}>
      Secondary
    </AppLink>
    <AppLink {...args} theme={AppLinkTheme.RED}>
      Red
    </AppLink>
  </HStack>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
