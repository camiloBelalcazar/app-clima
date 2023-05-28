import { useState } from "react"
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp"

const Weather = ({ weatherInfo }) => {
    
    const [isCelsius, setIsCelsius] = useState(true)
    
    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    
    }


    return (
    <section className=" text-center grid gap-6 " >
        
        <h2 className="font-bold text-2xl">{weatherInfo?.name},{weatherInfo?.sys.country}</h2>

        <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
                {/* seccion arriba */}
            <article className="shadow-lg shadow-slate-800 bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center ">


                <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>

                <span className="text-4xl">{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>

                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                </div>

            </article>
                {/* seccon abajo */}
            <section className=" shadow-lg shadow-slate-800 bg-white/70 p-2 py-6 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">
                <article className="flex gap-2 sm:items-center">
                    <div>
                        <img src="/images/wind.png" alt="" />
                    </div>
                    <span>{weatherInfo?.wind.speed}M/S</span>
                </article>

                <article className="flex gap-2 sm:items-center">
                    <div>
                        <img src="/images/humidity.png" alt="" />
                    </div>
                    <span>{weatherInfo?.main.humidity}%</span>
                </article>

                <article className="flex gap-2 sm:items-center">
                    <div>
                        <img src="/images/pressur.png" alt="" />
                    </div>
                    <span>{weatherInfo?.main.pressure}HPA</span>
                </article>
                
            </section>

        </section>
        <div className="transition duration-700 px-2 ">
        <button className=" bg-white/50 p-2 rounded-3xl " onClick={handleChangeTemp}>Change F / C</button>

        </div>
        

    </section>
    
    )
}
    export default Weather