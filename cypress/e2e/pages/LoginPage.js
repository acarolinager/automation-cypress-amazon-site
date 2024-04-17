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

    sendButton(){
      return cy.get('#continue');
    }
}

export default LoginPage;