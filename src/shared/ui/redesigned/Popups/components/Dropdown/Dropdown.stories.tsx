import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import { Dropdown } from './Dropdown';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    items: [
      {
        id: '0',
        content: 'first',
      },
      {
        id: '1',
        content: 'second',
      },
      {
        id: '2',
        content: 'third',
      },
    ],
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <HStack gap="32" align="center" style={{ height: '350px' }}>
    <Dropdown {...args} trigger={<Button>Open Bottom rigth</Button>} />
    <Dropdown
      {...args}
      direction="bottom left"
      trigger={<Button>Open Bottom left</Button>}
    />
    <Dropdown
      {...args}
      direction="top right"
      trigger={<Button>Open Top right</Button>}
    />
    <Dropdown
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
