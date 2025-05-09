import {useCallback, useEffect, useState, useRef} from 'react';

import './App.css';

function App () {
  const [length, setLength] = useState (8);
  const [numAllow, setNumAllow] = useState (false);
  const [charAllow, setCharAllow] = useState (false);
  const [Password, setPassword] = useState ();
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const passwordRef = useRef(null);

const generatePassWord = useCallback(() => {
     let pass = ""
     let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

     if (numAllow) str += "0123456789"
     if (charAllow) str += "!@#$%^&*()_+"

    for (let i = 1; i < length ; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)
} , [length , numAllow,charAllow])

useEffect (() => {
   generatePassWord()
} , [length , numAllow, charAllow])

const copyPasswordtoClipboard = () => {
  window.navigator.clipboard.writeText(Password)
  passwordRef.current?.select();
  setCopied(true);

  // Set a timeout to reset the copied state after 1.5 seconds
  // This will remove the copied message after 1.5 seconds
  setTimeout(() => {
    setCopied(false);
  }, 1500);
}

  return (
    <div>
      <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Building{' '}
        </span>
        <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 text-sky-700">
          Most Beautiful{' '}
        </span>
        PassWord Generator
      </h1>

      <div className="w-full sm:w-[90%] md:w-[600px] lg:w-[700px] min-h-[300px] mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-purple-300 mt-10">
        <h1 className="text-center text-3xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
            Suggest PassWord 
          </span>🤔
        </h1>

{/*PassWord Input Box */}
        <div className="flex shadow overflow-visible">

          <input
            type="text"
            value={Password}
            className="bg-white text-black border border-gray-300 outline-none w-full rounded-lg py-1 px-3 mr-2"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          {/* Tooltip-wrapped Button */}

         <div 
  className="relative flex items-center justify-center"
  onMouseEnter={() => setShowTooltip(true)}
  onMouseLeave={() => setShowTooltip(false)}
>
  {/* Tooltip */}
  {showTooltip && (
    <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap">
      {copied ? "Copied!" : "Copy to clipboard"}
    </div>
  )}

  <button 
    onClick={copyPasswordtoClipboard}
    className="outline-none bg-blue-500 hover:bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded"
  >
    {copied ? "Copied!" : "Copy"}
  </button>
</div>

        </div>

{/*Password Length Slider*/} 
        <div className='flex flex-col text-sm gap-y-2 mt-2'>
           <div className='flex items-center gap-x-1 '>
           <label htmlFor='Length'className='text-sm text-black font-medium '>PassWord Length:{length}</label>
           </div>

           <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=""
           />
        </div>
{/*Check Box */}
        <div className='flex text-sm gap-x-2 mt-2'>
        <input 
          type="checkbox"
          className='w-5 h-5 bg-white'
          defaultChecked={numAllow}
          onChange={() => {
            setNumAllow((prev) => !prev)
          }}
        />
         <label htmlFor="number" className='text-s text-black font-medium'>Numbers</label>
        </div>

{/*Check Box */}
        <div className='flex text-sm gap-x-2 mt-2'>
        <input 
          type="checkbox"
          className='w-5 h-5 bg-white'
          defaultChecked={charAllow}
          onChange={() => {
            setCharAllow((prev) => !prev)
          }}
        />
         <label htmlFor="number" className='text-s text-black font-medium'>Characters</label>
        </div>

        <div />
        <div />
      </div>
    </div>
  );
}

export default App;
