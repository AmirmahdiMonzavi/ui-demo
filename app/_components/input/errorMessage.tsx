import Image from "next/image";

const ErrorMessage = ({ errorMessage = "" }: { errorMessage?: string }) => {
  return (
    errorMessage && (
      <div className="mt-1 flex items-center text-xs font-normal text-ir-06">
        <Image src="/triangleError.svg" alt="triangle_error_icon" width={16} height={16} />
        <span className="px-1 text-xs text-ir-06">{errorMessage}</span>
      </div>
    )
  );
};

export default ErrorMessage;
