import Hero from "@/components/hilton/Hero";
import Quotes from "@/components/hilton/Quotes";
import ScreensGallery from "@/components/hilton/ScreensGallery";
import NarrativeSection from "@/components/hilton/NarrativeSection";
import FeatureShowcase from "@/components/hilton/FeatureShowcase";
import ProblemSection from "@/components/hilton/ProblemSection";
import DiagramSection from "@/components/hilton/DiagramSection";
import ExplorationSection from "@/components/hilton/ExplorationSection";
import MockupsSection from "@/components/hilton/MockupsSection";
import UIDesignSection from "@/components/hilton/UIDesignSection";
import BlueShowcase from "@/components/hilton/BlueShowcase";
import TaughtMeSection from "@/components/hilton/TaughtMeSection";

const GALLERY_ONE = [
  "https://api.builder.io/api/v1/image/assets/TEMP/3335cd63e41b80a490187c0212838db1152f5cab?width=372",
  "https://api.builder.io/api/v1/image/assets/TEMP/6257f0e58ab0fd9a460c3cdadc5fec388946d96a?width=370",
  "https://api.builder.io/api/v1/image/assets/TEMP/db10e92c2cb4419e12ac2808e8537b77e8460342?width=370",
  "https://api.builder.io/api/v1/image/assets/TEMP/85961c8f92aab5c5f10b1d28cac928a5a28909ba?width=370",
  "https://api.builder.io/api/v1/image/assets/TEMP/0350189ebd85d18e28ab6db5c58ed335da35ffe1?width=370",
  "https://api.builder.io/api/v1/image/assets/TEMP/0f29667048d8ac99e5af731ce48817134c220a90?width=372",
  "https://api.builder.io/api/v1/image/assets/TEMP/3c5d6d343471182c8955e10139bde2e8e3181eaa?width=370",
  "https://api.builder.io/api/v1/image/assets/TEMP/2ecc2fe36fdf4710c68a723f47a535dbad0bb0c9?width=370",
  "https://api.builder.io/api/v1/image/assets/TEMP/e63ebf0897b237348ae1cc2d12d08350b4a376fd?width=370",
  "https://api.builder.io/api/v1/image/assets/TEMP/4ad98b818f50f95f83447caa1c9b9eaaf9cad2a9?width=370",
];

const GALLERY_TWO = [
  "https://api.builder.io/api/v1/image/assets/TEMP/4e18ad03bf6d6fabcb89f95a22ba85fc0e8e4430?width=452",
  "https://api.builder.io/api/v1/image/assets/TEMP/66781bfbebb5a8e8c5a23af065a274556178394a?width=370",
  "https://api.builder.io/api/v1/image/assets/TEMP/6105690f21102f31c7b4d914c9f7eaf377766954?width=412",
  "https://api.builder.io/api/v1/image/assets/TEMP/372676846add01f267bca6d406bbb211f8bd7e32?width=378",
  "https://api.builder.io/api/v1/image/assets/TEMP/286bd04c0235c3a4db68b79cccb153dba989db8b?width=474",
  "https://api.builder.io/api/v1/image/assets/TEMP/b42b38dc25ec53af4fc261d6701f8007cdd17345?width=408",
  "https://api.builder.io/api/v1/image/assets/TEMP/1e6d310692789896275212f210fa9ed47b75ff4e?width=368",
  "https://api.builder.io/api/v1/image/assets/TEMP/eb7d0766213bbb161186d3104d038a7c1898d6f7?width=364",
  "https://api.builder.io/api/v1/image/assets/TEMP/c5ab4c895308f02bec9303902c47355eb235ab79?width=364",
  "https://api.builder.io/api/v1/image/assets/TEMP/8ffeda2cff73deffd3ddfc53ecb8de4e9347719b?width=402",
];

export default function Index() {
  return (
    <div>
      <Hero />
      <Quotes />
      <ScreensGallery images={GALLERY_ONE} bg="bg-brand-tint" />

      <NarrativeSection
        bg="bg-brand-tint2"
        heading="Project Background and Personal Journey"
        paragraphs={[
          "As a frequent traveler and Hilton Honors user, my interest in redesigning the Hilton booking experience came from observing the challenges travelers can face while planning and managing a hotel stay. From searching for the right destination and comparing properties to understanding room types, amenities, rates, and cancellation policies, the booking journey involves several decisions. This project gave me an opportunity to explore how these interactions could be simplified while preserving the familiarity and trust associated with the Hilton brand.",
          "I began by studying the existing Hilton mobile experience and mapping the complete booking journey, from hotel discovery to reservation confirmation. I focused on key interactions such as destination search, date selection, filters, map-based hotel discovery, room selection, stay customization, pricing, guest information, and payment. This helped me identify opportunities to improve information hierarchy, reduce unnecessary friction, and make important details easier for travelers to understand throughout the booking process.",
          "The redesigned Hilton experience reflects my approach to creating simple, user-centered digital products. Rather than completely changing the existing experience, I focused on refining the journey and helping travelers make decisions with greater confidence. The final concept brings search, comparison, booking, payment, and reservation management into a more seamless experience—allowing travelers to spend less time navigating the booking process and more time focusing on their stay.",
        ]}
      />

      <FeatureShowcase />

      <ProblemSection />

      <ScreensGallery images={GALLERY_TWO} bg="bg-brand-tint" />

      <DiagramSection
        bg="bg-brand-tint"
        src="https://api.builder.io/api/v1/image/assets/TEMP/db9cf22f52415236372ad3e49964743ef9bfa6fa?width=2720"
        alt="Hilton booking user flow diagram"
      />

      <DiagramSection
        bg="bg-brand-tint"
        src="https://api.builder.io/api/v1/image/assets/TEMP/b36f62dd30e79b9bc67073bcbd04de2ff6379c51?width=2794"
        alt="Hilton booking journey map"
      />

      <DiagramSection
        bg="bg-brand-tint"
        src="https://api.builder.io/api/v1/image/assets/TEMP/c55de22952c2ec07b0e05f4d825aee25275fc905?width=2550"
        alt="Hilton wireframes overview"
      />

      <ExplorationSection />

      <MockupsSection />

      <UIDesignSection />

      <BlueShowcase />

      <TaughtMeSection />
    </div>
  );
}
