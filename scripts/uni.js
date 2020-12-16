async function uni() {
  await fetch("https://uni.aadibajpai.workers.dev")
    .then(async (resp) => {
      if (resp.ok) {
        let txt = "Looks like you are from "
        const uni = await resp.text()
        if (uni.toLowerCase().includes("vanderbilt")) txt += "Vanderbilt too"
        else txt += uni.startsWith("University") ? `the ${uni}` : `${uni}`
        txt += ", nice."
        document.getElementById("uni").innerHTML += txt;
      }
    })
    .catch(err => console.log(err));
}

