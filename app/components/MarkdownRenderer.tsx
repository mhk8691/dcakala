"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("./content.md")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <Box border={1} borderRadius={2} p={5}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;
