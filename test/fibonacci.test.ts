import { fibs, fibsRec } from "../src/fibonacci";
import { describe, expect, it } from "vitest";

describe("fibonacci sequence", () => {
  it("expects fibonacci of 8 to be [0, 1, 1, 2, 3, 5, 8, 13] ", () => {
    expect(fibs(8).sort()).toBe([0, 1, 1, 2, 3, 5, 8, 13].sort());
  });
});
