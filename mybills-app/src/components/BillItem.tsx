import React, { useState } from 'react';
import { Edit2, Trash2, Check } from 'lucide-react';
import type { Bill, BillStatus } from '../types';
import { formatAmount, formatDate } from '../utils/dateUtils';
import './BillItem.css';

interface BillItemProps {
  bill: Bill;
  status: BillStatus;
  daysUntilDue: number;
  onTogglePaid: (id: string) => void;
  onEdit: (id: string, updates: Partial<Bill>) => void;
  onDelete: (id: string) => void;
}

export const BillItem: React.FC<BillItemProps> = ({
  bill,
  status,
  daysUntilDue,
  onTogglePaid,
  onEdit,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    label: bill.label,
    amount: bill.amount.toString(),
    dueDate: bill.dueDate,
  });

  const handleSaveEdit = () => {
    if (!editData.label.trim() || !editData.amount || !editData.dueDate) {
      return;
    }

    onEdit(bill.id, {
      label: editData.label.trim(),
      amount: parseFloat(editData.amount),
      dueDate: editData.dueDate,
    });
    
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditData({
      label: bill.label,
      amount: bill.amount.toString(),
      dueDate: bill.dueDate,
    });
    setIsEditing(false);
  };

  const getStatusText = () => {
    if (status === 'paid') return 'Paid';
    if (status === 'overdue') return `${Math.abs(daysUntilDue)} days overdue`;
    if (daysUntilDue === 0) return 'Due today';
    if (daysUntilDue <= 3) return `${daysUntilDue} days left`;
    return formatDate(bill.dueDate);
  };

  if (isEditing) {
    return (
      <div className={`bill-item ${status} editing`}>
        <div className="edit-form">
          <div className="edit-group">
            <input
              type="text"
              value={editData.label}
              onChange={(e) => setEditData(prev => ({ ...prev, label: e.target.value }))}
              placeholder="Bill name"
            />
          </div>
          <div className="edit-group">
            <input
              type="number"
              step="0.01"
              value={editData.amount}
              onChange={(e) => setEditData(prev => ({ ...prev, amount: e.target.value }))}
              placeholder="Amount"
            />
          </div>
          <div className="edit-group">
            <input
              type="date"
              value={editData.dueDate}
              onChange={(e) => setEditData(prev => ({ ...prev, dueDate: e.target.value }))}
            />
          </div>
          <div className="edit-actions">
            <button
              className="save-button"
              onClick={handleSaveEdit}
              type="button"
            >
              <Check size={16} />
            </button>
            <button
              className="cancel-button"
              onClick={handleCancelEdit}
              type="button"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bill-item ${status}`}>
      <div className="bill-checkbox-container">
        <button
          className={`bill-checkbox ${bill.paid ? 'checked' : ''}`}
          onClick={() => onTogglePaid(bill.id)}
          aria-label={bill.paid ? 'Mark as unpaid' : 'Mark as paid'}
        >
          {bill.paid && <Check size={16} />}
        </button>
      </div>
      
      <div className="bill-content">
        <div className="bill-header">
          <h3 className="bill-name">{bill.label}</h3>
          <div className="bill-amount">{formatAmount(bill.amount)}</div>
        </div>
        <div className="bill-details">
          <span className="bill-status">{getStatusText()}</span>
        </div>
      </div>

      <div className="bill-actions">
        <button
          className="edit-button"
          onClick={() => setIsEditing(true)}
          aria-label="Edit bill"
        >
          <Edit2 size={16} />
        </button>
        <button
          className="delete-button"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this bill?')) {
              onDelete(bill.id);
            }
          }}
          aria-label="Delete bill"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};