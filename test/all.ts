import { Single } from "../src/Single";
import { expect, it, describe } from "vitest";
import { Or } from "../src/Or";
import { And } from "../src/And";

const one = new Single("ONE");
const two = new Single("TWO");
const three = new Single("THREE");
describe("class based", () => {
  it("get all of one", () => {
    expect(one.all()).toEqual([["ONE"]]);
  });

  it("get all of or", () => {
    expect(new Or(one, two).all()).toEqual([["ONE"], ["TWO"]]);
  });

  it("get all of and", () => {
    expect(new And(one, two).all()).toEqual([["ONE", "TWO"]]);
  });
  it("get all of and with an or", () => {
    expect(new And(one, new Or(two, three)).all()).toEqual([
      ["ONE", "TWO"],
      ["ONE", "THREE"],
    ]);
  });
  it("get all of or with an and", () => {
    expect(new Or(one, new And(two, three)).all()).toEqual([
      ["ONE"],
      ["TWO", "THREE"],
    ]);
  });
  it("get all of or with an or", () => {
    expect(new Or(one, new Or(two, three)).all()).toEqual([
      ["ONE"],
      ["TWO"],
      ["THREE"],
    ]);
  });
  it("get all of and with an and", () => {
    expect(new And(one, new And(two, three)).all()).toEqual([
      ["ONE", "TWO", "THREE"],
    ]);
  });
});

describe("fluent based", () => {
  it("get all of and with an or", () => {
    expect(one.and(two.or(three)).all()).toEqual([
      ["ONE", "TWO"],
      ["ONE", "THREE"],
    ]);
  });
  it("get all of or with an and", () => {
    expect(one.or(two.and(three)).all()).toEqual([["ONE"], ["TWO", "THREE"]]);
  });
  it("get all of or with an or", () => {
    expect(one.or(two.or(three)).all()).toEqual([["ONE"], ["TWO"], ["THREE"]]);
  });
  it("get all of and with an and", () => {
    expect(one.and(two.and(three)).all()).toEqual([["ONE", "TWO", "THREE"]]);
  });
});
