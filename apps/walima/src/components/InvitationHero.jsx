import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import {CalendarDays, MapPin} from 'lucide-react'

import BotanicalLeft from './BotanicalLeft'
import BotanicalRight from './BotanicalRight'

function InvitationHero() {
  // Used as the ScrollTrigger target and also scopes GSAP selectors
  // to this component through gsap.context().
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         INITIAL VISUAL STATE

         State 1 begins with only the Bismillah visible.
         Everything else is hidden until the user scrolls.
      ====================================================== */

      gsap.set('.bismillah', {
        autoAlpha: 0,
        scale: 1.35,
        y: 120,
      })

      // Begins below its final position so it can float upward on load.
      gsap.set('.scroll-prompt', {
        autoAlpha: 0,
        y: 35,
      })

      gsap.set('.invitation-line', {
        autoAlpha: 0,
        y: 20,
      })

      gsap.set('.couple-names', {
        autoAlpha: 0,
        y: 30,
      })

      // Divider begins collapsed at its center.
      gsap.set('.divider', {
        scaleX: 0,
        transformOrigin: 'center center',
      })

      gsap.set('.presence-line', {
        autoAlpha: 0,
        y: 20,
      })

      gsap.set('.event-details', {
        autoAlpha: 0,
        y: 25,
      })

      // Stem PNG is hidden with a bottom-to-top clipping mask.
      gsap.set('.botanical-stem-image', {
        clipPath: 'inset(100% 0% 0% 0%)',
      })

      // Flower/leaf heads begin hidden and slightly lower.
      gsap.set('.botanical-head-image', {
        autoAlpha: 0,
        y: 30,
      })


      /* =====================================================
         PAGE LOAD — STATE 1

         Bismillah fades in first.
         Scroll cue follows shortly afterward.
      ====================================================== */

      gsap.to('.bismillah', {
        autoAlpha: 1,
        duration: 1.2,
        ease: 'power2.out',
      })

      gsap.to('.scroll-prompt', {
        autoAlpha: 0.7,
        y: 0,
        duration: 1.1,
        delay: 0.7,
        ease: 'power2.out',
      })


      /* =====================================================
         SCROLL-DRIVEN STORYBOARD

         The hero stays pinned while the invitation assembles.

         Current scroll distance:
         2000px

         Increase this later if the sequence feels too fast.
      ====================================================== */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=2000',

          scrub: 1,
          pin: true,
          anticipatePin: 1,

          // Useful while adjusting scroll timings:
          // markers: true,
        },
      })


      /* =====================================================
         STATE 1 → STATE 2

         Scroll cue disappears while Bismillah shrinks/moves
         into its final invitation position.
      ====================================================== */

      timeline.to(
        '.scroll-prompt',
        {
          autoAlpha: 0,
          y: -25,
          duration: 0.4,
          ease: 'none',
        },
        0
      )

      timeline.to(
        '.bismillah',
        {
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: 'none',
        },
        0
      )


      /* Invitation wording appears. */

      timeline.to('.invitation-line', {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'none',
      })


      /* Couple names appear. */

      timeline.to('.couple-names', {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: 'none',
      })


      /* =====================================================
         STATE 2 → STATE 3

         Divider expands outward from the center.
         Event information then appears beneath it.
      ====================================================== */

      timeline.to('.divider', {
        scaleX: 1,
        duration: 0.8,
        ease: 'none',
      })

      timeline.to('.presence-line', {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'none',
      })

      timeline.to('.event-details', {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'none',
      })


      /* =====================================================
         STATE 3 → STATE 4

         Painted stems reveal upward.
         Flowers/leaves appear as the stems near completion.
      ====================================================== */

      timeline.to('.botanical-stem-image', {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4,
        ease: 'none',
      })

      timeline.to(
        '.botanical-head-image',
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'none',
        },
        '-=0.6'
      )


      /* =====================================================
         STATE 4 HOLD

         Deliberate pause so guests have time to look at and
         read the fully assembled invitation before continuing.
      ====================================================== */

      timeline.to({}, {
        duration: 1.5,
      })
    }, heroRef)

    // Removes GSAP styles and ScrollTriggers if this component unmounts.
    return () => ctx.revert()
  }, [])


  return (
    <section
      className="invitation-hero"
      ref={heroRef}
    >
      {/* Main formal invitation content */}
      <div className="invitation-content">

        <div className="invitation-intro">

          <div
            className="bismillah"
            role="img"
            aria-label="Bismillah"
          />

          <p className="invitation-line">
            THE TARIQ AND SUBZWARI FAMILIES INVITE YOU TO ATTEND
            THE WALIMA CEREMONY OF
          </p>

          <div className="couple-names">
            <h1>Nabhan Tariq</h1>
            <span>and</span>
            <h1>Nabiha Subzwari</h1>
          </div>

        </div>


        <div className="invitation-details">

          <div className="divider" />

          <p className="presence-line">
            WE REQUEST THE HONOR OF YOUR PRESENCE ON:
          </p>

          <div className="event-details">

            <div className="detail-row">
              <div className="detail-icon" aria-hidden="true">
                <CalendarDays />
              </div>

              <p>
                SUNDAY, JULY 18th, 2027
                <span className="detail-separator">|</span>
                11:30 AM
              </p>
            </div>


            <div className="detail-row">
              <div className="detail-icon" aria-hidden="true">
                <MapPin />
              </div>

              <div>
                <p className="venue-name">
                  The Tides Estate
                </p>

                <p className="venue-address">
                  1245 Belmont Ave, North Haledon, NJ 07508
                </p>

                <a
                  href="https://maps.app.goo.gl/jzUUMPDtd37RtYeA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-link"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>


      {/* Decorative botanicals sit independently of invitation layout. */}
      <BotanicalLeft />
      <BotanicalRight />


      {/*
        State 1 navigation cue.

        Kept outside .invitation-content so it stays anchored
        to the bottom-center of the viewport rather than moving
        with the invitation itself.
      */}
      <div
        className="scroll-prompt"
        aria-hidden="true"
      >
        <span>SCROLL TO CONTINUE</span>
        <span className="scroll-arrow">↓</span>
      </div>

    </section>
  )
}

export default InvitationHero