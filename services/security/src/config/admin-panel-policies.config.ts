import { Joi } from "celebrate";

export const SUPER_ADMIN_ROLE_NAME = "ROLE_SUPERADMIN";
export const ADMIN_PANEL_ATTRIBUTE_NAME = "ADMIN_PANEL";

export const AdminPanelPoliciesSchema = Joi.object({
  addUser: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  editUser: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  deactivateUser: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  deleteUser: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  resetPassword: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  addPolicies: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  getPolicies: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  removePolicies: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  addAttributeToUser: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  removeAttributeToUser: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  getUserId: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  createAccessKey: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  removeAccessKey: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  getAccessKeys: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  getUser: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  getUsers: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  getUsersByResource: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
  getAttributes: Joi.object({
    attribute: Joi.string(),
    resource: Joi.string(),
  }),
});

type AdminPanelPolicyItem = {
  attribute: string;
  resource: string;
};

export type AdminPanelPoliciesConfig = {
  addUser: AdminPanelPolicyItem;
  editUser: AdminPanelPolicyItem;
  deactivateUser: AdminPanelPolicyItem;
  deleteUser: AdminPanelPolicyItem;
  resetPassword: AdminPanelPolicyItem;
  addPolicies: AdminPanelPolicyItem;
  getPolicies: AdminPanelPolicyItem;
  removePolicies: AdminPanelPolicyItem;
  addAttributeToUser: AdminPanelPolicyItem;
  removeAttributeToUser: AdminPanelPolicyItem;
  getUserId: AdminPanelPolicyItem;
  createAccessKey: AdminPanelPolicyItem;
  removeAccessKey: AdminPanelPolicyItem;
  getAccessKeys: AdminPanelPolicyItem;
  getUser: AdminPanelPolicyItem;
  getUsers: AdminPanelPolicyItem;
  getUsersByResource: AdminPanelPolicyItem;
  getAttributes: AdminPanelPolicyItem;
};

export const getAdminPanelPoliciesConfig = (): AdminPanelPoliciesConfig => ({
  addUser: {
    attribute: process.env.ADMIN_PANEL_ADD_USER || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/add-user",
  },
  editUser: {
    attribute: process.env.ADMIN_PANEL_EDIT_USER || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/edit-user",
  },
  deactivateUser: {
    attribute: process.env.ADMIN_PANEL_DEACTIVATE_USER || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/deactivate-user",
  },
  deleteUser: {
    attribute: process.env.ADMIN_PANEL_DELETE_USER || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/delete-user",
  },
  resetPassword: {
    attribute: process.env.ADMIN_PANEL_RESET_PASSWORD || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/reset-password",
  },
  addPolicies: {
    attribute: process.env.ADMIN_PANEL_ADD_POLICIES || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/add-policies",
  },
  getPolicies: {
    attribute: process.env.ADMIN_PANEL_GET_POLICIES || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/get-policies",
  },
  removePolicies: {
    attribute: process.env.ADMIN_PANEL_REMOVE_POLICIES || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/remove-policies",
  },
  addAttributeToUser: {
    attribute: process.env.ADMIN_PANEL_ADD_ATTRIBUTE_TO_USER || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/add-attribute-to-user",
  },
  removeAttributeToUser: {
    attribute: process.env.ADMIN_PANEL_REMOVE_ATTRIBUTE_TO_USER || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/remove-attribute-to-user",
  },
  getUserId: {
    attribute: process.env.ADMIN_PANEL_GET_USER_ID || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "user-operation/get-user-id",
  },
  createAccessKey: {
    attribute: process.env.ADMIN_PANEL_CREATE_ACCESS_KEY || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "api/tokens/create-access-key",
  },
  removeAccessKey: {
    attribute: process.env.ADMIN_PANEL_REMOVE_ACCESS_KEY || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "api/tokens/remove-access-key",
  },
  getAccessKeys: {
    attribute: process.env.ADMIN_PANEL_GET_ACCESS_KEYS || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "api/tokens/get-access-keys",
  },
  getUser: {
    attribute: process.env.ADMIN_PANEL_GET_USER || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "api/users",
  },
  getUsers: {
    attribute: process.env.ADMIN_PANEL_GET_USERS || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "api/users/get-user",
  },
  getUsersByResource: {
    attribute: process.env.ADMIN_PANEL_GET_USERS_BY_RESOURCE_NAME || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "api/users/get-users-by-resource",
  },
  getAttributes: {
    attribute: process.env.ADMIN_PANEL_GET_ATTRIBUTES || ADMIN_PANEL_ATTRIBUTE_NAME,
    resource: "api/attributes/get-attributes",
  },
});
