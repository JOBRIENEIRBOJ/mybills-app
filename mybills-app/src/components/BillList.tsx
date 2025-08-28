import React from 'react';
import { FileText } from 'lucide-react';
import type { Bill } from '../types';
import { BillItem } from './BillItem';
import './BillList.css';

interface BillListProps {
  bills: Bill[];
  onTogglePaid: (id: string) => void;
  onEdit: (id: string, updates: Partial<Bill>) => void;
  onDelete: (id: string) => void;
  getBillStatus: (bill: Bill) => 'upcoming' | 'paid' | 'overdue';
  getDaysUntilDue: (dueDate: string) => number;
}

export const BillList: React.FC<BillListProps> = ({
  bills,
  onTogglePaid,
  onEdit,
  onDelete,
  getBillStatus,
  getDaysUntilDue,
}) => {
  if (bills.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <FileText size={48} />
        </div>
        <h3>No bills yet</h3>
        <p>Add your first bill to start tracking your expenses</p>
      </div>
    );
  }

  return (
    <div className="bill-list">
      {bills.map((bill) => (
        <BillItem
          key={bill.id}
          bill={bill}
          status={getBillStatus(bill)}
          daysUntilDue={getDaysUntilDue(bill.dueDate)}
          onTogglePaid={onTogglePaid}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};