import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VStack } from '../../../../redesigned/Stack';
import { ListBox } from './ListBox';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: 'first',
    items: [
      { content: 'first', value: 'first' },
      { content: 'second', value: 'second' },
    ],
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <VStack gap="32" style={{ height: '350px' }}>
    <ListBox {...args} label="Open Bottom rigth" />
    <ListBox {...args} direction="bottom left" label="Open Bottom left" />
    <ListBox {...args} direction="top right" label="Open Top right" />
    <ListBox {...args} direction="top left" label="Open Top left" />
  </VStack>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
