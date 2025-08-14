export interface Customer {
  id: number;
  name: string;
  phone?: string;
  chest?: number;
  shoulder?: number;
  length?: number;
  sleeve?: number;
  shalwarWaist?: number;
  shalwarLength?: number;
}

export interface CustomerInput {
  name: string;
  phone?: string;
  chest?: number;
  shoulder?: number;
  length?: number;
  sleeve?: number;
  shalwarWaist?: number;
  shalwarLength?: number;
}