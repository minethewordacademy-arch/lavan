"use client";
import { useState, type ChangeEvent } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Lavan Solar Systems! My name is ${form.name}.%0A%0AEmail: ${form.email}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/254100766486?text=${text}`, '_blank');
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website Inquiry from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.location.href = `mailto:lavansolar@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="pt-36 md:pt-40 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold uppercase text-sm">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mt-2">Let’s Talk Solar</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Fill out the form below and we&apos;ll get back to you within 24 hours. Prefer instant? Use WhatsApp or email directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="bg-navy text-white p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl">📞</span>
                <div>
                  <p className="text-sm text-white/60">Phone / WhatsApp</p>
                  <a href="https://wa.me/254100766486" target="_blank" className="font-bold text-white hover:text-gold">+254 100 766 486</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl">✉️</span>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <a href="mailto:lavansolar@gmail.com" className="font-bold text-white hover:text-gold">info@lavansolar.co.ke</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl">📍</span>
                <div>
                  <p className="text-sm text-white/60">Office</p>
                  <p className="font-bold">Omega Business Park, P.O Box 61584-00200 Nairobi</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold text-2xl">🕒</span>
                <div>
                  <p className="text-sm text-white/60">Working Hours</p>
                  <p className="font-bold">Sun – Fri: 8:00 AM – 5:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Omega+Business+Park+Nairobi&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-light-bg p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                  placeholder="Therniah Wairimu"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                  placeholder="therniah@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                  placeholder="+254 700 000 000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                  placeholder="I'd like a quote for .."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={handleEmail}
                  type="submit"
                  className="bg-navy text-white py-3 rounded-xl font-bold hover:bg-navy-dark transition"
                >
                  Send via Email
                </button>
                <button
                  onClick={handleWhatsApp}
                  type="submit"
                  className="bg-gold text-navy py-3 rounded-xl font-bold hover:bg-gold-light transition"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}