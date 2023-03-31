import { render, screen } from "@testing-library/react";

import Home from "./page";

test("smoke test if the Homepage renders", () => {
  render(<Home />);

  expect(screen.getByLabelText(/^Home Page$/i)).toBeTruthy();
});
