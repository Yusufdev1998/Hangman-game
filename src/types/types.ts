export interface ICategory {
  name: string;
  selected: boolean;
}

export type ICategories = Record<string, ICategory[]>;
