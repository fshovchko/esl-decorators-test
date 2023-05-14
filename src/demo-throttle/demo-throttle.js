import {listen, throttle} from '@exadel/esl/modules/esl-utils/all';
import {ESLDecoratedEventTarget} from '@exadel/esl/modules/esl-event-listener/core';
import {ESLTrigger} from '@exadel/esl/modules/esl-trigger/core';

export class ESLDemoThrottle extends ESLTrigger {
  static is = 'esl-d-throttle';

  @listen({event: 'click', target: (that) => ESLDecoratedEventTarget.for(that, throttle, 1000)})
  _onClick(event) {
    super._onClick(event);
  }
}
