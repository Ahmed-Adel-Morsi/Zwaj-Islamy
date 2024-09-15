function Courses() {
  return (
    <div className="flex-grow bg-teal-900 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-bold mb-10 text-white">الكورسات</h1>
        <h2 className="font-bold text-4xl bg-black bg-opacity-30 rounded-xl mb-4 text-white p-6">
          إزاى تتجوز صح (بدون قايمة)
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
    </div>
  );
}

export default Courses;
