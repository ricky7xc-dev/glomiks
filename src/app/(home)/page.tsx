import React from "react";
import ProductCard from "@/components/molecules/ProductCard";
import Hero from "@/components/molecules/Hero";
import StatsSection from "@/components/molecules/StatsSection";
import ClientsSection from "@/components/molecules/ClientsSection";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Section from "@/components/atoms/Section";
import { products } from "@/data/products";
import { clients } from "@/data/clients";
import { companyInfo } from "@/data/companyData";
import { companyStats } from "@/data/stats";
// import VisionMissionSection from "@/components/molecules/VisionMissionSection";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title={`Building the Future of Energy and Industry`}
        // subtitle={companyInfo.vision}
        description="Glomiks is your trusted partner for engineering, construction, and technical services. We deliver integrated solutions for the automotive, industrial, and energy sectors."
        primaryAction={{
          text: "Our Products",
          href: "/products",
        }}
        secondaryAction={{
          text: "Contact Us",
          href: "/contact",
        }}
      />

      {/* <VisionMissionSection
        vision={companyInfo.vision}
        mission={companyInfo.mission}
        companyName={companyInfo.name}
      /> */}

      {/* Stats Section */}
      <StatsSection
        stats={companyStats}
        title="Our Track Record"
        subtitle="Numbers that reflect our commitment to excellence and client satisfaction"
      />

      {/* Products Preview */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products & Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions across multiple sectors with
              excellence and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg">View All Products</Button>
          </div>
        </Container>
      </Section>

      {/* Clients Section */}
      <ClientsSection
        clients={clients}
        title="Our Trusted Clients"
        subtitle="We are proud to work with leading companies across various industries in Indonesia"
      />

      {/* Industries Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across various industrial sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companyInfo.industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-gray-800">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product Highlights */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast & Reliable Service
              </h3>
              <p className="text-gray-600">
                Quick response times and reliable service delivery to keep your
                operations running smoothly.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="red" className="text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your project requirements and get a
              customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Request Quote</Button>
              <Button variant="outline" size="lg">
                View Our Products
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;
