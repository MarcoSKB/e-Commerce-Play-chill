import { faqData } from "@/src/data/faqData";
import { FaqDisclosure } from "@/src/components/elements";

const FaqSection = () => {
  return (
    <div className="flex flex-col mb-5 md:mb-8 lg:mb-11">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-[26px] md:mb-[22px]">
        FAQ
      </h2>
      <div className="flex flex-col gap-[10px] md:gap-6 lg:gap-9">
        {faqData.map((faq) => (
          <FaqDisclosure
            key={faq.id}
            title={faq.question}
            description={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
