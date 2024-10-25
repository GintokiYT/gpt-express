import { Router, Request, Response } from 'express';
import { validationChatScheme } from '../middlewares/chat';
import { createChat, updateState } from '../controllers/chat';

const router = Router();

router.post('/', validationChatScheme, async (req: Request, res: Response) => {
  try {
    const { domainId, questionHistoryId, userId, user, content, type, success } = req.body;
    const newChat = await createChat(
      domainId,
      questionHistoryId,
      userId,
      user,
      content,
      type,
      success
    );
    res.status(200).json(newChat);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
});

router.patch('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { success } = req.body;

  try {
    const updatedChat = await updateState(parseInt(id), success);
    res.status(200).json(updatedChat);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
});

export { router as ChatRouter }
