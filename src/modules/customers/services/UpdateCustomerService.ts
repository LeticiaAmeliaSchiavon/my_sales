import AppError from '@shared/errors/AppError';
import { Customer } from '../database/entities/Customers';
import { customerRepositoy } from '../database/repositories/CustomerRepositories';

interface IUpdateCustomer {
  id: number;
  name: string;
  email: string;
}

export default class UpdateCustomerService {
  public async execute({
    id,
    name,
    email,
  }: IUpdateCustomer): Promise<Customer> {
    const customer = await customerRepositoy.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.', 404);
    }

    const customerExists = await customerRepositoy.findByEmail(email);

    if (customerExists && email !== customer.email) {
      throw new AppError('There is already one customer with this email.', 409);
    }

    customer.name = name;
    customer.email = email;

    await customerRepositoy.save(customer);

    return customer;
  }
}
