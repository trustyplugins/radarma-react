export const languageService = {
    getData() {
      return [
        {
            "#": "1",
            "language": "English",
            "code": "en",
            "img1": "assets/admin/img/flags/us1.png"
        },
        {
            "#": "2",
            "language": "Arabic",
            "code": "ar",
            "img1": "assets/admin/img/flags/ae1.png"
        }
      ];
    },
  
    getLanguageSmall() {
      return Promise.resolve(this.getData().slice(0, 10));
    },
  
    getLanguageMedium() {
      return Promise.resolve(this.getData().slice(0, 50));
    },
  
    getLanguageLarge() {
      return Promise.resolve(this.getData().slice(0, 200));
    },
  
    getLanguageXLarge() {
      return Promise.resolve(this.getData());
    },
  };
  