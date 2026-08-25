"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function ThermalAccordion() {
  const [openSection, setOpenSection] = useState<string | null>('solar-work');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      {/* Solar Water Heaters */}
      <div className="bg-light-bg rounded-3xl p-8 md:p-12 mb-10 shadow-lg border-b-4 border-gold">
        <h2 className="text-3xl font-extrabold text-navy mb-6">Solar Water Heaters</h2>
        <p className="text-gray-700 text-lg mb-8">
          Harnessing the power of the sun, solar heaters use solar energy to heat water. Our solar water heaters are designed to be efficient, durable, and low maintenance, making them an ideal choice for residential and commercial applications.
        </p>

        {/* How They Work Accordion */}
        <button onClick={() => toggleSection('solar-work')} className="w-full text-left border-b border-gray-300 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-navy">How They Work</span>
          <span className="text-gold text-2xl">{openSection === 'solar-work' ? '−' : '+'}</span>
        </button>
        {openSection === 'solar-work' && (
          <div className="py-6">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Collection of Solar Energy:</strong> Collector panels absorb solar energy which is used to heat water. These collectors are usually flat-plate solar panels or evacuated tubes designed to capture maximum heat.</li>
              <li><strong>Heat Transfer Fluid Circulation:</strong> A heat transfer fluid (either water or an antifreeze solution) circulates through the collector panels, absorbing the solar heat.</li>
              <li><strong>Heating the Water:</strong> The heated fluid then passes through a heat exchanger in the storage tank, transferring the absorbed heat to the water.</li>
              <li><strong>Storage:</strong> The hot water is stored in an insulated tank preventing heat loss, keeping the water hot.</li>
            </ul>
          </div>
        )}

        {/* Key Benefits Accordion */}
        <button onClick={() => toggleSection('solar-benefits')} className="w-full text-left border-b border-gray-300 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-navy">Key Benefits</span>
          <span className="text-gold text-2xl">{openSection === 'solar-benefits' ? '−' : '+'}</span>
        </button>
        {openSection === 'solar-benefits' && (
          <div className="py-6">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Reduced Energy Bills:</strong> Enjoy substantial long-term savings on electricity bills.</li>
              <li><strong>Environmental Sustainability:</strong> Solar water heaters rely on solar energy which is a renewable source of energy and they do not produce greenhouse gas emissions during operation making them an eco-friendly option.</li>
              <li><strong>Low Maintenance:</strong> Require minimal maintenance ensuring long-lasting and hassle-free operation.</li>
            </ul>
          </div>
        )}

        <Link href="/quote?service=solar-water-heating" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy transition mt-6">Request Quote</Link>
      </div>

      {/* Heat Pumps */}
      <div className="bg-light-bg rounded-3xl p-8 md:p-12 mb-10 shadow-lg border-b-4 border-gold">
        <h2 className="text-3xl font-extrabold text-navy mb-6">Heat Pumps</h2>
        <p className="text-gray-700 text-lg mb-8">
          Maximize energy efficiency with our electric heat pump water heaters. Unlike conventional heaters, heat pumps utilize electricity more efficiently. This innovation not only reduces energy consumption but also lowers carbon emissions, making it a promising solution for residential and commercial water heating needs.
        </p>

        {/* How They Work Accordion */}
        <button onClick={() => toggleSection('pump-work')} className="w-full text-left border-b border-gray-300 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-navy">How They Work</span>
          <span className="text-gold text-2xl">{openSection === 'pump-work' ? '−' : '+'}</span>
        </button>
        {openSection === 'pump-work' && (
          <div className="py-6">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Absorption of Ambient Heat:</strong> Heat pumps absorb heat from the surrounding air, even in cooler climates, using a refrigerant. The refrigerant absorbs this heat and is converted from a liquid to gas hot water system.</li>
              <li><strong>Heat Transfer:</strong> The warm gaseous refrigerant is compressed, which increases its temperature. It is then passed through a heat exchanger in direct contact with the water tank.</li>
              <li><strong>Heating the Water:</strong> As the hot refrigerant circulates through the heat exchanger, it transfers its heat to the water in the tank, heating it for use.</li>
              <li><strong>Reverting the Refrigerant:</strong> Once the heat is transferred, the refrigerant cools down, returning to a liquid state, and the cycle begins again.</li>
            </ul>
          </div>
        )}

        {/* Key Benefits Accordion */}
        <button onClick={() => toggleSection('pump-benefits')} className="w-full text-left border-b border-gray-300 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-navy">Key Benefits</span>
          <span className="text-gold text-2xl">{openSection === 'pump-benefits' ? '−' : '+'}</span>
        </button>
        {openSection === 'pump-benefits' && (
          <div className="py-6">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Energy Efficiency:</strong> Heat pumps are highly energy efficient and typically use 60%-75% less electricity than conventional electric water heating systems. Heat pumps do not use electricity to directly heat water making them consume significantly less energy than direct heating methods.</li>
              <li><strong>Consistent Performance:</strong> Not reliant on sunlight and can operate consistently regardless of weather conditions with no need for a booster.</li>
              <li><strong>Space Savings:</strong> Smaller footprint compared to solar water heaters making them a viable option for properties with limited space.</li>
            </ul>
          </div>
        )}

        <Link href="/quote?service=heat-pump-water-heater" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy transition mt-6">Request Quote</Link>
      </div>

      {/* PV Water Heating */}
      <div className="bg-light-bg rounded-3xl p-8 md:p-12 mb-10 shadow-lg border-b-4 border-gold">
        <h2 className="text-3xl font-extrabold text-navy mb-6">PV Water Heating</h2>
        <p className="text-gray-700 text-lg mb-8">
          Photovoltaic (PV) water heating systems utilize solar panels to convert sunlight into electricity, which is then used to heat water. Unlike traditional solar water heaters that use thermal collectors, PV water heating systems use PV panels similar to those used in standard solar power systems. This innovative approach not only provides hot water but also reduces dependency on the grid, leading to substantial energy savings and environmental benefits.
        </p>
        <p className="text-gray-700 text-lg mb-8">
          Our PV water heating systems are scalable, customizable and suitable for both residential and commercial applications.
        </p>

        {/* How They Work Accordion */}
        <button onClick={() => toggleSection('pv-work')} className="w-full text-left border-b border-gray-300 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-navy">How They Work</span>
          <span className="text-gold text-2xl">{openSection === 'pv-work' ? '−' : '+'}</span>
        </button>
        {openSection === 'pv-work' && (
          <div className="py-6">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Solar Energy Conversion:</strong> PV panels absorb sunlight and convert it into direct current (DC) electricity.</li>
              <li><strong>Inverter Conversion:</strong> The DC electricity generated by the PV panels is converted into alternating current (AC) electricity using an inverter. This AC electricity can be used to power standard electric water heaters.</li>
              <li><strong>Water Heating:</strong> The AC electricity is directed to an electric water heater, where it heats the water stored in a tank. The electric heating element inside the water heater efficiently transfers the electricity-generated heat to the water.</li>
              <li><strong>Storage:</strong> The heated water is stored in an insulated tank, ensuring that it remains hot and readily available for use whenever needed.</li>
            </ul>
          </div>
        )}

        {/* Key Benefits Accordion */}
        <button onClick={() => toggleSection('pv-benefits')} className="w-full text-left border-b border-gray-300 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-navy">Key Benefits</span>
          <span className="text-gold text-2xl">{openSection === 'pv-benefits' ? '−' : '+'}</span>
        </button>
        {openSection === 'pv-benefits' && (
          <div className="py-6">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Reduced Energy Bills:</strong> By utilizing free solar energy to heat water, households and businesses can significantly lower their electricity bills.</li>
              <li><strong>Environmental Sustainability:</strong> PV water heating systems rely on renewable solar energy, producing zero greenhouse gas emissions during operation. This makes them an eco-friendly choice.</li>
              <li><strong>Year-Round Performance:</strong> PV water heating systems can operate efficiently throughout the year, regardless of ambient temperatures, making them suitable for a wide range of climates.</li>
            </ul>
          </div>
        )}

        <Link href="/quote?service=pv-water-heating" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy transition mt-6">Request Quote</Link>
      </div>

      {/* Our Support Services */}
      <div className="bg-navy rounded-3xl p-8 md:p-12 shadow-lg">
        <h2 className="text-3xl font-extrabold text-white mb-8">Our Support Services</h2>
        <div className="space-y-4">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gold mb-3">Installation</h3>
            <p className="text-white/80">Our experienced technicians will ensure seamless installation of your water heating system, adhering to industry standards and safety protocols to guarantee optimal performance and longevity.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gold mb-3">Maintenance</h3>
            <p className="text-white/80">Regular maintenance is key to extending the life of your system. We offer scheduled maintenance packages to keep your system running at peak efficiency.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gold mb-3">Repair</h3>
            <p className="text-white/80">In the event of a malfunction or breakdown, our skilled technicians are available to diagnose and repair your water heating system promptly. We prioritize quick response times and quality workmanship to minimize downtime and inconvenience.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gold mb-3">Upgrades and Retrofits</h3>
            <p className="text-white/80">Upgrade your existing water heating system or retrofit outdated equipment with our innovative solutions designed to improve energy efficiency and performance while reducing operating costs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}