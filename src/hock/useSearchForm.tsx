import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { setFilterSelector } from '../redux/users_selectors';
import { FilterType, SetFilterType } from '../redux/user_reducer';
import { useUsersContainer } from './useUsersContainer';

export type Friend = 'true' | 'false' | 'null';
type FormType = {
  term: string;
  friend: Friend;
};

export const useSearchForm = (): {
  filter: SetFilterType;
  submit: (
  values: FormType,
  { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => void;
} => {
  // eslint-disable-next-line no-debugger
  // debugger;
  const filter = useSelector(setFilterSelector);
  const { onFilterChange } = useUsersContainer();

  const submit = useCallback(
    (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const filter: FilterType = {
        term: values.term,
        friend: values.friend === 'null' ? null : values.friend === 'true',
      };
      onFilterChange(filter);
      setSubmitting(false);
    },
    [onFilterChange],
  );

  return { filter, submit };
};
