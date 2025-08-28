import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './AddBillForm.css';

interface AddBillFormProps {
  onAddBill: (bill: { label: string; amount: number; dueDate: string }) => void;
}

export const AddBillForm: React.FC<AddBillFormProps> = ({ onAddBill }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    label: '',
    amount: '',
    dueDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.label.trim() || !formData.amount || !formData.dueDate) {
      return;
    }

    onAddBill({
      label: formData.label.trim(),
      amount: parseFloat(formData.amount),
      dueDate: formData.dueDate,
    });

    setFormData({ label: '', amount: '', dueDate: '' });
    setIsExpanded(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isExpanded) {
    return (
      <div className="add-bill-collapsed">
        <button
          className="add-bill-trigger"
          onClick={() => setIsExpanded(true)}
          type="button"
        >
          <Plus size={20} />
          Add New Bill
        </button>
      </div>
    );
  }

  return (
    <div className="add-bill-form">
      <div className="form-header">
        <h2>Add New Bill</h2>
        <button
          className="close-button"
          onClick={() => setIsExpanded(false)}
          type="button"
        >
          ×
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bill-label">Bill Name</label>
          <input
            id="bill-label"
            type="text"
            placeholder="e.g., Electricity, Rent, Netflix"
            value={formData.label}
            onChange={(e) => handleInputChange('label', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bill-amount">Amount</label>
          <input
            id="bill-amount"
            type="number"
            step="0.01"
            min="0"
            placeholder="0.00"
            value={formData.amount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bill-due-date">Due Date</label>
          <input
            id="bill-due-date"
            type="date"
            value={formData.dueDate}
            onChange={(e) => handleInputChange('dueDate', e.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={() => setIsExpanded(false)}
          >
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Add Bill
          </button>
        </div>
      </form>
    </div>
  );
};