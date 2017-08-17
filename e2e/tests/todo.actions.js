const PageObjectModel  = require('./../pageObjects/todo.matchers');

/**
 * This suit of tests aims to provide some example of the APIs concerning
 * actions provided by Detox.
 * The full list of methods is available here : https://github.com/wix/detox/blob/master/docs/APIRef.ActionsOnElement.md
 */
describe('Actions', () => {
  let po;

  let inputAdder;
  let touchableAdder;
  let unknownComponent;
  let getMarriedTodo;
  let switchHideChecked;
  let textAdd;
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
    unknownComponent = po.unknownComponent;
    getMarriedTodo = po.getMarriedTodo;
    switchHideChecked = po.switchHideChecked;
    textAdd = po.textAdd
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
    // beforeEach(async () => {
    //   /**
    //    * When a TextInput has been filled in a previous test using `typeText`,
    //    * it doesn't seem possible to type in it again. The keyboard doesn't show
    //    * and the test fails.
    //    * Restarting the app seems to fix it
    //    */
    //   await device.launchApp({ newInstance: true });
    // });
    //
    // it('should have added a new todo item to the list', async () => {
    //   await inputAdder.typeText('Stuff');
    //   /**
    //    * Necessary trick, check notes here https://github.com/wix/detox/blob/master/docs/APIRef.waitFor.md#methods
    //    * withTimeout is a trick that waits the layout animation to "finish" before expecting the result
    //    * to be displayed
    //    */
    //   await waitFor(touchableAdder)
    //     .toBeVisible()
    //     .withTimeout(1000);
    //
    //   await touchableAdder.tap();
    //   await expect(touchableAdder).toBeVisible();
    // });
  });
});
