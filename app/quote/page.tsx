"use client";
import { useState, Suspense, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';

function QuoteForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    siteLocation: '',
    propertyType: 'Residential',
    systemType: preselectedService || 'General Inquiry',
    monthlyBill: '',
    appliances: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Lavan Solar! I'd like a quote:%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASite Location: ${form.siteLocation}%0AProperty: ${form.propertyType}%0AInterested In: ${form.systemType}%0AMonthly Bill: ${form.monthlyBill}%0AAppliances: ${form.appliances}%0A%0AMessage: ${form.message}`;
    window.open(`https://wa.me/254100766486?text=${text}`, '_blank');
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Quote Request for ${form.systemType} from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASite Location: ${form.siteLocation}%0AProperty: ${form.propertyType}%0AInterested In: ${form.systemType}%0AMonthly Bill: ${form.monthlyBill}%0AAppliances: ${form.appliances}%0A%0A${form.message}`;
    window.location.href = `mailto:info@lavansolar.co.ke?subject=${encodeURIComponent(subject)}&body=${body}`; // Updated email
  };

  return (
    <div className="pt-36 md:pt-40 pb-16 bg-light-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold font-semibold uppercase text-sm">Get Your Free Quote</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mt-2">Design Your Solar System</h1>
          <p className="text-gray-600 mt-4">
            {preselectedService ? `You are enquiring about: ${preselectedService.replace(/-/g, ' ')}` : 'Tell us about your property and energy needs.'}
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Full Name *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none" placeholder="Wesley Senda" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none" placeholder="wesley@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none" placeholder="+254 700 000 000" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Site Location</label>
                <input type="text" name="siteLocation" value={form.siteLocation} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none" placeholder="e.g. Karen, Nairobi" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Property Type</label>
                <select name="propertyType" value={form.propertyType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Agricultural</option>
                  <option>Institutional</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Product/System Type</label>
                <select name="systemType" value={form.systemType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none">
                  <option>Solar PV</option>
                  <option>Solar Water Heating</option>
                  <option>Borehole Solarization</option>
                  <option>Hybrid System</option>
                  <option>Power Backup</option>
                  <option>Energy Audit</option>
                  <option>Pressurized Solar Water Heater</option>
                  <option>Non-Pressurized Solar Water Heater</option>
                  <option>Heat Pump Water Heater</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Average Monthly Electricity Bill (KES)</label>
                <input type="text" name="monthlyBill" value={form.monthlyBill} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none" placeholder="e.g. 15,000" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">List Your Appliances</label>
                <input type="text" name="appliances" value={form.appliances} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none" placeholder="e.g. TV, fridge, lights, pump, etc." />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-navy mb-1">Additional Details</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none" placeholder="Tell us about your roof space, backup needs, or any other requirements..." />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={handleWhatsApp} type="submit" className="flex-1 bg-gold text-navy py-4 rounded-xl font-bold hover:bg-gold-light transition">Send via WhatsApp</button>
              <button onClick={handleEmail} type="submit" className="flex-1 bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy-dark transition">Send via Email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-navy text-2xl">Loading Quote Form...</div>}>
      <QuoteForm />
    </Suspense>
  );
}