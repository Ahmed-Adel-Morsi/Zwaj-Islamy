function Courses() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-bold mb-10 text-white">الكورسات</h1>
        <h2 className="font-bold text-4xl bg-gray-700 bg-opacity-50 rounded-xl mb-4 text-white p-6">
          إزاى تتجوز صح ( بدون قايمة )
        </h2>
        <div className="border-2 border-gray-400 rounded-xl overflow-hidden">
          <div className="pt-[56.6%] relative">
            <iframe
              src="https://player.vimeo.com/video/891807669?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="course intro"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div className="text-lg font-medium my-8 text-white flex flex-col items-center">
            <p>
              لشراء الكورس راسلنا على واتساب :{" "}
              <a
                className="text-yellow-400 hover:text-yellow-500"
                href="https://wa.me/01029770870"
                target="_blank"
              >
                01029770870
              </a>
            </p>
            <hr className="w-1/4 my-3" />
            <a
              className="text-yellow-400 hover:text-yellow-500"
              href="https://courssat.com/#/course/194"
              target="_blank"
            >
              أو اضغط هنا للدخول للكورس وشرائه مباشرةً
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Courses;
