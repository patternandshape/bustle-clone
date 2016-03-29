import Ember from 'ember';

var articles = [{
  id: 1,
  title: "Unicorns Might Have Been Real, Suggest Recent Fossil Discoveries Of The One-Horned Siberian Unicorn",
  author: "Lara Rutherford-Morrison",
  time: "2 hours ago",
  category: "lifestyle",
  image: "http://lovelace-media.imgix.net/uploads/638/5e35ff40-d7fe-0133-77b5-0e7c926a42af.jpg?w=684&h=513&fit=crop&crop=faces&auto=format&q=70"
}, {
  id: 2,
  title: "Unicorns Might Have Been Real, Suggest Recent Fossil Discoveries Of The One-Horned Siberian Unicorn",
  author: "Julia Seales",
  time: "a day ago",
  category: "books",
  image: "http://lovelace-media.imgix.net/uploads/95/27bf8b90-d75e-0133-f122-0a6c20e5e327.jpg?w=684&h=513&fit=crop&crop=faces&auto=format&q=70",
}, {
  id: 3,
  title: "5 Fairy Tales That Are Weirder Than You Remembered",
  author: "Joanna Novak",
  time: "a day ago",
  category: "books",
  image: "http://lovelace-media.imgix.net/uploads/1648/33c787b0-d75a-0133-830f-06e18a8a4ae5.jpg?w=684&h=513&fit=crop&crop=faces&auto=format&q=70"
}];

export default Ember.Route.extend({
  model(){
    return articles;
  },
});
