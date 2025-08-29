import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Button from "@/components/atoms/Button";
import { IProduct, IProductFilter } from "@/types";

interface IProductGridProps {
  products: IProduct[];
  showAll?: boolean;
  maxItems?: number;
  enableFilters?: boolean;
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<IProductGridProps> = ({
  products,
  showAll = false,
  maxItems = 4,
  enableFilters = false,
  title,
  subtitle,
}) => {
  const [filter, setFilter] = useState<IProductFilter>({});
  const [showAllProducts, setShowAllProducts] = useState(showAll);

  const filteredProducts = products.filter((product) => {
    if (filter.searchTerm) {
      return (
        product.name.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(filter.searchTerm.toLowerCase())
      );
    }
    if (filter.hasSubCategories !== undefined) {
      return filter.hasSubCategories
        ? product.subCategories
        : !product.subCategories;
    }
    return true;
  });

  const displayProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, maxItems);

  return (
    <div>
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

      {enableFilters && (
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <Button
            variant={
              filter.hasSubCategories === undefined ? "primary" : "outline"
            }
            size="sm"
            onClick={() => setFilter({})}
          >
            All Products
          </Button>
          <Button
            variant={filter.hasSubCategories === true ? "primary" : "outline"}
            size="sm"
            onClick={() => setFilter({ hasSubCategories: true })}
          >
            With Categories
          </Button>
          <Button
            variant={filter.hasSubCategories === false ? "primary" : "outline"}
            size="sm"
            onClick={() => setFilter({ hasSubCategories: false })}
          >
            Direct Services
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {!showAllProducts && filteredProducts.length > maxItems && (
        <div className="text-center mt-8">
          <Button size="lg" onClick={() => setShowAllProducts(true)}>
            View All Products ({filteredProducts.length})
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
