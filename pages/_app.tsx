import "./index.css";
import "../custom.css";

import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import { checkInLocation } from "@api/getLocation";
import ItHome from "@components/pages/it-home";
import { useEffect } from "react";
import { useState } from "react";
import { Suspense } from "react";

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

// Shim requestIdleCallback in Safari
if (typeof window !== "undefined" && !("requestIdleCallback" in window)) {
  window.requestIdleCallback = (fn) => setTimeout(fn, 1);
  window.cancelIdleCallback = (e) => clearTimeout(e);
}

export const Loader = ({
  children,
  loading,
}: {
  children: ReactNode;
  loading: boolean;
}) => {
  return (
    <div>
      {" "}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-red-600 via-amber-300 to-orange-600 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  const [loading, setLoading] = useState(true);
  const [isLocation, setIsLcoation] = useState(false);

  const getData = async () => {
    setIsLcoation(await checkInLocation("Abu Dhabi"));

    setLoading(false);
  };

  useEffect(() => {
    console.log(getData());
  }, []);

  return (
    <SSRProvider>
      <>
        {/**
         * Globally defined svg linear gradient, for use in icons
         */}
        <svg height="0px" width="0px">
          <defs>
            <linearGradient
              id="pink-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(156, 81, 161, 1)" />
              <stop offset="70%" stopColor="rgba(255, 30, 86, 1)" />
            </linearGradient>
          </defs>
        </svg>
        <Loader loading={loading}>
          {isLocation ? <ItHome /> : <Component {...pageProps} />}
        </Loader>
      </>
    </SSRProvider>
  );
}
