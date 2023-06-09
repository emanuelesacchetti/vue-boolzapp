const { createApp } = Vue

const DateTime = luxon.DateTime;

createApp({
data() {
    return {
        myAvatar: {
            name: 'Emanuele',
            avatar: './img/avatar_7.jpg',
        },
        selectedIndex: 0,
        newMessage: '',
        searchContact: '',
        offcanvas: false,
        messageIndex: 0,
        pippo:3,
        fraseRandom: [
                        'se son rose fioriranno',
                        'non ci sono più le mezze stagioni',
                        "campa cavallo che l'erba cresce",
                        'supercalifraggilistichespiralitoso'
                     ],
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                            }
                        ]
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                            {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                            },
                            {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                            },
                            {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                            }
                        ]
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                            {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                            },
                            {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                            },
                            {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                            }
                        ]
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                            }
                        ]
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                            }
                        ]
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                            },
                            {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                            }
                        ]
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                            }
                        ]
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                            }
                        ]
            }
            ]
    }
},
mounted(){
    this.addMenuKey()
    console.log(this.fraseRandom[this.randomNumber(this.fraseRandom.length-1,0)])
},
methods: {
    selectContact(indice){
        this.selectedIndex = indice;
        this.offcanvasOff()
    },
    addMessage(element){
        console.log('mio mex')
        let that = this;
        let sentMessage = {
                            date: DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
                            message: element,
                            status: 'sent',
                            menu: false,
                            show: true
                        };
        if(element != ''){
            that.contacts[that.selectedIndex].messages.push(sentMessage);
            that.newMessage = '';
            setTimeout(function(){
                
            })
            setTimeout(function(){
                console.log('suo mex');
                let receivedMessage = {
                                        date:DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
                                        message: that.fraseRandom[that.randomNumber(that.fraseRandom.length-1,0)],
                                        status: 'received',
                                        menu: false,
                                        show: true
                                      };
                                   
                that.contacts[that.selectedIndex].messages.push(receivedMessage);
                
            },2000);
        }                
        
        
        },
        searchName(){
            let search = this.searchContact.toLowerCase();

            this.contacts.forEach((contatto) => {

                if (contatto.name.toLowerCase().includes(search)) { 
                    contatto.visible = true;
                } else {
                    contatto.visible = false;
                }
            });

        },
        apriMenu(element, indice){
            element.menu = !element.menu,
            this.messageIndex = indice,
            console.log(this.messageIndex),
            console.log(indice)
        },
        addMenuKey(){
            this.contacts.forEach((singoloContatto)=>{
                singoloContatto.messages.forEach((singoloMessaggio)=>{
                    singoloMessaggio.menu = false
                    singoloMessaggio.show = true
                })
            })
        },
        offcanvasOn(){
            this.offcanvas = true
        },
        offcanvasOff(){
            this.offcanvas = false
        },
        show(element){
            element.show = false
        },
        getOnlyTime(dateTime){
           return DateTime.fromFormat(dateTime, 'dd/MM/yyyy HH:mm:ss').toFormat('HH:mm');
        },
        splitDate(data){
            let splitDate = data.split(' ');
            return splitDate
        },
        randomNumber(max,min){
            let numeroCasuale = Math.floor(Math.random() * (max-min+1))+min;
            return numeroCasuale;
        }
    }
}
).mount('#app')