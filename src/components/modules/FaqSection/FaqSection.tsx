import { faqData } from "@/src/data/faqData";
import { FaqDisclosure } from "@/src/components/elements";

const FaqSection = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-5xl font-semibold mb-[22px]">FAQ</h2>
      <div className="flex flex-col gap-9">
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
