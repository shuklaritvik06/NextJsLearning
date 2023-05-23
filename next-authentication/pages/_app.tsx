import { NextComponentType, NextPageContext } from "next";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps,
  session
}: {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
  session: Session;
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
