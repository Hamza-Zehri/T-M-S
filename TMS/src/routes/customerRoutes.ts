import { Application, Router } from 'express';
import { CustomerController } from '../controllers/customerController';
import { CustomerService } from '../services/customerService';

export function setCustomerRoutes(app: Application) {
  const router = Router();
  const customerService = new CustomerService();
  const customerController = new CustomerController(customerService);

  // RESTful customer routes
  router.post('/', (req, res, next) => customerController.createCustomer(req, res, next));
  router.get('/:id', (req, res, next) => customerController.getCustomer(req, res, next));
  router.put('/:id', (req, res, next) => customerController.updateCustomer(req, res, next));
  router.delete('/:id', (req, res, next) => customerController.deleteCustomer(req, res, next));

  // Mount the router at /customers
  app.use('/customers', router);
}

// Example of a customer object
const customer = {
  "name": "John Doe"
};
