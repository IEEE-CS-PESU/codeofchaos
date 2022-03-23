import React, { useEffect, useState } from "react";
import Nav from "./NavBar";

const Home = () => {
  const calculateTimeLeft = () => {
    const difference =
      +new Date(`April 23, 2022 10:00:00 GMT+0530`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <>
      <Nav />
      <div className="text-white w-full pt-12 md:pt-32 text-center">
        <h1 className="text-[#f8a219] hidden md:block text-6xl md:text-5xl lg:text-7xl font-bold p-1 leading-20">
          IEEE Computer Society, PES University
        </h1>
        <h1 className="text-[#f8a219] md:hidden text-6xl md:text-5xl lg:text-7xl font-bold p-1 leading-20">
          IEEE Computer Society, <br /> <span className="text-3xl relative top-[-15px]">PES University</span>
        </h1>
        <h2 className="text-lg md:text-2xl pt-5 cs">presents</h2>
        <h2 className="text-6xl md:text-8xl pt-5 fff">&lt;Code of Chaos&gt;</h2>
        <h2 className="text-xl md:text-3xl pt-5 cs">at Aatmatrisha 2022</h2>
        <h5 className="text-2xl pt-12 cs">
          on <span className="underline">Saturday, 23rd April</span>{" "}
        </h5>
        <div className="flex flex-wrap justify-center md:gap-12 gap-6 pt-12">
          <div className="timer-circle">
            <div>
              <span className="countdown timer-count cs" x-text="days">
                {timeLeft.days}
              </span>
              <span className="timer-type text-2xl cs">Days</span>
            </div>
          </div>
          <div className="timer-circle">
            <div>
              <span className="timer-count cs" x-text="hours">
                {timeLeft.hours}
              </span>
              <span className="timer-type cs">Hours</span>
            </div>
          </div>
          <div className="timer-circle">
            <div>
              <span className="timer-count cs" x-text="minutes">
                {timeLeft.minutes}
              </span>
              <span className="timer-type cs">Minutes</span>
            </div>
          </div>
          <div className="timer-circle">
            <div>
              <span className="countdown timer-count cs" x-text="seconds">
                {timeLeft.seconds}
              </span>
              <span className="timer-type cs">Seconds</span>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-evenly items-center flex-col lg:flex-row pt-32">
          <div className="pb-12">
            <div class="container-glass w-24">
              <div className="h-32">
                <lottie-player
                  src="https://assets5.lottiefiles.com/private_files/lf30_yLIteV.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <p class="text-xl">
                Jack of all trades, master of none though often better than a
                master of one.
              </p>
            </div>
          </div>
          <div className="pb-12">
            <div class="container-glass w-24">
              <div className="h-32">
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_xqruuynn.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <p class="text-xl">
                Can you see through the code of chaos, and emerge king with the
                power of Hash?
              </p>
            </div>
          </div>

          <div className="pb-4 md:pb-12">
            <div class="container-glass w-24">
              <div className="h-32">
                <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_5gSzGx.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <p class="text-xl">
                Stay in the game for a chance at winning exciting prizes and
                swags, because losing isn’t an option.
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen text-black">
          <div className="mx-auto">
            <section>
              <div class="text-white pb-8">
                <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                  <div class="flex items-center flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                    <p class="ml-2 text-yellow-300 uppercase tracking-loose text-2xl pb-3">
                      Working Process
                    </p>
                    <p class="text-3xl md:text-6xl  mb-2">
                      Timeline for the event
                    </p>
                    <p class="text-sm md:text-xl text-gray-50 mb-4 pt-2">
                      Here’s your guide to the Code of Chaos 2022 process. Go
                      through all the steps to know the exact process of the
                      event.
                    </p>
                    {/* <a
                      href="/"
                      class="cursor-not-allowed bg-transparent  hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                    >
                      Register Now
                    </a> */}
                    <p
                      href="/"
                      class="cursor-not-allowed bg-transparent text-gray-400 rounded shadow hover:shadow-lg py-2 px-4 border border-gray-400"
                    >
                      Register Now
                    </p>
                    <p className="text-gray-300 pt-2">
                      *opens soon, stay tuned!
                    </p>
                  </div>
                  <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
                    <div class="container mx-auto w-full h-full">
                      <div class="relative wrap overflow-hidden p-5 h-full">
                        <div
                          class="border-2-2 border-yellow-555 absolute h-full border"
                          style={{
                            right: "50%",
                            border: "2px solid #FFC100",
                            borderRadius: "1%",
                          }}
                        ></div>
                        <div
                          class="border-2-2 border-yellow-555 absolute h-full border"
                          style={{
                            right: "50%",
                            border: "2px solid #FFC100",
                            borderRadius: "1%",
                          }}
                        ></div>
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                          <div class="order-1 w-5/12"></div>
                          <div class="order-1 w-5/12 px-1 py-4 text-right">
                            <p class="mb-3 text-2xl text-yellow-300">
                              1-3 April, 2022
                            </p>
                            <h4 class="mb-3 font-bold text-2xl md:text-5xl">
                              Registration
                            </h4>
                            <p class="text-sm md:text-xl leading-snug text-gray-50 text-opacity-100">
                              <span className="italic">
                                Hey now, you're an all-star, get your game on,
                                go play!
                              </span>{" "}
                              :)
                              <br />
                              Register in groups of two to play 5 exhilarating
                              games at the one of a kind arena by IEEE CS PESU
                            </p>
                          </div>
                        </div>
                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                          <div class="order-1 w-5/12"></div>
                          <div class="order-1  w-5/12 px-1 py-4 text-left">
                            <p class="mb-3 text-2xl text-yellow-300">
                              23rd April, 2022
                            </p>
                            <h4 class="mb-3 font-bold text-2xl md:text-5xl">
                              Participation
                            </h4>
                            <p class="text-sm md:text-xl leading-snug text-gray-50 text-opacity-100">
                              <span className="font-bold underline underline-offset-3">
                                Location
                              </span>{" "}
                              -{" "}
                              <span className="italic">
                                3rd Floor, BE Block, PES University{" "}
                              </span>
                              (Tentative) <br />
                              <span className="font-bold underline underline-offset-3">
                                Time
                              </span>{" "}
                              - <span className="italic">2:00 PM IST </span>{" "}
                              <br />
                              Registered participants will receive a
                              confirmation e-mail with other information and
                              things to carry to the venue(if any).
                            </p>
                          </div>
                        </div>
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                          <div class="order-1 w-5/12"></div>
                          <div class="order-1 w-5/12 px-1 py-4 text-right">
                            <p class="mb-3 text-2xl text-yellow-300">
                              24th April, 2022
                            </p>
                            <h4 class="mb-3 font-bold text-2xl md:text-5xl">
                              Winner Declaration
                            </h4>
                            <p class="text-sm md:text-xl leading-snug text-gray-50 text-opacity-100">
                              The top 3 ultimate genius teams will be revealed
                              on 24th April, 2022 and the results will be
                              announced on the IEEE CS PESU instagram handle and
                              whatsapp groups.
                            </p>
                          </div>
                        </div>
                      </div>
                      <img
                        class="mx-auto -mt-5"
                        src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
