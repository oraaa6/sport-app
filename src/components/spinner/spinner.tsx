import SpinnerImage from "@/assets/icons/spinner.svg";

type SpinnerProps = {
  className: string;
};
export function Spinner({ className }: SpinnerProps) {
  return (
    <img
      src={SpinnerImage}
      className={className}
      alt="loading-spinner"
      width={100}
      height={100}
    />
  );
}
