import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

function FAQ() {
  return (
    <section id="faq" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Quick answers to help you get the most out of our app.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-primary-100/80 p-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-4 text-left">
              Is the app free to use?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Yes! We offer a free plan for individuals and small teams. Paid
              plans unlock more features for scaling businesses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-4 text-left">
              Can I assign multiple employees to one job?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Absolutely. Create jobs and assign multiple team members with
              roles and time tracking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-4 text-left">
              Does it work on mobile and desktop?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Yes, access your dashboard on desktop and our mobile apps for iOS
              and Android.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="px-4 text-left">
              Is GPS tracking always on?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Location permissions are transparent and configurable. Tracking is
              only active during jobs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;