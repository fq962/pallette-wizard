import { useState } from "react";

export const PaletteCard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    setIsCopied(true); // Mostrar "Copied"
    setTimeout(() => {
      setIsCopied(false); // Volver al ícono después de 1.5 segundos
    }, 800);
  };

  return (
    <div className="card sm:max-w-44 h-52 bg-[#E6F4E6] group relative overflow-hidden">
      <div className="card-body flex flex-col items-center justify-center h-full relative transition-all duration-500">
        <h5 className="card-title mb-2.5 opacity-80 group-hover:translate-y-[-10px] transition-transform duration-500">
          #E6F4E6
        </h5>
        <p className="opacity-80 group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-500">
          Honeydow
        </p>
        <span
          className={`${
            isCopied ? "opacity-0" : "opacity-0 group-hover:opacity-80"
          } group-hover:translate-y-[-20px] icon-[tabler--copy] text-base-content/80 size-6 transition-all duration-500 absolute bottom-8 cursor-pointer`}
          onClick={handleCopyClick}
        ></span>
        {isCopied && (
          <span className="opacity-80 font-bold translate-y-[-20px] text-base-content/80 absolute bottom-8 transition-opacity duration-500">
            copied
          </span>
        )}
      </div>
    </div>
  );
};
