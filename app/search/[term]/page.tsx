import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    term: string;
  };
}

function Page({ params: { term } }: Props) {
  if (!term) notFound();
  const decodedTerm = decodeURI(term);

  return <div>Term: {decodedTerm}</div>;
}

export default Page;
