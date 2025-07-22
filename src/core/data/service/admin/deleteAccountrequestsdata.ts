export const deleteAccountrequestsdata = {
    getData() {
        return [
          {
            id: "#2572",
             dates:"28 Sep 2022 16:43PM",
             dates1:"28 Sep 2022 16:43PM",
             customer:"assets/img/cutomer/user-01.jpg",
             content:"Confirm",
             customerName:"John Smith",
             email:"johnsmith@gmail.com",     
        },
        {
            id: "#4572",
            dates:"14 Sep 2022 16:43PM",
            dates1:"16 Sep 2022 16:43PM ",
             customer:"assets/img/cutomer/user-07.jpg",
             content:"Confirm",
             customerName:"Johnny",
             email:"Johnny@gmail.com",
        },
        {
            id: "#5324",
            dates:"04 Sep 2022 16:43PM",
            dates1:"06 Sep 2022 16:43PM ",
             customer:"assets/img/cutomer/user-09.jpg",
             content:"Confirm",
             customerName:"Robert",           
             email:"Robert@gmail.com",
            

        },
        {
            id: "#7651",            
            dates:"14 Sep 2022 16:43PM",
            dates1:"17 Sep 2022 16:43PM",             
             customer:"assets/img/cutomer/user-06.jpg",
             content:"Confirm",
             customerName:"Sharonda",          
             
             email:"sharonda@gmail.com", 

        },
        {
            
            id: "#54356",
            dates:"23 Sep 2022 16:43PM",
            dates1:"27 Sep 2022 16:43PM  ",
             
             customer:"assets/img/cutomer/user-04.jpg",
             content:"Confirm",
             customerName:"Nicholas",
            
             
             email:"nicholas@gmail.com",
             
            

        }
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