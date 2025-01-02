import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VStack } from '../Stack';
import { Icon } from '../Icon';
import { Textarea } from './Textarea';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import Img from '@/shared/assets/tests/arrow-bottom.svg';

export default {
  title: 'shared/redesigned/Textarea',
  component: Textarea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Label',
    placeholder: 'Type text',
    value: '123123',
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = ({ ...args }) => (
  <VStack gap="16">
    <div style={{ width: '100%' }}>
      Textarea sizes
      <VStack gap="8" align="center">
        <Textarea {...args} value="Size S" size="s" />
        <Textarea {...args} value="Size M" />
        <Textarea {...args} value="Size L" size="l" />
      </VStack>
    </div>
    <div style={{ width: '100%' }}>
      Textareas with addons
      <VStack gap="8" align="center">
        <Textarea
          {...args}
          value="Addon right"
          addonRight={<Icon Svg={Img} />}
        />
        <Textarea {...args} value="Addon left" addonLeft={<Icon Svg={Img} />} />
      </VStack>
    </div>
  </VStack>
);

export const LightTheme = Template.bind({});
LightTheme.decorators = [NewDesignDecorator];

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.PURPLE)];
