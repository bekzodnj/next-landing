import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import image2 from "../public/images/bg_1.jpg";

export default function FeaturesAccordion() {
  return (
    <section className="container mx-auto bg-white py-14 sm:py-20">
      <div className="mx-auto mb-4 max-w-2xl sm:mb-16 lg:text-center">
        <h2 className="text-center text-base font-semibold leading-7 text-orange-600">
          OUR SERVICES
        </h2>
        <h3 className="text-center text-lg font-semibold leading-8 text-gray-900">
          We have the experience you can trust
        </h3>
      </div>
      <div className="flex h-[400] w-full flex-col items-center gap-x-10 gap-y-4 sm:flex-row">
        <Image
          src={image2}
          alt="Car"
          //   width={300}
          //   height={200}
          //   placeholder="blur"
          className="w-full sm:w-1/2"
        />

        <div id="accordion" className="w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>This is an item two</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres
                to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                It is going to be an epic stack
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres
                to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                It is going to be an epic stack
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres
                to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
