import Link from 'next/link'
import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <article className="overflow-hidden rounded-lg border border-borderClr  bg-transparent shadow-sm">
    <img
      alt ={data.heading}
      src={data.img}
      className="h-56 w-full object-cover"
    />
  
    <div className="p-4 sm:p-6 hover:bg-hoverClr">
      <a href="#">
        <h3 className="text-lg font-medium text-white">
         {data.heading}
        </h3>
      </a>
  
      <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed c">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
        mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
        dignissimos. Molestias explicabo corporis voluptatem?
      </p>
  
      <Link href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
        Find out more
  
        <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
          &rarr;
        </span>
      </Link>
    </div>
  </article>
  )
}

export default ServiceCard