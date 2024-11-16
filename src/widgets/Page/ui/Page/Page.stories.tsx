import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';
import { Text } from '@/shared/ui/Text';

export default {
  title: 'widgets/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <Text
      title="Добро пожаловать на страницу статей"
      text="Здесь вы можете искать и просматривать статьи на различные темы"
    />
  ),
};
