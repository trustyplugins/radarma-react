export const dataBackupdata = {
    getData() {
        return [
            {
            id: 1,            
            name: "Sed perspiciatis omni_File.sql",
            date:"27 Sep 2022 10:11AM",
            class:"action-language"           

        },
        {
            id: 2,           
            name: "Sed perspiciatis omni_File.sql",
            date:"27 Sep 2022 10:11AM",
            class:"action-language"            

        },
        {
            id: 3,            
            name: "Sed perspiciatis omni_File.sql",
            date:"27 Sep 2022 10:11AM",
            class:"action-language"
            

        },
        {
            id: 4,            
            name: "Sed perspiciatis omni_File.sql",
            date:"27 Sep 2022 10:11AM",
            class:"action-language"
            

        },
        {
            id: 5,
            name: "Sed perspiciatis omni_File.sql",
            date:"27 Sep 2022 10:11AM",
            class:"action-language"
            

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