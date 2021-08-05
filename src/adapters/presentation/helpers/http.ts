export interface HttpResponse {
  statusCode: number;
  body?: any;
}

export interface HttpRequest {
  body?: any;
}

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: { error: error.message },
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: { error: error },
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
