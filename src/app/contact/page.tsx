"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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

      {/* Contact/Support Section */}
      <div id="contact" data-section="contact" className="py-20 pt-32">
        <FaqSplitText
          sideTitle="Get In Touch"
          sideDescription="Have questions about AnimeVerse? Our support team is here to help you get the most out of your premium streaming experience."
          textPosition="left"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            {
              id: "contact-1",
              title: "How do I contact customer support?",
              content: "You can reach our customer support team 24/7 through multiple channels: email at support@animeverse.com, live chat on our website, or through our Discord community server at discord.gg/animeverse.",
            },
            {
              id: "contact-2",
              title: "What are your business hours?",
              content: "AnimeVerse customer support operates 24/7 to assist you at any time. Our response time is typically within 2-4 hours for email inquiries and immediate for live chat support.",
            },
            {
              id: "contact-3",
              title: "How can I report a technical issue?",
              content: "To report technical issues, please use our support portal at support.animeverse.com or email us at tech-support@animeverse.com with details about your issue, device type, and browser information.",
            },
            {
              id: "contact-4",
              title: "Can I upgrade or downgrade my plan?",
              content: "Yes! You can change your subscription plan at any time from your account settings. Changes take effect immediately, and we'll adjust your billing accordingly.",
            },
            {
              id: "contact-5",
              title: "Is there a warranty or guarantee?",
              content: "We offer a 7-day money-back guarantee for all new subscriptions. If you're not satisfied with AnimeVerse, simply contact support for a full refund.",
            },
            {
              id: "contact-6",
              title: "How do I delete my account?",
              content: "To delete your account, go to Settings → Account → Delete Account. Note that this action is permanent and cannot be undone. All your data and viewing history will be permanently removed.",
            },
          ]}
          buttons={[{ text: "Visit Support Portal", href: "https://support.animeverse.com" }]}
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