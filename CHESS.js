function CHESS(){
var tower =['a','b','c','d','e','f','g','h']
var line =['1','2','3','4','5','6','7','8']
var a=[],b=[],c=[],d=[],e=[],f=[],g=[],h=[]
var tabel=[]
var turn=[-2,-1,1,2]
var cord=[]



for (i=0 ;i<line.length;++i) {
a.push(tower[0]+line[i])
b.push(tower[1]+line[i])
c.push(tower[2]+line[i])
d.push(tower[3]+line[i])
e.push(tower[4]+line[i])
f.push(tower[5]+line[i])
g.push(tower[6]+line[i])
h.push(tower[7]+line[i])

}
tabel=[a,b,c,d,e,f,g,h]

var pos =document.getElementById("data").value //получение значения с инпута в хтамл
var fig=document.getElementById("fig").value


for(i =0;i<tabel.length;i++){
    for(k=0;k<tabel[i].length;k++){
       if(pos==tabel[i][k]){
      
           var nL=i
           var nT=k
       }
    }
    
}

if (fig=='KON'){

for(i=0;i<turn.length;i++)
{
    if(tabel.includes(tabel[nL+turn[i]]))
    {
        var y
        
        if(i==0 || i == 3)
        {
            
            y=nT+turn[1]
            if(y>=0 && y<8)
            {
              cord.push(tabel[nL+turn[i]][y])
            }
            y=nT+turn[2]
           
            if(y>0 && y<8)
            {
              cord.push(tabel[nL+turn[i]][y])
            }
           
        }
        if(i==1 || i == 2)
        {
            y=nT+turn[0]
            if(y>=0 && y<8)
            {
                cord.push(tabel[nL+turn[i]][y])
            }
            y=nT+turn[3]
            if(y>0 && y<8)
            {
                cord.push(tabel[nL+turn[i]][y])
            }
        }           
    }
}
}

    document.getElementById('res').value=cord
    for(i =0;i<tabel.length;i++){
        for(k=0;k<tabel[i].length;k++){
            document.getElementById(tabel[i][k]).value=""
 
           
        }
        
    }

    for(i=0;i<cord.length;i++){
       
        document.getElementById(cord[i]).value=document.getElementById('img').value
        document.getElementById(pos).value=document.getElementById('check').value
        


    }
    if(fig=='LAD'){
        for(i=1;i<=tabel[0].length;i++){
            if(tabel.indexOf(tabel[nL+i])!=-1){
                cord.push(tabel[nL+i][nT])
            }
            if(tabel.indexOf(tabel[nL-i])!=-1){
                cord.push(tabel[nL-i][nT])
            }
            if(tabel.indexOf(tabel[nT+i])!=-1){
                cord.push(tabel[nL][nT+i])
            }
            if(tabel.indexOf(tabel[nT-i])!=-1){
                cord.push(tabel[nL][nT-i])
            }
        }
        document.getElementById('res').value=cord
      
 for(i=0;i<cord.length;i++){
       
        document.getElementById(cord[i]).value=document.getElementById('img').value
        document.getElementById(pos).value=document.getElementById('check').value
        


    }
    }
    if(fig=='SL'){
        for(i=1;i<=tabel[0].length;i++){
            if(tabel.indexOf(tabel[nL+i])!=-1){
                if(nT+i>=0 &&nT+i<8){
                cord.push(tabel[nL+i][nT+i])
                }
                if(nT-i>=0 && nT-i<8){
                    cord.push(tabel[nL+i][nT-i])

                }
            }
            if(tabel.indexOf(tabel[nL-i])!=-1){
                if(nT+i>=0 &&nT+i<8){
                cord.push(tabel[nL-i][nT+i])
                }
                if(nT-i>=0 && nT-i<8){
                    cord.push(tabel[nL-i][nT-i])

                }
            }
           
        }
        document.getElementById('res').value=cord
      
 for(i=0;i<cord.length;i++){
       
        document.getElementById(cord[i]).value=document.getElementById('img').value
        document.getElementById(pos).value=document.getElementById('check').value
        


    }
    }
    if(fig=="FER"){
        for(i=1;i<=tabel[0].length;i++){
            if(tabel.indexOf(tabel[nL+i])!=-1){
                cord.push(tabel[nL+i][nT])
            }
            if(tabel.indexOf(tabel[nL-i])!=-1){
                cord.push(tabel[nL-i][nT])
            }
            if(tabel.indexOf(tabel[nT+i])!=-1){
                cord.push(tabel[nL][nT+i])
            }
            if(tabel.indexOf(tabel[nT-i])!=-1){
                cord.push(tabel[nL][nT-i])
            }
        }
        for(i=1;i<=tabel[0].length;i++){
            if(tabel.indexOf(tabel[nL+i])!=-1){
                if(nT+i>=0 &&nT+i<8){
                cord.push(tabel[nL+i][nT+i])
                }
                if(nT-i>=0 && nT-i<8){
                    cord.push(tabel[nL+i][nT-i])

                }
            }
            if(tabel.indexOf(tabel[nL-i])!=-1){
                if(nT+i>=0 &&nT+i<8){
                cord.push(tabel[nL-i][nT+i])
                }
                if(nT-i>=0 && nT-i<8){
                    cord.push(tabel[nL-i][nT-i])

                }
            }
           
        }
        document.getElementById('res').value=cord
      
 for(i=0;i<cord.length;i++){
       
        document.getElementById(cord[i]).value=document.getElementById('img').value
        document.getElementById(pos).value=document.getElementById('check').value
        


    }

    }
    if(fig=="KOR"){
        for(i=1;i<=1;i++){
            if(tabel.indexOf(tabel[nL+i])!=-1){
                cord.push(tabel[nL+i][nT])
            }
            if(tabel.indexOf(tabel[nL-i])!=-1){
                cord.push(tabel[nL-i][nT])
            }
            if(tabel.indexOf(tabel[nT+i])!=-1){
                cord.push(tabel[nL][nT+i])
            }
            if(tabel.indexOf(tabel[nT-i])!=-1){
                cord.push(tabel[nL][nT-i])
            }
        }
        for(i=1;i<=1;i++){
            if(tabel.indexOf(tabel[nL+i])!=-1){
                if(nT+i>=0 &&nT+i<8){
                cord.push(tabel[nL+i][nT+i])
                }
                if(nT-i>=0 && nT-i<8){
                    cord.push(tabel[nL+i][nT-i])

                }
            }
            if(tabel.indexOf(tabel[nL-i])!=-1){
                if(nT+i>=0 &&nT+i<8){
                cord.push(tabel[nL-i][nT+i])
                }
                if(nT-i>=0 && nT-i<8){
                    cord.push(tabel[nL-i][nT-i])

                }
            }
           
        }
        document.getElementById('res').value=cord
      
 for(i=0;i<cord.length;i++){
       
        document.getElementById(cord[i]).value=document.getElementById('img').value
        document.getElementById(pos).value=document.getElementById('check').value
        


    }

    }

}