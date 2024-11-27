export default function Home() {
  return (
    <main className="sm:h-screen w-screen p-12 bg-gray-100">
      <section className="mx-auto max-w-screen-lg grid grid-cols-4 gap-4 h-full">
        <section className="col-span-1 gap-6 grid">
          <div className="bg-yellow-100 rounded-lg flex justify-center items-center">
            hello
          </div>
          <div className="bg-yellow-500 rounded-lg flex justify-center items-center">
            hi
          </div>
        </section>
        <section className="col-span-3 gap-6 grid grid-cols-3">
          <div className="bg-purple-500 col-span-2 rounded-lg flex justify-center items-center">
            hello
          </div>
          <div className="bg-purple-100 col-span-1 row-span-2 rounded-lg flex justify-center items-center">
            hi
          </div>
          <div className="bg-white rounded-lg flex justify-center items-center">
            hello
          </div>
          <div className="bg-yellow-500 rounded-lg flex justify-center items-center">
            hi
          </div>
          <div className="bg-white rounded-lg flex justify-center items-center">
            hello
          </div>
          <div className="bg-purple-500 col-span-2 rounded-lg flex justify-center items-center">
            hi
          </div>
        </section>
      </section>
    </main>
  );
}
