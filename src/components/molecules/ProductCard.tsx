"use client";
import React, { useState } from "react";
import { IProductCardProps } from "@/types";
import Image from "next/image";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const [showSubCategories, setShowSubCategories] = useState(false);

  return (
    <Card hoverable className="h-full">
      <div className="relative h-48 w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Features for products without subcategories */}
        {product.features && !product.subCategories && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Key Features:
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#e21e26] rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Subcategories for products with subcategories */}
        {product.subCategories && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Categories:
            </h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.subCategories.map((sub) => (
                <span
                  key={sub.id}
                  className="inline-block px-3 py-1 text-xs font-medium text-[#e21e26] bg-[#e21e26]/10 rounded-full"
                >
                  {sub.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Learn More
          </Button>
          {product.subCategories && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowSubCategories(!showSubCategories)}
            >
              {showSubCategories ? "Hide" : "View"} Details
            </Button>
          )}
        </div>

        {/* Expanded subcategories */}
        {showSubCategories && product.subCategories && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="space-y-4">
              {product.subCategories.map((subCategory) => (
                <div key={subCategory.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={subCategory.imageUrl}
                        alt={subCategory.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">
                        {subCategory.name}
                      </h5>
                      <p className="text-xs text-gray-600 mb-2">
                        {subCategory.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {subCategory.features
                          .slice(0, 2)
                          .map((feature, index) => (
                            <span
                              key={index}
                              className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
