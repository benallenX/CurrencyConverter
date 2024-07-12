import React, {useState,useEffect} from 'react'

const currencyOptions = [
{ code: 'USD', name: 'United States Dollar', flag: '🇺🇸' },
{ code: 'EUR', name: 'Euro', flag: '🇪🇺' },
{ code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
{ code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
{ code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
{ code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' }, // currency examples options
]
const CurrencyConverter = () => {
    const [fromAmount, setFromAmount] = useState(0)
    const [toAmount, setToAmount] = useState(0)
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('EUR')
    const [amountInFromCurrency,setAmountInFromCurrency] =useState(true)
  
    useEffect(() => {
        if (amountInFromCurrency) {
            setToAmount(fromAmount * 1.2)
        } else {
            setFromAmount(toAmount /1.2)
        }
    }, [fromAmount, toAmount, amountInFromCurrency])
    
    const handleAmountChange = (e) => {
         setFromAmount(e.target.value)
    }
    
    const handleToAmountChange = (e) => {
        setToAmount(e.target.value)
    }

    const handleClear = () => {
        setFromAmount('')
        setToAmount('')
    }
  
    return (
        <div className='counter-container'>
            <div className='text-box flex flex-col items-center'>
                <div className='inputarea bg-custom-light p-8 rounded-container shadow-container'>
                    <div className='navbar-container mb-4'>
                        <h2 className='text-custom-dark text-3xl font-cursive tracking-wide'>CURRENCY CONVERTER</h2>
                    </div>

                    <div className='from mb-4'>
                        <input 
                            type='number'
                            className='border-none p-2 mb-2 rounded-input shadow-input focus:shadow-input-focus focus:outline-none'
                            placeholder='Enter Amount'
                            value={fromAmount}
                            onChange={(e) => {
                                handleAmountChange(e);
                                setAmountInFromCurrency(true);
                            }}
                        />
                        <select
                            className='p-2 ml-2 border-none rounded-input shadow-input text-sm tracking-wide'
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        >
                            {currencyOptions.map(({code,flag,name}) => (
                                <option value={code} key={code}>
                                    {flag} {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <h1 className='text-3xl'>=</h1>
                    <div className='to mt-4'>
                        <input 
                            type='number'
                        className='border-none p-2 mb-2 rounded-input shadow-input focus:shadow-input-focus focus:outline-none'
                            placeholder='Enter Amount'
                            value={toAmount}
                            onChange={(e) => {
                                handleToAmountChange(e)
                                setAmountInFromCurrency(false)
                            }}
                        />
                        <select
              className="p-2 ml-2 border-none rounded-input shadow-input text-sm tracking-wide"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {currencyOptions.map(({code,flag,name}) => (
                <option value={code} key={code}>
                  {flag} {name}
                </option>
              ))}
            </select>
                    </div>
                    <button
                    onClick={handleClear}
                    className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none"
                    >
                    Clear
                    </button>
                </div>
           </div>
    </div>
  )
}

export default CurrencyConverter 