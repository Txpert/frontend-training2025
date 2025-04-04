function Button({ buttonText, onClickHandler }){

    return(
        //ondblClick (HTML)
        //onDoubleClick (React)
        <button 
        onClick={onClickHandler}
         //Hier kommen die Tailwind-Klassen hin!
        className="
        bg-blue-500 
        hover:bg-red-700 
        text-white
        font-bold
        py-8
        px-8
        rounded-full
        m-2
        transition-colors
        duration-1800
        ease-in-out
        "
         >
            {buttonText}
        </button>
    );
}

//Wir müssen die Komponente expotieren, damit wir sie in anderen Dateien verwenden können
export default Button;