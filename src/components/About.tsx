import author from "../assets/images/author.jpg";

function About() {
  return (
    <section className="section">
      <h1 className="section-headline">About</h1>
      <figure className="about">
        <img src={author} alt="About" />
        <figcaption className="caption about-caption">
          <h2 className="headline">KAKERU MIYAICHI</h2>
          <p className="description">
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

export default About;
