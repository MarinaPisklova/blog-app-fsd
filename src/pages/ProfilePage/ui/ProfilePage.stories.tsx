import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import avatar from '@/shared/assets/tests/storybook.jpg';

const mockStore = {
  profile: {
    readonly: true,
    form: {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastname: 'Pisklova',
      first: 'Marina',
      city: 'Moscow',
      currency: Currency.USD,
      avatar,
    },
  },
};

const mockRequest = {
  url: `${__API__}/profile-ratings?userId=1&profileId=1`,
  method: 'GET',
  status: 200,
  response: [],
};

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator(mockStore)],
  parameters: {
    initialEntries: ['/profile/1'],
    mockData: [mockRequest],
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <Routes>
    <Route path="/profile/:id" element={<ProfilePage {...args} />} />
  </Routes>
);

export const NormalTheme = Template.bind({});
NormalTheme.args = {};

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PurpleTheme = Template.bind({});
PurpleTheme.args = {};
PurpleTheme.decorators = [ThemeDecorator(Theme.PURPLE)];

export const RedesignedNormalTheme = Template.bind({});
RedesignedNormalTheme.args = {};
RedesignedNormalTheme.decorators = [NewDesignDecorator];

export const RedesignedDarkTheme = Template.bind({});
RedesignedDarkTheme.args = {};
RedesignedDarkTheme.decorators = [
  NewDesignDecorator,
  ThemeDecorator(Theme.DARK),
];

export const RedesignedPurpleTheme = Template.bind({});
RedesignedPurpleTheme.args = {};
RedesignedPurpleTheme.decorators = [
  NewDesignDecorator,
  ThemeDecorator(Theme.PURPLE),
];
