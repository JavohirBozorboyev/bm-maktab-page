import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="my-10 py-20 bg-slate-800 rounded-[40px] mx-2 p-4 lg:mx-5 ">
      <div className="container mx-auto py-10   grid grid-cols-12 gap-5 items-center">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white 2xl:text-7xl text-center md:text-left">
            Qabulga <br /> roʻyxatdan oʻting
          </h1>
          <p className="text-white text-sm mt-10 2xl:text-xl text-center md:text-left">
            Malumotlaringizni yozib qoldiring, <br /> siz bilan tezda aloqaga
            chiqib, maktabimiz haqida yanada batafsil aytib beramiz.
          </p>
        </div>
        <div className="grid grid-cols-1 col-span-12 md:col-span-6 lg:col-span-5 gap-5 mt-10 md:mt-0">
          <input
            type="text"
            className="bg-slate-600 p-2 px-4 xl:p-4 xl:px-5 w-full rounded-full text-white outline-slate-500 text-lg 2xl:text-xl  "
            placeholder="Ismingiz"
          />

          <input
            type="text"
            className="bg-slate-600 p-2 px-4 xl:p-4 xl:px-5 w-full rounded-full text-white outline-slate-500 text-lg 2xl:text-xl  "
            placeholder="Telefon raqamingiz"
            defaultValue={"+998"}
          />
          <button className="bg-slate-600 p-2 px-4 xl:p-4 xl:px-5 w-full rounded-full text-white outline-slate-500 text-lg 2xl:text-xl active:scale-95 transition-all ease-in duration-300 mt-5">
            Ariza Topshirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
