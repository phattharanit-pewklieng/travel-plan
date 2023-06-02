import { useEffect, useState } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs'
import './plan.css';

export const Plan = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      // const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const isHalfway = scrollPosition > scrollHeight / 2;
      setShowScrollToTop(isHalfway);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

     return (
    <>
      <div className="main-box">
        {showScrollToTop && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <BsArrowUpSquare />
          </div>
        )}
        <div className="content">
          <h1 className="box-plan-heading">Plan:</h1>
          <img
            src="https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80"
            alt=""
            className="photo-1"
          />
          <h2 className="box-plan-subheading">Sydney (13 - 17 June):</h2>
          <h3 className="box-plan-subheading">Day 1 (13 June):</h3>
          <p>
            Arrive in Sydney at 8 am and make your way to the Occidental Hotel.
            Check-in and freshen up.
          </p>
          <h4 className="box-plan-heading">Explore Sydney City:</h4>
          <ul>
            <li>Visit the Sydney Opera House and take a guided tour.</li>
            <li>
              Stroll along Circular Quay and enjoy the view of the Sydney Harbour
              Bridge.
            </li>
            <li>
              Explore The Rocks neighborhood, known for its historic buildings,
              shops, and restaurants.
            </li>
            <li>
              In the evening, head to Thai Town for dinner and enjoy authentic
              Thai cuisine.
            </li>
          </ul>

          <h3 className="box-plan-subheading">Day 2 (14 June):</h3>
          <ul>
            <li>
              Spend the day at Bondi Beach and take the Bondi to Coogee Coastal
              Walk.
            </li>
            <li>Enjoy lunch at one of the beachside cafes in Bondi.</li>
            <li>
              In the evening, explore the nightlife or dine at a restaurant in
              Chinatown.
            </li>
          </ul>

          <h3 className="box-plan-subheading">Day 3 (15 June):</h3>

          <h4 className="box-plan-heading">Take a day trip to the Blue Mountains:</h4>
          <ul>
            <li>Join a guided tour or take a train to Katoomba.</li>
            <li>
              Explore the stunning natural beauty, including the Three Sisters
              rock formation and scenic valleys.
            </li>
            <li>
              Enjoy a bushwalk or ride the Scenic Railway for panoramic views.
            </li>
            <li>Return to Sydney and have dinner in Chinatown.</li>
          </ul>

          <h3 className="box-plan-subheading">Day 4 (16 June):</h3>

          <ul>
            <li>Check out from the Occidental Hotel.</li>
            <li>
              During the evening, attend the Blackpink concert at 5 pm at the Qudos
              Bank Arena.
            </li>
            <li>
              After the concert, make your way to the airport for your flight to
              Melbourne.
            </li>
          </ul>

          <h3 className="box-plan-subheading">Day 5 (17 June):</h3>
        <ul>
          <li>
            After the concert, make your way to the airport for your flight to
            Melbourne.
          </li>
          <li>Vivid Sydney.</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="photo-1"
        />
        <h2 className="box-plan-subheading">Melbourne (17 - 21 June) :</h2>
        <h3 className="box-plan-subheading">Day 5 (17 June:) </h3>

        <ul>
          <li>
            Arrive in Melbourne at 6.50 pm and make your way to City Lifestyle
            Accommodation.
          </li>
          <li>Rest and relax after your flight.</li>
        </ul>
        <h3 className="box-plan-subheading">Day 6 (18 June:) </h3>
        <h4 className="box-plan-heading">Explore Melbourne City:</h4>
        <ul>
          <li>Visit Federation Square and explore the laneways.</li>
          <li>
            Explore Chinatown and enjoy a delicious dinner at a Chinese
            restaurant.
          </li>
        </ul>

        <h3 className="box-plan-subheading">Day 7 (19 June:) </h3>
        <h4 className="box-plan-heading">Take a day trip along the Great Ocean Road :</h4>
        <ul>
          <li>
            Join a guided tour or rent a car to drive along the scenic route.
          </li>
          <li>
            Visit attractions like the Twelve Apostles, Loch Ard Gorge, and the
            seaside town of Lorne.
          </li>
        </ul>

        <h3 className="box-plan-subheading">Day 7 (20 June:) </h3>
        <h4 className="box-plan-heading">Explore more of Melbourne city :</h4>
        <ul>
          <li>
            Visit Queen Victoria Market in the morning and explore the shops and
            food stalls.
          </li>
          <li>
            In the afternoon, head to St. Kilda and enjoy a stroll along the
            beach.
          </li>
        </ul>

        <h3 className="box-plan-subheading">Day 8 (21 June:) </h3>
        <h4 className="box-plan-heading">Explore more of Melbourne city :</h4>
        <ul>
          <li>Check out from City Lifestyle Accommodation.</li>
          <li>Depending on your flight time, you can :</li>
          <li>
            Explore more of Melbourne city, visit attractions, or shop for
            souvenirs.
          </li>
          <li>Make your way to the airport for your flight back to Sydney.</li>
          <li>
            Arrive in Sydney at 2.30 pm and make your way to the international
            terminal.
          </li>
          <li>Catch your flight back to Auckland at 7 pm.</li>
        </ul>
      </div>
    </div>
    
    </>
  )
}
export default Plan