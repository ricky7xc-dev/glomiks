import React from "react";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import Card from "@/components/atoms/Card";

interface IVisionMissionProps {
  vision: string;
  mission: string;
  companyName: string;
}

const VisionMissionSection: React.FC<IVisionMissionProps> = ({
  vision,
  mission,
  companyName,
}) => {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The guiding principles that drive {companyName} towards excellence
            and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="p-8 h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>

              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full border-t border-blue-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-gray-50 px-4 text-blue-600 font-medium">
                    ★
                  </span>
                </div>
              </div>

              <blockquote className="mt-6 text-lg text-gray-700 italic leading-relaxed">
                &quot;{vision}&quot;
              </blockquote>
            </div>
          </Card>

          {/* Mission Card */}
          <Card className="p-8 h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>

              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full border-t border-green-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-gray-50 px-4 text-green-600 font-medium">
                    ⚡
                  </span>
                </div>
              </div>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed text-left">
                {mission}
              </p>
            </div>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">
                Striving for the highest quality in everything we do
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🤝</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-sm text-gray-600">
                Building trust through honest and transparent relationships
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">
                Embracing new technologies and creative solutions
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Safety</h4>
              <p className="text-sm text-gray-600">
                Prioritizing safety in all our operations and services
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default VisionMissionSection;
