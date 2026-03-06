"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import PricingCardFive from "@/components/sections/pricing/PricingCardFive";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Play, Sparkles, Crown, Heart } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
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

      {/* Pricing Section */}
      <div id="pricing" data-section="pricing" className="py-20 pt-32">
        <PricingCardFive
          title="Premium Streaming Plans"
          description="Choose the perfect plan for your anime streaming needs."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "basic-plan",              tag: "Basic Stream",              tagIcon: Play,
              price: "$9.99",              period: "/month",              description: "Perfect for casual anime viewers who want access to our full library.",              button: { text: "Start Trial", href: "/contact" },
              featuresTitle: "What's Included:",              features: [
                "HD (1080p) Streaming",                "Watch on 1 device",                "Offline downloads",                "Ad-free experience",                "Access to full library"],
            },
            {
              id: "premium-plan",              tag: "Premium 3D",              tagIcon: Sparkles,
              price: "$19.99",              period: "/month",              description: "Experience anime in premium 3D with exclusive content and early access.",              button: { text: "Most Popular", href: "/contact" },
              featuresTitle: "What's Included:",              features: [
                "4K 3D Streaming",                "Watch on 2 devices simultaneously",                "Offline downloads (25GB)",                "Ad-free experience",                "Exclusive premium content",                "Early episode access",                "AI recommendations"],
            },
            {
              id: "ultimate-plan",              tag: "Ultimate Experience",              tagIcon: Crown,
              price: "$34.99",              period: "/month",              description: "The ultimate anime streaming experience with premium features and family sharing.",              button: { text: "Unlock Ultimate", href: "/contact" },
              featuresTitle: "What's Included:",              features: [
                "4K 3D + 8K Streaming",                "Watch on 4 devices simultaneously",                "Unlimited offline downloads",                "Ad-free experience",                "All premium content",                "Priority customer support",                "Family sharing (4 members)",                "Advanced AI curation",                "3D theater mode"],
            },
          ]}
        />
      </div>

      {/* FAQ Section */}
      <div id="faq" data-section="faq" className="py-20">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about AnimeVerse Premium."
          textPosition="left"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            {
              id: "faq-1",              title: "What is 3D anime streaming?",              content: "3D anime streaming uses advanced rendering technology to convert traditional 2D anime into immersive 3D experiences, adding depth and visual richness to your favorite shows while maintaining the original artwork integrity."},
            {
              id: "faq-2",              title: "Can I cancel my subscription anytime?",              content: "Yes, you can cancel your subscription at any time without penalties. Your access will continue until the end of your billing period."},
            {
              id: "faq-3",              title: "How many devices can I watch on?",              content: "The number of simultaneous streams depends on your plan. Basic allows 1 device, Premium allows 2 devices, and Ultimate allows 4 devices streaming at the same time."},
            {
              id: "faq-4",              title: "Is there a free trial available?",              content: "Yes! All new users get a 7-day free trial to explore our premium features and catalog before committing to a paid plan."},
            {
              id: "faq-5",              title: "What internet speed do I need?",              content: "For HD streaming, we recommend at least 5 Mbps. For 4K streaming, a minimum of 25 Mbps connection is required for optimal performance."},
            {
              id: "faq-6",              title: "Do you offer dubbed anime?",              content: "Yes, we offer both subbed and dubbed versions of most anime. You can select your preferred audio option when streaming any title."},
          ]}
          buttons={[{ text: "Contact Support", href: "/contact" }]}
          buttonAnimation="slide-up"
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
