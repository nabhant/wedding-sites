import { useLayoutEffect, useRef } from 'react'
import {CalendarDays, MapPin} from 'lucide-react'
import gsap from 'gsap'
import shaadiCorner from '../assets/shaadiCorner.png'

function ShaadiHero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    /* =====================================================
       INITIAL STATES
    ====================================================== */

   gsap.set('.corner-top-left', {
      autoAlpha: 0,
      clipPath: 'circle(0% at 0% 0%)',
    })

    gsap.set('.corner-top-right', {
      autoAlpha: 0,
      clipPath: 'circle(0% at 100% 0%)',
    })

    gsap.set('.corner-bottom-left', {
      autoAlpha: 0,
      clipPath: 'circle(0% at 0% 100%)',
    })

    gsap.set('.corner-bottom-right', {
      autoAlpha: 0,
      clipPath: 'circle(0% at 100% 100%)',
    })

    gsap.set('.shaadi-kicker', {
      autoAlpha: 0,
      y: 18,
    })

    gsap.set('.shaadi-names', {
      autoAlpha: 0,
      y: 22,
    })

    gsap.set('.shaadi-subcopy', {
      autoAlpha: 0,
      y: 14,
    })


    gsap.set('.shaadi-divider', {
      autoAlpha: 0,
      y: 10,
    })

    gsap.set('.shaadi-event-details', {
      autoAlpha: 0,
      y: 18,
    })

    gsap.set('.shaadi-date', {
      autoAlpha: 0,
      y: 12,
    })

    gsap.set('.scroll-prompt', {
      autoAlpha: 0,
      y: 12,
    })


    /* =====================================================
       AUTOMATIC INTRO
    ====================================================== */

    const intro = gsap.timeline({
      delay: 0.15,
    })


    /* Corner artwork grows in */

    /* =====================================================
        CORNER ART GROWS FROM PAGE CORNERS
      ===================================================== */

  intro.to(
    ['.corner-top-right', '.corner-top-left', '.corner-bottom-right', '.corner-bottom-left'],{
    autoAlpha: 1,
    clipPath: 'circle(150% at 100% 0%)',
    duration: 1.1,
    ease: 'power2.inOut',
  })


    /* Invitation text */

    intro.to(
      '.shaadi-kicker',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      },
      '-=0.35'
    )

    intro.to(
      '.shaadi-names',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      },
      '-=0.2'
    )

    intro.to(
      '.shaadi-subcopy',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      },
      '-=0.15'
    )

    intro.to(
      '.shaadi-divider',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
      },
      '-=0.1'
    )

    intro.to(
      '.shaadi-event-details',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
      },
      '-=0.1'
    )
        intro.to(
          '.shaadi-detail',
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.16,
            ease: 'power3.out',
          },
          '-=0.15'
        )


    /* Scroll cue */

    intro.to('.scroll-prompt', {
      autoAlpha: 0.7,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  }, heroRef)

  return () => ctx.revert()
}, [])

  return (
    <section className="shaadi-hero" ref={heroRef}>
      {
      
      /* =================================================
          HAND-DRAWN PAGE CORNERS

          Original artwork is top-right oriented.
          CSS mirrors it into the other three corners.
      ================================================== */}

      <div className="shaadi-corners" aria-hidden="true">
        <div className="corner-reveal corner-top-left">
          <img
            src={shaadiCorner}
            alt=""
            className="corner-art corner-art-top-left"
          />
        </div>

        <div className="corner-reveal corner-top-right">
          <img
            src={shaadiCorner}
            alt=""
            className="corner-art corner-art-top-right"
          />
        </div>

        <div className="corner-reveal corner-bottom-left">
          <img
            src={shaadiCorner}
            alt=""
            className="corner-art corner-art-bottom-left"
          />
        </div>

        <div className="corner-reveal corner-bottom-right">
          <img
            src={shaadiCorner}
            alt=""
            className="corner-art corner-art-bottom-right"
          />
        </div>
      </div>

      {/* =================================================
          CENTER INVITATION
      ================================================== */}

      <div className="shaadi-shell">

        <div className="shaadi-copy">
          <p className="shaadi-kicker">
            TOGETHER WITH THE SUBZWARI AND TARIQ FAMILIES
          </p>

          <div className="shaadi-names">
            <h1>Nabiha Subzwari</h1>
            <span>&amp;</span>
            <h1>Nabhan Tariq</h1>
          </div>

          <p className="shaadi-subcopy">
            REQUEST THE HONOR OF YOUR PRESENCE 
            <br />
            AT THEIR WEDDING CEREMONY
          </p>

          {/* Decorative separator */}
          <div className="shaadi-divider" aria-hidden="true">
            <span className="shaadi-divider-line" />
            <span className="shaadi-divider-diamond">◆</span>
            <span className="shaadi-divider-line" />
          </div>

          <div className="shaadi-event-details">

            <div className="shaadi-detail">
              <CalendarDays
                className="shaadi-detail-icon"
                aria-hidden="true"
              />

              <div>
                <p className="shaadi-detail-main">
                  Friday, July 18, 2027
                </p>

                <p className="shaadi-detail-secondary">
                  7:00 PM
                </p>
              </div>
            </div>


            <div className="shaadi-detail">
              <MapPin
                className="shaadi-detail-icon"
                aria-hidden="true"
              />

              <div>
                <p className="shaadi-detail-main">
                  Pearl Banquet Hall
                </p>

                <p className="shaadi-detail-secondary">
                  276 W Old Country Rd
                  <br />
                  Hicksville, NY 11801
                </p>

                <a
                  href="https://maps.app.goo.gl/HAUqeJbmbUpV552T6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shaadi-map-link"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="scroll-prompt" aria-hidden="true">
        <span>SCROLL FOR DETAILS</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  )
}

export default ShaadiHero
