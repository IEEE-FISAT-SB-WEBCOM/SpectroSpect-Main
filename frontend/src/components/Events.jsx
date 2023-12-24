import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Event = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 250;

      setIsSticky(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Breadcrumbs and Header */}
      <Navbar/>
      <div className="flex flex-col lg:flex-row text-white min-h-screen items-center justify-center">
        <div className="md:w-3/4  mt-5 md:mt-32 lg:mr-8 px-3 py-3">
          <div className={`flex md:flex-row flex-col  top-0 pt-5 sticky ${isSticky? ' relative rounded-md overflow-hidden bg-gradient-to-b  from-green18774F to-transparent backdrop-blur-sm bg-opacity-10' : 'bg-inherit'}`}>
            <div className="md:w-3/4 sm:w-full flex sm:flex-col items-center justify-center align-middle   ">
              <div aria-label="Breadcrumb" className=" md:flex md:self-start hidden">
                <ol className="flex items-center gap-1 text-sm bg-inherit border-0 text-white font-bold">
                  <li>
                    <a
                      href="/"
                      className="block transition hover:text-green-400"
                    >
                      <span className="sr-only"><Link to="/"> Home</Link> </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="rtl:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block transition hover:text-green-400"
                    >
                      {" "}
                      Events{" "}
                    </a>
                  </li>

                  <li className="rtl:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block transition text-green-400 hover:text-green-400"
                    >
                      Brainwave Robotics Workshop{" "}
                    </a>
                  </li>
                </ol>
              </div>

              <h6 className="text-7xl font-bold my-6">
                Brainwave Robotics Workshop
              </h6>
            </div>
            <div className="w-full md:w-1/4 pb-5 md:pb-0 flex items-center justify-start md:justify-end align-middle">
              <button
                href="#_"
                className="relative inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Register
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full h-72 bg-white rounded-md my-8 lg:my-20"></div>
          <div className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            aperiam aut dolorem repellat cum totam architecto. Quo ipsum,
            excepturi voluptas debitis eos inventore fuga reiciendis illo
            asperiores quasi tenetur earum tempore placeat odit repellendus
            rerum eius. Eum veniam ipsum voluptate ea minima porro vitae numquam
            minus error delectus tenetur voluptatem nobis, doloribus inventore
            eos debitis eligendi dolorum obcaecati ipsam maxime! Ipsum
            molestiae, voluptatum voluptatibus cum ad aliquam, labore incidunt
            earum vero fugit aperiam aliquid quaerat enim! Natus consequuntur,
            sit incidunt harum laudantium laboriosam ex eius illum omnis
            blanditiis necessitatibus totam nemo animi repudiandae ipsum
            voluptate reiciendis similique eveniet culpa numquam. Accusantium
            repellendus consequatur et amet numquam quidem quo alias,
            necessitatibus eveniet nemo voluptatibus consequuntur voluptatem
            odit magni pariatur soluta laboriosam hic aliquam deserunt tenetur
            sunt, non quas. Eaque veritatis deleniti nemo eos nesciunt vitae?
            Molestias ea possimus atque, nobis cupiditate ab. Laboriosam aut vel
            molestias deserunt voluptatem inventore placeat quas doloremque unde
            fugiat aliquam accusamus ducimus magnam beatae corrupti harum ipsa,
            atque iste, vero illo, quia consequuntur dolore odit! Dignissimos
            delectus voluptate, tenetur blanditiis voluptas laudantium optio
            exercitationem et minima nam maiores nemo consequatur rerum
            assumenda omnis vitae repudiandae impedit tempore corrupti!
            Perferendis minima, maxime sint dolores fuga magni possimus. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Nihil iusto
            ipsum sequi soluta, magni debitis doloribus voluptatibus accusamus
            dolorum consequatur fugit, quaerat velit ab quia qui asperiores eius
            voluptates quisquam!
          </div>

          {/* Perks section */}
          <div className="flex text-xl lg:text-2xl font-bold items-center mt-6">
            <MdArrowOutward className="text-green-400 text-xl lg:text-2xl mr-3" />
            Perks
          </div>
          <div className="text-lg lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            nisi dolore sequi corrupti ipsam beatae vero, magni numquam laborum
            aspernatur quis, eius ratione illo praesentium.
          </div>

          {/* Our Speakers section */}
          <div className="flex text-xl lg:text-2xl font-bold items-center mt-6">
            <MdArrowOutward className="text-green-400 text-xl lg:text-2xl mr-3" />
            Our Speakers
          </div>

          {/* Speaker Section */}
          <div className="flex flex-col lg:flex-row w-full mt-4">
            {/* Speaker image */}
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <div className="block rounded-lg p-4">
                <img
                  alt="Speaker"
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="font-medium">Marine Gwenddydd</dd>
                      <div>
                        <dd className="text-sm text-gray-500">
                          Managing Director
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Speaker description */}
            <div className="w-full lg:w-3/4 lg:ml-4 h-56 rounded-lg box-border border-gray-800 border flex items-center px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              optio delectus velit earum qui, dicta excepturi voluptas beatae
              tenetur inventore harum recusandae, placeat minus dignissimos
              doloribus quo voluptate debitis consectetur vel reprehenderit
              molestiae. Optio omnis quis, ex, laudantium reiciendis eveniet
              officiis maiores aut error earum mollitia at perspiciatis sint
              soluta.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
