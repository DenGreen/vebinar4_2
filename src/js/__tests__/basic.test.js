import test1 from "../user";

const can1 = [
  { name: "мечник", health: 10 },
  { name: "лучник", health: 80 },
  { name: "маг", health: 100 },
];

const can2 = [
  { name: "мечник", health: 10 },
  { name: "лучник", health: 10 },
  { name: "маг", health: 100 },
];

  test("can1", () => {
    const expected = can1;
    const received = test1([
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ]);
    expect(received).toEqual(expected);
  });

  test("can2", () => {
    const expected = can2;
    const received = test1([
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 10 },
    ]);
    expect(received).toEqual(expected);
  });