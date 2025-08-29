import React from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Image from "next/image";

interface IHeroProps {
  title: string;
  // subtitle: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

const Hero: React.FC<IHeroProps> = ({
  title,
  // subtitle,
  description,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <section className="bg-[#e21e26] text-white">
      <Container className="flex">
        <div className="py-24 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          {/* <p className="text-xl md:text-2xl mb-8 max-w-3xl">{subtitle}</p> */}
          {description && (
            <p className="text-lg mb-8 max-w-2xl opacity-90">{description}</p>
          )}
          <div className="space-x-4">
            {primaryAction && <Button size="lg">{primaryAction.text}</Button>}
            {secondaryAction && (
              <Button variant="outline" size="lg">
                {secondaryAction.text}
              </Button>
            )}
          </div>
        </div>
        <Image
          src={"/assets/product-banner.png"}
          alt="Hero Image"
          width={800}
          height={400}
          className="mx-auto w-[200px] md:w-[400px] lg:w-[600px] object-contain"
        />
      </Container>
    </section>
  );
};

export default Hero;
