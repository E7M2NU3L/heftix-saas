import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { AnimatedTextShiny } from "../text-variants/animated-text";
  
  const faqs = [
    {
      question: "Is Heftix HIPAA compliant?",
      answer: "Yes, Heftix is fully HIPAA compliant. We use state-of-the-art encryption and security measures to ensure that all patient data is protected in accordance with HIPAA regulations."
    },
    {
      question: "Can I integrate Heftix with my existing EHR system?",
      answer: "Heftix offers integration capabilities with many popular EHR systems. Our Pro and Enterprise plans include this feature, and our team can assist you with the integration process."
    },
    {
      question: "How does the AI-driven analytics work?",
      answer: "Our AI-driven analytics use advanced machine learning algorithms to analyze client reports and provide insights. It can identify patterns, suggest potential diagnoses, and help track treatment progress over time."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans. You can sign up and explore all the features of Heftix without any commitment."
    }
  ]
  
  export default function FAQ() {
    return (
      <section id="faq" className="py-20 relative px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto max-w-7xl">
          <AnimatedTextShiny text="FAQs" />
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Heftix. Can&spos;t find what you&apos;re looking for? Get in touch with us.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg mb-4 shadow-sm">
                <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }