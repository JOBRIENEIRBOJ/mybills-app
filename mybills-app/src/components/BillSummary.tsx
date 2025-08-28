import React from 'react';
import { DollarSign, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import type { BillSummary as BillSummaryType } from '../types';
import { formatAmount } from '../utils/dateUtils';
import './BillSummary.css';

interface BillSummaryProps {
  summary: BillSummaryType;
}

export const BillSummary: React.FC<BillSummaryProps> = ({ summary }) => {
  return (
    <div className="bill-summary">
      <div className="summary-grid">
        <div className="summary-card total">
          <div className="summary-icon">
            <Calendar size={24} />
          </div>
          <div className="summary-content">
            <div className="summary-value">{summary.total}</div>
            <div className="summary-label">Total Bills</div>
          </div>
        </div>

        <div className="summary-card paid">
          <div className="summary-icon">
            <CheckCircle size={24} />
          </div>
          <div className="summary-content">
            <div className="summary-value">{summary.paid}</div>
            <div className="summary-label">Paid</div>
            <div className="summary-amount">{formatAmount(summary.paidAmount)}</div>
          </div>
        </div>

        <div className="summary-card overdue">
          <div className="summary-icon">
            <AlertCircle size={24} />
          </div>
          <div className="summary-content">
            <div className="summary-value">{summary.overdue}</div>
            <div className="summary-label">Overdue</div>
            <div className="summary-amount">{formatAmount(summary.overdueAmount)}</div>
          </div>
        </div>

        <div className="summary-card total-amount">
          <div className="summary-icon">
            <DollarSign size={24} />
          </div>
          <div className="summary-content">
            <div className="summary-value">{formatAmount(summary.totalAmount)}</div>
            <div className="summary-label">Total Amount</div>
          </div>
        </div>
      </div>
    </div>
  );
};