var Translation = {
  define: function(word, translation, scope) {
    this.word = word.replace(/[^A-Za-z\s]/gi, "");
    this.translation = translation.toLowerCase().replace(/[^a-z\s]/gi, "");
    this.scope = scope;
    this.setup();
  },
  setup: function() {
    var word_array = this.word.split('');
    var first_letter = word_array[0];
    this.first_lower = first_letter.toLowerCase();
    this.first_upper = first_letter.toUpperCase();
    var rest_of_word = word_array.join('').substr(1);
    this.regex = new RegExp('\\s(' + this.first_lower + '|' + this.first_upper + ')' + rest_of_word + '(s|)', 'gi');
    this.translate();
  },
  translate: function() {
    var contents = document.body.innerHTML;
    if (this.scope) {
      contents = document.querySelector(this.scope).innerHTML; 
    }
    var self = this;
    var replaced = contents.replace(this.regex, function(match, first, plural) {
      if (first == self.first_lower) {
        var translation = self.translation;
        if (plural == "s") {
          translation = translation + "s";
        }
        return " " + translation;
      } else {
        var translation = self.translation.charAt(0).toUpperCase() + self.translation.substr(1);
        if (plural == "s") {
          translation = translation + "s";
        }
        return " " + translation;
      }
    });
    if (this.scope) {
      document.querySelector(this.scope).innerHTML = replaced; 
    } else {
      document.body.innerHTML = replaced; 
    }
  }
};
