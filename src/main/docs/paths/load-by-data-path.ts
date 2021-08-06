export const loadByDataPath = {
  post: {
    tags: ['Admin'],
    summary:
      'Api para buscar agendamento baseado em um data inicial e uma data final',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loadByDataParamsSchema',
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
              $ref: '#/schemas/loadByDataSchema',
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
