import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack, VStack } from '../../redesigned/Stack';
import { Text, TextAlign, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    text: 'Lorem, ipsum dolor sit amet consectetur',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <VStack gap="16">
    <div>
      Text themes
      <HStack gap="32" align="start">
        <Text {...args} title="Primary" />
        <Text {...args} theme={TextTheme.INVERTED} title="Inverted" />
        <Text {...args} theme={TextTheme.ERROR} title="Error" />
      </HStack>
    </div>
    <div>
      Text sizes
      <HStack gap="32" align="start">
        <Text {...args} size={TextSize.S} title="Size S" />
        <Text {...args} title="Size M" />
        <Text {...args} size={TextSize.L} title="Size L" />
      </HStack>
    </div>
    <div>
      Text align
      <HStack gap="32" align="start">
        <Text {...args} title="Aling left" />
        <Text {...args} align={TextAlign.CENTER} title="Align center" />
        <Text {...args} align={TextAlign.RIGHT} title="Align right" />
      </HStack>
    </div>
  </VStack>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
