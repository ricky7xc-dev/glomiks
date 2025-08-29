import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/molecules/ProductCard";

const ProductsPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your industrial needs
            across various sectors
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our team can develop tailored solutions to meet your specific
              requirements across all industrial sectors.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
