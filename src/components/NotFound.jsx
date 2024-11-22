import "../../public/notfound.css";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="notfound text-[10vw]" title="404">
        404
      </h1>
      <p className="text-md text-center">
        The page you are looking for is not available
      </p>
    </div>
  );
};
export default NotFound;
