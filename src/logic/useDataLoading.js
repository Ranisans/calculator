import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import mockData from '../testData';
import { changeZip } from '../actions/paramsAction';
import { changeMSRP, changeMileages, changeScore } from '../actions/variablesAction';
import { changeLoanTerm, changeLeaseTerm } from '../actions/termsAction';
import { persistedState } from '../store';

const useDataLoading = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const accessToken = '399f855ae7c9ae';

  const fillDictionary = (resultMockData) => {
    const dictionary = {};
    const {
      creditScoreData,
      infoCardMockData,
      loanDefaultData,
      leaseDefaultData,
    } = resultMockData;
    dictionary.creditScoreValues = creditScoreData.creditScoreValues;
    dictionary.creditRate = creditScoreData.creditRate;

    dictionary.vehicleName = infoCardMockData.vehicleName;
    dictionary.dealerName = infoCardMockData.dealerName;
    dictionary.dealerPhone = infoCardMockData.dealerPhone;
    dictionary.dealerRating = infoCardMockData.dealerRating;
    dictionary.MSRP = infoCardMockData.MSRP;
    dispatch(changeMSRP({ value: infoCardMockData.MSRP }));

    dictionary.loanTerms = loanDefaultData.termValues;

    dictionary.leaseTerms = leaseDefaultData.termValues;
    dictionary.mileages = leaseDefaultData.mileagesValues;

    if (persistedState === undefined) {
      dispatch(changeLoanTerm({ term: loanDefaultData.loanInitialTerm }));
      dispatch(changeScore({ score: creditScoreData.defaultCreditScore }));
      dispatch(changeLeaseTerm({ term: leaseDefaultData.leaseInitialTerm }));
      dispatch(changeMileages({ value: leaseDefaultData.defaultMileage }));
    }

    return dictionary;
  };

  useEffect(() => {
    Promise.resolve(mockData).then((resultMockData) => {
      const dictionary = fillDictionary(resultMockData);
      setData(dictionary);
    }).then(() => fetch(`https://cors-anywhere.herokuapp.com/https://ipinfo.io/json?token=${accessToken}`, {
      mode: 'cors',
      headers: { 'Access-Control-Allow-Origin': '*', Accept: 'application/json' },
    }))
      .then((result) => result.json())
      .then((result) => {
        const { postal } = result;
        dispatch(changeZip({ zipCode: postal }));
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return {
    error,
    loading,
    data,
  };
};

export default useDataLoading;
