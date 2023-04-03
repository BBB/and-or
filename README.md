<h2 align="center">and-or4t</h2>

<p align="center">
Available now
</p>

`pnpm add @ollierelph/and-or4t` or `pnpm add and-or4t`

## What's this?

`and-or4t` allows you to build 2d arrays of options to iterate over

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
