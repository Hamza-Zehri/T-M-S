export class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    measurements: Record<string, any>;

    constructor(id: number, name: string, email: string, phone: string, measurements: Record<string, any>) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.measurements = measurements;
    }
}