export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    measurements: Measurement[];
}

export interface Measurement {
    type: string;
    value: number;
}

export interface CustomerInput {
    name: string;
    email: string;
    phone: string;
    measurements: MeasurementInput[];
}

export interface MeasurementInput {
    type: string;
    value: number;
}