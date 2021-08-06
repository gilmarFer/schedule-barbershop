export const registerNewAdmParamsSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    barber: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    key: {
      type: 'string',
    },
  },
  require: ['email', 'password', 'name', 'barber', 'phone', 'key'],
};

export const registerNewAdmSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    barber: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
  },
};
