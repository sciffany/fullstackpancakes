import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { FiThumbsUp } from "react-icons/fi"
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="bg-gray-900 px-6 py-3 justify-between text-white flex flex-row items-center">
        <div className="flex flex-row items-center">
          <img width="100px" src="/pan.png"/>
          <div className="text-5xl font-bold">
            fullstackpancakes
          </div>
        </div>
        <div className="flex flex-row space-x-6">
          <div>sciffany</div>
        </div>
      </div>
      <div className="p-6 flex flex-row min-h-[600px] bg-orange-300 w-full space-x-6">
        <div className="flex-[3_3_0%]">
          <div className="p-3 shadow-md rounded-t-md bg-gray-900 text-white">
            Programming
          </div>
          <div className="px-3 py-6 shadow-md rounded-b-md bg-white flex flex-row">
            
            <div className="flex-[1_1_0%] flex items-center justify-center flex-col text-xl">
              <FiThumbsUp className="text-5xl"/>
              1.2k
            </div>
            <div className="flex-[6_6_0%]">
              <div className="text-2xl font-bold">
                Why is my Digital Ocean Linux GUI all black now?
              </div>


              <div className="justify-between flex flex-row items-center py-3">
                <div className="space-x-1">
                  <span class="bg-gray-500 text-white text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    linux
                  </span>
                  <span class="bg-gray-500 text-white text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    digital-ocean
                  </span>
                  <span class="bg-gray-500 text-white text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    gui
                  </span>
                </div>

              </div>

              
              <div className="">
                I purchased a Digital Ocean server, and installed a GUI on it. It worked fine,
                but when I turned on the screen today, all I could see was a black screen. 
              </div>
              <div className="h-6"></div>
              <div className="font-bold">
                Answer
              </div>

              <div className="">
                Turns out I just needed to delete all my unused memory. You can follow this{" "}
                <span className="text-blue-500">link</span> to check the status of your server.
                For me, `var` was taking up a lot of space.
              </div>

              <div className="flex flex-row space-x-3 justify-end">
                <div className="text-sm text-blue-500">
                  <Link href="/users/sciffany">sciffany</Link>
                </div>
                <div className="text-sm">
                  Feb 4, 2023
                </div>
              </div>
            </div>
          </div>

          <div className="ml-10 px-3 py-6 shadow-md mt-6 rounded-md bg-white flex flex-row">
            
            <div className="flex-[1_1_0%] flex items-center justify-center flex-col text-xl">
              <FiThumbsUp className="text-3xl"/>
              1.0k
            </div>
            <div className="flex-[6_6_0%]">

              <div>
                I had the same problem, but mine was solved by checking the cache.
              </div>

              <div className="flex flex-row space-x-3 justify-end">
                  <div className="text-sm text-blue-500">
                    <Link href="/users/sciffany">pamipy</Link>
                  </div>
                  <div className="text-sm">
                    Feb 5, 2023
                  </div>
                </div>
            </div>
          </div>

          <div className="ml-10 px-3 py-6 shadow-md mt-6 rounded-md bg-white flex flex-row">
            
            <div className="flex-[1_1_0%] flex items-center justify-center flex-col text-xl">
              <FiThumbsUp className="text-3xl"/>
              200
            </div>
            <div className="flex-[6_6_0%]">

              <div>
                I still could not find the server even after searching for very long.
              </div>

              <div className="flex flex-row space-x-3 justify-end">
                  <div className="text-sm text-blue-500">
                    <Link href="/users/sciffany">nadroj135</Link>
                  </div>
                  <div className="text-sm">
                    Feb 5, 2023
                  </div>
                </div>
            </div>
          </div>


        </div>
        <div className="flex-1 bg-gray-900 text-white p-6 text-xl">
          <b>Did you just answer your own question?</b>
          <div className="mt-10">
            Document your own QnA here to help you and others learn.
          </div>
          <div className="mt-10 text-base">
            <div>Rules:</div>
            <div>1. Post here if your question was answered only after much research or thinking.</div>
            <div>2. Ask questions clearly, as if you were looking for an answer for it.</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
