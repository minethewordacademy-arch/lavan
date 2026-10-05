"use client";
import { useState, type ChangeEvent } from "react";
import WatermarkImage from "@/components/WatermarkImage";
// ============================================================
// SECTION 1 — HERO (image at natural ratio, no crop, no deadspace)
// ============================================================
function Hero() {
  return (
    <section className="pt-36 md:pt-40 pb-16 md:pb-24 bg-linear-to-br from-navy to-navy-dark relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left — Copy */}
        <div className="z-10">
          <span className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-semibold mb-4">
            For Kenyans Abroad
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Managing a Solar Project in Kenya From Abroad
          </h1>
          <p className="text-white/90 text-lg mb-6 max-w-xl">
            Lavan represents your technical interests on the ground. We review
            designs and quotations, verify equipment, inspect installation work
            and document every major milestone from planning to handover.
          </p>
          <p className="text-white/70 text-sm mb-8 max-w-xl">
            For Kenyans abroad who are building, renovating or upgrading homes
            and other property in Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="#lead-form"
              data-event="project_review_cta_click"
              className="bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition text-center"
            >
              Request a Project Review
            </a>
            <a
              href="#quotation-upload"
              data-event="quotation_review_cta_click"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:border-gold hover:text-gold transition text-center"
            >
              Send Us Your Solar Quotation
            </a>
          </div>

          <p className="text-white/60 text-sm">
            Speak directly with an energy engineer in Kenya —{" "}
            <a
              href="https://wa.me/254100766486?text=Hello%20Lavan%2C%20I%27d%20like%20to%20speak%20about%20a%20solar%20project%20in%20Kenya."
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              className="text-gold hover:underline font-semibold"
            >
              WhatsApp Lavan
            </a>
          </p>
        </div>

        {/* Right — Image displayed at its NATURAL aspect ratio */}
        <div className="relative w-full">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <WatermarkImage
              src="/images/services/energy-engineering/solarpanel-engineering2.jpg"
              alt="Lavan engineer inspecting solar equipment at a residential project in Kenya"
              width={1200}
              height={800}
              watermarkSize={70}
              watermarkStyle="seal"
              className="block w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 2 — RECOGNITION
// ============================================================
function Recognition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
          Your Project Should Not Depend on Blind Trust
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Managing a technical project remotely creates a difficult gap. You may
          receive quotations, photographs and progress updates, but still have
          no independent way to confirm whether the system is correctly
          designed, whether the approved equipment was delivered or whether the
          installation is ready for payment and handover.
        </p>
        <p className="text-gray-700 text-lg">
          A relative or caretaker can confirm that work is happening. They may
          not be able to verify battery sizing, inverter compatibility,
          electrical protection, workmanship or commissioning results.{" "}
          <strong className="text-navy">
            Lavan closes that technical oversight gap and reports directly to
            you.
          </strong>
        </p>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 3 — OUTCOMES
// ============================================================
const outcomes = [
  {
    title: "A system matched to the property",
    desc: "We assess the actual loads, usage patterns, site conditions and future requirements before confirming the design.",
  },
  {
    title: "Clarity before committing funds",
    desc: "We review proposed equipment, sizing, warranties, exclusions and commercial risks before you approve the project.",
  },
  {
    title: "Verification at critical stages",
    desc: "We compare delivered equipment and completed work against the approved scope before major payment milestones.",
  },
  {
    title: "Progress you can see",
    desc: "You receive structured photographs, videos, observations and action items instead of informal updates.",
  },
  {
    title: "A properly tested system",
    desc: "We oversee testing, commissioning, monitoring access and final handover documentation.",
  },
];

function Outcomes() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            What You Gain
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-gold"
            >
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{o.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 4 — AUDIENCE
// ============================================================
const audienceItems = [
  "You are building or renovating property in Kenya while living abroad.",
  "You have received conflicting solar quotations and cannot tell which design is appropriate.",
  "A relative, caretaker, architect or contractor is coordinating work, but no one is independently verifying the energy system.",
  "You want confirmation before releasing a deposit, milestone payment or final balance.",
  "You need one accountable technical contact to coordinate solar PV, battery backup, water heating or pumping requirements.",
];

function Audience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            This Service Is Designed for You If
          </h2>
        </div>
        <ul className="space-y-4">
          {audienceItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-light-bg p-5 rounded-xl"
            >
              <span className="text-gold font-bold text-xl mt-0.5">•</span>
              <span className="text-navy">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 5 — SERVICES
// ============================================================
const services = [
  {
    id: "quotation-review",
    title: "Solar Proposal Review",
    desc: "Already have a quotation? We review the load assumptions, system sizing, equipment compatibility, warranties, exclusions and expected performance. You receive a written technical assessment and a consultation explaining what is suitable, unclear or risky.",
    cta: "Review My Solar Quotation",
    supportType: "Quotation review",
  },
  {
    id: "pre-installation",
    title: "Pre-Installation Advisory",
    desc: "We establish the energy requirement, inspect the site, prepare or review the system design, define the technical scope and help you compare proposed solutions before selecting a contractor or approving procurement.",
    cta: "Discuss My Project",
    supportType: "Design advisory",
  },
  {
    id: "owner-representation",
    title: "Owner Representation and Project Oversight",
    desc: "Lavan acts as your technical representative throughout the project. We verify equipment, attend critical installation stages, identify defects, review progress against the approved scope, oversee commissioning and provide documented reports directly to you.",
    cta: "Request Project Management",
    supportType: "Owner representation",
  },
  {
    id: "complete-delivery",
    title: "Complete Design and Delivery",
    desc: "Where you prefer a single accountable delivery partner, Lavan can design, supply, install, commission and support the complete energy system. This is offered separately from independent review and owner representation.",
    cta: "Request a Complete Proposal",
    supportType: "Complete design and delivery",
  },
];

function Services() {
  const handleCtaClick = (supportType: string) => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.dispatchEvent(
        new CustomEvent("setSupportType", { detail: supportType }),
      );
    }
  };

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Choose the Level of Support You Need
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-gold flex flex-col"
            >
              <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                {s.desc}
              </p>
              <button
                onClick={() => handleCtaClick(s.supportType)}
                className="text-gold font-bold hover:text-navy transition inline-flex items-center gap-2 self-start"
              >
                {s.cta} <span aria-hidden="true">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 6 — PROCESS
// ============================================================
const processStages = [
  {
    n: 1,
    stage: "Project brief",
    does: "Confirm the property, construction stage, energy needs, current quotations and decision timeline.",
    receives: "Consultation summary and recommended scope",
  },
  {
    n: 2,
    stage: "Technical review",
    does: "Assess the site information, design, sizing, equipment, warranties, exclusions and risks.",
    receives: "Written findings and actions required",
  },
  {
    n: 3,
    stage: "Scope confirmation",
    does: "Define deliverables, responsibilities, inspection points, reporting frequency and fees.",
    receives: "Signed engagement and project plan",
  },
  {
    n: 4,
    stage: "Equipment verification",
    does: "Check quantities, brands, models, ratings, condition and serial numbers against the approved scope.",
    receives: "Delivery verification report with evidence",
  },
  {
    n: 5,
    stage: "Installation inspections",
    does: "Inspect agreed milestones, record defects and follow up corrective actions.",
    receives: "Progress report, photographs and action register",
  },
  {
    n: 6,
    stage: "Commissioning",
    does: "Witness functional testing, protection checks, system configuration and monitoring setup.",
    receives: "Commissioning observations and snag list",
  },
  {
    n: 7,
    stage: "Handover",
    does: "Confirm closeout documents, warranties, access credentials and outstanding items.",
    receives: "Final handover report and document register",
  },
];

function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            How Remote Project Oversight Works
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="text-left p-4 font-bold">Stage</th>
                <th className="text-left p-4 font-bold">What Lavan Does</th>
                <th className="text-left p-4 font-bold">What You Receive</th>
              </tr>
            </thead>
            <tbody>
              {processStages.map((s, i) => (
                <tr
                  key={s.n}
                  className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}
                >
                  <td className="p-4 align-top">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-xs">
                        {s.n}
                      </span>
                      <span className="font-bold text-navy">{s.stage}</span>
                    </div>
                  </td>
                  <td className="p-4 align-top text-gray-700">{s.does}</td>
                  <td className="p-4 align-top text-gray-700">{s.receives}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4">
          {processStages.map((s) => (
            <div
              key={s.n}
              className="bg-light-bg p-5 rounded-2xl border-l-4 border-gold"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-xs">
                  {s.n}
                </span>
                <h3 className="font-bold text-navy">{s.stage}</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">
                <strong className="text-navy">Lavan:</strong> {s.does}
              </p>
              <p className="text-gray-700 text-sm">
                <strong className="text-navy">You receive:</strong> {s.receives}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 7 — DELIVERABLES
// ============================================================
const deliverables = [
  "Design and quotation review report.",
  "Approved technical scope and equipment schedule.",
  "Project inspection plan and reporting calendar.",
  "Equipment delivery record, including model and serial-number verification.",
  "Dated progress photographs and videos.",
  "Inspection reports and corrective-action register.",
  "Payment milestone recommendation based on verified progress.",
  "Testing and commissioning observations.",
  "Final snag list and closeout status.",
  "Warranty register, system manuals and monitoring-access record.",
  "Final technical handover report.",
];

function Deliverables() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Documented Evidence at Every Important Stage
          </h2>
          <p className="text-gray-600 mt-4">
            The exact deliverables depend on the agreed scope. A full
            owner-representation engagement may include:
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
            >
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span className="text-navy text-sm">{d}</span>
            </li>
          ))}
        </ul>

        <div className="bg-navy text-white p-6 rounded-2xl text-center">
          <p className="text-sm leading-relaxed text-white/90">
            Lavan verifies technical progress and provides documented
            recommendations. The client retains control of contractor
            appointment, contractual approvals and payments unless a separate
            written mandate states otherwise.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 8 — ROLE CLARITY
// ============================================================
function RoleClarity() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
          Clear Roles Protect the Client
        </h2>
        <p className="text-gray-700 text-lg">
          When Lavan reviews or supervises another contractor, we act as the
          client&apos;s technical representative. When Lavan is appointed to
          design and install the system, we act as the delivery contractor. The
          role, responsibilities and commercial arrangement are stated clearly
          before work begins.
        </p>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 9 — WHY LAVAN
// ============================================================
const reasons = [
  {
    title: "Independent technical thinking",
    desc: "Recommendations are tied to the property\u2019s requirements, not a predetermined package.",
  },
  {
    title: "Electrical and thermal coordination",
    desc: "Solar PV, batteries, water heating, heat pumps and pumping can be considered as one energy system.",
  },
  {
    title: "Structured reporting",
    desc: "Important decisions, observations and outstanding items are documented for the overseas client.",
  },
  {
    title: "End-to-end capability",
    desc: "Lavan can support a project from assessment and design through commissioning, monitoring and maintenance.",
  },
];

function WhyLavan() {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Engineering Judgment Before Equipment
          </h2>
          <p className="text-white/80 mt-4 max-w-3xl mx-auto">
            Lavan Solar Systems approaches each project from the energy
            requirement first. We assess how the property will use electricity
            and hot water, then determine the suitable solar PV, battery
            storage, backup and thermal-energy solution. This integrated
            approach helps prevent duplicated equipment, unrealistic
            expectations and avoidable redesign during construction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-gold font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 10 — QUOTATION ENTRY OFFER
// ============================================================
function QuotationOffer() {
  return (
    <section
      id="quotation-upload"
      className="py-20 bg-linear-to-br from-gold to-gold-light"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
          Already Received a Solar Quotation
        </h2>
        <p className="text-navy/80 text-lg mb-8">
          Before approving the design or paying a deposit, have the quotation
          reviewed independently. We will assess the proposed capacity,
          equipment compatibility, stated warranties, missing items and whether
          the solution reflects your property&apos;s actual energy requirements.
        </p>
        <a
          href="#lead-form"
          data-event="quotation_review_cta_click"
          className="inline-block bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-navy-dark transition"
        >
          Send Us Your Solar Quotation
        </a>
        <p className="text-navy/70 text-sm mt-4">
          PDF, Word, Excel and clear image files accepted. Sensitive project
          information is handled as confidential business information.
        </p>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 11 — FAQ ACCORDION
// ============================================================
const faqs = [
  {
    q: "Can Lavan review a quotation from another solar company?",
    a: "Yes. We can assess the proposed sizing, specifications, compatibility, warranties, exclusions and expected performance before you make a decision.",
  },
  {
    q: "Can you supervise a contractor I have already selected?",
    a: "Yes, subject to an agreed scope and access to the site, contractor documents and relevant project information. Inspection points should ideally be agreed before installation begins.",
  },
  {
    q: "Will you tell me when to release payment?",
    a: "We can verify technical progress against agreed milestones and issue a documented recommendation. You retain contractual and payment authority unless a separate written mandate provides otherwise.",
  },
  {
    q: "Can Lavan also supply and install the system?",
    a: "Yes. Design and delivery can be offered as a separate engagement. We will state clearly whether Lavan is acting as an independent reviewer, owner\u2019s representative or installation contractor.",
  },
  {
    q: "How will I receive updates?",
    a: "Reporting may include scheduled online meetings, written progress reports, dated photographs, videos, action registers and commissioning records, depending on the project scope.",
  },
  {
    q: "Can you manage solar water heating and heat pumps as well as solar PV?",
    a: "Yes. Lavan works across electrical and thermal energy systems, allowing related requirements to be coordinated during design and construction.",
  },
  {
    q: "Do you work throughout Kenya?",
    a: "Projects are assessed based on location, scope, access and schedule. Submit the project details and Lavan will confirm availability and any travel requirements.",
  },
  {
    q: "How much does the service cost?",
    a: "Fees depend on the project stage, location, value, number of inspections and required deliverables. After the initial consultation, you will receive a defined scope and fee proposal before work begins.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="bg-light-bg rounded-2xl overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1"
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                <span className="font-bold text-navy pr-4">{f.q}</span>
                <span
                  className={`text-gold text-2xl transition-transform ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  id={`faq-${i}`}
                  className="px-6 pb-5 text-gray-600 leading-relaxed"
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 12 — LEAD FORM
// ============================================================
const countryOptions = [
  "Kenya",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Germany",
  "Netherlands",
  "South Africa",
  "Other",
];
const projectTypes = [
  "New home",
  "Renovation",
  "Existing home",
  "Rental property",
  "Commercial or institutional",
  "Other",
];
const projectStages = [
  "Planning",
  "Quotations received",
  "Contractor selected",
  "Installation underway",
  "Installation complete",
];
const supportTypes = [
  "Quotation review",
  "Design advisory",
  "Owner representation",
  "Complete design and delivery",
  "Not sure",
];
const timelines = [
  "Within one month",
  "One to three months",
  "Three to six months",
  "More than six months",
];

function LeadForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "Kenya",
    projectLocation: "",
    projectType: "New home",
    projectStage: "Planning",
    supportRequired: "Quotation review",
    targetTimeline: "Within one month",
    projectDetails: "",
    consent: false,
  });

  if (typeof window !== "undefined") {
    window.addEventListener("setSupportType", (e: Event) => {
      const ce = e as CustomEvent;
      setForm((prev) => ({ ...prev, supportRequired: ce.detail }));
    });
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Diaspora Project Review Request — ${form.fullName}`;
    const body =
      `Full Name: ${form.fullName}%0A` +
      `Email: ${form.email}%0A` +
      `WhatsApp: ${form.whatsapp}%0A` +
      `Country: ${form.country}%0A` +
      `Project Location: ${form.projectLocation}%0A` +
      `Project Type: ${form.projectType}%0A` +
      `Project Stage: ${form.projectStage}%0A` +
      `Support Required: ${form.supportRequired}%0A` +
      `Timeline: ${form.targetTimeline}%0A%0A` +
      `Project Details:%0A${form.projectDetails}`;
    window.location.href = `mailto:info@lavansolar.co.ke?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="lead-form" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Make the Next Solar Decision With Clear Technical Information
          </h2>
          <p className="text-gray-600">
            Tell us where the project is located, what stage it has reached and
            what decision you need to make. Lavan will review the information
            and recommend the appropriate level of support.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Full Name *
                </label>
                <input
                  required
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  WhatsApp Number (with country code) *
                </label>
                <input
                  required
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                  placeholder="+1 555 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Country of Residence *
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                >
                  {countryOptions.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Project Location in Kenya (County &amp; Locality) *
                </label>
                <input
                  required
                  name="projectLocation"
                  value={form.projectLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                  placeholder="e.g. Kiambu, Ruiru"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                >
                  {projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Current Project Stage
                </label>
                <select
                  name="projectStage"
                  value={form.projectStage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                >
                  {projectStages.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1">
                  Support Required
                </label>
                <select
                  name="supportRequired"
                  value={form.supportRequired}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                >
                  {supportTypes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-1">
                Target Timeline
              </label>
              <select
                name="targetTimeline"
                value={form.targetTimeline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
              >
                {timelines.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-1">
                Project Details *
              </label>
              <textarea
                required
                name="projectDetails"
                value={form.projectDetails}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold focus:outline-none"
                placeholder="Tell us about the property, current status, quotations received, and what you need help with."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-1">
                Attach a Quotation (Optional)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-gold/20 file:text-navy file:font-semibold hover:file:bg-gold/40"
              />
              <p className="text-xs text-gray-500 mt-2">
                PDF, DOCX, XLSX, JPG, PNG.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <input
                required
                type="checkbox"
                id="consent"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1 w-5 h-5 accent-gold"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I consent to Lavan Solar Systems contacting me about this
                enquiry. I have read the{" "}
                <a href="/privacy-policy" className="text-gold hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-navy text-white py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-navy transition"
            >
              Request My Project Review
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Prefer WhatsApp?{" "}
            <a
              href="https://wa.me/254100766486?text=Hello%20Lavan%2C%20I%27d%20like%20to%20discuss%20a%20diaspora%20solar%20project."
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              className="text-gold font-semibold hover:underline"
            >
              Chat with us directly →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// STICKY MOBILE CTA
// ============================================================
function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-2xl flex">
      <a
        href="#lead-form"
        data-event="project_review_cta_click"
        className="flex-1 bg-gold text-navy font-bold py-4 text-center text-sm"
      >
        Request a Project Review
      </a>
      <a
        href="https://wa.me/254100766486?text=Hello%20Lavan%2C%20I%27d%20like%20to%20discuss%20a%20diaspora%20solar%20project."
        target="_blank"
        rel="noopener noreferrer"
        data-event="whatsapp_click"
        className="flex-1 bg-navy text-white font-bold py-4 text-center text-sm"
      >
        WhatsApp
      </a>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function DiasporaLanding() {
  return (
    <div className="pt-0 pb-20 md:pb-0">
      <Hero />
      <Recognition />
      <Outcomes />
      <Audience />
      <Services />
      <Process />
      <Deliverables />
      <RoleClarity />
      <WhyLavan />
      <QuotationOffer />
      <FAQ />
      <LeadForm />
      <StickyCTA />
    </div>
  );
}
