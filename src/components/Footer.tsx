import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LabData } from '../types/lab';

export default function Footer({ data }: { data: LabData }) {
  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-xl font-bold text-navy mb-2">{data.labName}</h3>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-navy transition-colors"><Github size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-navy transition-colors"><Linkedin size={20} /></a>
          <a href={`mailto:${data.contact.email}`} aria-label="Email" className="text-slate-400 hover:text-navy transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
