import React, { useState } from 'react';
import { TopNoticeBar } from './components/TopNoticeBar';
import { Hero } from './components/Hero';
import { GallerySection, GalleryItemData } from './components/GallerySection';
import { ProblemSection } from './components/ProblemSection';
import { AudienceSection } from './components/AudienceSection';
import { ProductPresentationSection } from './components/ProductPresentationSection';
import { BonusSection } from './components/BonusSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { DeliverySection } from './components/DeliverySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';

interface SelectedImageState {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function App() {
  const [selectedImage, setSelectedImage] = useState<SelectedImageState | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#142B4A]">
      {/* Top Notice Bar */}
      <TopNoticeBar />

      <main className="flex-1">
        {/* Section 1 — Hero */}
        <Hero
          onImageClick={() => setSelectedImage({
            src: '/guia-ronco.jpg',
            alt: 'Guia Ilustrado Exercícios para o Ronco',
            width: 800,
            height: 800,
          })}
        />

        {/* Section 2 — Galeria dos Mapas Mentais */}
        <GallerySection
          onSelectImage={(item: GalleryItemData) => setSelectedImage({
            src: item.src,
            alt: item.alt,
            width: item.width,
            height: item.height,
          })}
        />

        {/* Section 3 — Identificação do Problema */}
        <ProblemSection />

        {/* Section 4 — Para Quem Foi Feito */}
        <AudienceSection />

        {/* Section 5 — Apresentação do Produto */}
        <ProductPresentationSection />

        {/* Section 6 — Os Três Bônus */}
        <BonusSection />

        {/* Section 7 — Oferta */}
        <OfferSection />

        {/* Section 7 — Garantia */}
        <GuaranteeSection />

        {/* Section 8 — Como Você Recebe o Material */}
        <DeliverySection />

        {/* Section 9 — Perguntas Frequentes */}
        <FaqSection />

        {/* Section 10 — CTA Final */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Image inspection lightbox modal */}
      <LightboxModal
        imageSrc={selectedImage?.src || null}
        imageAlt={selectedImage?.alt}
        imageWidth={selectedImage?.width}
        imageHeight={selectedImage?.height}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

export default App;
