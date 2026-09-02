import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lavan Solar Systems',
  description: 'How Lavan Solar Systems collects, uses, and protects your data.',
  alternates: {
    canonical: 'https://lavansolar.co.ke/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-36 md:pt-40 pb-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-navy mb-8">Privacy Policy</h1>
        <div className="prose prose-navy max-w-none">
          <p className="text-gray-600 mb-6">Last updated: August 2026</p>

          <h2 className="text-2xl font-bold text-navy mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">Lavan Solar Systems Limited (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or contact us.</p>

          <h2 className="text-2xl font-bold text-navy mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 mb-4">We may collect information about you in a variety of ways. The information we may collect on the Website includes:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li><strong>Personal Data:</strong> Name, email address, phone number, and address when you fill out a form.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, such as pages visited, time spent on pages, and referring URLs.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>To provide, maintain, and improve our services.</li>
            <li>To respond to your comments, questions, and requests.</li>
            <li>To send you company updates and promotional materials.</li>
            <li>To monitor and analyze usage and trends.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4">4. Contact Information</h2>
          <p className="text-gray-600 mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="text-gray-600">
            Lavan Solar Systems Limited<br />
            Omega Business Park<br />
            P.O Box 61584-00200 Nairobi<br />
            Email: info@lavansolar.co.ke<br />
            Phone: +254 100 766 486
          </p>
        </div>
      </div>
    </div>
  );
}