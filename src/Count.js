function Count(props) {
  return (
    <div className="flex flex-col p-5 justify-end text-right h-[240px] ">
      <span className=" text-5xl font-thin text-white  font-new ">
        {props.number}
      </span>
      <span className="mb-20 mt-5 text-violet-500 text tracking-wide	">
        {props.count}
      </span>
    </div>
  );
}
export default Count;
