import { newsItems } from '../data/siteData';
import { SectionHeader } from './SectionHeader';

export function NewsSection() {
  const [lead, ...items] = newsItems;

  return (
    <section className="section news-section">
      <div className="container">
        <SectionHeader title="News and Insights" action="View All News" />
        <div className="news-layout">
          <article className="featured-news">
            <div className="featured-news-image">
              <img src={lead.image} alt="" />
            </div>
            <div>
              <span className="news-kicker">Featured Story</span>
              <h3>{lead.title}</h3>
              <p>
                HBKU’s College of Science and Engineering convenes experts and stakeholders to
                explore applied research, digital innovation, resilience, and sustainability.
              </p>
              <time>{lead.date}</time>
              <a href="#">Read more</a>
            </div>
          </article>
          <div className="news-list">
            {items.map((item) => (
              <article key={item.title}>
                <div className="news-thumb">
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <span className="news-kicker">CSE News</span>
                  <h3>{item.title}</h3>
                  <time>{item.date}</time>
                  <a href="#">Read more</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
