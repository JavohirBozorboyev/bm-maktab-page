/* eslint-disable @next/next/no-img-element */
import PageTitle from "@/Components/PageTitle/PageTitle";
import React from "react";

type Props = {};

const HomeTDB = (props: Props) => {
  return (
    <div className="pb-10">
      <div className="container mx-auto p-4 md:p-0  flex flex-col  items-center">
        <PageTitle
          title="Tadbirlar"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis. "
        />

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6">
            <img
              src="https://www.broadnet.com/wp-content/uploads/2020/02/shutterstock_326638589-scaled.jpg"
              alt=""
              className="rounded-xl w-full h-full   object-cover hover:scale-95 duration-300 "
            />
          </div>
          <div className="col-span-12 md:col-span-6 ">
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://www.floornature.com/media/photos/38/12616/1_mcbridecharlesryan_ivanhoe_v2com_full.jpg"
                alt=""
                className="rounded-xl w-full  min-h-36  object-cover hover:scale-95 duration-300"
              />
              <img
                src="https://cdn.mos.cms.futurecdn.net/9X5hWcP3mj2dGwYdTmWD2o-1920-80.jpg"
                alt=""
                className="rounded-xl w-full min-h-36   object-cover hover:scale-95 duration-300"
              />
              <div className="col-span-2">
                <img
                  src="https://tbn-tv.com/wp-content/uploads/2016/12/best_school_england_uppingham_school_history_lesson-942.jpg"
                  alt=""
                  className="rounded-xl w-full h-64   object-cover hover:scale-95 duration-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTDB;
