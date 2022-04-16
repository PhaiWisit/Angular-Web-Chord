export class guitar_chord_writer {

  notes = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Hb", "H", "Bb", "B"];
  upnotes = ["C#", "D", "D", "D#", "E", "E", "F", "F#", "G", "G", "G#", "A", "A", "Hb", "H", "H", "C", "H", "H"];
  downnotes = ["H", "C", "C", "Db", "D", "D", "Eb", "E", "F", "F", "Gb", "G", "G", "Ab", "A", "A", "Hb", "A", "A"];


  // transpositionHandler(oDiv, t_up) {
  //   var oSong = oDiv.parent().parent("div.song");
  //   var oThis = this;
  //   var oChords = oSong.find("span.chord, span.chord-inline").each(function () {
  //     var chord = $(oThis).text();
  //     var new_chord = "";
  //     var i = 0;
  //     var last_note_end = 0;
  //     while (i < chord.length) {
  //       var found_note = "";
  //       var replacement_note = "";
  //       for (let n = 0; n < oThis.notes.length; ++n) {
  //         var note = oThis.notes[n];
  //         var match = chord.substr(i, note.length) == note;
  //         // find the longest match (i.e. C# rahter than C)
  //         if (match && note.length > found_note.length) {
  //           found_note = note;
  //           replacement_note = t_up ? oThis.upnotes[n] : oThis.downnotes[n];
  //         }
  //       }
  //       if (found_note != "") {
  //         new_chord += chord.substr(last_note_end, i - last_note_end);
  //         new_chord += replacement_note;
  //         last_note_end = i + found_note.length;
  //         i += found_note.length;
  //       } else
  //         ++i;

  //     }
  //     if (chord.length > last_note_end)
  //       new_chord += chord.substr(last_note_end);
  //     $(oThis).text(new_chord);
  //   });
  // };


}
