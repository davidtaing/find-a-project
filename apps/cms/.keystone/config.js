"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var dotenv = __toESM(require("dotenv"));
var import_core2 = require("@keystone-6/core");

// schema.ts
var import_core = require("@keystone-6/core");
var import_fields = require("@keystone-6/core/fields");
var isAdmin = ({ session: session2 }) => session2?.data.isAdmin;
var lists = {
  User: (0, import_core.list)({
    access: {
      operation: {
        query: ({ session: session2, context, listKey, operation }) => true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      isAdmin: (0, import_fields.checkbox)(),
      profile: (0, import_fields.relationship)({ ref: "Profile.name", many: false }),
      organizations: (0, import_fields.relationship)({ ref: "Organization.members", many: true }),
      projects: (0, import_fields.relationship)({ ref: "Project.members", many: true }),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  Profile: (0, import_core.list)({
    access: {
      operation: {
        query: ({ session: session2, context, listKey, operation }) => true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
      }
    },
    fields: {
      name: (0, import_fields.relationship)({
        ref: "User.profile",
        many: false,
        db: {
          foreignKey: true
        }
      }),
      website: (0, import_fields.text)(),
      linkedin: (0, import_fields.text)(),
      github: (0, import_fields.text)(),
      gitlab: (0, import_fields.text)(),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  Organization: (0, import_core.list)({
    access: {
      operation: {
        query: ({ session: session2, context, listKey, operation }) => true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)(),
      website: (0, import_fields.text)(),
      linkedin: (0, import_fields.text)(),
      github: (0, import_fields.text)(),
      gitlab: (0, import_fields.text)(),
      admin: (0, import_fields.relationship)({ ref: "User", many: true }),
      members: (0, import_fields.relationship)({ ref: "User.organizations", many: true }),
      projects: (0, import_fields.relationship)({ ref: "Project.organization", many: true }),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  Project: (0, import_core.list)({
    access: {
      operation: {
        query: ({ session: session2, context, listKey, operation }) => true,
        create: ({ session: session2, context, listKey, operation }) => true,
        update: isAdmin,
        delete: isAdmin
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      website: (0, import_fields.text)(),
      linkedin: (0, import_fields.text)(),
      repository: (0, import_fields.text)({ validation: { isRequired: true } }),
      admin: (0, import_fields.relationship)({ ref: "User", many: true }),
      members: (0, import_fields.relationship)({ ref: "User.projects", many: true }),
      organization: (0, import_fields.relationship)({ ref: "Organization.projects", many: false }),
      description: (0, import_fields.text)()
    }
  })
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.CMS_SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt isAdmin",
  secretField: "password"
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
dotenv.config();
var keystone_default = withAuth(
  (0, import_core2.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "postgresql",
      url: process.env.CMS_DATABASE_URL ?? "postgresql://postgres:postgres@localhost:5432/find-a-project",
      prismaClientPath: "node_modules/.prisma/client"
    },
    server: {
      port: 4e3
    },
    lists,
    session
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
