import { LoanPosition } from '../constants';

const loanCalculation = ({ data, creditRate }) => {
  if (data.msrp * data.loanTerm * data.score * data.apr === 0) { return 0; }
  const result = (
    (data.msrp - data.tradeIn - data.downPayment)
   * creditRate[data.score] * data.apr
  ) / data.loanTerm;

  return result;
};

const leaseCalculation = ({ data, creditRate }) => {
  if (data.msrp * data.mileages * data.leaseTerm * data.score === 0) { return 0; }
  const result = (
    (data.msrp - data.tradeIn - data.downPayment)
    * data.mileages * creditRate[data.score]
  ) / (10000 * data.leaseTerm);

  return result;
};

const paymentCalculation = ({ data, creditRate }) => {
  let func;
  if (data.calculatorType === LoanPosition) {
    func = loanCalculation;
  } else {
    func = leaseCalculation;
  }

  const result = func({ data, creditRate });

  return new Promise((resolve) => {
    setTimeout(resolve, 1000, result.toFixed(2));
  });
};

export default paymentCalculation;
