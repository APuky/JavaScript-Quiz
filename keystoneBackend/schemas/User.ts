import { list } from '@keystone-6/core';
import {
  checkbox,
  password,
  // relationship,
  text,
} from '@keystone-6/core/fields';

export const User = list({
  access: {
    filter: {
      query: ({ session }) => {
        // Allow if user is Admin
        if (session?.data.isAdmin) return true;
        // Else if user is the owner
        return {
          id: {
            equals: session.data.id,
          },
        };
      },
      delete: ({ session }) => {
        // Allow if user is Admin
        if (session?.data.isAdmin) return true;
        // Else if user is the owner
        return {
          id: {
            equals: session.data.id,
          },
        };
      },
    },
  },
  fields: {
    name: text({
      validation: { isRequired: true },
    }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    // subjectId: text({ isIndexed: 'unique' }),
    password: password({
      validation: { isRequired: true },
    }),
    isAdmin: checkbox({
      access: {
        create: ({ session }) => !!session.data.isAdmin,
        update: ({ session }) => !!session.data.isAdmin,
      },
    }),

    locale: text(),
  },

  ui: {
    listView: {
      initialColumns: ['name', 'email', 'id'],
    },
  },
});
