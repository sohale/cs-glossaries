Tesitng approaches/solutions in JavaScript

* LB: 4 types: unit/component/e2e/contract

* SinonJS, proxyquire, rewire.

* More on SinonJS.

* Spy/Mock/... terms


* Mocha/chai combination: Use mocha.js, nyc/istanbul.js, ...

* Cypress: what about it?

* Exploratory testing. Other paradigms.

* A nice modern style of testing used in [mermaid/gantt](https://github.com/mermaid-js/mermaid/blob/ac76fb73a81e178722285ef8fb86c50a865469e7/src/diagrams/gantt/ganttDb.spec.js) (uses a curious syntax)
```js
  describe('when using duration', function () {
    it.each`
      str       | expected
      ${'1d'}   | ${moment.duration(1, 'd')}
      ${'2w'}   | ${moment.duration(2, 'w')}
      ${'1ms'}  | ${moment.duration(1, 'ms')}
      ${'0.1s'} | ${moment.duration(100, 'ms')}
      ${'1f'}   | ${moment.duration.invalid()}
    `('should $str resulting in $expected duration', ({ str, expected }) => {
      expect(ganttDb.parseDuration(str)).toEqual(expected);
    });
  });
```
