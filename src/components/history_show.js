
import { useState } from 'react';
import { playSong } from './myfunctions';

function HistoryShow( { forCss, forCssTransition } ) {
    // info - this for comfirm the click of restor button
    const [bol, setBol] = useState(false);
    
    // info - clear store data in browser
    function clearHistory() {
        // info - reload all page 
        // window.location.reload();
        localStorage.clear();
        // info - hadi kadir reload lcoponent nta3 history show
        setBol(!bol);
        // info - hadi kat3ti l sound effect
        playSong('/historysound.mp3');
    }

    // info - katarod l value man localstorage 
    // - w kadifha ka article f l page nta3 history
    function Article () {
        let Htmls = [];

        if(localStorage.getItem("mainArray") !== null) {
        const mainArray = JSON.parse(localStorage.getItem("mainArray"));
        // for testing porpose
        // console.log("Parsed Main Array:", mainArray);
            for (let i = 0; i < mainArray.arr.length; i++) {
            Htmls.push(
                <div key={i} className='operator_calculation'>
                <p>{mainArray.arr[i]}</p>
                <p>= {mainArray.res[i]}</p>
                </div>
            );
            }
        }
        return Htmls;  
    }

     return (
        <div className='History_show' style={{ left: forCss ? '0' : "-75%" }}>
              <div className='close'>
                <button type="button" className='btn_reset_history' title="clear history" aria-label="clear history" onClick={clearHistory}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10"></polyline>
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                  </svg>
                </button>
                <button type="button" onClick={() => {forCssTransition(!forCss); playSong('/historysound.mp3');}} className='btn_close_history' title="close history" aria-label="close history">✕</button>
              </div>
              <div className='history_content'>
                  {Article()}
              </div>
        </div>
     );
}

export default HistoryShow;

