import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1',
      },
      {
        value: 'selected tab 2',
        content: 'selected tab 2',
      },
      {
        value: 'tab 3',
        content: 'tab 3',
      },
    ],
    value: 'selected tab 2',
    onTabClick: action('onTabClick'),
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const LightTheme = Template.bind({});
LightTheme.decorators = [NewDesignDecorator];

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.PURPLE)];