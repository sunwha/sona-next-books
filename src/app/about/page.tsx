import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About | Sona next books",
};

export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
      </p>
      <p>We hope you enjoy your stay!</p>
    </>
  );
}
