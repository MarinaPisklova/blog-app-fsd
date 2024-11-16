import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <Routes>
    <Route path="/profile/:id" element={<ProfilePage {...args} />} />
  </Routes>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'Pisklova',
        first: 'Marina',
        city: 'Moscow',
        currency: Currency.USD,
      },
    },
  }),
];
Normal.parameters = {
  initialEntries: ['/profile/1'],
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'Pisklova',
        first: 'Marina',
        city: 'Moscow',
        currency: Currency.USD,
      },
    },
  }),
];
Dark.parameters = {
  initialEntries: ['/profile/1'],
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
