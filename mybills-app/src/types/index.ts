export interface Bill {
  id: string;
  label: string;
  amount: number;
  dueDate: string;
  paid: boolean;
  dateAdded: string;
}

export type BillStatus = 'upcoming' | 'paid' | 'overdue';

export interface BillSummary {
  total: number;
  paid: number;
  overdue: number;
  totalAmount: number;
  paidAmount: number;
  overdueAmount: number;
}