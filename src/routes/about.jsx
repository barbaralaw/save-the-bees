import working from "../assets/working.jpg"

export const About = () => {
  return (
    <div id="about" >
        <div id="workingPic"><img  style={{ maxWidth: "100%", borderRadius: "12px" }}src={working} /></div>
    <div>
      <h1>About this Site</h1>
      <p>
        <b>
          This page is the result of a passionate 2nd grader and a mom who
          knows a little bit about coding websites.
        </b>
      </p>
      <p>
        Archer's class was given a very special, open-ended assignment to 'Lend
        a Hand' in some way, somewhere. After some serious brainstorming and
        refinements, putting energy towards saving the bees in Los Angeles and
        beyond became the focus of the project.</p><p>This entire site is just a
        portion of the overall project - Archer planned, sourced and assembled 'Save the Bees' packets
        for each member of his class that included sunflower seeds saved from
        our garden, native wildflower seeds that will bloom all year long from a
        local non-profit specializing providing plants native to our region, an
        adorable bee sticker, and some AI generated bee coloring pages.
      </p>
      <p>Everything you see on this site has either been carefully written, created, or found by Archer or mom. <b>We hope you like it!</b></p>
    </div>
    </div>

  );
};
