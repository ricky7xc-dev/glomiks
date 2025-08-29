import React from "react";
import Section from "../atoms/Section";
import Container from "../atoms/Container";
import Card from "../atoms/Card";

interface IStat {
  number: string;
  label: string;
  description?: string;
}

interface IStatsSectionProps {
  stats: IStat[];
  title?: string;
  subtitle?: string;
}

const StatsSection: React.FC<IStatsSectionProps> = ({
  stats,
  title,
  subtitle,
}) => {
  return (
    <Section background="gray">
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#e21e26] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm text-gray-600">{stat.description}</div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default StatsSection;
