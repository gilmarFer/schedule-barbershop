export const schedulePath = {
  post: {
    tags: ['To Schedule'],
    summary: 'Api para agendar um horário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/scheduleParamsSchema',
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
              $ref: '#/schemas/scheduleSchema',
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
