// Funzioni dello script corrente:
// ci sarà un array di utenti con le varie proprietà
// nome,avatar ed un sotto array chat con il tempo ed i messaggi mandati

// 1-Al click di uno degli utenti presenti apparirà l'utente cliccato e la chat relativa contente tutti i dati appartenenti all'array selezionato quindi nome,avatar messaggi della chat ecc.

// 2- All'inserimento tramite tasto ENTER o cliccando sull'icona microfono il programma inserirà un nuovo array all'interno dell'index selezionato con i vari messaggi inseriti e i dati come la data dell'inserimento il testo inserito, in automatico si riceverà una risposta random dalla cpu dopo un 1 secondo e farà lo stesso procedimento scritto sopra

// BONUS 3 - Aggiunto la modalità di aggiunta utente cliccando sull'icona in alto a sinitra, una volta aperto il box per inserire l'utente si può cliccare sulla x e il box scompare, altrimenti si aggiunge il nome e il programma inserirà un nuovo utente con un img di default. Se non si inserisce nulla il programma inserirà un nome di default.


var app = new Vue({
  el: "#root",
  data: {
    selected:0, // proprietà che mi servirà per confrontare l'index al click
    visible: false,
    deleteMsg:false,
    me:[
      {
       name:'Christian Pucci',
       img:'img/user.png'
      }
    ],
    newUser:{
      name:"",
      img:"img/default.jpeg",
      chat:[
        {
          time:"",
          msg:"Ciao, mi hai appena aggiunto su whatsapp! Questo è un messaggio automatico",
          send:0,
        }
      ]
    },
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
     time:"",
     msg:"",
     send:1
   },
   cpuMsg:{ // nuovo array per i messaggi inviativ dalla cpu
     time:"",
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
      setTimeout(() => (this.getTime(),this.users[this.selected].chat.push({...this.cpuMsg})), 1000);
      this.scrollAuto();
      // aggiunto setTimeout che farà comparire il msg 1 secondo dopo aver inserito il nostro
    },
    addUser:function () {
      return this.visible = true;
    },
    addFriend: function () {

      if (this.newUser.name === "") {
        this.newUser.name = "Nuovo_user_1"
        this.users.push({...this.newUser})
        this.newUser.name= '';
        this.visible = false;
      }else{
        // this.newUser.name = "Nuovo_user"
        this.users.push({...this.newUser})
        this.newUser.name= '';
        this.visible = false;
      }

    },
    deleteUser:function () {
      return this.visible = false;
    },
    chevronOpen:function (index) {

      return this.deleteMsg = !this.deleteMsg;
    },
    deleteMsg:function () {
      return this.deleteMsg = false;
    },
    scrollAuto:function () {
      setTimeout(function(){
        let chat = document.getElementById("chat");
        chat.scrollTop = chat.scrollHeight;
      }, 1001);
    }
  },
})
