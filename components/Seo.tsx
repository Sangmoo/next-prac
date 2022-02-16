import Head from "next/head";
import React from "react";

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
