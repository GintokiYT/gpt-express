import { Request, Response, NextFunction } from 'express';
import { questionHistoryScheme } from '../models/questionhistory';

export const validationQuestionHistory = (req: Request, res: Response, next: NextFunction) => {
  const { domainId, name } = req.body;

  const validated = questionHistoryScheme.safeParse({
    domainId: domainId,
    name: name
  });

  if(!validated.success) {
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
