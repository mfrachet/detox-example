/**
 * These are two methods to access element by Detox matchers
 * The full list of matchers is available here : https://github.com/wix/detox/blob/master/docs/APIRef.Matchers.md#bytypenativeviewtype
 */

/**
 * Provides the matcher by testID
 */
const matchersById = (element) => {
  const touchableAdder = element(by.id('touchableAdder'));
  const textAdd = element(by.id('textAdd'));
  const list = element(by.id('todoList'));
  const touchableFifteenth = element(by.id('touchable-todo-15'));

  /* Doesn't exist at all in the application tree */
  const unknownComponent = element(by.id('unknownComponent'));

  return { touchableAdder, textAdd, unknownComponent, list, touchableFifteenth };
};

/**
 * Provides the others matchers
 */
const matchersCustoms = (element) => {
  const newTodoItem = element(by.text('Stuff'));
  const inputAdder = element(by.type('UITextField'));
  const switchHideChecked = element(by.traits(['button']));
  const getMarriedTodo = element(by.text('Do Get married'));

  return { getMarriedTodo, newTodoItem, inputAdder, switchHideChecked };
};

const PageObjectModel = (element) => {
  const fromId = matchersById(element);
  const fromCustom = matchersCustoms(element);

  return Object.assign({}, fromId, fromCustom);
};

module.exports = PageObjectModel;
