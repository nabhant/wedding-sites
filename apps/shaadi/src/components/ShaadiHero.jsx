import { useLayoutEffect, useRef } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import shaadiCorner from '../assets/shaadiCorner.png'

gsap.registerPlugin(ScrollTrigger)

function ShaadiHero() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      /* =====================================================
         HERO INITIAL STATES
      ===================================================== */

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

      gsap.set(
        [
          '.shaadi-bismillah',
          '.shaadi-kicker',
          '.shaadi-names',
          '.shaadi-subcopy',
          '.shaadi-divider',
          '.shaadi-detail',
          '.scroll-prompt',
        ],
        {
          autoAlpha: 0,
          y: 16,
        }
      )

      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      if (reduceMotion) {
        gsap.set('.corner-top-left', {
          autoAlpha: 1,
          clipPath: 'circle(150% at 0% 0%)',
        })

        gsap.set('.corner-top-right', {
          autoAlpha: 1,
          clipPath: 'circle(150% at 100% 0%)',
        })

        gsap.set('.corner-bottom-left', {
          autoAlpha: 1,
          clipPath: 'circle(150% at 0% 100%)',
        })

        gsap.set('.corner-bottom-right', {
          autoAlpha: 1,
          clipPath: 'circle(150% at 100% 100%)',
        })

        gsap.set(
          [
            '.shaadi-bismillah',
            '.shaadi-kicker',
            '.shaadi-names',
            '.shaadi-subcopy',
            '.shaadi-divider',
            '.shaadi-detail',
            '.scroll-prompt',
            '.section-transition-line',
            '.section-transition-symbol',
            '.shaadi-info-block',
            '.shaadi-section-divider',
          ],
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            scaleX: 1,
          }
        )

        return
      }

      /* =====================================================
         AUTOMATIC HERO INTRO
      ===================================================== */

      const intro = gsap.timeline({ delay: 0.15 })

      intro.addLabel('corners')

      intro.to(
        '.corner-top-right',
        {
          autoAlpha: 1,
          clipPath: 'circle(150% at 100% 0%)',
          duration: 1.15,
          ease: 'power2.inOut',
        },
        'corners'
      )

      intro.to(
        '.corner-top-left',
        {
          autoAlpha: 1,
          clipPath: 'circle(150% at 0% 0%)',
          duration: 1.15,
          ease: 'power2.inOut',
        },
        'corners'
      )

      intro.to(
        '.corner-bottom-right',
        {
          autoAlpha: 1,
          clipPath: 'circle(150% at 100% 100%)',
          duration: 1.15,
          ease: 'power2.inOut',
        },
        'corners'
      )

      intro.to(
        '.corner-bottom-left',
        {
          autoAlpha: 1,
          clipPath: 'circle(150% at 0% 100%)',
          duration: 1.15,
          ease: 'power2.inOut',
        },
        'corners'
      )

      intro.to('.shaadi-bismillah', {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      })

      intro.to(
        '.shaadi-kicker',
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        },
        '-=0.3'
      )

      intro.to(
        '.shaadi-names',
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
        },
        '-=0.18'
      )

      intro.to(
        '.shaadi-subcopy',
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        },
        '-=0.12'
      )

      intro.to(
        '.shaadi-divider',
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: 'power2.out',
        },
        '-=0.08'
      )

      intro.to(
        '.shaadi-detail',
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.14,
          ease: 'power3.out',
        },
        '-=0.08'
      )

      intro.to('.scroll-prompt', {
        autoAlpha: 0.78,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })

      /* =====================================================
         HERO -> DETAILS TRANSITION
      ===================================================== */

      const detailsTransition = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-transition',
          start: 'top 88%',
          once: true,
        },
      })

      detailsTransition.from('.section-transition-line', {
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      })

      detailsTransition.from(
        '.section-transition-symbol',
        {
          autoAlpha: 0,
          scale: 0.4,
          duration: 0.4,
          ease: 'back.out(1.8)',
        },
        '-=0.35'
      )

      detailsTransition.from(
        '.shaadi-rsvp-block',
        {
          autoAlpha: 0,
          y: 30,
          duration: 0.75,
          ease: 'power3.out',
        },
        '-=0.08'
      )

      /* Fade the hero scroll cue away as the user leaves the hero. */
      gsap.to('.scroll-prompt', {
        autoAlpha: 0,
        y: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.shaadi-hero',
          start: 'bottom 95%',
          end: 'bottom 65%',
          scrub: true,
        },
      })

      /* =====================================================
         LOWER INFORMATION REVEALS
      ===================================================== */

      gsap.utils
        .toArray('.shaadi-info-block:not(.shaadi-rsvp-block)')
        .forEach((block) => {
          gsap.from(block, {
            autoAlpha: 0,
            y: 28,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 86%',
              once: true,
            },
          })
        })

      gsap.utils.toArray('.shaadi-section-divider').forEach((divider) => {
        gsap.from(divider, {
          autoAlpha: 0,
          scaleX: 0.65,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: divider,
            start: 'top 90%',
            once: true,
          },
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="shaadi-page" ref={pageRef}>
      <section className="shaadi-hero">
        {/* =================================================
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
            <div
              className="shaadi-bismillah"
              role="img"
              aria-label="Bismillah"
            />

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
                    Friday, July 16, 2027
                  </p>

                  <p className="shaadi-detail-secondary">7:00 PM</p>
                </div>
              </div>

              <div className="shaadi-detail">
                <MapPin className="shaadi-detail-icon" aria-hidden="true" />

                <div>
                  <p className="shaadi-detail-main">Pearl Banquet Hall</p>

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


      {/* =================================================
          ADDITIONAL INFORMATION
      ================================================== */}

      <section className="shaadi-information">

        
      {/* =================================================
          HERO -> DETAILS BRIDGE
      ================================================== */}

      <div className="section-transition" aria-hidden="true">
        <span className="section-transition-line" />
        <span className="section-transition-symbol">◆</span>
        <span className="section-transition-line" />
      </div>

      
        <div className="shaadi-info-block shaadi-rsvp-block">
          <p className="shaadi-info-eyebrow">WE HOPE YOU CAN JOIN US</p>

          <h2>Kindly Respond by May XX, XXXX</h2>

          <p>
            Please let us know if you will be joining us for our celebration.
          </p>

          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="shaadi-rsvp-button"
          >
            RSVP
          </a>
        </div>

        <div className="shaadi-section-divider" aria-hidden="true">
          <span />
          <span className="shaadi-section-diamond">◆</span>
          <span />
        </div>

        <div className="shaadi-info-block">
          <p className="shaadi-info-eyebrow">GIFTS</p>

          <h2>Your Presence Is Our Gift</h2>

          <p>
            Your presence and blessings are sincerely appreciated. Kindly, no
            boxed gifts.
          </p>
        </div>

        <div className="shaadi-section-divider" aria-hidden="true">
          <span />
          <span className="shaadi-section-diamond">◆</span>
          <span />
        </div>

        <div className="shaadi-info-block">
          <p className="shaadi-info-eyebrow">ACCOMMODATIONS</p>

          <h2>Nearby Hotels</h2>

          <p>
            For guests traveling from out of town, several hotels are available
            near Pearl Banquet Hall.
          </p>

          <a
            href="https://www.google.com/maps/search/hotels+near+Pearl+Banquet+Hall+Hicksville+NY"
            target="_blank"
            rel="noopener noreferrer"
            className="shaadi-text-link"
          >
            View Nearby Hotels
          </a>
        </div>
      </section>
    </div>
  )
}

export default ShaadiHero
