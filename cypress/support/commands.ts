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
import apiRoutes from '../fixtures/apiRoutes.json'
var _ = require('lodash')

Cypress.Commands.add('loginViaApi', (username: string, password: string) => {
  let passwordBase64 = btoa(_.unescape(encodeURIComponent(password)))
  cy.log('password:' + passwordBase64)
  cy.request({
    method: apiRoutes.login.method,
    url: Cypress.env('apiUrl') + apiRoutes.login.url,
    body: {
      username: username,
      password: passwordBase64,
    },
  })
    .then((resp) => {
      expect(resp.status).to.eq(200)
    })
    .its('body')
    .then((body) => {
      cy.setCookie('tokenp_', body.split(' ')[1])
    })
})
