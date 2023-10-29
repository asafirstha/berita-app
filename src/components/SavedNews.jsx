import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import "./SavedNews.css";

const setSavedNews = (news) => {
  return {
    type: 'SET_SAVED_NEWS',
    payload: news,
  };
};

const unSaveNews = (news) => {
  return {
    type: 'UNSAVE_NEWS',
    payload: news,
  };
};

const SavedNews = ({ savedNews, setSavedNews, unSaveNews }) => {
  useEffect(() => {
    // Load saved news from localStorage
    const savedNewsData = localStorage.getItem('savedNews');
    if (savedNewsData) {
      setSavedNews(JSON.parse(savedNewsData));
    }
  }, []);

  // Handler untuk menghapus berita yang disimpan
  const handleUnSave = (article) => {
    // Filter berita yang disimpan dan simpan yang tidak ingin dihapus
    const updatedSavedNews = savedNews.filter((savedArticle) => savedArticle.title !== article.title);

    // Perbarui state dengan berita yang disimpan yang telah diperbarui
    setSavedNews(updatedSavedNews);

    // Simpan perubahan ke localStorage
    localStorage.setItem('savedNews', JSON.stringify(updatedSavedNews));
  };

  return (
    <div>
      <h2>Berita yang Disimpan</h2>
      <table>
        <thead>
          <tr>
            <th>Judul Berita</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {savedNews.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>
                <button onClick={() => handleUnSave(article)}>Un-Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedNews: state.savedNews,
});

export default connect(mapStateToProps, { setSavedNews, unSaveNews })(SavedNews);
