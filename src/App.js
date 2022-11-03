import { useState } from "react";

export default function App() {
  const [modal, setModal] = useState(undefined);
  const clickArena = () =>
    setModal([
      "Click Arena",
      [
        require("./clickarena.png"),
        require("./clickarena2.png"),
        require("./clickarena3.jpg"),
      ],
    ]);
  const clickSketchMates = () =>
    setModal(["Sketchmates", [require("./sketchmates.png")]]);
  return (
    <>
      {modal && <Modal modal={modal} setModal={setModal} />}
      <div className="max-w-3xl fixed z-50 h-[265px] w-full bottom-0 left-0 bg-red flex justify-center items-center">
      <img className="w-[200px] select-none" src={require('./sim.png')} />
    
      </div>
        <div className="bg-gray-900 p-10 max-w-3xl ">
     
          <h1 className="text-white text-3xl">
            Hi! I'm Simon Madsen 🙋🏼‍♂️ - Software Developer
            <br /> ⌨
          </h1>
          <p className="text-gray-200  mt-2 text-sm leading-6">
            Hello there, and welcome to my website. My name is Simon. I see
            myself as a passionated programmer. I have been programming in many
            languages and varied my programming style several times over the
            years <br />
            Programming is a hobby to me. I love to explore new ideas, languages
            & discuss different solutions in my free time. In my opinion, we
            should try to, challenge the defaults and explore new ways to solve
            problems.
          </p>
          <h2 className="mt-5 text-gray-200 text-lg font-semibold">
            My personal stuff 🥳
          </h2>
          <p className="text-gray-200 text-sm max-w-3xl leading-6">
            I'm living in Odense with my girlfriend and our little girl Ella. I
            enjoy going to the gym first thing in the morning. The rest of my
            free time is used with my family and friends.
          </p>
          <h2 className="mt-5 text-gray-200 text-lg font-semibold">
            My current Hobby stack 🏡
          </h2>
          <p className="text-gray-200 mt-1 text-sm max-w-3xl leading-6">
            📱 React Native - with expo.
            <br /> 💻 Next JS - with typescript.
            <br /> 🦀 Rust - with Async Grapql, database from planetscale(good
            old mysql) & hosted at fargate aws. <br />
            🔨 Github action as pipeline/gitops. <br />
            👨🏼‍🎨 Tailwindcss ❤️
            <br />
            All clients using codegen, to generate types for the rust graphql
            server.
          </p>
          <h2 className="mt-5 text-gray-200 text-lg font-semibold">
            My current stack at work (TV2)🧑🏼‍💻
          </h2>
          <p className="text-gray-200 mt-1 text-sm max-w-3xl leading-6">
            💻 Next JS - with typescript.
            <br />
            📟 Node.js - Apollo Graphql <br />
            🤷‍♂️ Kubernets - in aws eks. <br />
            🤷‍♂️ Argo - for pod deployments. <br />
            🤷‍♂️ github action
            <br />
            🤷‍♂️ tailwindcss
          </p>
          <h2 className="mt-5 text-gray-200 text-lg font-semibold">
            My utils ⚒️
          </h2>
          <p className="text-gray-200 text-sm max-w-3xl leading-6">
            Macbook - VSCode - Vim Motion - gruvbox theme
          </p>
          <h2 className="mt-5  text-gray-200 text-2xl font-semibold">
            Here is a brief overview of my programming journey
          </h2>
          <ol class="relative mt-2 border-l border-gray-200 dark:border-gray-700 ml-[-1rem]">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                now
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Play Web & Big screens TV2
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Enjoying being a part of the PWBS Teams at TV2 working on
                play.tv2.dk, checkout.tv2.dk, mit.tv2.dk & help build a brand
                new app for Samsung and LG smart TVs. <br />
                <br />
                <span className="font-bold text-white text-sm">
                  Current Hobby projects:
                   </span>{" "} <br />
                   🕸️📱 Wip: Work in progress is my fitness app. Build for Web, iOS & Android with React Native, React & Rust.<br />
                  📀 Sunsun:  My data collection summer project, where I'm collecting weather forecasts and observations to decide who brings the best weather forecasts. Build with Rust, AWS scheduler, AWS Fargate.

              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2020
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Codespace
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Starting my own Business with a co-worker from Exotech.
                <br /> Building Mobile Applications using React Native and AWS
                Serverless.
                <br /> <br />
                <span className="font-bold text-white text-sm">
                  Biggest projects:
                </span>{" "}
                <br />
                📱 Thirsty: Mobile Application to help nightclub owners promote,
                sell and engage with their customers. Build for Android & iOS
                with React Native, Node.js, AWS Serverless <br />
                📱 KeepItSimple: Mobile Application to help people fight
                addictions and find open meetings. Build for Android & iOS with
                React Native, Node.js, AWS Serverless <br />
                🕸️ Kintella: Web Application to help nursing homes, with connecting next of kin & their residents. Build for Web with NextJS, AWS
                Serverless.
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2018
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Exotech & Appinto
              </h3>

              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Started a small App company (Appinto) with a friend, doing our
                own projects. While still working for Exotech. <br />
                <br />
                <span className="font-bold text-white text-sm">
                  Biggest projects:
                </span>{" "}
                <br />
                📱 Click Arena (Appinto): Mobile Game. Build for iOS with Swift
                & Node.js.{" "}
                <span
                  className="font-bold text-slate-300 text-sm cursor-pointer"
                  onClick={clickArena}
                >
                  📸 Images
                </span>{" "}
                <br />
                📱 SketchMates (Appinto): Mobile Game. Build for iOS with Swift
                & Node.js.{" "}
                <span
                  className="font-bold text-slate-300 text-sm cursor-pointer"
                  onClick={clickSketchMates}
                >
                  📸 Images
                </span>{" "}
                <br />
                💻 Bubobubo (Exotech): a purchasing system for schools and other
                institutions. Build for windows with Delphi
                <br />
                💻 Car Workshop bn.dk (Exotech): Windows Application to manage mechanics and cars in the workshop. Build for Windows with
                Delphi.
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2016
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Exotech
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Working for Exotech, creating and maintaining windows applications. <br /> <br />
                <span className="font-bold text-white text-sm">
                  Biggest project:
                </span>{" "}
                <br />
                📱 EQS: Mobile Application to help plumbers coordinate and report
work. Build for Android & iOS with Delphi.
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2015
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Computer Science Specialist AP Degree
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Writing C# in school and making Laravel sites as a side hustle.

                <span className="font-bold text-white text-sm">
                  Biggest projects:
                </span>{" "}
                <br />
                🕸️ Byggesmart: Website to help people find a craftsman. (get 3 offers website). Build for web with PHP (Laravel) <br />
                🕸️ Bilagent: Autouncle clone. Build for web with PHP (Laravel). 
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2013
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Webintegrator (PHP, AJAX, Codeigniter)
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Programming websites in basic HTML, CSS, and PHP. WordPress &
                Codeigniter all day.
              </p>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2011
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white"></h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Creating static HTML/CSS websites, everytime our counter-strike
                clan changed name.
              </p>
            </li>
            <li class="ml-4 mb-[200px]">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                -
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white"></h3>
            </li>
          </ol>
        </div>
    </>
  );
}

function Modal({ modal, setModal }) {
  return (
    <div
      id="defaultModal"
      tabindex="-1"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center content-center items-center bg-slate-900/90"
    >
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {modal[0]}
            </h3>
            <button
              type="button"
              onClick={() => setModal(undefined)}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-6 overflow-x-scroll h-[500px] flex flex-row ">
            {modal[1].map((image) => (
              <img src={image} className="w-[200px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
