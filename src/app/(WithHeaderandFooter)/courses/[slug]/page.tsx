// "use client";
// import React, { useState } from "react";
// import { IMAGE_URL } from "@/config";
// import { useSingleCourse } from "@/hooks/useCourses";
// import { useParams, useRouter } from "next/navigation";
// import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { FaFileVideo } from "react-icons/fa6";
// import LoginModal from "@/components/CommenComponent/LoginModal";
// import { useAuth } from "@/context/AuthContext";
// import Link from "next/link";
// import { useModules } from "@/hooks/useModules";
// import { useCreateOrder, useVerifyPayment } from "@/hooks/useOrders";
// import { showError, showSuccess } from "@/utils/toast";

// export default function CourseDetails() {
//   const router = useRouter();
//   const { slug } = useParams<{ slug: string }>();
//   const { data: courseData, isLoading } = useSingleCourse(slug);
//   const course = courseData?.data;
//   const { data: modulesData } = useModules(course?._id);
//   const { mutateAsync: createOrderMutation } = useCreateOrder();
//   const { mutateAsync: verifyPaymentMutation } = useVerifyPayment();
//   const { openLogin, setOpenLogin, isAuthenticated } = useAuth();
//   const [openModule, setOpenModule] = useState<number | null>(0);
//   const courseModules = modulesData?.data || [];
//   console.log(modulesData, "modulesData");

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!course) {
//     return <p>Course not found</p>;
//   }

//   const discountPercentage = Math.round(
//     ((Number(course.discountPrice) - Number(course.price)) /
//       Number(course.discountPrice)) *
//       100,
//   );

//   const handleBuyCourse = async () => {
//     try {
//       if (!isAuthenticated) {
//         showError("Log in to access");
//         return;
//       }

//       const orderRes = await createOrderMutation(course._id);
//       const razorpayOrder = orderRes.data.razorpayOrder;

//       console.log(orderRes, "orderRes");
//       console.log(razorpayOrder);

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
//         amount: razorpayOrder.amount,
//         currency: razorpayOrder.currency,
//         order_id: razorpayOrder.id,
//         name: "Stokzy",
//         description: course.title,
//         handler: async (response: any) => {
//           try {
//             await verifyPaymentMutation({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             showSuccess("Payment Successful!");
//             router.push("/my-courses");
//           } catch (error) {
//             console.log(error);
//             showError("Payment verification failed.");
//           }
//         },
//         theme: {
//           color: "#57a846",
//         },
//       };
//       console.log(
//         process.env.NEXT_PUBLIC_RAZORPAY_KEY,
//         "process.env.NEXT_PUBLIC_RAZORPAY_KEY",
//       );
//       const razorpay = new (window as any).Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong");
//     }
//   };

//   // Temporary data (backend aane tak)
//   const courseModules1 = [
//     {
//       id: 1,
//       title: "Introduction to LLD BootCamp",
//       lessons: [{ id: 1, title: "Welcome to SUPRA Batch" }],
//     },
//     {
//       id: 2,
//       title: "Let's Learn Java",
//       lessons: [
//         { id: 2, title: "Java Basics" },
//         { id: 3, title: "Variables & Data Types" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Let's Learn Java",
//       lessons: [
//         { id: 2, title: "Java Basics" },
//         { id: 3, title: "Variables & Data Types" },
//       ],
//     },
//   ];

//   return (
//     <>
//       {/*
//         max-lg:pb-28 -> mobile pe niche wala fixed price bar content ko
//         cover na kare isliye page ke bottom me extra space diya hai
//       */}
//       <div className="section-container py-10 max-lg:pb-28">
//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Side */}
//           <div className="lg:col-span-2">
//             <h1 className="text-2xl lg:text-4xl font-bold mb-4">
//               {course.title}
//             </h1>

//             <p className="text-gray-600 leading-7 lg:leading-8 mb-6 lg:mb-10">
//               {course.shortDescription}
//             </p>

//             <div
//               className="text-gray-600 mb-6 lg:mb-10"
//               dangerouslySetInnerHTML={{
//                 __html: course.description,
//               }}
//             />

//             {/* Course Content */}
//             <div className="mb-10">
//               <h2 className="text-2xl lg:text-3xl font-bold mb-3">
//                 Course Content
//               </h2>

//               <p className="text-gray-600 mb-6 text-sm lg:text-base">
//                 Discover the key skills and concepts you'll master in this
//                 course.
//               </p>

//               <div className="space-y-5">
//                 {courseModules1.map((module, index) => (
//                   <div
//                     key={module.id}
//                     className="bg-[#F5F5F5] rounded-2xl overflow-hidden"
//                   >
//                     <button
//                       onClick={() =>
//                         setOpenModule(openModule === index ? null : index)
//                       }
//                       className="w-full flex items-center justify-between px-4 lg:px-6 py-4 lg:py-5 text-left"
//                     >
//                       <h3 className="font-semibold text-sm">
//                         {module.title}
//                       </h3>

//                       {openModule === index ? (
//                         <BiChevronUp size={22} />
//                       ) : (
//                         <BiChevronDown size={22} />
//                       )}
//                     </button>

//                     {openModule === index && (
//                       <div className="px-4 lg:px-6 pb-5">
//                         {module.lessons.map((lesson) => (
//                           <div
//                             key={lesson.id}
//                             className="flex items-center gap-3 py-3"
//                           >
//                             <FaFileVideo
//                               size={18}
//                               className="text-gray-500 shrink-0"
//                             />
//                             <span className="text-gray-700 text-sm lg:text-base">
//                               {lesson.title}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div>
//             <div className="lg:sticky lg:top-24">
//               <div className="bg-[#F7F7F7] rounded-3xl lg:shadow-lg p-3 lg:p-5">
//                 {/* Image - normal flow me, mobile pe sabse upar */}
//                 <img
//                   src={`${IMAGE_URL}${course.thumbnail}`}
//                   alt={course.title}
//                   className="w-full rounded-2xl"
//                 />

//                 {/*
//                   Price + Buy button block
//                   Mobile (< lg): fixed bottom bar, poori width, screen ke bottom pe chipka
//                   Desktop (lg+): normal static block, card ke andar hi
//                 */}
//                 <div
//                   className="
//                     max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:right-0
//                     max-lg:bg-white max-lg:z-50 max-lg:rounded-t-2xl
//                     max-lg:shadow-[0_-4px_20px_rgba(0,0,0,0.12)]
//                     max-lg:px-4 max-lg:py-3
//                     max-lg:pb-[calc(env(safe-area-inset-bottom)+12px)]
//                     mt-5
//                   "
//                 >
//                   <div className="flex items-center max-lg:justify-between lg:justify-center gap-3 flex-wrap">
//                     <div className="flex items-center gap-2 flex-wrap">
//                       <span className="text-xl lg:text-2xl font-bold">
//                         ₹{course.price}
//                       </span>

//                       <span className="text-sm text-gray-400 line-through">
//                         ₹{course.discountPrice}
//                       </span>

//                       <span className="bg-gray-200 px-3 py-1 rounded-full text-[10px] font-semibold">
//                         {discountPercentage}% Off
//                       </span>
//                     </div>
//                   </div>

//                   <p className="text-gray-500 mt-2 text-[11px] max-lg:hidden text-center">
//                     (Included in subscription)
//                   </p>

//                   <button
//                     onClick={handleBuyCourse}
//                     className="
//                       w-full py-3 lg:py-4 rounded-xl
//                       text-white font-semibold
//                       bg-gradient-to-r
//                       from-[#57a846]
//                       via-[#6BCB5B]
//                       to-[#9BE15D]
//                       mt-3 lg:mt-6
//                     "
//                   >
//                     Buy Course
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <LoginModal
//   isOpen={openLogin}
//   onClose={() => setOpenLogin(false)}
// /> */}
//     </>
//   );
// }


"use client";
import React, { useState } from "react";
import { IMAGE_URL } from "@/config";
import { useSingleCourse } from "@/hooks/useCourses";
import { useParams, useRouter } from "next/navigation";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaFileVideo } from "react-icons/fa6";
import LoginModal from "@/components/CommenComponent/LoginModal";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useModules } from "@/hooks/useModules";
import { useCreateOrder, useVerifyPayment } from "@/hooks/useOrders";
import { showError, showSuccess } from "@/utils/toast";

export default function CourseDetails() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const { data: courseData, isLoading } = useSingleCourse(slug);
  const course = courseData?.data;
  const { data: modulesData } = useModules(course?._id);
  const { mutateAsync: createOrderMutation } = useCreateOrder();
  const { mutateAsync: verifyPaymentMutation } = useVerifyPayment();
  const { openLogin, setOpenLogin, isAuthenticated } = useAuth();
  const [openModule, setOpenModule] = useState<number | null>(0);
  const courseModules = modulesData?.data || [];
  console.log(modulesData, "modulesData");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return <p>Course not found</p>;
  }

  const discountPercentage = Math.round(
    ((Number(course.discountPrice) - Number(course.price)) /
      Number(course.discountPrice)) *
      100,
  );

  const handleBuyCourse = async () => {
    try {
      if (!isAuthenticated) {
        showError("Log in to access");
        return;
      }

      const orderRes = await createOrderMutation(course._id);
      const razorpayOrder = orderRes.data.razorpayOrder;

      console.log(orderRes, "orderRes");
      console.log(razorpayOrder);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        order_id: razorpayOrder.id,
        name: "Stokzy",
        description: course.title,
        handler: async (response: any) => {
          try {
            await verifyPaymentMutation({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            showSuccess("Payment Successful!");
            router.push("/my-courses");
          } catch (error) {
            console.log(error);
            showError("Payment verification failed.");
          }
        },
        theme: {
          color: "#57a846",
        },
      };
      console.log(
        process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        "process.env.NEXT_PUBLIC_RAZORPAY_KEY",
      );
      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  // Temporary data (backend aane tak)
  const courseModules1 = [
    {
      id: 1,
      title: "Introduction to LLD BootCamp",
      lessons: [{ id: 1, title: "Welcome to SUPRA Batch" }],
    },
    {
      id: 2,
      title: "Let's Learn Java",
      lessons: [
        { id: 2, title: "Java Basics" },
        { id: 3, title: "Variables & Data Types" },
      ],
    },
    {
      id: 2,
      title: "Let's Learn Java",
      lessons: [
        { id: 2, title: "Java Basics" },
        { id: 3, title: "Variables & Data Types" },
      ],
    },
  ];

  return (
    <>
      {/*
        max-lg:pb-28 -> mobile pe niche wala fixed price bar content ko
        cover na kare isliye page ke bottom me extra space diya hai
      */}
      <div className="section-container py-10 max-lg:pb-28">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              {course.title}
            </h1>

            <p className="text-gray-600 leading-7 lg:leading-8 mb-6 lg:mb-10">
              {course.shortDescription}
            </p>

            <div
              className="text-gray-600 mb-6 lg:mb-10"
              dangerouslySetInnerHTML={{
                __html: course.description,
              }}
            />

            {/* Course Content */}
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Course Content
              </h2>

              <p className="text-gray-600 mb-6 text-sm lg:text-base">
                Discover the key skills and concepts you'll master in this
                course.
              </p>

              <div className="space-y-5">
                {courseModules1.map((module, index) => (
                  <div
                    key={module.id}
                    className="bg-[#F5F5F5] rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenModule(openModule === index ? null : index)
                      }
                      className="w-full flex items-center justify-between px-4 lg:px-6 py-4 lg:py-5 text-left"
                    >
                      <h3 className="font-semibold text-sm">
                        {module.title}
                      </h3>

                      {openModule === index ? (
                        <BiChevronUp size={22} />
                      ) : (
                        <BiChevronDown size={22} />
                      )}
                    </button>

                    {openModule === index && (
                      <div className="px-4 lg:px-6 pb-5">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center gap-3 py-3"
                          >
                            <FaFileVideo
                              size={18}
                              className="text-gray-500 shrink-0"
                            />
                            <span className="text-gray-700 text-sm lg:text-base">
                              {lesson.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="lg:sticky lg:top-24">
              <div className="bg-[#F7F7F7] rounded-3xl lg:shadow-lg p-3 lg:p-5">
                {/* Image - normal flow me, mobile pe sabse upar */}
                <img
                  src={`${IMAGE_URL}${course.thumbnail}`}
                  alt={course.title}
                  className="w-full rounded-2xl"
                />

                {/*
                  Price + Buy button block
                  Mobile (< lg): fixed bottom bar, poori width, screen ke bottom pe chipka
                  Desktop (lg+): normal static block, card ke andar hi
                */}
                <div
                  className="
                    max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:right-0
                    max-lg:bg-white max-lg:z-50 max-lg:rounded-t-3xl
                    max-lg:shadow-[0_-6px_24px_rgba(0,0,0,0.12)]
                    max-lg:px-4 max-lg:py-4
                    max-lg:pb-[calc(env(safe-area-inset-bottom)+16px)]
                    mt-5
                  "
                >
                  {/* Mobile: price left, button right - ek hi row me */}
                  <div className="flex items-center justify-between gap-4 max-lg:flex lg:hidden">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{course.price}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          ₹{course.discountPrice}
                        </span>
                      </div>
                      <span className="inline-block mt-1 bg-gray-200 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-gray-700">
                        {discountPercentage}% Off
                      </span>
                    </div>

                    <button
                      onClick={handleBuyCourse}
                      className="
                        shrink-0 px-6 py-2.5 rounded-md
                        text-white font-semibold text-[15px]
                        bg-gradient-to-r
                        from-[#57a846]
                        via-[#6BCB5B]
                        to-[#9BE15D]
                        shadow-[0_4px_14px_rgba(87,168,70,0.4)]
                        active:scale-95 transition-transform
                      "
                    >
                      Buy Course
                    </button>
                  </div>

                  {/* Desktop: original stacked layout */}
                  <div className="hidden lg:block text-center">
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <span className="text-2xl font-bold">
                        ₹{course.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{course.discountPrice}
                      </span>
                      <span className="bg-gray-200 px-3 py-1 rounded-full text-[10px] font-semibold">
                        {discountPercentage}% Off
                      </span>
                    </div>

                    <p className="text-gray-500 mt-2 text-[11px]">
                      (Included in subscription)
                    </p>

                    <button
                      onClick={handleBuyCourse}
                      className="
                        w-full py-4 rounded-xl
                        text-white font-semibold
                        bg-gradient-to-r
                        from-[#57a846]
                        via-[#6BCB5B]
                        to-[#9BE15D]
                        mt-6
                      "
                    >
                      Buy Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LoginModal
  isOpen={openLogin}
  onClose={() => setOpenLogin(false)}
/> */}
    </>
  );
}