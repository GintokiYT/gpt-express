import { prisma } from '../utils/prisma';

export const createQuestionHistory = async (domainId: number, name: string) => {
  try {
    const newQuestionHistory = await prisma.questionHistory.create({
      data: {
        domainId: domainId,
        name: name
      }
    })
    return newQuestionHistory;
  } catch (error: unknown) {
    throw new Error('Error creating question history');
  }
}