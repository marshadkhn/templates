import React from "react";

export default function Services({ images }) {
  return (
    <section
      id="service"
      className="bg-gradient-to-r from-blue-100 to-blue-200 py-16"
    >
      <div className="container mx-auto px-6 text-center md:px-24">
        <div className="mx-auto mb-12 max-w-3xl">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-800">
            Diensten, <span className="text-orange-500">Producten</span> &
            Afspraak
          </h2>
          <p className="text-lg text-gray-600">
            Ontdek ons brede aanbod, ontworpen om aan al je wensen te voldoen.
            Of je nu op zoek bent naar topdiensten, hoogwaardige producten, of
            een afspraak wilt maken, wij hebben het voor je!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Diensten Kaart */}
          {/* Service Card */}
          <div className="w-full overflow-hidden rounded-2xl bg-white shadow-lg sm:w-64">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  images[3] || "https://via.placeholder.com/1200x800"
                })`,
              }}
            ></div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                Onze Diensten
              </h3>
              <p className="text-sm text-gray-600">
                Ontdek onze vakkundig samengestelde diensten, op maat gemaakt om
                aan jouw specifieke behoeften te voldoen.
              </p>
            </div>
          </div>

          {/* Producten Kaart */}
          {/* Products Card */}
          <div className="w-full overflow-hidden rounded-2xl bg-white shadow-lg sm:w-64">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  images[3] || "https://via.placeholder.com/1200x800"
                })`,
              }}
            ></div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                Onze Producten
              </h3>
              <p className="text-sm text-gray-600">
                Blader door onze premium producten die garant staan voor
                kwaliteit en tevredenheid.
              </p>
            </div>
          </div>

          {/* Afspraak Kaart */}
          {/* Appointment Card */}
          <div className="w-full overflow-hidden rounded-2xl bg-white shadow-lg sm:w-64">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  images[3] || "https://via.placeholder.com/1200x800"
                })`,
              }}
            ></div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                Maak een Afspraak
              </h3>
              <p className="text-sm text-gray-600">
                Plan een afspraak met ons en laten we jouw ideeën tot leven
                brengen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
