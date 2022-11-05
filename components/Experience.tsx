import Image from 'next/image';
import type { ExpType } from '../data/index';

const Experience = ({ experience }: { experience: ExpType }) => {
  const { position, duration, years, company, companyImage, location, technologies, points } = experience;
  return (
    <div className="relative mb-24 flex flex-col pl-4">
      <div className="absolute -left-[42px] h-8 w-8 overflow-hidden rounded-full">
        <Image src={companyImage} alt={company} height="20" width="20" className="bg-slate-300 rounded-full h-10 w-10 text-center" />
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <h3 className="mb-2 text-2xl font-bold tracking-wide text-slate-200">{position}</h3>
        <div className="flex flex-col sm:flex-row">
          <time className="ml-0 mb-1 text-xs uppercase tracking-wide dark:text-gray-400 md:ml-5">{duration}</time>
          <p className="sm:ml-3 mb-1 text-xs uppercase tracking-wide dark:text-gray-400">{years}</p>
        </div>
      </div>

      <p className="mb-1 text-lg font-bold">
        {company} - {location}
      </p>
      <div className="mt-1">
        {technologies.map(tech => (
          <span
            key={tech}
            className="mr-2 mb-2 inline-block bg-gray-600 px-2 text-slate-200">
            {tech}
          </span>
        ))}
      </div>
      <ul className="">
        {points.map(point => (
          <li
            key={point.key}
            className="relative mt-5 flex items-start">
            <div className="absolute -left-[50px] mt-2 mr-4 h-3 w-3 flex-none rounded-full bg-[#24FE41]" />
            <p className="text-slate-400">{point.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;