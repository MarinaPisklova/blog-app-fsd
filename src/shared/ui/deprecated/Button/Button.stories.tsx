import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HStack, VStack } from '../../redesigned/Stack';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <VStack gap="16">
    <div>
      Button themes
      <HStack gap="32" align="start">
        <Button {...args}>Primary</Button>
        <Button {...args} theme={ButtonTheme.CLEAR}>
          Clear
        </Button>
        <Button {...args} theme={ButtonTheme.CLEAR_INVERTED}>
          Clear Inverted
        </Button>
        <Button {...args} theme={ButtonTheme.OUTLINE}>
          Outline
        </Button>
        <Button {...args} theme={ButtonTheme.OUTLINE_RED}>
          Outline red
        </Button>
        <Button {...args} theme={ButtonTheme.BACKGROUND}>
          Background
        </Button>
        <Button {...args} theme={ButtonTheme.BACKGROUND_INVERTED}>
          Background Inverted
        </Button>
      </HStack>
    </div>
    <div>
      Button sizes
      <HStack gap="32" align="start">
        <Button {...args} size={ButtonSize.M}>
          Size M
        </Button>
        <Button {...args} size={ButtonSize.L}>
          Size L
        </Button>
        <Button {...args} size={ButtonSize.XL}>
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
  </VStack>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
