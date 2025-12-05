import { create } from 'zustand'

interface AssessmentState {
  currentScore: number
  totalQuestions: number
  answers: Record<string, string>
  setAnswer: (questionId: string, answer: string) => void
  updateScore: (correct: boolean) => void
  resetAssessment: () => void
}

export const useAssessmentStore = create<AssessmentState>((set) => ({
  currentScore: 0,
  totalQuestions: 0,
  answers: {},
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),
  updateScore: (correct) =>
    set((state) => ({
      currentScore: correct ? state.currentScore + 1 : state.currentScore,
      totalQuestions: state.totalQuestions + 1,
    })),
  resetAssessment: () =>
    set({
      currentScore: 0,
      totalQuestions: 0,
      answers: {},
    }),
}))
