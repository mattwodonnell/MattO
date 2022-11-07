import { render } from "@testing-library/vue";
import { expect } from "vitest";
import RowTile from "@/components/Board/RowTile.vue";

test("check for class [correct]", () => {
  const { container } = render(RowTile, {
    props: {
      letter: {
        letter: "S",
        state: "correct",
      },
    },
  });

  expect(container.getElementsByClassName("bg-green-600").length).toBe(1);
});

test("check for letter - innerText", () => {
  const { getByText } = render(RowTile, {
    props: {
      letter: {
        letter: "S",
        state: "incorrect",
      },
    },
  });
  getByText("S");
});

test("check for absent letter", () => {
  const { container } = render(RowTile, {
    props: {
      letter: {
        letter: "",
        state: "absent",
      },
    },
  });

  expect(container.getElementsByClassName("bg-gray-500").length).toBe(1);
});

test("check for class [present]", () => {
  const { container } = render(RowTile, {
    props: {
      letter: {
        letter: "S",
        state: "present",
      },
    },
  });

  expect(container.getElementsByClassName("bg-yellow-600").length).toBe(1);
});
