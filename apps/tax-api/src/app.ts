import express from 'express';

const app = express();

type CalcInput = {
  yearsOfService: number;
  isDisability: boolean;
  isOfficer: boolean;
  severancePay: number;
};

const calcTax = (input: CalcInput) => {
  return 10000;
};

// JSON parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/calc-tax', (req, res) => {
  res.json({ tax: calcTax(req.body) });
});

export default app;
