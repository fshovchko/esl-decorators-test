import {ready, bind} from '@exadel/esl/modules/esl-utils/all';
import {ESLTrigger} from '@exadel/esl/modules/esl-trigger/core';

export class ESLDemoBind extends ESLTrigger {
  static is = 'esl-d-bind';

  @ready
  connectedCallback() {
    super.connectedCallback();
    this.$$on('click', this._onClick);
  }

  @bind
  _onClick(event) {
    super._onClick(event);
  }
}
