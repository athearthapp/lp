import React from 'react';

const stats = [
  { number: "10+", label: "Years Serving 5,000+ Expats in Tokyo" },
  { number: "2,000+", label: "Foreigner-Friendly Listings" },
  { number: "56+", label: "Corporate & Management Partners" },
  { number: "¥150M", label: "Raised from Top VCs" }
];

export default function Stats() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}