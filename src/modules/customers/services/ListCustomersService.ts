import { Customer } from '../database/entities/Customers';
import { customerRepositoy } from '../database/repositories/CustomerRepositories';

export default class ListCustomerService {
  async execute(): Promise<Customer[]> {
    const customers = customerRepositoy.find();
    return customers;
  }
}
