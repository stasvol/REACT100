import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { setFilterSelector } from '../redux/users_selectors';
import { FilterType, SetFilterType } from '../redux/user_reducer';
import { useUsersContainer } from './useUsersContainer';

export type Friend = 'true' | 'false' | 'null';
type FormType = {
  term: string;
  friend: string | Friend;
};

export const useSearchForm = (): {
  filter: SetFilterType;
  submit: (
  values: FormType,
  { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => void;
} => {
  const filter = useSelector(setFilterSelector);
  const { onFilterChange } = useUsersContainer();

  const submit = useCallback(
    (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
      const filters: FilterType = {
        term: values.term,
        friend: values.friend === 'null' ? null : values.friend === 'true',
      };
      onFilterChange(filters);
      setSubmitting(false);
    },
    [onFilterChange],
  );

  return { filter, submit };
};
