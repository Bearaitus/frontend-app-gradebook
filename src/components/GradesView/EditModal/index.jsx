import React from 'react';

import {
  Button,
  Alert,
  ModalDialog,
  ActionRow,
} from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import OverrideTable from './OverrideTable';
import ModalHeaders from './ModalHeaders';
import useEditModalData from './hooks';
import messages from './messages';

/**
 * <EditModal />
 * Wrapper component for the modal that allows editing the grade for an individual
 * unit, for a given student.
 * Provides a StatusAlert with override fetch errors if any are found, an OverrideTable
 * (with appropriate headers) for managing the actual override, and a submit button for
 * adjusting the grade.
 * (also provides a close button that clears the modal state)
 */
export const EditModal = () => {
  const { formatMessage } = useIntl();
  const {
    onClose,
    error,
    handleAdjustedGradeClick,
    isOpen,
  } = useEditModalData();

  return (
    null
  );
};

export default EditModal;
