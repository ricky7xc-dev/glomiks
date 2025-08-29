import React from "react";
import { companyInfo } from "@/data/companyData";
import Card from "@/components/atoms/Card";

const AboutPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about {companyInfo.fullName} and our commitment to
            excellence
          </p>
        </div>

        {/* Company Description */}
        <div className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Company
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {companyInfo.description}
            </p>
          </Card>
        </div>

        {/* Vision & Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">{companyInfo.vision}</p>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Core Services
            </h4>
            <ul className="space-y-2">
              {companyInfo.services.map((service, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {companyInfo.industries.map((industry, index) => (
                <div key={index} className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-blue-800 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
