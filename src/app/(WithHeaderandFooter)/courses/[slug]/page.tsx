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

  // const discountPercentage = Math.round(
  //   ((Number(course.price) - Number(course.discountPrice)) /
  //     Number(course.price)) *
  //     100,
  // );

  const discountPercentage = Math.round(
  ((Number(course.discountPrice) - Number(course.price)) /
    Number(course.discountPrice)) *
    100
);

  const handleBuyCourse = async () => { 
    try {
      if (!isAuthenticated) {
        // router.push("/login");
        showError('Log in to access');
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

    showSuccess(
      "Payment Successful!"
    );

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
        console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY, "process.env.NEXT_PUBLIC_RAZORPAY_KEY");
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
      lessons: [
        {
          id: 1,
          title: "Welcome to SUPRA Batch",
        },
      ],
    },
    {
      id: 2,
      title: "Let's Learn Java",
      lessons: [
        {
          id: 2,
          title: "Java Basics",
        },
        {
          id: 3,
          title: "Variables & Data Types",
        },
      ],
    },
    {
      id: 2,
      title: "Let's Learn Java",
      lessons: [
        {
          id: 2,
          title: "Java Basics",
        },
        {
          id: 3,
          title: "Variables & Data Types",
        },
      ],
    },
  ];

  return (
    <>
      <div className="section-container py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

            <p className="text-gray-600 leading-8 mb-10">
              {course.shortDescription}
            </p>

                <div className="text-gray-600 mb-10"
                dangerouslySetInnerHTML={{
                  __html: course.description,
                }}
              />


            {/* Course Content */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-3">Course Content</h2>

              <p className="text-gray-600 mb-6">
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
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <h3 className="font-semibold text-sm">{module.title}</h3>

                      {openModule === index ? (
                        <BiChevronUp size={24} />
                      ) : (
                        <BiChevronDown size={24} />
                      )}
                    </button>

                    {openModule === index && (
                      <div className="px-6 pb-5">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center gap-3 py-3"
                          >
                            <FaFileVideo size={18} className="text-gray-500" />

                            <span className="text-gray-700">
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

          <div>
            <div className="sticky top-24">
              <div className="bg-[#F7F7F7] rounded-3xl shadow-lg p-5">
                <img
                  src={`${IMAGE_URL}${course.thumbnail}`}
                  alt={course.title}
                  className="w-full rounded-2xl"
                />

                <div className="mt-5 text-center">
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
                </div>

                <button
                  onClick={handleBuyCourse}
                  className="
                    w-full mt-6 py-4 rounded-xl
                    text-white font-semibold
                    bg-gradient-to-r
                    from-[#57a846]
                    via-[#6BCB5B]
                    to-[#9BE15D]
                  "
                >
                  Buy Course
                </button>
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
