import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { experience, projects, reviews, faqs } from '../data';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Review from '../components/Review';
import Faq from '../components/Faq';
import StyledLink from '../components/StyledLink';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-900 font-sans leading-relaxed text-white">
      <Head>
        <title>TJ Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I'm TJ Gore, a full-stack developer with over 7 years of experience and I am passionate about web development."
        />
        <meta
          name="keywords"
          content="portfolio, web developer, full-stack developer"
        />
        <meta
          content="TJ Gore&#39;s Portfolio"
          property="og:site_name"
        />
        <meta
          content="TJ Gore&#39;s Portfolio"
          property="og:title"
        />
        <meta
          content="https://portfolio.us-east-1.linodeobjects.com/tj-logo.png"
          property="og:image"
        />
        <meta
          content="website"
          property="og:type"
        />
        <meta
          content="https://tjwgore.com"
          property="og:url"
        />
        <meta
          content="hello@tjwgore.com"
          property="og:email"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon-32x32.png"></link>
        <script
          defer
          data-domain="tjwgore.com"
          src="https://plausible.io/js/script.js"></script>
      </Head>

      <main>
        <nav className="mx-auto flex flex-col items-center justify-between px-8 pb-4 pt-6 md:max-w-6xl md:flex-row">
          <div className="mb-4 border-2 px-4 py-2 md:mb-0">
            <p className="text-2xl font-bold text-slate-300">TJ</p>
          </div>
          <nav className="text-slate-300">
            <ul className="flex flex-wrap items-center gap-5 text-base">
              <li className="hover:text-slate-400">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:text-slate-400">
                <Link href="#exp">Experience</Link>
              </li>
              <li className="hover:text-slate-400">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="hover:text-slate-400">
                <Link href="#reviews">Reviews</Link>
              </li>
              <li className="hover:text-slate-400">
                <Link href="#faq">FAQ</Link>
              </li>
              <li className="hover:text-slate-400">
                <Link
                  href="#contact"
                  className="mr-2 mb-2 rounded-sm bg-gradient-to-r from-[#FDFC47] to-[#24FE41] px-5 py-2 text-xl font-bold text-slate-900 hover:opacity-80">
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </nav>

        <section className="mx-auto flex w-full flex-col justify-center px-8 pt-24 md:max-w-6xl">
          <div className="mx-auto md:mx-0">
            <Image
              src="https://portfolio.us-east-1.linodeobjects.com/potrait.jpg"
              alt="TJ Gore"
              width="125"
              height="125"
              className="ml-0 mb-4 h-24 w-24 rounded-full md:ml-28 md:h-32 md:w-32"
            />
          </div>
          <h1 className="bg-gradient-to-r from-[#FDFC47] to-[#24FE41] bg-clip-text text-center text-4xl font-black text-transparent sm:text-6xl md:text-7xl">
            Motivated Problem Solver
          </h1>
          <div className="mb-24 pt-6 text-center text-2xl font-medium text-slate-300 md:text-3xl">
            <p>I&apos;m TJ Gore, a full-stack developer based in Baltimore.</p>
            <p>I love creating clean and useful applications for the digital world.</p>
          </div>
          <div className="flex flex-col px-0 md:px-24">
            <div className="mb-6 flex">
              <div>
                <svg
                  className="mr-5 h-7 w-7 text-slate-800 md:mr-10 md:h-12 md:w-12"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M21.66145,33.81676c0,4.29661-3.96109,8.22346-8.91304,8.22346C4.56585,42.04022,1,35.98671,1,27.90615 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916C14.10766,12.9954,8.88433,17.58691,8.14413,25.28492h2.89106 c3.09587,0,6.31198,0.4991,8.45903,2.72402C21.02498,29.59761,21.66145,31.62025,21.66145,33.81676z M47,33.81676 c0,4.29661-3.96109,8.22346-8.91304,8.22346c-8.18256,0-11.74842-6.05352-11.74842-14.13408 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916c-6.98843,3.38646-12.21176,7.97797-12.95195,15.67598 c3.15316,0,5.76908-0.11425,8.09925,0.71955C45.21084,27.30299,47,30.10812,47,33.81676z"
                      fill="currentColor"></path>
                  </g>
                </svg>
              </div>
              <p className="text-lg text-slate-400">
                TJ is one of the very few people I personally know who&apos;s made his passion define his profession - a truly powerful combination with unimaginable outcomes! He
                checks all the boxes when it comes to hard work matched with integrity and all heart.
              </p>
            </div>
            <div className="flex items-center pl-12 md:pl-24">
              <Image
                src="https://portfolio.us-east-1.linodeobjects.com/shauna.jpeg"
                alt="Shauna"
                width="60"
                height="60"
                className="mr-6 rounded-full"
              />
              <div>
                <p className="font-bold text-slate-300">Shauna Taylor</p>
                <p className="text-slate-300">Senior Marcom Manager at ID4Africa</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full px-8 pt-40 md:max-w-6xl">
          <p
            id="about"
            className="bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 bg-clip-text text-center text-6xl font-black uppercase text-transparent opacity-50 md:text-7xl">
            GET TO KNOW
          </p>
          <h2 className="mb-10 -translate-y-6 text-center text-4xl font-black capitalize text-slate-300 sm:text-5xl md:text-5xl">More About Me</h2>

          <div className="mx-auto grid max-w-4xl gap-y-4 text-lg text-slate-400">
            <p>
              I was born and raised on the beautiful island of Antigua. I spent five years in China studying and working and have been living in the USA for the last three and a
              half years now.
            </p>
            <p>I&apos;m a full-stack developer with over 7 years of experience and I am passionate about web development.</p>
            <p>My first real world software was a small Java application used to speed up my workflow while working at CIBC First Caribbean International Bank.</p>
            <p>
              From there, I continued to push my limits and moved on to freelancing for multiple clients and working at a few awesome startups. Check out my
              <StyledLink href="#exp">work history</StyledLink>.
            </p>
            <p>
              I&apos;m hard working and love working on projects, big or small, especially when they push me to my limits. That&apos;s when adrenaline kicks in and the fun begins.
            </p>
            <p>
              Take a look at the <StyledLink href="#projects">projects</StyledLink> I&apos;ve built!
            </p>
            <p>
              Read more about me in the <StyledLink href="#faq">FAQs</StyledLink>.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full px-8 pt-40 md:max-w-6xl">
          <p
            id="exp"
            className="bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 bg-clip-text text-center text-6xl font-black uppercase text-transparent opacity-50 md:text-7xl">
            Past Career
          </p>
          <h2 className="mb-10 -translate-y-6 text-center text-5xl font-black capitalize text-slate-300 sm:text-5xl md:text-5xl">Experience</h2>

          <div className="mb-20 text-slate-400">
            <div className="relative pl-4">
              <div className="relative pl-4 before:absolute before:top-2 before:bottom-0 before:-left-3 before:w-0.5 before:bg-gray-700">
                {experience.map(exp => (
                  <Experience
                    key={exp.id}
                    experience={exp}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full px-8 pt-40 md:max-w-6xl">
          <p
            id="projects"
            className="bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 bg-clip-text text-center text-6xl font-black uppercase text-transparent opacity-50 md:text-7xl">
            Client and Side
          </p>
          <h2 className="mb-20 -translate-y-6 text-center text-5xl font-black capitalize text-slate-300 md:text-5xl">Projects</h2>

          <div>
            {projects.map(project => (
              <Project
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 mb-28 w-full px-8 pt-40 md:max-w-6xl">
          <p
            id="reviews"
            className="bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 bg-clip-text text-center text-6xl font-black uppercase text-transparent opacity-50 md:text-7xl">
            See Other
          </p>
          <h2 className="mb-20 -translate-y-6 text-center text-5xl font-black capitalize text-slate-300 md:text-5xl">Reviews</h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {reviews.map(review => (
              <Review
                key={review.id}
                review={review}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 mb-28 w-full px-8 pt-40 md:max-w-6xl">
          <p
            id="faq"
            className="bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 bg-clip-text text-center text-5xl font-black uppercase text-transparent opacity-50 md:text-7xl">
            Frequently Asked
          </p>
          <h2 className="mb-20 -translate-y-6 text-center text-4xl font-black capitalize text-slate-300 sm:text-5xl md:text-5xl">Questions</h2>
          <div className="mx-auto w-full md:w-3/4">
            {faqs.map(faq => (
              <Faq
                key={faq.id}
                faq={faq}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 mb-28 w-full px-8 pt-40 md:max-w-6xl">
          <p
            id="contact"
            className="bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 bg-clip-text text-center text-5xl font-black uppercase text-transparent opacity-50 md:text-7xl">
            Get in Touch to
          </p>
          <h2 className="mb-20 -translate-y-6 text-center text-4xl font-black capitalize text-slate-300 sm:text-5xl md:text-5xl">Say Hello or Hire</h2>

          <div className="mx-auto grid grid-cols-1 gap-10 border-b-2 border-slate-700 pb-10 text-slate-400 md:grid-cols-3">
            <div className="mx-auto">
              <p className="mb-3 text-2xl font-medium text-slate-300">Email Address</p>
              <p className="text-xl">hello@tjwgore.com</p>
            </div>
            <div className="mx-auto">
              <p className="mb-3 text-2xl font-medium text-slate-300">Phone Number</p>
              <p className="text-xl">+1-443-673-2705</p>
            </div>
            <div className="mx-auto">
              <p className="mb-3 text-2xl font-medium text-slate-300">Current Location</p>
              <p className="text-xl">Baltimore, Maryland</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 pt-12">
            <Link href="https://www.linkedin.com/in/tyndale-gore-jr-bb11b065/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="-mt-1 h-10 w-10 text-slate-400 hover:text-slate-600">
                <circle
                  cx="4.983"
                  cy="5.009"
                  r="2.188"
                  fill="currentColor"></circle>
                <path
                  d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                  fill="currentColor"></path>
              </svg>
            </Link>

            <Link href="https://github.com/tjgore">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 w-10 text-slate-400 hover:text-slate-600">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  fill="currentColor"></path>
              </svg>
            </Link>

            <Link href="mailto:hello@tjwgore.com?subject=Let's talk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 w-10 text-slate-400 hover:text-slate-600">
                <path
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"
                  fill="currentColor"></path>
              </svg>
            </Link>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-center px-4 pt-32 pb-10 text-slate-400">
          <p className="mb-2 text-lg font-bold">TJ W. GORE</p>
          <p className="text-center">&copy; Copyright 2022. Built with Next.js, Typescript, and Tailwind CSS.</p>
          <p className="text-center">Privacy-friendly Analytics from <Link href="https://plausible.io/" className="hover:text-slate-300 cursor-pointer">Plausible</Link> </p>
        </footer>
      </main>
    </div>
  );
}
