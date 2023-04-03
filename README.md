<h2 align="center">and-or</h2>

<p align="center">
Available now
</p>

`pnpm add @ollierelph/and-or` or `pnpm add and-or`

## What's this?

`and-or` allows you to build 2d arrays of options to iterate over

```typescript
import {Single} from "and-or4t"

const one = new Single("ONE");
const two = new Single("TWO");
const three = new Single("THREE");

console.log(one.and(two).and(three));
/**
 * Gives us:
 * [["ONE", "TWO", "THREE"]]
 */

console.log(one.or(two).or(three));
/**
 * Gives us:
 * [["ONE"], ["TWO"], ["THREE"]]
 */

console.log(one.or(two.and(three)));
/**
 * Gives us:
 * [["ONE"], ["TWO", "THREE"]]
 */
```
