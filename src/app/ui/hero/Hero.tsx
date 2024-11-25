import Description from "./description";
import Links from "./links";
import Tags from "./tags";
import Title from "./title";

export default function Hero() {
  return (
    <div className="">
      <Title />
      <Description />
      <div className="flex items-center justify-between mt-[5vh]">
        <Links />
        <Tags />
      </div>
    </div>
  );
}
