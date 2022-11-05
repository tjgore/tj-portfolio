import Image from 'next/image';
import { ReviewType } from '../data';

const Review = ({ review }: { review: ReviewType }) => {
  const { body, name, jobTitle, avatar } = review;
  return (
    <div className="flex flex-col mb-10">
      <div className="mb-6 flex">
        <div>
          <svg
            className="mr-5 text-slate-800"
            height="30"
            width="30"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M21.66145,33.81676c0,4.29661-3.96109,8.22346-8.91304,8.22346C4.56585,42.04022,1,35.98671,1,27.90615 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916C14.10766,12.9954,8.88433,17.58691,8.14413,25.28492h2.89106 c3.09587,0,6.31198,0.4991,8.45903,2.72402C21.02498,29.59761,21.66145,31.62025,21.66145,33.81676z M47,33.81676 c0,4.29661-3.96109,8.22346-8.91304,8.22346c-8.18256,0-11.74842-6.05352-11.74842-14.13408 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916c-6.98843,3.38646-12.21176,7.97797-12.95195,15.67598 c3.15316,0,5.76908-0.11425,8.09925,0.71955C45.21084,27.30299,47,30.10812,47,33.81676z"
                fill="currentColor"></path>
            </g>
          </svg>
        </div>
        <p className="text-lg text-slate-400">{body}</p>
      </div>
      <div className="flex items-center pl-12">
        {avatar ? <Image
          src={avatar}
          alt="Greg"
          width="60"
          height="60"
          className="mr-6 rounded-full"
        />: <div className="flex-none rounded-full h-[60px] w-[60px] bg-slate-500 mr-6" />}
        <div>
          <p className="font-bold text-slate-300">{name}</p>
          <p className="text-slate-300">{jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
