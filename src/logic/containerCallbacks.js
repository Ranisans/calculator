const callback = (val) => console.log(val);

const loanCallbacks = {
  zipCallback: callback,
  termCallback: callback,
  tradeInCallback: callback,
  downPaymentCallback: callback,
  APRCallback: callback,
  creditScoreCallback: callback,
};
const leaseCallbacks = {
  zipCallback: callback,
  tradeInCallback: callback,
  downPaymentCallback: callback,
  leaseTermCallback: callback,
  mileagesCallback: callback,
  creditScoreCallback: callback,
};
const infoCardCallbacks = {
  MSRPCallback: callback,
  vehicleCallback: callback,
};

export { loanCallbacks, leaseCallbacks, infoCardCallbacks };
