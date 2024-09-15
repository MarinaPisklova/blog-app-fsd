import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  defaultValue: 'Укажите значение',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: 'top left',
  defaultValue: 'Укажите значение',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  direction: 'top right',
  defaultValue: 'Укажите значение',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: 'bottom left',
  defaultValue: 'Укажите значение',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: 'bottom right',
  defaultValue: 'Укажите значение',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};
