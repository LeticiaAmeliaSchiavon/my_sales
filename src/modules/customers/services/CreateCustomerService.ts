import AppError from '@shared/errors/AppError';
import { Customer } from '../infra/database/entities/Customers';
import { customerRepositoy } from '../infra/database/repositories/CustomerRepositories';
import { ICreateCustomer } from '../domain/models/ICreateUser';

export default class CreateCustomerService {
  public async execute({ name, email }: ICreateCustomer): Promise<Customer> {
    const emailExists = await customerRepositoy.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.', 409);
    }

    const customer = customerRepositoy.create({
      name,
      email,
    });

    await customerRepositoy.save(customer);

    return customer;
  }
}
