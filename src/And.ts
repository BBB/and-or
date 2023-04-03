import { Or } from "./Or";
import { Operation } from "./Operation";

export class And<T> implements Operation<T> {
  constructor(private left: Operation<T>, private right: Operation<T>) {}

  all(): Array<T[]> {
    return this.left
      .all()
      .flatMap((left) => this.right.all().map((it) => left.concat(it)));
  }

  or(other: Operation<T>) {
    return new Or(this, other);
  }

  and(other: Operation<T>) {
    return new And(this, other);
  }
}
