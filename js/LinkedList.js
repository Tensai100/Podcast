
class Episode{
  constructor(nom = "", duree = 0, description = "", time = Date.now(), url = "", tags = "", invites = ""){
    this.nom = nom;
    this.duree  duree;
    this.description = description;
    this.time = time;
    this.url = url;
    this.tags = tags;
    this.invites = invites;
    this.next = null;
  }
}

class Podcast{
  constructor(nom = "", podcasteur = "", description = "", categorie = "", tags = "", url = "", headPodcastEpisode = null){
    this.nom = nom;
    this.podcasteur = podcasteur;
    this.img = img;
    this.description = description;
    this.categorie = categorie;
    this.tags = tags;
    this.url = url;
    this.headPodcastEpisode = headPodcastEpisode;
    this.size = 0;
    this.next = null;
  }

  InsertEpisodeAt(episode, index = this.size){
    //Pour le OutOfRangeException
    if (index > this.size || index < 0)
      return;

    var ep = new Episode(episode);

    if (this.size == 0) //Si c'est le 1er (List vide)
      this.headPodcastEpisode = ep;


    else if (index == 0){ //Sinon (List pas vide) et insertion en 1er
      ep.next = this.headPodcastEpisode;
      this.headPodcastEpisode = ep;
    }

    else //Sinon (List pas vide) insertion (at)
      for (var i = 0, current = this.headPodcastEpisode; i <= index; i++, current = current.next) //!!La boucle ne parcour pas le 1er
        if (i == index - 1){ //Localiser le précédent
          ep.next = current.next; //Lier la 2eme suite de la liste à la nouvelle ep
          current.next = ep; //Lier la ep à la précédente (L'actuelle ignorer)
          break;
        }

    this.size++;
  }

  RemoveAt(index = this.size - 1){
    //Pour le OutOfRangeException
    if (index < 0 || index >= this.size)
      return;

    if (index == 0){ //Si vous voulez supprimer le 1er (Le next sera headPodcast)
      this.headPodcastEpisode = this.headPodcastEpisode.next;
      this.size--;
      return;
    }

    for (var i = 0, current = this.headPodcastEpisode; i <= index; i++, current = current.next) //!!La boucle ne parcour pas le 1er
      if (i == index -1) // Localiser le précédent
        current.next = (current.next.next) ? current.next.next : null; //Le next du précédent sera le next.next(Si pas null) sinon = null

    this.size--;
  }

  Reverse(){
    for (var i = 0, current = this.headPodcastEpisode, tmp = null, oldNext; i <= this.size; i++, current = oldNext)// Déplacement par l'encient Next
      if (current == null)
        this.headPodcastEpisode = tmp;
      else{ // Affecter
        oldNext = current.next;
        current.next = tmp;
        tmp = current;
      }
  }

  // Print(index = 0){
  // 	var value = "";

  // 	for(var i = 0, current = this.headPodcast; i < this.size; i++, current = current.next)
  // 		value += ((i == index)? "<td style='color:red;'>" : "<td>") + (i+1) + ": " + current.data + "</td><br>";

  // 	return value;
  // }

  // PrintOnly(index = 0){
  // 	var value = "";

  // 	for(var i = 0, current = this.headPodcast; i < this.size; i++, current = current.next)
  // 		if (i == index) value = "<span class='audio2'><audio controls='controls'><source src='" + current.data + "' /></audio></span>";

  // 	return value;
  // }
}

class LinkedList{
  constructor(podcast){
    this.headPodcast = new Podcast(podcast);
    this.size = 0; //List-size
  }

  InsertAt(podcast, index = this.size){
    //Pour le OutOfRangeException
    if (index > this.size || index < 0)
      return;

    var podcast = new Podcast(podcast);

    if (this.size == 0) //Si c'est le 1er (List vide)
      this.headPodcast = podcast;


    else if (index == 0){ //Sinon (List pas vide) et insertion en 1er
      podcast.next = this.headPodcast;
      this.headPodcast = podcast;
    }

    else //Sinon (List pas vide) insertion (at)
      for (var i = 0, current = this.headPodcast; i <= index; i++, current = current.next) //!!La boucle ne parcour pas le 1er
        if (i == index - 1){ //Localiser le précédent
          podcast.next = current.next; //Lier la 2eme suite de la liste à la nouvelle podcast
          current.next = podcast; //Lier la podcast à la précédente (L'actuelle ignorer)
          break;
        }

    this.size++;
  }

  RemoveAt(index = this.size - 1){
    //Pour le OutOfRangeException
    if (index < 0 || index >= this.size)
      return;

    if (index == 0){ //Si vous voulez supprimer le 1er (Le next sera headPodcast)
      this.headPodcast = this.headPodcast.next;
      this.size--;
      return;
    }

    for (var i = 0, current = this.headPodcast; i <= index; i++, current = current.next) //!!La boucle ne parcour pas le 1er
      if (i == index -1) // Localiser le précédent
        current.next = (current.next.next) ? current.next.next : null; //Le next du précédent sera le next.next(Si pas null) sinon = null

    this.size--;
  }

  Reverse(){
    for (var i = 0, current = this.headPodcast, tmp = null, oldNext; i <= this.size; i++, current = oldNext)// Déplacement par l'encient Next
      if (current == null)
        this.headPodcast = tmp;
      else{ // Affecter
        oldNext = current.next;
        current.next = tmp;
        tmp = current;
      }
  }

  // Print(index = 0){
  // 	var value = "";

  // 	for(var i = 0, current = this.headPodcast; i < this.size; i++, current = current.next)
  // 		value += ((i == index)? "<td style='color:red;'>" : "<td>") + (i+1) + ": " + current.data + "</td><br>";

  // 	return value;
  // }

  // PrintOnly(index = 0){
  // 	var value = "";

  // 	for(var i = 0, current = this.headPodcast; i < this.size; i++, current = current.next)
  // 		if (i == index) value = "<span class='audio2'><audio controls='controls'><source src='" + current.data + "' /></audio></span>";

  // 	return value;
  // }
}

var linkedList = new LinkedList();
var index = 0;

linkedList.InsertAt("audio/Alan Walker - Alone.mp3");
linkedList.InsertAt("audio/Alan Walker - Faded.mp3");
linkedList.InsertAt("audio/Alan Walker - Sing Me To Sleep.mp3");
document.getElementById("playlist").innerHTML = linkedList.Print();
document.getElementById("tr2").innerHTML = linkedList.PrintOnly();

function Add(){
  var data = document.getElementById("valueAdd").value;
  var valueAt = document.getElementById("valueAt").value;
  valueAt--; // exemple le 1er sera le 0

  if (document.getElementById("first").checked)
    linkedList.InsertAt(data, 0);
  else if (document.getElementById("last").checked)
    linkedList.InsertAt(data);
  else linkedList.InsertAt(data, valueAt);

  document.getElementById("playlist").innerHTML = linkedList.Print();
  document.getElementById("tr2").innerHTML = linkedList.PrintOnly();
}

function Remove(){
  var valueAt = document.getElementById("indexRmv").value;
  valueAt--; // exemple le 1er sera le 0

  linkedList.RemoveAt(valueAt);

  document.getElementById("playlist").innerHTML = linkedList.Print();
  document.getElementById("tr2").innerHTML = linkedList.PrintOnly();
}

// Pile & File
function Add_FilePile(){
  var data = document.getElementById("value_FP").value;

  if (document.getElementById("pile").checked)
    linkedList.InsertAt(data, 0);
  else if (document.getElementById("file").checked)
    linkedList.InsertAt(data);

  document.getElementById("playlist").innerHTML = linkedList.Print();
  document.getElementById("tr2").innerHTML = linkedList.PrintOnly();
}

function Remove_FilePile(){
  var data = document.getElementById("value_FP").value;

  if (document.getElementById("pile").checked)
    linkedList.RemoveAt(0);
  else if (document.getElementById("file").checked)
    linkedList.RemoveAt();

  document.getElementById("playlist").innerHTML = linkedList.Print();
  document.getElementById("tr2").innerHTML = linkedList.PrintOnly();
}

function Next(){
  if (index < linkedList.size - 1) index++;
  document.getElementById("playlist").innerHTML = linkedList.Print(index);
  document.getElementById("tr2").innerHTML = linkedList.PrintOnly(index);
}

function Previous(){
  if (index > 0) index--;
  document.getElementById("playlist").innerHTML = linkedList.Print(index);
  document.getElementById("tr2").innerHTML = linkedList.PrintOnly(index);
}


function Reverse(){
  linkedList.Reverse();

  document.getElementById("playlist").innerHTML = linkedList.Print();
  document.getElementById("tr2").innerHTML = linkedList.Print();
}

function ClearList(){
  linkedList = new LinkedList();
  document.getElementById("playlist").innerHTML = linkedList.Print();
  document.getElementById("tr2").innerHTML = linkedList.Print();
}
