import "./campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  const gallery = [
    {
      image: gallery_1,
      image_alt: "gallery_1",
    },
    {
      image: gallery_2,
      image_alt: "gallery_2",
    },
    {
      image: gallery_3,
      image_alt: "gallery_3",
    },
    {
      image: gallery_4,
      image_alt: "gallery_4",
    },
  ];
  return (
    <div className="campus" id="campus">
      <div className="gallery">
        {gallery.map((image) => (
          <img src={image.image} alt={image.image_alt} />
        ))}
      </div>

      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="white_arrow" />
      </button>
    </div>
  );
};

export default Campus;
