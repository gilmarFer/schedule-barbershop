export const saveAdmConfigParamsSchema = {
  type: 'object',
  properties: {
    days: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
    hours: {
      type: 'array',
      items: {
        type: 'string',
      },
    },

    key: {
      type: 'string',
    },
  },
  require: ['days', 'hours', 'key'],
};

export const saveAdmConfigSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    days: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
    hours: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
};
