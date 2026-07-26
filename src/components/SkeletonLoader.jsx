import React from 'react';

export default function SkeletonLoader({ height = "h-64", className = "" }) {
  return (
    <div className={`glass-panel rounded-2xl p-6 border border-obsidian-border animate-pulse space-y-4 ${height} ${className}`}>
      <div className="h-6 bg-obsidian-border/50 rounded-lg w-1/3"></div>
      <div className="h-4 bg-obsidian-border/30 rounded-lg w-2/3"></div>
      <div className="space-y-2 pt-4">
        <div className="h-10 bg-obsidian-border/40 rounded-xl w-full"></div>
        <div className="h-10 bg-obsidian-border/40 rounded-xl w-full"></div>
      </div>
    </div>
  );
}
