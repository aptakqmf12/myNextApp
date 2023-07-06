"use client";

import React, { useState, useEffect } from "react";

interface DataType {
  id: number;
  title: string;
  userId: number;
}

export default function DataPage() {
  const [list, setList] = useState<DataType[]>([]);

  const record = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL as string}/albums`
    );

    setList(await res.json());
  };

  useEffect(() => {
    record();
  }, []);

  return (
    <div>
      <h3>DataPage</h3>

      <ul>
        {list?.map((l, i) => (
          <li key={i}>{l.title}</li>
        ))}
      </ul>
    </div>
  );
}
