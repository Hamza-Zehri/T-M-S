import { Request, Response, NextFunction } from 'express';
import { CustomerService } from '../services/customerService';
import { CustomerInput } from '../types';

export class CustomerController {
  constructor(private customerService: CustomerService) {}

  // Create a new customer
  public createCustomer(req: Request, res: Response, next: NextFunction): void {
    try {
      const customerData: CustomerInput = req.body;
      const newCustomer = this.customerService.addCustomer(customerData);
      res.status(201).json(newCustomer);
    } catch (error) {
      next(error);
    }
  }

  // Get customer by ID
  public getCustomer(req: Request, res: Response, next: NextFunction): void {
    try {
      const customerId = req.params.id;
      if (!customerId) {
        res.status(400).send('Customer ID is required');
        return;
      }
      const customer = this.customerService.findCustomer(Number(customerId));
      if (customer) {
        res.status(200).json(customer);
      } else {
        res.status(404).send('Customer not found');
      }
    } catch (error) {
      next(error);
    }
  }

  // Update customer by ID
  public updateCustomer(req: Request, res: Response, next: NextFunction): void {
    try {
      const customerId = req.params.id as string;
      if (!customerId) {
        res.status(400).send('Customer ID is required');
        return;
      }
      const updatedData: CustomerInput = req.body;
      const updatedCustomer = this.customerService.modifyCustomer(Number(customerId), updatedData);
      if (updatedCustomer) {
        res.status(200).json(updatedCustomer);
      } else {
        res.status(404).send('Customer not found');
      }
    } catch (error) {
      next(error);
    }
  }

  // Delete customer by ID
  public deleteCustomer(req: Request, res: Response, next: NextFunction): void {
    try {
      const customerId = req.params.id as string;
      if (!customerId) {
        res.status(400).send('Customer ID is required');
        return;
      }
      const success = this.customerService.removeCustomer(Number(customerId));
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Customer not found');
      }
    } catch (error) {
      next(error);
    }
  }
}
