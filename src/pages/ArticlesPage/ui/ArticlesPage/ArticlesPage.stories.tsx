import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const mockStore = {
  user: {
    authData: {
      jsonSettings: {
        isArticlesPageWasOpened: true,
      },
    },
  },
};

const mockRequest = {
  url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=`,
  method: 'GET',
  status: 200,
  response: [
    {
      id: '1',
      title: 'Javascript news',
      subtitle: 'Что нового в JS за 2022 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 500,
      createdAt: '26.02.2022',
      userId: '1',
      type: ['IT'],
      user: {
        username: 'admin',
      },
    },
    {
      id: '2',
      title: 'Python news',
      subtitle: 'Что нового в JS за 2022 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 1022,
      createdAt: '26.12.2022',
      userId: '2',
      type: ['IT', 'ECONOMICS'],
      user: {
        username: 'admin',
      },
    },
    {
      id: '3',
      title: 'Kotlin news',
      subtitle: 'Что нового в JS за 2022 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 10,
      createdAt: '06.08.2023',
      userId: '1',
      type: ['IT', 'SCIENCE'],
      user: {
        username: 'admin',
      },
    },
  ],
};

export default {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator(mockStore)],
  parameters: {
    mockData: [mockRequest],
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <div style={{ padding: '32px' }}>
    <ArticlesPage {...args} />
  </div>
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
