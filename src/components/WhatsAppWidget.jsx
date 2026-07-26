import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const defaultMsg = "Hi Asset Care London, I'm looking for advice regarding my property in South Essex...";
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(userMsg || defaultMsg)}`;

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* Expanded Popup Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 glass-panel rounded-2xl p-4 border border-teal/40 shadow-2xl space-y-3 bg-obsidian-dark/95 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex justify-between items-center border-b border-obsidian-border pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse"></div>
              <span className="text-xs font-mono font-bold text-paper">WhatsApp Engineer Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-paper-muted hover:text-paper p-1 rounded-lg"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-paper-subtle leading-relaxed bg-obsidian-card p-3 rounded-xl border border-obsidian-border">
            <p className="font-semibold text-teal mb-1">Basildon Dispatch Team</p>
            <p>Send us a message or photo of your current boiler, AC, or solar setup for an instant advice response.</p>
          </div>

          <textarea
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            placeholder={defaultMsg}
            className="w-full text-xs p-3 rounded-xl bg-obsidian-dark border border-obsidian-border text-paper placeholder-paper-muted focus:outline-none focus:border-teal resize-none h-20 font-sans"
          ></textarea>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full btn-primary bg-teal hover:bg-teal-light text-obsidian font-bold py-2.5 text-xs rounded-xl justify-center flex items-center gap-2 shadow-lg"
          >
            <Send className="w-3.5 h-3.5" /> Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal hover:bg-teal-light text-obsidian font-extrabold px-4 py-3 rounded-full shadow-[0_0_20px_rgba(62,124,122,0.5)] flex items-center gap-2.5 text-xs transition-all hover:scale-105"
        aria-label="Open WhatsApp Chat"
      >
        <MessageSquare className="w-4 h-4 fill-obsidian" />
        <span className="font-mono">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
