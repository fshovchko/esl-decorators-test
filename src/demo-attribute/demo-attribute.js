import {attr, prop, listen} from '@exadel/esl/modules/esl-utils/all';
import {ESLTrigger} from '@exadel/esl/modules/esl-trigger/core';

export class ESLDemoAttribute extends ESLTrigger {
  static is = 'esl-d-attribute';

  @prop('click') CLICK_EVENT;
  
  @attr({defaultValue: '1000'}) showDelay;

  @listen((that) => that.CLICK_EVENT)
  _onClick(e) {
    super._onClick(e);
  }
}
