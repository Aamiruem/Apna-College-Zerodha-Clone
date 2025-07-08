// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom"; // ✅ This is all you need
// import Hero from "../landing_page/home/Hero";

// // Test Suite
// describe("Hero Component", () => {
//     test("renders signup button", () => {
//         render(<Hero />);
//         const heroImage = screen.getByAltText("Hero Image");
//         expect(heroImage).toBeInTheDocument();
//         expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
//     });
// });







import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

// Test Suite
describe("Hero Component", () => {
    test("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button", { name: /signup now/i });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});
