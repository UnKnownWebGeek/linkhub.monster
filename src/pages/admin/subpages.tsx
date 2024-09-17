// src/pages/admin/subpages.tsx
import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

interface SubBioPage {
  id: number;
  name: string;
  description: string;
}

const ManageSubBioPages: React.FC = () => {
  const [subBioPages, setSubBioPages] = useState<SubBioPage[]>([
    { id: 1, name: 'About Me', description: 'This is the about me section.' },
    { id: 2, name: 'Projects', description: 'This is where I showcase my projects.' },
  ]);

  const [newSubBioPage, setNewSubBioPage] = useState<SubBioPage>({ id: 0, name: '', description: '' });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingPageId, setEditingPageId] = useState<number | null>(null);

  // Add new sub-bio page with validation
  const addSubBioPage = () => {
    if (!newSubBioPage.name || !newSubBioPage.description) {
      alert('Please enter both a name and a description.');
      return;
    }
    setSubBioPages([...subBioPages, { ...newSubBioPage, id: subBioPages.length + 1 }]);
    setNewSubBioPage({ id: 0, name: '', description: '' });
  };

  // Edit sub-bio page function
  const editSubBioPage = (id: number) => {
    const pageToEdit = subBioPages.find(page => page.id === id);
    if (pageToEdit) {
      setNewSubBioPage({ name: pageToEdit.name, description: pageToEdit.description, id: pageToEdit.id });
      setIsEditing(true);
      setEditingPageId(id);
    }
  };

  // Save edited sub-bio page with validation
  const saveSubBioPage = () => {
    if (!newSubBioPage.name || !newSubBioPage.description) {
      alert('Please enter both a name and a description.');
      return;
    }
    if (editingPageId !== null) {
      const updatedPages = subBioPages.map(page =>
        page.id === editingPageId ? { ...page, name: newSubBioPage.name, description: newSubBioPage.description } : page
      );
      setSubBioPages(updatedPages);
      setNewSubBioPage({ id: 0, name: '', description: '' });
      setIsEditing(false);
      setEditingPageId(null);
    }
  };

  // Delete sub-bio page function
  const deleteSubBioPage = (id: number) => {
    setSubBioPages(subBioPages.filter(page => page.id !== id));
  };

  return (
    <AdminLayout>
      <h1>Manage Sub-Bio Pages</h1>

      {/* Add/Edit Sub-Bio Page Form */}
      <div>
        <h2>{isEditing ? 'Edit Sub-Bio Page' : 'Add New Sub-Bio Page'}</h2>
        <input
          type="text"
          placeholder="Page Name"
          value={newSubBioPage.name}
          onChange={(e) => setNewSubBioPage({ ...newSubBioPage, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Page Description"
          value={newSubBioPage.description}
          onChange={(e) => setNewSubBioPage({ ...newSubBioPage, description: e.target.value })}
        />
        {isEditing ? (
          <button onClick={saveSubBioPage}>Save Page</button>
        ) : (
          <button onClick={addSubBioPage}>Add Page</button>
        )}
      </div>

      {/* Display Existing Sub-Bio Pages */}
      <div>
        <h2>Existing Sub-Bio Pages</h2>
        <ul>
          {subBioPages.map(page => (
            <li key={page.id}>
              <strong>{page.name}</strong>: {page.description}
              <button onClick={() => editSubBioPage(page.id)}>Edit</button>
              <button onClick={() => deleteSubBioPage(page.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default ManageSubBioPages;
