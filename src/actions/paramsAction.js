export const CHANGE_ZIP = 'CHANGE_ZIP';

export const CHANGE_SCORE = 'CHANGE_SCORE';

export const changeZip = ({ zipCode }) => (
  {
    type: CHANGE_ZIP,
    zipCode,
  }
);

export const changeScore = ({ score }) => (
  {
    type: CHANGE_SCORE,
    score,
  }
);
