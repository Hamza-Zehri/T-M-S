import { Customer, CustomerInput } from '../types';
import fs from 'fs-extra';
import path from 'path';

const DATA_FILE = path.join(__dirname, '../../customers.json');

export class CustomerService {
  private customers: Map<number, Customer> = new Map();
  private nextId = 1;

  constructor() {
    this.loadSync();
  }

  // Synchronous load for constructor (for beginners)
  private loadSync() {
    try {
      if (fs.existsSync(DATA_FILE)) {
        const data = fs.readJSONSync(DATA_FILE);
        for (const customer of data.customers || []) {
          this.customers.set(customer.id, customer);
        }
        this.nextId = data.nextId || 1;
      }
    } catch (e) {
      // ignore file errors for now
    }
  }

  private async save() {
    await fs.writeJSON(DATA_FILE, {
      customers: Array.from(this.customers.values()),
      nextId: this.nextId
    });
  }

  addCustomer(input: CustomerInput): Customer {
    const customer: Customer = { id: this.nextId++, ...input };
    this.customers.set(customer.id, customer);
    this.save();
    return customer;
  }

  findCustomer(id: number): Customer | undefined {
    return this.customers.get(id);
  }

  modifyCustomer(id: number, input: CustomerInput): Customer | undefined {
    if (!this.customers.has(id)) return undefined;
    const updated = { id, ...input };
    this.customers.set(id, updated);
    this.save();
    return updated;
  }

  removeCustomer(id: number): boolean {
    const existed = this.customers.delete(id);
    this.save();
    return existed;
  }
}