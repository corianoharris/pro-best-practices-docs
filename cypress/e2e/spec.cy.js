/**
 * Copyright (c) Coriano Harris. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const mdToHtml = require('nano-markdown');

describe('Example Cypress Markdown test', () => {
  it('visits the Getting Started Page', () => {
    cy.document().invoke('open');
    const pageText = 'Get started with your documentation here...';
    cy.visit('/docs/introduction/getting-started');
    cy.document().its('contentType').should('eq', 'text/html');
    cy.contains(pageText);
  });

  it('converts the Markdown file', () => {
    cy.request('/markdown-file.js')
      .its('body')
      .then(mdToHtml)
      .then((html) => {
        cy.document().invoke('write', html);
      });
    cy.contains('h1', 'Example Topic');
    cy.get('li')
      .should('have.length', 3)
      .and(($list) => {
        expect($list[0]).contain('one');
        expect($list[1]).contain('two');
        expect($list[2]).contain('three');
      });
  });
});
