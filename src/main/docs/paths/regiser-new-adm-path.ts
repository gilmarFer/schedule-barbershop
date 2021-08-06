export const registerNewAdmPath = {
  post: {
    tags: ['Admin'],
    summary: 'Api para registart um adm',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/registerNewAdmParamsSchema',
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
              $ref: '#/schemas/registerNewAdmSchema',
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
