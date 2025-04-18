import React from "react";

function Partner() {
  const Image = [
    { path: "/blackhub.png", alt: "Blackhub" },
    { path: "/cable.png", alt: "Cable" },
    { path: "/dbs.png", alt: "DBS" },
    { path: "/easy.png", alt: "EASY" },
    { path: "/amd.png", alt: "AMD" },
  ];
  return (
    <main className="bg-secbg">
      <div className="flex flex-col items-center py-7 md:py-12">
        <div className="mb-1 md:mb-2">
          <h1 className="text-primary ">our trusted partners</h1>
        </div>
        <div>
          <ul className="md:mt-4 mt-7 grid grid-cols-2 md:grid-cols-5 text-cente ">
            {Image.map((item, index) => (
              <li key={index} className="px-4">
                <img src={item.path} alt={item.alt} className="text-center" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Partner;
