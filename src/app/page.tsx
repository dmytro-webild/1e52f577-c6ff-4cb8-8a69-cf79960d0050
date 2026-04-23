"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Moon, Sparkles, Wind, User } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
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
      button={{ text: "Book Consultation", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "radial-gradient"}}
      title="Transform Your Bite • Breathe Better • Sleep Deeper"
      description="Optimize your bite, breathing, and sleep through personalized myofunctional therapy designed to reclaim your facial wellness and vitality."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-modern-styled-entryway_23-2150692369.jpg", imageAlt: "Wellness Studio" },
        { imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-typing-laptop_23-2148304954.jpg", imageAlt: "Wellness Studio" },
        { imageSrc: "http://img.b2bpic.net/free-photo/modern-interior-with-designer-chair-near-full-length-window_1163-3800.jpg", imageAlt: "Wellness Studio" },
        { imageSrc: "http://img.b2bpic.net/free-photo/serene-minimalist-poolside-retreat-meditation-space_23-2151935111.jpg", imageAlt: "Wellness Studio" },
        { imageSrc: "http://img.b2bpic.net/free-photo/minimal-amazing-interior-design_23-2150534500.jpg", imageAlt: "Wellness Studio" },
        { imageSrc: "http://img.b2bpic.net/free-photo/serene-minimalist-spa-pool-meditation-space_23-2151935126.jpg", imageAlt: "Wellness Studio" },
      ]}
      rightCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776964335340-auiig8s9.png?_wi=1", imageAlt: "Olivia Lallouz" },
        { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-nurse_23-2151061663.jpg", imageAlt: "Olivia Lallouz" },
        { imageSrc: "http://img.b2bpic.net/free-photo/specialist-leading-meeting-with-medical-team-discuss-treatment-service_482257-106971.jpg", imageAlt: "Olivia Lallouz" },
        { imageSrc: "http://img.b2bpic.net/free-photo/blonde-pretty-doctor-sitting-her-place-office_259150-60614.jpg", imageAlt: "Olivia Lallouz" },
        { imageSrc: "http://img.b2bpic.net/free-photo/pleased-tilting-head-middle-aged-man-wearing-white-t-shirt-with-tie-crossing-hands-isolated-orange-wall_141793-103462.jpg", imageAlt: "Olivia Lallouz" },
        { imageSrc: "http://img.b2bpic.net/free-photo/happy-beautiful-blonde-woman-wearing-white-shirt-standing-co-working-space-leaning-desk_74855-15151.jpg", imageAlt: "Olivia Lallouz" },
      ]}
      buttons={[{ text: "Book Your Consultation", href: "#contact" }]
      }
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/confident-businessman_1098-16876.jpg", alt: "Happy Client" },
        { src: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1604.jpg", alt: "Happy Client" },
        { src: "http://img.b2bpic.net/free-photo/young-beautiful-business-woman-gray-background_1303-23146.jpg", alt: "Happy Client" },
        { src: "http://img.b2bpic.net/free-photo/confident-young-man-shirt-tie-adjusting-his-necktie_93675-135586.jpg", alt: "Happy Client" },
        { src: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-sitting-desk-table-business-company-office_482257-16773.jpg", alt: "Happy Client" },
      ]}
      avatarText="Join 100+ transformed clients"
      marqueeItems={[
        { type: "text", text: "Bite Alignment" },
        { type: "text", text: "Sleep Quality" },
        { type: "text", text: "Breathing Wellness" },
        { type: "text", text: "Facial Structure" },
        { type: "text", text: "Myofunctional Therapy" },
      ]}
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
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Comprehensive Therapy & Care"
      description="From bite alignment to sleep optimization, my sessions are tailored to your specific facial structure and habits."
      accordionItems={[
        { id: "1", title: "Wake Up Refreshed", content: "Improve your sleep quality through optimized breathing patterns and orofacial function." },
        { id: "2", title: "Restore Jaw Comfort", content: "Restore proper jaw positioning and eliminate tension through specialized myofunctional techniques." },
        { id: "3", title: "Breathe With Ease", content: "Learn techniques that transform how you breathe, supporting overall wellness and vitality." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-woman-sitting-with-closed-eyes_23-2148897916.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Course", name: "Myofunctional Foundation", price: "$150", rating: 5, reviewCount: "24", imageSrc: "http://img.b2bpic.net/free-photo/medic-equipment-desk_23-2148519752.jpg" },
        { id: "p2", brand: "Course", name: "Better Sleep Blueprint", price: "$195", rating: 5, reviewCount: "18", imageSrc: "http://img.b2bpic.net/free-vector/creative-hand-drawn-tree-yoga-gym-our-services-flyer_742173-1347.jpg" },
        { id: "p3", brand: "Course", name: "Jaw Tension Relief", price: "$120", rating: 4, reviewCount: "32", imageSrc: "http://img.b2bpic.net/free-photo/staistics-business-strategy-planning-research-digital-tablet-concept_53876-26413.jpg" },
        { id: "p4", brand: "Course", name: "Habit Transformation Kit", price: "$250", rating: 5, reviewCount: "45", imageSrc: "http://img.b2bpic.net/free-photo/blue-notebook-with-dumbbells_23-2148531494.jpg" },
        { id: "p5", brand: "Course", name: "Advanced Orofacial Wellness", price: "$300", rating: 5, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-choosing-recipe-from-internet_23-2147809496.jpg" },
        { id: "p6", brand: "Course", name: "Daily Habit Routine", price: "$85", rating: 4, reviewCount: "60", imageSrc: "http://img.b2bpic.net/free-photo/think-outside-box-concept_53876-133687.jpg" },
      ]}
      title="Curated Wellness Courses"
      description="Access my specialized programs designed to help you build essential habits for lasting change."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
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
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Matthew L.", role: "Client", testimonial: "Olivia has been the light I have been looking for... I have been doing myofunctional therapy with Olivia and it has been nothing short of the most ideal experience.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776964335340-auiig8s9.png?_wi=2" },
        { id: "2", name: "Max M.", role: "Client", testimonial: "Olivia and her team have been amazing. From the start, they've been incredibly kind, professional, and genuinely invested in helping.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776964335340-auiig8s9.png?_wi=3" },
        { id: "3", name: "Kyle S.", role: "Client", testimonial: "Treatment with Olivia has truly been a game changer for me. I came in for orofacial myofunctional therapy and from the very first visit, I felt comfortable.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776964335340-auiig8s9.png?_wi=4" },
        { id: "4", name: "Sarah J.", role: "Client", testimonial: "I have already noticed significant improvements in how my tongue rests and how I breathe. It is truly life-changing.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776964335340-auiig8s9.png?_wi=5" },
        { id: "5", name: "Elena R.", role: "Client", testimonial: "So professional, thorough, and supportive throughout the entire process. Highly recommend!", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ClWbrS92bXmt7LmjB3TsGBCnuR/uploaded-1776964335340-auiig8s9.png?_wi=6" },
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
        { id: "q3", title: "Who benefits from this therapy?", content: "You can expect lasting relief from chronic jaw tension and improved sleep quality; anyone dealing with bite issues, jaw tension, mouth breathing, or sleep disturbances can benefit significantly." },
        { id: "q4", title: "How long until I see results?", content: "Progress is personal. We will discuss your specific goals and create a personalized plan during your first consultation to ensure you see steady, sustainable results." },
      ]}
      title="Common Questions"
      description="Find answers to help you start your journey."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready to Transform Your Wellness?"
      buttons={[{ text: "Book Your Consultation", href: "#" }]}
    />
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