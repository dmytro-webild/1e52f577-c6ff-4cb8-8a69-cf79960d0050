"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Moon, Sparkles, Wind } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "#hero" },
        { name: "About", id: "#about" },
        { name: "Services", id: "#features" },
        { name: "Courses", id: "#products" },
        { name: "Reviews", id: "#testimonials" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Olivia Lallouz"
      button={{ text: "Schedule your evaluation", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{ variant: "plain"}}
      title="Breathe Better. Sleep Deeper. Live Beautifully."
      description="Olivia Lallouz • Orofacial Myologist"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776966178389-c97cn8rw.png"
      imageAlt="Olivia Lallouz"
      buttons={[{ text: "Schedule your evaluation", href: "#contact" }]}
      buttonClassName="bg-primary text-primary-foreground font-bold"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Meet Your Specialist: Olivia Lallouz"
      metrics={[
        { label: "Bite Alignment", value: "Optimized", icon: Sparkles },
        { label: "Breathing", value: "Optimized", icon: Wind },
        { label: "Sleep Quality", value: "Improved", icon: Moon },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Comprehensive Therapy & Care"
      description="From bite alignment to sleep optimization, my sessions are tailored to your specific facial structure and habits."
      accordionItems={[
        { id: "1", title: "Wake Up Refreshed", content: "Wake up refreshed by eliminating sleep-disrupting mouth breathing through optimized airway function." },
        { id: "2", title: "Restore Jaw Comfort", content: "Restore proper jaw positioning and eliminate tension through specialized myofunctional techniques that target the root cause of grinding." },
        { id: "3", title: "Breathe With Ease", content: "Transform your daily breathing habits by reinforcing nasal breathing to support your long-term wellness and vitality." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-woman-sitting-with-closed-eyes_23-2148897916.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="blur-reveal"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Course", name: "Myofunctional Foundation", price: "$150", rating: 5, reviewCount: "24", imageSrc: "http://img.b2bpic.net/free-photo/medic-equipment-desk_23-2148519752.jpg" },
        { id: "p2", brand: "Course", name: "Better Sleep Blueprint", price: "$195", rating: 5, reviewCount: "18", imageSrc: "http://img.b2bpic.net/free-vector/creative-hand-drawn-tree-yoga-gym-our-services-flyer_742173-1347.jpg" },
        { id: "p3", brand: "Course", name: "Jaw Tension Relief", price: "$120", rating: 4, reviewCount: "32", imageSrc: "http://img.b2bpic.net/free-photo/staistics-business-strategy-planning-research-digital-tablet-concept_53876-26413.jpg" },
      ]}
      title="Curated Wellness Courses"
      description="Access my specialized programs designed to help you build essential habits for lasting change."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="blur-reveal"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "95%", description: "Improved sleep quality" },
        { id: "m2", value: "100+", description: "Successful transformations" },
        { id: "m3", value: "4.9/5", description: "Average client rating" },
      ]}
      title="Impact & Results"
      description="Data-driven results for every client."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="blur-reveal"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Matthew L.", role: "Client", testimonial: "Olivia has been the light I have been looking for... I have been doing myofunctional therapy with Olivia and it has been nothing short of the most ideal experience.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776964335340-auiig8s9.png?_wi=2" },
        { id: "2", name: "Max M.", role: "Client", testimonial: "Olivia and her team have been amazing. From the start, they've been incredibly kind, professional, and genuinely invested in helping.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776964335340-auiig8s9.png?_wi=3" },
      ]}
      title="Client Love"
      description="Read about the transformations experienced by my clients."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "What is orofacial myology?", content: "A specialized therapy focusing on tongue, jaw, and facial muscle function to enhance breathing, sleep, and overall wellness." },
        { id: "q2", title: "How do online sessions work?", content: "I offer personalized video consultations to guide you through specific exercises and therapy protocols from the comfort of your home." },
      ]}
      title="How My Therapy Works"
      description="Find answers to help you start your journey."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain"}}
      text="Ready to Transform Your Wellness?"
      buttons={[{ text: "Schedule your evaluation", href: "#" }]}
      className="text-center"
    />
    <div className="text-center text-sm text-foreground/60 py-4">
       *Insurance is accepted only in Florida. All international or out-of-state clients are private pay.
    </div>
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Olivia Lallouz"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Terms of Service", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}