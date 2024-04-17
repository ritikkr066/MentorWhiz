// import FaqItem from '../components/FaqItem';
import FaqItem from "./FeedbackCard";

const faqs = [
  {
    question: 'What is Lorem Ipsum?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    question: 'Why do we use it?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'What is Lorem Ipsum?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    question: 'Why do we use it?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'What is Lorem Ipsum?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    question: 'Why do we use it?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  // Add more FAQ items as needed
];

const FAQSection=()=> {
  return (
    <div className="max-w-3xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
