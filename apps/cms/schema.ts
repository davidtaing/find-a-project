// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from "@keystone-6/core";
import { allOperations, allowAll } from "@keystone-6/core/access";

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
} from "@keystone-6/core/fields";

// the document field is a more complicated field, so it has it's own package
import { document } from "@keystone-6/fields-document";
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from ".keystone/types";
import { isAdmin } from "./access";

export const lists: Lists = {
  User: list({
    access: {
      operation: {
        ...allOperations(isAdmin),
        query: ({ session, context, listKey, operation }) => isAdmin(session),
      },
      filter: {
        query: ({ session, context, listKey, operation }) => {
          return true;
        },
      },
    },

    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      password: password({ validation: { isRequired: true } }),
      isAdmin: checkbox(),

      profile: relationship({ ref: "Profile.name", many: false }),
      organizations: relationship({ ref: "Organization.members", many: true }),
      projects: relationship({ ref: "Project.members", many: true }),

      createdAt: timestamp({
        defaultValue: { kind: "now" },
      }),
    },
  }),

  Profile: list({
    access: {
      operation: {
        query: ({ session, context, listKey, operation }) => true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
      },
    },

    fields: {
      name: relationship({
        ref: "User.profile",
        many: false,
        db: {
          foreignKey: true,
        },
      }),
      website: text(),
      linkedin: text(),
      github: text(),
      gitlab: text(),

      createdAt: timestamp({
        defaultValue: { kind: "now" },
      }),
    },
  }),

  Organization: list({
    access: {
      operation: {
        query: ({ session, context, listKey, operation }) => true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
      },
    },

    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text(),
      website: text(),
      linkedin: text(),
      github: text(),
      gitlab: text(),

      admin: relationship({ ref: "User", many: true }),
      members: relationship({ ref: "User.organizations", many: true }),
      projects: relationship({ ref: "Project.organization", many: true }),

      createdAt: timestamp({
        defaultValue: { kind: "now" },
      }),
    },
  }),

  Project: list({
    access: {
      operation: {
        query: ({ session, context, listKey, operation }) => true,
        create: ({ session, context, listKey, operation }) => true,
        update: isAdmin,
        delete: isAdmin,
      },
    },

    fields: {
      name: text({ validation: { isRequired: true } }),
      website: text(),
      linkedin: text(),
      repository: text({ validation: { isRequired: true } }),

      admin: relationship({ ref: "User", many: true }),
      members: relationship({ ref: "User.projects", many: true }),
      organization: relationship({ ref: "Organization.projects", many: false }),

      description: text(),
    },
  }),
};
