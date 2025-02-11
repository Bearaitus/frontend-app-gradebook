import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';

import { instructorDashboardUrl } from 'data/services/lms/urls';
import useGradebookHeaderData from './hooks';
import messages from './messages';

export const GradebookHeader = () => {
  const { formatMessage } = useIntl();
  const {
    areGradesFrozen,
    canUserViewGradebook,
    courseId,
    courseTitle,
    handleToggleViewClick,
    showBulkManagement,
    toggleViewMessage,
  } = useGradebookHeaderData();
  const dashboardUrl = instructorDashboardUrl();
  return (
    <div className="gradebook-header">
      
      <h1>{formatMessage(messages.gradebook)} - {courseTitle}</h1>
      <div className="subtitle-row d-flex justify-content-between align-items-center">
        
        {showBulkManagement && (
          <Button variant="tertiary" onClick={handleToggleViewClick}>
            {formatMessage(toggleViewMessage)}
          </Button>
        )}
      </div>
      {areGradesFrozen && (
        <div className="alert alert-warning" role="alert">
          {formatMessage(messages.frozenWarning)}
        </div>
      )}
      {(canUserViewGradebook === false) && (
        <div className="alert alert-warning" role="alert">
          {formatMessage(messages.unauthorizedWarning)}
        </div>
      )}
    </div>
  );
};

export default GradebookHeader;
