import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack, VStack } from '../../redesigned/Stack';
import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Text',
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
      Text variants
      <HStack gap="32" align="start">
        <Text {...args} title="Primary" />
        <Text {...args} variant="error" title="Error" />
        <Text {...args} variant="accent" title="Accent" />
      </HStack>
    </div>
    <div>
      Text sizes
      <HStack gap="32" align="start">
        <Text {...args} size="s" title="Size S" />
        <Text {...args} title="Size M" />
        <Text {...args} size="l" title="Size L" />
      </HStack>
    </div>
    <div>
      Text align
      <HStack gap="32" align="start">
        <Text {...args} title="Aling left" />
        <Text {...args} align="center" title="Align center" />
        <Text {...args} align="right" title="Align right" />
      </HStack>
    </div>
    <div>
      Text weight
      <Text {...args} title="Bold" bold />
    </div>
  </VStack>
);

export const LightTheme = Template.bind({});
LightTheme.decorators = [NewDesignDecorator];

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.PURPLE)];
