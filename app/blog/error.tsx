"use client";

type Props = {
  error: Error;
  reset: () => void;
};
export default function ErrorBoundary({error, reset}: Props) {

    return(
        <>
        <div>
            {error.message}
            <br />
            <button className="text-2xl bg-black text-white" onClick={reset}>Try again </button>
        </div>
        </>
    )
}
