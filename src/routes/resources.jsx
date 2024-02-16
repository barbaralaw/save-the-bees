import busy_bees from "../assets/busy_bees.jpg"

export const Resources = () => {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
<main >
      <h1>Resources</h1>
      <section>
        <p>During the research phase of the project we found a lot of cool sites with information about bees and other fun stuff. Check with a grownup before visiting these links as they go to other websites.</p>
        <h2>Learn More About Bees</h2>
        <ul>
            <li><a href="https://kids.nationalgeographic.com/animals/invertebrates/facts/honeybee" target="_blank">National Geographic Kids</a></li>
            <li><a href="https://thebeeconservancy.org/why-bees/" target="_blank">The Bee Conservancy</a></li>
            {/* <li><a href=""></a></li> */}
        </ul>
      </section>
      <section>
        <h2>Find Native Plants for Bees</h2>
        <ul>
            <li><a href="https://www.pollinator.org/guides" target="_blank">Pollinator Partnership - find your pollinator planting guide
            </a></li>
            <li><a href="https://theodorepayne.org/nativeplantdatabase/index.php?title=Main_Page" target="_blank">Theodore Payne Foundation - Native Plant Database</a></li>
            <li><a href="https://www.calflora.org/index.html" target="_blank">Calflora - search by location or plant</a></li>
        </ul>
      </section>
      <section>
        <h2>Help Bees</h2>
        <ul>
            <li><a href="https://www.greatsunflower.org/" target="_blank">The Great Sunflower Project</a></li>
        </ul>
      </section>
      
    </main>
    <div id="beeHome">
        <img style={{ maxWidth: "100%", borderRadius: "12px" }} src={busy_bees} />
      </div>
    </div>
    
  );
};
