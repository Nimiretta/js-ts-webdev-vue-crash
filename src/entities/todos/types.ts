export type TTodo = {
  id: number;
  documentId: string;
  todo: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type TTodoEdit = Pick<TTodo, 'completed' | 'todo'>;

// Common

export type TPagination = {
  page: number;
  pageSize: number;
  withCount: boolean;
};

export type TSort = string | string[];

export type TMeta = Omit<TPagination, 'withCount'> & {
  pageCount: number;
  total: number;
};

// Get Todos (a list of Todos)
export type TGetTodosRequest = {
  sort?: TSort;
  pagination?: TPagination;
};

export type TGetTodosResponse = {
  data: TTodo[];
  meta: TMeta;
};

// Post a Todo
export type TPostTodoRequest = {
  data: TTodoEdit;
};

export type TPostTodoResponse = {
  data: TTodo;
  meta: Partial<TMeta>;
};