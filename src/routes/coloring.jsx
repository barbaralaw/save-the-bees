import coloring_1 from "../assets/coloring/coloring_1.png"
import coloring_2 from "../assets/coloring/coloring_2.png"
import coloring_3 from "../assets/coloring/coloring_3.png"
import coloring_4 from "../assets/coloring/coloring_4.png"
import coloring_5 from "../assets/coloring/coloring_5.png"
import coloring_6 from "../assets/coloring/coloring_6.png"
import coloring_7 from "../assets/coloring/coloring_7.png"
import coloring_8 from "../assets/coloring/coloring_8.png"
import coloring_9 from "../assets/coloring/coloring_9.png"

export const Coloring = () => {
    return (
        <div>
            <h1>Coloring Pages</h1>
            <p>To print a coloring page, right click on the image you want and open it in a new tab. The picture will be full size and you can then print it and enjoy!</p>
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
            </div>

        </div>
    )
}