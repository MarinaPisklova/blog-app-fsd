import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';
import { HStack, VStack } from '../../redesigned/Stack';
import { Card, CardTheme } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const text = 'Lorem ipsum dolor sit amet consectetur';
const Template: ComponentStory<typeof Card> = (args) => (
  <VStack gap="32">
    <HStack gap="32" align="start">
      <Card {...args}>
        <Text title="Normal Theme" text={text} />
      </Card>
      <Card {...args} theme={CardTheme.OUTLINED}>
        <Text title="Outlined Theme" text={text} />
      </Card>
    </HStack>
    <Card {...args} max>
      <Text title="Max width card" text={text} />
    </Card>
  </VStack>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
