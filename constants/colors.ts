import { PasswordStrength } from "./type"

export enum Colors {
  BLACK = '#000000',
  WHITE = '#FFFFFF',
  BLUE = '#647FFF',
  GRAY = '#FFFFFF80',
  RED = '#E05151',
  YELLOW = '#E3A063',
  GREEN = '#91E2B7',
  GRAY_BORDER = '#FFFFFF1F',
}

export const Gradient = {
  CATEGORY_PURPLE: ['#8A32A9', '#8A00FF']
}

export type PasswordColorEntry = [Colors, Colors, number, number];

export const PasswordColors: Record<PasswordStrength, PasswordColorEntry> = {
  [PasswordStrength.SHORT]: [Colors.GRAY, Colors.GRAY, 1, 0],
  [PasswordStrength.WEAK]: [Colors.RED, Colors.GRAY, 1, 3],
  [PasswordStrength.FAIR]: [Colors.YELLOW, Colors.GRAY, 1, 1],
  [PasswordStrength.GOOD]: [Colors.BLUE, Colors.GRAY, 3, 1],
  [PasswordStrength.STRONG]: [Colors.GREEN, Colors.GRAY, 1, 0],
};