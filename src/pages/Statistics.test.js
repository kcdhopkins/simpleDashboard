import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Statistics from "./Statistics";

describe("Statistics test", () => {
  test("is Gender tab in document", async () => {
    render(
      <MemoryRouter>
        <Statistics />
      </MemoryRouter>
    );
    const gender = screen.getByText("Gender");
    await waitFor(() => {
      expect(gender).toBeInTheDocument();
    });
  });

  test("is Race tab in document", async () => {
    render(
      <MemoryRouter>
        <Statistics />
      </MemoryRouter>
    );
    const race = screen.getByText("Race");
    await waitFor(() => {
      expect(race).toBeInTheDocument();
    });
  });

  test("is Gender tab active on start", async () => {
    const {container} = render(
      <MemoryRouter>
        <Statistics />
      </MemoryRouter>
    );
    // eslint-disable-next-line
    const active = container.getElementsByClassName("active");
    const tab = active[0].innerHTML
    expect(active.length).toBe(1)
    expect(tab).toEqual("Gender")
  });

  test("is Race tab inactive on start", async () => {
    const {container} = render(
      <MemoryRouter>
        <Statistics />
      </MemoryRouter>
    );
    // eslint-disable-next-line
    const active = container.getElementsByClassName("inactive");
    const tab = active[0].innerHTML
    expect(active.length).toBe(1)
    expect(tab).toEqual("Race")
  });
});
