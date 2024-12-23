import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack, VStack } from '../../redesigned/Stack';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    src: AvatarImg,
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <HStack gap="32" align="start">
    <VStack gap="8" align="center">
      Primary <Avatar {...args} />
    </VStack>
    <VStack gap="8" align="center">
      No image <Avatar {...args} src="" />
    </VStack>
    <VStack gap="8" align="center">
      No image inverted color <Avatar {...args} src="" fallbackInverted />
    </VStack>
    <VStack gap="8" align="center">
      Small size <Avatar {...args} size={50} />
    </VStack>
  </HStack>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
