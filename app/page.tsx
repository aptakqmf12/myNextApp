"use client";
import Image from "next/image";
import styled from "styled-components";
import {
  useTransition,
  useDeferredValue,
  useState,
  useEffect,
  Suspense,
} from "react";

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState<string>("");

  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 30 }, (v, i) => i).map((d) => d);

    value === ""
      ? setList(arr)
      : setList(arr.filter((l) => l.toString().includes(value)));
  }, [value]);

  const onChangeInput = (e: any) => {
    const v = e.target.value;
    setValue(v);
  };

  return (
    <div className="home">
      <input onChange={onChangeInput} />
      {isPending && "로딩중.."}
      {/* <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: isPending ? "red" : "aqua ",
        }}
      ></div> */}

      {list.map((d, i) => (
        <div
          style={{ border: "1px black solid", marginBottom: 10, padding: 10 }}
          key={i}
        >
          {d}
        </div>
      ))}
      {/* <div>
        {[
          "https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg",
          "https://blog.kakaocdn.net/dn/YsYS3/btqCUcjAZ7r/m5X0e1aFeQfijCZ6ybLQE1/img.jpg",
          "https://blog.kakaocdn.net/dn/b5uTtj/btqCVDHxETv/roiutUKr6ynFW8RfVMS8NK/img.jpg",
          "https://blog.kakaocdn.net/dn/bSUrHp/btqCVEl74jO/fRQQHAAm7kSOxoN4QGDvV0/img.jpg",
          "https://blog.kakaocdn.net/dn/ckVyhP/btqCUx8S0Zr/ZL7wLO5ht5WyyURJ6Fbt2k/img.jpg",
        ].map((url, id) => (
          <div.img key={id}>
            <Image
              src={url}
              width={500}
              height={500}
              quality={10}
              style={{ objectFit: "cover" }}
              alt="카카오"
              blurDataURL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblur&psig=AOvVaw3wq2miXMVarnNJGXBbBw9R&ust=1687503613662000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjfkv2m1v8CFQAAAAAdAAAAABAE"
            />
          </div.img>
        ))}
      </div> */}
    </div>
  );
}
