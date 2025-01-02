import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './Textarea';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/Textarea',
  component: Textarea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    placeholder: 'Type text',
    value: '123123',
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = ({ ...args }) => (
  <Textarea {...args} />
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
