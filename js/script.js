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
           msgSent:"ciao Michele come stai?",
         },
         {
           time:"16:30",
           msgRcv:"tutto bene,grazie",
         }
       ]
      },
      {
        name:"Giovanni",
        img:"img/avatar_2.jpg",
        chat: [
         {
           time:"16:28",
           msgSent:"ciao Giovanni come stai?",
         },
         {
           time:"16:40",
           msgRcv:"tutto bene,grazie",
         }
       ]
      },
      {
        name:"Fabio",
        img:"img/avatar_3.jpg",
        chat: [
         {
           time:"16:28",
           msgSent:"ciao Fabio come stai?",
         },
         {
           time:"16:50",
           msgRcv:"tutto bene,grazie",
         }
       ]
      },
      {
        name:"David",
        img:"img/avatar_4.jpg",
        chat: [
         {
           time:"16:05",
           msgSent:"ciao David come stai?",
         },
         {
           time:"16:10",
           msgRcv:"tutto bene,grazie",
         }
       ]
      },
   ]
  },
  methods: { // asociato al click la proprietà selected sarà uguale all'index cliccato
    selUser:function (index) {
      this.selected = index;
    }
  }

})//// FUNZIONAAA
