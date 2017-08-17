const poFromIds = (element) => {
  /**
   * Here are the id matchers
   * It's based on testID to find the good component
   */
  const inputAdder = element(by.id('inputAdder'));
  const touchableAdder = element(by.id('touchableAdder'));
  const textAdd = element(by.id('textAdd'));
  const list = element(by.id('list'));
  const switchHideChecked = element(by.id('switchHideChecked'));
  /* Doesn't exist at all in the application tree */
  const unknownComponent = element(by.id('unknownComponent'));

  /**
   * Here are the custom matchers
   */
  const getMarriedTodo = element(by.text('Do : Get married'));

  return {
    inputAdder,
    touchableAdder,
    textAdd,
    unknownComponent,
    list,
    getMarriedTodo,
    switchHideChecked,
  };
};

module.exports = {
  poFromIds,
};
