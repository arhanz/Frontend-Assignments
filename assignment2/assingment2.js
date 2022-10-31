let col = 19;
let row = 9;
let box = "";
for (let Addrow = 0; Addrow < row; Addrow++) {
  for (let addcol = 0; addcol < col; addcol++) {
    if (Addrow != 0 && Addrow != row - 1 && addcol != 0 && addcol != col - 1) {
      if (Addrow == 3 && addcol == 5) {
        box += "M";
      } else if (Addrow == 3 && addcol == 6) {
        box += "a";
      } else if (Addrow == 3 && addcol == 7) {
        box += "d";
      } else if (Addrow == 3 && addcol == 8) {
        box += "e";
      } else if (Addrow == 3 && addcol == 9) {
        box += " ";
      } else if (Addrow == 3 && addcol == 10) {
        box += "B";
      } else if (Addrow == 3 && addcol == 11) {
        box += "y";
      } else if (Addrow == 3 && addcol == 12) {
        box += " ";
      } else if (Addrow == 4 && addcol == 3) {
        box += "A";
      } else if (Addrow == 4 && addcol == 4) {
        box += "r";
      } else if (Addrow == 4 && addcol == 5) {
        box += "h";
      } else if (Addrow == 4 && addcol == 6) {
        box += "a";
      } else if (Addrow == 4 && addcol == 7) {
        box += "n";
      } else if (Addrow == 4 && addcol == 8) {
        box += " ";
      } else if (Addrow == 4 && addcol == 9) {
        box += "Z";
      } else if (Addrow == 4 && addcol == 10) {
        box += "e";
      } else if (Addrow == 4 && addcol == 11) {
        box += "e";
      } else if (Addrow == 4 && addcol == 12) {
        box += "s";
      } else if (Addrow == 4 && addcol == 13) {
        box += "h";
      } else if (Addrow == 4 && addcol == 14) {
        box += "a";
      } else if (Addrow == 4 && addcol == 15) {
        box += "n";
      } else {
        box += " ";
      }
    } else {
      box += "*";
    }
  }
  box += "\n";
}
console.log(box);
