const localStorage = !window ? {} : window.localStorage;

class NewsStorageService {
  constructor() {
    this.upvoteList = {};
    this.hideList = {};
    this.onLoadSetItems();
  }

  onLoadSetItems() {
    try {
      this.upvoteList = this.getItem("upvotes") || {};
      this.hideList = this.getItem("hideList") || {};
    } catch (e) {
      console.error(e);
    }
  }

  saveUpvotes(data) {
    this.saveStorage("upvotes", data);
  }

  saveHideList(data) {
    this.saveStorage("hideList", data);
  }

  saveStorage(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default new NewsStorageService();
