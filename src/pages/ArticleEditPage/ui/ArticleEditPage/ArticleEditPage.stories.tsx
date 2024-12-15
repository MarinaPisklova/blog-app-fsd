import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Route, Routes } from 'react-router-dom';
import ArticleEditPage from './ArticleEditPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
  parameters: {
    initialEntries: ['/profile/1'],
  },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
  <Routes>
    <Route path="/profile/:id" element={<ArticleEditPage {...args} />} />
  </Routes>
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
