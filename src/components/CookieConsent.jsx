import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function CookieConsent({ navigateTo }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('acl_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = (type) => {
    localStorage.setItem('acl_cookie_consent', type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 glass-panel rounded-2xl p-5 border border-obsidian-border shadow-2xl space-y-3">
      <div className="flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-wider font-mono">
        <ShieldCheck className="w-4 h-4 text-teal" /> UK GDPR Cookie Compliance
      </div>
      <p className="text-xs text-paper-subtle leading-relaxed">
        We use essential cookies to ensure our instant quote calculator and appointment booking scheduler function securely. View our <button onClick={() => navigateTo('cookies')} className="text-copper underline">Cookie Policy</button>.
      </p>
      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={() => handleAccept('all')}
          className="btn-primary text-xs py-2 px-4 flex-1 text-center justify-center font-bold"
        >
          Accept All
        </button>
        <button
          onClick={() => handleAccept('essential')}
          className="btn-secondary text-xs py-2 px-3 text-center justify-center"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
