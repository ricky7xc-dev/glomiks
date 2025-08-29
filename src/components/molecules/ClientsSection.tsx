import React from "react";
import Image from "next/image";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import { IClient } from "@/types";

interface IClientsSectionProps {
  clients: IClient[];
  title?: string;
  subtitle?: string;
}

const ClientsSection: React.FC<IClientsSectionProps> = ({
  clients,
  title = "Our Trusted Clients",
  subtitle = "We are proud to work with leading companies across various industries",
}) => {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-20 h-12 mb-3">
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                {client.name}
              </h3>
              {client.industry && (
                <span className="text-xs text-gray-500">{client.industry}</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ClientsSection;
