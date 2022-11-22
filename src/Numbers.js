function Numbers(props) {
  return (
    <div className="flex flex-row justify-around text-white	  font-new">
      <div>
        <button
          onClick={props.yekOnclick}
          className={"  text-center h-11 w-11 rounded-full " + props.yekStyles}
        >
          {props.yek}
        </button>
      </div>
      <div>
        <button
          onClick={props.doOnclick}
          className="text-center h-11 w-11 rounded-full"
        >
          {props.do}
        </button>
      </div>
      <div>
        <button
          onClick={props.seOnclick}
          className="text-center h-11 w-11 rounded-full "
        >
          {props.se}
        </button>
      </div>
      <div className="text-center ">
        <button
          onClick={props.chaharOnclick}
          className={
            "h-11 w-11 rounded-full bg-gray-400 text-black " +
            props.chaharStyles
          }
        >
          {props.chahar}
        </button>
      </div>
    </div>
  );
}
export default Numbers;
