import type { FrequentQuestion } from "../types/geor";

const URL_FREQUENT_QUESTIONS_ALL: string = "https://geor.pro/api/frequent-questions-all";

export const getFrequentQuestionsAll = async () => {
  const response = await fetch(URL_FREQUENT_QUESTIONS_ALL);
  if(!response.ok) return [];
  const frequentQuestion: FrequentQuestion[] = await response.json();
  const formatFrequentQuestion = frequentQuestion.map( question => {
    return {
      id: question.id,
      question: question.title,
      answer: question.description,
      video: question.attach
    }
  });
  return formatFrequentQuestion;
}