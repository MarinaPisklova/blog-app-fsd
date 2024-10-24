import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ ...args }) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  cupiditate iusto expedita tempora? Expedita harum voluptates, illo saepe
  provident hic in voluptatibus voluptas iusto, omnis, itaque non
  laudantium ea nesciunt`,
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
  cupiditate iusto expedita tempora? Expedita harum voluptates, illo saepe
  provident hic in voluptatibus voluptas iusto, omnis, itaque non
  laudantium ea nesciunt`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
