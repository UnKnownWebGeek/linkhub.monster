// src/pages/admin/links.tsx
import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

interface Link {
  id: number;
  name: string;
  url: string;
}

const LinksPage: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([
    { id: 1, name: 'Personal Website', url: 'https://example.com' },
    { id: 2, name: 'LinkedIn', url: 'https://linkedin.com/in/username' },
  ]);

  const [newLink, setNewLink] = useState<Link>({ id: 0, name: '', url: '' });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingLinkId, setEditingLinkId] = useState<number | null>(null);

  // Function to check if the URL is valid
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Add new link function with validation
  const addLink = () => {
    if (!newLink.name || !newLink.url) {
      alert('Please enter both a name and a URL.');
      return;
    }
    if (!isValidUrl(newLink.url)) {
      alert('Please enter a valid URL.');
      return;
    }
    setLinks([...links, { ...newLink, id: links.length + 1 }]);
    setNewLink({ id: 0, name: '', url: '' });
  };

  // Edit link function
  const editLink = (id: number) => {
    const linkToEdit = links.find(link => link.id === id);
    if (linkToEdit) {
      setNewLink({ name: linkToEdit.name, url: linkToEdit.url, id: linkToEdit.id });
      setIsEditing(true);
      setEditingLinkId(id);
    }
  };

  // Save edited link with validation
  const saveLink = () => {
    if (!newLink.name || !newLink.url) {
      alert('Please enter both a name and a URL.');
      return;
    }
    if (!isValidUrl(newLink.url)) {
      alert('Please enter a valid URL.');
      return;
    }
    if (editingLinkId !== null) {
      const updatedLinks = links.map(link =>
        link.id === editingLinkId ? { ...link, name: newLink.name, url: newLink.url } : link
      );
      setLinks(updatedLinks);
      setNewLink({ id: 0, name: '', url: '' });
      setIsEditing(false);
      setEditingLinkId(null);
    }
  };

  // Delete link function
  const deleteLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <AdminLayout>
      <h1>Manage Links</h1>

      {/* Add/Edit Link Form */}
      <div>
        <h2>{isEditing ? 'Edit Link' : 'Add New Link'}</h2>
        <input
          type="text"
          placeholder="Link Name"
          value={newLink.name}
          onChange={(e) => setNewLink({ ...newLink, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link URL"
          value={newLink.url}
          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
        />
        {isEditing ? (
          <button onClick={saveLink}>Save Link</button>
        ) : (
          <button onClick={addLink}>Add Link</button>
        )}
      </div>

      {/* Display Existing Links */}
      <div>
        <h2>Existing Links</h2>
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              <button onClick={() => editLink(link.id)}>Edit</button>
              <button onClick={() => deleteLink(link.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default LinksPage;
