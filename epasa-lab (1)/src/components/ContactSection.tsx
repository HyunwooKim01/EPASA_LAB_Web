import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { LabData } from '../types/lab';

export default function ContactSection({ data }: { data: LabData }) {
  return (
    <section id="contact" className="section-padding bg-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-white/70 mb-10 text-lg">
              We are always looking for talented researchers and collaborators. 
              Feel free to reach out to us.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-white/70">{data.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-white/70">{data.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-white/70">{data.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[400px] shadow-2xl">
            <iframe 
              title="Lab Location Map"
              src={data.contact.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
