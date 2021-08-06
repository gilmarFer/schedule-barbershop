export const loginParamsSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  require: ['email', 'password'],
};

export const accountSchema = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
    },
  },
};
