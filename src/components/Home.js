import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css'; // Include Font Awesome

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "play none none reverse"
    });

    gsap.to('.img-container', {
      scale: 52,
      ease: "ease",
      scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: "top top",
        end: "bottom",
        pin: true
      }
    });

    gsap.to('.right', {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1
      }
    });
    gsap.to('.left', {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: 1
      }
    });

    gsap.to('.txt-bottom', {
      autoAlpha: 0,
      letterSpacing: -10,
      duration: 2,
      scrollTrigger: {
        start: 2
      }
    });

    const tl = gsap.timeline();

    tl.from('.left-side div', {
      y: 150,
      opacity: 0,
      stagger: {
        amount: .4
      },
      delay: .5
    }).from('.right-side', { opacity: 0, duration: 2 }, .5)
      .to('.wrapper', { x: -window.innerWidth });

    ScrollTrigger.create({
      animation: tl,
      trigger: '.wrapper',
      start: "top top",
      end: "+=600",
      scrub: 1,
      pin: true,
      ease: "ease"
    });

    gsap.utils.toArray('.col').forEach(image => {
      gsap.fromTo(image, {
        opacity: .3,
        x: 0
      }, {
        opacity: 1,
        x: -50,
        scrollTrigger: {
          trigger: image,
          start: "10%",
          stagger: {
            amount: .4
          }
        }
      });
    });

    const timeline = gsap.timeline();

    timeline.from('.title span', {
      y: 150,
      skewY: 7,
      duration: 3
    }).from('.txt-bottom', {
      letterSpacing: -10,
      opacity: 0,
      duration: 3
    });
  }, []);

  return (
    <div className="wrapper">
      <section className="video-section">
        <div className="video-container">
        {/* <img src="./media/nk-2.svg" alt="" className="img" /> */}
          {/* <video src="./media/flower.mp4" autoPlay loop muted></video> */}
        </div>
        <div className="img-container">
          <img src="./media/window.png" alt="" className="img" />
        </div>

        <div className="text-content">
          <div className="img_txt">
            <div className="title sm left">
              <span>between</span>
            </div>
            <div className="title bg left">
              <span>Reality</span>
            </div>
            <div className="title bg right n">
              <span>&</span>
            </div>
            <div className="title bg right">
              <span>Dream</span>
            </div>
          </div>
          <p className="txt-bottom">
             Turning ideas into reality: Software Engineer
          </p>
        </div>

        <div className="v_container">
          <div className="left-side">
            <div className="tv">
              <div className="bg">Works</div>
              <div className="sm">the</div>
              <div className="bg bottom">envelope</div>
            </div>
            <div className="text-container">
              {/* <p>
                Photography has become a big part of almost
                every element of our lives.
              </p> */}
              {/* <p>
                It become widespread and diverse but we know that this is still a real form of art and
                magic.
              </p> */}
            </div>
          </div>
          <div className="right-side">
            <p>explore works <i className="fa-solid fa-arrow-right-long"></i></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="boxes-container">
          <div className="columns box1">
            {/* Box - 1 */}
            <div className="col col-1">
              <img src="./media/onetracker/CreateAccount.svg" alt="" />
              <img src="./media/onetracker/LogIn.svg" alt="" />
            </div>
            <div className="col-2">
              <h1>OneTracker</h1>
              <span>28 october 2023</span>
              <div className="line"></div>
              <div className="text-box">
                {/* <p>
                  This series is excellently showing that ordinary
                  portrait photography still can be inspiring for you.
                </p>
                <p>
                  Check the shots of beautiful Caroline in hat with red and green lights.
                </p> */}
              </div>
            </div>
            <div className="col col-3">
              <img src="./media/onetracker/BoardStructure.svg" alt="" />
              <img src="./media/onetracker/CreateStructure.svg" alt="" />
              <img src="./media/onetracker/DashboardStructure.svg" alt="" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="columns box2">
            <div className="col col-1">
            <img src="./media/parkingEye/Login.svg" alt="" />
              <img src="./media/parkingEye/Map.svg" alt="" />
            </div>
            <div className="col-2">
              <h1>Parking Eye</h1>
              <span>17 september 2023</span>
              <div className="line"></div>
              <div className="text-box">
                {/* <p>
                  Beautiful dance of Hanna in neon ligths with retro effect. Pink lights, pretty women
                  and sensuality.
                </p>
                <p>
                  Inspiring vibes and invisible beautiful soul on this shots.
                </p> */}
              </div>
            </div>
            <div className="col col-3">
              <img src="./media/parkingEye/Reports.svg" alt="" />
              <img src="./media/parkingEye/Map.svg" alt="" />
              <img src="./media/parkingEye/Map.svg" alt="" />
            </div>
          </div>

           {/* Box 3 */}
          <div className="columns box3">
            <div className="col col-1">
            </div>
            <div className="col-2">
              <h1>HinduEvents</h1>
              <span>1 september 2021</span>
              <div className="line"></div>
              <div className="text-box">
                {/* <p>
                  Retro nostagia can be sweet and sour at the same time. Christina helped us to make
                  photos, that will give you this feelings.
                </p>
                <p>
                  Drop in past times with this collection of 80's styled photos.
                </p> */}
              </div>
            </div>
            <div className="col col-3">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
