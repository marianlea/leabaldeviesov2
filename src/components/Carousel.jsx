import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  project,
  currentProjectImgIdx,
  onClickPreviousButton,
  onClickNextButton,
  totalProj,
}) {
  return (
    <div className="carousel overflow-hidden relative w-full">
      <div className="w-full flex items-center justify-center">
        <p className="mb-6 border-hrLine border rounded-2xl w-3/4 py-1 text-mainGray tracking-widest flex items-center justify-center">{`Project ${project.ref} of ${totalProj}`}</p>
      </div>
      <div
        className="carousel-container flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentProjectImgIdx * 100}%)` }}
      >
        {project.images.map((image, idx) => (
          <img key={idx} src={image} alt={`${project.name} website`} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <hr className="w-9/12 mt-3 text-hrLine"></hr>
      </div>
      <div className="arrows-container absolute inset-0 flex items-center justify-between p-2">
        <button
          className="rounded-full border-1 text-ceramic-50 border-ceramic-50 hover:bg-ceramic-50 hover:opacity-50"
          onClick={onClickPreviousButton}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          className="rounded-full border-1 text-ceramic-50 border-ceramic-50 hover:bg-white hover:opacity-50"
          onClick={onClickNextButton}
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="indicators-container absolute bottom-5 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {project.images.map((image, idx) => (
            <div
              key={idx}
              className={`indicator rounded-full transition-all w-2 h-2 bg-ceramic-50 opacity-70 ${
                currentProjectImgIdx === idx ? "bg-cobalt-50" : "bg-opacity-50 "
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
