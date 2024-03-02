import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        This demo developed By{" "}
        <a className="text-dark" href="https://fpw8.azurewebsites.net/">
          Frank Zhou
        </a>
      </div>
    </>
  );
}
