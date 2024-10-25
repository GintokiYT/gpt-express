import { Router, Request, Response } from 'express';
import { validationQuestionHistory } from '../middlewares/questionhistory';
import { createQuestionHistory } from '../controllers/questionhistory';

const router = Router();

router.post('/', validationQuestionHistory, async (req: Request, res: Response) => {
  try {
    const { domainId, name } = req.body;
    const newQuestionHistory = await createQuestionHistory(domainId, name);
    res.status(200).send(newQuestionHistory);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export { router as QuestionHistoryRouter }