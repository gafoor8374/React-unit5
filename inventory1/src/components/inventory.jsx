import { useState } from "react";
import "./inventory.css"

export const Inventory =()=>{
    const [books,setBooks]= useState(10);
    const [noteBooks,setNoteBooks]= useState(50);
    const [pens,setPens]= useState(100);


    const funct = (i,j)=>{
        if(i==="books"){
            setBooks(books+j)
        }
        else if(i==="notebooks"){
            setNoteBooks(noteBooks+j)
        }
        else{
            setPens(pens+j)
        }
    }




    return (
        <div className="main">
            <div className="items">
             <h5>Books:{books}</h5>
             <button onClick={()=>funct("books",1)} className="circlularButton">Add 1</button>
             <button onClick={()=>{if(books>0) funct("books",-1)}} className="circlularButton">sub 1</button>
            </div>

            <div className="items">
             <h5>NoteBooks:{noteBooks} </h5>
             <button onClick={()=>funct("notebooks",1)} className="circlularButton">Add 1</button>
             <button onClick={()=>{if(noteBooks>0) funct("notebooks",-1)}} className="circlularButton">sub 1</button>
            </div>

            <div className="items">
             <h5>Pens:{pens}</h5>
             <button onClick={()=>funct("pens",1)} className="circlularButton">Add 1</button>
             <button onClick={()=>{if(pens>0) funct("pens",-1)}} className="circlularButton">sub 1</button>
            </div>

            <h5>Total:{books + noteBooks + pens}</h5>
        </div>
    )
}
