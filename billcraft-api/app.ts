import express, { Request, Response } from 'express';
import { customerData } from './mockData';
import { Customer } from './types';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/v1/customers', (_, res: Response) => {
  res.json(customerData);
});

app.get('/v1/customers/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = customerData.data.find(customer => customer.id === id);

  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.put('/v1/customers/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedCustomer: Customer = req.body;

  const index = customerData.data.findIndex(customer => customer.id === id);

  if (index !== -1) {
    customerData.data[index] = { ...customerData.data[index], ...updatedCustomer };
    res.json({ message: 'Customer updated successfully', customer: customerData.data[index] });
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});