import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VStack } from '../Stack';
import { Icon } from '../Icon';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import Img from '@/shared/assets/tests/arrow-bottom.svg';

export default {
  title: 'shared/redesigned/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Label',
    placeholder: 'Type text',
    value: '123123',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ ...args }) => (
  <VStack gap="16">
    <div style={{ width: '100%' }}>
      Input sizes
      <VStack gap="8" align="center">
        <Input {...args} value="Size S" size="s" />
        <Input {...args} value="Size M" />
        <Input {...args} value="Size L" size="l" />
      </VStack>
    </div>
    <div style={{ width: '100%' }}>
      Inputs with addons
      <VStack gap="8" align="center">
        <Input {...args} value="Addon right" addonRight={<Icon Svg={Img} />} />
        <Input {...args} value="Addon left" addonLeft={<Icon Svg={Img} />} />
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
