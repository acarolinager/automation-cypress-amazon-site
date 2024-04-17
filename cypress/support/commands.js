// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import 'cypress-file-upload'

// Cypress.Commands.add('uploadMultiple', ({localPaths = [], fileNames = [], mimeType = 'image/png'}) => {
//     const fixtures = (paths) => Promise.all(paths.map(p => cy.fixture(p)))
//     const encoding = 'base64'
   
//     fixtures(localPaths).then(filesContents => {
//       const payload = fileNames.map((fileName, i) => (
//         {
//           fileContent: filesContents[i],
//           fileName,
//           encoding,
//           mimeType
//         }))
//       cy.get('input[type="file"]')
//       .attachFile(payload) 
//     })
//    })

// trying to figure out why the Commands are not working

Cypress.Commands.add('dineRewardsLogin', ( email, password ) => {
    cy.request({
        method: 'POST',
        url: 'https://qa-auth.dine-rewards.com/usernamepassword/login',
        body: {
            username: email,
            password: password,
            grant_type: 'password',
            client_id:  `${Cypress.env('auth0_client_id')}`,
            client_secret: `${Cypress.env('auth0_client_secret')}`,
            audience: `${Cypress.env('auth0_audience')}`,
            scope: `${Cypress.env('auth0_scope')}`,
        },
    }).then(({ body }) => {
        const claims = jwt.decode(body.id_token)
        const { username, updated_at, email, email_verified, sub, exp } = claims

        const auth0Token = {
            body: {
                ...body,
                decodedToken: {
                    claims,
                    audience: `${Cypress.env('auth0_audience')}`,
                    client_id: `${Cypress.env('auth0_client_id')}`,
                    user: {
                        username,
                        updated_at,
                        email,
                        email_verified,
                        sub
                    },
                }
            },
            expiresAt: exp
        }
        window.localStorage.setItem(`auth0Cypress`, JSON.stringify(auth0Token));
    });
})

Cypress.Commands.add('dineRewardsPageLogin', ( email, password ) => {
    cy.get('[data-testid="user-icon"]').click()
    cy.origin('https://qa-auth.dine-rewards.com', () => {

      cy.get('#btn-signin-frmSignup').click()
      cy.get('#login-email').type(email)
      cy.get('#login-password').type(password)
      cy.get('#btn-sign-in').click()
    })
    cy.wait(8000)
})