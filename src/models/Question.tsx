export default class Question {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  text: string;
  correct_answer: string;
  incorrect_answers: [];

  constructor(
    id: number,
    category: string,
    type: string,
    difficulty: string,
    text: string,
    correct_answer: string,
    incorrect_answers: []
  ) {
    this.id = id;
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.text = text;
    this.correct_answer = correct_answer;
    this.incorrect_answers = incorrect_answers;
  }
}
