// src/api/summarize.js
import axios from "axios";

export const summarizeText = (text) =>
  axios.post("http://localhost:8000/analyze", { text });

export const summarizeUrl = (url) =>
  axios.post("http://localhost:8000/summarize_url", { text: url });
