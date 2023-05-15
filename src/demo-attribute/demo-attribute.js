import {attr, prop, listen} from '@exadel/esl/modules/esl-utils/all';
import {ESLTrigger} from '@exadel/esl/modules/esl-trigger/core';

export class ESLDemoAttribute extends ESLTrigger {
  static is = 'esl-d-attribute';

  @prop('click') CLICK_EVENT;
  
  @attr({defaultValue: '1000'}) showDelay;
  
  connectedCallback() {
    super.connectedCallback();
    console.log(this.CLICK_EVENT, this.showDelay); // BUG: both are undefined
  }

  @listen((that) => that.CLICK_EVENT)
  _onClick(e) {
    super._onClick(e);
  }
}
