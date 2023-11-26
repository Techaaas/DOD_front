export const SET_NAME = 'SET_NAME';
export const SET_SURNAME = 'SET_SURNAME';

export const setName = (name: string) => ({
  type: SET_NAME,
  payload: name,
});

export const setSurname = (surname: string) => ({
  type: SET_SURNAME,
  payload: surname,
});

export const toggleStatementSelection = (isSelected: boolean) => ({
  type: 'TOGGLE_STATEMENT_SELECTION',
  payload: isSelected,
});

export const togglePassportSelection = (isSelected: boolean) => ({
  type: 'TOGGLE_PASSPORT_SELECTION',
  payload: isSelected,
});
