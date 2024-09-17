import homeVector from "../assets/squared-logo.png";
import abdelkareem from "../assets/abdelkareem.png";
import googlePlayIcon from "../assets/googleplay.png";
import appStoreIcon from "../assets/appstore.png";
import { useEffect } from "react";
import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import {
  ArrowLongLeftIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/16/solid";
import NumberCounter from "../components/NumberCounter";
import { womenFormData } from "../lib/womenFormData";
import { menFormData } from "../lib/menFormData";
import ManCard from "../components/ManCard";

function Landing() {
  return (
    <div className="max-w-7xl min-h-[calc(100vh-81px-1.5rem)] mx-auto pt-5 pb-16 px-3 xs:px-6 lg:px-8 flex flex-col justify-evenly gap-8">
      <div className="block lg:flex-center gap-12">
        <div className="lg:w-2/3 flex-center">
          <div className="grow text-center lg:text-start">
            <h1 className="text-[10vw] xs:text-5xl mb-2 xs:mb-4 text-black font-extrabold">
              مبادرة <br />
              <span className="text-main block mt-2">الزواج الإسلامى</span>
            </h1>
            <div className="xs:mt-16 mb-10 text-gray-600">
              <p className="section-p font-bold">
                مرحبا بكم فى موقع مبادرة الشيخ عبد الكريم محمود
              </p>
              <p className="text-[4vw] xs:text-lg mt-3 xs:mt-5 xs:leading-7 font-medium text-gray-600">
                نحن هنا لنقدم لكم طريقة سهلة ومبسطة لتأسيس حياة زوجية قائمة على
                المبادئ الإسلامية الحقيقية بعيدًا عن التقاليد المرهقة مثل قائمة
                المنقولات. تهدف مبادرتنا إلى تشجيع الشباب والفتيات على الزواج
                بيسر وسهولة، مستندين إلى التفاهم والمودة وليس الأعباء المادية.
              </p>
              <p className="text-[4vw] xs:text-lg xs:leading-7 font-medium text-gray-600 mt-2 xs:mt-4">
                هدفنا هو تبسيط الأمور للزوجين وتسهيل بناء حياة جديدة على أساس من
                الثقة والتفاهم. من خلال هذه المبادرة، نسعى لنشر قيم الزواج
                الإسلامي الصحيح، حيث يعتمد الزواج على المبادئ الشرعية دون تكاليف
                إضافية تثقل كاهل العائلات.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link
                to={`${ROUTES.FORMS}/${ROUTES.NEW_FROM}`}
                className="bg-main text-white font-semibold text-lg px-5 py-3 rounded-lg hover:bg-main-hov transition"
              >
                إستمارة جديدة
              </Link>
              <Link
                to={ROUTES.FORMS}
                className="flex-center gap-2 border border-main text-main hover:bg-black/5 rounded-lg px-5 py-3 font-semibold text-lg transition"
              >
                إستمارات الزواج
                <ArrowLongLeftIcon className="size-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-3 xs:mt-7 lg:mt-0 flex-center">
          <img
            src={homeVector}
            alt="zwaj"
            className="xs:size-[400px] object-cover"
          />
        </div>
      </div>
      <div className="w-full lg:w-3/4 mx-auto rounded-lg bg-main text-white flex flex-col sm:flex-row">
        <div className="p-4 xs:p-8 text-center grow">
          <NumberCounter end={2500} duration={5000} />
          <p className="mt-3 xs:text-lg font-medium">الزيجات التي تمت</p>
        </div>
        <div className="p-4 xs:p-8 text-center grow">
          <NumberCounter end={1500} duration={4000} />
          <p className="mt-3 xs:text-lg font-medium">استمارات الرجال</p>
        </div>
        <div className="p-4 xs:p-8 text-center grow">
          <NumberCounter end={1000} />
          <p className="mt-3 xs:text-lg font-medium">استمارات النساء</p>
        </div>
      </div>
    </div>
  );
}

function MobadraVideo() {
  return (
    <div className="bg-teal-900 py-7 xs:py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-3 xs:px-6 lg:px-8 text-center">
        <div>
          <h2 className="section-header text-white">يعنى إيه زواج إسلامى</h2>
          <p className="section-p text-yellow-400">فيديو توضيحى</p>
          <div className="relative pt-[56.67%]">
            <iframe
              src="https://player.vimeo.com/video/830357190?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&dnt=1"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Intro"
              className="absolute h-full w-full top-0 left-0"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  );
}

function SwiperSection({ children, title, routes }) {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Scrollbar],
      speed: 400,
      slidesPerView: 1.25,
      spaceBetween: 15,
      grabCursor: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      breakpoints: {
        550: {
          slidesPerView: 2.25,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.25,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4.25,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <div className="mt-10">
      <div className="mt-10 flex flex-col min-[400px]:flex-row min-[400px]:justify-between items-center mb-6 min-[400px]:mb-0">
        <h3 className="text-3xl font-semibold mt-3 mb-3 min-[400px]:mb-6 text-center">
          {title}
        </h3>
        <Link
          to={routes}
          className="flex items-center gap-2 font-medium text-lg text-main hover:text-main-hov hover:underline hover:underline-offset-8"
        >
          عرض الكل
          <ChevronDoubleLeftIcon className="size-5" />
        </Link>
      </div>
      <div className="swiper select-none mx-auto max-w-2xl lg:max-w-7xl pb-10">
        <h2 className="sr-only">{title}</h2>
        <div className="swiper-wrapper">{children}</div>
        <div className="swiper-scrollbar cursor-grab active:cursor-grabbing !h-2 !w-1/2 !left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}

function Forms() {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Scrollbar],
      speed: 400,
      slidesPerView: 1.25,
      spaceBetween: 15,
      grabCursor: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      breakpoints: {
        550: {
          slidesPerView: 2.25,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.25,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4.25,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <div className="container py-7 xs:py-12 lg:py-16 xl:py-24 mx-auto max-w-7xl px-3 xs:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="section-header">الاستمارات</h2>
        <p className="section-p text-gray-500">
          تصفح جميع استمارات الزواج من هنا
        </p>
      </div>
      <SwiperSection
        title="إستمارات الرجال"
        routes={`${ROUTES.FORMS}/${ROUTES.MEN}`}
      >
        {menFormData.map((form) => (
          <ManCard key={form.code} data={form} />
        ))}
      </SwiperSection>
      <SwiperSection
        title="إستمارات النساء"
        routes={`${ROUTES.FORMS}/${ROUTES.WOMEN}`}
      >
        {womenFormData.map((form) => (
          <Card key={form.code} data={form} />
        ))}
      </SwiperSection>
    </div>
  );
}

function DownloadApp() {
  return (
    <div className="container pb-7 xs:pb-12 lg:pb-16 xl:pb-24 mx-auto max-w-7xl px-3 xs:px-6 lg:px-8">
      <div className="bg-teal-900 py-7 xs:py-12 sm:py-16 lg:py-24 max-w-7xl rounded-xl">
        <div className="px-3 xs:px-6 lg:px-8 text-center">
          <div>
            <h2 className="section-header text-white">تحميل التطبيق</h2>
            <p className="section-p text-yellow-400">
              يمكنك تحميل تطبيق زواج اسلامى من خلال جوجل بلاى وأبل ستور
            </p>
            <div className="flex-center flex-col sm:flex-row sm:gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.zawaj.islamy"
                target="_blank"
              >
                <img
                  className="w-40 hover:scale-95 transition"
                  src={googlePlayIcon}
                  alt="download the app from google play"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/%D8%B2%D9%88%D8%A7%D8%AC-%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A/id6450400305"
                target="_blank"
              >
                <img
                  className="w-40 hover:scale-95 transition"
                  src={appStoreIcon}
                  alt="download the app from apple store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShekhMahmoud() {
  return (
    <div className="relative isolate overflow-hidden pb-12 sm:pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <figcaption>
          <img
            className="mx-auto object-cover h-28 w-28 rounded-full border-4 border-emerald-600"
            src={abdelkareem}
            alt=""
          />
          <div className="mt-2 xs:mt-4 text-base">
            <div className="font-bold text-[6vw] xs:text-3xl mb-2 xs:mb-3">
              الشيخ: عبد الكريم محمود
            </div>
            <div className="section-p text-gray-500">مؤسس وصاحب المبادرة</div>
          </div>
        </figcaption>
        <p className="text-[4vw] xs:text-base mt-3 xs:mt-5 xs:leading-8 font-medium text-gray-700">
          إخلاء مسؤلية أمام الله وأمامكم : اولاً انا مش مسؤول عن اي حد سواء من
          الشباب العرسان او اولياء الامور ،انا كل اللي بحاول اعمله أن ربنا
          يستخدمني وينفع بي وأقدر اوصل الناس اللي عايزه تيسر الزواج ببعض ( طبعاً
          بدون قايمة ) والحمد لله عملنا موقع وان شاء الله من اول الشهر اللي جاي
          هنعمل ورشة نجارة بأسعار التكلفة ركزوا معايا أحنا علي النت يعني عالم
          مفتوح فيه الكويس والمُحترم صاحب الخُلق والدين وفيه النصاب والحرامي
          والكذاب والي مش بيتقي ربنا سواء من العرسان او اولياء الامور او البنات
          نفسهم نصيحتي لولي الأمر اولاً جدد نيتك في انك عايز تسهل علي شاب مُسلم
          عايز يِعف نفسه ويتجوز زي ما سيدنا النبي صلي الله عليه وسلم اتجوز
          ثانياً لازم حضرتك تسأل عليه في كل مكان المسجد والشغل ومكان سكنه تسأل
          اكتر من مره واكتر من حد وخليك في اهل الدين والصلاح ويسر عليه في
          الطلبات اوي وقوله اهم حاجه عندي تتقي ربنا في بنتي وسيبك من الشقة
          المِلك والذهب والله اهم حاجه الشاب اللي حضرتك بعد عُمرٍ طويل هتسيب
          بنتك او أختك معاه نصيحتي للعريس اولاً جدد نيتك انك عايز تعمل بسُنة
          النبي صلي الله عليه وسلم وتعف نفسك ثانياً تتقي ربنا في بنت الناس اللي
          انت رايحلهم وتعاملها زي ما كانوا اهلها بيعاملوها وخليك عارف ان بنات
          الناس مش لعبه بنات الناس مش بتتهان في بيوت الرجال سيدك النبي صلي الله
          عليه وسلم عُمره ابداً ما ضرب او هان واحده من زوجاته وهو اللي قال خيركم
          خيركم لأهله وانا خيركم لأهلي ثالثاً اول لما تلاقي البيت مُحترم وفيه
          دين والبيت فيه راجل ليه كلمه في بيته والبنت عندها حياء ولبسها مُحترم
          وفاهمة أن اعظم عمل للمرأة هي جلوسها في بيت زوجها وتربية اولادها وإخراج
          نشأ مُسلم بجد ينفع امه الاسلام ،دي اوعي تسيبها ابداً ربنا يجمع الطيبين
          ببعض ويحفظنا وإياكم من شياطين الأنس ان شاء الله هخلي الكلمتين دول علي
          صفحتي لأي حد لسه داخل الصفحة جديد ربنا يسعدكم وييسرلكم سُبل الخير
          والحلال.
        </p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Landing />
      <MobadraVideo />
      <Forms />
      <DownloadApp />
      <ShekhMahmoud />
    </>
  );
}

export default Home;
