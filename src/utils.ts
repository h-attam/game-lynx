import type { MainThread } from "@lynx-js/types";

export const getGameImage = (imageId?: string) => {
  if (!imageId) return "https://via.placeholder.com/150"; // Yedek görsel
  return `https://images.igdb.com/igdb/image/upload/t_1080p/${imageId}.webp`;
};

export const handleTapStart = (e: MainThread.TouchEvent) => {
  "main thread";
  e.currentTarget.setStyleProperty("background-Color", "#16c47f");
};

export const handleTapEnd = (e: MainThread.TouchEvent) => {
  "main thread";
  e.currentTarget.setStyleProperty("background-Color", "#fff");
};
