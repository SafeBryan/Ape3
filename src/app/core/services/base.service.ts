export interface BaseService<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  create(item: T): T;
  update(item: T): T;
  delete(id: number): void;
} 