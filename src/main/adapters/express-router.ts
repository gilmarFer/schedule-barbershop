import { Request, Response } from 'express';
import { Controller } from '../../presentation/contracts/controller';

export const adaptRoute = (controller: Controller) => {
  return (req: Request, res: Response) => {
    const httpResponse = controller.handle();
    res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
