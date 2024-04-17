import Image from "next/image";
const ServiceCompo = (props) => {
  return (
    <>
      <div className="flex flex-col items-start w-[280px] md:w-[360px] justify-start sm:mx-2 my-4 space-y-2 text-black">
        <div className="my-4">
          {" "}
          <Image
            src={`/images/${props.imageName}`}
            width={50}
            height={50}
            alt="box"
          />
        </div>
        <p className="text-[22px] font-medium">{props.name}</p>
        <p className="text-[16px]">{props.disp}</p>
      </div>
    </>
  );
};

export default ServiceCompo;
