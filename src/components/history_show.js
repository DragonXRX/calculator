
import { useState } from 'react';
import { playSong, Article } from './myfunctions';

// info - clear store data in browser
function clearHistory(bol, setBol) {
    // info - reload all page 
    // window.location.reload();
    localStorage.clear();
    // info - hadi kadir reload lcoponent nta3 history show
    setBol(!bol);
    // info - hadi kat3ti l sound effect
    playSong('/historysound.mp3');
}

export {clearHistory}

function HistoryShow( { forCss, forCssTransition } ) {
    // info - this for comfirm the click of restor button
    const [bol, setBol] = useState(false);
    return (
      <div className='History_show' style={{ left: forCss ? '0' : "-75%" }}>
            <div className='close'>
              <button type="button" className='btn_reset_history' title="clear history" aria-label="clear history" onClick={() => clearHistory(bol, setBol)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
              <button type="button" onClick={() => {forCssTransition(!forCss); playSong('/historysound.mp3');}} className='btn_close_history' title="close history" aria-label="close history">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className='history_content'>
                {Article()}
            </div>
      </div>
    );
}

export default HistoryShow;

