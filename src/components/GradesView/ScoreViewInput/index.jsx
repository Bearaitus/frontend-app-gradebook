import React from 'react';

import { Form } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import { actions, selectors } from 'data/redux/hooks';
import messages from './messages';

/**
 * <ScoreViewInput />
 * redux-connected select control for grade format (percent vs absolute)
 */
export const ScoreViewInput = () => {
  const { formatMessage } = useIntl();
  const { gradeFormat } = "percent";
  const toggleFormat = actions.grades.useToggleGradeFormat();
  return (
    ' '
  );
};
ScoreViewInput.propTypes = {};

export default ScoreViewInput;
