import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';
import { Popover } from './Popover';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/deprecated/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: <p>Some tip</p>,
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <HStack gap="32" align="center" style={{ height: '350px' }}>
    <Popover {...args} trigger={<Button>Open Bottom rigth</Button>} />
    <Popover
      {...args}
      direction="bottom left"
      trigger={<Button>Open Bottom left</Button>}
    />
    <Popover
      {...args}
      direction="top right"
      trigger={<Button>Open Top right</Button>}
    />
    <Popover
      {...args}
      direction="top left"
      trigger={<Button>Open Top left</Button>}
    />
  </HStack>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];
