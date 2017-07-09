var Arrayforders=new Array;
var oldcount=0;
var color = getRandomColor();
var n=1;
var check = true;
var x=13;
var q = 0;
var count;
var z=0;
var tcol=0;
var trow=0;
var oldn=289;


function ShowMatrix() {
      var table = document.createDocumentFragment();
      var n=1;
      var arr = [];
      var x=n;
      for (var i = 0; i < 289; i++) {
          var tr = document.createElement('tr');
          arr[i] = [];


          for(var j = 0; j < 8; j++) {
              var td = document.createElement('td');
              if (i==0){td.innerHTML = arr[i][j]=j;
                  tr.appendChild(td);}
              if (j==0){
                 if (i == n){
                     n=n+12;
                     td.rowSpan = "12";
                     td.innerHTML = arr[i][j]=parseInt(n/12);
                     tr.appendChild(td);
                     }
              }
              else  {
                  td.innerHTML;
                  tr.appendChild(td);
              }

           }

           table.appendChild(tr);

      }
      document.getElementById('matrix').appendChild(table);
      console.log(x.time);
}





function readFile() {
   var selectedFile = document.getElementById('inputFile').files[0];
   var reader = new FileReader();
   reader.onload = function (e)
   {
   var FileContent = e.target.result;
   PasteOrder(parseContent(FileContent));
   }; reader.readAsText(selectedFile);

}


function parseContent(content) {

  t=Number(content.replace(/\D+/g,""));
  alert(t);
  return t;
   }

function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
       }
     return color;
}

function PasteOrder(t){
   Arrayforders.push(t);
   console.log(Arrayforders);
   ShowOrders(Arrayforders);
}



function ShowOrders(Arrayforders){
  for (q; q < Arrayforders.length; q++)
   {
      count = Arrayforders[q]/5 + oldcount;
      color = getRandomColor();
      console.log(count);
      for (n;n<count+1;n++)
        {
          if (n==x){check=true;x=x+12;}
          if (check==true){z=1}
          else z=0;
          if(n==oldn){tcol++;trow+=288;oldn=n+288;}

          elem =document.childNodes[1].childNodes[2].childNodes[3].childNodes[1].childNodes[1].childNodes[n-trow].childNodes[tcol+z];
          elem.style.backgroundColor = color;
          console.log(elem);
          console.log(n);
          console.log(check);
          console.log(x);
          check=false;
          oldcount=count;
        }

    }



   }
