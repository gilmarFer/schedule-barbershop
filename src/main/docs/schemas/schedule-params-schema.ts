export const scheduleParamsSchema = {
  type: 'object',
  properties: {
    nome: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    data: {
      type: 'string',
    },
  },
  require: ['nome', 'phone', 'data'],
};

export const scheduleSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    nome: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    data: {
      type: 'string',
    },
  },
};
