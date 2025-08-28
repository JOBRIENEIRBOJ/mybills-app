import { AddBillForm } from './components/AddBillForm';
import { BillList } from './components/BillList';
import { useBills } from './hooks/useBills';
import './App.css';

function App() {
  const {
    bills,
    addBill,
    updateBill,
    deleteBill,
    togglePaid,
    getBillStatus,
    getDaysUntilDue,
  } = useBills();

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>MyBills</h1>
          <p>......ugh!</p>
        </div>
      </header>

      <main className="app-main">
        <AddBillForm onAddBill={addBill} />
        
        <BillList
          bills={bills}
          onTogglePaid={togglePaid}
          onEdit={updateBill}
          onDelete={deleteBill}
          getBillStatus={getBillStatus}
          getDaysUntilDue={getDaysUntilDue}
        />
      </main>
    </div>
  );
}

export default App;
