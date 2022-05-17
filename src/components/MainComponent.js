import { Link } from "react-router-dom";

export function CardLayout(props) {
  return (
    <div className="flex justify-center m-10 flex-col w-60 p-3 bg-white">
      <Link to={"/" + props.goDetail}>{props.children}</Link>
    </div>
  );
}

export function BackButton() {
  return (
    <Link to="/" className=" bg-black text-white p-2">
      Back
    </Link>
  );
}
