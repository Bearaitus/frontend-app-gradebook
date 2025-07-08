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
      text: "Вернуться к прошлым пользователям",
    },
    next: {
      disabled: !nextPage,
      onClick: getNextGrades,
      text: "Перейти к следующим пользователям",
    },
  };
};

export default usePageButtonsData;
