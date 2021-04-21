import React, {useState,useEffect} from 'react';

function Timer (){
    // Tendremos 3 modos: pomodoro, short brak y long break
    // Para establecer el modo en el que estoy voy a usar useState
    // Además tengo que conseguir iniciar y detener el tiempo

    const [mode,setMode]=useState(null);

    const [tictac, setTictac]=useState(false);

    // 5 minutos= 300 segundos
    // 15 minutos= 900 segundos
    // 25 segundos= 15000 segundos

    function secondsToString(seconds) {
        let minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        let second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return minute + ':' + second;
    }
    // Creo que debería usa run useEffect para iniciar el countdown y que el efecto se realice cuando cambia el estado
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setMode(mode=>mode -1);
    //     }, 1000);},[tictac])
    
    // let seconds=300;

    function startCountdown(){
    
        const interval = setInterval(() => {setMode(mode=>mode -1);},1000)
    
    }
    
    // 
    return (
        <div>
            <div className='buttons-container'>
                <button onClick={()=>setMode(15000)}>Pmomodoro</button>
                <button onClick={()=>setMode(300)}>Short Break</button>
                <button onClick={()=>setMode(900)}>Long Break</button>
            </div>

            <div className='clock-container'>
                <span>{secondsToString(mode)}</span>
            </div>

            <button onClick={()=>startCountdown()}>start</button>
            <button onClick={()=>setTictac(false)}>stop</button>
        </div>
    )
}
export default Timer