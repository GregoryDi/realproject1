var Arrayforders=new Array;
var arr = new Array;
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



var f=1;


function ShowMatrix() {
      var table = document.createDocumentFragment();
      var n=1;
      var arr = [];

      for (var i = 0; i < 289; i++) {
          var tr = document.createElement('tr');
          arr[i] = [];


          for(var j = 0; j < 8; j++) {
              var td = document.createElement('td');


              if (i==0){td.innerHTML = arr[i][j]=j;
                  tr.appendChild(td);
                td.classList.add("hours");}
              if (j==0){
                 if (i == n){
                     n=n+12;
                     td.rowSpan = "12";
                     td.innerHTML = arr[i][j]=parseInt(n/12);
                     tr.appendChild(td);
                     td.classList.add("hours");

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
var y = new Array
 arr=content.split(/\r?\n\s*\s*/);
 y = arr.join(' ');
 arr = y.split(' ');

 console.log(arr);

  return arr;
   }

function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
       }
     return color;
}

function PasteOrder(arr){
  for(var i=1; i <arr.length; i+=2){
    var t = arr[i];
   Arrayforders.push(t);
   ShowOrders(Arrayforders);
 }
 console.log(Arrayforders);
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

          elem =document.childNodes[1].childNodes[2].childNodes[3].childNodes[1].childNodes[n-trow].childNodes[tcol+z];
          console.log("n-trow"+ n, trow);
            console.log("tcol+z"+ tcol, z);
          elem.style.backgroundColor = color;
          console.log(elem);
          console.log(n);
          console.log(check);
          console.log(x);
          check=false;
          oldcount=count;
          $(elem).attr("id","Cell"+n);
          $(elem).attr("Class","Cellclass"+q);
          $(elem).css({ border: 0 + "px" });




          cell =  document.getElementsByClassName('Cellclass'+q);
          countofclass = document.getElementsByClassName('Cellclass'+q).length
        //  console.log(countofclass);
        //  console.log(cell);
        }

    }
  //  $( cell ).wrap( "<div id = 'order'></div>" );
    // document.getElementById("order").addEventListener("mousedown", mouseDown);

   }


function mouseDown() {

         // for (f;f<countofclass+1;f++){

            //cell = document.getElementById("Cell"+f);

         // }

            cell = document.getElementById("order");
            cell.onmousedown = function(event) {
            function getCoords(cell) {
                var box = cell.getBoundingClientRect();
                   return {
                   top: box.top + pageYOffset,
                   left: box.left + pageXOffset  };
                   }
            var coords = getCoords(cell);
            var shiftX = event.pageX - coords.left;
            var shiftY = event.pageY - coords.top;
            document.body.appendChild(cell);
            moveAt(event);
            cell.style.zIndex = 1000;

               function moveAt(event) {
               cell.style.left= event.pageX - shiftX + 'px';
               cell.style.top = event.pageY - shiftY + 'px';
             }


               document.onmousemove = function(event) {
                   moveAt(event);
                 };

                   cell.onmouseup = function() {
                   document.onmousemove = null;
                   cell.onmouseup = null;
                 };

               }

               cell.ondragstart = function() {
                 return false;
               };

            console.log(f);



          }
