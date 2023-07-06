"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
export default function Header() {
  return (
    <HeaderUl>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>회사개요</Link>
      </li>
      <li>
        <Link href={"/data"}>데이터</Link>
      </li>
      <li>
        <Link href={"/signin"}>로그인</Link>
      </li>
    </HeaderUl>
  );
}

const HeaderUl = styled.ul`
  display: flex;
  gap: 8px;
  li {
    border: 1px black solid;
  }
`;
