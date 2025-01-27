import bicycle1 from "../assets/images/bicycle1.jpg";
import bicycle2 from "../assets/images/bicycle2.jpg";
import bicycle3 from "../assets/images/bicycle3.jpg";

function Bicycle() {
  const bicycleImages = [bicycle1, bicycle2, bicycle3];
  const bicycles = [];
  for (let i = 0; i < bicycleImages.length; i++) {
    bicycles.push(
      <figure className="bicycle-item" key={i}>
        <img src={bicycleImages[i]} alt="bicycle image" key={i} />
        <figcaption className="caption bicycle-caption" key={`caption-${i}`}>
          <h2 className="headline">タイトルタイトル</h2>
          <p className="description">テキストテキスト</p>
        </figcaption>
      </figure>
    );
  }

  return (
    <section className="section">
      <h1 className="section-headline">Bicycle</h1>
      <div className="bicycle">{bicycles}</div>
    </section>
  );
}

export default Bicycle;
