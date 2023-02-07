import { useState,useEffect } from "react";


export default function Dictionary (){
    const [word, setWord] = useState(' ');
    const [word2, setWord2] = useState(' ');

    useEffect(() => {
        console.log('State updated with ' + word)
    }, [word]);

    useEffect(() => {
        console.log('State updated with ' + word2)
    }, [word2]);

    let myclass = ['block text-white text-2xl break-words bg-red-500 mx-auto my-3 w-72 h-max overflow-visible px-2 border-2 border-black rounded-lg sm:min-w-[288px] sm:w-1/2'];
    
    return (
        <>
        {/* Input One */}
            <input className="block text-black mx-auto px-2 w-72 mt-3" 
                placeholder = "Type in the search word"
                onChange = {(e) => {
                    setWord(e.target.value)
                }}
            />
            <h2 className={myclass.join()}>
                Let's get the definition for {word}, shall we?
            </h2>

        {/* Input Two */}
            <input className="block text-black mx-auto px-2 w-72 mt-3" 
                placeholder = "Type in the search word"
                onChange = {(e) => {
                    setWord2(e.target.value)
                }}
            />
            <h2 className={myclass.join()}>
                Let's get the definition for {word2}, shall we?
            </h2>
        </>
    )
}