import React from "react";
function Aboutus() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px20 px-4">
        <div className="mt-10 item-center justify-center text-center">
          <h1 className="pt-20 text-2xl md:text-4xl">
            Together, we achieve the{" "}
            <span className="text-pink-500">extraordinary:)</span>
          </h1>
          <p className="text-md p-20 text-left">
            At Book Store, we believe in making a difference.
            Our journey began with a simple idea: to create solutions that
            inspire, empower, and transform lives. Today, we are proud to be at
            the forefront of [industry/field], delivering innovative products
            and services that exceed expectations. Our team is a diverse group
            of dreamers, doers, and thinkers, united by a shared passion for
            excellence. With a commitment to quality, integrity, and
            collaboration, we strive to bring meaningful impact to everything we
            do. What sets us apart is our unwavering dedication to [core values,
            e.g., innovation, customer satisfaction, or sustainability]. By
            staying true to our mission, we’ve built lasting relationships with
            our community, partners, and clients, earning their trust and
            loyalty. Whether you’re here to explore, learn, or collaborate,
            we’re thrilled to have you as part of our story. Together, let’s
            shape the future, one step at a time.
          </p>

          <h1 className="pt-20 text-2xl md:text-4xl">Facilities We Provide</h1>
          <div className="text-left pl-40 pt-10">
          <p className="pt-10"><span className="text-pink-500">State-of-the-Art Infrastructure: </span> Equipped with modern tools and technology to meet your needs.</p>
          <p className="pt-5"><span className="text-pink-500">24/7 Customer Support: </span>Always available to assist and resolve queries promptly.</p>
          <p className="pt-5"><span className="text-pink-500">Customized Solutions: </span>Tailored services to align with your specific goals.</p>
          <p className="pt-5"><span className="text-pink-500">Flexible Workspaces:  </span> Designed for productivity and comfort.</p>
          <p className="pt-5 pb-5"><span className="text-pink-500">Educational Resources:</span>Access to eBooks, webinars, and expert-led workshops</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Aboutus;
