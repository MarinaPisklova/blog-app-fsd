import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { HStack } from '@/shared/ui/deprecated/Stack';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <HStack justify="center">
    <AvatarDropdown {...args} />
  </HStack>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin',
        roles: [UserRole.ADMIN],
        avatar:
          'data:image/jpeg;base64,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',
      },
    },
  }),
];
