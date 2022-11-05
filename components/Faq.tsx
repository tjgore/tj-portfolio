import { FaqType } from '../data';

const Faq = ({ faq }: { faq: FaqType }) => {
  const { question, answer } = faq;
  return (
    <div className="mb-12 border-b-2 border-slate-700 pb-5 text-slate-400">
      <p className="mb-4 text-xl font-bold text-slate-300">{question}</p>
      <p>{answer}</p>
    </div>
  );
};

export default Faq;
