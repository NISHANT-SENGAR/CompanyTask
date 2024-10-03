export interface HomeModule {
  name: string;
  email: string;
  unitNumber: string;
  serviceType: string; // You can define an enum for service types
  summary: string;
  details?: string;
}
