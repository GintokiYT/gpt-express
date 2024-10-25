import { Router } from 'express';
import { DomainRouter } from './domain';
import { QuestionHistoryRouter } from './questionhistory';
import { ChatRouter } from './chat';

const router = Router();

router.use('/v1/domain', DomainRouter);
router.use('/v1/questionhistory', QuestionHistoryRouter);
router.use('/v1/chat', ChatRouter);

export { router };