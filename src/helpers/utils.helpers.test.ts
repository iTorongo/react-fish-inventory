import {
  ISOToDefaultDateTimeFormat,
  capitalizeFirstLetter,
} from "./utils.helpers";

describe(ISOToDefaultDateTimeFormat.name, () => {
  it("returns correct date format on given input", () => {
    expect(ISOToDefaultDateTimeFormat("2023-07-09T09:45:00")).toBe(
      "09-Jul-2023 09:45"
    );
    expect(ISOToDefaultDateTimeFormat("2021-07-12T07:30:00")).toBe(
      "07-Dec-2021 07:30"
    );
  });
});

describe(capitalizeFirstLetter.name, () => {
  it("should capitalize first letter of given string", () => {
    expect(capitalizeFirstLetter("arnaf")).toEqual("Arnaf");
    expect(capitalizeFirstLetter("ARNAF")).toEqual("Arnaf");
    expect(capitalizeFirstLetter("aRNAf")).toEqual("Arnaf");
  });
});
