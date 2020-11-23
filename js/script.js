// Per oggi saremo sulla milestone2, chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata


var app = new Vue({
  el: "#root",
  data: {
    selected:0, // proprietà che mi servirà per confrontare l'index al click
    users : [  // array con tutti i dati di ogni utente
      {
        name:"Michele",
        img:"img/avatar_1.jpg",
        chat: [
         {
           time:"16:28",
           msg:"ciao Michele come stai?",
           send:1
         },
         {
           time:"16:30",
           msg:"tutto bene,grazie",
           send:0
         },
         {
           time:"16:35",
           msg:"Te come va?",
           send:0
         }
       ]
      },
      {
        name:"Giovanni",
        img:"img/avatar_2.jpg",
        chat: [
         {
           time:"16:28",
           msg:"ciao Giovanni come stai?",
           send:1
         },
         {
           time:"16:29",
           msg:"Ho visto tuo fratello",
           send:1
         },
         {
           time:"16:40",
           msg:"tutto bene,grazie te?",
           send:0
         }
       ]
      },
      {
        name:"Fabio",
        img:"img/avatar_3.jpg",
        chat: [
         {
           time:"16:28",
           msg:"ciao Fabio come stai?",
           send:1
         },
         {
           time:"16:50",
           msg:"tutto bene,grazie te? come va?",
           send:0
         }
       ]
      },
      {
        name:"David",
        img:"img/avatar_4.jpg",
        chat: [
         {
           time:"16:05",
           msg:"ciao David come stai?",
           send:1
         },
         {
           time:"16:10",
           msg:"tutto bene,grazie!!!",
           send:0
         }
       ]
      },
   ]
  },
  methods: { // asociato al click la proprietà selected sarà uguale all'index cliccato
    selUser:function (index) {
      this.selected = index;
    },
    enterMsg: function (index) { // TEST milestone3, aggiungere un messaggio e ricevere una risposta
      this.users.chat.msg.push(users[selected].chat.msg.length+1)
      // this.time = "17:00";
      // this.send = 1;
    },
  }

})//// FUNZIONAAA
