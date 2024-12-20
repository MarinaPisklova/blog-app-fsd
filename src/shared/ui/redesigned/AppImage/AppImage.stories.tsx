import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppImage } from './AppImage';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';

export default {
  title: 'shared/AppImage',
  component: AppImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  src: AvatarImg,
};
