"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import { Sparkles, Star, Zap, Trophy, Brain, Heart } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
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

      {/* Hero Section */}
      <div id="hero" data-section="hero" className="pt-20">
        <HeroSplitDoubleCarousel
          title="Experience Premium Anime in Stunning 3D"
          description="Stream your favorite anime with cutting-edge 3D visuals, immersive soundscapes, and exclusive premium content. Join millions of anime enthusiasts worldwide."
          tag="New 3D Technology"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          leftCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/a-stunning-3d-animated-scene-from-a-prem-1772776677928-7b3f2737.png",
              imageAlt: "3D Anime Scene 1",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/beautiful-3d-rendered-anime-scene-with-e-1772776678400-14e81ede.png",
              imageAlt: "3D Anime Scene 2",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/epic-3d-anime-battle-scene-with-advanced-1772776677907-9afa5cc5.png?_wi=1",
              imageAlt: "3D Anime Scene 3",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/luxurious-3d-anime-interior-scene-with-p-1772776679524-5738aeab.png",
              imageAlt: "3D Anime Scene 4",
            },
          ]}
          rightCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/high-quality-3d-anime-character-portrait-1772776678457-75dbea3f.png",
              imageAlt: "Premium Content 1",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/futuristic-3d-anime-scene-with-advanced--1772776678871-1b468377.png?_wi=1",
              imageAlt: "Premium Content 2",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/romantic-3d-anime-scene-with-soft-colors-1772776677859-74f69263.png?_wi=1",
              imageAlt: "Premium Content 3",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/dramatic-3d-anime-scene-with-dark-moody--1772776678471-f19ef28e.png",
              imageAlt: "Premium Content 4",
            },
          ]}
          carouselPosition="right"
          buttons={[
            { text: "Start Free Trial", href: "/pricing" },
            { text: "Explore Catalog", href: "/catalog" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about" className="py-20">
        <SplitAbout
          title="Why Choose AnimeVerse Premium"
          description="Experience anime like never before with our revolutionary 3D streaming technology and curated premium collection."
          tag="Premium Experience"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "4K 3D Streaming",
              description: "Watch anime in stunning 3D quality with immersive depth and crystal-clear visuals.",
              icon: Zap,
            },
            {
              title: "Exclusive Premium Content",
              description: "Access early releases, premium series, and exclusive behind-the-scenes content.",
              icon: Trophy,
            },
            {
              title: "Advanced AI Recommendations",
              description: "Personalized anime suggestions based on your viewing history and preferences.",
              icon: Brain,
            },
            {
              title: "Multi-Device Sync",
              description: "Seamlessly watch on any device with automatic progress synchronization.",
            },
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/modern-streaming-interface-dashboard-sho-1772776679160-6293dd61.png?_wi=1"
          imageAlt="Premium Streaming Features"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[{ text: "Learn More", href: "/about" }]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Features Section */}
      <div id="features" data-section="features" className="py-20">
        <FeatureCardMedia
          title="Premium Streaming Features"
          description="Discover what makes AnimeVerse the ultimate anime streaming platform."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              id: "feature-1",
              title: "3D Animation Engine",
              description: "Experience anime with advanced 3D rendering technology for immersive visuals.",
              tag: "Technology",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/technical-visualization-of-3d-rendering--1772776678716-2d3e73e7.png?_wi=1",
              imageAlt: "3D Animation Engine",
            },
            {
              id: "feature-2",
              title: "Ultra HD Resolution",
              description: "Stream up to 4K resolution with HDR support for the best picture quality.",
              tag: "Quality",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/ultra-hd-anime-scene-split-showing-compa-1772776678690-dab1e125.png?_wi=1",
              imageAlt: "Ultra HD Resolution",
            },
            {
              id: "feature-3",
              title: "Immersive Audio",
              description: "Dolby Atmos surround sound for an completely immersive viewing experience.",
              tag: "Audio",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/visualized-sound-wave-patterns-from-anim-1772776678423-864333bc.png",
              imageAlt: "Immersive Audio System",
            },
            {
              id: "feature-4",
              title: "Smart Library",
              description: "AI-powered recommendations and intelligent library management.",
              tag: "AI",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/ai-powered-library-interface-with-smart--1772776679578-a4bc79cf.png?_wi=1",
              imageAlt: "Smart Library",
            },
            {
              id: "feature-5",
              title: "Offline Downloads",
              description: "Download your favorite episodes and watch anywhere, anytime.",
              tag: "Convenience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/cloud-download-visualization-showing-ani-1772776678631-60339dbf.png",
              imageAlt: "Offline Download Feature",
            },
            {
              id: "feature-6",
              title: "Family Sharing",
              description: "Share your premium account with up to 4 family members securely.",
              tag: "Sharing",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/family-sharing-interface-showing-multipl-1772776679007-2bb75978.png",
              imageAlt: "Family Sharing",
            },
          ]}
        />
      </div>

      {/* Catalog Section */}
      <div id="catalog" data-section="catalog" className="py-20">
        <ProductCardOne
          title="Explore Our Premium Anime Collection"
          description="Browse thousands of anime titles in our exclusive premium catalog."
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
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/promotional-poster-for-celestial-chronic-1772776679233-4cb3eacf.png?_wi=1",
              imageAlt: "Celestial Chronicles",
            },
            {
              id: "anime-2",
              name: "Neon Dreams",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/vibrant-neon-themed-anime-poster-for-neo-1772776679199-09e35e1c.png?_wi=1",
              imageAlt: "Neon Dreams",
            },
            {
              id: "anime-3",
              name: "Digital Revolution",
              price: "Included",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/digital-themed-anime-poster-showing-tech-1772776680201-dff3a303.png?_wi=1",
              imageAlt: "Digital Revolution",
            },
            {
              id: "anime-4",
              name: "Mystical Realms",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/fantasy-anime-poster-for-mystical-realms-1772776678545-b329b3ec.png?_wi=1",
              imageAlt: "Mystical Realms",
            },
            {
              id: "anime-5",
              name: "Infinite Horizons",
              price: "Included",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/epic-adventure-anime-poster-with-vast-la-1772776679388-92e68eeb.png?_wi=1",
              imageAlt: "Infinite Horizons",
            },
            {
              id: "anime-6",
              name: "Eternal Destiny",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/dramatic-anime-poster-for-eternal-destin-1772776679284-97342bfb.png?_wi=1",
              imageAlt: "Eternal Destiny",
            },
          ]}
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials" className="py-20">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "testimonial-1",
              name: "Sarah Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/professional-portrait-photo-of-a-young-a-1772776676647-916199a5.png",
              imageAlt: "Sarah Chen",
            },
            {
              id: "testimonial-2",
              name: "Marcus Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/professional-portrait-photo-of-a-young-l-1772776677385-34150da3.png",
              imageAlt: "Marcus Rodriguez",
            },
            {
              id: "testimonial-3",
              name: "Emily Tanaka",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/professional-portrait-photo-of-a-young-j-1772776676449-8ae146d9.png",
              imageAlt: "Emily Tanaka",
            },
            {
              id: "testimonial-4",
              name: "James Williams",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/professional-portrait-photo-of-a-young-c-1772776676920-32b532c2.png",
              imageAlt: "James Williams",
            },
            {
              id: "testimonial-5",
              name: "Aria Patel",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/professional-portrait-photo-of-a-young-i-1772776676854-65a64b0d.png",
              imageAlt: "Aria Patel",
            },
            {
              id: "testimonial-6",
              name: "Alex Kim",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AYjY9r2dtdkgBiuV2vP4mlhwtR/professional-portrait-photo-of-a-young-p-1772776677039-bc516a81.png",
              imageAlt: "Alex Kim",
            },
          ]}
          cardTitle="Over 50,000+ anime fans trust AnimeVerse for premium streaming"
          cardTag="Loved by our community"
          cardTagIcon={Heart}
          cardAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>
    </ThemeProvider>
  );
}