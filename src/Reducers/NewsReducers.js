// NewsReducer.js
const initialState = {
    savedNews: [], // Daftar berita yang disimpan
    // Properti-properti Redux lainnya
  };
  
  const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_NEWS':
        return {
          ...state,
          savedNews: [...state.savedNews, action.payload],
        };
      // Tindakan lain yang perlu Anda tambahkan
      default:
        return state;
    }
  };
  
  export default NewsReducer;
  