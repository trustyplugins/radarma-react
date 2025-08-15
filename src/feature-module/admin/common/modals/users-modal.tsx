import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import supabase from '../../../../supabaseClient';
import { useSession } from '../../SessionContext';
interface UsersModalProps {
  show: boolean;              // open/close modal
  onClose: () => void;        // close modal function
  onSave: () => void;         // refresh user list
  editingUser?: any | null;   // user data when editing
}

const UsersModal: React.FC<UsersModalProps> = ({ show, onClose, onSave, editingUser }) => {
    const { session } = useSession();
  const isEdit = Boolean(editingUser);

  const roleOptions = [
    { label: 'Super Admin', value: 'A1' },
    { label: 'Admin', value: 'A2' }
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('A2');
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);

  // Prefill form when editing
  useEffect(() => {
    if (isEdit && editingUser) {
      setName(editingUser.name || '');
      setEmail(editingUser.email || '');
      setMobile(editingUser.mobile || '');
      setRole(editingUser.role || 'A2');
      setStatus(editingUser.status === 'Active');
    } else {
      setName('');
      setEmail('');
      setMobile('');
      setRole('A2');
      setStatus(true);
    }
  }, [editingUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        // Update existing
        const { error } = await supabase
          .from('rd_users')
          .update({
            name,
            email,
            mobile,
            role,
            status: status ? 1 : 0,
            updated_at: new Date()
          })
          .eq('id', editingUser.id);

        if (error) throw error;
      } else {
        // Add new
        const { error } = await supabase
          .from('rd_users')
          .insert([{
            name,
            email,
            mobile,
            role,
            status: status ? 1 : 0,
          }]);

        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (err: any) {
      console.error('Error saving user:', err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          
          <div className="modal-header">
            <h5 className="modal-title">{isEdit ? 'Edit User' : 'Add User'}</h5>
            <button type="button" className="btn-close" onClick={onClose}>
              
            </button>
          </div>

          <div className="modal-body pt-0">
            <form onSubmit={handleSubmit}>
              
              {/* Profile Image (Optional) */}
              <div className="profile-upload mb-3">
                <div className="profile-upload-img">
                  <ImageWithBasePath
                    src="assets/admin/img/customer/user-01.jpg"
                    alt="img"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Role</label>
                <Dropdown value={role} onChange={(e) => setRole(e.value)} options={roleOptions} optionLabel="label" placeholder="Select Role" className="select w-100" />
              </div>

              <div className="form-groupheads d-flex justify-content-between mb-4">
                <h2>Status</h2>
                <div className="active-switch">
                  <label className="switch">
                    <input type="checkbox" checked={status} onChange={() => setStatus(!status)} />
                    <span className="sliders round" />
                  </label>
                </div>
              </div>

              <div className="text-end">
                <button type="button" className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UsersModal;
