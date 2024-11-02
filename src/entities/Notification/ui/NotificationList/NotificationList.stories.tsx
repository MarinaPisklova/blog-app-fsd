import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление 1',
          description: 'Произошло какое-то событие',
          userId: '1',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Произошло какое-то событие',
          userId: '1',
          href: 'http://localhost:3000/admin',
        },
      ],
    },
  ],
};
