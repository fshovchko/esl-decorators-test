import {ExportNs, listen} from '@exadel/esl/modules/esl-utils/all';
import {ESLTrigger} from '@exadel/esl/modules/esl-trigger/core';

@ExportNs('Inherit')
export class ESLDemoInherit extends ESLTrigger {
  static is = 'esl-d-inherit';

  @listen({inherit: true})
  _onClick(event) {
    super._onClick(event);
  }
}
