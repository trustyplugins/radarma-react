export const menuManagement = {
    getData() {
        return [
            {
                id: 1,
                title: "Primary Menu",
                createdat: "30 Sep 2023",
                status: "Published",
                languageEdit: "",
                Action:""
            },
            {
                id: 2,
                title: "Footer",
                createdat: "30 Sep 2023",
                status: "Published",
                languageEdit: "",
                Action:""
            },
            {
                id: 3,
               title: "Main Menu",
               createdat: "14 Sep 2023",
               status: "Published",
               languageEdit: "",
               Action:""
            },
            {
                id: 4,
                title: "About",
                createdat: "14 Sep 2023",
                status: "Published",
                languageEdit: "",
                Action:""
            },
            {
                id: 5,
                title: "Main Menu",
                createdat: "10 Sep 2023",
                status: "Published",
                languageEdit: "",
                Action:""
            },
            {
                id: 6,
                title: "Main Menu",
                createdat: "23 Sep 2023",
                status: "Published",
                languageEdit: "",
                Action:""
            },
           
        ]
    },
    getContactMessagesSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getContactMessagesMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getContactMessagesLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getContactMessagesXLarge() {
        return Promise.resolve(this.getData());
    },
}