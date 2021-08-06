export const loadAdmConfigPath = {
  post: {
    tags: ['Admin'],
    summary: 'Api para carergar as configurações do admin',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loadAdmConfigParamsSchema',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/loadAdmConfigSchema',
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
    },
  },
};
