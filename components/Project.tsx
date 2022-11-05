import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ProjectType } from '../data';
import StyledLink, { StyledLinkButton } from './StyledLink';

const Project = ({ project }: { project: ProjectType }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const { id, name, image, technologies, description, link, linkText, hasModal, modalContent } = project;

  return (
    <div
      id={id}
      className="mb-8 flex flex-col rounded-lg bg-slate-800 p-7 md:flex-row md:p-10">
      <div className="mr-10 mb-4 w-full md:mb-0 md:w-1/4">
        <Image
          src={image}
          alt="apsca dashboard"
          height="320"
          width="320"
          className="mx-auto rounded-lg md:mx-0"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="mb-3 text-2xl font-bold text-slate-300">{name}</h3>
        <div>
          {technologies.map(tech => (
            <span
              key={tech}
              className="mr-2 mb-2 inline-block bg-gray-600 px-2 text-slate-200">
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-4 mb-5 text-slate-400">{description}</p>
        {link && linkText ? (
          <div className="flex items-center">
            <StyledLink href={link} target="_blank">{linkText}</StyledLink>
            <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4 text-[#24FE41]" />
          </div>
        ) : null}
        {hasModal ? (
          <div className="flex items-center">
            <StyledLinkButton onClick={() => setOpen(!open)}>{linkText}</StyledLinkButton>
          </div>
        ) : null}
      </div>

      {hasModal && modalContent?.title ? (
        <Transition.Root
          show={open}
          as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                  <Dialog.Panel className="relative min-h-[calc(100vh-100px)] transform overflow-hidden rounded-lg bg-slate-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6">
                    <div className="absolute top-0 right-0 z-50 block sm:pt-4 sm:pr-4 pt-2 pr-2">
                      <button
                        type="button"
                        className="cursor-pointer rounded-md text-slate-300 hover:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:ring-offset-1"
                        onClick={() => setOpen(false)}>
                        <span className="sr-only">Close</span>
                        <XMarkIcon
                          className="h-7 w-7"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <h2 className="-translate-y-6 sm:pt-10 pt-16 text-center text-4xl font-black capitalize text-slate-300 md:text-5xl">{modalContent.title}</h2>
                    <p className="mx-auto mb-20 w-full text-center text-lg text-slate-400 md:w-3/4">{modalContent.description}</p>

                    {modalContent.items.map(item => (
                      <div
                        key={item.id}
                        className="mx-auto mb-20 w-full text-slate-400 md:max-w-3xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          height="700"
                          width="700"
                          className="mb-8 rounded-md"
                        />
                        <p className="mb-3 text-xl font-bold text-slate-300">{item.name}</p>
                        <div className="mb-5">
                          {item.technologies &&
                            item.technologies.map(tech => (
                              <span
                                key={tech}
                                className="mr-2 mb-2 inline-block bg-gray-600 px-2 text-slate-200">
                                {tech}
                              </span>
                            ))}
                          <p className="pt-3 leading-8">{item.description}</p>
                        </div>
                        {item.link ? (
                          <div className="mb-2">
                            <StyledLink
                              href={item.link}
                              target="_blank">
                              {item.linkText}
                              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4 text-[#24FE41]" />
                            </StyledLink>
                          </div>
                        ) : null}
                        {item.editLink ? (
                          <div className="mb-2">
                            <StyledLink
                              href={item.editLink}
                              target="_blank">
                              {item.editLinkText}
                              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4 text-[#24FE41]" />
                            </StyledLink>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      ) : null}
    </div>
  );
};

export default Project;
