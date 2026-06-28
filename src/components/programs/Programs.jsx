import "./programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  const programs = [
    {
      image: program_1,
      image_alt: "program_1",
      icon: program_icon_1,
      icon_alt: "program_icon_1",
      title: "Graduation Degree",
    },
    {
      image: program_2,
      image_alt: "program_2",
      icon: program_icon_2,
      icon_alt: "program_icon_2",
      title: "Masters Degree",
    },
    {
      image: program_3,
      image_alt: "program_3",
      icon: program_icon_3,
      icon_alt: "program_icon_3",
      title: "Post Graduation",
    },
  ];
  return (
    <div className="programs">
      {programs.map((program) => (
        <div className="program">
          <img src={program.image} alt={program.image_alt} />
          <div className="caption">
            <img src={program.icon} alt={program.icon_alt} />
            <p>{program.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
