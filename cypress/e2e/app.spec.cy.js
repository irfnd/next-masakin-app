const selectorProfile = "div.fixed-bottom.navbar.mw-mobile.bg-white.p-0.mx-auto > div > button:nth-child(3)";
const selectorRegister = "button.btn.btn-primary.w-75.text-white.rounded-4.mb-3";
const selectorText = "div.d-flex.flex-column.align-items-center.h-auto.mw-profile.px-4.py-5.mb-5 > span";
const selectorTextRegister = "div > span.text-primary.fw-bold.ts-24";
const textNoLogin = "You are not logged in yet!";
const textGetStarted = "Let's Get Started !";

describe("Navigation", () => {
	it("Should navigate to register page", () => {
		cy.visit("http://localhost:3000/");
		cy.get(selectorProfile).click();
		cy.url().should("include", "/profile");
		cy.get(selectorText).contains(textNoLogin);
		cy.get(selectorRegister).click();
		cy.get(selectorTextRegister).contains(textGetStarted);
	});
});
