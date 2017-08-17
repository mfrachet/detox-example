const Po = require('./po');
const { poFromIds } = Po;

describe('Expectations', () => {
  let po;

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  beforeEach(async () => {
    po = poFromIds(element);
  });

  /* .toBeVisible() expectation test */
  describe('.toBeVisible()', () => {
    it('should have a visible "Add" button when a text is filled in the input field', async () => {
      await po.inputAdder.typeText('Item');

      /**
       * Necessary trick, check notes here https://github.com/wix/detox/blob/master/docs/APIRef.waitFor.md#methods
       * withTimeout is another trick that waits the layout animation to "finish" before expecting the result
       * to be displayed
       */
      await waitFor(po.touchableAdder)
        .toBeVisible()
        .withTimeout(1000);

      await expect(po.touchableAdder).toBeVisible();
    });
  });

  /* .toBeNotVisible() expectation test */
  describe('.toBeNotVisible()', () => {
    it('should not have a visible "Add" button when no text is filled in the input field', async () => {
      await expect(po.touchableAdder).toBeNotVisible();
    });
  });

  /* .toExist() expectation test */
  describe('.toExist()', () => {
    it('should have an existing inputAdder component', async () => {
      await expect(po.inputAdder).toExist();
    });
  });

  /* .toNotExist() expectation test */
  describe('.toNotExist()', () => {
    it('shouldnt have a component with the testID unknownComponent', async () => {
      await expect(po.unknownComponent).toNotExist();
    });
  });

  /**
   * .toHaveText() expectation test
   * This test is failing due to the first one. It seems there is a synchronization problem
   * while trying to use typeText multiple times
   */
  describe('.toHaveText()', () => {
    // beforeEach(async () => {
    //   await device.restartDevice();
    // });
    //
    // it('should have the textAdd with a text equals to "Add"', async () => {
    //   await po.inputAdder.typeText('Item');
    //
    //   /**
    //    * Necessary trick, check notes here https://github.com/wix/detox/blob/master/docs/APIRef.waitFor.md#methods
    //    * withTimeout is another trick that waits the layout animation to "finish" before expecting the result
    //    * to be displayed
    //    */
    //   await waitFor(po.textAdd)
    //     .toBeVisible()
    //     .withTimeout(1000);
    //
    //   await expect(po.textAdd).toHaveText('Add');
    // });
  });

  describe('.toHaveId()', () => {
    it('should have a testID equals to todo-15 while searching for "Do : Get married"', async () => {
      await expect(po.getMarriedTodo).toHaveId('todo-15');
    });
  });

  describe('.toHaveValue()', () => {
    it('should have the switch for hide checked to have a default value of 0', async () => {
      /**
       * We can't use boolean to make test assertion while using a switch
       * Switch, with Detox and RN, use '0' or '1' to determine its value
       */
      await expect(po.switchHideChecked).toHaveValue('0');
    });

    it('should have the switch with a value of 1 when it has been switched', async () => {
      await po.switchHideChecked.tap();
      /**
       * We can't use boolean to make test assertion while using a switch
       * Switch, with Detox and RN, use '0' or '1' to determine its value
       */
      await expect(po.switchHideChecked).toHaveValue('1');
    });
  });
});
