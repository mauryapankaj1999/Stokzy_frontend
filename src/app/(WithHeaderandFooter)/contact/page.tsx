"use client";

import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import { useCreateContact } from "@/hooks/useContact";
import { showError, showSuccess } from "@/utils/toast";
import { useState } from "react";

export default function Contact() {
const {  mutateAsync: createContactMutation,} = useCreateContact();
const [name, setName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");





const handleSubmit = async (
  e: any
) => {
  e.preventDefault();

  try {
    const formData =
      new FormData(e.target);

    const data =
      Object.fromEntries(
        formData.entries()
      );

    await createContactMutation(
      data
    );

    showSuccess(
      "Message sent successfully."
    );

    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  } catch (error: any) {
    error(
      error?.response?.data
        ?.message ||
        "Something went wrong."
    );
  }
};




  return (
    <>
      <Headingagebanner pagename="Contact Us" />

      <section className="py-24 bg-[#f8fafc]">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Customer Support
                  </h3>

                  <p className="text-slate-600 leading-8">
                    Our support team is available Monday to Saturday,
                    10:00 AM – 8:00 PM IST, to assist you with platform
                    usage, subscriptions, and learning resources.
                  </p>

                  <div className="mt-6 space-y-3">
                    <p className="font-medium">
                      📧 support@stokzy.com
                    </p>

                    <p className="font-medium">
                      📞 +91 92050 23816
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Feedback & Suggestions
                  </h3>

                  <p className="text-slate-600 leading-8">
                    Your feedback helps us improve. If you have
                    suggestions, feature requests, or concerns,
                    we'd genuinely like to hear from you.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Media & Partnerships
                  </h3>

                  <p className="text-slate-600 leading-8">
                    For media inquiries, collaborations, or
                    partnerships, please contact us.
                  </p>

                  <a
                    href="mailto:marketing@stokzy.com"
                    className="text-primary font-semibold mt-4 inline-block"
                  >
                    marketing@stokzy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="text-3xl font-bold mb-3">
                  Get in touch
                </h3>

                <p className="text-slate-600 mb-8">
                  Fill out the form and our team will respond shortly.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      name="firstName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="First name"
                      className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary"
                    />

                    <input
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      placeholder="Last name"
                      className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary"
                    />
                  </div>

                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Your email"
                    className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary"
                  />

                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary"
                  />

                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
                  >
                    Submit Message
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    By contacting us, you agree to our
                    <span className="text-primary"> Terms </span>
                    and
                    <span className="text-primary">
                      {" "}
                      Privacy Policy
                    </span>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-slate-600 mt-2">
                Monday - Saturday
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-bold">Email Support</h4>
              <p className="text-slate-600 mt-2">
                Response within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-bold">Community Help</h4>
              <p className="text-slate-600 mt-2">
                Connect with fellow traders
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


// "use client";

// import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
// import { useCreateContact } from "@/hooks/useContact";
// import {
//   showError,
//   showSuccess,
// } from "@/utils/toast";
// import { useState } from "react";

// export default function Contact() {
//   const {
//     mutateAsync: createContactMutation,
//   } = useCreateContact();

//   const [name, setName] =
//     useState("");

//   const [
//     lastName,
//     setLastName,
//   ] = useState("");

//   const [email, setEmail] =
//     useState("");

//   const [phone, setPhone] =
//     useState("");

//   const [
//     message,
//     setMessage,
//   ] = useState("");

//   const handleSubmit =
//     async (e: any) => {
//       e.preventDefault();


//       try {
//         const data = {
//           firstName: name,
//           lastName,
//           email,
//           phone,
//           message,
//         };

//         await createContactMutation(
//           data
//         );

//         showSuccess(
//           "Message sent successfully."
//         );

//         setName("");
//         setLastName("");
//         setEmail("");
//         setPhone("");
//         setMessage("");
//       } catch (error: any) {
//         showError(
//           error?.response?.data
//             ?.message ||
//             "Something went wrong."
//         );
//       }
//     };

//   return (
//     <>
//       <Headingagebanner pagename="Contact Us" />

//       <section className="py-24 bg-[#f8fafc]">
//         <div className="section-container">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Left */}
//             <div>
//               <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
//                 <div className="mb-10">
//                   <h3 className="text-2xl font-bold mb-4">
//                     Customer Support
//                   </h3>

//                   <p className="text-slate-600 leading-8">
//                     Our support team is available Monday to Saturday,
//                     10:00 AM – 8:00 PM IST, to assist you with platform
//                     usage, subscriptions, and learning resources.
//                   </p>

//                   <div className="mt-6 space-y-3">
//                     <p className="font-medium">
//                       📧 support@stokzy.com
//                     </p>

//                     <p className="font-medium">
//                       📞 +91 92050 23816
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mb-10">
//                   <h3 className="text-2xl font-bold mb-4">
//                     Feedback & Suggestions
//                   </h3>

//                   <p className="text-slate-600 leading-8">
//                     Your feedback helps us improve. If you have
//                     suggestions, feature requests, or concerns,
//                     we'd genuinely like to hear from you.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-bold mb-4">
//                     Media & Partnerships
//                   </h3>

//                   <p className="text-slate-600 leading-8">
//                     For media inquiries, collaborations, or
//                     partnerships, please contact us.
//                   </p>

//                   <a
//                     href="mailto:marketing@stokzy.com"
//                     className="text-primary font-semibold mt-4 inline-block"
//                   >
//                     marketing@stokzy.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right Form */}
//             <div>
//               <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
//                 <h3 className="text-3xl font-bold mb-3">
//                   Get in touch
//                 </h3>

//                 <p className="text-slate-600 mb-8">
//                   Fill out the form and our team will respond shortly.
//                 </p>

//                 <form
//                   className="space-y-5"
//                   onSubmit={handleSubmit}
//                 >
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <input
//                       name="firstName"
//                       value={name}
//                       onChange={(e) =>
//                         setName(
//                           e.target.value
//                         )
//                       }
//                       type="text"
//                       placeholder="First name"
//                       className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary"
//                     />
//                       {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.email.message}
//                 </p>
//               )}

//                     <input
//                       name="lastName"
//                       value={lastName}
//                       onChange={(e) =>
//                         setLastName(
//                           e.target.value
//                         )
//                       }
//                       type="text"
//                       placeholder="Last name"
//                       className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary"
//                     />
//                   </div>

//                   <input
//                     name="email"
//                     value={email}
//                     onChange={(e) =>
//                       setEmail(
//                         e.target.value
//                       )
//                     }
//                     type="email"
//                     placeholder="Your email"
//                     className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary"
//                   />

//                   <input
//                     name="phone"
//                     value={phone}
//                     onChange={(e) =>
//                       setPhone(
//                         e.target.value
//                       )
//                     }
//                     type="tel"
//                     placeholder="Phone number"
//                     className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary"
//                   />

//                   <textarea
//                     name="message"
//                     value={message}
//                     onChange={(e) =>
//                       setMessage(
//                         e.target.value
//                       )
//                     }
//                     rows={5}
//                     placeholder="How can we help?"
//                     className="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-primary resize-none"
//                   />

//                   <button
//                     type="submit"
//                     className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
//                   >
//                     Submit
//                   </button>

//                   <p className="text-center text-sm text-slate-500">
//                     By contacting us, you agree to our
//                     <span className="text-primary">
//                       {" "}
//                       Terms{" "}
//                     </span>
//                     and
//                     <span className="text-primary">
//                       {" "}
//                       Privacy Policy
//                     </span>
//                     .
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Cards */}
//           <div className="grid md:grid-cols-3 gap-6 mt-16">
//             <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
//               <div className="text-3xl mb-3">📞</div>
//               <h4 className="font-bold">
//                 Call Us
//               </h4>
//               <p className="text-slate-600 mt-2">
//                 Monday - Saturday
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
//               <div className="text-3xl mb-3">📧</div>
//               <h4 className="font-bold">
//                 Email Support
//               </h4>
//               <p className="text-slate-600 mt-2">
//                 Response within 24 hours
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
//               <div className="text-3xl mb-3">💬</div>
//               <h4 className="font-bold">
//                 Community Help
//               </h4>
//               <p className="text-slate-600 mt-2">
//                 Connect with fellow traders
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }