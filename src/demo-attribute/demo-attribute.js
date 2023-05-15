import {jsonAttr, prop} from '@exadel/esl/modules/esl-utils/all';
import {ESLToggleable} from '@exadel/esl/modules/esl-toggleable/core';

export class ESLDemoAttribute extends ESLToggleable {
  static is = 'esl-d-attribute';

  @prop('esl:demo:before:show') BEFORE_SHOW_EVENT;

  @jsonAttr({defaultValue: {showDelay: 2000}}) defaultParams;

  connectedCallback() {
    console.log(this.defaultParams, this.BEFORE_SHOW_EVENT); // BUG: both are undefined
    super.connectedCallback();
  }
}
