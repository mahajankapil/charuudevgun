import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addSupabaseLog, setSessionUser } from '../store';
import { Database, Terminal, Shield, List, X, Loader2, Play } from 'lucide-react';

interface SupabaseConsoleProps {
  onTriggerSkeletons: () => void;
}

export default function SupabaseConsole({ onTriggerSkeletons }: SupabaseConsoleProps) {
  const dispatch = useDispatch();
  const logs = useSelector((state: RootState) => state.db.logs);
  const isOpen = useSelector((state: RootState) => state.db.isConsoleOpen);
  const sessionUser = useSelector((state: RootState) => state.db.sessionUser);
  const inquiries = useSelector((state: RootState) => state.app.inquiries);
  const subscribers = useSelector((state: RootState) => state.app.subscribedEmails);

  const [activeTab, setActiveTab] = React.useState<'tables' | 'logs' | 'auth'>('tables');
  const [authEmail, setAuthEmail] = React.useState('kapilmahajan3003@gmail.com');
  const [authName, setAuthName] = React.useState('Kapil Mahajan');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail) return;
    dispatch(setSessionUser({ email: authEmail, name: authName || 'User' }));
    dispatch(addSupabaseLog({
      action: 'AUTH_SIGNIN',
      type: 'auth',
      details: `User '${authEmail}' signed in successfully. Session JWT token verified with public key.`,
    }));
  };

  const handleLogout = () => {
    dispatch(setSessionUser(null));
    dispatch(addSupabaseLog({
      action: 'AUTH_SIGNOUT',
      type: 'auth',
      details: 'Active session user logged out. Destroyed local cookies.',
    }));
  };

  const triggerSkeletonsWithLog = () => {
    dispatch(addSupabaseLog({
      action: 'LATENCY_SIMULATION',
      type: 'select',
      details: 'Invoked network latency test. Hydrating component states with shimmer skeleton screens.',
    }));
    onTriggerSkeletons();
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* <button
          id="open-supabase-console"
          onClick={() => dispatch({ type: 'db/toggleConsole' })}
          className="bg-luxury-charcoal hover:bg-black text-luxury-white border border-luxury-gold/40 hover:border-luxury-gold px-5 py-3 rounded-full flex items-center gap-2 shadow-2xl text-xs font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <Database className="h-4 w-4 text-luxury-gold animate-pulse" />
          
        </button> */}
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-luxury-charcoal text-gray-200 border-t border-luxury-gold/50 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] font-mono text-xs">
      {/* Console Top Header bar */}
      <div className="bg-neutral-900 px-6 py-3 flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <Database className="h-4 w-4 text-luxury-gold" />
          <span className="font-sans font-bold tracking-wider text-xs text-luxury-white">
            SUPABASE POSTGRES LIVE DB &amp; AUTH MONITOR
          </span>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 text-[9px] rounded-full uppercase tracking-widest font-sans font-semibold">
            ● Connected
          </span>
        </div>

        <div className="flex items-center gap-4 font-sans">
          {/* Skeleton Loader trigger */}
          <button
            onClick={triggerSkeletonsWithLog}
            className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-charcoal font-semibold text-[10px] tracking-wider px-3 py-1.5 uppercase transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Loader2 className="h-3 w-3 animate-spin" />
            Simulate Skeletons
          </button>

          <button
            onClick={() => dispatch({ type: 'db/toggleConsole' })}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 h-64 overflow-hidden">
        {/* Navigation Sidebar */}
        <div className="md:col-span-3 bg-neutral-900/60 border-r border-neutral-800 p-4 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab('tables')}
            className={`w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-2 font-sans ${activeTab === 'tables' ? 'bg-luxury-gold/15 text-luxury-gold font-semibold' : 'hover:bg-neutral-800 text-gray-400'}`}
          >
            <List className="h-4 w-4" />
            <span>Public Tables ({inquiries.length + subscribers.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-2 font-sans ${activeTab === 'logs' ? 'bg-luxury-gold/15 text-luxury-gold font-semibold' : 'hover:bg-neutral-800 text-gray-400'}`}
          >
            <Terminal className="h-4 w-4" />
            <span>Server Query Logs ({logs.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('auth')}
            className={`w-full text-left px-4 py-2 rounded transition-colors flex items-center gap-2 font-sans ${activeTab === 'auth' ? 'bg-luxury-gold/15 text-luxury-gold font-semibold' : 'hover:bg-neutral-800 text-gray-400'}`}
          >
            <Shield className="h-4 w-4" />
            <span>User Authentication</span>
          </button>

          <div className="mt-auto border-t border-neutral-800/80 pt-4 font-sans text-[10px] text-gray-500 space-y-1">
            <p>Database ID: <span className="text-gray-400">db_charu_wellness</span></p>
            <p>Region: <span className="text-gray-400">asia-east1</span></p>
            <p>Framework: <span className="text-gray-400">Express + Vite + Redux</span></p>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="md:col-span-9 bg-neutral-950 p-6 overflow-y-auto">
          {activeTab === 'tables' && (
            <div className="space-y-6">
              {/* public.inquiries */}
              <div>
                <h4 className="text-luxury-gold uppercase font-bold tracking-wider mb-2 font-sans">
                  Table: public.inquiries ({inquiries.length} rows)
                </h4>
                <table className="w-full text-left border-collapse border border-neutral-800">
                  <thead>
                    <tr className="bg-neutral-900 border-b border-neutral-800 text-[10px] uppercase text-gray-400">
                      <th className="p-2 border border-neutral-800">Full Name</th>
                      <th className="p-2 border border-neutral-800">Email</th>
                      <th className="p-2 border border-neutral-800">Country</th>
                      <th className="p-2 border border-neutral-800">Service Interest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map((inq, i) => (
                      <tr key={i} className="border-b border-neutral-900 hover:bg-neutral-900/50">
                        <td className="p-2 border border-neutral-800 text-white font-sans">{inq.fullName}</td>
                        <td className="p-2 border border-neutral-800 text-neutral-400">{inq.emailAddress}</td>
                        <td className="p-2 border border-neutral-800 font-sans text-neutral-400">{inq.country}</td>
                        <td className="p-2 border border-neutral-800 text-luxury-gold-light">{inq.serviceInterest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* public.newsletter */}
              <div>
                <h4 className="text-luxury-gold uppercase font-bold tracking-wider mb-2 font-sans">
                  Table: public.newsletter_subscribers ({subscribers.length} rows)
                </h4>
                <div className="bg-neutral-900/50 p-3 border border-neutral-800 flex flex-wrap gap-2">
                  {subscribers.map((email, idx) => (
                    <span key={idx} className="bg-neutral-800 border border-neutral-700 px-3 py-1 rounded-sm text-neutral-300">
                      {email}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="space-y-2 h-full font-mono text-[11px]">
              <div className="flex items-center justify-between text-[10px] uppercase text-gray-500 pb-2 border-b border-neutral-900">
                <span>Timestamp</span>
                <span>Action</span>
                <span>Type</span>
                <span>Details</span>
              </div>
              <div className="space-y-2.5">
                {logs.map((log) => (
                  <div key={log.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 border-b border-neutral-900/40 pb-1.5">
                    <span className="text-gray-500 font-sans">{log.timestamp}</span>
                    <span className="bg-neutral-900 text-luxury-gold px-1.5 py-0.5 font-bold uppercase tracking-wider text-[9px] rounded-sm min-w-[100px] text-center">
                      {log.action}
                    </span>
                    <span className={`text-[10px] font-bold ${log.type === 'error' ? 'text-red-400' : log.type === 'insert' ? 'text-emerald-400' : 'text-sky-400'}`}>
                      {log.type.toUpperCase()}
                    </span>
                    <span className="text-gray-300 font-sans">{log.details}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'auth' && (
            <div className="space-y-4 max-w-md">
              <h4 className="text-luxury-gold uppercase font-bold tracking-wider font-sans">
                Supabase User Authentication State
              </h4>

              {sessionUser ? (
                <div className="bg-neutral-900 p-4 border border-neutral-800 space-y-3 font-sans">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Authenticated Session</span>
                    <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold border border-emerald-500/20">
                      ACTIVE JWT
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">{sessionUser.name}</p>
                    <p className="text-xs text-neutral-400">{sessionUser.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer"
                  >
                    Logout session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLogin} className="space-y-3 font-sans">
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    Simulate logging into the website. Authenticating creates a secure session state that validates all Consultation and Breathwork bookings against the Supabase database.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      className="bg-neutral-900 border border-neutral-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-luxury-gold"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      className="bg-neutral-900 border border-neutral-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-luxury-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-charcoal font-bold text-[10px] tracking-wider px-4 py-2 uppercase transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="h-3 w-3 fill-current" />
                    Sign in with Supabase Auth
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
