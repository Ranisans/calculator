const mockData = {
  creditScoreValues: [
    { text: '649 or less', value: 1 },
    { text: '650 - 699', value: 2 },
    { text: '700 - 749', value: 3 },
    { text: '750 - 799', value: 4 },
    { text: '800 - 849', value: 5 },
    { text: '850 - 900', value: 6 },
  ],
  defaultCreditScore: 4,
  creditRate: {
    1: 1.2,
    2: 1.05,
    3: 1,
    4: 0.95,
    5: 0.95,
    6: 0.95,
  },
};

export default mockData;
