import { useIntl } from '@edx/frontend-platform/i18n';

import { selectors, thunkActions } from 'data/redux/hooks';
import messages from './messages';

export const usePageButtonsData = () => {
  const { formatMessage } = useIntl();

  const { nextPage, prevPage } = selectors.grades.useGradeData();
  const getPrevNextGrades = thunkActions.grades.useFetchPrevNextGrades();

  const getPrevGrades = () => {
    getPrevNextGrades(prevPage);
  };

  const getNextGrades = () => {
    getPrevNextGrades(nextPage);
  };

  return {
    prev: {
      disabled: !prevPage,
      onClick: getPrevGrades,
      text: "Предыдущая страница",
    },
    next: {
      disabled: !nextPage,
      onClick: getNextGrades,
      text: "Следующая страница",
    },
  };
};

export default usePageButtonsData;
