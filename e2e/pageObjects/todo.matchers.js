/**
 * Access element by Detox matchers
 * The full list of matchers is available here : https://github.com/wix/detox/blob/master/docs/APIRef.Matchers.md#bytypenativeviewtype
 */
const PageObjectModel = (element) => {
  /* Simple ones */
  const list = element(by.id('todoList'));
  const touchableFifteenth = element(by.id('touchable-todo-15'));
  const unknownComponent = element(by.id('unknownComponent'));
  const newTodoItem = element(by.text('Stuff'));
  const inputAdder = element(by.type('UITextField'));
  const switchHideChecked = element(by.traits(['button']));
  const getMarriedTodo = element(by.text('Do Get married'));

  /* Advanced ones */
  const textAdd = element(by.id('textAdd').withAncestor(by.id('touchableAdder')));
  const touchableAdder = element(by.id('touchableAdder').withDescendant(by.id('textAdd')));

  return {
    list,
    touchableFifteenth,
    unknownComponent,
    textAdd,
    touchableAdder,
    getMarriedTodo,
    newTodoItem,
    inputAdder,
    switchHideChecked
  };
};

module.exports = PageObjectModel;
