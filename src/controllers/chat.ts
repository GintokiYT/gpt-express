import { prisma } from '../utils/prisma';

export const createChat = async (
  domainId: number,
  questionHistoryId: number,
  userId: string,
  user: any,
  content: string,
  type: string,
  success: boolean
) => {
  try {
    const newChat = await prisma.chat.create({
      data: {
        domainId: domainId,
        questionHistoryId: questionHistoryId,
        userId: userId,
        user: user,
        content: content,
        type: type,
        success: success
      }
    });
    return newChat
  } catch (error: unknown) {
    throw new Error('Error creating chat');
  }
}