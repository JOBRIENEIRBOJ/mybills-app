import { useMemo } from 'react';
import type { Bill, BillStatus, BillSummary } from '../types';
import { useLocalStorage } from './useLocalStorage';
import { isOverdue, getDaysUntilDue } from '../utils/dateUtils';

export function useBills() {
  const [bills, setBills] = useLocalStorage<Bill[]>('mybills', []);

  const addBill = (billData: Omit<Bill, 'id' | 'dateAdded' | 'paid'>) => {
    const newBill: Bill = {
      ...billData,
      id: crypto.randomUUID(),
      paid: false,
      dateAdded: new Date().toISOString(),
    };
    setBills(prev => [...prev, newBill]);
  };

  const updateBill = (id: string, updates: Partial<Bill>) => {
    setBills(prev =>
      prev.map(bill => (bill.id === id ? { ...bill, ...updates } : bill))
    );
  };

  const deleteBill = (id: string) => {
    setBills(prev => prev.filter(bill => bill.id !== id));
  };

  const togglePaid = (id: string) => {
    setBills(prev =>
      prev.map(bill =>
        bill.id === id ? { ...bill, paid: !bill.paid } : bill
      )
    );
  };

  const getBillStatus = (bill: Bill): BillStatus => {
    if (bill.paid) return 'paid';
    if (isOverdue(bill.dueDate)) return 'overdue';
    return 'upcoming';
  };

  const sortedBills = useMemo(() => {
    return [...bills].sort((a, b) => {
      if (a.paid && !b.paid) return 1;
      if (!a.paid && b.paid) return -1;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
  }, [bills]);

  const summary: BillSummary = useMemo(() => {
    const total = bills.length;
    const paid = bills.filter(bill => bill.paid).length;
    const overdue = bills.filter(bill => !bill.paid && isOverdue(bill.dueDate)).length;
    const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
    const paidAmount = bills.filter(bill => bill.paid).reduce((sum, bill) => sum + bill.amount, 0);
    const overdueAmount = bills
      .filter(bill => !bill.paid && isOverdue(bill.dueDate))
      .reduce((sum, bill) => sum + bill.amount, 0);

    return {
      total,
      paid,
      overdue,
      totalAmount,
      paidAmount,
      overdueAmount,
    };
  }, [bills]);

  return {
    bills: sortedBills,
    addBill,
    updateBill,
    deleteBill,
    togglePaid,
    getBillStatus,
    getDaysUntilDue,
    summary,
  };
}