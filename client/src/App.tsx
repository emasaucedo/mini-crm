import { useState } from 'react';
import { Button } from './components/ui';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-10">
      <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <h1 className="mb-4 text-4xl font-semibold">Mini CRM frontend</h1>
        <p className="mb-6 text-slate-600">
          Tailwind CSS and a shadcn-style button are now configured.
        </p>

        <Button onClick={() => setCount((count) => count + 1)}>Clicked {count} times</Button>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="text-sm text-slate-500">Example shadcn button variant:</span>
          <Button variant="outline">Secondary action</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
