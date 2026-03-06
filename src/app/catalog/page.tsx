"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function CatalogPage() {
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
            { name: "Catalog", id: "catalog" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
          ]}
          button={{ text: "Start Streaming", href: "/pricing" }}
          animateOnLoad={true}
        />
      </div>

      {/* Catalog/Products Section */}
      <div id="catalog" data-section="catalog" className="py-20 pt-32">
        <ProductCardOne
          title="Explore Our Premium Anime Collection"
          description="Browse thousands of anime titles in our exclusive premium catalog. From classic series to latest releases, find your next favorite anime."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="scale-rotate"
          gridVariant="bento-grid"
          carouselMode="buttons"
          products={[
            {
              id: "anime-1",
              name: "Celestial Chronicles",
              price: "Included",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/promotional-poster-for-celestial-chronic-1772776679233-4cb3eacf.png?_wi=2",
              imageAlt: "Celestial Chronicles",
            },
            {
              id: "anime-2",
              name: "Neon Dreams",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/vibrant-neon-themed-anime-poster-for-neo-1772776679199-09e35e1c.png?_wi=2",
              imageAlt: "Neon Dreams",
            },
            {
              id: "anime-3",
              name: "Digital Revolution",
              price: "Included",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/digital-themed-anime-poster-showing-tech-1772776680201-dff3a303.png?_wi=2",
              imageAlt: "Digital Revolution",
            },
            {
              id: "anime-4",
              name: "Mystical Realms",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/fantasy-anime-poster-for-mystical-realms-1772776678545-b329b3ec.png?_wi=2",
              imageAlt: "Mystical Realms",
            },
            {
              id: "anime-5",
              name: "Infinite Horizons",
              price: "Included",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/epic-adventure-anime-poster-with-vast-la-1772776679388-92e68eeb.png?_wi=2",
              imageAlt: "Infinite Horizons",
            },
            {
              id: "anime-6",
              name: "Eternal Destiny",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/dramatic-anime-poster-for-eternal-destin-1772776679284-97342bfb.png?_wi=2",
              imageAlt: "Eternal Destiny",
            },
          ]}
        />
      </div>

      {/* Genre Highlights */}
      <div id="genres" data-section="genres" className="py-20">
        <FeatureCardMedia
          title="Browse by Genre"
          description="Discover anime series organized by your favorite genres and themes."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              id: "genre-1",
              title: "Action & Adventure",
              description: "High-octane battles, epic quests, and thrilling adventures await in our action collection.",
              tag: "Popular",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/epic-3d-anime-battle-scene-with-advanced-1772776677907-9afa5cc5.png?_wi=2",
              imageAlt: "Action & Adventure",
            },
            {
              id: "genre-2",
              title: "Romance & Drama",
              description: "Heartwarming stories of love, friendship, and personal growth that will touch your soul.",
              tag: "Trending",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/romantic-3d-anime-scene-with-soft-colors-1772776677859-74f69263.png?_wi=2",
              imageAlt: "Romance & Drama",
            },
            {
              id: "genre-3",
              title: "Sci-Fi & Cyberpunk",
              description: "Futuristic worlds, advanced technology, and mind-bending sci-fi concepts in stunning 3D.",
              tag: "Exclusive",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/futuristic-3d-anime-scene-with-advanced--1772776678871-1b468377.png?_wi=2",
              imageAlt: "Sci-Fi & Cyberpunk",
            },
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