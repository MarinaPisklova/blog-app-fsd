import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
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
