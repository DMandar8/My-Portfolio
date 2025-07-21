import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 animate-spin"></div>
        <p className="text-black text-sm md:text-base font-medium animate-pulse">
          🏝️ Preparing your journey to the island...<br/> Just A Sec.... Magic is loading...
        </p>
      </div>
    </Html>
  );
};

export default Loader;


