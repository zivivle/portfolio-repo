export interface Ingredient {
  icon: string
  label: string
}

export const allIngredients = [
  // 추후 프로젝트 이미지로 수정
  { icon: '🍅', label: 'Tomato' },
  { icon: '🥬', label: 'Lettuce' },
  { icon: '🧀', label: 'Cheese' },
  { icon: '🥕', label: 'Carrot' },
  { icon: '🍌', label: 'Banana' },
  { icon: '🫐', label: 'Blueberries' },
  { icon: '🥂', label: 'Champers?' },
]

const [tomato, lettuce, cheese, carrot] = allIngredients
export const initialTabs = [tomato, lettuce, cheese, carrot]

export const getNextIngredient = (ingredients: Ingredient[]): Ingredient | undefined => {
  const existing = new Set(ingredients)
  return allIngredients.find((ingredient) => !existing.has(ingredient))
}
