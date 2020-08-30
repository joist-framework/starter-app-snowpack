import { State } from '@joist/component';
import { expect } from '@open-wc/testing';

import { AppElement } from './app.element';

describe('AppElement', () => {
  let el: AppElement;

  beforeEach(() => {
    el = new AppElement();

    el.connectedCallback();
  });

  it('should render', () => {
    expect(el).to.be.instanceOf(AppElement);
  });

  it('should increment', (done) => {
    el.injector.get(State).onChange(() => {
      expect(el.state.value).to.equal(1);

      expect(el.shadowRoot!.querySelector('span')!.innerHTML).to.equal(
        '<!---->1<!---->'
      );

      done();
    });

    el.shadowRoot!.querySelectorAll('button')[1].click();
  });

  it('should decrement', (done) => {
    el.injector.get(State).onChange(() => {
      expect(el.state.value).to.equal(-1);

      expect(el.shadowRoot!.querySelector('span')!.innerHTML).to.equal(
        '<!---->-1<!---->'
      );

      done();
    });

    el.shadowRoot!.querySelectorAll('button')[0].click();
  });
});
