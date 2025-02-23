import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Heftix?",
    answer: "Heftix is a CRM platform tailored for psychiatrists, offering tools for appointments, client management, analytics, and telehealth."
  },
  {
    question: "Is my data secure on Heftix?",
    answer: "We are fully HIPAA-compliant, ensuring the highest levels of data security and confidentiality."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can switch plans at any time to suit your practice's needs."
  },
  {
    question: "Does Heftix offer a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features."
  },
  {
    question: "Can Heftix be customized for my clinic?",
    answer: "Yes, our Enterprise Plan includes customizable workflows and branding options."
  }
]

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

