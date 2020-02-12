export const CHANGE_ZIP = 'CHANGE_ZIP';

export const changeZip = ({ zipCode }) => (
  {
    type: CHANGE_ZIP,
    zipCode,
  }
);
