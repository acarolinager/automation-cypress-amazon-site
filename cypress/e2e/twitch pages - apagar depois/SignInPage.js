class SignInPage {
  usernameField() {
    return cy.get('#login-username');
  }

  passwordField() {
    return cy.get('#password-input');
  }

  enterButton() {
    return cy.get('.ScCoreButtonLabel-sc-s7h2b7-0'); 
  }

  modalLoginError() {
    return cy.get('.ksSizV'); 
  }

  registrationButton() {
    return cy.get('.kYWUOz');
  }

  signupUsername() {
    return cy.get('#signup-username');
  }

  errorCaractererNameModal() {
    return cy.get('.ScTransitionBase-sc-hx4quq-0 > .Layout-sc-1xcs6mc-0 > .CoreText-sc-1txzju1-0');
  }

  errorCaractererPasswordModal() {
    return cy.get(':nth-child(2) > :nth-child(1) > .form-group-auth__animated-text > .ScTransitionBase-sc-hx4quq-0 > .Layout-sc-1xcs6mc-0 > .CoreText-sc-1txzju1-0');
  }

  dateField() {
    return cy.get('.cNKHwD > :nth-child(1) > .ScInputContainer-sc-vu7u7d-3 > .Layout-sc-1xcs6mc-0 > .ScInputBase-sc-vu7u7d-0');
  }

  monthField() {
    return cy.get('[aria-label="Selecione seu mês de aniversário"]');
  }

  yearField() {
    return cy.get('.InjectLayout-sc-1i43xsx-0.birthday-picker__input > .ScInputContainer-sc-vu7u7d-3 > .Layout-sc-1xcs6mc-0 > .ScInputBase-sc-vu7u7d-0');
  }

  errorDateModal() {
    return cy.get(':nth-child(3) > :nth-child(1) > .form-group-auth__animated-text > .ScTransitionBase-sc-hx4quq-0 > .Layout-sc-1xcs6mc-0 > .CoreText-sc-1txzju1-0');
  }

  phoneInput(){
    return cy.get('#phone-input');
  }

  finalRegistrationButton(){
    return cy.get(':nth-child(3) > .ScCoreButton-sc-ocjdkq-0');
  }
}

export default SignInPage;
