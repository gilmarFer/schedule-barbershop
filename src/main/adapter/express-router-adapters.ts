import { Response, Request } from 'express';
import { HttpRequest } from '../../adapters/presentation/helpers/http';
import { Controller } from '../../adapters/presentation/protocols/controller';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
