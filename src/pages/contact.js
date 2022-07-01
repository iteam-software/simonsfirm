import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/Layout";
import GoogleMap from "../components/GoogleMap";

function contact({ location }) {
  return (
    <Layout
      url={location.href}
      pageTitle="Contact"
      description="Contact Simon's Law Firm LLP"
    >
      <div>
        <div
          css={css`
            background-image: url(/assets/building.jpg);
            background-position: center bottom;
            background-repeat: no-repeat;
            background-size: cover;
            height: 80vh;
            min-height: 400px;
            position: relative;
          `}
        ></div>
        <div className="block md:flex max-w-full py-2 px-4 md:pb-6 md:px-16 lg:pt-24 lg:pb-12 lg:px-32">
          <div className="md:w-1/2 flex flex-wrap">
            <div className="w-full text-lg flex justify-center py-5 bg-gray-500 text-white font-light">
              Contact Information
            </div>
            <div className="w-1/2 bg-gray-100 text-right pr-10 py-5 font-bold">
              Physical Address
            </div>
            <div className="w-1/2 bg-gray-100 text-center py-5">
              1660A Old Pecos Trail Santa Fe, NM 87505
            </div>
            <div className="w-1/2 text-right pr-10 py-5 font-bold">Mailing</div>
            <div className="w-1/2 text-center py-5">
              PO Box 5333 Santa Fe, NM 87502-5333
            </div>
            <div className="w-1/2 bg-gray-100 text-right pr-10 py-5 font-bold">
              Telephone
            </div>
            <div className="w-1/2 bg-gray-100 text-center py-5">
              505 988 5600
            </div>
            <div className="w-1/2 text-right pr-10 py-5 font-bold">Fax</div>
            <div className="w-1/2 text-center py-5">505 982 0185</div>
          </div>
          <div className="md:w-2/3 md:ml-4">
            <GoogleMap />
          </div>
        </div>
        <div className="flex flex-wrap max-w-full px-4 py-2 lg:px-32 lg:mb-10">
          <div className="w-full text-lg flex justify-center py-5 bg-gray-500 text-white font-light">
            Directions From:
          </div>
          <div className="w-1/3 bg-gray-100 text-right pr-10 py-5 font-bold">
            St Vincent Regional Medical Center Or St. Michael’s Drive
          </div>
          <div className="w-2/3 bg-gray-100 text-left py-5">
            <ol className="list-decimal">
              <li>
                Head southeast on St. Michael’s Drive (left onto St Michael’s
                Drive from Hospital Drive).
              </li>
              <li>Turn left onto Arroyo Chamiso.</li>
              <li>Turn left (just past the fire station) onto Calle Medico.</li>
              <li>Come around the “horse shoe” curve on Calle Medico.</li>
              <li>
                Our driveway is on the right, just past a street called Medico
                Lane (and across the street from Cuddy & McCarthy, which has a
                big green sign).
              </li>
            </ol>
          </div>
          <div className="w-1/3 text-right pr-10 py-5 font-bold">Downtown</div>
          <div className="w-2/3 text-left py-5">
            <ol className="list-decimal">
              <li>
                Take Old Santa Fe Trail out of town, it will become Old Pecos
                Trail.
              </li>
              <li>
                Take Old Pecos Trail past San Mateo and past the Women’s Club
                (on the right).
              </li>
              <li>
                Just past the Women’s Club, use the short right turn lane to
                turn right onto Calle Medico.
              </li>
              <li>Our driveway is the second one the left.</li>
            </ol>
          </div>
          <div className="w-1/3 bg-gray-100 text-right pr-10 py-5 font-bold">
            Interstate 25
          </div>
          <div className="w-2/3 bg-gray-100 text-left py-5">
            <ol className="list-decimal">
              <li>(Coming from the South) Old Pecos Trail exit.</li>
              <li>Turn LEFT at the end of the exit (onto Old Pecos Trail).</li>
              <li>
                On Old Pecos Trail, move into the right lane at, or before, Zia
                Road.
              </li>
              <li>
                Old Pecos Trail will veer off to the right after Zia Road.
              </li>
              <li>Take the first LEFT onto Calle Medico.</li>
              <li>
                Our driveway is the second one on the left. (Street sign says:
                1660A The Simons Firm, LLP)
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default contact;
