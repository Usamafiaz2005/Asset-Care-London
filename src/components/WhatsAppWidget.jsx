import React, { useState } from 'react';
import { MessageSquare, X, Send, Image, Flame, Sun, AlertTriangle, Wind, Wrench } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/constants';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('General Advice');

  const presetTopics = [
    { 
      id: 'boiler', 
      label: 'Boiler Quote / Repair', 
      icon: Flame,
      defaultText: "Hi Asset Care London, I'm looking for a fixed quote or repair advice for my boiler in South Essex." 
    },
    { 
      id: 'solar', 
      label: 'Solar & Battery 0% VAT', 
      icon: Sun,
      defaultText: "Hi Asset Care London, I'd like an estimate for Solar PV panels & home battery storage for my property." 
    },
    { 
      id: 'aircon', 
      label: 'Air Conditioning Cooling', 
      icon: Wind,
      defaultText: "Hi Asset Care London, I am looking for a quote on installing air conditioning split units." 
    },
    { 
      id: 'emergency', 
      label: 'Emergency Plumbing Leak', 
      icon: AlertTriangle,
      defaultText: "URGENT: Hi Asset Care London, I have an urgent plumbing/heating leak at my property and need advice." 
    }
  ];

  const handleSelectPreset = (preset) => {
    setSelectedTopic(preset.label);
    setUserMsg(preset.defaultText);
  };

  const defaultMsg = "Hi Asset Care London, I'm looking for advice regarding my property in South Essex...";
  const finalMsg = userMsg || defaultMsg;
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(finalMsg)}`;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Expanded Interactive Chat Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 glass-panel rounded-3xl p-5 border border-teal/40 shadow-2xl space-y-4 bg-obsidian-dark/95 animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex justify-between items-center border-b border-obsidian-border pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-teal animate-pulse"></div>
              <div>
                <span className="text-xs font-mono font-bold text-paper block">WhatsApp Dispatch Desk</span>
                <span className="text-[10px] text-teal font-mono block">Average response: &lt; 15 Mins</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-paper-muted hover:text-paper p-1 rounded-lg transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Inquiry Presets */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono text-paper-muted uppercase tracking-wider block">Select Inquiry Topic:</span>
            <div className="grid grid-cols-2 gap-1.5">
              {presetTopics.map((pt) => {
                const IconComp = pt.icon;
                return (
                  <button
                    type="button"
                    key={pt.id}
                    onClick={() => handleSelectPreset(pt)}
                    className={`p-2 rounded-xl text-left text-[11px] font-mono transition-all flex items-center gap-1.5 border ${
                      selectedTopic === pt.label
                        ? 'bg-teal/20 border-teal text-teal font-bold'
                        : 'bg-obsidian-card border-obsidian-border text-paper-subtle hover:border-teal/40'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{pt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photo Quote Callout */}
          <div className="p-3 rounded-xl bg-obsidian-card border border-obsidian-border text-xs text-paper-subtle space-y-1 flex items-start gap-2">
            <Image className="w-4 h-4 text-copper shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-copper font-mono text-[11px] block">Fast Photo Quote:</span>
              <span className="text-[11px] text-paper-muted leading-tight block">Snap a photo of your current boiler or job location on WhatsApp for a fast assessment.</span>
            </div>
          </div>

          {/* Message Input Box */}
          <textarea
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            placeholder={defaultMsg}
            className="w-full text-xs p-3 rounded-xl bg-obsidian-dark border border-obsidian-border text-paper placeholder-paper-muted focus:outline-none focus:border-teal resize-none h-20 font-sans"
          ></textarea>

          {/* WhatsApp Direct Dispatch Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full btn-primary bg-teal hover:bg-teal-light text-obsidian font-bold py-3 text-xs rounded-xl justify-center flex items-center gap-2 shadow-lg"
          >
            <Send className="w-4 h-4" /> Start WhatsApp Chat ({COMPANY_DETAILS.phone})
          </a>
        </div>
      )}

      {/* Floating Widget Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal hover:bg-teal-light text-obsidian font-extrabold px-4.5 py-3 rounded-full shadow-[0_0_25px_rgba(62,124,122,0.6)] flex items-center gap-2.5 text-xs transition-all hover:scale-105"
        aria-label="Open WhatsApp Instant Chat"
      >
        <MessageSquare className="w-4 h-4 fill-obsidian" />
        <span className="font-mono">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
