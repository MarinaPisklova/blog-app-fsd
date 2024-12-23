import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HStack, VStack } from '../../redesigned/Stack';
import { Text } from '../Text';
import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const text = 'Lorem ipsum dolor sit amet consectetur';
const Template: ComponentStory<typeof Card> = (args) => (
  <VStack gap="16">
    <div>
      Card variants
      <HStack gap="32" align="start">
        <Card {...args} variant="normal">
          <Text title="Normal" text={text} />
        </Card>
        <Card {...args} variant="outlined">
          <Text title="Outlined" text={text} />
        </Card>
        <Card {...args} variant="light">
          <Text title="Light" text={text} />
        </Card>
      </HStack>
    </div>
    <div style={{ width: '100%' }}>
      Max width Card
      <Card {...args} variant="normal" max>
        <Text title="Max width" text={text} />
      </Card>
    </div>
    <div>
      Card paddings
      <HStack gap="32" align="start">
        <Card {...args} variant="normal" padding="0">
          <Text title="Padding 0" text={text} />
        </Card>
        <Card {...args} variant="normal" padding="8">
          <Text title="Padding 8" text={text} />
        </Card>
        <Card {...args} variant="normal" padding="16">
          <Text title="Padding 16" text={text} />
        </Card>
        <Card {...args} variant="normal" padding="24">
          <Text title="Padding 24" text={text} />
        </Card>
      </HStack>
    </div>
    <div>
      Card borders
      <HStack gap="32" align="start">
        <Card {...args} variant="normal" border="normalBorder">
          <Text title="Normal" text={text} />
        </Card>
        <Card {...args} variant="normal" border="partial">
          <Text title="Partial" text={text} />
        </Card>
        <Card {...args} variant="normal" border="round">
          <Text title="Round" text={text} />
        </Card>
      </HStack>
    </div>
    <div style={{ height: '100px' }}>
      Full height card (container 100px)
      <Card {...args} variant="normal" fullHeight>
        <Text title="Full height" text={text} />
      </Card>
    </div>
  </VStack>
);

export const LightTheme = Template.bind({});
LightTheme.decorators = [NewDesignDecorator];

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.PURPLE)];
