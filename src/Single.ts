import { Operation } from "./Operation";
import { Or } from "./Or";
import { And } from "./And";

export class Single<T> implements Operation<T> {
  constructor(private value: T) {}

  all(): Array<T[]> {
    return [[this.value]];
  }

  or(other: Operation<T>): Or<T> {
    return new Or(this, other);
  }

  and(other: Operation<T>): And<T> {
    return new And(this, other);
  }
}
