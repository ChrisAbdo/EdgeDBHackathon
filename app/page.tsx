"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click me
      </Button>
    </div>
  );
}
