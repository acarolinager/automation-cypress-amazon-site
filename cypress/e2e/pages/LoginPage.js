class LoginPage {
    createAccountButton(){
      return cy.get('#createAccountSubmit');
    }

    inputName(){
      return cy.get('#ap_customer_name');
    }

    inputEmail(){
      return cy.get('#ap_email');
    }

    inputPassword(){
      return cy.get('#ap_password');
    }

    inputConfirmationPassword(){
      return cy.get('#ap_password_check');
    }

    errorInputNameInBlank(){
      return cy.get('#auth-customerName-missing-alert > .a-box-inner > .a-alert-content');
    }

    errorInputEmailInBlank(){
      return cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content');
    }

    errorInputPasswordInBlank(){
      return cy.get('#auth-password-missing-alert > .a-box-inner > .a-alert-content');
    }

    errorInputEmail(){
      return cy.get('#auth-email-invalid-claim-alert > .a-box-inner > .a-alert-content');
    }

    errorInputPassword(){
      return cy.get('#auth-password-invalid-password-alert > .a-box-inner > .a-alert-content');
    }

    errorInputConfirmPassword(){
      return cy.get('#auth-password-mismatch-alert > .a-box-inner > .a-alert-content');
    }

    sendButton(){
      return cy.get('#continue');
    }

    loginText(){
      return cy.get('.a-padding-extra-large > .a-spacing-small');
    }
}

export default LoginPage;