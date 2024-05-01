import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ ...args }) => (
  <Text {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title lorem ipsum',
  text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  cupiditate iusto expedita tempora? Expedita harum voluptates, illo saepe
  provident hic in voluptatibus voluptas iusto, omnis, itaque non
  laudantium ea nesciunt`,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  cupiditate iusto expedita tempora? Expedita harum voluptates, illo saepe
  provident hic in voluptatibus voluptas iusto, omnis, itaque non
  laudantium ea nesciunt`,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title lorem ipsum',
  text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  cupiditate iusto expedita tempora? Expedita harum voluptates, illo saepe
  provident hic in voluptatibus voluptas iusto, omnis, itaque non
  laudantium ea nesciunt`,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  cupiditate iusto expedita tempora? Expedita harum voluptates, illo saepe
  provident hic in voluptatibus voluptas iusto, omnis, itaque non
  laudantium ea nesciunt`,
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title lorem ipsum',
  text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  cupiditate iusto expedita tempora? Expedita harum voluptates, illo saepe
  provident hic in voluptatibus voluptas iusto, omnis, itaque non
  laudantium ea nesciunt`,
  theme: TextTheme.ERROR,
};
