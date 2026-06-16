import { assets } from '../data/siteData';

export function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url("${assets.hero}")` }}>
      <div className="hero-overlay">
        <div className="container hero-content">
          <p className="eyebrow">College of Science and Engineering</p>
          {/* <h1>Educating leaders. Conducting world-class research and innovation. Serving society.</h1> */}
          <h1>Developing future leaders and transformative technologies for Qatar and the world</h1>
          <p>
            The College of Science and Engineering aims to be a world-class multidisciplinary college
            with significant positive impact on Qatar, the region, and globally.
          </p>
          <a className="button button-light" href="#">
            Find out more
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#programs">
        Scroll to explore more
      </a>
    </section>
  );
}
