import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => (
  <AdminPanelPage className="storybook" />
);
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
