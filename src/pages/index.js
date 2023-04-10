import Head from "next/head";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-br from-purple-400 to-pink-500 py-3 h-screen">
        <section>
          <nav className="flex justify-between px-5">
            <div className="flex gap-5">
              <a href="#">Home</a>
              <a href="#">Other functionalities</a>
            </div>
            <div className="flex gap-5">
            {session?.user && <button onClick={() => signOut()}>Sign out</button>}
              <Link href="/signIn">Admin</Link>
            </div>
          </nav>
        </section>
      { session?.user && <section className="mt-32">
          <h1 className="text-center text-3xl font-mono font-semibold mb-5">
            Upload a Project
          </h1>
          <form>
            <div className="flex flex-col gap-5 justify-center w-full items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Title of Project"
                  className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
                />
                <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
                  Title of project
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Author"
                  className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
                />
                <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
                  Author
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Course"
                  className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
                />
                <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
                  Course
                </label>
              </div>
              <div className="relative">
                <input type="file" className="" />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className=" bg-black text-white rounded-md shadow-sm mt-5 w-72 py-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>}
        <section>
          <div className="flex justify-center mb-10 mt-20">
            <div className="flex justify-between w-1/3 items-center border border-black rounded-full px-4 py-1 mb-10">
              <input
                className="bg-transparent outline-none pr-4 text-black placeholder-black"
                type="text"
                placeholder="Search..."
              />
              <div className="border-l border-black pl-3">hello</div>
            </div>
          </div>
          <div className="mx-24">
            <div className="bg-white p-3 h-28 w-48 border rounded-md">
              <p>Title: whatever</p>
              <p>Author: Kayode Fayemi</p>
              <p>Course: CSC 431</p>
              <a className="italic underline" href="www.kofman.com">
                Link to project
              </a>
            </div>
            <div className="bg-white p-3 h-28 w-48 border rounded-md">
              <p>Title: whatever</p>
              <p>Author: Kayode Fayemi</p>
              <p>Course: CSC 431</p>
              <a className="italic underline" href="www.kofman.com">
                Link to project
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
