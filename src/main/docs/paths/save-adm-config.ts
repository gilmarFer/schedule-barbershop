export const saveAdmConfigPath = {
  post: {
    tags: ['Admin'],
    summary: 'Api para salvar as configurações do admin',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/saveAdmConfigParamsSchema',
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
              $ref: '#/schemas/saveAdmConfigSchema',
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
