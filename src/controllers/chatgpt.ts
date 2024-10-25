import { openai } from '../utils/openia';
import { getFrequentQuestionsAll } from './geor';

export const chatgpt = async (prompt: string) => {
	const frequentQuestionsAll = await getFrequentQuestionsAll();

	let questions = frequentQuestionsAll.map( question => {
		return {
			id: question.id, 
			question: question.question
		}
	});

	let stringQuestions = "";

	questions.forEach( question => {
		stringQuestions += `{id:${question.id},questions:'${question.question}'},`
	});

	const content = `Dado el siguiente formato: Si la pregunta es idéntica o muy similar a alguna de las alternativas, devuelve solo el 'id'. Si no hay coincidencias, devuelve solo 'null'. No des explicaciones adicionales, solo devuélveme el valor. pregunta: ${prompt} alternativas: [${stringQuestions}]`;
	
  const completion = await openai.chat.completions.create({
		messages: [
			{ role: "user", content: content }
		],
		model: "gpt-4o-mini",
	});

	const id = Number(completion.choices[0].message.content);

	if(!isNaN(id)) {
		let result = "";
		const findQuestion = frequentQuestionsAll.find( question => question.id === id);
		if(findQuestion) {
			result += `${findQuestion.answer}`;
			if(findQuestion.video) {
				result += `<iframe class="w-full rounded-md" src="https://www.youtube.com/embed/${findQuestion.video}" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
			}
			return result;
		}

		return "";
	} else {
		const completion = await openai.chat.completions.create({
			messages: [
				{ role: "user", content: prompt }
			],
			model: "gpt-4o-mini",
		});

		return completion.choices[0].message.content;
	}
};