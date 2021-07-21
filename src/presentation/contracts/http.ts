export type HttpResponse<T = unknown> = {
  statusCode: number;
  data: T;
};

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack,
});

export const ok = (data: unknown): HttpResponse => ({
  statusCode: 200,
  data,
});
