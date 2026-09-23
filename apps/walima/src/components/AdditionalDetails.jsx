function AdditionalDetails() {
  return (
    <section className="additional-details">

      <div className="details-content">

        <header className="details-intro">
          <p className="details-eyebrow">
            WE LOOK FORWARD TO YOUR ATTENDANCE
          </p>

          <h2>
            Kindly RSVP by June XX, 2027
          </h2>

          <a
            href="#"
            className="rsvp-button"
          >
            RSVP
          </a>
        </header>


        <div className="guest-information">

    {/* Attire */}
    <div className="info-block">
        <p className="info-label">
        ATTIRE
        </p>

        <p>
        Soft pastels and neutral tones are warmly encouraged.
        </p>

        <div
        className="color-palette"
        aria-label="Recommended color palette"
        >

          <span className="swatch swatch-ivory" />
          <span className="swatch swatch-butter-yellow" />
          <span className="swatch swatch-tangerine" />
          <span className="swatch swatch-baby-pink" />
          <span className="swatch swatch-lilac" />
          <span className="swatch swatch-baby-blue" />
          
        </div>
    </div>


    {/* Accommodations */}
    <div className="info-block">
        <p className="info-label">
        ACCOMMODATIONS
        </p>

        <p>
        Several hotels are available near The Tides Estate
        for guests traveling to celebrate with us.
        </p>

        <a
        href="https://www.google.com/maps/search/hotels+near+The+Tides+Estate+North+Haledon+NJ"
        target="_blank"
        rel="noopener noreferrer"
        className="details-link"
        >
        View Nearby Hotels
        </a>
    </div>


    {/* Gifts */}
    <div className="info-block">
        <p className="info-label">
        GIFTS
        </p>

        <p>
        Your presence and blessings are sincerely appreciated.
        Kindly, no boxed gifts.
        </p>
    </div>

    </div>

        </div>
    </section>
  )
}

export default AdditionalDetails