import { Request, Response, NextFunction } from 'express';
import { domainScheme } from '../models/domain';

export const validationDomainScheme = (req: Request, res: Response, next: NextFunction) => {
  const { domain } = req.body;

  const validated = domainScheme.safeParse({ domains: domain });

  if (!validated.success) {
    let errors = validated.error.errors.map( error => {
      return {
        field: error.path[0],
        message: error.message
      }
    });
    res.status(400).json({ errors: errors });
    return;
  }
  next();
}
