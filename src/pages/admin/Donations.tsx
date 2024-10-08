// src/pages/admin/donations.tsx
import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

interface DonationMethod {
  id: number;
  name: string;
  details: string;
}

const DonationsPage: React.FC = () => {
  const [donationMethods, setDonationMethods] = useState<DonationMethod[]>([
    { id: 1, name: 'PayPal', details: 'paypal.me/username' },
    { id: 2, name: 'Venmo', details: '@username' },
  ]);

  const [newDonationMethod, setNewDonationMethod] = useState<DonationMethod>({ id: 0, name: '', details: '' });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingDonationId, setEditingDonationId] = useState<number | null>(null);

  // Add new donation method with validation
  const addDonationMethod = () => {
    if (!newDonationMethod.name || !newDonationMethod.details) {
      alert('Please enter both a name and details for the donation method.');
      return;
    }
    setDonationMethods([...donationMethods, { ...newDonationMethod, id: donationMethods.length + 1 }]);
    setNewDonationMethod({ id: 0, name: '', details: '' });
  };

  // Edit donation method function
  const editDonationMethod = (id: number) => {
    const methodToEdit = donationMethods.find(method => method.id === id);
    if (methodToEdit) {
      setNewDonationMethod({ name: methodToEdit.name, details: methodToEdit.details, id: methodToEdit.id });
      setIsEditing(true);
      setEditingDonationId(id);
    }
  };

  // Save edited donation method with validation
  const saveDonationMethod = () => {
    if (!newDonationMethod.name || !newDonationMethod.details) {
      alert('Please enter both a name and details.');
      return;
    }
    if (editingDonationId !== null) {
      const updatedMethods = donationMethods.map(method =>
        method.id === editingDonationId ? { ...method, name: newDonationMethod.name, details: newDonationMethod.details } : method
      );
      setDonationMethods(updatedMethods);
      setNewDonationMethod({ id: 0, name: '', details: '' });
      setIsEditing(false);
      setEditingDonationId(null);
    }
  };

  // Delete donation method function
  const deleteDonationMethod = (id: number) => {
    setDonationMethods(donationMethods.filter(method => method.id !== id));
  };

  return (
    <AdminLayout>
      <h1>Manage Donation Methods</h1>

      {/* Add/Edit Donation Method Form */}
      <div>
        <h2>{isEditing ? 'Edit Donation Method' : 'Add New Donation Method'}</h2>
        <input
          type="text"
          placeholder="Method Name"
          value={newDonationMethod.name}
          onChange={(e) => setNewDonationMethod({ ...newDonationMethod, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Details"
          value={newDonationMethod.details}
          onChange={(e) => setNewDonationMethod({ ...newDonationMethod, details: e.target.value })}
        />
        {isEditing ? (
          <button onClick={saveDonationMethod}>Save Donation Method</button>
        ) : (
          <button onClick={addDonationMethod}>Add Donation Method</button>
        )}
      </div>

      {/* Display Existing Donation Methods */}
      <div>
        <h2>Existing Donation Methods</h2>
        <ul>
          {donationMethods.map(method => (
            <li key={method.id}>
              <strong>{method.name}</strong>: {method.details}
              <button onClick={() => editDonationMethod(method.id)}>Edit</button>
              <button onClick={() => deleteDonationMethod(method.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default DonationsPage;
