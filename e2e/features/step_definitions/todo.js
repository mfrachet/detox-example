/* eslint-disable */
const { defineSupportCode } = require('cucumber');
const matchers = require('./../../pageObjects/todo.matchers');

defineSupportCode(function({ Given, When, Then, setDefaultTimeout }) {

  setDefaultTimeout(120 * 1000);

  Given('I have entered a new {string}', async (todoName) => {
    const inputAdder = await element(by.type('UITextField'));
    await inputAdder.tap();
    await inputAdder.typeText(todoName);
  });

  When('I press the add button', async () => {
    const touchableAdder = await element(by.id('touchableAdder').withDescendant(by.id('textAdd')));
    await touchableAdder.tap();
  });

  Then('I should see a new item at the end', async () => {
    const list = await element(by.id('todoList'));
    await list.scrollTo('bottom');
    const text = await element(by.text('todoname'));
    await expect(text).toExist();
  });
});
