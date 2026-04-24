"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
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
        { name: "Bio", id: "#about" },
        { name: "Services", id: "#features" },
        { name: "Reviews", id: "#testimonials" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Olivia Lallouz"
      button={{ text: "Start Your Evaluation", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "plain"}}
      title="Breathe Better. Sleep Deeper. Live Beautifully."
      description="Olivia Lallouz • Orofacial Myologist"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776966178389-c97cn8rw.png"
      imageAlt="Olivia Lallouz"
      buttons={[{ text: "Start Your Evaluation", href: "#contact" }]}
      buttonClassName="bg-primary text-primary-foreground font-bold"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Olivia Lallouz, MS, CCC-SLP | Qualified Orofacial Myologist | PhD Candidate"
      metrics={[
        { label: "Board Certified SLP/QOM", value: "", icon: Sparkles },
        { label: "Neurorehabiliation ", value: "", icon: Wind },
        { label: "Evidence-Based ", value: "", icon: Moon },
      ]}
      metricsAnimation="blur-reveal"
    />
    <div className="max-w-3xl mx-auto py-12 px-6 text-foreground/80 leading-relaxed">
       <p className="mb-6">I am a board certified speech-language pathologist and qualified orofacial myologist (QOM) currently pursuing a PhD in Biomedical Sciences, with a research focus on neurological functions, disorders, particularly the assessment and progression in conditions such as ALS, ADHD, Sleep disorders, and orofacial myofunctional disorders. My work bridges clinical practice and translational research. </p>
       <p className="mb-6">With extensive clinical experience across hospitals, outpatient clinics, and interdisciplinary care teams, I specialize in the diagnosis and treatment of speech, language, swallowing, and cognitive impairments resulting from neurological injury, disease, and dysfunction. I bring a strong foundation in evidence-based care, and am skilled in integrating clinical assessment with objective diagnostic tools to support comprehensive, individualized treatment planning. My passion lies at the intersection of neurorehabilitation, orofacial myology, and research innovation. I am dedicated to improving quality of life through both direct patient care and research that informs and elevates clinical standards.</p>
    </div>
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Benefits of Myofunctional Therapy"
      description="My evidence-based myofunctional therapy protocols are tailored to your specific facial structure and habits, ensuring professional, reliable care for bite alignment and sleep optimization."
      accordionItems={[
        { id: "1", title: "Eliminate Sleep-Disrupting Mouth Breathing", content: "Wake up refreshed by eliminating sleep-disrupting mouth breathing through optimized airway function." },
        { id: "2", title: "Resolve Chronic Jaw Tension", content: "Restore proper jaw positioning and eliminate tension through specialized myofunctional techniques that target the root cause of grinding." },
        { id: "3", title: "Optimize Daily Breathing Efficiency", content: "Transform your daily breathing habits by reinforcing nasal breathing to support your long-term wellness and vitality." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776988556675-epe5pvgv.png"
      mediaAnimation="blur-reveal"
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
        { id: "1", name: "Matthew L.", role: "Client", testimonial: "Olivia has been the light I have been looking for... I have been doing myofunctional therapy with Olivia and it has been nothing short of the most ideal experience.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/tmp/tongue-posture-1776988110203-51a65b4a.png" },
        { id: "2", name: "Max M.", role: "Client", testimonial: "Olivia and her team have been amazing. From the start, they've been incredibly kind, professional, and genuinely invested in helping.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776988298056-jjm1ubse.webp" },
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
        { id: "q3", title: "How long until I see results?", content: "While individual progress varies, most clients begin to notice subtle improvements in muscle awareness and comfort within the first 3-4 weeks of consistent practice." },
        { id: "q4", title: "What is the scientific foundation of your therapy?", content: "My approach is grounded in peer-reviewed neurorehabilitation research and orofacial myofunctional principles, integrating objective diagnostic metrics to ensure evidence-based, clinically validated care." },
        { id: "q5", title: "What credentials support your practice?", content: "I am a board-certified Speech-Language Pathologist and Qualified Orofacial Myologist (QOM) currently pursuing a PhD in Biomedical Sciences, ensuring that every therapeutic intervention is backed by the latest clinical research and scientific advancements in the field." }
      ]}
      title="How My Therapy Works"
      description="Find answers to help you start your journey."
      buttons={[{ text: "Book your consultation", href: "#contact" }]}
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
    <div className="max-w-xl mx-auto text-center text-sm text-foreground/80 py-8 space-y-2">
        <p className="font-semibold">On-site services at Specialized Speech Center</p>
        <p>3335 N University Dr #5, Hollywood, FL 33024</p>
        <p>Phone: (954) 442-9422 | Email: olivia@specializedspch.com</p>
        <p className="pt-2">Zoom telehealth sessions available.</p>
        <p className="pt-4">*Insurance is accepted only in Florida. All international or out-of-state clients are private pay.</p>
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