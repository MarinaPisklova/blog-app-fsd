import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';
import { Popover } from './Popover';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Popover',
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
LightTheme.decorators = [NewDesignDecorator];

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.decorators = [NewDesignDecorator, ThemeDecorator(Theme.PURPLE)];
