import AppError from '@shared/errors/AppError';
import { Customer } from '../database/entities/Customers';
import { customerRepositoy } from '../database/repositories/CustomerRepositories';

interface IShowCustomer {
  id: number;
}

export default class ShowCustomerService {
  public async execute({ id }: IShowCustomer): Promise<Customer> {
    const customer = await customerRepositoy.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.', 404);
    }

    return customer;
  }
}
