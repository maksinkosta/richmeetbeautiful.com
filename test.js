import {Role} from 'testcafe';
import Page from './richmeetbeautiful-page-model.js';
import { ClientFunction } from 'testcafe';

fixture `richmeetbeautiful.com Smoke Test`
    .page `https://www.richmeetbeautiful.com`;

const page = new Page();
const getPageUrl = ClientFunction(() => window.location.href);

test('1. Change language 2. Verify that Hungarian language is chosen 3. Verify that correct page is loaded', async t => {
    await t
    .maximizeWindow()

    .click(page.changeLanguage)
    .click(page.selectHungarian)
    .expect(page.changeLanguage.textContent).contains('magyar')
    .expect(page.h1.textContent).eql('A világ első számú milliomos társkeresője')
    .expect(getPageUrl()).contains('https://www.richmeetbeautiful.com/hu/')
});

// Test user login, to be developed further
/*
const tester = Role('https://www.richmeetbeautiful.com', async t => {
    await t
    // To be used when profile is created
})
*/