import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
      <body className="bg-light-3">
          <main className='flex flex-row'>
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                <SignIn />
              </div>
            </section>
          </main>
      </body>
);
}