var array =[]
var zn=[]
function plus(){
    zn[0]=document.getElementById('pluss').value
    array[0]=Number(document.getElementById('calc').value)
  
    document.getElementById('calc').value=''
    return array[0]
    

   
  

}
function minus(){
    zn[0]=document.getElementById('minus').value
    array[0]=Number(document.getElementById('calc').value)
  
    document.getElementById('calc').value=''
    return array[0]
    

   
  

}
function mn(){
    zn[0]=document.getElementById('mn').value
    array[0]=Number(document.getElementById('calc').value)
  
    document.getElementById('calc').value=''
    return array[0]
    

   
  

}
function dv(){
    zn[0]=document.getElementById('dv').value
    array[0]=Number(document.getElementById('calc').value)
  
    document.getElementById('calc').value=''
    return array[0]
    

   
  

}

function res(){

    array[1]=Number(document.getElementById('calc').value)
    if(zn=='+'){
    document.getElementById('calc').value=array[0]+ array[1]
    }
    if(zn=='-'){
        document.getElementById('calc').value=array[0]-array[1]
        }
        if(zn=='*'){
            document.getElementById('calc').value=array[0]*array[1]
            }
            if(zn=='/'){
                if(array[0]/ array[1]=="Infinity"){
                    document.getElementById('calc').value=""

                }else{
                document.getElementById('calc').value=array[0]/ array[1]}
                }
}
