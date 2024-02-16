import coloring_1 from "../assets/coloring/coloring_1.png"
import coloring_2 from "../assets/coloring/coloring_2.png"
import coloring_3 from "../assets/coloring/coloring_3.png"
import coloring_4 from "../assets/coloring/coloring_4.png"
import coloring_5 from "../assets/coloring/coloring_5.png"
import coloring_6 from "../assets/coloring/coloring_6.png"
import coloring_7 from "../assets/coloring/coloring_7.png"
import coloring_8 from "../assets/coloring/coloring_8.png"
import coloring_9 from "../assets/coloring/coloring_9.png"
import coloring_10 from "../assets/coloring/coloring_10.png"
import coloring_11 from "../assets/coloring/coloring_11.png"
import coloring_12 from "../assets/coloring/coloring_12.png"
import coloring_13 from "../assets/coloring/coloring_13.png"
import coloring_14 from "../assets/coloring/coloring_14.png"

export const Coloring = () => {
    return (
        <div>
            <h1>Coloring Pages</h1>
            <p>To print a coloring page, right click on the image you want and open it in a new tab. The picture will be full size and you can then print it and enjoy!</p>
            <p><b>Fun Fact:</b> All of these coloring pages were generated for free by Google Gemini. It was a lot of fun to figure out how to get the AI to create them!</p>
            <div id="coloringPages">

                <img src={coloring_1} />

                <img src={coloring_2}  />
                <img src={coloring_3} />
                <img src={coloring_4}  />

                <img src={coloring_5}  />
                <img src={coloring_6} />
                <img src={coloring_7}  />

                <img src={coloring_8}/>
                <img src={coloring_9}  />
                <img src={coloring_10}  />
                <img src={coloring_11} />
                <img src={coloring_12}  />

                <img src={coloring_13}/>
                <img src={coloring_14}  />
            </div>

        </div>
    )
}