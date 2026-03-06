"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Trophy, Brain, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="grid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="AnimeVerse"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Catalog", id: "/catalog" },
            { name: "Pricing", id: "/pricing" },
            { name: "About", id: "/about" },
          ]}
          button={{ text: "Start Streaming", href: "/pricing" }}
          animateOnLoad={true}
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about" className="py-20 pt-32">
        <SplitAbout
          title="Why Choose AnimeVerse Premium"
          description="Experience anime like never before with our revolutionary 3D streaming technology and curated premium collection."
          tag="Premium Experience"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "4K 3D Streaming",              description: "Watch anime in stunning 3D quality with immersive depth and crystal-clear visuals.",              icon: Zap,
            },
            {
              title: "Exclusive Premium Content",              description: "Access early releases, premium series, and exclusive behind-the-scenes content.",              icon: Trophy,
            },
            {
              title: "Advanced AI Recommendations",              description: "Personalized anime suggestions based on your viewing history and preferences.",              icon: Brain,
            },
            {
              title: "Multi-Device Sync",              description: "Seamlessly watch on any device with automatic progress synchronization."},
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/modern-streaming-interface-dashboard-sho-1772776679160-6293dd61.png?_wi=2"
          imageAlt="Premium Streaming Features"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[{ text: "Back to Home", href: "/" }]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Core Values Features */}
      <div id="values" data-section="values" className="py-20">
        <FeatureCardMedia
          title="Our Core Values"
          description="Built on the foundations of innovation, quality, and user satisfaction."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              id: "value-1",              title: "Innovation First",              description: "We continuously innovate to bring cutting-edge 3D anime streaming technology to our platform.",              tag: "Values",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/technical-visualization-of-3d-rendering--1772776678716-2d3e73e7.png?_wi=2",              imageAlt: "Innovation"},
            {
              id: "value-2",              title: "Quality Content",              description: "Every anime on our platform is carefully curated to ensure the highest quality viewing experience.",              tag: "Values",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/ultra-hd-anime-scene-split-showing-compa-1772776678690-dab1e125.png?_wi=2",              imageAlt: "Quality"},
            {
              id: "value-3",              title: "User Focused",              description: "Your satisfaction is at the heart of everything we do. We listen and adapt to our community.",              tag: "Values",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/ai-powered-library-interface-with-smart--1772776679578-a4bc79cf.png?_wi=2",              imageAlt: "User Focused"},
          ]}
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer" className="py-10">
        <FooterCard
          logoText="AnimeVerse"
          copyrightText="© 2025 AnimeVerse Premium. All rights reserved."
          socialLinks={[
            { icon: Heart, href: "https://twitter.com/animeverse", ariaLabel: "Twitter" },
            { icon: Heart, href: "https://instagram.com/animeverse", ariaLabel: "Instagram" },
            { icon: Heart, href: "https://discord.gg/animeverse", ariaLabel: "Discord" },
            { icon: Heart, href: "https://youtube.com/@animeverse", ariaLabel: "YouTube" },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
