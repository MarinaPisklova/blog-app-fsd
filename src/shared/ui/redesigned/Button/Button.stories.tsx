import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HStack, VStack } from '../../redesigned/Stack';
import { Icon } from '../Icon';
import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import Img from '@/shared/assets/tests/arrow-bottom.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <VStack gap="16">
    <div>
      Button variants
      <HStack gap="32" align="start">
        <Button {...args} variant="clear">
          Clear
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="filled">
          Filled
        </Button>
      </HStack>
    </div>
    <div>
      Outline Button colors
      <HStack gap="32" align="start">
        <Button {...args} color="normal">
          Normal
        </Button>
        <Button {...args} color="success">
          Success
        </Button>
        <Button {...args} color="error">
          Error
        </Button>
      </HStack>
    </div>
    <div>
      Filled Button colors
      <HStack gap="32" align="start">
        <Button {...args} color="normal" variant="filled">
          Normal
        </Button>
        <Button {...args} color="success" variant="filled">
          Success
        </Button>
        <Button {...args} color="error" variant="filled">
          Error
        </Button>
      </HStack>
    </div>
    <div>
      Button sizes
      <HStack gap="32" align="start">
        <Button {...args} size="m">
          Size M
        </Button>
        <Button {...args} size="l">
          Size L
        </Button>
        <Button {...args} size="xl">
          Size XL
        </Button>
      </HStack>
    </div>
    <div>
      Button forms
      <HStack gap="32" align="start">
        <Button {...args}>Primary</Button>
        <div>
          Square:
          <Button {...args} square>
            {'>'}
          </Button>
        </div>
      </HStack>
    </div>
    <div style={{ width: '100%' }}>
      Full width button
      <Button {...args} fullWidth>
        Full width
      </Button>
    </div>
    <div>
      Button behavior
      <HStack gap="32" align="start">
        <Button {...args} disabled>
          Disabled
        </Button>
      </HStack>
    </div>
    <div>
      Button with addons
      <HStack gap="32" align="start">
        <Button {...args} addonRight={<Icon Svg={Img} />}>
          Addon right
        </Button>
        <Button {...args} addonLeft={<Icon Svg={Img} />}>
          Addon left
        </Button>
      </HStack>
    </div>
  </VStack>
);

export const LightTheme = Template.bind({});
LightTheme.decorators = [NewDesignDecorator];

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.PURPLE)];
