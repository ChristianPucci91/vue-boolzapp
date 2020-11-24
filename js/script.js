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
   ],
   newMsg:{ // nuovo array per i messaggi inviati
     time:"16:10",
     msg:"",
     send:1
   },
   cpuMsg:{ // nuovo array per i messaggi inviativ dalla cpu
     time:"16:11",
     msg:"",
     send:0
   },

  },
  methods: { // asociato al click la proprietà selected sarà uguale all'index cliccato
    selUser: function (index) {
      this.selected = index;
    },
    enterMsg: function (index) { // milestone3, aggiungere un messaggio e ricevere una risposta
      // aggiunto bonus risposta randomizzata presa da un array
      this.getTime();
      this.users[this.selected].chat.push({...this.newMsg});
      this.newMsg.msg = ""
      this.cpuMessage();
    },
    getTime: function() {
      var currentdate = new Date();
      var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/"
      + currentdate.getFullYear() + " "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
      this.newMsg.time = datetime;
      this.cpuMsg.time = datetime;
    },
    cpuMessage: function () {
      const random = ["ciao","ok","ciao, come va?","tutto bene!","weee grande!","vabene"];
      let min = random[Math.floor(Math.random()*random.length)];
      console.log(min);
      this.cpuMsg.msg = min
      setTimeout(() => this.users[this.selected].chat.push({...this.cpuMsg}), 5000);
      this.getTime();

      // aggiunto setTimeout che farà comparire il msg 1 secondo dopo aver inserito il nostro
    }
  },
  // beforeMount(){
  //   this.getTime();
  // },






})//// FUNZIONAAA
