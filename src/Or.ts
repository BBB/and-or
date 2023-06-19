import { Operation } from "./Operation";
import { And } from "./And";

export class Or<T> implements Operation<T> {
  constructor(private left: Operation<T>, private right: Operation<T>) {}

  all(): Array<T[]> {
    return this.left.all().concat(this.right.all());
  }

  or(other: Operation<T>): Or<T> {
    return new Or(this, other);
  }

  and(other: Operation<T>): And<T> {
    return new And(this, other);
  }
}
