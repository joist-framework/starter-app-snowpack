import { component, State, handle, JoistElement, get } from '@joist/component';
import { template } from '@joist/component/lit-html';
import { html } from 'lit-html';
import { inject } from '@joist/di';

class FooService {}

class BarService {
  constructor(@inject(FooService) public foo: FooService) {}
}

@component<number>({
  tagName: 'app-root',
  state: 0,
  shadowDom: 'open',
  render: template(({ state, run }) => {
    return html`
      <style>
        * {
          font-size: 200%;
        }

        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }
      </style>

      <button @click="${run('dec')}">-</button>
      <span>${state}</span>
      <button @click="${run('inc')}">+</button>
    `;
  }),
})
export class AppElement extends JoistElement {
  @get(State)
  public state!: State<number>;

  @get(BarService)
  public bar!: BarService;

  connectedCallback() {
    super.connectedCallback();

    console.log(this.bar.foo);
  }

  @handle('dec') decrement() {
    return this.state.setValue(this.state.value - 1);
  }

  @handle('inc') increment() {
    return this.state.setValue(this.state.value + 1);
  }
}
