import { format, isToday, isBefore, differenceInDays, startOfDay } from 'date-fns';

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isToday(dateObj)) {
    return 'Today';
  }
  
  return format(dateObj, 'MMM dd, yyyy');
};

export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const getDaysUntilDue = (dueDate: string | Date): number => {
  const today = startOfDay(new Date());
  const due = startOfDay(new Date(dueDate));
  return differenceInDays(due, today);
};

export const isOverdue = (dueDate: string | Date): boolean => {
  const today = startOfDay(new Date());
  const due = startOfDay(new Date(dueDate));
  return isBefore(due, today);
};