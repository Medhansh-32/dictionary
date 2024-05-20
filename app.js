let url="https://api.dictionaryapi.dev/api/v2/entries/en/";


const btn=document.querySelector("button");

async function mean(word){
    try{
        let meaning= await axios.get(url+word);
       console.log(meaning);
        return meaning.data[0];
        }
        catch(e){
            return  "Incorrect Word";
        }
    }

async function showMean(ans,word){
    const str=document.querySelector("#mean");
    const show=document.querySelector("#show");
if(ans=="Incorrect Word"){
    str.innerText=" ";
    show.innerText= "Incorrect Word";
    show.style.color="red";

}else{
    let n=1;
    for(let i=0;i<ans.meanings.length;i++){
        for(let j=0;j<ans.meanings[i].definitions.length;j++){
      
        show.style.color="rgb(10, 195, 10)";
        show.innerHTML= show.innerHTML+`<p><div id="update">Meaning ${n}</div> : ${ans.meanings[i].definitions[j].definition}`;
        n++;   
        console.log(ans.meanings[i].definitions[j].definition);
        }
    
    }
   
   
   

    
}

}
btn.addEventListener("click",async ()=>{
    const word=document.querySelector("input").value;
   
    let ans=await mean(word);
   await showMean(ans,word);
})
