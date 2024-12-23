import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack, VStack } from '../../redesigned/Stack';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <HStack gap="32" align="start">
    <VStack gap="8" align="center" style={{ width: '100%' }}>
      Normal <Skeleton {...args} width="100%" height={200} />
    </VStack>
    <VStack gap="8" align="center">
      Circle <Skeleton {...args} width={100} height={100} border="50%" />
    </VStack>
  </HStack>
);

export const LightTheme = Template.bind({});
LightTheme.decorators = [NewDesignDecorator];

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.PURPLE)];
