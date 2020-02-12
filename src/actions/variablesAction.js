export const CHANGE_TRADE_IN = 'CHANGE_TRADE_IN';
export const CHANGE_DOWN_PAYMENT = 'CHANGE_DOWN_PAYMENT';
export const CHANGE_MILEAGES = 'CHANGE_MILEAGES';
export const CHANGE_APR = 'CHANGE_APR';
export const CHANGE_MSRP = 'CHANGE_MSRP';
export const CHANGE_SCORE = 'CHANGE_SCORE';


export const changeTradeIn = ({ value }) => (
  {
    type: CHANGE_TRADE_IN,
    value,
  }
);

export const changeDownPayment = ({ value }) => (
  {
    type: CHANGE_DOWN_PAYMENT,
    value,
  }
);

export const changeMileages = ({ value }) => (
  {
    type: CHANGE_MILEAGES,
    value,
  }
);

export const changeAPR = ({ value }) => (
  {
    type: CHANGE_APR,
    value,
  }
);

export const changeMSRP = ({ value }) => (
  {
    type: CHANGE_MSRP,
    value,
  }
);


export const changeScore = ({ score }) => (
  {
    type: CHANGE_SCORE,
    score,
  }
);
