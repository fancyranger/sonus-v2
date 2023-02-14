import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="grow h-screen px-12 overflow-x-hidden overflow-y-auto">
        <Header />

        <div className="py-2.5">{children}</div>
      </main>
    </div>
  );
}
