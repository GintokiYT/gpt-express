import { Request, Response, NextFunction } from 'express';
import { chatScheme } from '../models/chat';

export const validationChatScheme = (req: Request, res: Response, next: NextFunction) => {
  const { domainId, questionHistoryId, userId, user, content, type, success } = req.body;

  const validated = chatScheme.safeParse({
    domainId: domainId,
    questionHistoryId: questionHistoryId,
    userId: userId,
    user: user,
    content: content,
    type: type,
    success: success
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