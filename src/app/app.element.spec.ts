import { AppElement } from './app.element';

describe('AppElement', () => {
  let el: AppElement;

  beforeEach(() => {
    el = new AppElement();

    el.connectedCallback();
  });

  it('should render', () => {
    expect(el).toBeTruthy();
  });

  it('should increment', async () => {
    await el.increment();

    expect(el.state.value).toBe(1);
    expect(el.shadowRoot!.querySelector('span')!.innerHTML).toBe(
      '<!---->1<!---->'
    );
  });

  it('should render', async () => {
    await el.decrement();

    expect(el.state.value).toBe(-1);
    expect(el.shadowRoot!.querySelector('span')!.innerHTML).toBe(
      '<!---->-1<!---->'
    );
  });
});
