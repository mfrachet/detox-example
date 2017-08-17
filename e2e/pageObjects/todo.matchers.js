/**
 * Provides the matcher by testID
 */
const matchersById = (element) => {
  const inputAdder = element(by.id('inputAdder'));
  const touchableAdder = element(by.id('touchableAdder'));
  const textAdd = element(by.id('textAdd'));
  const list = element(by.id('list'));
  const switchHideChecked = element(by.id('switchHideChecked'));
  const touchableFifteenth = element(by.id('touchable-todo-15'));

  /* Doesn't exist at all in the application tree */
  const unknownComponent = element(by.id('unknownComponent'));

  return { inputAdder, touchableAdder, textAdd, unknownComponent, list, switchHideChecked, touchableFifteenth };
};

/**
 * Provides the others matchers
 */
const matchersCustoms = (element) => {
  const getMarriedTodo = element(by.text('Do Get married'));
  const newTodoItem = element(by.text('Stuff'));

  return { getMarriedTodo, newTodoItem };
};

const PageObjectModel = (element) => {
  const fromId = matchersById(element);
  const fromCustom = matchersCustoms(element);

  return Object.assign({}, fromId, fromCustom);
};

module.exports = PageObjectModel;
