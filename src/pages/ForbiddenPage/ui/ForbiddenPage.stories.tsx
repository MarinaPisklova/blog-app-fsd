import { ComponentMeta, ComponentStory } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;
export const NormalTheme = Template.bind({});
NormalTheme.args = {};

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.args = {};
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];

export const RedesignedNormalTheme = Template.bind({});
RedesignedNormalTheme.args = {};
RedesignedNormalTheme.decorators = [NewDesignDecorator];

export const RedesignedDarkTheme = Template.bind({});
RedesignedDarkTheme.args = {};
RedesignedDarkTheme.decorators = [
  NewDesignDecorator,
  ThemeDecorator(Theme.DARK),
];

export const RedesignedPurpleTheme = Template.bind({});
RedesignedPurpleTheme.args = {};
RedesignedPurpleTheme.decorators = [
  NewDesignDecorator,
  ThemeDecorator(Theme.PURPLE),
];