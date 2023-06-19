export interface Operation<T> {
  all(): Array<T[]>;
  or(other: Operation<T>): Operation<T>;
  and(other: Operation<T>): Operation<T>;
}
