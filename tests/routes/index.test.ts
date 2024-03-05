import { describe, expect, it } from "@jest/globals";
import { app } from "../../src/app";

describe("/", () => {
  it("works", () => {
    expect(app).not.toBeUndefined();
  });
});
