interface IFaqData {
  id: number;
  question: string;
  answer: string;
}

export const faqData: IFaqData[] = [
  {
    id: 1,
    question: `How can I purchase license keys for games on your website?`,
    answer: `You can purchase license keys by adding the selected products to the cart and following the order instructions.`,
  },
  {
    id: 2,
    question: `What is the process of obtaining a key after purchase?`,
    answer: `After successful payment, you will receive an email with detailed information about the order, including license keys that you can activate.`,
  },
  {
    id: 3,
    question: `Is it guaranteed that the keys purchased on your website will work?`,
    answer: `Yes, we guarantee that all the keys sold on our site are licensed, and we provide support in case of activation problems.`,
  },
  {
    id: 4,
    question: `What payment methods do you accept?`,
    answer: `We accept various payment methods, such as credit cards, e-wallets and other popular payment systems. You will find detailed information on the checkout page.`,
  },
  {
    id: 5,
    question: `Is there a refund or exchange for purchased license keys?`,
    answer: `We provide the option of returning or exchanging license keys in accordance with our refund policy. Details can be found on our website in the "Refund Policy" section.`,
  },
];
