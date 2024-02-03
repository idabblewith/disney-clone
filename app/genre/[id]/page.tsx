import React from "react";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
}
function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      GenrePage - ID: {id}, name: {genre}
    </div>
  );
}

export default GenrePage;
