export type GetIDType = string | number | undefined;
export const getID = (): GetIDType => {
  // Math.random должен быть уникальным из-за своего алгоритма заполнения.
  // Преобразуем его в базу 36 (числа + буквы) и берем первые 9 символов
  // после десятичной дроби.
  return `_${Math.random().toString(36).substr(2, 9)}`;
};
export const userId = getID();
// eslint-disable-next-line no-console
console.log(userId);
