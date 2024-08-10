"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const ReloadButton = () => {
  const router = useRouter();

  const onReload = () => {
    router.push(`/?refreshId=${new Date().getTime()}`);
  };
  return (
    <div>
      <Button onClick={onReload}>Reload Data</Button>
    </div>
  );
};

export default ReloadButton;
