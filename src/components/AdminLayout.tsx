import Link from 'next/link';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/admin">Dashboard</Link></li>
            <li><Link href="/admin/links">Manage Links</Link></li>
            <li><Link href="/admin/subpages">Manage Sub-Bio Pages</Link></li>
            <li><Link href="/admin/donations">Donations</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
