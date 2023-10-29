// src/redux/actions/savedNews/unSaveNews.js
export const UNSAVE_NEWS = "UNSAVE_NEWS";

export const unSaveNews = (news) => {
  return {
    type: UNSAVE_NEWS,
    payload: news,
  };
};
