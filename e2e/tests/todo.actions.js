const PageObjectModel = require('./../pageObjects/todo.matchers');

/**
 * This suit of tests aims to provide some example of the APIs concerning
 * actions provided by Detox.
 * The full list of methods is available here : https://github.com/wix/detox/blob/master/docs/APIRef.ActionsOnElement.md
 */
describe('Actions', () => {
  let po;

  let inputAdder;
  let touchableAdder;
  let getMarriedTodo;
  let switchHideChecked;
  let touchableFifteenth;
  let list;
  let newTodoItem;

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  beforeEach(async () => {
    po = PageObjectModel(element);

    inputAdder = po.inputAdder;
    touchableAdder = po.touchableAdder;
    getMarriedTodo = po.getMarriedTodo;
    switchHideChecked = po.switchHideChecked;
    getMarriedTodo = po.getMarriedTodo;
    touchableFifteenth = po.touchableFifteenth;
    list = po.list;
    newTodoItem = po.newTodoItem;
  });

  describe('.tap()', () => {
    it('should have switched the "Hide the checked" on', async () => {
      await switchHideChecked.tap();
      /**
       * We can't use boolean to make test assertion while using a switch
       * Switch, with Detox and RN, use '0' or '1' to determine its value
       */
      await expect(switchHideChecked).toHaveValue('1');
    });
  });

  describe('.longPress()', () => {
    // trouver quoi mettre ici
  });

  describe('.multiTap()', () => {
    it('should have crossed the fifteenth item of the list', async () => {
      /**
       * Scrolling to bottom is needed to make the element visible and tappable
       * in the other case, we can't tap on it
       */
      await list.scrollTo('bottom');
      await touchableFifteenth.multiTap(3);
      /**
       * We can't make assumptions on styles nor props while using Detox
       * This way, we use another functional need, like hiding checked to evaluate
       * our assertions
       */
      await switchHideChecked.tap();

      await expect(getMarriedTodo).toNotExist();
    });
  });

  describe('.tapAtPoint()', () => {
    it('should have added a new todo item to the list', async () => {
      /**
       * It seems to be necessary to use .tap() before makings action on element
       * instead, test are failing like this issue :
       * https://github.com/wix/detox/issues/239
       */
      await inputAdder.tap();
      await inputAdder.typeText('Stuff');
      await touchableAdder.tap();
      /**
       * It seems to be necessary to use .tap() before makings action on element
       * instead, test are failing like this issue :
       * https://github.com/wix/detox/issues/239
       */
      await list.tapAtPoint({ x: 12, y: 25 });
      await list.scrollTo('bottom');

      await expect(newTodoItem).toBeVisible();
    });
  });

  describe('.typeText()', () => {
    it('should have displayed the touchableAdder when typing a text inside of the input adder', async () => {
      /**
       * It seems to be necessary to use .tap() before makings action on element
       * instead, test are failing like this issue :
       * https://github.com/wix/detox/issues/239
       */
      await inputAdder.tap();
      await inputAdder.typeText('Stuff');
      await expect(touchableAdder).toBeVisible();
    });
  });

  describe('.replaceText()', () => {
    it('it should have undisplayed the touchableAdder when replacing the text with an empty one', async () => {
      /**
       * It seems to be necessary to use .tap() before makings action on element
       * instead, test are failing like this issue :
       * https://github.com/wix/detox/issues/239
       */
      await inputAdder.tap();
      await inputAdder.typeText('Stuff');
      /**
       * Replace text doesn't seem to work by really typing inside of the input
       * It may act at a lower level
       * This way, we're forced to .tap() on the input to make the state change
       */
      await inputAdder.replaceText('');
      await inputAdder.tap();

      await expect(touchableAdder).toBeNotVisible();
    });
  });

  describe('.clearText()', () => {
    it('it should have undisplayed the touchableAdder when clearing the text', async () => {
      /**
       * It seems to be necessary to use .tap() before makings action on element
       * instead, test are failing like this issue :
       * https://github.com/wix/detox/issues/239
       */
      await inputAdder.tap();
      await inputAdder.typeText('Stuff');
      await inputAdder.clearText();
      await expect(touchableAdder).toBeNotVisible();
    });
  });

  describe('.scroll()', () => {
    it('should have a "get married" item', async () => {
      await list.scroll(500, 'down');
      await expect(getMarriedTodo).toBeVisible();
    });
  });

  describe('.scrollTo()', () => {
    it('should have a "get married" item', async () => {
      await list.scrollTo('bottom');
      await expect(getMarriedTodo).toBeVisible();
    });
  });
});
